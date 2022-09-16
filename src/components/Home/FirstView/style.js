import { css,Global } from '@emotion/react'
import { blurryBack, mq } from '../GlobalStyles'
import bitcoin from '../../../assets/bitcoin-yellow.svg'
import binance from '../../../assets/binance-yellow.svg'
import etherum from '../../../assets/crypto-etherum.svg'
const allImgs = [bitcoin,binance,etherum]


window.addEventListener('load',()=>{
    let i = 0;
    const doc = document.querySelector('#coinImg')
    setInterval(()=>{
        i = Math.floor(Math.random()*(2-0 + 1) + 0);
        doc.src=allImgs[i];
    },10000)
})

export const thegradientText =css`
width:100%;
margin-top:18vh;
padding-left:10%;
margin-right:auto;
height: fit-content;
font-weight: bold;
font-size: 10vh;
line-height: 120%;
background:linear-gradient(rgba(90, 73, 250, 1),rgba(4, 6, 61, 1));
background-clip: text;
text-fill-color: transparent;
display: inline-block;

${mq[1,2,3]}{
    font-size:40px;
    font-weight:600;
    height:20%;
    padding:0px;
    margin:0px;
    width:100%;
    text-align:left;
    margin-top:5%;
    margin-left:5%;
}

${mq[0]}{
width:100%;
margin-left:0px;
text-align:left;
padding:0px 20px;
border:none;
margin-right:0px;
margin-top:10vh;
font-size:40px;
line-height:125%;
font-weight:600;
padding-bottom:0px;
height:20%;
};


`
export const shape1=css`
${blurryBack};
position:absolute;
background: #4DE6FC;
left: 43.26vh;
top: 20.59vh;
z-index:-1;
${mq[0]}{
    top:10vh;
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
    top:20vh;
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
    top:20vh;
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

${mq[1,2,3]}{
    font-size:40px;
    line-height:120%;
    font-weight:600;
}

${mq[0]}{
    font-size:40px;
    line-height:120%;
    font-weight:600;
    }
`
export const inptField =css({
    [mq[0]]:{
        backgroundColor:'#ffffff'
    }
})

export const bitcoinImage =css({
position:'absolute',
height:'7vh',
width:'7vh',
left:'100vh',
top:'50vh',
zIndex:'5',
[mq[0]]:{
    display:'none'
 }
})
export const formCss =css({
    marginTop:'22vh',
    marginLeft:'auto',
    marginRight:'auto',
    [mq[1,2,3]]:{
        marginTop:'1.5vh',
        width:'fit-content',
        height:'fit-content',
    },
    [mq[0]]:{
        margin:'0px',
        backgroundColor:'unset',
        boxShadow: "none"
    },
    })
    export const formDiv =css({
        display:'flex',
    [mq[0]]:{
        display:'block',
        width:'100%',
        margin:'0px',
     }
    })
    export const formControl1=css({
        margin:'2vh',
        width:'100%',
        [mq[1,2,3]]:{
            margin:'0.5vh'
        },
        [mq[0]]:{
        width:'100%',
        margin:'0px',
        marginTop:'9.7px'
         }
    })
    export const sbBtn=css({
        marginTop:'3vh', 
        backgroundColor:'#5A48FA',
        padding:'10px',
        textTransform:'none',
        [mq[1,2,3]]:{
        marginTop:'5px'
        },
        [mq[0]]:{
            marginTop:'4vh',
            fontSize:'14px',
            fontWeight:600
             }
    })
    export const selectFont=css({
        color:'#04063D',
        fontSize:'18px',
        fontWeight:500,
        [mq[0]]:{
            backgroundColor:'#ffffff'
        }
    })