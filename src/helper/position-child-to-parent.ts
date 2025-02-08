'use client'

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

export default positionChildToParent
