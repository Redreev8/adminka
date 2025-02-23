import { Components } from '@/components/ui/forms/generator-content-form'
import { Field, ReturnCreateColumn, Row } from './_type'
import { FieldValues, Path } from 'react-hook-form'

export interface INT extends Row, Field {}

export const fieldDefultInt: INT = {
    name: '',
    type: 'int',
    label: '',
}

export const fieldsInt = <T extends FieldValues>(
    name: Path<T>,
): Components<T>[] => [
    {
        name: `${name}.label` as Path<T>,
        label: 'label',
        component: 'input',
    },
]

export const createInt = ({ name }: INT): ReturnCreateColumn => {
    return { row: `${name} INTEGER` }
}
