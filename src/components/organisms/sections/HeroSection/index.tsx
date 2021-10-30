import {Box} from '@chakra-ui/react'

import CategoryShowcase from '../../CategoryShowcase'

export interface HeroSectionProps {}

const HeroSection = () => {
  return (
    <Box bg="gray.400" pt="10">
      <CategoryShowcase
        categories={['New', 'Handfeuerwaffen']}
        tabs={{
          New: {
            items: ['Pistolen', 'Revolver', 'SMGs', 'Jagdgewehre', 'AR15'],
            images: [
              'https://www.fieldandstream.com/uploads/2019/01/18/7TUMLR2JZRP7F52FH3ENRNVQ6A.jpg',
              'https://upload.wikimedia.org/wikipedia/commons/8/8f/Webley_IMG_6789.jpg',
              'https://www.lwrci.com/assets/images/5563.jpg',
              'https://media.istockphoto.com/photos/hunting-rifle-with-cartridge-picture-id186779464',
              'https://www.taiwangun.com/img/product_media/85001-86000/karabiny-szturmowe-elektryczne-ar15-lite-cqb-at-ny02-cq-arcturus-85431(1).JPG'
            ]
          },
          Handfeuerwaffen: {
            items: ['Pistolen', 'Revolver', 'SMGs', 'Jagdgewehre', 'AR15'],
            images: [
              'https://www.fieldandstream.com/uploads/2019/01/18/7TUMLR2JZRP7F52FH3ENRNVQ6A.jpg',
              'https://upload.wikimedia.org/wikipedia/commons/8/8f/Webley_IMG_6789.jpg',
              'https://www.lwrci.com/assets/images/5563.jpg',
              'https://media.istockphoto.com/photos/hunting-rifle-with-cartridge-picture-id186779464',
              'https://www.taiwangun.com/img/product_media/85001-86000/karabiny-szturmowe-elektryczne-ar15-lite-cqb-at-ny02-cq-arcturus-85431(1).JPG'
            ]
          }
        }}
      />
    </Box>
  )
}

export default HeroSection
