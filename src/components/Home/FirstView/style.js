import { css,Global } from '@emotion/react'
import { blurryBack } from '../GlobalStyles'

export const thegradientText =css`
width:90vh;
margin-top:18vh;
margin-left:17vh;
height: fit-content;
font-weight: bold;
font-size: 10vh;
line-height: 120%;
background:linear-gradient(rgba(90, 73, 250, 1),rgba(4, 6, 61, 1));
background-clip: text;
text-fill-color: transparent;
display: inline-block;
z-index:10;
border-right:1px solid #b3b3b3;
padding-bottom:50px
`
export const shape1=css`
${blurryBack};
position:absolute;
background: #4DE6FC;
left: 43.26vh;
top: 22.59vh;
z-index:-1;
`
export const shape2=css`
${blurryBack};
position:absolute;
background:#AA80F9;
left:52.44vh;
top:47.55vh;
z-index:-1;
`
export const shape3=css`
${blurryBack};
position:absolute;
background:#5A48FA;
left: 24.80vh;
top: 38.81vh;
z-index:-1;
`
export const never =css`
text-fill-color: white;
background:#4EE9FF;
font-style:normal;
color:white;
padding:1.5vh;
font-weight: bold;
font-size: 10vh;
line-height: 120%;
display:inline-block;
z-index:-1;
`
export const etherumImage =css({
position:'absolute',
height:'7vh',
width:'7vh',
left:'103vh',
top:'50vh',
})

export const formCss =css({
marginTop:'22vh',
})
export const formDiv =css({
display:'flex',
justifyContent:'space-between',
})
export const bitcoinImage =css({
position:'absolute',
height:'7vh',
width:'7vh',
right:'15vh',
top:'20vh'
})
export const binanceImage =css({
position:'absolute',
height:'7vh',
width:'7vh',
right:'50vh',
bottom:'5vh'
})
