'use client'
import { Children, FormHTMLAttributes, forwardRef } from 'react'
import useBorder from '../hooks/useBorder'
import useUniteRef from '@/hooks/useUniteRef'
import classNames from 'classnames'
import delPClassName from '../helper/del-p-className'
import getConteintCardItem from '../helper/get-content-card-items'

export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {}

const Form = forwardRef<HTMLFormElement, FormProps>(
    ({ className, children, ...props }, ref) => {
        const refForm = useUniteRef(ref)
        const cl = classNames(delPClassName(className), 'p-0')
        useBorder(refForm)
        return (
            <form className={cl} {...props} ref={refForm}>
                {Children.map(children, (child) => getConteintCardItem(child))}
            </form>
        )
    },
)

export default Form
