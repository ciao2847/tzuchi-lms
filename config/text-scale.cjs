const absoluteLength = /^(?:\d*\.)?\d+(?:px|rem)$/i

module.exports = {
    postcssPlugin: 'lms-text-scale',
    OnceExit(root) {
        root.walkDecls(/^(font-size|line-height)$/, declaration => {
            const { prop, value } = declaration
            if (!absoluteLength.test(value)) return

            declaration.value = prop === 'font-size'
                ? `calc(${value} * var(--lms-text-scale, 1))`
                : `max(${value}, var(--lms-min-line-height, 0em))`
        })
    }
}
