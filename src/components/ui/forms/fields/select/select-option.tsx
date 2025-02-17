'use client'
import {
    AreaHTMLAttributes,
    forwardRef,
    MouseEvent,
    useContext,
    useEffect,
} from 'react'
import classNames from 'classnames'
import { SelectContext } from './select'

interface SelectOptionProps extends AreaHTMLAttributes<HTMLDivElement> {
    value: string
    defult?: boolean
}

const SelectOption = forwardRef<HTMLDivElement, SelectOptionProps>(
    ({ children, onClick, className, value, defult, ...props }, ref) => {
        const { items, selected, setItems, setSelected } =
            useContext(SelectContext)
        const cl = classNames('w-full p-2', className)
        useEffect(() => {
            setItems((prev) => [...prev, { value, children, title: value }])
        }, [])
        useEffect(() => {
            if (defult && items.length !== 0) {
                setSelected(
                    items.findIndex(
                        (el) => el && el.value && el.value === value,
                    ),
                )
            }
        }, [items])
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
