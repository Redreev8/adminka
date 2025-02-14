'use client'
import { JSX, useState } from 'react'

export type UseMaxItemReturn<T = JSX.Element> = {
    itemsActive: T[]
    push: (r: T) => void
    remove: (r: T) => void
}

const useMaxItem = <T = JSX.Element,>(max: number = 1): UseMaxItemReturn<T> => {
    const [itemsActive, setItemsActive] = useState<T[]>([])
    if (max === 0) return { itemsActive: [], push: () => {}, remove: () => {} }
    const push = (r: T) => {
        if (max === 0) return
        setItemsActive((prev) => [...prev, r])
        if (itemsActive.length >= max)
            remove(itemsActive[itemsActive.length - 1])
    }
    const remove = (r: T) => {
        setItemsActive((prev) => prev.filter((el) => el !== r))
    }
    return { itemsActive, push, remove }
}

export default useMaxItem
