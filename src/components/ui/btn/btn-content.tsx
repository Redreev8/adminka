import icons from '@/components/ui/icon'
import classNames from 'classnames'
import { FC, ReactNode } from 'react'

export interface BtnContentProps {
    children?: ReactNode
    iconLeft?: keyof typeof  icons
    iconRight?: keyof typeof  icons
}

const BtnContent: FC<BtnContentProps> = ({ children, iconLeft, iconRight }) => {
    const IconLeft = icons[iconLeft!]
    const IconRight = icons[iconRight!]
    const clWrapp = classNames('size-8 rounded-full flex items-center justify-center bg-white text-black')
    const clIcon = classNames('size-5')
    return (
        <>
            {iconLeft && <span className={clWrapp}><IconLeft className={clIcon}/></span>}
            {children && <span className='text-base font-black'>{children}</span>}
            {iconRight && <span className={clWrapp}><IconRight className={clIcon}/></span>}
        </>
    )
}

export default BtnContent