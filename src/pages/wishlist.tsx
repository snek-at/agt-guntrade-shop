import {navigate, PageProps} from 'gatsby'
import {useWishlist} from '../services/wishlist'
import {WishListLayout} from '../layout/WishListLayout'

const WishlistPage = ({}: PageProps) => {
  const {wishlist, updateQuantity, removeFromWishlist} = useWishlist()

  const handleRequestNow = () => {
    alert('Request now')
  }

  return (
    <WishListLayout
      items={wishlist}
      onRemove={removeFromWishlist}
      onQuantityChange={updateQuantity}
      onRequestNow={handleRequestNow}
    />
  )
}

export default WishlistPage
