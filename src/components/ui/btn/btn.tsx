import classNames from 'classnames'
import Link, { LinkProps } from 'next/link'
import { ButtonHTMLAttributes, ForwardedRef, forwardRef, } from 'react'
import BtnContent, { BtnContentProps } from './btn-content'

type HTMLProps = Omit<LinkProps, 'href'> & ButtonHTMLAttributes<HTMLButtonElement>
export interface BtnProps extends HTMLProps, BtnContentProps {
    href?: string
}

const Btn = forwardRef<HTMLAnchorElement | HTMLButtonElement, BtnProps>(({className, iconLeft, iconRight, children, href, ...props}, ref) => {
    const cl = classNames(
        className, 
        'flex items-center justify-center gap-2', 
        'rounded-full bg-black text-white font-body',
        {
            'py-2 px-4': !iconLeft && !iconRight,
            'py-2': iconLeft || iconRight,
            'pl-2': iconLeft,
            'pl-4': !iconLeft,
            'pr-2': iconRight,
            'pr-4': !iconRight,
        }
    )
    if (href) {
        <Link className={cl} {...props as LinkProps} ref={ref as ForwardedRef<HTMLAnchorElement>}>
            <BtnContent iconLeft={iconLeft}
iconRight={iconRight}>{children}</BtnContent>
        </Link>
    }
    return (
        <button className={cl} {...props} ref={ref as ForwardedRef<HTMLButtonElement>}>
            <BtnContent iconLeft={iconLeft}
iconRight={iconRight}>{children}</BtnContent>
        </button>
    )
})

export default Btn