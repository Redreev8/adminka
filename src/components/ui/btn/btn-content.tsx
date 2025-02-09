import icons from '@/components/ui/icon'
import classNames from 'classnames'
import { FC } from 'react'
import { BtnProps } from './btn'

type BtnContentProps = Pick<
    BtnProps,
    'iconLeft' | 'iconRight' | 'children' | 'isOutline'
>

const BtnContent: FC<BtnContentProps> = ({
    children,
    iconLeft,
    iconRight,
    isOutline,
}) => {
    const IconLeft = icons[iconLeft!]
    const IconRight = icons[iconRight!]
    const clWrapp = classNames({
        'size-8 rounded-full flex items-center justify-center bg-white':
            children,
        'text-black': isOutline || children,
    })
    const clIcon = classNames('size-5')
    return (
        <>
            {iconLeft && (
                <span className={clWrapp}>
                    <IconLeft className={clIcon} />
                </span>
            )}
            {children && (
                <span className="text-base font-black">{children}</span>
            )}
            {iconRight && (
                <span className={clWrapp}>
                    <IconRight className={clIcon} />
                </span>
            )}
        </>
    )
}

export default BtnContent
