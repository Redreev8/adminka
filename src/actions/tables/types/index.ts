import {
    Connections,
    fieldDefultConnections,
    fieldsConnections,
} from './connections'
import { Decimal, fieldDefultDecimal, fieldsDecimal } from './decimal'
import { fieldDefultInt, fieldsInt, INT } from './int'
import { fieldDefultVarchar, fieldsVarchar, Varchar } from './varchar'

export type Types = Varchar | INT | Decimal | Connections

export const fieldsType = {
    decimal: fieldsDecimal,
    int: fieldsInt,
    varchar: fieldsVarchar,
    connections: fieldsConnections,
}

export const defultField = {
    decimal: fieldDefultDecimal,
    int: fieldDefultInt,
    varchar: fieldDefultVarchar,
    connections: fieldDefultConnections,
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
    {
        value: 'connections',
        children: 'connections',
    },
]

export const defultType = 'varchar'
