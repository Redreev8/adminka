import classNames from 'classnames'
import { clCardPadding } from '../card'
import { cloneElement, isValidElement, ReactElement, ReactNode } from 'react'

type Cb =
    | ((
          child: ReactElement<{ className?: string }>,
      ) => ReactElement<{ className?: string }>)
    | null

const getConteintCardItem = (child: ReactNode, cb: Cb = null) => {
    if (!child) return
    if (!isValidElement(child)) {
        return <div className={clCardPadding}>{child}</div>
    }
    const { className, ...props } = child.props as { className?: string }
    const cl = classNames(className, clCardPadding)
    if (cb) return cb(child as ReactElement<{ className?: string }>)
    return cloneElement(child as ReactElement<{ className?: string }>, {
        ...props,
        className: cl!,
    })
}

export default getConteintCardItem
