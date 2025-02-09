import { TableDesc } from '@/actions/tables/dto/table'
import Btn from '@/components/ui/btn'
import Card from '@/components/ui/card'
import Title, { TitleProps } from '@/components/ui/title'
import React, { AreaHTMLAttributes, forwardRef } from 'react'

export interface CardTableProps
    extends TableDesc,
        AreaHTMLAttributes<HTMLDivElement> {
    as?: TitleProps['as']
}

const CardTable = forwardRef<HTMLDivElement, CardTableProps>(
    ({ name, as, desc, ...props }, ref) => {
        return (
            <Card ref={ref} {...props}>
                <Title size={4} as={as}>
                    {desc.name.length > 0 ? desc.name : name}
                </Title>
                {desc.desc.length > 0 && <p>{desc.desc}</p>}
                <Btn iconLeft='EditIcon' className='mt-auto'>Изменить</Btn>
            </Card>
        )
    },
)

export default CardTable
