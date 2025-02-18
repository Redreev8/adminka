import classNames from 'classnames'
import { AreaHTMLAttributes, forwardRef, ReactElement } from 'react'
import SelectBtn from './select-btn'
import { SelectListProps } from './select-list'

export interface SelectWrappProps
    extends Omit<AreaHTMLAttributes<HTMLDivElement>, 'children'> {
    children: [ReactElement<typeof SelectBtn>, ReactElement<SelectListProps>]
}

const SelectWrapp = forwardRef<HTMLDivElement, SelectWrappProps>(
    ({ className, children, ...props }, ref) => {
        const cl = classNames(className, 'relative')
        return (
            <div className={cl} {...props} ref={ref}>
                {children}
            </div>
        )
    },
)

export default SelectWrapp
