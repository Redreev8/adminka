'use client'
import useBorder from '@/hooks/useBorder'
import useUniteRef from '@/hooks/useUniteRef'
import classNames from 'classnames'
import { AreaHTMLAttributes, forwardRef } from 'react'
import { clCardPadding } from './card'

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
    useBorder(refContainer, clCardPadding.split(' '))
    return (
        <div className={cl} ref={refContainer} {...props}>
            {children}
        </div>
    )
})

export default Container
