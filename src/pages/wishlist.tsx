import {navigate} from 'gatsby'
import {useWishlist} from '../services/wishlist'
import {WishListLayout} from '../layout/WishListLayout'

const WishlistPage = () => {
  const handleContinueShopping = () => {
    navigate('/products')
  }

  const handleRequestNow = () => {
    alert('Request now')
  }

  const {wishlist, updateQuantity, removeFromWishlist} = useWishlist()

  return (
    <WishListLayout
      items={wishlist}
      onRemove={removeFromWishlist}
      onQuantityChange={updateQuantity}
      onContinueShopping={handleContinueShopping}
      onRequestNow={handleRequestNow}
    />
  )
}

export default WishlistPage
