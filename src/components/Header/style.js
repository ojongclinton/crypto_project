/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'
import { css,Global } from '@emotion/react'
import styled from '@emotion/styled'

export const headerIcon = css({
    color:'#6F7FA7',
    paddingRight:'10px',
    fontSize:'6vh',
    paddingTop:'10px',
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
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.05)',
    width:'100%',
    zIndex:10,
    paddingTop:'10px',
    height:'10vh',
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
})
export const links=css({
    display:'block',
    textDecoration:'none',
    color:'#6F7FA7',
    margin:'4vh 0vh 2vh 3vh',
    fontWeight:'500',
    fontSize:'16'
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
    height:'10vh',
    display:'flex',
    justifyContent:'space-between',
    position:'fixed',
    width:'100%',
    backgroundColor:'white',
    zIndex:'10',
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
export const mobileheaderIcon =css({
    fontSize:'6vh',
    fontWeight:'100px',
    color:'#6F7FA7',
})
export const mobileheaderIcon2 =css({
    fontSize:'5vh',
    fontWeight:'100px',
    color:'#6F7FA7',
})
export const accordionStyle=css({
    backgroundColor:'inherit',
    // borderTop:'3px solid red',
    margin:'0vh 6vh 2vh 3vh',
    padding:'0px',
    height:'fit-content',
})