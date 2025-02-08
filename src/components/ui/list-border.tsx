'use client'

import useBorder from '@/hooks/useBorder'
import useUniteRef from '@/hooks/useUniteRef'
import { AreaHTMLAttributes, Children, forwardRef } from 'react'

const ListBorder = forwardRef<
    HTMLUListElement,
    AreaHTMLAttributes<HTMLUListElement>
>(({ className, children, ...props }, ref) => {
    const refList = useUniteRef<HTMLUListElement>(ref)
    useBorder(refList)

    return (
        <ul className={className} {...props} ref={refList}>
            {Children.map(children, (child, i) => (
                <li key={i}>{child}</li>
            ))}
        </ul>
    )
})

export default ListBorder
