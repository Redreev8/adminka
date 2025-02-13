import classNames from 'classnames'
import { forwardRef, TextareaHTMLAttributes } from 'react'

const Textarea = forwardRef<
    HTMLTextAreaElement,
    TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, children, ...props }, ref) => {
    const cl = classNames(
        className,
        'border-l border-b border-black rounded-bl-lg pl-2 pb-2',
        'text-base transition-[border-bottom-left-radius, padding-left] duration-300',
        'hover:rounded-bl-[20px] focus:rounded-bl-[20px] focus:outline-none',
        'hover:pl-3 focus:pl-3 resize-none',
    )
    return (
        <textarea className={cl} {...props} ref={ref}>
            {children}
        </textarea>
    )
})

export default Textarea
