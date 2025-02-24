import { Components } from '@/components/ui/forms/generator-content-form'
import { Field, PropsCreate, ReturnCreateColumn, Row } from './_type'
import { FieldValues, Path } from 'react-hook-form'

export interface INT extends Row, Field {}

export const fieldDefultInt: INT = {
    name: '',
    type: 'int',
    desc: {
        name: '',
        desc: '',
    },
}

export const fieldsInt = <T extends FieldValues>(
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
]

export const createInt = ({ name }: INT & PropsCreate): ReturnCreateColumn => {
    return {
        col: `${name} INTEGER`,
        before: '',
    }
}
