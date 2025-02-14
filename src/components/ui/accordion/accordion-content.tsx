'use client'
import { FC, HTMLProps, ReactNode, useContext } from 'react'
import classNames from 'classnames'
import { AccordionContext } from './accordion'
interface AccordionContentProps extends HTMLProps<HTMLDivElement> {
    className?: string
    children: ReactNode
}

const AccordionContent: FC<AccordionContentProps> = ({
    children,
    className,
    ...props
}) => {
    const isOpen = useContext(AccordionContext)[0]
    const cl = classNames(
        'grid grid-rows-[0fr] overflow-hidden',
        'transition[grid-template-rows] duration-300',
        className,
        {
            'grid-rows-[1fr]': isOpen,
        },
    )

    return (
        <div className={cl} aria-hidden={!isOpen} {...props}>
            <div className="min-h-0">{children}</div>
        </div>
    )
}

export default AccordionContent
