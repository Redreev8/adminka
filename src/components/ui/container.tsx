'use client'
import useBorder from '@/components/ui/hooks/useBorder'
import useUniteRef from '@/hooks/useUniteRef'
import classNames from 'classnames'
import {
    AreaHTMLAttributes,
    Children,
    cloneElement,
    forwardRef,
    isValidElement,
    ReactElement,
    ReactNode,
} from 'react'
import { clCardPadding } from './card'

export interface ContainerSettings {
    isBorder?: boolean
}

const Container = forwardRef<
    HTMLDivElement,
    AreaHTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
    const cl = classNames(
        className,
        '2xl:max-w-[1600px] 2xl:w-full 2xl:mx-auto',
        'lg:w-[calc(100%-80px)] lg:mx-10',
        'w-[calc(100%-40px)] min-h-[inherit] mx-5',
        'border-x border-b border-label',
    )
    const refContainer = useUniteRef<HTMLDivElement>(ref)
    useBorder(refContainer)
    const getConteint = (child: ReactNode) => {
        if (!child) return
        if (!isValidElement(child))
            return <div className={clCardPadding}>{child}</div>
        const { className, ...props } = child.props as { className?: string }
        const cl = classNames(className, clCardPadding)
        return cloneElement(child as ReactElement<{ className?: string }>, {
            ...props,
            className: cl!,
        })
    }
    return (
        <div className={cl} ref={refContainer} {...props}>
            {Children.map(children, getConteint)}
        </div>
    )
})

export default Container
