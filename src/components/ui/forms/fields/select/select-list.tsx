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
import { SelectOptionProps } from './select-option'
import useRender from '@/components/ui/hooks/useRender'

export interface SelectListProps
    extends Omit<AreaHTMLAttributes<HTMLUListElement>, 'children'> {
    children: Array<ReactElement<SelectOptionProps>>
}

const SelectList = forwardRef<HTMLUListElement, SelectListProps>(
    ({ children, className, ...props }, ref) => {
        const [translate, setTranslate] = useState<number>(0)
        const { isOpen, selected, refBtn } = useContext(SelectContext)
        const { isRendern, isTransition, handelTransitionEnd } =
            useRender(isOpen)
        const cl = classNames(
            className,
            'absolute top-0 left-0 max-h-screen overflow-auto',
            'flex flex-col bg-white w-full',
            'bg-white border border-label rounded-bl-lg z-50',
            'duration-300',
            {
                'opacity-0 invisible transition-visibility-transform':
                    !isTransition,
                'opacity-100 visible transition-visibility': isTransition,
            },
        )

        const refList = useUniteRef<HTMLUListElement>(ref)
        useEffect(() => {
            if (!refList.current || !refBtn.current) return
            const corBtn = refBtn.current.getBoundingClientRect()
            refList.current.style.width = refBtn.current.clientWidth + 'px'
            refList.current.style.top = corBtn.top + window.scrollY + 'px'
            refList.current.style.left = corBtn.left + 'px'
            const corList = refList.current.getBoundingClientRect()
            const item = refList.current.children[selected] as HTMLLIElement
            let t = item.offsetTop + 8
            if (corBtn.top + window.scrollY - t < 0 && t > translate) {
                t = corBtn.top + window.scrollY
            }
            if (
                corBtn.top + window.scrollY + corList.height - t >
                    window.innerHeight &&
                t <= translate
            ) {
                t =
                    corBtn.top +
                    window.scrollY -
                    (window.innerHeight - corList.height)
            }
            setTranslate(() => t)

            return () => {
                setTranslate(0)
            }
        }, [isRendern, selected, isOpen])
        if (!isRendern) return
        return createPortal(
            <ListBorder
                style={{ transform: `translateY(${translate * -1}px)` }}
                className={cl}
                onTransitionEnd={handelTransitionEnd}
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
