import classNames from 'classnames'
import { AreaHTMLAttributes, forwardRef } from 'react'

const Legend = forwardRef<
    HTMLLegendElement,
    AreaHTMLAttributes<HTMLLegendElement>
>(({ className, children, ...props }, ref) => {
    const cl = classNames(className, 'text-xl font-bold absolute top-0 left-0')

    return (
        <legend className={cl} {...props} ref={ref}>
            <span className="bg-white px-1">{children}</span>
        </legend>
    )
})

export default Legend
