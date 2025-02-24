'use server'
import db from '@/actions/db'
import { TableDesc } from './dto/table'
import { createColumn, T, Types } from './types'

export interface ColumnsCreate extends TableDesc {
    'columns-fields': Types[]
}

interface createTableProps {
    data: ColumnsCreate
    isId?: boolean
}

const createTable = async ({
    data,
    isId = true,
}: createTableProps): Promise<undefined | string> => {
    try {
        const columns: string[] = []

        for (let i = 0; i < data['columns-fields'].length; i++) {
            const el = data['columns-fields'][i]
            const res = createColumn[el.type](el as T)
            columns.push(res.col)
        }
        console.log(columns.join(','))
        await db.query(`
            CREATE TABLE ${data.name}(
                ${isId ? 'id SERIAL PRIMARY KEY,' : ''}
                ${columns.join(',')}
            );
        `)
        return
    } catch {
        return 'error'
    }
}

export default createTable
