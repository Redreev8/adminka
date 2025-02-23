'use server'
import db from '@/actions/db'
import dtoTablesShema, { TableShema } from './dto/table-shema'

const findTableDesc = async (): Promise<TableShema[] | unknown> => {
    try {
        const data = await db.query(`
            SELECT 
                t.table_name as name, 
                array_agg(
                    json_build_object(
                        s.column_name, s.data_type
                    )
                ) as shema, 
                obj_description(oid) as desc 
            FROM information_schema.tables t
            LEFT JOIN pg_class p ON p.relname = t.table_name
            LEFT JOIN information_schema.columns s ON s.table_name = t.table_name
            WHERE t.table_schema NOT IN 
                ('information_schema','pg_catalog') AND 
                t.table_schema IN('public', 'myschema')
            GROUP BY t.table_name, p.oid;
        `)
        const res = dtoTablesShema(data.rows)
        return res
    } catch (error) {
        return error
    }
}

export default findTableDesc
