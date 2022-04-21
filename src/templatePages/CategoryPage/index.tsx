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

const CategoryPage = ({pageContext, path}: CategoryPageProps) => {
  return (
    <ShopCategoryLayout
      title={pageContext.category.title}
      path={path}
      category={{
        ...pageContext.category,
        getPath: (title: string, handle: string, totalProducts: number) => {
          const pathname = path.replace(/\/$/, '')
          const splitTitle = title.split(':')
          const splitPath = pathname.split('/')

          if (totalProducts === 0) {
            return pathname
          } else if (title === 'Alle Produkte') {
            return `${pathname}/produkte/`
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
          return `/produkte/${handle}`
        }
      }}
    />
  )
}

export default CategoryPage
