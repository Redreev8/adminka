import { Decimal, fieldDefultDecimal, fieldsDecimal } from './decimal'
import { fieldDefultInt, fieldsInt, INT } from './int'
import { fieldDefultVarchar, fieldsVarchar, Varchar } from './varchar'

export type Types = Varchar | INT | Decimal

export const fieldsType = {
    decimal: fieldsDecimal,
    int: fieldsInt,
    varchar: fieldsVarchar,
}

export const defultField = {
    decimal: fieldDefultDecimal,
    int: fieldDefultInt,
    varchar: fieldDefultVarchar,
}

export const selectTypes = [
    {
        value: 'varchar',
        children: 'varchar',
    },
    {
        value: 'int',
        children: 'intenger number',
    },
    {
        value: 'decimal',
        children: 'decimal number',
    },
]

export const defultType = 'varchar'
