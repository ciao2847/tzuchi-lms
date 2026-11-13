const assert = require('node:assert/strict')
const path = require('node:path')
const Module = require('node:module')
const React = require('react')
const { renderToStaticMarkup } = require('react-dom/server')
const file = path.resolve('src/views/change-password/index.js')
const mod = new Module(file, module)
mod.filename = file; mod.paths = module.paths
let dialogs = [], confirmed = false, requests = []
const original = mod.require.bind(mod)
mod.require = id => ({
    react: { ...React, useContext: () => ({ user: { mail: 'user@example.com', account: 'user' } }), useId: () => 'change-test', useState: value => [value, () => {}] },
    'api/auth': { changePassword: async payload => { requests.push(payload) } },
    sweetalert: async options => { dialogs.push(options); return confirmed },
    'contexts/LoginProvider': { LoginContext: {} },
    'components/Link': ({ href, children, ...props }) => React.createElement('a', { href, ...props }, children)
}[id] || original(id))
mod._compile(require('@babel/core').transformFileSync(file).code, file)
const { default: Page, validatePasswordChange: validate } = mod.exports
const valid = { oldPassword: 'old password1', newPassword: 'new password2', confirmPassword: 'new password2' }
assert.equal(validate(valid), '')
assert(validate({ ...valid, oldPassword: '' }))
assert(validate({ ...valid, newPassword: '   ', confirmPassword: '   ' }))
assert(validate({ ...valid, newPassword: valid.oldPassword, confirmPassword: valid.oldPassword }))
assert(validate({ ...valid, confirmPassword: 'mismatch' }))
const find = (node, type) => {
    if (!React.isValidElement(node)) return null
    if (node.type === type) return node
    for (const child of React.Children.toArray(node.props.children)) { const found = find(child, type); if (found) return found }
    return null
}
async function main() {
    const tree = Page()
    const html = renderToStaticMarkup(tree)
    assert(html.includes('user@example.com'))
    assert.equal((html.match(/type="password"/g) || []).length, 3)
    const submit = find(tree, 'form').props.onSubmit
    const previousFormData = global.FormData
    global.FormData = class { constructor(form) { return Object.entries(form.values) } }
    try {
        let resets = 0
        const form = { values: valid, reset: () => resets++ }
        const event = { preventDefault() {}, currentTarget: form }
        form.values = { ...valid, confirmPassword: 'mismatch' }
        await submit(event)
        assert.equal(dialogs.length, 1)
        assert.equal(dialogs[0].icon, 'warning')
        assert.equal(resets, 0)
        dialogs = []; form.values = valid
        await submit(event)
        assert.equal(dialogs.length, 1)
        assert(dialogs[0].buttons.cancel)
        assert.equal(resets, 0, 'Cancel keeps fields for review')
        dialogs = []; confirmed = true
        await submit(event)
        assert.equal(dialogs.length, 2)
        assert.equal(dialogs[1].icon, 'success')
        assert.deepEqual(requests, [{ uid: 'user', oldpwd: valid.oldPassword, newpwd: valid.newPassword }])
        assert.equal(resets, 1)
    } finally { global.FormData = previousFormData }
    console.log('PASS: password fields, notification email, validation, confirmation/cancel and API success')
}
main().catch(error => { console.error(error); process.exitCode = 1 })
