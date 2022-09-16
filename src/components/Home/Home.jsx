/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'
import { css,Global } from '@emotion/react'
import { FirstView } from './FirstView/FirstView'
import { FithView } from './FithView/FithView'
import { FourthView } from './FourthView/FourthView'
import { SecondView } from './SecondView/SecondView'
import { SixthView } from './SixthView/SixthView'
import { ThirdView } from './ThirdView/ThirdView'
import ScrollButton from './handleScroll'
import "../../homePageStyles.css"

{/*When creating mobile view,,, items shrink or increase in size when user focus on an input element...code below fixes that*/}
const initialHeight = document.documentElement.scrollHeight
const metaViewport = document.querySelector('meta[name=viewport]')
metaViewport.setAttribute('content', 'height=' + initialHeight + 'px, width=device-width, initial-scale=1.0')

{/*Each section of the homepage is divided into views....so you have the first, second , third, till sixth view*/}

function Home() {
  return (
    <div>
      <ScrollButton/> 
      <FirstView/>
      {/* <SecondView/> 
      <ThirdView/>
      <FourthView/>
      <FithView/> 
      <SixthView/> */}
    </div>
  )
}

export default Home