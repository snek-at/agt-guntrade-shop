import {PageProps, navigate} from 'gatsby'

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
        getPath: (handle: string) => {
          const pathname = location.pathname.replace(/\/$/, '')

          if (handle === 'alle-produkte') {
            return `${pathname}/products/`
          } else {
            return `${pathname}/${handle.split('-').at(-1)}`
          }
        }
      }}
      productGrid={{
        ...pageContext.productGrid,
        getPath: (handle: string) => {
          return `/products/${handle}`
        }
      }}
    />
  )
}

export default CategoryPage
