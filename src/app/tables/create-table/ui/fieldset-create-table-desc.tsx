import { TableDesc } from '@/actions/tables/dto/table'
import { Fieldset, Input, Label, Legend, Textarea } from '@/components/ui/forms'
import { FC, FieldsetHTMLAttributes } from 'react'
import { UseFormRegister } from 'react-hook-form'

interface FieldsetCreateTableDescProps
    extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
    register: UseFormRegister<TableDesc>
}

const FieldsetCreateTableDesc: FC<FieldsetCreateTableDescProps> = ({
    register,
    ...props
}) => {
    return (
        <Fieldset className="flex flex-col gap-4" {...props}>
            <Legend>Table Description</Legend>
            <Label>
                <span>Title</span>
                <Input {...register('desc.name')} />
            </Label>
            <Label>
                <span>Description</span>
                <Textarea className="min-h-40" {...register('desc.desc')} />
            </Label>
        </Fieldset>
    )
}

export default FieldsetCreateTableDesc
