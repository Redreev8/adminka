import { ForwardRefExoticComponent, RefAttributes, SVGAttributes } from 'react'
import EditIcon from './edit'
import TrashIcon from './trash'

export type ForwardType = ForwardRefExoticComponent<
    SVGAttributes<SVGSVGElement> & RefAttributes<SVGSVGElement>
>

const icons = {
    EditIcon,
    TrashIcon,
}

export default icons
