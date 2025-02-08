'use client'
import positionChildToParent from '@/helper/position-child-to-parent'
import { RefObject, useLayoutEffect } from 'react'

export const getBorderChildren = <T extends HTMLElement>(
    box: T,
    classNames: string[] = [],
) => {
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
            position.left >= 0 &&
            position.width + position.left < position.parentWidth - 1
        ) {
            isBorder = true
            child.classList.add('border-r')
        }
        if (isBorder) child.classList.add('border-label')
        if ('border' in child.dataset) continue
        child.classList.add('border-label', ...classNames)
    }
}

const useBorder = <T extends HTMLElement>(
    boxRef: RefObject<T | null>,
    classNames: string[] = [],
) => {
    useLayoutEffect(() => {
        if (boxRef.current) {
            getBorderChildren<T>(boxRef.current, classNames)
            window.addEventListener('resize', () =>
                getBorderChildren<T>(boxRef!.current!, classNames),
            )
        }

        return () => {
            if (boxRef.current) {
                getBorderChildren<T>(boxRef.current)
                window.removeEventListener('resize', () =>
                    getBorderChildren<T>(boxRef!.current!, classNames),
                )
            }
        }
    }, [])
}

export default useBorder
