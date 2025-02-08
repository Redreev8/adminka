import { ForwardedRef } from "react";

const getRefs = <T extends HTMLElement>(node: T | null, arrRef: ForwardedRef<T>[]) => {
    for (let i = 0; i < arrRef.length; i++) {
        let ref = arrRef[i] as ForwardedRef<T>
        if (typeof ref === 'function') {
            ref(node)
            continue
        }
        if (typeof ref === 'object') {
            ref = { current: node }
        }
    }
}

export default getRefs