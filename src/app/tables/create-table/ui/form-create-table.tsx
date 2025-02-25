'use client'
import Form, { Label, Input, Error } from '@/components/ui/forms'
import { useFieldArray, useForm } from 'react-hook-form'
import FieldsetCreateTableDesc from './fieldset-create-table-desc'
import FieldsetCreateTableColumns from './fieldset-create-table-columns'
import Btn from '@/components/ui/btn'
import {
    nameSql,
    required,
} from '@/components/ui/forms/components/error/type-eror'
import createTable, { ColumnsCreate } from '@/actions/tables/create-table'
import Alert from '@/components/ui/alert'
import AlertList from '@/components/ui/alert/alert-list'
import { useState } from 'react'
import { createPortal } from 'react-dom'

const FormCreateTable = () => {
    const {
        register,
        handleSubmit,
        control,
        watch,
        formState: { errors },
    } = useForm<ColumnsCreate>({})
    const arrColmsField = useFieldArray({
        control,
        name: 'columns-fields',
    })
    const [alerts, setAlerts] = useState<string[]>([])
    const addAlert = (message: string) => {
        setAlerts((prev) => {
            if (!prev.find((t) => t === message)) {
                prev.push(message)
                setTimeout(() => {
                    setAlerts((prev) => prev.filter((t) => t !== message))
                }, 5000)
            }
            return [...prev]
        })
    }
    const postCreateTable = handleSubmit(async (data) => {
        const res = await createTable({ data })
        console.log(res)
        if (!res) {
            addAlert('Create table')
        }
        if (typeof res === 'string') {
            addAlert('Errors create table')
        }
    })

    return (
        <>
            {createPortal(
                <AlertList>
                    {alerts.map((alert) => (
                        <Alert idAlert={alert} key={alert}>
                            {alert}
                        </Alert>
                    ))}
                </AlertList>,
                document.body,
            )}
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
        </>
    )
}

export default FormCreateTable
