import classNames from 'classnames'
import { AreaHTMLAttributes, forwardRef } from 'react'

export interface SectionProps extends AreaHTMLAttributes<HTMLDivElement> {
    isDark?: boolean
}

const Section = forwardRef<HTMLDivElement, SectionProps>(
    ({ className, children, isDark, ...props }, ref) => {
        const cl = classNames(className, {
            '': isDark,
        })
        return (
            <section
                className={cl}
                ref={ref}
                data-theme={isDark ? 'dark' : ''}
                {...props}
            >
                {children}
            </section>
        )
    },
)

export default Section
