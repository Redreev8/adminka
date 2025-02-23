import { fieldsType } from '.'

export interface Row {
    name: string
    type: keyof typeof fieldsType
}

export interface Field {
    label: string
}

export interface ReturnCreateColumn {
    col: string
}
