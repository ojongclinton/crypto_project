import { css,keyframes } from '@emotion/react'
import { mq } from '../../Home/GlobalStyles'

export const userActionsContainer = css({
    margin:'0px 4.7vh 0px 4.7vh',
    background:'#ffffff',
    width:'90%',
    [mq[0]]:{
        margin:'0px',
        width:'100%',
        background:'none'
    }
})

export const userPic = css({
    margin:'0vh auto 1vh auto',
    height:'7vh',
    width:'7vh'
})
export const userName =css({
    fontSize:'16px',
    textAlign:'center',
    color:'#0F172A'
})
export const userTitle = css({
    color:'#94A3B8',
    margin:'0px',
    padding:'0px',
    textAlign:'center',
    fontSize:'14px'
})
export const userRating =css({
    display:'flex',
    justifyContent:'center'
})
export const userDataDiv =css({
    margin:'0vh 0vh 0vh 4.7vh',//Top Right Bottom Left
    padding:'2vh',
    borderBottom:'1px solid #C4C2D3', 
    background:'#ffffff',
    width:'90%'
})
export const userChip =css({
    color:'#5a48fa',
    fontWeight:'bold',
    backgroundColor:'#edebff',
    width:'fit-content',
    [mq[0]]:{
        backgroundColor:'#FFFFFF'
    }
})
export const actionButton =css({
    textTransform:'initial',
    marginTop:'2vh',
    padding:'auto'
    
})
export const foloContainer = css({
    display:'grid',
    gridTemplateColumns:'4vh auto auto ',
    padding:'1vh 0vh 2vh 2vh',
    [mq[0]]:{
        marginBottom:'40px',
        gridTemplateColumns:'28px auto auto ',
    }
})
export const iconStyle=css({
    marginTop:'1vh'
})
export const plainText =css({
    fontWeight:500,
    margin:'0px',
    padding:'0px',
    lineHeight:'170%',
    color:'#64748B',
    textAlign:'center',
    [mq[0]]:{
        fontSize:'16px',
        fontWeight:'400'
    }
})
export const foloContainer2 =css({
    display:'grid',
    gridTemplateColumns:'8vh auto  ',
    padding:'2vh 0vh 0vh 2vh',
})
export const icoBtn =css({
    margin:'0px 10px'
})