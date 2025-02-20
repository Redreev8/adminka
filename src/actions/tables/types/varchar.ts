import { Components } from '@/components/ui/forms/generator-content-form'
import { Field, Row } from './_type'
import { FieldValues, Path } from 'react-hook-form'

export interface Varchar extends Row, Field {
    max: number
}

export const fieldDefultVarchar: Varchar = {
    name: '',
    type: 'varchar',
    label: '',
    max: 255,
}

export const fieldsVarchar = <T extends FieldValues>(
    name: Path<T>,
): Components<T>[] => [
    {
        name: `${name}.label` as Path<T>,
        label: 'label',
        component: 'input',
    },
    {
        name: `${name}.max` as Path<T>,
        label: 'Max',
        component: 'input-number',
    },
]
export const createVarchar = (name: string, max: number = 255) => {
    return `${name} VARCHAR(${max})`
}
