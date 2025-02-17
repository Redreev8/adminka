import classNames from 'classnames'
import { forwardRef, InputHTMLAttributes } from 'react'

const Input = forwardRef<
    HTMLInputElement,
    InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
    const cl = classNames(
        className,
        'border-l h-[33px] border-b border-black rounded-bl-lg pl-2 pb-2',
        'text-base transition-[border-bottom-left-radius, padding-left] duration-300',
        'hover:rounded-bl-[20px] focus:rounded-bl-[20px] focus:outline-none',
        'hover:pl-3 focus:pl-3',
    )
    return <input className={cl} {...props} ref={ref} />
})

export default Input
