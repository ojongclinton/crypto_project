/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'
import { css,Global } from '@emotion/react'
import Typography from '@mui/material/Typography'
import {CssBaseline,Button,Box} from '@mui/material';
import { useMediaQuery } from 'react-responsive'
import {NavLink} from 'react-router-dom'
import styled from '@emotion/styled'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import React from 'react'

const breakpoints = [576, 768, 992, 1200]
const mq = breakpoints.map(bp => `@media (max-width: ${bp}px)`)
const headerIcon = css({
  color:'#6F7FA7',
  paddingRight:'10px',
  fontSize:'6vh',
  paddingTop:'10px',
  [mq[0]]:{
    paddingRight:'0px'
  }
})
const PlainLink = styled.a`
text-decoration:none;
text-align:center;
margin:10px;
color:#73779F;
font-size:14px;
`
const headerBoxCss =css({
  backgroundColor:'white',
  position:'fixed',
  top:0,
  display: 'flex', 
  justifyContent:'space-around',
  alignItems:'center',
  paddingBottom:'15px',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.05)',
  width:'100%',
  zIndex:10,
  paddingTop:'10px',
  height:'10vh',
  [mq[0]]:{
    display:'block',
    float:'right'
  }

})
const logoContainer = css({
width:'26px',
  height:'30px',
  background:'#5A48FA',
  borderRadius:'1000px',
  marginRight:'10px',
  marginLeft:'20px',
  [mq[0]]:{
    display:'none'
  }
})
const logo =css({
  display:'flex',
  marginLeft:'15vh',
  [mq[0]]:{
    marginLeft:'10px',
    marginRight:'10px',
    paddingTop:'10px',
  }
})
const links=css({
  [mq[0]]:{
    display:'none'
  }
})
const navv=css({
  display:'flex',
  justifyContent:'space-around',
  marginRight:'20vh',
  [mq[0]]:{
    display:'none'
  }
})

const MobileNav =({toggleNav})=>{
  return(
    <Box style={{position:'absolute',top:'13vh', width:'100%',backgroundColor:'white', borderBottom:'1px solid #4de5fb'}} >
      <NavLink to='/' className={({isActive})=>isActive?"MobileactiveNavLink":"MobilenavLink"} onClick={toggleNav}>Home</NavLink>
      <NavLink to='/MarketPlace' className={({isActive})=>isActive?"MobileactiveNavLink":"MobilenavLink"}  onClick={toggleNav}>MarketPlace</NavLink>
      <NavLink to='/Developper' className={({isActive})=>isActive?"MobileactiveNavLink":"MobilenavLink"}  onClick={toggleNav}>Developper</NavLink>
      <NavLink to='/Help' className={({isActive})=>isActive?"MobileactiveNavLink":"MobilenavLink"}  onClick={toggleNav}>Help</NavLink>
    </Box>
  )
}

function Header() {
const isMobile = useMediaQuery({query:`(max-width:576px)`})
const [showNav,setShowNav] = React.useState(false)
const toggleNav = ()=>{
  setShowNav(prev=>!prev)

}

  return (
    <div>
      <Global
        styles={css`
          *{
            font:SF Pro Display
          }
        `}
      />
      <CssBaseline/>
    <div css={headerBoxCss}>
      <div className='logo_name' css={logo}>
      {isMobile && <KeyboardArrowDownIcon style={{fontSize:'xx-large',color:'black'}} onClick={toggleNav}/>}
      {showNav && <MobileNav toggleNav={toggleNav}/>}
      <div css={logoContainer}></div>
        <Typography variant='h6' sx={{font:'Montserrat',fontWeight:'600',fontSize:'20px',lineHeight:'30px',color:'#4d3fde'}}>
          ONLINEP2P
          </Typography>
      </div>
      <div className='links' css={links}>
            <Box>
              <NavLink to='/' className={({isActive})=>isActive?"activeNavLink":"navLink"}>Home</NavLink>
              <NavLink to='/Dashboard' className={({isActive})=>isActive?"activeNavLink":"navLink"}>Dashboard</NavLink>
              <NavLink to='/MarketPlace' className={({isActive})=>isActive?"activeNavLink":"navLink"}>MarketPlace</NavLink>
              <NavLink to='/Developper' className={({isActive})=>isActive?"activeNavLink":"navLink"}>Developper</NavLink>
              <NavLink to='/Help' className={({isActive})=>isActive?"activeNavLink":"navLink"}>Help</NavLink>
              </Box>
      </div>
      <div className='navvv' css={navv}>
        <SearchIcon css={headerIcon} />
        <LanguageIcon css={headerIcon}/>
        <KeyboardArrowDownIcon css={headerIcon}/>
        <PlainLink href='/333' >Sign In</PlainLink>
        <Button variant='outlined'>Sign up</Button>
      </div>
    </div>
    </div>
  )
}

export default Header