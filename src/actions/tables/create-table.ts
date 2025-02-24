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
        const before: string[] = []
        const comments: string[] = [
            `comment on table ${data.name} is '${JSON.stringify(data.desc)}';`,
        ]

        for (let i = 0; i < data['columns-fields'].length; i++) {
            const el = data['columns-fields'][i] as T
            const res = createColumn[el.type]({
                nameTable: data.name,
                ...el,
            })
            comments.push(
                `comment on column ${data.name}.${el.name} is '${JSON.stringify(el.desc)}';`,
            )
            columns.push(res.col)
            before.push(res.before)
        }

        await db.query(`
            CREATE TABLE ${data.name}(
                ${isId ? 'id SERIAL PRIMARY KEY,' : ''}
                ${columns.join(',')}
            );

            ${before.join('\n\n')}
            ${comments.join('')}
        `)
        return
    } catch {
        return 'error'
    }
}

export default createTable
