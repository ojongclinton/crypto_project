import { css,Global } from '@emotion/react'
import { blurryBack, mq } from '../GlobalStyles'


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
border-right:1px solid #b3b3b3;
padding-bottom:50px;

${mq[0]}{
width:100%;
margin-left:0px;
text-align:center;
padding:0px;
border:none;
margin-right:0px;
margin-top:10vh;
font-size:7vh;
}
`
export const shape1=css`
${blurryBack};
position:absolute;
background: #4DE6FC;
left: 43.26vh;
top: 22.59vh;
z-index:-1;
${mq[0]}{
    left:7vh;
}
`
export const shape2=css`
${blurryBack};
position:absolute;
background:#AA80F9;
left:52.44vh;
top:47.55vh;
z-index:-1;
${mq[0]}{
    left:7vh;
}
`
export const shape3=css`
${blurryBack};
position:absolute;
background:#5A48FA;
left: 24.80vh;
top: 38.81vh;
z-index:-1;
${mq[0]}{
    left:7vh;
}
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
[mq[0]]:{
   display:'none'
}
})
export const bitcoinImage =css({
position:'absolute',
height:'7vh',
width:'7vh',
left:'190vh',
top:'20vh',
[mq[0]]:{
    display:'none'
 }
})
export const binanceImage =css({
position:'absolute',
height:'7vh',
width:'7vh',
left:'150vh',
bottom:'5vh',
[mq[0]]:{
    display:'none'
 }
})
export const selectAction =css({
    padding:'vh'
})

export const formCss =css({
    marginRight:'0px',
    marginTop:'22vh',
    })
    export const formDiv =css({
        display:'flex',
    [mq[0]]:{
        display:'block',
        width:'100%',
        margin:'0px',
        margin:'0px'
     }
    })
    export const formControl1=css({
        margin:'2vh',
        width:'100%',
        [mq[0]]:{
        width:'100%',
        margin:'1vh'
         }
    
    })