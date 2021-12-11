import AboutSection from '../components/organisms/sections/AboutSection'
import {fields} from '@snek-at/jaen-pages'

export interface IndexPageProps {}

const IndexPage = ({}: IndexPageProps) => {
  return (
    <AboutSection
      heading={
        <fields.TextField
          fieldName="about-heading"
          initValue="<p>I'm a heading</p>"
          rtf={false}
        />
      }
      teaser={
        <fields.TextField
          fieldName="about-teaser"
          initValue="<p>I'm a teaser</p>"
          rtf={false}
        />
      }
      text={
        <fields.TextField
          fieldName="about-text"
          initValue="
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
              est laborum.
            </p>"
        />
      }
      backgroundimage={
        <fields.ImageField
          fieldName="about-image"
          initValue={{
            src: 'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg',
            alt: 'about-image'
          }}
          className="backgroundimage"
        />
      }
    />
  )
}
//#endregion

//#region > Exports
export default IndexPage
//#endregion
