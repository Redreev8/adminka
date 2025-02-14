'use client'
import { cloneElement, FC, JSX, useContext } from 'react'
import { AccordionContext } from './accordion'
import classNames from 'classnames'

interface AccordionTitleProps {
    children: JSX.Element
}

const AccordionTitle: FC<AccordionTitleProps> = ({ children }) => {
    const toggle = useContext(AccordionContext)[1]
    const { onClick, className, ...props } = children.props
    const cl = classNames(className, 'cursor-pointer w-full')
    const handelClick = (e: Event) => {
        if (onClick) onClick(e)
        toggle()
    }
    return cloneElement(children, {
        ...props,
        className: cl,
        onClick: handelClick,
    })
}

export default AccordionTitle
