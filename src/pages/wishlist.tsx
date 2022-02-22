import {navigate, PageProps} from 'gatsby'
import {useWishlist} from '../services/wishlist'
import {WishListLayout} from '../layout/WishListLayout'

const WishlistPage = ({}: PageProps) => {
  const {wishlist, updateQuantity, removeFromWishlist} = useWishlist()

  const handleProductOpen = (productId: string) => {
    const product = wishlist.find(item => item.id === productId)

    if (product) {
      navigate(`/products/${product.handle}`)
    }
  }

  const handleContinueShopping = () => {
    navigate('/products')
  }

  const handleRequestNow = () => {
    alert('Request now')
  }

  return (
    <WishListLayout
      items={wishlist}
      onRemove={removeFromWishlist}
      onQuantityChange={updateQuantity}
      onContinueShopping={handleContinueShopping}
      onRequestNow={handleRequestNow}
      onProductOpen={handleProductOpen}
    />
  )
}

export default WishlistPage
