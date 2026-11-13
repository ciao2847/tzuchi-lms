import React, { useMemo } from 'react'
import { parseDocument } from 'htmlparser2'

const CONTENT_TAGS = new Set(['p', 'div', 'span', 'br', 'ul', 'ol', 'li', 'strong', 'b', 'em', 'i', 'u', 's', 'blockquote', 'h2', 'h3', 'h4', 'table', 'thead', 'tbody', 'tr', 'th', 'td'])
const OMIT_TAGS = new Set(['script', 'style', 'iframe', 'object', 'embed', 'svg', 'math', 'template', 'form', 'input', 'button', 'textarea', 'select'])

// Copy content tags only; React escapes text. Never copy API attributes or URLs.
const renderContent = nodes => nodes.map((node, index) => {
    if (node.type === 'text') return node.data
    if (node.type !== 'tag' || OMIT_TAGS.has(node.name)) return null
    const children = renderContent(node.children || [])
    if (!CONTENT_TAGS.has(node.name)) return <React.Fragment key={index}>{children}</React.Fragment>
    return React.createElement(node.name, { key: index }, node.name === 'br' ? undefined : children)
})

const CourseHtml = ({ html }) => {
    const content = useMemo(() => renderContent(parseDocument(typeof html === 'string' ? html : '').children), [html])
    return <div className="break-words whitespace-pre-line text-[11px] font-medium leading-5 text-primary md:text-[12px] xl:text-[14px] xl:leading-6 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_p+p]:mt-2 [&_table]:w-full [&_table]:border-collapse [&_td]:border [&_td]:p-2 [&_th]:border [&_th]:p-2">
        {typeof html === 'string' && html.trim() ? content : '—'}
    </div>
}

export default CourseHtml
