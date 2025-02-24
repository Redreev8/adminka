import {
    Connections,
    createConnections,
    fieldDefultConnections,
    fieldsConnections,
} from './connections'
import {
    createDecimal,
    Decimal,
    fieldDefultDecimal,
    fieldsDecimal,
} from './decimal'
import { createInt, fieldDefultInt, fieldsInt, INT } from './int'
import {
    createVarchar,
    fieldDefultVarchar,
    fieldsVarchar,
    Varchar,
} from './varchar'

export type Types = Varchar | INT | Decimal | Connections
export type T = Varchar & INT & Decimal & Connections

export interface TypesObj {
    decimal: Decimal
    int: INT
    varchar: Varchar
    connections: Connections
}

export const createColumn = {
    decimal: createDecimal,
    int: createInt,
    varchar: createVarchar,
    connections: createConnections,
}

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
