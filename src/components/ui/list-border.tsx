'use client'

import useBorder from '@/components/ui/hooks/useBorder'
import useUniteRef from '@/hooks/useUniteRef'
import classNames from 'classnames'
import { AreaHTMLAttributes, Children, forwardRef } from 'react'
import delPClassName from './helper/del-p-className'

export interface ListBorder extends AreaHTMLAttributes<HTMLUListElement> {
    classNameItem?: string[]
}

const ListBorder = forwardRef<HTMLUListElement, ListBorder>(
    ({ className, children, classNameItem, ...props }, ref) => {
        const refList = useUniteRef<HTMLUListElement>(ref)
        const cl = classNames(delPClassName(className), 'p-0')
        useBorder(refList, classNameItem)

        return (
            <ul className={cl} {...props} ref={refList}>
                {Children.map(children, (child, i) => (
                    <li key={i}>{child}</li>
                ))}
            </ul>
        )
    },
)

export default ListBorder
