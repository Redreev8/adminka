'use client'
import { FieldValues, UseFormRegister, Path } from 'react-hook-form'
import Fieldset from './components/fieldset'
import Legend from './components/legend'
import Label from './components/label'
import Input from './fields/input'
import {
    Select,
    SelectBtn,
    SelectList,
    SelectWrapp,
    SelectOption,
} from './fields/select'
import { ReactNode, useEffect, useState } from 'react'

interface InputTool<T> {
    name: Path<T>
    component: 'input'
    label: string
    defaultValue?: string
    value?: string
}

interface InputNumberTool<T> {
    name: Path<T>
    component: 'input-number'
    label: string
    defaultValue?: string
    value?: string
    min?: number
    max?: number
}

interface SelectTool<T> {
    name: Path<T>
    component: 'select'
    label: string
    btn: string
    defaultValue?: string
    value?: string
    options: {
        value: string
        children: string
    }[]
}

type Field<T> = InputTool<T> | InputNumberTool<T> | SelectTool<T>

interface FieldsetTool<T> {
    component: 'fieldset'
    legend: string
    content: Field<T>[]
}

export type Components<T> = FieldsetTool<T> | Field<T>

export interface GeneratorContentFormProps<T extends FieldValues> {
    fields: Components<T>[]
    register: UseFormRegister<T>
}

const GeneratorContentForm = <T extends FieldValues>({
    register,
    fields,
}: GeneratorContentFormProps<T>) => {
    const [children, setChildren] = useState<ReactNode>()
    const getFields = (field: Components<T>, i: number) => {
        if (field.component === 'fieldset') {
            return (
                <Fieldset className="mt-5 pt-4" key={i}>
                    <Legend>{field.legend}</Legend>
                    {field.content.map(getFields)}
                </Fieldset>
            )
        }
        const { component, label, name, ...props } = field
        if (component === 'input') {
            return (
                <Label key={i}>
                    <span>{label}</span>
                    <Input {...register(name)} type="text" {...props} />
                </Label>
            )
        }
        if (component === 'input-number') {
            return (
                <Label key={i}>
                    <span>{label}</span>
                    <Input {...register(name)} type="number" {...props} />
                </Label>
            )
        }
        if (component === 'select') {
            const { label, btn, options } = field
            return (
                <Label key={i}>
                    <span>{label}</span>
                    <Select {...register(name as Path<T>)}>
                        <SelectWrapp>
                            <SelectBtn>{btn}</SelectBtn>
                            <SelectList>
                                {options.map((el) => (
                                    <SelectOption
                                        value={el.value}
                                        key={el.value}
                                    >
                                        {el.value}
                                    </SelectOption>
                                ))}
                            </SelectList>
                        </SelectWrapp>
                    </Select>
                </Label>
            )
        }

        return
    }
    useEffect(() => {
        setChildren(fields.map(getFields))
    }, [fields])
    return children
}

export default GeneratorContentForm
