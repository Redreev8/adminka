import { TableDesc } from '@/actions/tables/dto/table'
import {
    Accordion,
    AccordionTitle,
    AccordionContent,
} from '@/components/ui/accordion'
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
        <Accordion>
            <Fieldset {...props}>
                <AccordionTitle>
                    <Legend>Table Description</Legend>
                </AccordionTitle>
                <AccordionContent>
                    <div className="flex flex-col gap-4">
                        <Label>
                            <span>Title</span>
                            <Input {...register('desc.name')} />
                        </Label>
                        <Label>
                            <span>Description</span>
                            <Textarea
                                className="min-h-40"
                                {...register('desc.desc')}
                            />
                        </Label>
                    </div>
                </AccordionContent>
            </Fieldset>
        </Accordion>
    )
}

export default FieldsetCreateTableDesc
