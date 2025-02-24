import { Components } from '@/components/ui/forms/generator-content-form'
import { Field, PropsCreate, ReturnCreateColumn, Row } from './_type'
import { FieldValues, Path } from 'react-hook-form'
import PartialKey from '@/helper/ts/partial-key'

export interface Varchar extends Row, Field {
    type: 'varchar'
    max: number
}

export const fieldDefultVarchar: Varchar = {
    name: '',
    type: 'varchar',
    desc: {
        name: '',
        desc: '',
    },
    max: 255,
}

export const fieldsVarchar = <T extends FieldValues>(
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
        name: `${name}.max` as Path<T>,
        label: 'Max',
        component: 'input-number',
    },
]

export const createVarchar = ({
    name,
    max = 255,
}: PartialKey<Varchar, 'max'> & PropsCreate): ReturnCreateColumn => {
    return {
        col: `${name} VARCHAR(${max})`,
        before: '',
    }
}
