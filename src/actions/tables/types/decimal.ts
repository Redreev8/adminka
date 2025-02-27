import { Components } from '@/components/ui/forms/generator-content-form'
import { Field, PropsCreate, ReturnCreateColumn, Row } from './_type'
import { FieldValues, Path } from 'react-hook-form'

export interface Decimal extends Row, Field {
    precision: number
    scale: number
}

export const fieldDefultDecimal: Decimal = {
    name: '',
    type: 'decimal',
    desc: {
        name: '',
        desc: '',
    },
    precision: 10,
    scale: 2,
}

export const fieldsDecimal = <T extends FieldValues>(
    name: Path<T>,
): Components<T>[] => [
    {
        name: `${name}.desc.name` as Path<T>,
        label: 'label',
        component: 'input',
    },
    {
        name: `${name}.desc.desc` as Path<T>,
        label: 'Descripton',
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
}: Decimal & PropsCreate): ReturnCreateColumn => {
    return {
        col: `${name} DECIMAL(${precision}, ${scale})`,
        before: '',
    }
}
