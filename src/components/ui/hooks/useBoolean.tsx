import { useState } from 'react'
export type UseBooleanReturn = [
    value: boolean,
    toggle: (value?: boolean) => void,
]
const useBoolean = (initialValue = false): UseBooleanReturn => {
    const [value, setValue] = useState<UseBooleanReturn[0]>(initialValue)
    const toggle: UseBooleanReturn[1] = (value) =>
        setValue((state) => value ?? !state)
    return [value, toggle]
}

export default useBoolean
