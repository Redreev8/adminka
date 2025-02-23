import { Components } from '@/components/ui/forms/generator-content-form'
import { Field, ReturnCreateColumn, Row } from './_type'
import { FieldValues, Path } from 'react-hook-form'

export interface Connections extends Row, Field {
    nameConnection: string
    typeConnection: 'One-to-Many' | 'Many-to-One'
}

export const fieldDefultConnections: Connections = {
    name: '',
    nameConnection: '',
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
        {
            name: `${name}.nameConnection` as Path<T>,
            label: 'names table',
            component: 'select',
            btn: 'names table',
            options: tables,
        },
    ]
}

export const createConnections = ({
    typeConnection,
    nameConnection,
}: Connections): ReturnCreateColumn => {
    const res = { col: '' }
    // if (typeConnection === 'One-to-One') {
    //     return `${nameConnection}_id INTEGER REFERENCES ${nameConnection}(id)`
    // }
    if (typeConnection === 'One-to-Many') {
        res.col = `${nameConnection}_id INTEGER REFERENCES ${nameConnection}(id)`
    }
    return res
}
