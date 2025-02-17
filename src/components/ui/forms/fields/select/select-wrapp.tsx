import classNames from 'classnames'
import { AreaHTMLAttributes, forwardRef } from 'react'

const SelectWrapp = forwardRef<
    HTMLDivElement,
    AreaHTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
    const cl = classNames(className, 'relative')
    return (
        <div className={cl} {...props} ref={ref}>
            {children}
        </div>
    )
})

export default SelectWrapp
