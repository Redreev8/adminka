import { TableDesc } from '@/actions/tables/dto/table'
import Btn from '@/components/ui/btn'
import Card from '@/components/ui/card'
import Title, { TitleProps } from '@/components/ui/title'
import classNames from 'classnames'
import React, { AreaHTMLAttributes, forwardRef } from 'react'

export interface CardTableProps
    extends TableDesc,
        AreaHTMLAttributes<HTMLDivElement> {
    as?: TitleProps['as']
}

const CardTable = forwardRef<HTMLDivElement, CardTableProps>(
    ({ name, as, desc, className, ...props }, ref) => {
        const cl = classNames(
            className,
            'flex flex-col justify-between min-h-[280px]',
        )
        return (
            <Card className={cl} ref={ref} {...props}>
                <div>
                    <Title size={4} as={as}>
                        {desc.name.length > 0 ? desc.name : name}
                    </Title>
                    {desc.desc.length > 0 && <p>{desc.desc}</p>}
                </div>
                <ul className="flex gap-2">
                    <li>
                        <Btn isOutline iconLeft="EditIcon" />
                    </li>
                    <li>
                        <Btn isOutline iconRight="TrashIcon" />
                    </li>
                </ul>
            </Card>
        )
    },
)

export default CardTable
