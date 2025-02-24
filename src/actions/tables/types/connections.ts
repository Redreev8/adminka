import { Components } from '@/components/ui/forms/generator-content-form'
import { Field, PropsCreate, ReturnCreateColumn, Row } from './_type'
import { FieldValues, Path } from 'react-hook-form'

export interface Connections extends Row, Field {
    nameConnection: string
    nameColumnManyToMany?: string
    nameColumnConnection: string
    nameColumn: string
    typeConnection: 'Many-to-Many' | 'One-to-Many' | 'One-to-One'
}

export const fieldDefultConnections: Connections = {
    name: '',
    nameConnection: '',
    nameColumnConnection: 'id',
    nameColumn: 'id',
    type: 'connections',
    typeConnection: 'One-to-Many',
    label: '',
}

export const fieldsConnections = <T extends FieldValues>(
    name: Path<T>,
    tables: { value: string; children: string }[],
): Components<T>[] => {
    return [
        {
            name: `${name}.label` as Path<T>,
            label: 'label',
            component: 'input',
        },
        {
            component: 'fieldset',
            legend: 'table connection',
            content: [
                {
                    name: `${name}.nameColumnConnection` as Path<T>,
                    label: 'Column connection',
                    defaultValue: 'id',
                    component: 'input',
                },
                {
                    name: `${name}.nameConnection` as Path<T>,
                    label: 'names table',
                    component: 'select',
                    btn: 'names table',
                    options: tables,
                },
                {
                    name: `${name}.typeConnection` as Path<T>,
                    label: 'type connection',
                    component: 'select',
                    btn: 'type connection',
                    options: [
                        {
                            value: 'One-to-Many',
                            children: 'One-to-Many',
                        },
                    ],
                },
            ],
        },
    ]
}

export const createConnections = ({
    name,
    nameTable,
    nameColumn,
    nameColumnConnection = 'id',
    nameColumnManyToMany = nameColumnConnection,
    typeConnection,
    nameConnection,
}: Connections & PropsCreate): ReturnCreateColumn => {
    const res = { col: '', before: '' }
    if (typeConnection === 'One-to-One') {
        res.col = `${name} INTEGER UNIQUE REFERENCES ${nameConnection}(${nameColumnConnection})`
    }
    if (typeConnection === 'One-to-Many') {
        res.col = `${name} INTEGER REFERENCES ${nameConnection}(${nameColumnConnection})`
        console.log(res.col)
    }
    if (typeConnection === 'Many-to-Many') {
        res.before = `CREATE TABLE ${nameConnection}_${name} (
            ${nameColumnManyToMany} INTEGER REFERENCES ${nameConnection}(${nameColumnConnection}),
            ${name} INTEGER REFERENCES ${nameTable}(${nameColumn}),
            PRIMARY KEY (${nameConnection}, ${name})
        );`
    }
    return res
}
