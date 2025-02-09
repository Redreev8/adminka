import { TableDesc } from '@/actions/tables/dto/table'
import Container from '@/components/ui/container'
import Section, { SectionProps } from '@/components/ui/section'
import Title, { TitleProps } from '@/components/ui/title'
import React, { FC } from 'react'
import CardTable from './card-table'
import ListBorder from '@/components/ui/list-border'
const id = 'section-table'

interface SectionTableProps extends SectionProps {
    tables: TableDesc[]
    as?: 1 | 2
}

const SectionTable: FC<SectionTableProps> = ({ tables, as = 2 }) => {
    return (
        <Section className="min-h-screen" aria-labelledby={id}>
            <Container className="flex flex-col">
                <Title as={as} id={id}>
                    Tables
                </Title>
                <ListBorder className="grid-cols grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {tables.map((t) => (
                        <CardTable
                            as={(+as + 1) as TitleProps['as']}
                            {...t}
                            key={t.name}
                            className="h-full"
                        />
                    ))}
                </ListBorder>
            </Container>
        </Section>
    )
}

export default SectionTable
