import findTableDesc from '@/actions/tables/find-table'
import Card from '@/components/ui/card'
import Container from '@/components/ui/container'

const Home = async () => {
    const tables = await findTableDesc()
    if (!Array.isArray(tables)) return Error

    return (
        <Container>
            {tables.map((t, i) => (
                <Card key={t.name} className={i === 1 ? 'row-span-2' : ''}>
                    <h2>{t.desc.name}</h2>
                    <p>{t.desc.desc}</p>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Necessitatibus quos qui atque odio voluptate
                        quibusdam reprehenderit excepturi ab modi similique
                        ipsa, exercitationem cum! Repellat dolore, quidem odit
                        consequuntur tempore aut?
                    </p>
                </Card>
            ))}
        </Container>
    )
}

export default Home
