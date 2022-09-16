import { css,keyframes } from '@emotion/react'
import { mq } from '../../Home/GlobalStyles'

export const feedContainer =css({
    height:'10vh',
    [mq[0]]:{
        width:'95%',
        borderRadius:'5px',
        margin:'auto',
        padding:'10px',
        marginTop:'25px',
        border:'1px solid #DEDAF8',
        boxShadow: '0px 3.85586px 3.85586px rgba(0, 0, 0, 0.05)',
        paddingLeft:'3vh',
        height:'fit-content'
    },
    [mq[1,2,3]]:{
        
    }
})

export const title =css({
    fontSize:'20px',
    fontFamily:'Inter',
    fontWeight:'600',
    marginTop:'26px',
    marginBottom:'34px'
})

export const userFeedback =css({
    width:'100%',
    display:'flex',
    justifyContent:'left',
    margin:'4vh 0vh 6vh 0vh'
})
export const feedImage=css({
margin:'0vh',
padding:'0px',
height:'7vh',
width:'7vh'
})
export const feedbackIcon =css({
    color:"#9a9fa5",
    fontSize:'large'
})
export const fedText =css({
color:'#1A1D1F',
fontWeight:400,
fontSize:'15px',
fontStyle:'normal',
lineHeight:'24px',
margin:'0px',
padding:'0px'
})
export const btnStyle=css({
    color:'#5A48FA',
    border:'2px solid #5A48FA',
    padding:'10px',
    borderRadius:'10px',
    margin:'0vh 0vh 4vh 0vh'
})