import { useEffect, useState } from 'react'

const useRender = (isStart: boolean) => {
    const [isTransition, setTransition] = useState<boolean>(false)
    const [isRendern, setIsRender] = useState<boolean>(false)
    useEffect(() => {
        if (isStart) {
            setIsRender(() => true)
            setTransition(() => true)
        }
        if (!isStart) {
            setTransition(() => false)
        }
    }, [isStart])
    const handelTransitionEnd = () => {
        if (!isTransition) {
            setIsRender(() => false)
        }
    }

    return {
        isRendern,
        isTransition,
        handelTransitionEnd,
    }
}

export default useRender
