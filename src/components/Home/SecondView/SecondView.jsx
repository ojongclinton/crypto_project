/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'
import {Grid,Chip} from '@mui/material'
import boxstep from '../../../assets/boxStepper.svg'
import { H22,H11, Item,plainText,chipStyle} from '../GlobalStyles'
import { useMediaQuery } from 'react-responsive'
import * as styles from './style'

export const SecondView=()=>{
//Query to check if current device being used is a mobile or a pc sho that the different styles should apply!...returns either true or false
const isMobile = useMediaQuery({query:`(max-width:576px)`})

const process = [
  {title:"1. Sign Up",body:"We’ve helped over 2,500 job seekers to get into the most popular tech teams."},
  {title:"2. TopUp Account",body:"We’ve helped over 2,500 job seekers to get into the most popular tech teams."},
  {title:"3. Make Escrow",body:"We’ve helped over 2,500 job seekers to get into the most popular tech teams."},
  {title:"4. Complete",body:"We’ve helped over 2,500 job seekers to get into the most popular tech teams."},
  {title:"5. Repeat",body:"We’ve helped over 2,500 job seekers to get into the most popular tech teams."},
]
  return(
    <div className='secondView'>
        <div style={{marginLeft:'auto',marginRight:'auto',display:'flex',flexDirection:'column'}}>
        {isMobile && 
        <Item elevation={3} css={styles.smallBox}>
            <div css={styles.gradientText}>
              Learn about our story and our mission statement
            </div>
        </Item>}
          <Chip label="Simple Step" css={chipStyle}/>
        </div>
      <Grid container spacing={3} >
        <Grid item xl={5} xs={12} md={5} >
          <H11 css={styles.bigHeading}>How our onlinep2p solution works</H11>
          <p css={plainText} style={{textAlign:isMobile?'center':'left',margin:'10px'}}>A few simple, easy steps to make it easier for you</p>
           <div css={styles.shape4}></div>
          <div css={styles.shape5}></div>
          <div css={styles.shape6}></div> 
        </Grid>
        <Grid item xl={7} xs={12} md={7}>
          <Grid container spacing={0}>
            <Grid item xl={6} xs={12} md={6} css={styles.container}>
              {process.slice(0,3).map((process,index)=>(
                <div style={{display:'flex',marginTop:isMobile?'1vh':'0vh'}} key={index}>
                <img src={boxstep} css={styles.boxStep}/>
                <div>
                <H22>{process.title}</H22>
                <p css={styles.boxText}>{process.body}</p>
                </div>
                </div>
                ))}
            </Grid>
            <Grid item xl={6} xs={12} md={6} css={styles.container}>
              {process.slice(3,5).map((process,index)=>(
                  <div css={styles.boxStep2} key={index}>
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

      
    </div>
  )
}