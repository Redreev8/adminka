'use client'
import { FC, ReactNode, RefObject, createContext } from 'react'
import useAccordion from './useAccordion'

export interface AccordionProps {
    children: ReactNode
    isActive?: boolean
}

export interface AccordionContextItems {
    refDiv: RefObject<HTMLDivElement | null>
    isOpen: boolean
    toggle: () => void
}

export const AccordionContext = createContext<AccordionContextItems>({ 
    refDiv: { current: null },
    isOpen: true, 
    toggle: () => {}
})

const Accordion: FC<AccordionProps> = ({ children, isActive = false }) => {
    const { refDiv, isOpen, toggle } = useAccordion(isActive)
    return (
        <AccordionContext.Provider value={{ refDiv, isOpen, toggle }}>
            {children}
        </AccordionContext.Provider>
    )
}

export default Accordion
