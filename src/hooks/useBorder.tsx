'use client'
import { RefObject, useLayoutEffect } from 'react'

const positionChildToParent = (parent: HTMLElement, child: HTMLElement) => {
    const parentPos = parent.getBoundingClientRect()
    const childPos = child.getBoundingClientRect()
    return {
        top: childPos.top - parentPos.top,
        right: childPos.right - parentPos.right * -1,
        bottom: childPos.bottom - parentPos.bottom * -1,
        left: childPos.left - parentPos.left,
        height: childPos.height,
        width: childPos.width,
        parentHeight: parentPos.height,
        parentWidth: parentPos.width,
    }
}

const useBorder = <T extends HTMLElement>(boxRef: RefObject<T | null>) => {
    const getBorderChildren = (box: T) => {
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
    useLayoutEffect(() => {
        if (boxRef.current) getBorderChildren(boxRef.current)
    }, [])
}

export default useBorder
