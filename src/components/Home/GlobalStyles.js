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
    padding:'0px'
  })
export const H22 = styled('h2')({
    color: '#04063D',
    fontWeight: '600px',
    fontSize: '20px',
    padding:'0px',
    margin:'0px',
    lineHeight: '34px',
  })
 export const H33 = styled('h2')(({index})=>({
    color:index==0?'white':'#282D6C',
    fontWeight: '600px',
    fontSize: '17px',
    padding:'0px',
    margin:'0px',
    lineHeight: '34px',
  }))

export const blurryBack =css`
width: 40.5vh;
height: 40.5vh;
opacity: 0.5;
filter: blur(200px);
`
export const plainText = css({
color:'#282D6C',
font:'Montserrat',
fontWeight:400,
fontSize:'18px',
lineHeight:'160%',
fontStyle:'normal',
margin:'0px',
padding:'0px'
})

export const whoWeAre= css({
display:'flex',
justifyContent:'space-between',
padding:'0 10vh'
})

{/*Instead put a scroll to top button!!!*/}
//   export const moveDownIcon =css({
//     position:'absolute',
//     color:'#5A48FA',
//     backgroundColor:'#FFFFFF',
//     borderRadius:'100px',
//     boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.15)',
//     fontSize:'10vh',
//     padding:'10px',
//     left:'103vh',
//     top:'80vh',
//     '&: hover':{ cursor:'pointer'}
//   })