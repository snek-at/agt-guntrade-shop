import http from 'http'
import url from 'url'
import querystring from 'querystring'
import Shopify, {ApiVersion} from '@shopify/shopify-api'
import ngrok from 'ngrok'

const initializeShopifyContext = () => {
  const {API_KEY, API_SECRET_KEY, SCOPES} = process.env

  Shopify.Context.initialize({
    API_KEY,
    API_SECRET_KEY,
    SCOPES: ['read_products'],
    HOST_NAME: process.env.HOST.replace(/https:\/\//, '') || 'localhost',
    IS_EMBEDDED_APP: false,
    API_VERSION: ApiVersion.October21,
    SESSION_STORAGE: new Shopify.Session.MemorySessionStorage()
  })
}

let ACTIVE_SHOPIFY_SHOPS

async function onRequest(request, response) {
  const SHOP = process.env.SHOP || ''
  const {headers, url: req_url} = request
  const pathName = url.parse(req_url || '').pathname
  const queryString = String(url.parse(req_url || '').query)
  const query = querystring.parse(queryString)

  switch (pathName) {
    case '/login':
      try {
        const authRoute = await Shopify.Auth.beginAuth(
          request,
          response,
          SHOP,
          '/auth/callback',
          false
        )

        response.writeHead(302, {Location: authRoute})
        response.end()
      } catch (e) {
        console.log(e)
        response.writeHead(500)
        if (e instanceof Shopify.Errors.ShopifyError) {
          response.end(e.message)
        } else {
          response.end(`Failed to complete OAuth process: ${e.message}`)
        }
      }
      break
    case '/auth/callback':
      console.log('Hello')
      try {
        const session = await Shopify.Auth.validateAuthCallback(
          request,
          response,
          query
        )
        ACTIVE_SHOPIFY_SHOPS[SHOP] = session.scope

        console.log(session.accessToken)
        const searchParams = new URLSearchParams(request.url)
        const host = searchParams.get('host')
        const shop = searchParams.get('shop')
        response.writeHead(302, {Location: `/?host=${host}&shop=${shop}`})
        response.end()
      } catch (e) {
        console.log(e)

        response.writeHead(500)
        if (e instanceof Shopify.Errors.ShopifyError) {
          response.end(e.message)
        } else {
          response.end(`Failed to complete OAuth process: ${e.message}`)
        }
      }
      break
    default:
      if (ACTIVE_SHOPIFY_SHOPS[SHOP] === undefined) {
        response.writeHead(302, {Location: `/login`})
        response.end()
      }
  }
}

const loadSession = async (request, response, isOnline) => {
  const session = await Shopify.Utils.loadCurrentSession(
    request,
    response,
    isOnline
  )
  return session
}
const initializeShopify = async isOnline => {
  let session
  initializeShopifyContext()
  http
    .createServer(async (request, response) => {
      await onRequest(request, response)
      session = await loadSession(request, response, isOnline)
      /*      if (!Shopify.Context.SCOPES.equals(session.scope)) {
        await onRequest(request, response) 
      }*/
    })
    .listen(3000, async () => {
      console.log(await ngrok.connect(3000))
    })
  return session
}

const fetchShopifyData = async (query, isOnline) => {
  const session = await initializeShopify(isOnline)
  console.log('SESSION', session)
  const client = new Shopify.Clients.Graphql(session.shop, session.accessToken)
  return await client.query({data: query})
}

export const fetchAllCollections = async isOnline => {
  return await fetchShopifyData(
    `{
    collections {
        edges{
            node{
                id
                title
                image
                products
                productsCount
            }
        }
    }
  }`,
    isOnline
  )
}
