'use client'
import { TableDesc } from '@/actions/tables/dto/table'
import Form, { Label, Input, Error } from '@/components/ui/forms'
import { useFieldArray, useForm } from 'react-hook-form'
import FieldsetCreateTableDesc from './fieldset-create-table-desc'
import FieldsetCreateTableColumns from './fieldset-create-table-columns'
import Btn from '@/components/ui/btn'
import { Types } from '@/actions/tables/types'
import {
    nameSql,
    required,
} from '@/components/ui/forms/components/error/type-eror'
import createTable from '@/actions/tables/create-table'

export interface CreateTableField extends TableDesc {
    'columns-fields': Types[]
}

const FormCreateTable = () => {
    const {
        register,
        handleSubmit,
        control,
        watch,
        formState: { errors },
    } = useForm<CreateTableField>({})
    const arrColmsField = useFieldArray({
        control,
        name: 'columns-fields',
    })
    const postCreateTable = handleSubmit(async (data) => {
        const res = await createTable(data)
        console.log(res)
    })

    return (
        <Form onSubmit={postCreateTable} className="flex flex-col gap-6">
            <Label>
                <span>Name table</span>
                <Input
                    {...register('name', {
                        required,
                        pattern: nameSql,
                    })}
                />
                <Error error={errors.name} />
            </Label>
            <FieldsetCreateTableDesc register={register} />
            <FieldsetCreateTableColumns
                errors={errors}
                watch={watch}
                register={register}
                arrColmsField={arrColmsField}
            />
            <div className="flex gap-4">
                <Btn className="w-full" type="submit">
                    Create
                </Btn>
                <Btn className="w-full" isOutline>
                    Back
                </Btn>
            </div>
        </Form>
    )
}

export default FormCreateTable
