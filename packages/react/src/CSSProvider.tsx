'use client'

import { Config, MasterCSS } from '@master/css'
import { useEffect, useLayoutEffect, Context, createContext, useContext, EffectCallback, DependencyList, useState } from 'react'

const { instances } = MasterCSS

const useIsomorphicEffect: (effect: EffectCallback, deps?: DependencyList) => void =
    typeof window !== 'undefined' ? useLayoutEffect : useEffect
export const CSSContext: Context<MasterCSS> = createContext<MasterCSS>(null)

export function useCSS() {
    return useContext(CSSContext)
}

const CSSProvider = ({
    children,
    config,
    root = typeof document !== 'undefined' ? document : null
}: {
    children: React.ReactNode,
    config?: Config | Promise<any>,
    root?: Document | ShadowRoot | null
}) => {
    const existingCSS = instances.find((eachCSS) => eachCSS.root === root)
    const [css, setCSS] = useState<MasterCSS>(existingCSS)
    useIsomorphicEffect(() => {
        if (!css) {
            (async () => {
                const configModule = await config
                const resolvedConfig = configModule?.config || configModule?.default || configModule
                setCSS(new MasterCSS(resolvedConfig))
            })()
        } else if (!css.observing) {
            css.observe(root)
        }

        return () => {
            css?.disconnect()
        }
    }, [config, css, root])
    return <CSSContext.Provider value={css}>{children}</CSSContext.Provider>
}
export default CSSProvider