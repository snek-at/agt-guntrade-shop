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
        onItemClick: (item: CategoryItem) => {
          // remove the trailing slash
          const pathname = location.pathname.replace(/\/$/, '')

          if (item.handle === 'alle-produkte') {
            navigate(`${pathname}/products/`)
          } else {
            navigate(`${pathname}/${item.handle.split('-').at(-1)}`)
          }
        }
      }}
      productGrid={{
        ...pageContext.productGrid,
        onItemClick: (item: any) => {
          navigate(`/products/${item.handle}`)
        }
      }}
    />
  )
}

export default CategoryPage
