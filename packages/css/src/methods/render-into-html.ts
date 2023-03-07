import type { Config } from '../config'
import { renderFromHTML } from './render-from-html'

export function renderIntoHTML(html: string, config?: Config): string {
    if (!html) return
    return html
        .replace(/(<link[^>]*?rel="styleSheet".*?>|<style.*?>|<\/head>)/, `<style title="master">${renderFromHTML(html, config)}</style>$1`)
}