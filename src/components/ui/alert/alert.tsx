import classNames from 'classnames'
import { AreaHTMLAttributes, forwardRef } from 'react'

export interface AlertProps extends AreaHTMLAttributes<HTMLDivElement> {
    idAlert: string
}

const Alert = forwardRef<HTMLDivElement, AlertProps>(
    ({ className, children, idAlert, ...props }, ref) => {
        const cl = classNames(
            className,
            'bg-white text-black',
            'py-2 pl-4 pr-8 border border-label',
        )
        return (
            <div className={cl} ref={ref} {...props} data-alert={idAlert}>
                {children}
            </div>
        )
    },
)

export default Alert
