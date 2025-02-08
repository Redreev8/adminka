export interface DbTableDesc {
    name: string
    desc?: string
}

export interface TableDesc {
    name: string
    desc: {
        name: string
        desc: string
    }
}

export const dtoTableDesc = (data: DbTableDesc): TableDesc => {
    return {
        name: data.name,
        desc: data.desc ? JSON.parse(data.desc) : { name: '', desc: '' },
    }
}

export const dtoTablesDesc = (data: DbTableDesc[]): TableDesc[] => {
    const res = []
    for (let i = 0; i < data.length; i++) {
        const row = data[i]
        res.push(dtoTableDesc(row))
    }

    return res
}

export default dtoTablesDesc
