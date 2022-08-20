import { css,Global } from '@emotion/react'
import {styled} from '@mui/material'

const blurryBack2 =css`
width: 30.5vh;
height: 30.5vh;
opacity: 0.5;
filter: blur(200px);
position:absolute;
`
export const shape4=css`
${blurryBack2};
background: #4DE6FC;
left: 120.26vh;
top: 145vh;
z-index:-1;
`
export const shape5=css`
${blurryBack2};
background:#AA80F9;
left: 125.26vh;
top: 155vh;
z-index:-1;
`
export const shape6=css`
${blurryBack2};
background:#5A48FA;
left:110.26vh;
top: 160vh;
z-index:-1;
`
export const boxStep=css({
marginRight:'15px',
padding:'0px',
height:'15vh',
width:'15vh',
})
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
export const boxText = css({
color:'#7C8087',
fontWeight:400,
font:'Montserrat',
fontStyle:'normal',
lineHeight:'28px',
fontSize:'16px'
})

export const simpleText=css({
padding:'0px',
margin:'0px'
})