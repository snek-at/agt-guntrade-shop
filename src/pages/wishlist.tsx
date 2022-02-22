import {navigate, PageProps} from 'gatsby'
import {useWishlist} from '../services/wishlist'
import {WishListLayout} from '../layout/WishListLayout'
import slugify from 'slugify'

const WishlistPage = ({location}: PageProps) => {
  const {wishlist, updateQuantity, removeFromWishlist} = useWishlist()

  const handleProductOpen = (productId: string) => {
    const title = wishlist.find(item => item.id === productId)?.title

    if (title) {
      navigate(`/products/${slugify(title)}`)
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
