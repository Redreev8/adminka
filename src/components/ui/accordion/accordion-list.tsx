'use client'
import { createContext, FC, HTMLProps, ReactNode, useRef } from 'react'
import classNames from 'classnames'
import useMaxItem, { UseMaxItemReturn } from '../hooks/useMaxItem'
import ListBorder from '../list-border'
interface AccordionListInterface extends HTMLProps<HTMLUListElement> {
    children: ReactNode
    className?: string
    max?: number
}

export const AccordionListContext = createContext<
    UseMaxItemReturn<HTMLDivElement>
>({ itemsActive: [], push: () => {}, remove: () => {} })

const AccordionList: FC<AccordionListInterface> = ({
    children,
    className,
    max = 1,
    ...props
}) => {
    const cl = classNames('flex flex-col', className)
    const ref = useRef<HTMLUListElement>(null)
    const { itemsActive, push, remove } = useMaxItem<HTMLDivElement>(max)
    return (
        <AccordionListContext.Provider value={{ itemsActive, push, remove }}>
            <ListBorder className={cl} ref={ref} {...props}>
                {children}
            </ListBorder>
        </AccordionListContext.Provider>
    )
}

export default AccordionList
