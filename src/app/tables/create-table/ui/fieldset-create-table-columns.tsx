import {
    Accordion,
    AccordionContent,
    AccordionTitle,
    AccordionList,
} from '@/components/ui/accordion'
import { Error, Fieldset, Input, Label, Legend } from '@/components/ui/forms'
import {
    Select,
    SelectBtn,
    SelectList,
    SelectOption,
    SelectWrapp,
} from '@/components/ui/forms/fields/select'
import { FC, FieldsetHTMLAttributes } from 'react'
import {
    FieldErrors,
    UseFieldArrayReturn,
    UseFormRegister,
    UseFormWatch,
} from 'react-hook-form'
import { CreateTableField } from './form-create-table'
import Btn from '@/components/ui/btn'
import GeneratorContentForm from '@/components/ui/forms/generator-content-form'
import classNames from 'classnames'
import {
    defultField,
    defultType,
    fieldsType,
    selectTypes,
} from '@/actions/tables/types'
import {
    required,
    nameSql,
} from '@/components/ui/forms/components/error/type-eror'
import getErrorArr from '@/helper/get-error-arr'
import useFindTablesOptions from '../../hooks/use-find-tables-options'
import { TableDesc } from '@/actions/tables/dto/table'

interface FieldsetCreateTableColumnsProps
    extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
    register: UseFormRegister<CreateTableField>
    arrColmsField: UseFieldArrayReturn<CreateTableField, 'columns-fields', 'id'>
    errors: FieldErrors<CreateTableField>
    watch: UseFormWatch<CreateTableField>
}

const FormClumn = GeneratorContentForm<CreateTableField>

interface TableOption {
    value: string
    children: string
}

const FieldsetCreateTableColumns: FC<FieldsetCreateTableColumnsProps> = ({
    register,
    arrColmsField,
    className,
    errors,
    watch,
    ...props
}) => {
    const getTableOptons = (t: TableDesc): TableOption => ({
        value: t.name,
        children: t.desc.name,
    })
    const { tables, error, pending } = useFindTablesOptions<TableOption>(
        (table) => table.map(getTableOptons),
    )
    const { fields, append, remove } = arrColmsField
    const watchFieldArray = watch('columns-fields')
    const controlledFields = fields.map((field, index) => {
        return {
            ...field,
            ...watchFieldArray[index],
        }
    })
    if (!pending) return
    if (error) return <div>error</div>
    return (
        <Fieldset
            className={classNames('flex flex-col items-end gap-4', className)}
            {...props}
        >
            <Legend>Columns</Legend>
            <AccordionList className="w-full">
                {controlledFields.map((field, i) => (
                    <Accordion key={field.id}>
                        <div className="flex items-end gap-4 pb-4 pt-1">
                            <Label className="w-full">
                                <span>
                                    <span>Name </span>
                                    <Error
                                        error={getErrorArr(
                                            errors,
                                            'columns-fields',
                                            i,
                                            'name',
                                        )}
                                    />
                                </span>
                                <Input
                                    {...register(`columns-fields.${i}.name`, {
                                        required,
                                        pattern: nameSql,
                                    })}
                                />
                            </Label>
                            <Label className="w-full">
                                <span>
                                    <span>Type </span>
                                </span>
                                <Select
                                    {...register(`columns-fields.${i}.type`)}
                                >
                                    <SelectWrapp>
                                        <SelectBtn />
                                        <SelectList>
                                            {selectTypes.map((t) => (
                                                <SelectOption
                                                    defult={
                                                        t.value ===
                                                        (field.type ??
                                                            defultType)
                                                    }
                                                    value={t.value}
                                                    key={t.value}
                                                >
                                                    {t.children}
                                                </SelectOption>
                                            ))}
                                        </SelectList>
                                    </SelectWrapp>
                                </Select>
                            </Label>
                            <div className="flex w-full justify-end gap-4">
                                <AccordionTitle>
                                    <Btn isOutline>открыть</Btn>
                                </AccordionTitle>
                                <Btn
                                    onClick={() => remove(i)}
                                    isOutline
                                    iconLeft="TrashIcon"
                                />
                            </div>
                        </div>
                        <AccordionContent>
                            <div className="pb-6 pt-4">
                                <FormClumn
                                    fields={fieldsType[
                                        field && field.type
                                            ? field.type
                                            : defultType
                                    ](`columns-fields.${i}`, tables)}
                                    register={register}
                                />
                            </div>
                        </AccordionContent>
                    </Accordion>
                ))}
            </AccordionList>
            <Btn
                onClick={() => append({ ...defultField[defultType] })}
                isOutline
                iconLeft="AddSquareIcon"
            >
                Add column
            </Btn>
        </Fieldset>
    )
}

export default FieldsetCreateTableColumns
