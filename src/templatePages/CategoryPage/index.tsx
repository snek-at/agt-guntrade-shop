import {PageProps, navigate} from 'gatsby'
import slugify from 'slugify'

import {ShopCategoryLayout, CategoryItem} from '../../layout/ShopCategoryLayout'

type CategoryPageProps = PageProps<
  {},
  {
    category: {
      title: string
      items: Array<CategoryItem>
    }
    productGrid: {
      titel?: string | undefined
      items: Array<any>
    }
  }
>

const CategoryPage = ({pageContext, location}: CategoryPageProps) => {
  return (
    <ShopCategoryLayout
      title={pageContext.category.title}
      path={location.pathname}
      category={{
        ...pageContext.category,
        onItemClick: (item: CategoryItem) => {
          const to =
            location.pathname +
            (!location.pathname.endsWith('/') ? '/' : '') +
            (item.title == 'Alle Produkte'
              ? 'products'
              : slugify(item.title, {remove: /[*+~.()'"!:@]/g}).toLowerCase()) +
            '/'
          navigate(to)
        }
      }}
      productGrid={{
        ...pageContext.productGrid,
        onItemClick: (item: any) => {
          const to =
            '/products/' + slugify(item.title, {remove: /[*+~.()'"!:@]/g}) + '/'
          navigate(to)
        }
      }}
    />
  )
}

export default CategoryPage
