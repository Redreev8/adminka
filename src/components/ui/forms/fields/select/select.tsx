'use client'
import {
    createContext,
    Dispatch,
    forwardRef,
    ReactNode,
    SelectHTMLAttributes,
    SetStateAction,
    useState,
} from 'react'

export interface SelectContextItems {
    items: Item[]
    setItems: Dispatch<SetStateAction<Item[]>>
    isOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>
    selected: number
    setSelected: Dispatch<SetStateAction<number>>
}

type Item = {
    value: string
    title: string
    children: ReactNode
}

export const SelectContext = createContext<SelectContextItems>({
    items: [],
    setItems: () => {},
    selected: 0,
    setSelected: () => {},
    isOpen: true,
    setIsOpen: () => {},
})

const Select = forwardRef<
    HTMLSelectElement,
    SelectHTMLAttributes<HTMLSelectElement>
>(({ children, value, ...props }, ref) => {
    const [items, setItems] = useState<Item[]>([])
    const [selected, setSelected] = useState<number>(0)
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const getDefutlValue = () => {
        if (items.length === 0) return
        if (value) return value
        return items[selected].value
    }
    return (
        <>
            <select
                value={getDefutlValue()}
                {...props}
                className="viseble-hidden"
                ref={ref}
            >
                {items.map((el: Item) => (
                    <option value={el.value} key={el.value}>
                        {el.title}
                    </option>
                ))}
            </select>
            <SelectContext.Provider
                value={{
                    items,
                    setItems,
                    isOpen,
                    setIsOpen,
                    selected,
                    setSelected,
                }}
            >
                {children}
            </SelectContext.Provider>
        </>
    )
})

export default Select
