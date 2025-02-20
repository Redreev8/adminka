'use client'
import { FieldValues } from 'react-hook-form'

const getErrorArr = <T extends FieldValues>(
    errors: T,
    key: keyof T,
    i: number,
    keyToArr: string,
) => {
    if (!errors[key]) return
    if (!errors[key][i]) return
    if (!errors[key][i][keyToArr]) return
    return errors[key][i][keyToArr]
}

export default getErrorArr
