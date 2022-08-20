/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'
import { css,Global } from '@emotion/react'
import {Grid,styled,Chip} from '@mui/material'
import boxstep from '../../../assets/boxStepper.svg'
import { H22,H11 } from '../GlobalStyles'


import * as styles from './style'



export const SecondView=()=>{
const process = [
  {title:"1. Sign Up",body:"We’ve helped over 2,500 job seekers to get into the most popular tech teams."},
  {title:"3. Make Escrow",body:"We’ve helped over 2,500 job seekers to get into the most popular tech teams."},
  {title:"5. Repeat",body:"We’ve helped over 2,500 job seekers to get into the most popular tech teams."},
  {title:"2. TopUp Account",body:"We’ve helped over 2,500 job seekers to get into the most popular tech teams."},
  {title:"4. Complete/Collect",body:"We’ve helped over 2,500 job seekers to get into the most popular tech teams."}
]
  return(
    <div className='secondView'>
      <Chip label="Simple Step" style={{color:'#5A48FA',backgroundColor:'#dcfbff'}}/>
      <Grid container spacing={3} >
        <Grid item xs={5} css={styles.simpleText} >
          <H11>How our onlinep2p solution works</H11>
          <p css={styles.plainText}>A few simple, easy steps to make it easier for you</p>
          <div css={styles.shape4}></div>
          <div css={styles.shape5}></div>
          <div css={styles.shape6}></div>
        </Grid>
        <Grid item xs={7}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
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
            <Grid item xs={6}>
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
    </div>
  )
}