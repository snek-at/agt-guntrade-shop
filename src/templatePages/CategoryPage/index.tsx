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
  /* const n = location.pathname.endsWith('/') ? 2 : 0
  let url = location.pathname
  for (let i = 0; i < n; i++) {
    url = url.slice(url.lastIndexOf('/') + 1)
  }

  history.replaceState('AGT-Guntrade', '', url) */
  if (pageContext.category.items.length === 1) {
    navigate(
      location.pathname.endsWith('/')
        ? location.pathname + 'products/'
        : location.pathname + '/products/'
    )
  }
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
