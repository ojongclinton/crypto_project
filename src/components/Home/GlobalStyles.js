import { css,Global } from '@emotion/react'
import {Paper, styled} from '@mui/material'

{/*This file contains styled components and styles used by all files in the home component.....be sure of the effect of your actions*/}

const breakpoints = [576, 768, 992, 1200]
export const mq = breakpoints.map(bp => `@media (max-width: ${bp}px)`)

export const Item = styled(Paper)(({ theme }) => ({
    color: theme.palette.text.secondary,
    height: 'fit-content',
    width:'fit-content',
    padding:'4vh',
    
  }));
export const H11 = styled('h1')({
    color: '#04063D',
    fontWeight: '600px',
    fontSize: '48px',
    lineHeight: '64px',
    margin:'0px',
    padding:'0px',
    [mq[0]]:{
      fontSize:'4vh',
      lineHeight:'normal',
      margin:'2vh'
    }
  })
export const H22 = styled('h2')({
    color: '#04063D',
    fontWeight: '600px',
    fontSize: '20px',
    padding:'0px',
    margin:'0px',
    lineHeight: '34px',
    [mq[0]]:{
      fontSize:'16px',
      lineHeight:'normal',
      fontWeight:'600'
    }
  })
 export const H33 = styled('h2')(({index})=>({
    color:index==0?'white':'#282D6C',
    fontWeight: '600px',
    fontSize: '17px',
    padding:'0px',
    margin:'0px',
    lineHeight: '34px',
    [mq[0]]:{
      fontSize:'16px',
      lineHeight:'normal',
      fontWeight:'600'
    }
  }))

export const blurryBack =css`
width: 40.5vh;
height: 40.5vh;
opacity: 0.5;
filter: blur(200px);
${mq[0]}{
width: 40.5vh;
height: 40.5vh;
  filter:blur(80px);
}
`
export const plainText = css({
color:'#282D6C',
fontWeight:400,
fontSize:'16px',
lineHeight:'160%',
fontStyle:'normal',
margin:'0px',
padding:'0px',
[mq[0]]:{
  fontFamily:'Montserrat',
  fontStyle:'normal',
}
})

export const whoWeAre= css({
display:'flex',
justifyContent:'space-between',
padding:'0 10vh'
})