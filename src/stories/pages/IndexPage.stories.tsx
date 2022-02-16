import {Story, Meta} from '@storybook/react'

import IndexPage from '../../pages/index'

export default {
  title: 'Pages/IndexPage',
  component: IndexPage
} as Meta

type Props = React.ComponentProps<typeof IndexPage>

const Template: Story<Props> = args => <IndexPage {...args} />

export const Page = Template.bind({})

Page.args = {
  data: {
    allGoogleReview: {
      nodes: [
        {
          id: '335c6bc0-0d74-5564-a8e6-2f8616ddb5b2',
          rating: 4,
          body: 'Die Burg an sich ist ganz nett. Die Aussicht von oben ist super schön - sowohl über die Stadt als auch in der entgegengesetzten Seite in Richtung Berge.Das Museum kann mit dem Standardticket besucht werden, allerdings nicht nicht die Fürstenzimmer. Diese Kosten mehr, allerdings ist dann auch die Bahn inklusive.Die Ausstellung war leider enttäuschend, deshalb einen Stern Abzug.',
          sourceImage:
            'https://lh3.googleusercontent.com/a-/AOh14GgkjmtRZC3CEX5PZoHm7VUFBmX04lU9GNHIQMX-80Y=s40-c-c0x00000000-cc-rp-mo-ba3-br100',
          source: 'Tobias Junck'
        },
        {
          id: 'a5e66d1f-d7ce-56e2-8b7f-51e1650079cc',
          rating: 5,
          body: 'Für mich eines der Tophighlights in Salzburg. Mit einer Standseilbahn (~13 €)  geht es in die Höhe. Oben angekommen hat man vielfältige Möglichkeiten sich zu beschäftigen (Restaurant, Museum, Aussichtsplatformen) Der Blick in die Ferne ist unvergesslich und immer wieder einen Besuch wert.',
          sourceImage:
            'https://lh3.googleusercontent.com/a-/AOh14GgowkZV1VeALIm1OIWsdrGWIRWaeMUnvDi-bN17e70=s40-c-c0x00000000-cc-rp-mo-ba6-br100',
          source: 'Stefan Krausse'
        },
        {
          id: 'e4e63194-43c7-5713-a47c-aa1efb7fe29b',
          rating: 5,
          body: 'Ein interessanter Ort! Wir dachten, wir sind in einer Stunde fertig, waren aber 5 Stunden dort 😀 Inkl. Panoramarestautant. Kauft lieber gleich AI Ticket, das alles ist sehenswert! Und ihr spart einwenig wenn ihr die Tickets online kauft. Da muss man aber genaue Uhrzeit angeben.',
          sourceImage:
            'https://lh3.googleusercontent.com/a/AATXAJz1o-XFDEsFv1idTLTukHZteg-OrwLevLR1PEcc=s40-c-c0x00000000-cc-rp-mo-ba4-br100',
          source: 'Julia Luft'
        },
        {
          id: 'e879c3a1-18c2-52b0-acbd-657d99993782',
          rating: 5,
          body: 'Ein Traum und immer einen Besuch wert. Die Festung Hohensalzburg ist ein Muss bei jedem Salzburg Besuch und vor allem in Zeiten von Corona ohne den tausenden Touristen ein Traum, noch dazu bei einem Jännertag mit 12 Grad Plus.',
          sourceImage:
            'https://lh3.googleusercontent.com/a-/AOh14GhvKkFRyGMadhsQMkIXmu9YqXKFCLjdcxJhveTOey4=s40-c-c0x00000000-cc-rp-mo-ba5-br100',
          source: 'Thomas M.'
        },
        {
          id: 'eecd536e-4e85-53ea-9b69-5a12e6a420fd',
          rating: 5,
          body: 'Ein toller Ausflug mit viel Spaß!Nur leider haben wir die Museen nicht sehen können - sie werden viel früher als die Festung geschlossen. Deshalb hatten wir die Tickets umsonst bezahlt.Wenn man die Festung in allen Zügen genießen will und Pausen auch in der Gastronomie einlegen möchte, sollte man schon einen ganzen Tag einplanen können.',
          sourceImage:
            'https://lh3.googleusercontent.com/a-/AOh14GjxW1M4LQF1KVaIEgPXnaCN6DTNZHntrwOhA-pR6H0=s40-c-c0x00000000-cc-rp-mo-ba5-br100',
          source: 'Veronika Müller'
        },
        {
          id: '418bf8e5-13eb-5807-abb8-54739b4eb43c',
          rating: 5,
          body: 'Wunderschöne Burg, beeindruckende Räume, viele tolle Erklärungen, Überraschungen für Groß und Klein. Nicht nur stupides lesen von Schrifttafeln sondern auch interaktive Dinge zum erleben, Hebel bewegen, drehen, Fragen beantworten.Alles mit sehr viele liebe zum Detail aufbereitet.Nur empfehlenswert',
          sourceImage:
            'https://lh3.googleusercontent.com/a/AATXAJx5HtZ86lf9c2DH837KUbywGZTovDoBzj_bs7mc=s40-c-c0x00000000-cc-rp-mo-br100',
          source: 'Claudia K'
        },
        {
          id: '04231a76-2c1c-5108-8f02-469c90d6151c',
          rating: 5,
          body: 'Wunderschöne Burg mit vielen antiken Sehenswürdigkeiten. Herrlicher Blick über Salzburg und weit ins Land hinein. Die Burg ist erstaunlich gut erhalten und unbedingt einen Besuch wert. Schon die Zahnradbahn zur Burg hoch ein Erlebnis. Gastronomie zahlreich vorhanden. Ein Besuch auf der Burg ein muss.',
          sourceImage:
            'https://lh3.googleusercontent.com/a/AATXAJyhxagwppCA4fDBJMcJ-lxk4vBpLUAZPQOLceXA=s40-c-c0x00000000-cc-rp-mo-br100',
          source: 'Georg Henning'
        },
        {
          id: '04c94c8d-6f66-54e7-8259-ab75c097a2a0',
          rating: 5,
          body: 'Feinste Aussicht auf Salzburg in alle Richtungen. Ich würde auf jeden Fall die FestungsBahn hoch nehmen und ggf. zu Fuß hinunter gehen. Zu Fuß hoch ist schon eine Hürde, die man sich auch als sportlicher Mensch besser überlegen sollte. Die Ausstellungen oben waren jetzt nicht soo toll, aber die Aussicht ist dagegen erstklassig. Vielleicht macht es daher Sinn, nach dem günstigsten Ticket hoch inkl. Turmbesichtigung zu fragen.',
          sourceImage:
            'https://lh3.googleusercontent.com/a-/AOh14GjYyOVH4OsLP4EkYh2e20glWjgrS2CXe1y95wS1gQ=s40-c-c0x00000000-cc-rp-mo-ba4-br100',
          source: 'Robert Hartl'
        },
        {
          id: '37e9a557-eaf6-5cd2-935b-82f73ae83c3a',
          rating: 5,
          body: 'Ein toller Ort mit atemberaubender Aussicht! Wer Salzburg besucht MUSS auf die Festung!Nach oben gelangt man  mit der Standseilbahn. Es besteht jedoch auch die Möglichkeit zu laufen!Die Aussicht kann mit dem Aufstieg zum Turm noch getoppt werden. Die Preise der Gastronomie waren für dieses sensationellen Ambiente absolut angemessen. Freundliches Personal.',
          sourceImage:
            'https://lh3.googleusercontent.com/a-/AOh14GjCTYDbwMjd4nFn_6AEnZ7lOqlx9TIqzJCFXWOPLA=s40-c-c0x00000000-cc-rp-mo-ba5-br100',
          source: 'dieter klepp'
        },
        {
          id: 'e7c06b7d-86e0-5249-a783-e35e1fec7ae3',
          rating: 5,
          body: 'Ein Besuch auf der Festung Hohensalzburg lohnt sich allein schon für die Aussicht auf die Stadt und die schöne Landschaft! Aber auch die Museen und Geschichte der Festung und der Stadt sind sehr interessant und informativ gestaltet. Sicherlich gibt es auch für Kinder viel zu sehen und zu entdecken. Man kann sich so viel Zeit lassen wie man möchte. Für mich hat sich das Ticket auf jeden Fall gelohnt und ich würde auf jeden Fall nochmal wieder kommen.',
          sourceImage:
            'https://lh3.googleusercontent.com/a/AATXAJxnUKbbJScevCJ-aDirQbBDs05HLFFQccuw0ap5=s40-c-c0x00000000-cc-rp-mo-br100',
          source: 'Sarah Große'
        },
        {
          id: 'd1e30375-ba2f-5554-b672-717b1e1322f3',
          rating: 5,
          body: 'Die Festung von Salzburg erzählt viel von ihrer Geschichte. Ein netter Rundgang durch die Zeit, mit Hilfe von akustischen Erzählungen, bewegten Darstellungen, Bildern, Texten und Museumsstücke. Im Preis von 13, 30Euro ist die Fahrt mit der Felsbahn inkludiert. Um das Fürstenzimmer zu sehen muss man aber 3,30 Euro extra zahlen, was sich meiner Meinung nach nicht lohnt.',
          sourceImage:
            'https://lh3.googleusercontent.com/a-/AOh14GiEsa7s7sR8SMkHeTsyonwTDpPuC_XnETtsTpO_AQ=s40-c-c0x00000000-cc-rp-mo-ba4-br100',
          source: 'Manuela Häsel'
        },
        {
          id: '396f58c8-f08d-5d5f-beb6-31f83d254c36',
          rating: 5,
          body: 'Ein Besuch auf der Festung Hohensalzburg ist ein absolutes muss. Die Anlage ist extrem schön und mit einen normalen Eintritt für erwachsene von 10,30€ ist sehr viel inklusive. Die Museen sind sehr schön aufgebaut. Es gibt auch einige Möglichkeiten zum Essen oder trinken. Zusätzlich hat man von dort eine grandiose Aussicht.',
          sourceImage:
            'https://lh3.googleusercontent.com/a-/AOh14GheMzALgWNOEXZvPOxxI84G_EMWJzQ5oImAydZM2w=s40-c-c0x00000000-cc-rp-mo-ba6-br100',
          source: 'Markus Sachenbacher'
        },
        {
          id: '653a50aa-e0dd-5084-a5c3-c9213bf9ce7b',
          rating: 5,
          body: 'Toller Ausflug mit toller Aussicht! Ein Erlebnis für die ganze Familie und auch für jeden nicht Touristen ;) einen Besuch wert! Das Essen auf der sonnigen Terrasse hat uns ebenfalls sehr geschmeckt und das Personal war sehr freundlich, auch die niedliche Burgkatze im Innenhof! ❤️',
          sourceImage:
            'https://lh3.googleusercontent.com/a-/AOh14GhFI003defYMmjIu3-we8NkiOd0XcfUZQS8dtqQ=s40-c-c0x00000000-cc-rp-mo-br100',
          source: 'Patrizia Koeberl'
        },
        {
          id: '3dd11be4-53aa-5729-a3b8-ff478d957cbc',
          rating: 5,
          body: 'Ein Erlebnis für sich. Durch Gassen laufend, das Ambiente genießend die Bahn zur Burg gesucht und gefunden...Bahnpreis war vertretbar. Auf der Festung Hohensalzburg selbst, kann man sehr viel erkunden...lauter verwinkelte Gänge und Räume...für Entdecker genau richtig. Gastronomie gibt es auf der Festung ebenso, zu ehrlichen Preisen. Die Aussicht vom Turm ist atemberaubent schön in alle Richtungen. Salzburg zu Füßen, die Berge im Rücken. Was will man mehr. Touristisch ist einiges los, verläuft sich aber in dieser großen Festung. Einfach neugierig sein und viel Zeit mitbringen. Hier geht der Tag vorbei.',
          sourceImage:
            'https://lh3.googleusercontent.com/a-/AOh14GhM0PSJOhsh9kR9NmVulEwY4dZw89bRu4_SIZu3=s40-c-c0x00000000-cc-rp-mo-ba5-br100',
          source: 'Chris Bara'
        },
        {
          id: '8b8144ff-8f4b-53e2-a29d-e0fc0129ce2d',
          rating: 4,
          body: 'Eine beeindruckende Festung hoch oben - Tickets vorher online buchen lohnt sich - man muss nicht anstehen und kann alle Räume besichtigen, man benötigt schon ein paar Stunden eh man durch ist - für kleine Kinder bestimmt echt anstrengend! Wir waren 4 Stunden Vorort und nachher zu Fuß zur Altstadt laufen - Hoch lohnt sich die Bahn 👍',
          sourceImage:
            'https://lh3.googleusercontent.com/a/AATXAJyoCiD-k9z8W1y3AQY2I8o3MHdjiuQ8oc4wGyWt=s40-c-c0x00000000-cc-rp-mo-ba3-br100',
          source: 'M. H.'
        },
        {
          id: 'b014199a-e344-5b37-942f-5bfa5cceb001',
          rating: 5,
          body: 'Sehr interessant, toller Ausblick, der neu gestaltete Rundgang ist sehr empfehlenswert. Toll ist das Modell der Festung aus Salz. Tolle Ausblicke vom Aussichtsturm etc.Mit der Salzburgcard kostenfrei.',
          sourceImage:
            'https://lh3.googleusercontent.com/a-/AOh14GjRVH_-SHXDjR5NQ1uOFFjqxxCl9uuyqEvPH3FmPg=s40-c-c0x00000000-cc-rp-mo-ba4-br100',
          source: 'Claudia B.'
        },
        {
          id: 'f024683a-49bc-50ac-8f04-045f5f1d5064',
          rating: 5,
          body: 'Sehr schöne und beeindruckende mittelalterliche Festung oberhalb von Salzburg. Die Fahrt mit der Bergbahn ist schon ein Erlebnis. Ganz wundervolle Ausblicke auf Salzburg und Umgebung. Schön gestaltete Museen. Unbedingt das Fürstenzimmer besuchen, es lohnt sich.',
          sourceImage:
            'https://lh3.googleusercontent.com/a-/AOh14GiHdM0SoYGJSybBLaHJwGTHlyMMVOKD5JoKrp9JSg=s40-c-c0x00000000-cc-rp-mo-ba4-br100',
          source: 'Thomas A.'
        },
        {
          id: 'e19ab494-c627-5c49-aa47-4215e02f06bd',
          rating: 5,
          body: 'Unfassbar welche Anstrengungen damals unternommen wurden um diese imposante Festung zu verwirklichen! Nach einen kurzen aber steilen Fußmarsch wird man mit einem atemberaubenden Ausblick über Salzburg belohnt! Jedesmal wieder schön!',
          sourceImage:
            'https://lh3.googleusercontent.com/a-/AOh14GilbjcB2RicXnU3i9DMly1X2w5iea-c7vEcMT3Yh_Q=s40-c-c0x00000000-cc-rp-mo-ba6-br100',
          source: 'Paul Michael Böhm'
        },
        {
          id: 'a596b80a-803a-557e-ac00-acbe8b6e13da',
          rating: 5,
          body: 'Wir sind hoch und hinunter gelaufen. Leider,denn wir wollten nach unten fahren. Man muss Tickets für die Bahn vorher kaufen!!!Die Festung hat uns sehr gut gefallen.Es gibt sehr viele Möglichkeiten mit der Geschichte vertraut zu machen. Die Aussicht ist grandios! Für das leibliche Wohl ist ausgiebig gesorgt!',
          sourceImage:
            'https://lh3.googleusercontent.com/a-/AOh14GifYJk5veRFTfW4j_HDSrgacCh6MFwLo0pSAeCrIA=s40-c-c0x00000000-cc-rp-mo-br100',
          source: 'Silvia Breu'
        },
        {
          id: '219eef4f-be86-5fbe-9149-338d6c4ea60d',
          rating: 5,
          body: 'Ist man in Salzburg muss man die Festung besichtigen! Der Rundgang durch die Festung ist gut organisiert und die Infos werden spannend vermittelt. Außerdem ist die Aussicht toll.',
          sourceImage:
            'https://lh3.googleusercontent.com/a-/AOh14GjlvzXM2agoIAQszWaWUuUP5bCQ55E8kX_9MSnq=s40-c-c0x00000000-cc-rp-mo-ba5-br100',
          source: 'Christine Sprengel'
        }
      ]
    },
    allShopifyProduct: {
      edges: [
        {
          node: {
            createdAt: '2022-02-10T18:55:07Z',
            description:
              'Ident.Nr. KW-PC: 02021002556456580-0542455006600486861-023610564566456900 Waffenart: Selbstladepistole Fabrikat/Modell: Arex Zero Alpha LL: 5″ Kaliber: 9x19mm Magazinkapazität: 20 Schuss Gültiger Beschuss: Ja Zubehör: * Siehe Foto *Lauflänge: 127 mm * Gewicht: ca. 1205 g (Waffe leer) * “Ganzstahlwaffe” mit hervorragender Performance” – “Competition Ready out of the Box” * Griffstück Ganzstahl mit Beavertail * Werksüberarbeiteter Single/Double Action Abzug mit einstellbaren Trigger-Stop * Short Reset Trigger * Abzugsgewicht SA ca. 1400 g (Medium Schlagfeder) * Abzugsgewicht durch Tausch der Schlagfeder veränderbar * Schlagfedernset (Light, Medium, Strong) * Skeletierter Hammer * Verlängerte Bedienelement, beidseitig bedienbar * Verstellbare LPA Visierung, Kimme mit Rotpunkt * im orig. im Kunststoffkoffer mit drei Magazinen * Putzzeug * Werkzeug * Schlagfedernset Zustand: Fabrikneu Versandkosten/Abholung: Auf Anfrage / Abholung nur nach vorheriger Terminabsprache',
            images: [
              {
                gatsbyImageData: {
                  images: {
                    sources: [
                      {
                        srcSet:
                          'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-48-900x900-transformed_225x225_crop_center.png.webp?v=1644519547 225w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-48-900x900-transformed_450x450_crop_center.png.webp?v=1644519547 450w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-48-900x900-transformed_900x900_crop_center.png.webp?v=1644519547 900w',
                        sizes: '(min-width: 900px) 900px, 100vw',
                        type: 'image/webp'
                      }
                    ],
                    fallback: {
                      src: 'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-48-900x900-transformed_900x900_crop_center.png?v=1644519547',
                      srcSet:
                        'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-48-900x900-transformed_225x225_crop_center.png?v=1644519547 225w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-48-900x900-transformed_450x450_crop_center.png?v=1644519547 450w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-48-900x900-transformed_900x900_crop_center.png?v=1644519547 900w',
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
                          'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/Beschreibung-links-1-transformed_375x375_crop_center.png.webp?v=1644519547 375w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/Beschreibung-links-1-transformed_750x750_crop_center.png.webp?v=1644519547 750w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/Beschreibung-links-1-transformed_1500x1500_crop_center.png.webp?v=1644519547 1500w',
                        sizes: '(min-width: 1500px) 1500px, 100vw',
                        type: 'image/webp'
                      }
                    ],
                    fallback: {
                      src: 'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/Beschreibung-links-1-transformed_1500x1500_crop_center.png?v=1644519547',
                      srcSet:
                        'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/Beschreibung-links-1-transformed_375x375_crop_center.png?v=1644519547 375w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/Beschreibung-links-1-transformed_750x750_crop_center.png?v=1644519547 750w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/Beschreibung-links-1-transformed_1500x1500_crop_center.png?v=1644519547 1500w',
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
                          'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/rechts-53-transformed_375x375_crop_center.png.webp?v=1644519544 375w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/rechts-53-transformed_750x750_crop_center.png.webp?v=1644519544 750w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/rechts-53-transformed_1500x1500_crop_center.png.webp?v=1644519544 1500w',
                        sizes: '(min-width: 1500px) 1500px, 100vw',
                        type: 'image/webp'
                      }
                    ],
                    fallback: {
                      src: 'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/rechts-53-transformed_1500x1500_crop_center.png?v=1644519544',
                      srcSet:
                        'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/rechts-53-transformed_375x375_crop_center.png?v=1644519544 375w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/rechts-53-transformed_750x750_crop_center.png?v=1644519544 750w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/rechts-53-transformed_1500x1500_crop_center.png?v=1644519544 1500w',
                      sizes: '(min-width: 1500px) 1500px, 100vw'
                    }
                  },
                  layout: 'constrained',
                  width: 1500,
                  height: 1500
                }
              }
            ],
            priceRangeV2: {
              maxVariantPrice: {
                amount: '990.0'
              },
              minVariantPrice: {
                amount: '990.0'
              }
            },
            tags: ['Kaliber:9x19mm', 'Kategorie:Pistolen', 'Kategorie:Waffen'],
            title: 'Arex Zero Alpha'
          }
        },
        {
          node: {
            createdAt: '2022-02-10T19:01:49Z',
            description:
              'Die Pistole CZ75 TS Orange gehört zu Gattung von Waffen, die für das Sportschiessen bestimmt sind. Sie gehen von ausgefallenen und beliebten Modellen aus und durch genau gezielte Aufbereitungen der Schlüsseldetails bringen deren Eigenschaften wieder um eine Stufe höher. Ident.Nr.: KW-PC: 00201986800-0414894892001522005412-0818600215008954245 Waffenart: Selbstladepistole Fabrikat/Modell: CZ75 Tactical Sports Orange Kaliber: 9x19mm Magazinkapazität: 20 Patronen Gültiger Beschuss: Ja Beschreibung: * Gesamtlänge: 150mm * Höhe: 45mm * Breite: 225mm * Lauflänge: 130mm * Visier: Verstellbar * Abzugssystem: SA/DA * Gewicht: 1270g * Im original Koffer * Direkt Abzug * Neue Rahmen von der Hand gepasster Verschluss * Polierter Lauf * Alutrichter für die bessere Magazineinführung in die Waffe * Einstellbares Visier und Korn mit roter Glasfaser mit Dm von 1mm * Flache orangefarbene Alu-Griffstalen und Daumenstütze * Neue Rahmenausführung mit schärferen Rillen erhöht wesentlich die Griffsicherheit und komfort * Nach einem Czechmate-Vorbild teilweise aufbereitete Rahmenform * Bestandteil der Packung ein Satz von Puffern für Reduzierung des Rückschlags * Feder in der Originalverpackung im Koffer innen liegend Mainspring (Schließfeder) in der Pistole 20 Ib * Recoil spring (Rückzugfeder) in der Pistole 16 Ib Zustand: Fabrikneu',
            images: [
              {
                gatsbyImageData: {
                  images: {
                    sources: [
                      {
                        srcSet:
                          'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links_209-900x900-transformed_225x225_crop_center.png.webp?v=1644519711 225w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links_209-900x900-transformed_450x450_crop_center.png.webp?v=1644519711 450w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links_209-900x900-transformed_900x900_crop_center.png.webp?v=1644519711 900w',
                        sizes: '(min-width: 900px) 900px, 100vw',
                        type: 'image/webp'
                      }
                    ],
                    fallback: {
                      src: 'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links_209-900x900-transformed_900x900_crop_center.png?v=1644519711',
                      srcSet:
                        'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links_209-900x900-transformed_225x225_crop_center.png?v=1644519711 225w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links_209-900x900-transformed_450x450_crop_center.png?v=1644519711 450w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links_209-900x900-transformed_900x900_crop_center.png?v=1644519711 900w',
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
                          'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-vorne_65-transformed_375x375_crop_center.png.webp?v=1644519711 375w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-vorne_65-transformed_750x750_crop_center.png.webp?v=1644519711 750w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-vorne_65-transformed_1500x1500_crop_center.png.webp?v=1644519711 1500w',
                        sizes: '(min-width: 1500px) 1500px, 100vw',
                        type: 'image/webp'
                      }
                    ],
                    fallback: {
                      src: 'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-vorne_65-transformed_1500x1500_crop_center.png?v=1644519711',
                      srcSet:
                        'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-vorne_65-transformed_375x375_crop_center.png?v=1644519711 375w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-vorne_65-transformed_750x750_crop_center.png?v=1644519711 750w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-vorne_65-transformed_1500x1500_crop_center.png?v=1644519711 1500w',
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
                          'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/rechts_232-transformed_375x375_crop_center.png.webp?v=1644519711 375w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/rechts_232-transformed_750x750_crop_center.png.webp?v=1644519711 750w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/rechts_232-transformed_1500x1500_crop_center.png.webp?v=1644519711 1500w',
                        sizes: '(min-width: 1500px) 1500px, 100vw',
                        type: 'image/webp'
                      }
                    ],
                    fallback: {
                      src: 'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/rechts_232-transformed_1500x1500_crop_center.png?v=1644519711',
                      srcSet:
                        'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/rechts_232-transformed_375x375_crop_center.png?v=1644519711 375w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/rechts_232-transformed_750x750_crop_center.png?v=1644519711 750w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/rechts_232-transformed_1500x1500_crop_center.png?v=1644519711 1500w',
                      sizes: '(min-width: 1500px) 1500px, 100vw'
                    }
                  },
                  layout: 'constrained',
                  width: 1500,
                  height: 1500
                }
              }
            ],
            priceRangeV2: {
              maxVariantPrice: {
                amount: '2390.0'
              },
              minVariantPrice: {
                amount: '2390.0'
              }
            },
            tags: ['Kaliber:9x19mm', 'Kategorie:Pistolen', 'Kategorie:Waffen'],
            title: 'CZ 75 Tactical Sports Orange'
          }
        },
        {
          node: {
            createdAt: '2022-02-10T19:04:38Z',
            description:
              '!!! IN ÖSTERREICH NOCH NIE DA GEWESEN!!! !!! SELTENE NEUHEIT !!!!! In Österreich ab jetzt als Kat.: B Waffe auf WBK oder WP erwerbbar. Pistole CSA Sa61, Kal.7,65mm Brow. “Modell Skorpion” mit 20Schuss Magazin. Unser Sa vz.61 ist die halbautomatische Version des legendären Sa vz.61, der Ende der 1950er Jahre in der Tschechoslowakei entwickelt wurde. Die Sa vz.61 wurde für Aufklärungseinheiten, Panzerbesatzungen, Spezialeinheiten und Sicherheitskräfte des Innenministeriums entwickelt. Die Sa vz.61 wurde entwickelt, um einem speziellen Bedarf an kompakten Feuerwaffen gerecht zu werden, die wie eine Pistole in einem Holster getragen werden können. Ident.Nr: SLB-PC: 0028707852054-758200550052456-054078578102 Waffenart: Selbstladepistole Fabrikat/Modell: CSA Sa61 “Skorpion” Kaliber: 7,65mm Browning (.32 ACP) Magazinkapazität: 20Schuss Gültiger Beschuss: Ja Zubehör: * siehe Foto * im orig. Koffer * mit Reserve Magazin * Lauflänge: 115mm * Gesamtlänge: 273mm * Breite der Waffe: 45mm * Höhe der Pistole mit 20. Magazin: 165mm * Gewicht der Pistole ohne Magazin: 1,29kg * Gewicht der Pistole mit vollem 20. Magazin: 1,55kg * Gewicht des leeren 20. Magazins: 0,11kg * Gewicht des vollen 20. Magazins: 0,26kg Zustand: Fabrikneu',
            images: [
              {
                gatsbyImageData: {
                  images: {
                    sources: [
                      {
                        srcSet:
                          'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-900x900-transformed_225x225_crop_center.png.webp?v=1644520721 225w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-900x900-transformed_450x450_crop_center.png.webp?v=1644520721 450w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-900x900-transformed_900x900_crop_center.png.webp?v=1644520721 900w',
                        sizes: '(min-width: 900px) 900px, 100vw',
                        type: 'image/webp'
                      }
                    ],
                    fallback: {
                      src: 'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-900x900-transformed_900x900_crop_center.png?v=1644520721',
                      srcSet:
                        'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-900x900-transformed_225x225_crop_center.png?v=1644520721 225w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-900x900-transformed_450x450_crop_center.png?v=1644520721 450w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-900x900-transformed_900x900_crop_center.png?v=1644520721 900w',
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
                          'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/Koffer-transformed_480x480_crop_center.png.webp?v=1644520721 480w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/Koffer-transformed_960x960_crop_center.png.webp?v=1644520721 960w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/Koffer-transformed_1920x1920_crop_center.png.webp?v=1644520721 1920w',
                        sizes: '(min-width: 1920px) 1920px, 100vw',
                        type: 'image/webp'
                      }
                    ],
                    fallback: {
                      src: 'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/Koffer-transformed_1920x1920_crop_center.png?v=1644520721',
                      srcSet:
                        'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/Koffer-transformed_480x480_crop_center.png?v=1644520721 480w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/Koffer-transformed_960x960_crop_center.png?v=1644520721 960w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/Koffer-transformed_1920x1920_crop_center.png?v=1644520721 1920w',
                      sizes: '(min-width: 1920px) 1920px, 100vw'
                    }
                  },
                  layout: 'constrained',
                  width: 1920,
                  height: 1920
                }
              },
              {
                gatsbyImageData: {
                  images: {
                    sources: [
                      {
                        srcSet:
                          'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/rechts-tGbDaa16Z-transformed_375x375_crop_center.png.webp?v=1644519881 375w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/rechts-tGbDaa16Z-transformed_750x750_crop_center.png.webp?v=1644519881 750w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/rechts-tGbDaa16Z-transformed_1500x1500_crop_center.png.webp?v=1644519881 1500w',
                        sizes: '(min-width: 1500px) 1500px, 100vw',
                        type: 'image/webp'
                      }
                    ],
                    fallback: {
                      src: 'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/rechts-tGbDaa16Z-transformed_1500x1500_crop_center.png?v=1644519881',
                      srcSet:
                        'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/rechts-tGbDaa16Z-transformed_375x375_crop_center.png?v=1644519881 375w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/rechts-tGbDaa16Z-transformed_750x750_crop_center.png?v=1644519881 750w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/rechts-tGbDaa16Z-transformed_1500x1500_crop_center.png?v=1644519881 1500w',
                      sizes: '(min-width: 1500px) 1500px, 100vw'
                    }
                  },
                  layout: 'constrained',
                  width: 1500,
                  height: 1500
                }
              }
            ],
            priceRangeV2: {
              maxVariantPrice: {
                amount: '790.0'
              },
              minVariantPrice: {
                amount: '790.0'
              }
            },
            tags: ['Kaliber:.32ACP', 'Kategorie:Pistolen', 'Kategorie:Waffen'],
            title: 'CSA Sa61 "Skorpion"'
          }
        },
        {
          node: {
            createdAt: '2022-02-10T19:06:14Z',
            description:
              'Die Pistole wurde für die Disziplinen der statischen Präzision entwickelt und ist das Ergebnis einer engen Zusammenarbeit zwischen erfahrenen Schützen und den Experten des Frankonia Tuning Center. Das Ziel dieses Projekts wurde klar definiert. Zwei wesentliche Faktoren sollten miteinander kombiniert werden: Einerseits die ausgereifte CZ-Technologie, die als Basis mit hervorragenden Tuning-Teilen konzipiert wurde, und andererseits die umfassende Erfahrung in Entwicklung und Montage. Zahlreiche praktische und präzise Tests sowie mehrere tausend Schüsse führten letztendlich zu einem Ergebnis, das in Bezug auf Perfektion ziemlich beeindruckend ist! Aufgrund der Sicherheit auf beiden Seiten ist die Waffe ideal für Rechts- und Linkshänder geeignet. Die Pistole kann auch für Schützen mit kleineren Händen angepasst werden. Dies wird durch die Griffbreite von nur 29 mm und einen einstellbaren Abzugsvorschub gewährleistet. Die massive Staubschutzhülle ist mit einer Schiene versehen, an der beispielsweise zusätzliche Gewichte angebracht werden können Ident.Nr. KW-PC: 00202054550-557758554001299087764854-00250440415002456022 Waffenart: Selbstladepistole Fabrikat/Modell: CZ 75 Taipan Orange Pro Tuning Kaliber: 9x19mm Magazinkapazität: 19 Schuss Gültiger Beschuss: Ja Beschreibung: * orangefarbene Elemente – Alu-Griffschalen, Abzugszüngel, Alu-Magazinboden * eigene Entwicklung * Single-Action-Only vom Feinsten * ausgewogene Gewichtsverteilung * Schlitten von Hand auf Griffstück angepasst Zubehör: * Siehe Foto Visier: LPA TRT Visier * Visier: 3,0 mm voll einstellbar * Visier: 2,95 mm * Visierlänge: 206 mm * Griff: orangefarbene Aluminiumgriffschuppen mit scharfem Schachbrettmuster * Sicherheit: Drehhebelverriegelung auf beiden Seiten * Auslöser: Auslöser nur mit einer Aktion und SAO-Hammer * Abzugsgewicht: ca. 1.250 g * Zündverzögerungszeit: 6 ms * Lauflänge: 153 mm * Gewicht ohne Magazin: 1.290 g Zustand: Fabrikneu Versandkosten/Abholung: Auf Anfrage / Abholung nur nach vorheriger Terminabsprache',
            images: [
              {
                gatsbyImageData: {
                  images: {
                    sources: [
                      {
                        srcSet:
                          'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-900x900-transformed_0a80aeb0-2b5f-4d80-90a3-28b63f0a4410_225x225_crop_center.png.webp?v=1644519976 225w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-900x900-transformed_0a80aeb0-2b5f-4d80-90a3-28b63f0a4410_450x450_crop_center.png.webp?v=1644519976 450w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-900x900-transformed_0a80aeb0-2b5f-4d80-90a3-28b63f0a4410_900x900_crop_center.png.webp?v=1644519976 900w',
                        sizes: '(min-width: 900px) 900px, 100vw',
                        type: 'image/webp'
                      }
                    ],
                    fallback: {
                      src: 'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-900x900-transformed_0a80aeb0-2b5f-4d80-90a3-28b63f0a4410_900x900_crop_center.png?v=1644519976',
                      srcSet:
                        'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-900x900-transformed_0a80aeb0-2b5f-4d80-90a3-28b63f0a4410_225x225_crop_center.png?v=1644519976 225w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-900x900-transformed_0a80aeb0-2b5f-4d80-90a3-28b63f0a4410_450x450_crop_center.png?v=1644519976 450w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-900x900-transformed_0a80aeb0-2b5f-4d80-90a3-28b63f0a4410_900x900_crop_center.png?v=1644519976 900w',
                      sizes: '(min-width: 900px) 900px, 100vw'
                    }
                  },
                  layout: 'constrained',
                  width: 900,
                  height: 900
                }
              }
            ],
            priceRangeV2: {
              maxVariantPrice: {
                amount: '1899.0'
              },
              minVariantPrice: {
                amount: '1899.0'
              }
            },
            tags: ['Kaliber:9x19mm', 'Kategorie:Pistolen', 'Kategorie:Waffen'],
            title: 'CZ 75 Taipan Orange Pro Tuning'
          }
        },
        {
          node: {
            createdAt: '2022-02-10T19:08:42Z',
            description:
              'Beschreibung Der CZ Scorpion EVO3 S1 Carbine in 9x19mm wurde soeben als Kategorie B Waffe eingestuft und somit zum Verkauf in Österreich auf Waffenbesitzkarte oder Waffenpass freigegeben. Eine absolute Qualitäts-Neuheit auf den noch nie da gewesenen österreichischen Waffenmarkt. Top Semi Auto Waffe für: * Sportschützen * IPSC- Schießsport und vielen anderen Disziplinen. Hoch genauer, selbstladender Karabiner mit Kaliber 9×19. Durch sein geringes Gewicht, die hervorragende Ergonomie, die extreme Zuverlässigkeit unter allen Bedingungen und das außerordentlich schnelle Laden handelt es sich um die ideale Waffe für moderne Schießsportdisziplinen und Hobbyschützen. Ident.Nr. SK-PC: 00246403300-45864800990087498/485-0084685485447 Waffenart: Selbstladegewehr Fabrikat/Modell: CZ Scorpion EVO3 S1 Carbine Kaliber: 9x19mm Magazinkapazität: 10 Patronen Gültiger Beschuss: Ja Zubehör: * siehe Foto * Bewährte Konstruktionsplattform des CZ SCORPION EVO 3 * 411 mm langer Lauf mit ½x28“ Gewinde an der Mündung * Verlängerter Vorschaft mit oberer MIL-STD-1913 Schiene und Montageschnittstelle M-LOK an den Seiten und unten * Automatische Schlagbolzenblockierung * Klappbare, teleskopische Schulterstütze * Ergonomischer Pistolengriff mit Positionseinstellung an der Waffe * Beidseitige oder einfach umstellbare Bedienelemente * Rahmen: Leichtmetall * Weite: 60mm * Lauflänge: 410mm * Gesamtlänge: 826-876mm Zustand: Fabrikneu',
            images: [
              {
                gatsbyImageData: {
                  images: {
                    sources: [
                      {
                        srcSet:
                          'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-96-900x900-transformed_225x225_crop_center.png.webp?v=1644520137 225w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-96-900x900-transformed_450x450_crop_center.png.webp?v=1644520137 450w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-96-900x900-transformed_900x900_crop_center.png.webp?v=1644520137 900w',
                        sizes: '(min-width: 900px) 900px, 100vw',
                        type: 'image/webp'
                      }
                    ],
                    fallback: {
                      src: 'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-96-900x900-transformed_900x900_crop_center.png?v=1644520137',
                      srcSet:
                        'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-96-900x900-transformed_225x225_crop_center.png?v=1644520137 225w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-96-900x900-transformed_450x450_crop_center.png?v=1644520137 450w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-96-900x900-transformed_900x900_crop_center.png?v=1644520137 900w',
                      sizes: '(min-width: 900px) 900px, 100vw'
                    }
                  },
                  layout: 'constrained',
                  width: 900,
                  height: 900
                }
              }
            ],
            priceRangeV2: {
              maxVariantPrice: {
                amount: '1490.0'
              },
              minVariantPrice: {
                amount: '1490.0'
              }
            },
            tags: [
              'Kaliber:9x19mm',
              'Kategorie:Selbstladegewehre',
              'Kategorie:Waffen'
            ],
            title: 'CZ Scorpion Evo3 S1 Carbine'
          }
        },
        {
          node: {
            createdAt: '2022-02-10T19:11:55Z',
            description:
              'Der AC Alfa Selbstladekarabiner Modell: LLC (Limex Luger Carbine) in 9x19mm wurde soeben als Kategorie B Waffe eingestuft und somit zum Verkauf in Österreich auf Waffenbesitzkarte oder Waffenpass freigegeben. Eine absolute Qualitäts-Neuheit auf den noch nie da gewesenen österreichischen Waffenmarkt. Top Semi Auto Waffe für: * Sportschützen * IPSC- Schießsport und vielen anderen Disziplinen. Ident.Nr. SK-PC: 00204658201444-46450087500544565842-201145654698428 Waffenart: Selbstladecarabine Kat.B Fabrikat/Modell: AC Alfa Selbstladekarabiner Modell: LLC (Limex Luger Carbine) Semi Auto Kaliber: 9x19mm Magazinkapazität: 10 Schuss Magazin Gültiger Beschuss: Ja Zubehör: * siehe Foto * Selbstladekarabiner für alle Glock Magazine in 9x19mm * 32 Schuss AC Unity Magazine 9×19 * Metall Back Up Sights * Compensator * gefräster Upper * Kunststoff Dust Cover * Kompensator Kunststoff Lower & MLOK Handschutz * Beidseitiger Bedienhebel * M4-Style Schubschaft * Tragetasche * Gesamtlänge : 680mm * Lauflänge: 260mm; 2,6kg mit leerem Magazin Zustand: Fabrikneu Versandkosten/Abholung: Auf Anfrage / Abholung nur nach vorheriger Terminabsprache',
            images: [
              {
                gatsbyImageData: {
                  images: {
                    sources: [
                      {
                        srcSet:
                          'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-97-900x900-transformed_225x225_crop_center.png.webp?v=1644520317 225w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-97-900x900-transformed_450x450_crop_center.png.webp?v=1644520317 450w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-97-900x900-transformed_900x900_crop_center.png.webp?v=1644520317 900w',
                        sizes: '(min-width: 900px) 900px, 100vw',
                        type: 'image/webp'
                      }
                    ],
                    fallback: {
                      src: 'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-97-900x900-transformed_900x900_crop_center.png?v=1644520317',
                      srcSet:
                        'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-97-900x900-transformed_225x225_crop_center.png?v=1644520317 225w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-97-900x900-transformed_450x450_crop_center.png?v=1644520317 450w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-97-900x900-transformed_900x900_crop_center.png?v=1644520317 900w',
                      sizes: '(min-width: 900px) 900px, 100vw'
                    }
                  },
                  layout: 'constrained',
                  width: 900,
                  height: 900
                }
              }
            ],
            priceRangeV2: {
              maxVariantPrice: {
                amount: '0.0'
              },
              minVariantPrice: {
                amount: '0.0'
              }
            },
            tags: [
              'Kaliber:9x19mm',
              'Kategorie:Selbstladegewehre',
              'Kategorie:Waffen'
            ],
            title:
              'AC Alfa Selbstladekarabiner Modell: LLC (Limex Luger Carbine)'
          }
        },
        {
          node: {
            createdAt: '2022-02-10T19:14:27Z',
            description:
              'Die CSV-9 vom tschechischen Hersteller Czech Weapons. Sehr schön gefertigte halbautomatische Pistole/Selbstladegewehr mit einem aus dem vollen gefrästen Stahlgehäuse. Kompatibel mit Glock Magazinen. Ausgestattet mit einem Quadrailvorderschaft, Klappschaft und beidseitig bedienbarer Sicherung. Der Ladehebel kann links oder rechts der Waffe angebracht werden Diese kurze Karabinerversion wurde für den zivilen Markt hergestellt – Sport, Gesundheits- und Eigentumsschutz oder Zielschießen. Unabhängig von seiner geringen Größe macht es Spaß, mit solch kompakten Waffenabmessungen zu schießen und unerwartete Feuerkraft zu haben. Ident.Nr. SK-PC: 00204658201444-46450099900544565842-201145654698428 Waffenart: Selbstladebüchse Fabrikat/Modell: Czech Weapons CSV-9 Kaliber: 9mm Luger Magazinkapazität:17 Schuss Magazin Gültiger Beschuss: Ja Zubehör: * siehe Foto * Lauflänge: 120mm * Waffenlänge: 335/547 mm * Waffenhöhe: 150mm * Waffenbreite: 47 mm (Körper max. 32 mm) * Waffengewicht: 1,85 kg (Stahlkörper) Zustand: Fabrikneu',
            images: [
              {
                gatsbyImageData: {
                  images: {
                    sources: [
                      {
                        srcSet:
                          'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-12-900x900-transformed_225x225_crop_center.png.webp?v=1644520468 225w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-12-900x900-transformed_450x450_crop_center.png.webp?v=1644520468 450w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-12-900x900-transformed_900x900_crop_center.png.webp?v=1644520468 900w',
                        sizes: '(min-width: 900px) 900px, 100vw',
                        type: 'image/webp'
                      }
                    ],
                    fallback: {
                      src: 'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-12-900x900-transformed_900x900_crop_center.png?v=1644520468',
                      srcSet:
                        'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-12-900x900-transformed_225x225_crop_center.png?v=1644520468 225w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-12-900x900-transformed_450x450_crop_center.png?v=1644520468 450w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-12-900x900-transformed_900x900_crop_center.png?v=1644520468 900w',
                      sizes: '(min-width: 900px) 900px, 100vw'
                    }
                  },
                  layout: 'constrained',
                  width: 900,
                  height: 900
                }
              }
            ],
            priceRangeV2: {
              maxVariantPrice: {
                amount: '1590.0'
              },
              minVariantPrice: {
                amount: '1590.0'
              }
            },
            tags: [
              'Kaliber:9mm',
              'Kategorie:Selbstladegewehre',
              'Kategorie:Waffen'
            ],
            title: 'Czech Weapons CSV-9'
          }
        },
        {
          node: {
            createdAt: '2022-02-10T19:17:57Z',
            description:
              'Die speziell für die Bedürfnisse von IPSC-Schützen abgestimmte 92X Performance Production erfüllt perfekt die wichtigsten Anforderungen: Schnelligkeit und Präzision! Das für absolute Zuverlässigkeit berühmte Modell 92 gibt dem ambitionierten Schützen die Sicherheit, sich voll auf seinen Sport zu konzentrieren, ohne jeden Zweifel an der Funktion und Präzision seiner Sportwaffe. Der extrem kurze Rückstellweg des Abzugs ermöglicht hervorragende Splitzeiten, das Vertec-Stahlgriffstück mit Checkering an Front- und Rückseite und der schwere Brigadier-Schlitten mit „Sägezahn“-Griffrillen garantieren maximale Waffenkontrolle. Magazinschacht angetrichtert vergrößerte Bedienelemente mit optimierten Handling-Eigenschaften für Rechts- und Linkshänder Extreme-S Abzugssystem mit Skeleton-Hammer & Competition-Schlagfeder Ident.Nr. KW-PC: 0465465842020410-21584798654400110800449658435-012554984125353140 Waffenart: Selbstladepistole Fabrikat/Modell: Beretta 92X Performance Production Kaliber: 9x19mm Magazinkapazität: 15 Schuss Gültiger Beschuss: Ja Beschreibung: Abzug: SA/DA, Short Reset, Vorzug und Triggerstop einstellbar Sicherung: beidseitig, am Griffstück Visierung: verstellbar, Korn mit Fiberoptik-Leuchteinsatz Montageschiene: vorne am Dustcover Lauflänge: 125 mm Gesamtlänge: 222 mm Gewicht: 1350 g Ganzstahl Bauweise Nistain Finish Zustand: Fabrikneu',
            images: [
              {
                gatsbyImageData: {
                  images: {
                    sources: [
                      {
                        srcSet:
                          'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-13-900x900-transformed_225x225_crop_center.png.webp?v=1644520704 225w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-13-900x900-transformed_450x450_crop_center.png.webp?v=1644520704 450w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-13-900x900-transformed_900x900_crop_center.png.webp?v=1644520704 900w',
                        sizes: '(min-width: 900px) 900px, 100vw',
                        type: 'image/webp'
                      }
                    ],
                    fallback: {
                      src: 'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-13-900x900-transformed_900x900_crop_center.png?v=1644520704',
                      srcSet:
                        'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-13-900x900-transformed_225x225_crop_center.png?v=1644520704 225w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-13-900x900-transformed_450x450_crop_center.png?v=1644520704 450w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-13-900x900-transformed_900x900_crop_center.png?v=1644520704 900w',
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
                          'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/Koffer-5-transformed_480x480_crop_center.png.webp?v=1644520704 480w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/Koffer-5-transformed_960x960_crop_center.png.webp?v=1644520704 960w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/Koffer-5-transformed_1920x1920_crop_center.png.webp?v=1644520704 1920w',
                        sizes: '(min-width: 1920px) 1920px, 100vw',
                        type: 'image/webp'
                      }
                    ],
                    fallback: {
                      src: 'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/Koffer-5-transformed_1920x1920_crop_center.png?v=1644520704',
                      srcSet:
                        'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/Koffer-5-transformed_480x480_crop_center.png?v=1644520704 480w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/Koffer-5-transformed_960x960_crop_center.png?v=1644520704 960w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/Koffer-5-transformed_1920x1920_crop_center.png?v=1644520704 1920w',
                      sizes: '(min-width: 1920px) 1920px, 100vw'
                    }
                  },
                  layout: 'constrained',
                  width: 1920,
                  height: 1920
                }
              },
              {
                gatsbyImageData: {
                  images: {
                    sources: [
                      {
                        srcSet:
                          'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/rechts-13-transformed_375x375_crop_center.png.webp?v=1644520680 375w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/rechts-13-transformed_750x750_crop_center.png.webp?v=1644520680 750w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/rechts-13-transformed_1500x1500_crop_center.png.webp?v=1644520680 1500w',
                        sizes: '(min-width: 1500px) 1500px, 100vw',
                        type: 'image/webp'
                      }
                    ],
                    fallback: {
                      src: 'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/rechts-13-transformed_1500x1500_crop_center.png?v=1644520680',
                      srcSet:
                        'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/rechts-13-transformed_375x375_crop_center.png?v=1644520680 375w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/rechts-13-transformed_750x750_crop_center.png?v=1644520680 750w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/rechts-13-transformed_1500x1500_crop_center.png?v=1644520680 1500w',
                      sizes: '(min-width: 1500px) 1500px, 100vw'
                    }
                  },
                  layout: 'constrained',
                  width: 1500,
                  height: 1500
                }
              }
            ],
            priceRangeV2: {
              maxVariantPrice: {
                amount: '1575.0'
              },
              minVariantPrice: {
                amount: '1575.0'
              }
            },
            tags: ['Kaliber:9x19mm', 'Kategorie:Pistolen', 'Kategorie:Waffen'],
            title: 'Beretta Pistole 92X Performance Production'
          }
        },
        {
          node: {
            createdAt: '2022-02-10T19:23:37Z',
            description:
              'Ident.Nr. SLF-PC: 202054510-41658400125005400-23564458610 Waffenart: russische Einlaufflinte Fabrikat/Modell: Baikal MP+18M-M Kaliber: 12/76 Gültiger Beschuss: Ja Zustand: Fabrikneu Versandkosten/Abholung: Auf Anfrage / Abholung nur nach vorheriger Terminabsprache',
            images: [
              {
                gatsbyImageData: {
                  images: {
                    sources: [
                      {
                        srcSet:
                          'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-3-900x900-transformed_225x225_crop_center.png.webp?v=1644521019 225w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-3-900x900-transformed_450x450_crop_center.png.webp?v=1644521019 450w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-3-900x900-transformed_900x900_crop_center.png.webp?v=1644521019 900w',
                        sizes: '(min-width: 900px) 900px, 100vw',
                        type: 'image/webp'
                      }
                    ],
                    fallback: {
                      src: 'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-3-900x900-transformed_900x900_crop_center.png?v=1644521019',
                      srcSet:
                        'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-3-900x900-transformed_225x225_crop_center.png?v=1644521019 225w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-3-900x900-transformed_450x450_crop_center.png?v=1644521019 450w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-3-900x900-transformed_900x900_crop_center.png?v=1644521019 900w',
                      sizes: '(min-width: 900px) 900px, 100vw'
                    }
                  },
                  layout: 'constrained',
                  width: 900,
                  height: 900
                }
              }
            ],
            priceRangeV2: {
              maxVariantPrice: {
                amount: '199.0'
              },
              minVariantPrice: {
                amount: '199.0'
              }
            },
            tags: [
              'Kaliber:12/76',
              'Kategorie:Schrotflinten',
              'Kategorie:Waffen'
            ],
            title: 'Baikal M+18M-M mit Holzschaft'
          }
        },
        {
          node: {
            createdAt: '2022-02-10T19:26:36Z',
            description:
              'Ident.Nr. SLF-PC: 202054510-41658400125005400-23564458610 Waffenart: russische Einlaufflinte Fabrikat/Modell: Baikal MP-18EMK-M mit Ejektor Kaliber: 12/76 Gültiger Beschuss: Ja Beschreibung: Schaftmaterial: Kunststoffschaft Zustand: Fabrikneu',
            images: [
              {
                gatsbyImageData: {
                  images: {
                    sources: [
                      {
                        srcSet:
                          'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-6-900x900-transformed_225x225_crop_center.png.webp?v=1644521248 225w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-6-900x900-transformed_450x450_crop_center.png.webp?v=1644521248 450w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-6-900x900-transformed_900x900_crop_center.png.webp?v=1644521248 900w',
                        sizes: '(min-width: 900px) 900px, 100vw',
                        type: 'image/webp'
                      }
                    ],
                    fallback: {
                      src: 'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-6-900x900-transformed_900x900_crop_center.png?v=1644521248',
                      srcSet:
                        'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-6-900x900-transformed_225x225_crop_center.png?v=1644521248 225w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-6-900x900-transformed_450x450_crop_center.png?v=1644521248 450w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-6-900x900-transformed_900x900_crop_center.png?v=1644521248 900w',
                      sizes: '(min-width: 900px) 900px, 100vw'
                    }
                  },
                  layout: 'constrained',
                  width: 900,
                  height: 900
                }
              }
            ],
            priceRangeV2: {
              maxVariantPrice: {
                amount: '275.0'
              },
              minVariantPrice: {
                amount: '275.0'
              }
            },
            tags: [
              'Kaliber:12/76',
              'Kategorie:Schrotflinten',
              'Kategorie:Waffen'
            ],
            title: 'Baikal MP-18EMK-M, mit Kunststoffschaft'
          }
        },
        {
          node: {
            createdAt: '2022-02-10T19:30:56Z',
            description:
              'Mallard ist eine Schrotflinte, die mit einem Doppelabzug und einem Abzieher ausgestattet ist. Der Lauf ist poliert und in den Kalibern 20 und 12. Dank der Zusammenarbeit der renommierten türkischen Firma Huglu mit CZ-USA hat die Česká zbrojovka as ihr Produktportfolio um eine Reihe attraktiver moderner Schrotflinten, Doppelflinten und Selbstladeflinten erweitert . Alle diese Schrotflinten der Marke CZ-USA zeichnen sich durch eine hochwertige Konstruktion und Verarbeitung zu einem sehr freundlichen Endpreis aus. Verwendung von Schrotpatronen in Schrotflinten CZ-USA Schrotflinten, Ziegen und halbatomare Schrotflinten sind auf eine Kammerlänge von 76 mm gekammert und durch einen höheren Drucktest (Prüfzeichen V im Wappen) verifiziert, der die Verwendung von Patronen ermöglicht beladen mit Bleischrot in Rundlängen von 65 mm bis 76 mm oder 70 mm Patronen mit Stahlschrot bis zu einem Schrotdurchmesser von 3,25 mm. CZ-USA-Schrotflinten haben daher nicht das Lilie-Quälereizeichen, sind jedoch resistent gegen das Schießen mit Schrotflinten der oben genannten Art. Gilt für beide Kaliber – 12 und 20. * günstige Ergonomie * gute Schussergebnisse (ohne Zielen) * gute Balance der Waffe garantiert schnelles und leichtes Zielen * geringer Abzugswiderstand * hohe Schussgenauigkeit * lange Lebensdauer hohe Zuverlässigkeit Ident.Nr. FL-PC: 020265849864057510-64968400340004558415-0500590065545984177 Waffenart: Schrotflinte BDF Fabrikat/Modell: CZ-USA MALLARD Kaliber: 12/76 Gültiger Beschuss: Ja / Stahlschrotbeschuss Zustand: Fabrikneu Beschreibung: * Gesamtlänge: 1145 mm * Lauflänge: 760 mm * Waffenhöhe: 183 mm * Waffenbreite: 46 mm * Masse: 3,35 kg',
            images: [
              {
                gatsbyImageData: {
                  images: {
                    sources: [
                      {
                        srcSet:
                          'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-12-900x900-transformed_083293d6-a84b-4722-871c-4d77f65f1d80_225x225_crop_center.png.webp?v=1644521458 225w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-12-900x900-transformed_083293d6-a84b-4722-871c-4d77f65f1d80_450x450_crop_center.png.webp?v=1644521458 450w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-12-900x900-transformed_083293d6-a84b-4722-871c-4d77f65f1d80_900x900_crop_center.png.webp?v=1644521458 900w',
                        sizes: '(min-width: 900px) 900px, 100vw',
                        type: 'image/webp'
                      }
                    ],
                    fallback: {
                      src: 'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-12-900x900-transformed_083293d6-a84b-4722-871c-4d77f65f1d80_900x900_crop_center.png?v=1644521458',
                      srcSet:
                        'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-12-900x900-transformed_083293d6-a84b-4722-871c-4d77f65f1d80_225x225_crop_center.png?v=1644521458 225w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-12-900x900-transformed_083293d6-a84b-4722-871c-4d77f65f1d80_450x450_crop_center.png?v=1644521458 450w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-12-900x900-transformed_083293d6-a84b-4722-871c-4d77f65f1d80_900x900_crop_center.png?v=1644521458 900w',
                      sizes: '(min-width: 900px) 900px, 100vw'
                    }
                  },
                  layout: 'constrained',
                  width: 900,
                  height: 900
                }
              }
            ],
            priceRangeV2: {
              maxVariantPrice: {
                amount: '690.0'
              },
              minVariantPrice: {
                amount: '690.0'
              }
            },
            tags: [
              'Kaliber:12/76',
              'Kategorie:Schrotflinten',
              'Kategorie:Waffen'
            ],
            title: 'BDF Flinte CZ-USA MALLARD'
          }
        },
        {
          node: {
            createdAt: '2022-02-10T19:32:24Z',
            description:
              'Ident.Nr. FL-PC: 020265849864057510-64968400350004558415-0541565545984177 Waffenart: Bockflinte Fabrikat/Modell: Landor Arms PX502 Kaliber: 12/76 Gültiger Beschuss: Ja Magazinkapazität: Zustand: Fabrikneu Beschreibung: * Stahlbaskül mit aufgesetzter, doppelt verstifteter Aluminium-Picatinnyschiene mit Mittenausfräsung/Fluchtvisierlinie * Einabzug, Läufe vorwählbar * Schwarzer Polymerschaft mit QD Riemenbügelschnittstelle * Lauflänge 50cm, * inkl. doppelt verstifteter Picatinnyschiene am untern Lauf * Patronenauszieher * rotes Fiberkorn, eingesetzt im Stahlkornträger * tief ventilierte Schaftkappe * Länge: 93,5cm * Lauflänge: 50cm * Gewicht: ca.3 kg',
            images: [
              {
                gatsbyImageData: {
                  images: {
                    sources: [
                      {
                        srcSet:
                          'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-900x900-transformed_a7b8a0af-c88b-41e1-94e1-5f66a48d16f3_225x225_crop_center.png.webp?v=1644521589 225w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-900x900-transformed_a7b8a0af-c88b-41e1-94e1-5f66a48d16f3_450x450_crop_center.png.webp?v=1644521589 450w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-900x900-transformed_a7b8a0af-c88b-41e1-94e1-5f66a48d16f3_900x900_crop_center.png.webp?v=1644521589 900w',
                        sizes: '(min-width: 900px) 900px, 100vw',
                        type: 'image/webp'
                      }
                    ],
                    fallback: {
                      src: 'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-900x900-transformed_a7b8a0af-c88b-41e1-94e1-5f66a48d16f3_900x900_crop_center.png?v=1644521589',
                      srcSet:
                        'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-900x900-transformed_a7b8a0af-c88b-41e1-94e1-5f66a48d16f3_225x225_crop_center.png?v=1644521589 225w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-900x900-transformed_a7b8a0af-c88b-41e1-94e1-5f66a48d16f3_450x450_crop_center.png?v=1644521589 450w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-900x900-transformed_a7b8a0af-c88b-41e1-94e1-5f66a48d16f3_900x900_crop_center.png?v=1644521589 900w',
                      sizes: '(min-width: 900px) 900px, 100vw'
                    }
                  },
                  layout: 'constrained',
                  width: 900,
                  height: 900
                }
              }
            ],
            priceRangeV2: {
              maxVariantPrice: {
                amount: '599.0'
              },
              minVariantPrice: {
                amount: '599.0'
              }
            },
            tags: [
              'Kaliber:12/76',
              'Kategorie:Schrotflinten',
              'Kategorie:Waffen'
            ],
            title: 'Bockflinte Landor Arms PX502'
          }
        },
        {
          node: {
            createdAt: '2022-02-10T19:35:22Z',
            description:
              'Die Bockdoppelflinte Forest Favorit „Jagd“ verfügt über eine stabile Keilverriegelung und wird ausschließlich im beliebten Kaliber 12/76 angeboten. Das Kaliber 12/76 mit Stahlschrotbeschuss lässt bei Bedarf starke Schrot Vorlagen zu, was gerade bei der Gänsejagd von Vorteil sein kann. Selbstverständlich lassen sich auch alle 70er Patronen in diesem Kaliber verschießen. Bockdoppelflinten sind sowohl im jagdlichen als auch im sportlichen Schießen universell einsetzbar und allgemein einfacher zu bedienen als Querflinten. Mit der Bockdoppelflinte Forest Favorit sind hohe Schusskadenzen ohne Beeinträchtigung der Trefferbilder und ohne Nachteile für den Schützen möglich – der Vorderschaft umschließt hierbei den unteren Lauf. Die Hand greift nicht direkt auf das heiße Metall wie bei einer Querflinte. Des Weiteren kann bei Bockflinten durch den gradlinigeren Rückstoß der zweite Schuß etwas schneller abgegeben werden. Optisch handelt es sich bei dieser Serie um besonders schöne Flinten mit ventiliertem Laufbündel und einer gravierten Basküle mit Jagdmotiv. Die Lauflänge beträgt 71 cm, was der Handhabung dieser Waffe im vielseitigen Jagdbetrieb entgegen kommt. Der Einabzug mit mechanischer Umschaltung ist sehr praktisch und macht eine zügige Schussfolge möglich. Das Blitzsystem mit einer Abzugssicherung auf dem Kolbenhals ist schnell erreichbar. Der Schaft ist aus schönen Nussbaumholz gefertigt. Ident.Nr. FL-PC: 020265849864057510-64968400349004558415-0541565545984177 Waffenart: Bockdoppelflinte Fabrikat/Modell: Forest Favorit Jagd Art.Nr.: 146441 Kaliber: 12/76 Gültiger Beschuss: Ja / Stahlschrotbeschuss Zubehör: * siehe Foto * sehr gutes Preis-Leistungs-Verhältnis * gut ausbalanciert * besonders führig * Lauflänge: 71 cm * stabile Keilverriegelung * 7 mm breite Schiene * Einabzug mit mechanischer Umschaltung * ohne Ejektor * Wechselchokes (1/4, 1/2, 3/4, 1/1) * Nussbaumschaft mit Gummikappe * Schaftlänge 37 cm, Senkung 38/56 * Gewicht: ca. 3,2 kg * Gesamtlänge: 116cm * Schaftform: Pistolenschaft * Schaftmaterial: Holz * Systemmaterial: Stahl * Sicherung: Abzugssicherung Zustand: Fabrikneu',
            images: [
              {
                gatsbyImageData: {
                  images: {
                    sources: [
                      {
                        srcSet:
                          'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-15-900x900-transformed_225x225_crop_center.png.webp?v=1644521725 225w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-15-900x900-transformed_450x450_crop_center.png.webp?v=1644521725 450w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-15-900x900-transformed_900x900_crop_center.png.webp?v=1644521725 900w',
                        sizes: '(min-width: 900px) 900px, 100vw',
                        type: 'image/webp'
                      }
                    ],
                    fallback: {
                      src: 'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-15-900x900-transformed_900x900_crop_center.png?v=1644521725',
                      srcSet:
                        'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-15-900x900-transformed_225x225_crop_center.png?v=1644521725 225w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-15-900x900-transformed_450x450_crop_center.png?v=1644521725 450w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-15-900x900-transformed_900x900_crop_center.png?v=1644521725 900w',
                      sizes: '(min-width: 900px) 900px, 100vw'
                    }
                  },
                  layout: 'constrained',
                  width: 900,
                  height: 900
                }
              }
            ],
            priceRangeV2: {
              maxVariantPrice: {
                amount: '599.0'
              },
              minVariantPrice: {
                amount: '599.0'
              }
            },
            tags: [
              'Kaliber:12/76',
              'Kategorie:Schrotflinten',
              'Kategorie:Waffen'
            ],
            title: 'Forest Favorit Bockdoppelflinte Jagd'
          }
        },
        {
          node: {
            createdAt: '2022-02-10T19:38:11Z',
            description:
              'Schnittige Gebrauchswaffe für Jäger und Sportschützen, die zwar keineswegs Abstriche in der Qualität ihrer Waffe machen, aber auch nicht zuviel investieren möchten. Gladius Bockdoppelflinten: Die Gladius Bockdoppelflinten zeichnen sich durch eine einfache und führige Handhabung aus und haben sich in der vielseitigen jagdlichen Praxis seit vielen Jahren bestens bewährt. Die Modellreihe ist in den universellen Kalibern 12/76 oder 20/76 erhältlich mit denen man auch 70er Patronen verschießen kann. Die Flinten verfügen ferner über einen Stahlschrotbeschuss und ein geringes Gewicht von ca. 2,75 kg und sind somit auch für Damen hervorragend geeignet. Die Holzschäfte aus Nussbaum verfügen über eine Länge von rund 37 cm. Das System verfügt über ein Blitzschloss, die Sicherung ist mit Schieber ist auf dem Kolbenhals angebracht. Der Einabzug mit Umschaltung erlaubt ein schnelles Reagieren auf sich ändernde Jagdsituationen. Die im Lieferumfang enthaltenen Wechselchokes (1/4, 1/2, 3/4, 1/1) ermöglichen eine vielseitige jagdliche und sportliche Nutzung. Ident.Nr. FL-PC: 020265849864057510-64968400349004558415-0541565545984177 Waffenart: Bockdoppelflinte Fabrikat/Modell: Gladius mit schwarzer Basküle Kaliber: 12/76 Gültiger Beschuss: Ja / Stahlschrotbeschuss Zubehör: * siehe Foto * dezente Arabeskengravur * Stahlschrotbeschuss * schön gemaserter Schaft aus türkischem Nussbaumholz mit Ölfinish’ * Gewicht: ca. 2,75 kg * Lauflänge: 71 cm * Wechselchokes (1/4, 1/2, 3/4, 1/1) * Mit Stahlschrotbeschuss * System: Blitzschloss, ohne Ejektor * Verschluss: Laufhakenverriegelung * Abzug: Einabzug mit Umschaltung * Abzugsgewicht: ca. 2.000 g * Schaft: Nussbaum, Schaftänge: 37 cm, Senkung: 37/53 * Sicherung: Abzugssicherung durch Schieber auf dem Kolbenhals * Visierung: Perlkorn * Systemmaterial: Dural *Zustand: Fabrikneu',
            images: [
              {
                gatsbyImageData: {
                  images: {
                    sources: [
                      {
                        srcSet:
                          'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-15-900x900-W3Bqn_CFb-transformed_225x225_crop_center.png.webp?v=1644521893 225w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-15-900x900-W3Bqn_CFb-transformed_450x450_crop_center.png.webp?v=1644521893 450w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-15-900x900-W3Bqn_CFb-transformed_900x900_crop_center.png.webp?v=1644521893 900w',
                        sizes: '(min-width: 900px) 900px, 100vw',
                        type: 'image/webp'
                      }
                    ],
                    fallback: {
                      src: 'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-15-900x900-W3Bqn_CFb-transformed_900x900_crop_center.png?v=1644521893',
                      srcSet:
                        'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-15-900x900-W3Bqn_CFb-transformed_225x225_crop_center.png?v=1644521893 225w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-15-900x900-W3Bqn_CFb-transformed_450x450_crop_center.png?v=1644521893 450w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-15-900x900-W3Bqn_CFb-transformed_900x900_crop_center.png?v=1644521893 900w',
                      sizes: '(min-width: 900px) 900px, 100vw'
                    }
                  },
                  layout: 'constrained',
                  width: 900,
                  height: 900
                }
              }
            ],
            priceRangeV2: {
              maxVariantPrice: {
                amount: '599.0'
              },
              minVariantPrice: {
                amount: '599.0'
              }
            },
            tags: [
              'Kaliber:12/76',
              'Kategorie:Schrotflinten',
              'Kategorie:Waffen'
            ],
            title: 'Gladius Bockdoppelflinte mit schwarzer Basküle'
          }
        },
        {
          node: {
            createdAt: '2022-02-10T19:42:20Z',
            description:
              'Schnittige Gebrauchswaffe für Jäger und Sportschützen in sehr guter Qualität. Mercury Bockdoppelflinten: Die Mercury Bockdoppelflinten zeichnen sich durch eine einfache und führige Handhabung aus und haben sich in der vielseitigen jagdlichen Praxis seit vielen Jahren bestens bewährt. Die Modellreihe ist in den universellen Kalibern 12/76 oder 20/76 erhältlich mit denen man auch 70er Patronen verschießen kann. Die Flinten verfügen ferner über einen Stahlschrotbeschuss und ein geringes Gewicht von ca. 2,75 kg und sind somit auch für Damen hervorragend geeignet. Die Holzschäfte aus Nussbaum verfügen über eine Länge von rund 37 cm. Das System verfügt über ein Blitzschloss, die Sicherung ist mit Schieber auf dem Kolbenhals angebracht. Der Einabzug mit Umschaltung erlaubt ein schnelles Reagieren auf sich ändernde Jagdsituationen. Die im Lieferumfang enthaltenen Wechselchokes (1/4, 1/2, 3/4, 1/1) ermöglichen eine vielseitige jagdliche und sportliche Nutzung. * Schnittige Gebrauchswaffe für Jäger und Sportschützen * Blitzschloss, ohne Ejektor, schwarze Leichtmetallbasküle * Abzugssicherung durch Schieber auf dem Kolbenhals Ident.Nr. FL-PC: 020265849864057510-64968400329004558415-05415655005200045984177 Waffenart: Bockdoppelflinte Fabrikat/Modell: Mercury Light Art.Nr.: 153064 Kaliber: 12/76 Gültiger Beschuss: Ja / Stahlschrotbeschuss Beschreibung: * Lauf: 76cm * Laufschiene: 8mm * Wechselchoke (1/4, 1/2, 3/4, 1/1) * Mit Stahlschrotbeschuss * System: Blitzschloss, ohne Ejektor, schwarze Leichtmetallbasküle * Verschluss: Laufhakenverriegelung * Sicherung: Abzugssicherung durch Schieber auf dem Kolbenhals * Abzug: Einabzug mit Umschaltung * Schaft: Nussbaum * Länge: 37cm * Senkung: 37/53mm * Gewicht: 2,75kg *Zustand: Fabrikneu',
            images: [
              {
                gatsbyImageData: {
                  images: {
                    sources: [
                      {
                        srcSet:
                          'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-4-900x900-transformed_225x225_crop_center.png.webp?v=1644522142 225w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-4-900x900-transformed_450x450_crop_center.png.webp?v=1644522142 450w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-4-900x900-transformed_900x900_crop_center.png.webp?v=1644522142 900w',
                        sizes: '(min-width: 900px) 900px, 100vw',
                        type: 'image/webp'
                      }
                    ],
                    fallback: {
                      src: 'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-4-900x900-transformed_900x900_crop_center.png?v=1644522142',
                      srcSet:
                        'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-4-900x900-transformed_225x225_crop_center.png?v=1644522142 225w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-4-900x900-transformed_450x450_crop_center.png?v=1644522142 450w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-4-900x900-transformed_900x900_crop_center.png?v=1644522142 900w',
                      sizes: '(min-width: 900px) 900px, 100vw'
                    }
                  },
                  layout: 'constrained',
                  width: 900,
                  height: 900
                }
              }
            ],
            priceRangeV2: {
              maxVariantPrice: {
                amount: '599.0'
              },
              minVariantPrice: {
                amount: '599.0'
              }
            },
            tags: [
              'Kaliber:12/76',
              'Kategorie:Schrotflinten',
              'Kategorie:Waffen'
            ],
            title: 'Mercury Bockdoppelflinte Light'
          }
        },
        {
          node: {
            createdAt: '2022-02-10T19:45:42Z',
            description:
              'Ident.Nr. FL-PC: 005205647868766152-05285003280045252740-6840048001586876876621468 Waffenart: Doppelläufige Schrotflinte Fabrikat/Modell: Norinco JW2000 Coach Gun, kurzer Lauf, Hahnspanner mit aussen liegenden Seitenschlösser (kurze Kutscher Flinte) Kaliber: 12/70 Magazinkapazität: 2 Gültiger Beschuss: Ja Zubehör: * Siehe Fotos * Gesamtlänge : 954mm * Lauflänge : 510mm * Kammer: 3″ * Abzugskraft/Abzugsweg: 15-20N (Rechts) und 20-25N (links) * Gesamtgewicht (ca.): 3,7kg * Effektive Reichweite: 50m Zustand: Fabrikneu',
            images: [
              {
                gatsbyImageData: {
                  images: {
                    sources: [
                      {
                        srcSet:
                          'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/Links-8-900x900-transformed_225x225_crop_center.png.webp?v=1644522344 225w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/Links-8-900x900-transformed_450x450_crop_center.png.webp?v=1644522344 450w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/Links-8-900x900-transformed_900x900_crop_center.png.webp?v=1644522344 900w',
                        sizes: '(min-width: 900px) 900px, 100vw',
                        type: 'image/webp'
                      }
                    ],
                    fallback: {
                      src: 'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/Links-8-900x900-transformed_900x900_crop_center.png?v=1644522344',
                      srcSet:
                        'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/Links-8-900x900-transformed_225x225_crop_center.png?v=1644522344 225w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/Links-8-900x900-transformed_450x450_crop_center.png?v=1644522344 450w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/Links-8-900x900-transformed_900x900_crop_center.png?v=1644522344 900w',
                      sizes: '(min-width: 900px) 900px, 100vw'
                    }
                  },
                  layout: 'constrained',
                  width: 900,
                  height: 900
                }
              }
            ],
            priceRangeV2: {
              maxVariantPrice: {
                amount: '499.0'
              },
              minVariantPrice: {
                amount: '499.0'
              }
            },
            tags: [
              'Kaliber:12/76',
              'Kategorie:Schrotflinten',
              'Kategorie:Waffen'
            ],
            title: 'Norinco JW2000 Coach Gun (Kutscherflinte)'
          }
        },
        {
          node: {
            createdAt: '2022-02-10T19:49:55Z',
            description:
              'Ident.Nr. FL-PC: 020265849864057510-64968400325004558415-0541565545984177 Waffenart: Bockdoppelflinte Hersteller: Pallas Hamburg Germany Fabrikat/Modell: PALLAS Heros Black Wood Kaliber: 12/76 Gültiger Beschuss: Ja Magazinkapazität: 2 Schuss Zustand: Fabrikneu Beschreibung: Länge (gesamt): 114cm Rohrlänge: 71cm (28”) Gewicht der leeren Waffe: 3,25 kg Kapazität: 2 Kolben: Holz (Walnuss) Finishing: Bruned Brun * sehr gute Qualität zu einen Hammerpreis * mit Wechselchoke',
            images: [
              {
                gatsbyImageData: {
                  images: {
                    sources: [
                      {
                        srcSet:
                          'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-15-900x900-jDojnRoCS-transformed_225x225_crop_center.png.webp?v=1644522597 225w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-15-900x900-jDojnRoCS-transformed_450x450_crop_center.png.webp?v=1644522597 450w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-15-900x900-jDojnRoCS-transformed_900x900_crop_center.png.webp?v=1644522597 900w',
                        sizes: '(min-width: 900px) 900px, 100vw',
                        type: 'image/webp'
                      }
                    ],
                    fallback: {
                      src: 'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-15-900x900-jDojnRoCS-transformed_900x900_crop_center.png?v=1644522597',
                      srcSet:
                        'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-15-900x900-jDojnRoCS-transformed_225x225_crop_center.png?v=1644522597 225w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-15-900x900-jDojnRoCS-transformed_450x450_crop_center.png?v=1644522597 450w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-15-900x900-jDojnRoCS-transformed_900x900_crop_center.png?v=1644522597 900w',
                      sizes: '(min-width: 900px) 900px, 100vw'
                    }
                  },
                  layout: 'constrained',
                  width: 900,
                  height: 900
                }
              }
            ],
            priceRangeV2: {
              maxVariantPrice: {
                amount: '590.0'
              },
              minVariantPrice: {
                amount: '590.0'
              }
            },
            tags: [
              'Kaliber:12/76',
              'Kategorie:Schrotflinten',
              'Kategorie:Waffen'
            ],
            title: 'PALLAS Heros MC Wood Light Black'
          }
        },
        {
          node: {
            createdAt: '2022-02-10T19:51:14Z',
            description:
              'Ident.Nr. FL-PC: 020265849864057510-64968400325004558415-0541565545984177 Waffenart: Bockdoppelflinte Hersteller: Pallas Hamburg Germany Fabrikat/Modell: PALLAS Heros Wood Light Nickel Kaliber: 12/76 Gültiger Beschuss: Ja Magazinkapazität: 2 Schuss Zustand: Fabrikneu Beschreibung: Länge (gesamt): 114cm Rohrlänge: 71cm (28”) Gewicht der leeren Waffe: 3,25 kg Kapazität: 2 Kolben: Holz (Walnuss) Finishing: Bruned Brun * sehr gute Qualität zu einen Hammerpreis * mit Wechselchoke',
            images: [
              {
                gatsbyImageData: {
                  images: {
                    sources: [
                      {
                        srcSet:
                          'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-16-900x900-transformed_225x225_crop_center.png.webp?v=1644523011 225w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-16-900x900-transformed_450x450_crop_center.png.webp?v=1644523011 450w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-16-900x900-transformed_900x900_crop_center.png.webp?v=1644523011 900w',
                        sizes: '(min-width: 900px) 900px, 100vw',
                        type: 'image/webp'
                      }
                    ],
                    fallback: {
                      src: 'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-16-900x900-transformed_900x900_crop_center.png?v=1644523011',
                      srcSet:
                        'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-16-900x900-transformed_225x225_crop_center.png?v=1644523011 225w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-16-900x900-transformed_450x450_crop_center.png?v=1644523011 450w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-16-900x900-transformed_900x900_crop_center.png?v=1644523011 900w',
                      sizes: '(min-width: 900px) 900px, 100vw'
                    }
                  },
                  layout: 'constrained',
                  width: 900,
                  height: 900
                }
              }
            ],
            priceRangeV2: {
              maxVariantPrice: {
                amount: '590.0'
              },
              minVariantPrice: {
                amount: '590.0'
              }
            },
            tags: [
              'Kaliber:12/76',
              'Kategorie:Schrotflinten',
              'Kategorie:Waffen'
            ],
            title: 'PALLAS Heros MC Wood Light Nickel'
          }
        },
        {
          node: {
            createdAt: '2022-02-10T19:53:28Z',
            description:
              'Höchste Funktionssicherheit durch „indirekte Gasentnahme“, die zugleich Schmutzablagerungen aus Pulvergasen auf ein Minimum reduziert. Sicherung in entspanntem Zustand möglich. Trocken stehender Direktabzug oder Feinabzug. Handschutz am Lauf werkzeuglos abnehmbar, mechanisches Klappvisier. Gesamtlänge 93,5–85 cm, Gewicht ab 3,45 kg. Haenel CR 223 Mit der „Competition Rifle“ 223, kurz CR 223 knüpft die Waffenschmiede Haenel an Ihre lange Tradition in der Fertigung von halbautomatischen Büchsen an. Einst wurde bei C.G. Haenel in Suhl das erste Sturmgewehr der Geschichte gebaut und entwickelt. Es handelt sich bei der CR 223 um eine halbautomatische Büchse mit Pistonsystem im Kaliber .223 Rem. auf Basis des legendären AR 15 Systems. Als moderner Selbstlader in Zentralfeuer-Ausführung, funktioniert auch die Haenel CR 223 als Gasdrucklader mit Drehkopfverschluss. Der Teleskop-Hinterschaft ist in sechs Stufen längenverstellbar. Die Büchse verfügt über einen freischwingenden, kaltgehämmerten Lauf der in drei verschiedenen Lauflängen: 423 mm / 368 mm / 254 mm erhältlich ist. Je nach Lauflänge beträgt die Gesamtlänge zwischen 938 mm und 684 mm. Das Gewicht beträgt je nach Ausführung und Zubehör ca. zwischen 3,35 kg und 3,6 kg. Neben dem Direktabzug mit ca. 3200 g ist auch ein optionaler Feinabzug erhältlich, dieser löst bei ca. 1500 g aus. Die Sicherung ist beidseitig bedienbar. Ident.Nr. SLB-PC: 00207588847825541-5472001820003244541-564132565446575850 Waffenart: Selbstladebüchse Fabrikat/Modell: Haenel CR 223 KeyMod-Handschutz Kaliber: 223Rem Magazinkapazität: 10 Schuss Gültiger Beschuss: Ja * Zubehör: * siehe Foto * Lauflänge: 368mm * Mündungsfeuerdämpfer: A2 Standard * Abzug: Feinabzug (ca. 1.500 g) * Sicherung: Abzugsicherung, 90°, beidseitig bedienbar, Schlagbolzensicherung * Visierung: mechanisches Klappvisier * Schaft: modifizierter M4-Schubschaft * Farboption: Oliv * indirekter Gasdrucklader * modifizierter M4-Schubschaft * Handschutz ohne Werkzeug abnehmbar Zustand: Fabrikneu',
            images: [
              {
                gatsbyImageData: {
                  images: {
                    sources: [
                      {
                        srcSet:
                          'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-4-900x900-IxJdzWO02-transformed_225x225_crop_center.png.webp?v=1644522810 225w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-4-900x900-IxJdzWO02-transformed_450x450_crop_center.png.webp?v=1644522810 450w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-4-900x900-IxJdzWO02-transformed_900x900_crop_center.png.webp?v=1644522810 900w',
                        sizes: '(min-width: 900px) 900px, 100vw',
                        type: 'image/webp'
                      }
                    ],
                    fallback: {
                      src: 'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-4-900x900-IxJdzWO02-transformed_900x900_crop_center.png?v=1644522810',
                      srcSet:
                        'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-4-900x900-IxJdzWO02-transformed_225x225_crop_center.png?v=1644522810 225w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-4-900x900-IxJdzWO02-transformed_450x450_crop_center.png?v=1644522810 450w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-4-900x900-IxJdzWO02-transformed_900x900_crop_center.png?v=1644522810 900w',
                      sizes: '(min-width: 900px) 900px, 100vw'
                    }
                  },
                  layout: 'constrained',
                  width: 900,
                  height: 900
                }
              }
            ],
            priceRangeV2: {
              maxVariantPrice: {
                amount: '2590.0'
              },
              minVariantPrice: {
                amount: '2590.0'
              }
            },
            tags: [
              'Kaliber:223Rem',
              'Kategorie:Selbstladegewehre',
              'Kategorie:Waffen'
            ],
            title: 'Haenel Selbstladebüchse CR 223 KeyMod-Handschutz'
          }
        },
        {
          node: {
            createdAt: '2022-02-10T19:55:04Z',
            description:
              'Ident.Nr. SLB-PC: 00207588847825541-5472002400003244541-5600335004132565446575850 Waffenart: Selbstladebüchse Fabrikat/Modell: Heckler&Koch MR A3 SPECIAL EDITION LL: 16,5″ Kaliber: 308Win Magazinkapazität: 10 Schuss Gültiger Beschuss: Ja Zustand: Fabrikneu Beschreibung: * limitierte Auflage * G28Z-Design mit RAL 8000 lackiertem Systemgehäuse * Slim-Line Handschutz * 16,5″-Lauf * verstellbare Slim-Line Schulterstütze * Feuerdämpfe * 15×1 Gewinde für Schalldämpfer * Klappkorn * Schnellwechselvisier',
            images: [
              {
                gatsbyImageData: {
                  images: {
                    sources: [
                      {
                        srcSet:
                          'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-4-900x900-tzcjtuEEv-transformed_225x225_crop_center.png.webp?v=1644522942 225w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-4-900x900-tzcjtuEEv-transformed_450x450_crop_center.png.webp?v=1644522942 450w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-4-900x900-tzcjtuEEv-transformed_900x900_crop_center.png.webp?v=1644522942 900w',
                        sizes: '(min-width: 900px) 900px, 100vw',
                        type: 'image/webp'
                      }
                    ],
                    fallback: {
                      src: 'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-4-900x900-tzcjtuEEv-transformed_900x900_crop_center.png?v=1644522942',
                      srcSet:
                        'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-4-900x900-tzcjtuEEv-transformed_225x225_crop_center.png?v=1644522942 225w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-4-900x900-tzcjtuEEv-transformed_450x450_crop_center.png?v=1644522942 450w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-4-900x900-tzcjtuEEv-transformed_900x900_crop_center.png?v=1644522942 900w',
                      sizes: '(min-width: 900px) 900px, 100vw'
                    }
                  },
                  layout: 'constrained',
                  width: 900,
                  height: 900
                }
              }
            ],
            priceRangeV2: {
              maxVariantPrice: {
                amount: '3590.0'
              },
              minVariantPrice: {
                amount: '3590.0'
              }
            },
            tags: [
              'Kaliber:308Win',
              'Kategorie:Selbstladegewehre',
              'Kategorie:Waffen'
            ],
            title: 'Heckler&Koch MR A3 SPECIAL EDITION'
          }
        },
        {
          node: {
            createdAt: '2022-02-10T20:01:06Z',
            description:
              'Ident.Nr. SLB-PC: 004126502056-4169854600450015469-04825455684100 Waffenart: Selbstladegewehr Art.Nr: 1-NOR-T56 Fabrikat/Modell: Norinco T56 (AK47 semi) mit Holzschaft und Klappbajonett Kaliber: 7,62x39mm Gültiger Beschuss: Ja Zustand: Fabrikneu Zubehör: * siehe Foto * Gesamtlänge: 882mm * Lauflänge: 414mm * Gewicht: 4,0kg',
            images: [
              {
                gatsbyImageData: {
                  images: {
                    sources: [
                      {
                        srcSet:
                          'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-900x900-XHfHeJE03-transformed_225x225_crop_center.png.webp?v=1644523268 225w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-900x900-XHfHeJE03-transformed_450x450_crop_center.png.webp?v=1644523268 450w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-900x900-XHfHeJE03-transformed_900x900_crop_center.png.webp?v=1644523268 900w',
                        sizes: '(min-width: 900px) 900px, 100vw',
                        type: 'image/webp'
                      }
                    ],
                    fallback: {
                      src: 'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-900x900-XHfHeJE03-transformed_900x900_crop_center.png?v=1644523268',
                      srcSet:
                        'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-900x900-XHfHeJE03-transformed_225x225_crop_center.png?v=1644523268 225w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-900x900-XHfHeJE03-transformed_450x450_crop_center.png?v=1644523268 450w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-900x900-XHfHeJE03-transformed_900x900_crop_center.png?v=1644523268 900w',
                      sizes: '(min-width: 900px) 900px, 100vw'
                    }
                  },
                  layout: 'constrained',
                  width: 900,
                  height: 900
                }
              }
            ],
            priceRangeV2: {
              maxVariantPrice: {
                amount: '890.0'
              },
              minVariantPrice: {
                amount: '890.0'
              }
            },
            tags: [
              'Kaliber:7.62x39mm',
              'Kategorie:Selbstladegewehre',
              'Kategorie:Waffen'
            ],
            title: 'Norinco T56 (AK47 semi)'
          }
        },
        {
          node: {
            createdAt: '2022-02-10T20:10:39Z',
            description:
              'NAKED MODELLE Wie Black Label Naked, aber mit gehämmerten Läufen Ident.Nr. SK-PC: 00204658201444-4645001050005444785842-201145655464698428 Waffenart: Selbstladebüchse Fabrikat/Modell: OA15 AUSTRIA, BL C4 Naked 10,5″ THOR .223 Rem” Art.Nr.: 1-OAR-BLT-N-C4_A Kaliber: .223Rem. Magazinkapazität: 10 Schuss Magazin Gültiger Beschuss: Ja Zubehör: * siehe Foto Zustand: Fabrikneu Versandkosten/Abholung: Auf Anfrage / Abholung nur nach vorheriger Terminabsprache',
            images: [
              {
                gatsbyImageData: {
                  images: {
                    sources: [
                      {
                        srcSet:
                          'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-5-900x900-transformed_225x225_crop_center.png.webp?v=1644523841 225w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-5-900x900-transformed_450x450_crop_center.png.webp?v=1644523841 450w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-5-900x900-transformed_900x900_crop_center.png.webp?v=1644523841 900w',
                        sizes: '(min-width: 900px) 900px, 100vw',
                        type: 'image/webp'
                      }
                    ],
                    fallback: {
                      src: 'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-5-900x900-transformed_900x900_crop_center.png?v=1644523841',
                      srcSet:
                        'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-5-900x900-transformed_225x225_crop_center.png?v=1644523841 225w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-5-900x900-transformed_450x450_crop_center.png?v=1644523841 450w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-5-900x900-transformed_900x900_crop_center.png?v=1644523841 900w',
                      sizes: '(min-width: 900px) 900px, 100vw'
                    }
                  },
                  layout: 'constrained',
                  width: 900,
                  height: 900
                }
              }
            ],
            priceRangeV2: {
              maxVariantPrice: {
                amount: '1449.0'
              },
              minVariantPrice: {
                amount: '1449.0'
              }
            },
            tags: [
              'Kaliber:223Rem',
              'Kategorie:Selbstladegewehre',
              'Kategorie:Waffen'
            ],
            title: 'OA15 AUSTRIA, BL C4 Naked 10,5" THOR'
          }
        },
        {
          node: {
            createdAt: '2022-02-10T20:12:51Z',
            description:
              'OA AUSTRIA BLACK LABEL SERIE – geschmiedet, überfräst Upper & Lower Receiver werden aus 7075 T6 Schmiedeteilen hergstellt. Black Label Gewehre verwenden Lothar Walther Läufe ( LW19) und kommen ausschließlich mit OA-Slim MLOK Handschutz Die Waffen werden inkl. OA-M4 Schubschaft,inkl. BIUS (Back Up Sights) , 1 Stk. Magazin und Bedienungsanleitung im Koffer geliefert. Seit 2019 sind alle Verschlussstücke 100% Made in Germany und mit modifizierter Vergütung hergestellt, optisch erkennbar an dem silber-blanken Finish. Ident.Nr. SK-PC: 00204658201444-464500135800544565842-201145654698428 Waffenart: Selbstladebüchse Fabrikat/Modell: OA15 AUSTRIA, BL M4 14,5″ Lauf ,.223 Rem, OA-slime MLOK Handschutz 13″ Art.Nr.: 1-OAR-BL-M4-002 Kaliber: .223Rem. Magazinkapazität: 10 Schuss Magazin Gültiger Beschuss: Ja Zubehör: * siehe Foto Zustand: Fabrikneu Versandkosten/Abholung: Auf Anfrage / Abholung nur nach vorheriger Terminabsprache',
            images: [
              {
                gatsbyImageData: {
                  images: {
                    sources: [
                      {
                        srcSet:
                          'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-2-900x900-transformed_225x225_crop_center.png.webp?v=1644523973 225w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-2-900x900-transformed_450x450_crop_center.png.webp?v=1644523973 450w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-2-900x900-transformed_900x900_crop_center.png.webp?v=1644523973 900w',
                        sizes: '(min-width: 900px) 900px, 100vw',
                        type: 'image/webp'
                      }
                    ],
                    fallback: {
                      src: 'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-2-900x900-transformed_900x900_crop_center.png?v=1644523973',
                      srcSet:
                        'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-2-900x900-transformed_225x225_crop_center.png?v=1644523973 225w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-2-900x900-transformed_450x450_crop_center.png?v=1644523973 450w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-2-900x900-transformed_900x900_crop_center.png?v=1644523973 900w',
                      sizes: '(min-width: 900px) 900px, 100vw'
                    }
                  },
                  layout: 'constrained',
                  width: 900,
                  height: 900
                }
              }
            ],
            priceRangeV2: {
              maxVariantPrice: {
                amount: '1890.0'
              },
              minVariantPrice: {
                amount: '1890.0'
              }
            },
            tags: [
              'Kaliber:223Rem',
              'Kategorie:Selbstladegewehre',
              'Kategorie:Waffen'
            ],
            title: 'OA15 AUSTRIA, BL M4 14,5" Lauf OA-slime MLOK Handschutz 13"'
          }
        },
        {
          node: {
            createdAt: '2022-02-10T20:14:05Z',
            description:
              'Ident.Nr. SLB-PC: 0020284601440-54165007500654-0668848486940 Waffenart: Selbstladegewehr Fabrikat/Modell: Zastava PAP G Kaliber: 7,62x39mm Gültiger Beschuss: Ja Zustand: Fabrikneu Zubehör: * siehe Foto * Lauflänge: 406mm/16” Abholung: Abholung nur nach vorheriger Terminabsprache',
            images: [
              {
                gatsbyImageData: {
                  images: {
                    sources: [
                      {
                        srcSet:
                          'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-2-900x900-C-3L0Nxpe-transformed_225x225_crop_center.png.webp?v=1644524082 225w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-2-900x900-C-3L0Nxpe-transformed_450x450_crop_center.png.webp?v=1644524082 450w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-2-900x900-C-3L0Nxpe-transformed_900x900_crop_center.png.webp?v=1644524082 900w',
                        sizes: '(min-width: 900px) 900px, 100vw',
                        type: 'image/webp'
                      }
                    ],
                    fallback: {
                      src: 'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-2-900x900-C-3L0Nxpe-transformed_900x900_crop_center.png?v=1644524082',
                      srcSet:
                        'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-2-900x900-C-3L0Nxpe-transformed_225x225_crop_center.png?v=1644524082 225w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-2-900x900-C-3L0Nxpe-transformed_450x450_crop_center.png?v=1644524082 450w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-2-900x900-C-3L0Nxpe-transformed_900x900_crop_center.png?v=1644524082 900w',
                      sizes: '(min-width: 900px) 900px, 100vw'
                    }
                  },
                  layout: 'constrained',
                  width: 900,
                  height: 900
                }
              }
            ],
            priceRangeV2: {
              maxVariantPrice: {
                amount: '1395.0'
              },
              minVariantPrice: {
                amount: '1395.0'
              }
            },
            tags: [
              'Kaliber:7.62x39mm',
              'Kategorie:Selbstladegewehre',
              'Kategorie:Waffen'
            ],
            title: 'Zastava PAP G'
          }
        }
      ]
    }
  }
}
