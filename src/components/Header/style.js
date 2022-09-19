/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'
import { css,Global } from '@emotion/react'
import styled from '@emotion/styled'
import { mq } from '../Home/GlobalStyles'

export const headerIcon = css({
    color:'#6F7FA7',
    paddingRight:'30px',
    height:'10%',
    paddingTop:'10px',
    [mq[2]]:{
        paddingRight:'13px',
    },
    [mq[1]]:{
        display:'none'
    }
})
export const hdropDown=css({
    margin:'0px',
    position:'relative',
    right:'25px',
    top:'8px',
    color:'#73779F'
})
export const siteName=css({
    fontFamily:'Montserrat Alternates',
    fontWeight:'630',
    fontSize:'18px',
    lineHeight:'30px',
    letterSpacing:'-0.03rem',
    color:'#000000',
    [mq[3]]:{
        display:'contents'
    },
    [mq[2]]:{
        display:'contents'
    },
    [mq[1]]:{
        display:'none'
    }
})
export const PlainLink = styled.a`
    text-decoration:none;
    text-align:center;
    margin:10px;
    color:#73779F;
    font-size:14px;
`
export const headerBoxCss =css({
    backgroundColor:'white',
    top:0,
    display: 'flex', 
    justifyContent:'space-between',
    alignItems:'center',
    paddingBottom:'15px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.09)',
    width:'100%',
    zIndex:10,
    paddingTop:'10px',
    height:'75px',
    margin:'0px'
})
export const logoContainer = css({ //ThE Logo
    width:'26px',
    height:'30px',
    background:'#5A48FA',
    borderRadius:'1000px',
})
export const logo =css({
    display:'flex',
    marginLeft:'auto',
    marginRight:'auto',
    justifyContent:'space-around',
    width:'140px',
    [mq[1,2,3]]:{
        width:'fit-content'
    }
})
export const links=css({
    display:'flex',
    textDecoration:'none',
    color:'#6F7FA7',
    margin:'4vh 3vh',
    fontWeight:'500',
    fontSize:'16',
})
export const links1=css({
    display:'flex',
    textDecoration:'none',
    color:'#6F7FA7',
    margin:'4vh 3vh',
    fontWeight:'500',
    fontSize:'16',
    [mq[1,2,3]]:{
        margin:'0vh 0px'
    }
})
export const Smalllinks=css({
    display:'block',
    textDecoration:'none',
    color:'#6F7FA7',
    margin:'2vh 0vh 4vh 3vh',
    fontSize:'14',
    fontWeight:'400'
})
export const navv=css({
    display:'flex',
    justifyContent:'space-between',
    marginRight:'auto',
    marginLeft:'auto',
})

export const arrowIcon = css({
    fontSize:'5vh',
    marginRight:'4vh',
    color:'#6F7FA7',
    transition:'2s'
})
export const otherNavs = css({
    display:'flex',
    justifyContent:'space-between',
    borderBottom:'2px solid #D9D9D9',
    margin:'0vh 4vh 4vh 3vh'
})
export const mobileHeader=css({
    height:'8.5vh',
    display:'flex',
    justifyContent:'space-between',
    position:'fixed',
    width:'100%',
    backgroundColor:'white',
    zIndex:'10',
    boxShadow: '0px 2px 30px rgba(0, 0, 0, 0.1)'
})
export const leftMenu=css({
    display:'flex',
    alignItems:'center',
    justifyContent:'space-around',
    width:'45%'
})
export const btnstyle =css({
    padding:'3vh',
    textTransform:'none',
    width:'95%',
    backgroundColor:'#5A48FA'
})
export const accordionStyle=css({
    backgroundColor:'inherit',
    // borderTop:'3px solid red',
    margin:'0vh 6vh 2vh 3vh',
    padding:'0px',
    height:'fit-content',
    border:'red'
})
export const UserMenu =css({
    backgroundColor:'#f4f4f4',
    boxShadow: '0px 4px 8px -4px rgba(0, 0, 0, 0.02), inset 0px -1px 1px rgba(0, 0, 0, 0.04)',
})
export const mobileUserInfo =css({
    display:'flex',
    justifyContent:'space-between',
    width:'fit-content',
    padding:'0px'
})
export const someText =css({
    margin:'0px',
    fontSize:'15px',
    fontWeight:600,
    color:'#1A1D1F'
})
export const someText2 =css({
    margin:'0px',
    fontSize:'12px',
    fontWeight:500,
    color:'#6F767E'
})
export const signedUser =css({
    display:'flex',
    justifyContent:'space-between',
    width:'100%',
    padding:'0px',
    alignItems:'center',
})
export const userAvatar =css({
    margin:'0px',
    padding:'0px',
    height:'50px',
    width:'50px',
    marginRight:'1vh'
})
export const rating =css({
    marginRight:'2vh'
})
export const userName=css({
    marginTop:'0.5vh'
})
export const actionButton =css({
    textTransform:'initial',
    marginTop:'2vh',
    padding:'10px'
})
export const icoBtn =css({
    margin:'0px 10px'
})