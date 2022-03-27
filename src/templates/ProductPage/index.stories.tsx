import {Story, Meta} from '@storybook/react'

import ProductPage, {ProductPageProps} from '.'

export default {
  title: 'Stories/ProductPage',
  component: ProductPage
} as Meta

const Template: Story<ProductPageProps> = args => <ProductPage {...args} />

export const Page = Template.bind({})
Page.args = {
  name: 'SumGun',
  price: 100,
  reducedprice: 120,
  images: [
    {
      gatsbyImageData: {
        images: {
          sources: [
            {
              srcSet:
                'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/links-48-900x900-transformed_225x225_crop_center.png.webp?v=1642003959 225w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/links-48-900x900-transformed_450x450_crop_center.png.webp?v=1642003959 450w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/links-48-900x900-transformed_900x900_crop_center.png.webp?v=1642003959 900w',
              sizes: '(min-width: 900px) 900px, 100vw',
              type: 'image/webp'
            }
          ],
          fallback: {
            src: 'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/links-48-900x900-transformed_900x900_crop_center.png?v=1642003959',
            srcSet:
              'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/links-48-900x900-transformed_225x225_crop_center.png?v=1642003959 225w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/links-48-900x900-transformed_450x450_crop_center.png?v=1642003959 450w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/links-48-900x900-transformed_900x900_crop_center.png?v=1642003959 900w',
            sizes: '(min-width: 900px) 900px, 100vw'
          }
        },
        layout: 'constrained',
        width: 900,
        height: 900
      }
    },
    {
      gatsbyImageData: {
        images: {
          sources: [
            {
              srcSet:
                'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/rechts-53-transformed_375x375_crop_center.png.webp?v=1642003959 375w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/rechts-53-transformed_750x750_crop_center.png.webp?v=1642003959 750w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/rechts-53-transformed_1500x1500_crop_center.png.webp?v=1642003959 1500w',
              sizes: '(min-width: 1500px) 1500px, 100vw',
              type: 'image/webp'
            }
          ],
          fallback: {
            src: 'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/rechts-53-transformed_1500x1500_crop_center.png?v=1642003959',
            srcSet:
              'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/rechts-53-transformed_375x375_crop_center.png?v=1642003959 375w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/rechts-53-transformed_750x750_crop_center.png?v=1642003959 750w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/rechts-53-transformed_1500x1500_crop_center.png?v=1642003959 1500w',
            sizes: '(min-width: 1500px) 1500px, 100vw'
          }
        },
        layout: 'constrained',
        width: 1500,
        height: 1500
      }
    },
    {
      gatsbyImageData: {
        images: {
          sources: [
            {
              srcSet:
                'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/Beschreibung-links-1-transformed_375x375_crop_center.png.webp?v=1642003959 375w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/Beschreibung-links-1-transformed_750x750_crop_center.png.webp?v=1642003959 750w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/Beschreibung-links-1-transformed_1500x1500_crop_center.png.webp?v=1642003959 1500w',
              sizes: '(min-width: 1500px) 1500px, 100vw',
              type: 'image/webp'
            }
          ],
          fallback: {
            src: 'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/Beschreibung-links-1-transformed_1500x1500_crop_center.png?v=1642003959',
            srcSet:
              'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/Beschreibung-links-1-transformed_375x375_crop_center.png?v=1642003959 375w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/Beschreibung-links-1-transformed_750x750_crop_center.png?v=1642003959 750w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/Beschreibung-links-1-transformed_1500x1500_crop_center.png?v=1642003959 1500w',
            sizes: '(min-width: 1500px) 1500px, 100vw'
          }
        },
        layout: 'constrained',
        width: 1500,
        height: 1500
      }
    }
  ],
  description: `<p data-mce-fragment="1"><span style="color: #000000;" data-mce-fragment="1" data-mce-style="color: #000000;">Ident.Nr. KW-PC: 02021002556456580-0542455006600486861-023610564566456900</span><br data-mce-fragment="1"> <span style="color: #000000;" data-mce-fragment="1" data-mce-style="color: #000000;">Waffenart: Selbstladepistole</span><br data-mce-fragment="1"> <span style="color: #000000;" data-mce-fragment="1" data-mce-style="color: #000000;">Fabrikat/Modell: Arex Zero Alpha LL: 5″</span><br data-mce-fragment="1"> <span style="color: #000000;" data-mce-fragment="1" data-mce-style="color: #000000;">Kaliber: 9x19mm</span><br data-mce-fragment="1"> <span style="color: #000000;" data-mce-fragment="1" data-mce-style="color: #000000;">Magazinkapazität: 20 Schuss</span><br data-mce-fragment="1"> <span style="color: #000000;" data-mce-fragment="1" data-mce-style="color: #000000;">Gültiger Beschuss: Ja</span><br data-mce-fragment="1"> * <span style="color: #000000;" data-mce-fragment="1" data-mce-style="color: #000000;">Zubehör: * Siehe Foto </span><br data-mce-fragment="1"> <span style="color: #000000;" data-mce-fragment="1" data-mce-style="color: #000000;">*Lauflänge: 127 mm</span><br data-mce-fragment="1"> <span style="color: #000000;" data-mce-fragment="1" data-mce-style="color: #000000;">* Gewicht: ca. 1205 g (Waffe leer)</span><br data-mce-fragment="1"> <span style="color: #000000;" data-mce-fragment="1" data-mce-style="color: #000000;">* “Ganzstahlwaffe” mit hervorragender Performance” – “Competition Ready out of the Box”</span><br data-mce-fragment="1"> <span style="color: #000000;" data-mce-fragment="1" data-mce-style="color: #000000;">* Griffstück Ganzstahl mit Beavertail</span><br data-mce-fragment="1"> <span style="color: #000000;" data-mce-fragment="1" data-mce-style="color: #000000;">* Werksüberarbeiteter Single/Double Action Abzug mit einstellbaren Trigger-Stop</span><br data-mce-fragment="1"> <span style="color: #000000;" data-mce-fragment="1" data-mce-style="color: #000000;">* Short Reset Trigger</span><br data-mce-fragment="1"> <span style="color: #000000;" data-mce-fragment="1" data-mce-style="color: #000000;">* Abzugsgewicht SA ca. 1400 g (Medium Schlagfeder)</span><br data-mce-fragment="1"> <span style="color: #000000;" data-mce-fragment="1" data-mce-style="color: #000000;">* Abzugsgewicht durch Tausch der Schlagfeder veränderbar</span><br data-mce-fragment="1"> <span style="color: #000000;" data-mce-fragment="1" data-mce-style="color: #000000;">* Schlagfedernset (Light, Medium, Strong)</span><br data-mce-fragment="1"> <span style="color: #000000;" data-mce-fragment="1" data-mce-style="color: #000000;">* Skeletierter Hammer</span><br data-mce-fragment="1"> <span style="color: #000000;" data-mce-fragment="1" data-mce-style="color: #000000;">* Verlängerte Bedienelement, beidseitig bedienbar</span><br data-mce-fragment="1"> <span style="color: #000000;" data-mce-fragment="1" data-mce-style="color: #000000;">* Verstellbare LPA Visierung, Kimme mit Rotpunkt</span><br data-mce-fragment="1"> <span style="color: #000000;" data-mce-fragment="1" data-mce-style="color: #000000;">* im orig. im Kunststoffkoffer mit drei Magazinen</span><br data-mce-fragment="1"> <span style="color: #000000;" data-mce-fragment="1" data-mce-style="color: #000000;">* Putzzeug</span><br data-mce-fragment="1"> <span style="color: #000000;" data-mce-fragment="1" data-mce-style="color: #000000;">* Werkzeug</span><br data-mce-fragment="1"> <span style="color: #000000;" data-mce-fragment="1" data-mce-style="color: #000000;">* Schlagfedernset</span></p>`,
  subheading:
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore',
  tags: ['tag', 'tag', 'tag', 'tag', 'tag', 'tag'],
  categories: {
    brand: 'SigSauer'
  }
}
