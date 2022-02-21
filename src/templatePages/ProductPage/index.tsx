import {PageProps} from 'gatsby'
import {IGatsbyImageData} from 'gatsby-plugin-image'
import {ShopProductLayout} from '../../layout/ShopProductLayout'

type ProductPageProps = PageProps<
  {},
  {
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
      price: string
      status: string
    }
    productMoreDetail: {
      description: string
    }
    featuredProducts: Array<any>
  }
>

const ProductPage = ({pageContext, location}: ProductPageProps) => {
  return (
    <ShopProductLayout
      featuredProducts={pageContext.featuredProducts}
      header={{title: pageContext.header.title, path: location.pathname}}
      imageSlider={pageContext.imageSlider}
      productDetail={{
        title: pageContext.header.title,
        ...pageContext.productDetail
      }}
      productMoreDetail={pageContext.productMoreDetail}
    />
  )
}

export default ProductPage
