'use client'
import classNames from 'classnames'
import {
    ButtonHTMLAttributes,
    FocusEvent,
    forwardRef,
    MouseEvent,
    useContext,
    useEffect,
} from 'react'
import { SelectContext } from './select'

const SelectBtn = forwardRef<
    HTMLButtonElement,
    ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, className, onClick, onBlur, ...props }, ref) => {
    const { refBtn, refSelect, items, selected, setIsOpen } =
        useContext(SelectContext)
    const cl = classNames(
        className,
        'h-[33px] text-left w-full border-l border-b border-black rounded-bl-lg pl-2 pb-2',
        'text-base transition-[border-bottom-left-radius, padding-left] duration-300',
        'hover:rounded-bl-[20px] focus:rounded-bl-[20px] focus:outline-none',
        'hover:pl-3 focus:pl-3',
    )
    const handelClick = (e: MouseEvent<HTMLButtonElement>) => {
        setIsOpen(() => true)
        if (onClick) onClick(e)
    }
    const handelBlur = (e: FocusEvent<HTMLButtonElement>) => {
        setIsOpen(() => false)
        refSelect.current?.focus()
        if (onBlur) onBlur(e)
    }
    const getContent = () => {
        if (items.length === 0) return children
        return items[selected].children
    }
    useEffect(() => {
        if (typeof ref === 'function') {
            ref(refBtn.current)
        }
        if (typeof ref === 'object') {
            ref = refBtn
        }
    }, [refBtn.current])
    return (
        <button
            type="button"
            onClick={handelClick}
            onBlur={handelBlur}
            className={cl}
            {...props}
            ref={refBtn}
        >
            {getContent()}
        </button>
    )
})

export default SelectBtn
