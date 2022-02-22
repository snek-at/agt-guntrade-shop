import {navigate, PageProps} from 'gatsby'
import {IGatsbyImageData} from 'gatsby-plugin-image'
import {WishlistService, useWishlist} from '../../services/wishlist'
import {ShopProductLayout} from '../../layout/ShopProductLayout'

type ProductPageProps = PageProps<
  {},
  {
    handle: string
    header: {title: string}
    imageSlider: {
      featuredImage: {
        alt: string
        gatsbyImageData: IGatsbyImageData
      }
      images: [
        {
          alt: string
          gatsbyImageData: IGatsbyImageData
        }
      ]
    }
    productDetail: {
      id: string
      price: string
      tags: string[]
    }
    productMoreDetail: {
      description: string
    }
    featuredProducts: Array<any>
  }
>

const ProductPage = ({pageContext, location}: ProductPageProps) => {
  const {wishlist, addToWishlist, removeFromWishlist} = useWishlist()

  const isOnWishList = wishlist.some(
    item => item.id === pageContext.productDetail.id
  )

  const handleWishlistAdd = (id: string) => {
    if (!isOnWishList) {
      const tagsWithoutCategory = pageContext.productDetail.tags
        .filter((tag: any) => !tag.startsWith('Kategorie:'))
        .map((tag: any) => tag.split(':')[1])
        .join(', ')

      addToWishlist({
        id,
        handle: pageContext.handle,
        title: pageContext.header.title,
        price: pageContext.productDetail.price,
        image: pageContext.imageSlider.featuredImage,
        categoriesString: tagsWithoutCategory,
        quantity: 1
      })
    } else {
      removeFromWishlist(id)
    }
  }

  const handleFeaturedProductClick = (product: any) => {
    navigate(`/products/${product.handle}/`)
  }

  return (
    <ShopProductLayout
      featuredProducts={{
        products: pageContext.featuredProducts,
        onProductClick: handleFeaturedProductClick
      }}
      header={{title: pageContext.header.title, path: location.pathname}}
      imageSlider={pageContext.imageSlider}
      productDetail={{
        title: pageContext.header.title,
        ...pageContext.productDetail,
        status: 'Verfügbar',
        isOnWishList,

        onWishlistAdd: handleWishlistAdd
      }}
      productMoreDetail={pageContext.productMoreDetail}
    />
  )
}

export default ProductPage
