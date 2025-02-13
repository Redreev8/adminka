import { TableDesc } from '@/actions/tables/dto/table'
import { Fieldset, Legend } from '@/components/ui/forms'
import { FC, FieldsetHTMLAttributes } from 'react'
import { UseFormRegister } from 'react-hook-form'

interface FieldsetCreateTableColumnsProps
    extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
    register: UseFormRegister<TableDesc>
}

const FieldsetCreateTableColumns: FC<FieldsetCreateTableColumnsProps> = ({
    register,
    ...props
}) => {
    return (
        <Fieldset className="flex flex-col gap-4" {...props}>
            <Legend>Columns</Legend>
        </Fieldset>
    )
}

export default FieldsetCreateTableColumns
