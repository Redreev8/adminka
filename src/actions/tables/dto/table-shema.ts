export interface ShemaDb {}

export interface DbTableShema {
    name: string
    desc?: string
    shema: ShemaDb[]
}

export interface TableShema {
    name: string
    desc: {
        name: string
        desc: string
    }
    shema: ShemaDb[]
}

export const dtoTableShema = (data: DbTableShema): TableShema => {
    return {
        name: data.name,
        desc: data.desc ? JSON.parse(data.desc) : { title: '', desc: '' },
        shema: data.shema,
    }
}

export const dtoTablesShema = (data: DbTableShema[]): TableShema[] => {
    const res = []
    for (let i = 0; i < data.length; i++) {
        const row = data[i]
        res.push(dtoTableShema(row))
    }

    return res
}

export default dtoTablesShema
