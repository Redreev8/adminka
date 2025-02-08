import findTableDesc from '@/actions/tables/find-table'
import SectionTable from './section-table'

const Tables = async () => {
    const tables = await findTableDesc()
    if (!Array.isArray(tables)) return Error

    return  <SectionTable tables={tables} />
}

export default Tables
