import { css,Global } from '@emotion/react'

const blurryBack2 =css`
width: 30.5vh;
height: 30.5vh;
opacity: 0.5;
filter: blur(200px);
position:absolute;
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

export const shape10=css`
${blurryBack2};
background: #4DE6FC;
left: 100.26vh;
top: 360vh;
z-index:-1;
`
export const shape11=css`
${blurryBack2};
background:#AA80F9;
left: 100.26vh;
top: 360vh;
z-index:-1;
`
export const shape12=css`
${blurryBack2};
background:#5A48FA;
left: 100.26vh;
top: 360vh;
z-index:-1;
`
export const whoWeAre= css({
display:'flex',
justifyContent:'space-between',
padding:'0 10vh'
})