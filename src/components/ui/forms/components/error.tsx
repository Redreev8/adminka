import classNames from 'classnames'
import { AreaHTMLAttributes, forwardRef } from 'react'
import { FieldError } from 'react-hook-form'

interface ErrorProps extends AreaHTMLAttributes<HTMLSpanElement> {
    error: FieldError | undefined
}

const Error = forwardRef<HTMLSpanElement, ErrorProps>(
    ({ error, className, ...props }, ref) => {
        const cl = classNames(className, 'text-red')
        return (
            error && (
                <span className={cl} {...props} ref={ref}>
                    {error.message}
                </span>
            )
        )
    },
)

export default Error
