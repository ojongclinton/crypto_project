/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'
import { css,Global } from '@emotion/react'
import { FirstView } from './FirstView/FirstView'
import { FithView } from './FithView/FithView'
import { FourthView } from './FourthView/FourthView'
import { SecondView } from './SecondView/SecondView'
import { SixthView } from './SixthView/SixthView'
import { ThirdView } from './ThirdView/ThirdView'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ScrollButton from './handleScroll'


function Home() {
  
  return (
    <div>
      <ScrollButton/> 
      <FirstView/>
      <SecondView/>
      <ThirdView/>
      <FourthView/>
      <FithView/> 
      <SixthView/> 
    </div>
  )
}

export default Home