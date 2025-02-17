'use client'
import {
    AreaHTMLAttributes,
    forwardRef,
    useContext,
    useEffect,
    useState,
} from 'react'
import classNames from 'classnames'
import ListBorder from '@/components/ui/list-border'
import useUniteRef from '@/hooks/useUniteRef'
import { SelectContext } from './select'

const SelectList = forwardRef<
    HTMLUListElement,
    AreaHTMLAttributes<HTMLUListElement>
>(({ children, className, ...props }, ref) => {
    const [translate, setTranslate] = useState<number>(0)
    const { isOpen, selected } = useContext(SelectContext)
    const cl = classNames(
        className,
        'absolute top-0 left-0 max-h-screen overflow-auto',
        'flex flex-col bg-white w-full',
        'border border-label rounded-bl-lg',
        'transition-[transform, visibility, opacity] duration-300',
        {
            'opacity-0 invisible': !isOpen,
            'opacity-100 visible': isOpen,
        },
    )

    const refList = useUniteRef<HTMLUListElement>(ref)

    useEffect(() => {
        if (!refList.current) return
        const item = refList.current.children[selected] as HTMLLIElement
        const corList = refList.current.getBoundingClientRect()
        let t = item.offsetTop + 8
        if (corList.y + translate - t < 0 && t > translate) {
            console.log('top')
            t = translate + corList.y
        }
        if (
            translate + corList.y + corList.height - t > window.innerHeight &&
            t <= translate
        ) {
            t = translate + corList.y - (window.innerHeight - corList.height)
        }
        setTranslate(() => t)
        return () => {
            setTranslate(0)
        }
    }, [selected, refList.current])
    return (
        <ListBorder
            style={{ transform: `translateY(${translate * -1}px)` }}
            className={cl}
            ref={(node) => {
                refList.current = node
            }}
            {...props}
        >
            {children}
        </ListBorder>
    )
})

export default SelectList
