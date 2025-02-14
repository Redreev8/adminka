'use client'
import { FC, ReactNode, createContext } from 'react'
import useBoolean, { UseBooleanReturn } from '../hooks/useBoolean'

export interface AccordionProps {
    children: ReactNode
    isActive?: boolean
}

export const AccordionContext = createContext<UseBooleanReturn>([
    true,
    () => {},
])

const Accordion: FC<AccordionProps> = ({ children, isActive = false }) => {
    const [value, toggle] = useBoolean(isActive)
    return (
        <AccordionContext.Provider value={[value, toggle]}>
            {children}
        </AccordionContext.Provider>
    )
}

export default Accordion
