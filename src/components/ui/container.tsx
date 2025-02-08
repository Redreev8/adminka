'use client'
import useBorder from '@/hooks/useBorder'
import classNames from 'classnames'
import { AreaHTMLAttributes, forwardRef, useEffect, useRef } from 'react'

const Container = forwardRef<
    HTMLDivElement,
    AreaHTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
    const cl = classNames(
        className,
        '2xl:max-w-[1600px] h-[100vh] w-full 2xl:mx-auto',
        'lg:w-[calc(100%-80px)] lg:mx-10',
        'w-[calc(100%-40px)] mx-5',
        'border-x border-label',
        'grid grid-cols-3',
    )
    const refContainer = useRef<HTMLDivElement>(null)
    useBorder(refContainer)
    useEffect(() => {
        if (typeof ref === 'function') {
            ref(refContainer.current)
        }
        if (typeof ref === 'object') {
            ref = refContainer
        }
    }, [])
    return (
        <div className={cl} ref={refContainer} {...props}>
            {children}
        </div>
    )
})

export default Container
