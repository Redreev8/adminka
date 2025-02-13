'use client'
import useBorder from '@/components/ui/hooks/useBorder'
import useUniteRef from '@/hooks/useUniteRef'
import classNames from 'classnames'
import { AreaHTMLAttributes, Children, forwardRef } from 'react'
import getConteintCardItem from './helper/get-content-card-items'

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

    return (
        <div className={cl} ref={refContainer} {...props}>
            {Children.map(children, (child) => getConteintCardItem(child))}
        </div>
    )
})

export default Container
