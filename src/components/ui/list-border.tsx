'use client'

import useBorder from '@/hooks/useBorder'
import useUniteRef from '@/hooks/useUniteRef'
import { AreaHTMLAttributes, Children, forwardRef } from 'react'

export interface ListBorder extends AreaHTMLAttributes<HTMLUListElement>  {
    classNameItem?: string[]
}

const ListBorder = forwardRef<
    HTMLUListElement,
    ListBorder
>(({ className, children, classNameItem, ...props }, ref) => {
    const refList = useUniteRef<HTMLUListElement>(ref)
    useBorder(refList, classNameItem)

    return (
        <ul className={className} {...props} ref={refList} data-border>
            {Children.map(children, (child, i) => (
                <li key={i}>{child}</li>
            ))}
        </ul>
    )
})

export default ListBorder
