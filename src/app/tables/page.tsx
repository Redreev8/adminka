import findTableDesc from '@/actions/tables/find-table'
import SectionTable from './ui/section-table'

const Tables = async () => {
    const tables = await findTableDesc()

    if (!Array.isArray(tables)) return <div></div>

    return <SectionTable tables={tables} />
}

export default Tables
