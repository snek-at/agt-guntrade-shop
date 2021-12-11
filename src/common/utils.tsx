import {injectable} from 'react-magnetic-di'
import {Image} from '@chakra-ui/image'

const breakpoints = ['0em', '30em', '48em', '62em', '80em', '96em']

export const mq = breakpoints.map(bp => `@media (min-width: ${bp})`)

export const GCImage = injectable(
  (props: {gimg: JSX.Element}) => props.gimg,
  (props: {gimg: JSX.Element}) => (
    <Image
      className={props.gimg.props.imgClassName}
      alt={props.gimg.props.alt}
      src={props.gimg.props.src}
    />
  )
)
