import classNames from 'classnames'
import { AreaHTMLAttributes, forwardRef } from 'react'

export const clCardPadding = 'p-5 lg:p-8'

const Card = forwardRef<HTMLDivElement, AreaHTMLAttributes<HTMLDivElement>>(
    ({ className, children, ...props }, ref) => {
        const cl = classNames(className, clCardPadding)
        return (
            <div className={cl} ref={ref} {...props}>
                {children}
            </div>
        )
    },
)

export default Card
