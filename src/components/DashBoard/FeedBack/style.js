import { css,keyframes } from '@emotion/react'
import { mq } from '../../Home/GlobalStyles'

export const feedContainer =css({
    height:'fit-content',
    [mq[1,2,3]]:{
        padding:'0px',
        height:'fit-content',
        marginTop:'2vh',
        width:'100%',
        marginBottom:'0px'
    },
    [mq[0]]:{
        width:'90%',
        borderRadius:'5px',
        margin:'auto',
        padding:'10px',
        marginTop:'25px',
        border:'1px solid #DEDAF8',
        boxShadow: '0px 3.85586px 3.85586px rgba(0, 0, 0, 0.05)',
        paddingLeft:'1vh',
        height:'fit-content'
    }
})
export const theComents =css({
    height:'74vh',
    overflowY:'scroll',
    [mq[1,2,3]]:{
        height:'fit-content',
        overflowX:'hidden',
        overflowY:'scroll',
    },
    [mq[0]]:{
        height:'fit-content'
    }
})
export const contContainer = css({
    marginLeft:'3vh',
    width:'70%', 
    borderBottom:'0.5px solid #EFEFEF',
    [mq[1,2,3]]:{
        width:'100%',
        margin:'auto',
        padding:'0px'
    },
    [mq[0]]:{
        marginLeft:'1vh'
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
    margin:'4vh 0vh 6vh 0vh',
[mq[1,2,3]]:{
    width:'100%',
    margin:'0px',
    padding:'10px'
},
[mq[0]]:{
    margin:'4vh 0vh 6vh 0vh',
}
})
export const feedImage=css({
margin:'0vh',
padding:'0px',
height:'7vh',
width:'7vh',
[mq[0,1,2,3]]:{
    padding:'5px',
    height:'70px',
    width:'70px'
}
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
