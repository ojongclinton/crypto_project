import { css,Global } from '@emotion/react'
import {styled} from '@mui/material'
import { mq } from '../GlobalStyles'


const blurryBack2 =css`
width: 30.5vh;
height: 30.5vh;
opacity: 0.5;
filter: blur(100px);
position:absolute;
border-radius:100px;
${mq[1,2,3]}{
display:none;
};
${mq[0]}{
display:initial;
width: 25vh;
height: 25vh;
filter:blur(200px);
}
`
export const shape4=css`
${blurryBack2};
background: #4DE6FC;
left: 120.26vh;
top: 145vh;
z-index:-1;
${mq[0]}{
    left:30%;
    top:190vh;
}
`
export const shape5=css`
${blurryBack2};
background:#AA80F9;
left: 125.26vh;
top: 155vh;
z-index:-1;
${mq[0]}{
    left:30%;
    top:215vh;
}
`
export const shape6=css`
${blurryBack2};
background:#5A48FA;
left:110.26vh;
top: 160vh;
z-index:-1;
${mq[0]}{
    left:0%;
    top:200vh;
}
`
export const boxStep=css({
marginRight:'15px',
padding:'0px',
height:'13vh',
width:'13vh',
[mq[1,2,3]]:{   
    height:'20%',
    width:'20%'
},
[mq[0]]:{
    height:'20%',
    width:'20%'
}
})


export const boxText = css({
color:'#7C8087',
fontWeight:400,
fontFamily:'Montserrat Alternates',
fontStyle:'normal', 
lineHeight:'28px',
fontSize:'16px',
[mq[1,2,3]]:{
    fontSize:'smaller',
    lineHeight:'20px'
},
[mq[0]]:{
    fontSize:'14px',
    lineHeight:'20px',
}
})
export const gradientText =css`
background:linear-gradient(270deg, #4EE9FF 0%, #5A49FC 51.25%, #04063D 102.5%);;
background-clip: text;
text-fill-color: transparent;
font-weight:500;
font-size: 14px;
text-align:center;
margin:0px;
padding:0px;
`

export const smallBox=css({
    width:'60%',
    padding:'10px',
    paddingTop:'4vh',
    margin:'64px auto 44px auto',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.05)'
})
export const bigHeading =css({
    [mq[1,2,3]]:{
        fontSize:'35px',
        textAlign:'Left',
        lineHeight:'normal',
        margin:'10px'
    },
    [mq[0]]:{
        fontSize:'4vh',
        fontWeight:'700',
        width:'fit-content',
        marginRight:'auto',
        marginLeft:'auto',
        textAlign:'center',
        lineHeight:'normal',
        padding:'10px',
        color:'#04063D',
    }
})
export const container=css({
    [mq[1,2,3]]:{
        margin:'0vh'
    },
    [mq[0]]:{
        margin:'0vh 2vh 0vh 2vh'
    }
})
export const boxStep2 =css({
    display:'flex',
    marginTop:'0vh',
    [mq[1,2,3]]:{
        margin:'0px',
        marginTop:'0vh'
    },
    [mq[0]]:{
        marginTop:'1vh'
    }
})