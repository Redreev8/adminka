import { TableDesc } from '@/actions/tables/dto/table'
import findTableDesc from '@/actions/tables/find-table'
import { startTransition, useEffect, useState } from 'react'

const useFindTables = <T,>(cb: (table: TableDesc[]) => T[]) => {
    const [tables, setTables] = useState<T[]>([])
    const [error, setError] = useState<string | null>(null)
    const [pending, setPending] = useState<boolean>(false)

    useEffect(() => {
        setPending(false)
        startTransition(async () => {
            const res = await findTableDesc()
            setPending(true)
            if (typeof res === 'string') {
                setError(res)
                return
            }
            setTables(() => cb(res))
        })
    }, [])

    return { tables, error, pending }
}

export default useFindTables
