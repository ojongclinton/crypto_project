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
`
export const shape4=css`
${blurryBack2};
background: #4DE6FC;
left: 120.26vh;
top: 145vh;
z-index:-1;
${mq[0]}{
    left:5vh;
    top:250vh;
}
`
export const shape5=css`
${blurryBack2};
background:#AA80F9;
left: 125.26vh;
top: 155vh;
z-index:-1;
${mq[0]}{
    left:7vh;
    top:220vh;
}
`
export const shape6=css`
${blurryBack2};
background:#5A48FA;
left:110.26vh;
top: 160vh;
z-index:-1;
${mq[0]}{
    left:7vh;
    top:250vh;
}
`
export const boxStep=css({
marginRight:'15px',
padding:'0px',
height:'13vh',
width:'13vh',
})
export const plainText = css({
color:'#282D6C',
font:'Montserrat',
fontWeight:400,
fontSize:'18px',
lineHeight:'160%',
fontStyle:'normal',
margin:'0px',
padding:'0px',
[mq[0]]:{
    fontFamily:'Montserrat',
    fontStyle:'normal',
}
})
export const boxText = css({
color:'#7C8087',
fontWeight:400,
fontFamily:'Montserrat',
fontStyle:'normal',
lineHeight:'28px',
fontSize:'16px',
[mq[0]]:{
    fontSize:'14px'
}
})

export const simpleText=css({
padding:'0px',
margin:'0px'
})

export const howework =css({
    [mq[0]]:{
            paddingTop:'15px',
            margin:'0px',
            fontSize:'40px',
            textAlign:'center'
        }
})

export const chipStyle=css({
    color:'#5A48FA',
    backgroundColor:'#dcfbff',
    width:'fit-content',
    [mq[0]]:{
        color:'#4EE9FE ',
        backgroundColor:'#4EE9FF33',
        marginLeft:'auto',
        marginRight:'auto'
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
    margin:'auto',
    padding:'10px',
    paddingTop:'4vh',
    marginBottom:'8vh',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.05)'
})
export const bigHeading =css({
    [mq[0]]:{
        fontSize:'4vh',
        fontWeight:'700',
        width:'51vh',
        marginRight:'auto',
        marginLeft:'auto',
        textAlign:'center',
        lineHeight:'30px',
        padding:'10px'
    }
})
export const container=css({
    [mq[0]]:{
        margin:'0vh 5vh 0vh 6vh'
    }
})
export const boxStep2 =css({
    display:'flex',
    marginTop:'4vh'
})