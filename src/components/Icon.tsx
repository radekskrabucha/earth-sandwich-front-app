import { type IconId } from '@/types/icons'
import { getIconHref } from '@/utils/icons'

type IconProps = {
  id: IconId
} & React.ComponentProps<'svg'>

export const Icon: React.FC<IconProps> = ({ id, ...props }) => (
  <svg {...props}>
    <use href={getIconHref(id)} />
  </svg>
)
