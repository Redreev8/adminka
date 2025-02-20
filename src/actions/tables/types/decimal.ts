import { Components } from '@/components/ui/forms/generator-content-form'
import { Field, Row } from './_type'
import { FieldValues, Path } from 'react-hook-form'

export interface Decimal extends Row, Field {
    precision: number
    scale: number
}

export const fieldDefultDecimal: Decimal = {
    name: '',
    type: 'decimal',
    label: '',
    precision: 10,
    scale: 2,
}

export const fieldsDecimal = <T extends FieldValues>(
    name: Path<T>,
): Components<T>[] => [
    {
        name: `${name}.label` as Path<T>,
        label: 'label',
        component: 'input',
    },
    {
        name: `${name}.precision` as Path<T>,
        label: 'precision',
        component: 'input-number',
    },
    {
        name: `${name}.scale` as Path<T>,
        label: 'scale',
        component: 'input-number',
    },
]

export const createDecimal = (
    name: string,
    precision: number = 10,
    scale: number = 2,
) => {
    return `${name} DECIMAL(${precision}, ${scale})`
}
