'use client'
import { TableDesc } from '@/actions/tables/dto/table'
import Form, {
    Label,
    Input,
    Error,
} from '@/components/ui/forms'
import { useForm } from 'react-hook-form'
import FieldsetCreateTableDesc from './fieldset-create-table-desc'
import FieldsetCreateTableColumns from './fieldset-create-table-columns'

const validateName = {
    required: 'This field is required',
    pattern: {
        value: /[A-z0-9\-]*/g,
        message: 'The field must contain only English characters.',
    },
}

const FormCreateTable = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TableDesc>({})

    return (
        <Form
            onSubmit={handleSubmit((data) => console.log(data))}
            className="flex flex-col gap-6"
        >
            <Label>
                <span>Название таблицы</span>
                <Input {...register('name', validateName)} />
                <Error error={errors.name} />
            </Label>
            <FieldsetCreateTableDesc register={register} />
            <FieldsetCreateTableColumns register={register} />
        </Form>
    )
}

export default FormCreateTable
