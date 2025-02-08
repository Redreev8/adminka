import classNames from 'classnames'
import { AreaHTMLAttributes, forwardRef } from 'react'

const Section = forwardRef<HTMLDivElement, AreaHTMLAttributes<HTMLDivElement>>(
    ({ className, children, ...props }, ref) => {
        const cl = classNames(className)
        return (
            <section className={cl} ref={ref} {...props}>
                {children}
            </section>
        )
    },
)

export default Section
