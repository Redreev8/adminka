import { ForwardedRef, useEffect, useRef } from 'react'

const useUniteRef = <T extends HTMLElement>(ref: ForwardedRef<T | null>) => {
    const refStart = useRef<T>(null)
    useEffect(() => {
        if (typeof ref === 'function') {
            ref(refStart.current)
        }
        if (typeof ref === 'object') {
            ref = refStart
        }
    }, [])
    return refStart
}

export default useUniteRef
