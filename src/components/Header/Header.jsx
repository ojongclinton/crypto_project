/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'
import { css,Global } from '@emotion/react'
import Typography from '@mui/material/Typography'
import {CssBaseline,Button,Box, Accordion,AccordionSummary,AccordionDetails  } from '@mui/material';
import { useMediaQuery } from 'react-responsive'
import {NavLink} from 'react-router-dom'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import { useNavigate} from "react-router-dom";
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import * as styles from './style'
import { PlainLink } from './style';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Language from '../../assets/Language.svg'
import Search from '../../assets/SearchIcon.svg'
import Menu from '../../assets/Menu.svg'
import HeaderDown from '../../assets/HeaderArrowDown.svg'

function Header() {
const navigate =useNavigate()
const isMobile = useMediaQuery({query:`(max-width:576px)`})

//###### MOBILE DISPLAY #########//
const MobileDisplay=()=>{
const [showNav,setShownav] = React.useState(false)
const handleNav = ()=>{
  setShownav(prev=>!prev)
} 
const MobileNav=()=>{
    return(
      <div id='mobileNav'>
         <div style={{display:'flex',justifyContent:'flex-end'}}>
            <HighlightOffOutlinedIcon style={{fontSize:'5vh',margin:'5%',color:'#6F7FA7'}} onClick={handleNav}/>
         </div>
         <div style={{display:'flex',justifyContent:'center'}}>
         <Button variant='contained' css={styles.btnstyle}>Sign In</Button>
         </div>
         <div >
          <NavLink to='/' css={styles.links}>Home</NavLink>
          <NavLink to='/' css={styles.links}>Marketplace</NavLink>
          <NavLink to='/' css={styles.links}>Dashboard</NavLink>
          <Accordion css={styles.accordionStyle} elevation={0} disableGutters={true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          style={{margin:'0px',padding:'0px'}}
        >
          <p css={styles.links} style={{margin:'0vh 0vh'}}>Developper</p>
        </AccordionSummary>
        <AccordionDetails style={{margin:'0px',padding:'0px'}}>
        <NavLink to='/' css={styles.Smalllinks}>API Integration</NavLink>
          <NavLink to='/' css={styles.Smalllinks}>API Documentation</NavLink>
          <NavLink to='/' css={styles.Smalllinks}>Escrow pay</NavLink>
        </AccordionDetails>
      </Accordion>


          <Accordion css={styles.accordionStyle} elevation={0} disableGutters={true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          style={{margin:'0px',padding:'0px'}}
        >
          <p css={styles.links} style={{margin:'0vh 0vh'}}>Help</p>
        </AccordionSummary>
        <AccordionDetails style={{margin:'0px',padding:'0px'}}>
        <NavLink to='/' css={styles.Smalllinks}>Contact</NavLink>
          <NavLink to='/' css={styles.Smalllinks}>About us</NavLink>
          <NavLink to='/' css={styles.Smalllinks}>Help</NavLink>
        </AccordionDetails>
      </Accordion>
         </div>
      </div>
    )
}

  return(
    <div css={styles.mobileHeader}>
      <div style={{display:'flex',justifyContent:'space-around',alignItems:'center',width:'23%'}} onClick={handleNav}>
        <img src={Menu} style={{height:'50%'}}/>
        {/* <MenuIcon css={styles.mobileheaderIcon} onClick={handleNav}/> */}
      </div>
      <div css={styles.leftMenu}>
        <img src={Search} style={{height:'30%'}}/>
        <img src={Language} style={{height:'30%'}}/>
        <img src={HeaderDown} style={{height:'30%'}}/>
        
      </div>
      {showNav && <MobileNav/>}
    </div>
  )
}

//###### LAPTOP DISPLAY #########//
const LaptopDisplay = ()=>{
  return(
       
    <div css={styles.headerBoxCss}>
      <div className='logo_name' css={styles.logo}>
      <div css={styles.logoContainer}></div>
        <Typography variant='h6' sx={{font:'Montserrat',fontWeight:'600',fontSize:'20px',lineHeight:'30px',color:'#4d3fde'}}>
          ONLINEP2P
          </Typography>
      </div>
      <div className='links' css={styles.links}>
            <Box style={{margin:'0px',padding:'0px'}}>
              <NavLink to='/' className={({isActive})=>isActive?"activeNavLink":"navLink"}>Home</NavLink>
              <NavLink to='/Dashboard' className={({isActive})=>isActive?"activeNavLink":"navLink"}>Dashboard</NavLink>
              <NavLink to='/MarketPlace' className={({isActive})=>isActive?"activeNavLink":"navLink"}>MarketPlace</NavLink>
              <NavLink to='/Developper' className={({isActive})=>isActive?"activeNavLink":"navLink"}>Developper</NavLink>
              <NavLink to='/Help' className={({isActive})=>isActive?"activeNavLink":"navLink"}>Help</NavLink>
              </Box>
      </div>
      <div className='navvv' css={styles.navv}>
        <SearchIcon css={styles.headerIcon} />
        <LanguageIcon css={styles.headerIcon}/>
        <KeyboardArrowDownIcon css={styles.headerIcon}/>
        <PlainLink href='/signIn' >Sign In</PlainLink>
        <Button variant='outlined'>Sign up</Button>
      </div>
    </div>
  )
}

  return(
    <div>
      <CssBaseline/>
      {isMobile?<MobileDisplay/>:<LaptopDisplay/>}
    </div>
  )
}

export default Header