'use client'
import {
    AreaHTMLAttributes,
    forwardRef,
    ReactElement,
    useContext,
    useEffect,
    useState,
} from 'react'
import classNames from 'classnames'
import ListBorder from '@/components/ui/list-border'
import useUniteRef from '@/hooks/useUniteRef'
import { SelectContext } from './select'
import { createPortal } from 'react-dom'
import SelectOption, { SelectOptionProps } from './select-option'

export interface SelectListProps
    extends Omit<AreaHTMLAttributes<HTMLUListElement>, 'children'> {
    children: Array<ReactElement<SelectOptionProps>>
}

const SelectList = forwardRef<HTMLUListElement, SelectListProps>(
    ({ children, className, ...props }, ref) => {
        const [translate, setTranslate] = useState<number>(0)
        const { isOpen, selected, refBtn } = useContext(SelectContext)
        const cl = classNames(
            className,
            'absolute max-h-screen overflow-auto',
            'flex flex-col bg-white w-full',
            'bg-white border border-label rounded-bl-lg z-50',
            'transition-visibility duration-300',
            {
                'opacity-0 invisible': !isOpen,
                'opacity-100 visible': isOpen,
            },
        )

        const refList = useUniteRef<HTMLUListElement>(ref)
        useEffect(() => {
            if (!refList.current || !refBtn.current) return
            const corBtn = refBtn.current.getBoundingClientRect()
            refList.current.style.width = refBtn.current.clientWidth + 'px'
            refList.current.style.top = corBtn.top + 'px'
            refList.current.style.left = corBtn.left + 'px'
            const corList = refList.current.getBoundingClientRect()
            const item = refList.current.children[selected] as HTMLLIElement
            let t = item.offsetTop + 8
            if (corBtn.y - t < 0 && t > translate) {
                t = corBtn.y
            }
            if (
                corBtn.y + corList.height - t > window.innerHeight &&
                t <= translate
            ) {
                t = corBtn.y - (window.innerHeight - corList.height)
            }
            setTranslate(() => t)

            return () => {
                setTranslate(0)
            }
        }, [isOpen, selected])
        return createPortal(
            <ListBorder
                style={{ transform: `translateY(${translate * -1}px)` }}
                className={cl}
                ref={(node) => {
                    refList.current = node
                }}
                {...props}
            >
                {children}
            </ListBorder>,
            document.body,
        )
    },
)

export default SelectList
