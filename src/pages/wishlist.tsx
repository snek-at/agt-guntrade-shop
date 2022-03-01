import React from 'react'
import {useDisclosure} from '@chakra-ui/hooks'
import {navigate, PageProps} from 'gatsby'
import {useWishlist} from '../services/wishlist'
import {WishListLayout} from '../layout/WishListLayout'
import ContactModal from '../components/organisms/ContactModal'

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
      <ContactModal wishlist={wishlist} isOpen={isOpen} heading={<p>Kaufanfrage (unverbindlich)</p>} text={<p>This is me</p>} onClose={()=>onClose()} />
    </>
  )
}

export default WishlistPage