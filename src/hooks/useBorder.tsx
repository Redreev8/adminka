'use client'
import positionChildToParent from '@/helper/position-child-to-parent'
import { RefObject, useLayoutEffect } from 'react'

export const getBorderChildren = <T extends HTMLElement>(box: T) => {
    const childrens = box.children
    if (!childrens || childrens.length === 0) return
    for (let i = 0; i < childrens.length; i++) {
        const child = childrens[i] as HTMLElement
        const position = positionChildToParent(box, child)
        let isBorder: boolean = false
        if (position.height + position.top < position.parentHeight - 1) {
            isBorder = true
            child.classList.add('border-b')
        }
        if (
            position.left > 0 &&
            position.width + position.left < position.parentWidth - 1
        ) {
            isBorder = true
            child.classList.add('border-r')
        }
        if (i === 2) {
            console.log(position.width + position.left)
            console.log(position.parentWidth + 1)
        }
        if (isBorder) child.classList.add('border-label')
    }
}

const useBorder = <T extends HTMLElement>(boxRef: RefObject<T | null>) => {
    useLayoutEffect(() => {
        if (boxRef.current) {
            getBorderChildren<T>(boxRef.current)
            window.addEventListener('resize', () => getBorderChildren<T>(boxRef!.current!))
        }

        return () => {
            if (boxRef.current) {
                getBorderChildren<T>(boxRef.current)
                window.removeEventListener('resize', () => getBorderChildren<T>(boxRef!.current!))
            }
        }
    }, [])
}

export default useBorder
