'use client'
import { cloneElement, FC, JSX, useContext } from 'react'
import { AccordionContext } from './accordion'
import classNames from 'classnames'

interface AccordionTitleProps {
    children: JSX.Element
    ariaLabel?: {
        close: ''
        open: ''
    }
}

const defultAriaLabel = {
    close: 'Close content',
    open: 'Open content',
}

const AccordionTitle: FC<AccordionTitleProps> = ({
    children,
    ariaLabel = defultAriaLabel,
}) => {
    const [isOpen, toggle] = useContext(AccordionContext)
    const { onClick, className, ...props } = children.props
    const cl = classNames(className, 'cursor-pointer w-full')
    const handelClick = (e: Event) => {
        if (onClick) onClick(e)
        toggle()
    }
    return cloneElement(children, {
        ...props,
        className: cl,
        ariaLabel: ariaLabel[isOpen ? 'close' : 'open'],
        onClick: handelClick,
    })
}

export default AccordionTitle
