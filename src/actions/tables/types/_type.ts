import { fieldsType } from '.'

export interface Row {
    name: string
    type: keyof typeof fieldsType
}

export interface Field {
    desc: {
        name: string
        desc: string
    }
}

export interface PropsCreate {
    nameTable: string
}

export interface ReturnCreateColumn {
    before: string
    col: string
}
