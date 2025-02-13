import classNames from 'classnames'
import { FieldsetHTMLAttributes, forwardRef } from 'react'

const Fieldset = forwardRef<
    HTMLFieldSetElement,
    FieldsetHTMLAttributes<HTMLFieldSetElement>
>(({ className, children, ...props }, ref) => {
    const cl = classNames(className)

    return (
        <fieldset className={cl} {...props} ref={ref}>
            {children}
        </fieldset>
    )
})

export default Fieldset
