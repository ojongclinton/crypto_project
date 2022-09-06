import { css,Global } from '@emotion/react'
import {styled} from '@mui/material'
import { mq } from '../GlobalStyles'
import { chipStyle } from '../SecondView/style'

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
padding:'0px',
width:'80vh',
[mq[0]]:{
    fontFamily:'Montserrat',
    fontStyle:'normal',
    width:'fit-content',
    margin:'0px 30px 30px 30px',
    fontSize:'16px'
}
})
export const whyChoose =css({
    textAlign:'center',
    display:'flex',
    justifyContent:'center'
})
export const reasonBox =css({
    display:'flex',
    justifyContent:'space-around',
    height:'52vh',
    width:'90%',
    marginLeft:'auto',
    marginRight:'auto',
    paddingTop:'0vh',
    [mq[0]]:{
        display:'block',
        height:'fit-content'
    }
})
export const viewMore =css({
    color:'#8B8BFD',
    paddingTop:'4vh',
    display:'flex',
    justifyContent:"center",
    fontSize:'18px',
    margin:'0px'
})
export const FviewMore =css({
    paddingTop:'4vh',
    display:'flex',
    justifyContent:"center",
    fontSize:'18px',
    margin:'0px',
    color:'white',
})
export const MviewMore =css({
    paddingTop:'1vh',
    display:'flex',
    justifyContent:"left",
    fontSize:'18px',
    margin:'0px',
    color:'inherit',
})
export const shape7=css`
${blurryBack2};
background: #4DE6FC;
left: 90.26vh;
top: 250vh;
z-index:-1;
${mq[0]}{
    left:7vh
}
`
export const shape8=css`
${blurryBack2};
background:#AA80F9;
left: 90.26vh;
top: 250vh;
z-index:-1;
${mq[0]}{
    left:7vh
}
`
export const shape9=css`
${blurryBack2};
background:#5A48FA;
left: 90.26vh;
top: 250vh;
z-index:-1;
${mq[0]}{
    left:7vh
}
`