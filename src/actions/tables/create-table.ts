'use server'
import db from '@/actions/db'
import { TableDesc } from './dto/table'
import { createColumn, T, Types } from './types'

interface createTableProps extends TableDesc {
    'columns-fields': Types[]
}
const createTable = async (
    data: createTableProps,
): Promise<TableDesc | string> => {
    try {
        const columns: string[] = []

        for (let i = 0; i < data['columns-fields'].length; i++) {
            const el = data['columns-fields'][i]
            const res = createColumn[el.type](el as T)
            columns.push(res.col)
        }
        console.log(columns.join(','))
        const res = await db.query(`
            CREATE TABLE ${data.name}(
                id SERIAL PRIMARY KEY,
                ${columns.join(',')}
            );
        `)
        return res.rows
    } catch(e) {
        return e
    }
}

export default createTable
