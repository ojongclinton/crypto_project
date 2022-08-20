/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'
import { css,Global } from '@emotion/react'

import Typography from '@mui/material/Typography'
import {CssBaseline,Button,Box} from '@mui/material';
import {NavLink} from 'react-router-dom'
import styled from '@emotion/styled'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';

const headerIcon = css({
  color:'#6F7FA7',
  paddingRight:'10px',
  fontSize:'6vh',
  paddingTop:'10px'
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
  justifyContent: 'space-between',
  paddingBottom:'15px',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.05)',
  width:'100%',
  zIndex:10,
  paddingTop:'20px',
})
const logoContainer = css({
width:'26px',
  height:'30px',
  background:'#5A48FA',
  borderRadius:'1000px',
  marginRight:'10px',
  marginLeft:'20px'
})

function Header() {
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
      <div className='logo_name' style={{display:'flex',marginLeft:'15vh'}}>
      <div css={logoContainer}></div>
        <Typography variant='h6' sx={{font:'Montserrat',fontWeight:'600',fontSize:'16px',lineHeight:'30px',color:'#000000'}}>
          OnlineP2P
          </Typography>
      </div>
      <div className='links'>
            <Box>
              <NavLink to='/' className={({isActive})=>isActive?"activeNavLink":"navLink"}>Home</NavLink>
              <NavLink to='/MarketPlace' className={({isActive})=>isActive?"activeNavLink":"navLink"}>MarketPlace</NavLink>
              <NavLink to='/Developper' className={({isActive})=>isActive?"activeNavLink":"navLink"}>Developper</NavLink>
              <NavLink to='/Help' className={({isActive})=>isActive?"activeNavLink":"navLink"}>Help</NavLink>
              </Box>
      </div>
      <div className='navvv' style={{display:'flex',justifyContent:'space-around',marginRight:'20vh'}}>
        <SearchIcon css={headerIcon} onClick={()=>{console.log('clicked')}}/>
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