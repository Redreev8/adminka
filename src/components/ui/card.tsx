import classNames from 'classnames'
import { AreaHTMLAttributes, forwardRef } from 'react'

const Card = forwardRef<HTMLDivElement, AreaHTMLAttributes<HTMLDivElement>>(
    ({ className, children, ...props }, ref) => {
        const cl = classNames(className, 'p-4')
        return (
            <div className={cl} ref={ref} {...props}>
                {children}
            </div>
        )
    },
)

export default Card
