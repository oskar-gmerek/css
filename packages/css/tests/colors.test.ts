import { testCSS } from './css'
import { config } from '../../../master.css.js'

test('colors', () => {
    testCSS(
        'fg:primary',
        '.fg\\:primary,.dark .btn,.blue-btn{color:#175fe9}.light .fg\\:primary,.light .blue-btn{color:#ebbb40}.dark .fg\\:primary,.dark .btn,.dark .blue-btn{color:#fbe09d}',
        config
    )
    testCSS(
        'fg:primary-code',
        '.fg\\:primary-code{color:#777777}.dark .fg\\:primary-code{color:#6b6a6d}',
        config
    )
    testCSS(
        'fg:primary-stage-1',
        '.fg\\:primary-stage-1{color:#999999}.light .fg\\:primary-stage-1{color:#888888}.dark .fg\\:primary-stage-1{color:#AAAAAA}',
        config
    )
    testCSS(
        'b:input',
        '.b\\:input{border-color:#123456}',
        config
    )
    testCSS(
        'bg:blue-100',
        '.bg\\:blue-100{background-color:#777}',
        {
            colors: {
                'blue-100': '#777'
            }
        }
    )
    testCSS(
        'bg:primary-alpha',
        '.bg\\:primary-alpha{background-color:#175fe91a}',
        config
    )
    testCSS(
        'bg:primary-rgb1',
        '.bg\\:primary-rgb1{background-color:#000000}',
        config
    )
    testCSS(
        'bg:primary-rgb2',
        '.bg\\:primary-rgb2{background-color:#000000}',
        config
    )
    testCSS(
        'bg:primary-rgb3',
        '.bg\\:primary-rgb3{background-color:#00000080}',
        config
    )
    testCSS(
        'bg:primary-rgb4',
        '.bg\\:primary-rgb4{background-color:#00000080}',
        config
    )
    testCSS(
        'bg:primary-2',
        '.bg\\:primary-2{background-color:#000000b3}',
        config
    )
    testCSS(
        'bg:linear-gradient(180deg,major,gray-60)',
        '.light .bg\\:linear-gradient\\(180deg\\,major\\,gray-60\\){background-image:linear-gradient(180deg,#19212d,#9e9da0)}.dark .bg\\:linear-gradient\\(180deg\\,major\\,gray-60\\){background-image:linear-gradient(180deg,#dad9db,#9e9da0)}',
        config
    )
    testCSS(
        'bg:linear-gradient(180deg,primary,accent)',
        '.light .bg\\:linear-gradient\\(180deg\\,primary\\,accent\\){background-image:linear-gradient(180deg,#000000,#111111)}.dark .bg\\:linear-gradient\\(180deg\\,primary\\,accent\\){background-image:linear-gradient(180deg,#ffffff,#eeeeee)}',
        {
            themes: {
                light: { colors: { primary: '#000000', accent: '#111111' }  },
                dark: { colors: { primary: '#ffffff', accent: '#eeeeee' } }
            }
        }
    )
    testCSS(
        'bg:linear-gradient(180deg,primary,accent)',
        '.dark .bg\\:linear-gradient\\(180deg\\,primary\\,accent\\){background-image:linear-gradient(180deg,#ffffff,#eeeeee)}',
        {
            themes: {
                light: { colors: { primary: '#000000' }  },
                dark: { colors: { primary: '#ffffff', accent: '#eeeeee' } }
            }
        }
    )
    testCSS(
        'bg:linear-gradient(180deg,primary,accent)',
        '.light .bg\\:linear-gradient\\(180deg\\,primary\\,accent\\){background-image:linear-gradient(180deg,#000000,accent)}.dark .bg\\:linear-gradient\\(180deg\\,primary\\,accent\\){background-image:linear-gradient(180deg,#ffffff,accent)}',
        {
            themes: {
                light: { colors: { primary: '#000000' }  },
                dark: { colors: { primary: '#ffffff' } }
            }
        }
    )
    testCSS(
        'bg:linear-gradient(180deg,primary,accent)',
        '.light .bg\\:linear-gradient\\(180deg\\,primary\\,accent\\){background-image:linear-gradient(180deg,#000000,#ff0000)}.dark .bg\\:linear-gradient\\(180deg\\,primary\\,accent\\){background-image:linear-gradient(180deg,#ffffff,#ff0000)}',
        {
            themes: {
                light: { colors: { primary: '#000000' }  },
                dark: { colors: { primary: '#ffffff' } }
            },
            colors: {
                accent: '#ff0000'
            }
        }
    )
    testCSS(
        'bg:linear-gradient(180deg,primary,accent)',
        '.light .bg\\:linear-gradient\\(180deg\\,primary\\,accent\\){background-image:linear-gradient(180deg,#000000,#ff0000)}.dark .bg\\:linear-gradient\\(180deg\\,primary\\,accent\\){background-image:linear-gradient(180deg,#ffffff,#aa0000)}',
        {
            themes: {
                light: { colors: { primary: '#000000' }  },
                dark: { colors: { primary: '#ffffff', accent: '#aa0000' } }
            },
            colors: {
                accent: '#ff0000'
            }
        }
    )
    testCSS(
        '{block;fg:fade}_:where(p)_code:before',
        '.\\{block\\;fg\\:fade\\}_\\:where\\(p\\)_code\\:before :where(p) code:before{display:block}.light .\\{block\\;fg\\:fade\\}_\\:where\\(p\\)_code\\:before :where(p) code:before{color:#cccccc}.dark .\\{block\\;fg\\:fade\\}_\\:where\\(p\\)_code\\:before :where(p) code:before{color:#333333}',
        {
            themes: {
                light: { colors: { fade: '#cccccc' } },
                dark: { colors: { fade: '#333333' } }
            }
        }
    )
})
