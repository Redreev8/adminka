import classNames from 'classnames'
import { forwardRef, LabelHTMLAttributes } from 'react'

const Label = forwardRef<
    HTMLLabelElement,
    LabelHTMLAttributes<HTMLLabelElement>
>(({ className, children, ...props }, ref) => {
    const cl = classNames(className, 'flex flex-col gap-2')
    return (
        <label className={cl} {...props} ref={ref}>
            {children}
        </label>
    )
})

export default Label
