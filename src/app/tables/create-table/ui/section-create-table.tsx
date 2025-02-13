import { FC } from 'react'
import Section from '@/components/ui/section'
import Title from '@/components/ui/title'
import Container from '@/components/ui/container'
import FormCreateTable from './form-create-table'

const id = 'section-create-table'

const SectionCreateTable: FC = () => {
    return (
        <Section className="min-h-screen" aria-labelledby={id}>
            <Container>
                <Title id={id}>Create table</Title>
                <FormCreateTable />
            </Container>
        </Section>
    )
}

export default SectionCreateTable
