import { ForwardRefExoticComponent, RefAttributes, SVGAttributes } from 'react'
import EditIcon from './edit'
import TrashIcon from './trash'
import AddSquareIcon from './add-square'

export type ForwardType = ForwardRefExoticComponent<
    SVGAttributes<SVGSVGElement> & RefAttributes<SVGSVGElement>
>

const icons = {
    EditIcon,
    TrashIcon,
    AddSquareIcon,
}

export default icons
