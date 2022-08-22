/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'
import { css,Global } from '@emotion/react'
import {Grid,styled,Chip} from '@mui/material'
import boxstep from '../../../assets/boxStepper.svg'
import { H22,H11,H33 } from '../GlobalStyles'
import { useMediaQuery } from 'react-responsive'
import Slider from 'react-slick'
import * as styles from './style'
import letfArrow from '../../../assets/leftArrow.svg'
import rightArrow from '../../../assets/rightArrow.svg'

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <img src={letfArrow} alt="prevArrow" {...props} style={{color:'red',height:'5vh',width:'5vh'}}/>
);

const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <img src={rightArrow} alt="nextArrow" {...props} style={{color:'red',height:'5vh',width:'5vh'}}/>
);  


export const SecondView=()=>{
const isMobile = useMediaQuery({query:`(max-width:576px)`})

const process = [
  {title:"1. Sign Up",body:"We’ve helped over 2,500 job seekers to get into the most popular tech teams."},
  {title:"2. TopUp Account",body:"We’ve helped over 2,500 job seekers to get into the most popular tech teams."},
  {title:"3. Make Escrow",body:"We’ve helped over 2,500 job seekers to get into the most popular tech teams."},
  {title:"4. Complete",body:"We’ve helped over 2,500 job seekers to get into the most popular tech teams."},
  {title:"5. Repeat",body:"We’ve helped over 2,500 job seekers to get into the most popular tech teams."},
]
var settings = {
  className:'mobile',
  dots:false,
  infinite:true,
  speed:500,
  slidesToShow:1,
  slidesToScroll:1,
  prevArrow:<SlickArrowLeft/>,
  nextArrow:<SlickArrowRight/>,
}

  return(
    <div className='secondView'>
      {isMobile? (<div>
        <Chip label="Simple Step" style={{color:'#5A48FA',backgroundColor:'#dcfbff'}}/>
        <H11 style={{textAlign:'center'}}>How our onlinep2p solution works</H11>
          <p css={styles.plainText}>A few simple, easy steps to make it easier for you</p>
          <div css={styles.shape4}></div>
          <div css={styles.shape5}></div>
          <div css={styles.shape6}></div>
        <Slider {...settings}>
          {process.map(item=>(
            <div >
              <img src={boxstep} style={{marginLeft:'auto',marginRight:'auto',marginBottom:'5vh'}}/>
              <H22>{item.title}</H22>
              <p css={styles.plainText}>{item.body}.</p>
            </div>
          ))}
        </Slider>
      </div>):(<div>
        <Chip label="Simple Step" style={{color:'#5A48FA',backgroundColor:'#dcfbff'}}/>
      <Grid container spacing={3} >
        <Grid item lg={5} md={12} css={styles.simpleText} >
          <H11>How our onlinep2p solution works</H11>
          <p css={styles.plainText}>A few simple, easy steps to make it easier for you</p>
          <div css={styles.shape4}></div>
          <div css={styles.shape5}></div>
          <div css={styles.shape6}></div>
        </Grid>
        <Grid item lg={7} md={12}>
          <Grid container spacing={3}>
            <Grid item lg={6}>
              {process.slice(0,3).map((process,index)=>(
                <div style={{display:'flex',marginTop:'5vh'}} key={index}>
                <img src={boxstep} css={styles.boxStep}/>
                <div>
                <H22>{process.title}</H22>
                <p css={styles.boxText}>{process.body}</p>
                </div>
                </div>
                ))}
            </Grid>
            <Grid item lg={6}>
              {process.slice(3,5).map((process,index)=>(
                  <div style={{display:'flex',marginTop:'5vh'}} key={index}>
                  <img src={boxstep} css={styles.boxStep}/>
                  <div>
                    <H22>{process.title}</H22>
                    <p css={styles.boxText}>{process.body}</p>
                  </div>
                </div>
                ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      </div>)}
      
    </div>
  )
}