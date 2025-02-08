import db from '@/actions/db'
import dtoTablesDesc, { TableDesc } from './dto/table'

const findTableDesc = async (): Promise<TableDesc[] | string> => {
    try {
        const data = await db.query(`
            SELECT t.table_name as name, obj_description(oid) as desc FROM information_schema.tables t
            LEFT JOIN pg_class p ON p.relname = t.table_name
            WHERE table_schema NOT IN ('information_schema','pg_catalog') AND table_schema IN('public', 'myschema');
        `)
        return dtoTablesDesc(data.rows)
    } catch {
        return 'error'
    }
}

export default findTableDesc
