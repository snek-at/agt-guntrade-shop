import React from 'react'
import {useDisclosure} from '@chakra-ui/hooks'
import {graphql, navigate, PageProps} from 'gatsby'
import {useWishlist} from '../services/wishlist'
import {WishListLayout} from '../layout/WishListLayout'
import ContactModal from '../components/organisms/ContactModal'
import {connectPage} from '@jaenjs/jaen'

const WishlistPage = ({}: PageProps) => {
  const {wishlist, updateQuantity, removeFromWishlist} = useWishlist()
  const {isOpen, onOpen, onClose} = useDisclosure()

  const handleRequestNow = () => {
    onOpen()
  }

  return (
    <>
      <WishListLayout
        items={wishlist}
        onRemove={removeFromWishlist}
        onQuantityChange={updateQuantity}
        onRequestNow={handleRequestNow}
        activePath=""
      />
      <ContactModal
        wishlist={wishlist}
        isOpen={isOpen}
        heading={<p>Kaufanfrage (unverbindlich)</p>}
        text={''}
        onClose={() => onClose()}
      />
    </>
  )
}

export default connectPage(WishlistPage, {
  displayName: 'WishlistPage'
})

export const query = graphql`
  query ($jaenPageId: String!) {
    ...JaenPageQuery
  }
`
