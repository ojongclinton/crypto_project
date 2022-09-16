import { css,Global } from '@emotion/react'
import { mq } from '../GlobalStyles'

const blurryBack2 =css`
width: 30.5vh;
height: 30.5vh;
opacity: 0.5;
filter: blur(120px);
position:absolute;
${mq[0]}{
    display:none;
}
`
export const shape10=css`
${blurryBack2};
background: #4DE6FC;
left: 110.26vh;
top: 310vh;
z-index:-1;
`
export const shape11=css`
${blurryBack2};
background:#AA80F9;
left: 120.26vh;
top: 320vh;
z-index:-1;
`
export const shape12=css`
${blurryBack2};
background:#5A48FA;
left: 140.26vh;
top: 310vh;
z-index:-1;
`
export const whoWeAre= css({
display:'flex',
justifyContent:'space-between',
padding:'0 10vh',
[mq[0]]:{
    display:'block',
    padding:'0 5vh'
}
})

export const ChipBox =css({
    display:'flex',
    flexDirection:'column'
})