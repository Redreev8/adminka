'use client'
import useUniteRef from '@/hooks/useUniteRef'
import {
    createContext,
    Dispatch,
    forwardRef,
    ReactElement,
    ReactNode,
    RefObject,
    SelectHTMLAttributes,
    SetStateAction,
    useEffect,
    useRef,
    useState,
} from 'react'
import { SelectWrappProps } from './select-wrapp'

export interface SelectContextItems {
    refSelect: RefObject<HTMLSelectElement | null>
    refBtn: RefObject<HTMLButtonElement | null>
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
    refSelect: { current: null },
    refBtn: { current: null },
    items: [],
    setItems: () => {},
    selected: 0,
    setSelected: () => {},
    isOpen: true,
    setIsOpen: () => {},
})

interface SelectProps
    extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'children'> {
    children: ReactElement<SelectWrappProps>
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
    ({ children, ...props }, ref) => {
        const [items, setItems] = useState<Item[]>([])
        const [selected, setSelected] = useState<number>(0)
        const [isOpen, setIsOpen] = useState<boolean>(false)
        const refBtn = useRef<HTMLButtonElement>(null)
        const refSelect = useUniteRef(ref)
        useEffect(() => {
            const options = children.props.children[1].props.children
            let selected = 0
            const res: Item[] = []
            for (let i = 0; i < options.length; i++) {
                const { props } = options[i]
                res.push({
                    value: props.value,
                    children: props.children,
                    title: props.value,
                })
                if (props.defult) selected = i
            }
            setItems(() => {
                setSelected(() => selected)
                return res
            })
        }, [])
        return (
            <>
                <select
                    ref={refSelect}
                    className="viseble-hidden"
                    {...props}
                    value={items[selected]?.value}
                >
                    {items.map((el: Item) => (
                        <option value={el.value} key={el.value}>
                            {el.title}
                        </option>
                    ))}
                </select>
                <SelectContext.Provider
                    value={{
                        refBtn,
                        items,
                        refSelect,
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
    },
)

export default Select
