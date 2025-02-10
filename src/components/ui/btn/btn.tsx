import classNames from 'classnames'
import Link, { LinkProps } from 'next/link'
import {
    ButtonHTMLAttributes,
    ForwardedRef,
    forwardRef,
    ReactNode,
} from 'react'
import BtnContent from './btn-content'
import icons from '../icon'

type HTMLProps = Omit<LinkProps, 'href'> &
    ButtonHTMLAttributes<HTMLButtonElement>
export interface BtnProps extends HTMLProps {
    href?: string
    isOutline?: boolean
    color?: 'red' | 'yellow' | 'green' | 'black'
    iconLeft?: keyof typeof icons
    iconRight?: keyof typeof icons
    children?: ReactNode
}

const Btn = forwardRef<HTMLAnchorElement | HTMLButtonElement, BtnProps>(
    (
        {
            className,
            iconLeft,
            iconRight,
            children,
            href,
            color = 'black',
            isOutline,
            ...props
        },
        ref,
    ) => {
        const cl = classNames(
            className,
            'flex items-center justify-center gap-2',
            'rounded-lg hover:rounded-[60px] font-body border-2',
            'active:opacity-60',
            'transition-[border-radius, opacity] duration-300',
            {
                'py-2 px-4': !iconLeft && !iconRight,
                'py-2': iconLeft || iconRight,
                'pl-2': iconLeft,
                'pl-4': !iconLeft && children,
                'pr-2': iconRight,
                'pr-4': !iconRight && children,
                'px-2': !children,
                'text-black border-black': isOutline && color === 'black',
                'bg-black text-white border-black':
                    !isOutline && color === 'black',
                'text-red border-red': isOutline && color === 'red',
                'bg-red text-white border-red': !isOutline && color === 'red',
                'text-yellow border-yellow': isOutline && color === 'yellow',
                'bg-yellow text-black border-yellow':
                    !isOutline && color === 'yellow',
                'text-green border-green': isOutline && color === 'green',
                'bg-green text-black border-green':
                    !isOutline && color === 'green',
            },
        )
        const Content = (
            <BtnContent
                isOutline={isOutline}
                iconLeft={iconLeft}
                iconRight={iconRight}
            >
                {children}
            </BtnContent>
        )
        if (href) {
            return (
                <Link
                    className={cl}
                    {...(props as LinkProps)}
                    ref={ref as ForwardedRef<HTMLAnchorElement>}
                >
                    {Content}
                </Link>
            )
        }
        return (
            <button
                className={cl}
                {...props}
                ref={ref as ForwardedRef<HTMLButtonElement>}
            >
                {Content}
            </button>
        )
    },
)

export default Btn
