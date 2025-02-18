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

interface InputTool<T> {
    name: keyof T
    component: 'input'
    label: string
    defaultValue?: string
    value?: string
}

interface InputNumberTool<T> {
    name: keyof T
    component: 'input-number'
    label: string
    defaultValue?: string
    value?: string
    min?: number
    max?: number
}

interface SelectTool<T> {
    name: keyof T
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

type Components<T> = FieldsetTool<T> | Field<T>

export interface GeneratorContentFormProps<T extends FieldValues> {
    fields: Components<T>[]
    register: UseFormRegister<T>
    prev?: string
}

const GeneratorContentForm = <T extends FieldValues>({
    register,
    fields,
    prev = '',
}: GeneratorContentFormProps<T>) => {
    const getFields = (field: Components<T>, i: number) => {
        if (field.component === 'fieldset') {
            return (
                <Fieldset key={i}>
                    <Legend>{field.legend}</Legend>
                    {field.content.map(getFields)}
                </Fieldset>
            )
        }
        const { component, label, name, ...props } = field
        const namePrev = (prev ? `${prev}.${name as Path<T>}` : name) as Path<T>
        if (component === 'input') {
            return (
                <Label key={i}>
                    <span>{label}</span>
                    <Input {...register(namePrev)} type="text" {...props} />
                </Label>
            )
        }
        if (component === 'input-number') {
            return (
                <Label key={i}>
                    <span>{label}</span>
                    <Input {...register(namePrev)} type="number" {...props} />
                </Label>
            )
        }
        if (component === 'select') {
            const { label, btn, options } = field
            return (
                <Label key={i}>
                    <span>{label}</span>
                    <Select {...register(namePrev)}>
                        <SelectWrapp>
                            <SelectBtn>{btn}</SelectBtn>
                            <SelectList>
                                {options.map((el, i) => (
                                    <SelectOption
                                        defult={i === 6}
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
    return <>{fields.map(getFields)}</>
}

export default GeneratorContentForm
