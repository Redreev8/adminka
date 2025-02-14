'use client'
import useBoolean from '../hooks/useBoolean'
import { useContext, useEffect, useRef } from 'react'
import { AccordionListContext } from './accordion-list'
import { AccordionContextItems, AccordionProps } from './accordion'

const useAccordion = (
    isActive: AccordionProps['isActive'],
): AccordionContextItems => {
    const { itemsActive, push, remove } = useContext(AccordionListContext)
    const [value, toggle] = useBoolean(isActive)
    const refDiv = useRef<HTMLDivElement>(null)
    const check = () => {
        if (!refDiv.current) return
        const isActive = itemsActive.includes(refDiv.current)
        toggle(isActive)
    }

    useEffect(() => {
        check()
    }, [itemsActive])
    useEffect(() => {
        if (value) push(refDiv.current!)
        if (!value) remove(refDiv.current!)
    }, [value])

    return { refDiv, isOpen: value, toggle }
}

export default useAccordion
