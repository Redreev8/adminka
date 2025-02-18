'use client'
import {
    AreaHTMLAttributes,
    forwardRef,
    MouseEvent,
    useContext,
} from 'react'
import classNames from 'classnames'
import { SelectContext } from './select'

export interface SelectOptionProps extends AreaHTMLAttributes<HTMLDivElement> {
    value: string
    defult?: boolean
}

const SelectOption = forwardRef<HTMLDivElement, SelectOptionProps>(
    ({ children, onClick, className, value, ...props }, ref) => {
        const { items, selected, setSelected } =
            useContext(SelectContext)
        const cl = classNames('w-full p-2', className)
        const handelClick = (e: MouseEvent<HTMLDivElement>) => {
            const i = items.findIndex((el) => el.value === value)
            if (i === selected) return
            setSelected(i)
            if (onClick) onClick(e)
        }
        return (
            <div onClick={handelClick} className={cl} ref={ref} {...props}>
                {children}
            </div>
        )
    },
)

export default SelectOption
