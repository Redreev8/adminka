'use client'

const positionChildToParent = (parent: HTMLElement, child: HTMLElement) => {
    const parentPos = parent.getBoundingClientRect()
    const childPos = child.getBoundingClientRect()
    const top = childPos.top - parentPos.top
    const bottom = parentPos.height - top - childPos.height
    const left = childPos.left - parentPos.left
    const right = parentPos.width - left - childPos.width
    return {
        top: top,
        left: left,
        right: right,
        bottom: bottom,
        height: childPos.height,
        width: childPos.width,
        parentHeight: parentPos.height,
        parentWidth: parentPos.width,
    }
}

export default positionChildToParent
