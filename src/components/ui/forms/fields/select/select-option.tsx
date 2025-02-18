'use client'
import { ButtonHTMLAttributes, forwardRef, MouseEvent, useContext } from 'react'
import classNames from 'classnames'
import { SelectContext } from './select'

export interface SelectOptionProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    value: string
    defult?: boolean
}

const SelectOption = forwardRef<HTMLButtonElement, SelectOptionProps>(
    ({ children, onClick, className, value, ...props }, ref) => {
        const { items, selected, setSelected } = useContext(SelectContext)
        const cl = classNames(
            className,
            'w-full p-2 text-left',
            'transition-colors duration-600',
            'hover:text-white hover:bg-black',
            'active:opacity-60',
            {
                'text-white bg-black': items[selected]?.value === value,
                'text-black bg-white': items[selected]?.value !== value,
            },
        )
        const handelClick = (e: MouseEvent<HTMLButtonElement>) => {
            const i = items.findIndex((el) => el.value === value)
            if (i === selected) return
            setSelected(i)
            if (onClick) onClick(e)
        }
        delete props['defult']
        return (
            <button onClick={handelClick} className={cl} ref={ref} {...props}>
                {children}
            </button>
        )
    },
)

export default SelectOption
