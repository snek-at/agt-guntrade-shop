import {PageProps} from 'gatsby'

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
        getPath: (title: string, handle: string, totalProducts: number) => {
          const pathname = location.pathname.replace(/\/$/, '')
          const splitTitle = title.split(':')
          const splitPath = pathname.split('/')

          if (totalProducts === 0) {
            return pathname
          } else if (title === 'Alle Produkte') {
            return `${pathname}/products/`
          } else if (handle.startsWith('a-')) {
            return `/${splitTitle[splitTitle.length - 1]
              .toLowerCase()
              .replaceAll(' ', '-')}/${splitPath[splitPath.length - 1]}`
          } else {
            return `${pathname}/${splitTitle[splitTitle.length - 1]
              .toLowerCase()
              .replaceAll(' ', '-')}`
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
