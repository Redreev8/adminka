'use client'
import classNames from 'classnames'
import {
    AreaHTMLAttributes,
    Children,
    forwardRef,
    ReactElement,
    useEffect,
    useState,
} from 'react'
import { AlertProps } from './alert'
import useUniteRef from '@/hooks/useUniteRef'

export interface ListBorder
    extends Omit<AreaHTMLAttributes<HTMLUListElement>, 'children'> {
    classNameItem?: string[]
    children?: Array<ReactElement<AlertProps>>
}

const getGridRows = (number: number, value: string[]) => {
    return value.join(' ')
}

const AlertList = forwardRef<HTMLUListElement, ListBorder>(
    ({ className, children = [], ...props }, ref) => {
        const cl = classNames(
            className,
            'fixed top-0 right-1/2 translate-x-[50%]',
            '2xl:max-w-[1600px] 2xl:w-full',
            'lg:w-[calc(100%-80px)]',
            'w-[calc(100%-40px)] min-h-[inherit]',
            'grid justify-items-end',
            'transition[grid-template-rows] duration-300',
        )
        const [widthRow, setWidthRow] = useState<string[]>([])
        const [alerts, setAlerts] = useState<Array<ReactElement<AlertProps>>>(
            [],
        )
        const refList = useUniteRef<HTMLUListElement>(ref)
        const open = () => {
            const grid: string[] = []
            for (let i = 0; i < refList.current!.children.length; i++) {
                const { firstChild } = refList.current!.children[
                    i
                ] as HTMLElement
                if (!firstChild && typeof firstChild === 'object') continue
                grid.push(`${(firstChild as HTMLElement).offsetHeight - 4}px`)
            }
            return setWidthRow(grid)
        }
        const close = () =>
            setWidthRow((prev) =>
                Array.from({ length: prev.length }, () => '16px'),
            )
        useEffect(() => {
            const alerts: Array<ReactElement<AlertProps>> = []
            const grid: string[] = []
            Children.forEach(children, (child) => {
                const { idAlert } = child.props
                grid.push('16px')
                alerts.push(
                    <li
                        onMouseOver={open}
                        onMouseOut={close}
                        onTouchStart={open}
                        onTouchEnd={close}
                        key={idAlert}
                    >
                        {child}
                    </li>,
                )
            })
            setAlerts(alerts)
            setWidthRow(grid)
        }, [children])
        if (children.length === 0) return
        return (
            <ul
                className={cl}
                style={{
                    gridTemplateRows: getGridRows(children.length, widthRow),
                }}
                {...props}
                ref={refList}
            >
                {alerts}
            </ul>
        )
    },
)

export default AlertList
