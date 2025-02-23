import { Components } from '@/components/ui/forms/generator-content-form'
import { Field, ReturnCreateColumn, Row } from './_type'
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

export const createDecimal = ({
    name,
    precision = 10,
    scale = 2,
}: Decimal): ReturnCreateColumn => {
    return { row: `${name} DECIMAL(${precision}, ${scale})` }
}
