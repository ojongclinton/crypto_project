/** @jsxImportSource @emotion/react */
import Typography from '@mui/material/Typography'
import {CssBaseline,Button,Box, Accordion,AccordionSummary,AccordionDetails, Avatar,Rating  } from '@mui/material';
import { useMediaQuery } from 'react-responsive'
import {NavLink, useLocation, useNavigate} from 'react-router-dom'
import React from 'react'
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import * as styles from './style'
import { PlainLink } from './style';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Language from '../../assets/Language.svg'
import Search from '../../assets/SearchIcon.svg'
import Menu from '../../assets/Menu.svg'
import HeaderDown from '../../assets/HeaderArrowDown.svg'
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import { UserActions } from '../DashBoard/UserActions/User';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import NoteIcon from '@mui/icons-material/Note';

const LaptopDisplay = ()=>{
const navigate = useNavigate()
  return(
    <div css={styles.headerBoxCss}>
      <div className='logo_name' css={styles.logo}>
        <div css={styles.logoContainer}></div>
        <Typography variant='h6' css={styles.siteName}>
          OnlineP2P
          </Typography>
      </div>
      <div className='links' css={styles.links1}>
        <Box style={{margin:'0px',padding:'0px'}}>
          <NavLink to='/' className={({isActive})=>isActive?"activeNavLink":"navLink"}>Home</NavLink>
          <NavLink to='/Dashboard' className={({isActive})=>isActive?"activeNavLink":"navLink"}>Dashboard</NavLink>
          <NavLink to='/MarketPlace' className={({isActive})=>isActive?"activeNavLink":"navLink"}>MarketPlace</NavLink>
          <NavLink to='/Developper' className={({isActive})=>isActive?"activeNavLink":"navLink"}>Developper</NavLink>
          <NavLink to='/Help' className={({isActive})=>isActive?"activeNavLink":"navLink"}>Help </NavLink>
        </Box>
      </div>
      <div className='navvv' css={styles.navv}>
        <img src={Search} css={styles.headerIcon} alt='iconSVG'/>
        <img src={Language} css={styles.headerIcon} alt='iconSVG'/>
        <img src={HeaderDown} css={styles.headerIcon} alt='iconSVG'/>
        <PlainLink href='/signIn' >Sign In</PlainLink>
        <Button variant='outlined' onClick={()=>navigate('/signUp')}>Sign up</Button>
      </div>
    </div>
  )
}

const MobileDisplay=()=>{
  const navigate = useNavigate()
  const location = useLocation()
  const isMarketPlace = location.pathname === '/Marketplace' //Check if user is in the marketPlace route so it can add the view all categories buttom amongst other buttons

  const [showNav,setShowNav] = React.useState(false)
  const isSignIn = true
  const handleNav = ()=>{
    setShowNav(!showNav)
  }
  const navClickHandler=()=>{
    setShowNav(false)
  }

  React.useEffect(() => {
    showNav && (document.body.style.overflow = 'hidden')
       !showNav && (document.body.style.overflow = 'unset')
    }, [showNav]);

  const MobileNav=()=>{
      return(
        <div id='mobileNav'>
          <div style={{display:'flex',justifyContent:'flex-end'}}>
            <HighlightOffOutlinedIcon style={{fontSize:'4vh',margin:'5%',color:'#6F7FA7'}} onClick={handleNav}/>
          </div>
          { isSignIn?(
            <div >
              <Accordion elevation={0} disableGutters css={styles.UserMenu}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <div css={styles.signedUser}>
                    <div css={styles.mobileUserInfo}>
                      <Avatar css={styles.userAvatar}/>
                      <div css={styles.userName}>
                        <p css={styles.someText}>Jhon Doe</p>
                        <p css={styles.someText2}>Financial expert</p>
                      </div>
                    </div>
                    <div>
                          <Rating value={3} max={4} css={styles.rating}/>
                    </div>
                    
                  </div>
                </AccordionSummary>
                <AccordionDetails >
                  <UserActions/>
                </AccordionDetails>
              </Accordion>
              <div>
              <Button variant='contained' css={styles.actionButton} fullWidth style={{backgroundColor:'#5A48FA'}} onClick={()=>{setShowNav(false); navigate('Dashboard/Create-contract')}}>
                <DashboardCustomizeIcon css={styles.icoBtn} />Create new escrow</Button>
              <Button variant='contained' css={styles.actionButton} fullWidth style={{backgroundColor:'#04063D'}}>
                <NoteIcon css={styles.icoBtn}/> Generate a report</Button>
                {true && 
                <div css={styles.allCategories}>
                <Accordion elevation={0} disableGutters css={styles.UserMenu}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <div css={styles.seeAllcontainer}>
                      <GridViewRoundedIcon css={styles.gridIcon}/>
                      <p css={styles.someText3}>See all categories</p>
                    
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>ONE</p>
                    <p>TWO</p>
                    <p>THREE</p>
                    <p>FOUR</p>
                    <p>FIVE</p>
                    <p>SIX</p>
                  </AccordionDetails>
                </Accordion>
                </div>
                }
              </div>
            </div>
          ):(
            <div style={{display:'flex',justifyContent:'center'}}>
            <Button variant='contained' css={styles.btnstyle}>Sign In</Button>
          </div>
          )}
          <div>
            <NavLink to='/' css={styles.links} onClick={navClickHandler}>Home</NavLink>
            <NavLink to='/Marketplace' css={styles.links}  onClick={navClickHandler}>Marketplace</NavLink>
            <NavLink to='/Dashboard' css={styles.links} onClick={navClickHandler}>Dashboard</NavLink>
            <Accordion css={styles.accordionStyle} elevation={0} disableGutters={true}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} style={{margin:'0px',padding:'0px'}}>
                <p css={styles.links} style={{margin:'0px'}}>Developper</p>
              </AccordionSummary>
              <AccordionDetails style={{margin:'0px',padding:'0px'}}>
                <NavLink to='/' css={styles.Smalllinks} onClick={navClickHandler}>API Integration</NavLink>
                <NavLink to='/' css={styles.Smalllinks} onClick={navClickHandler}>API Documentation</NavLink>
                <NavLink to='/' css={styles.Smalllinks} onClick={navClickHandler}>Escrow pay</NavLink>
              </AccordionDetails>
            </Accordion>
            <Accordion css={styles.accordionStyle} elevation={0} disableGutters={true}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} style={{margin:'0px',padding:'0px'}}>
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
      <img src={Menu} style={{height:'4vh'}} alt='iconSVG'/>
    </div>
    <div css={styles.leftMenu}>
      <img src={Language} style={{height:'3vh'}} alt='iconSVG'/>
      <img src={HeaderDown} style={{height:'3vh'}} alt='iconSVG'/>
    </div>
      {showNav && <MobileNav/>}
  </div>
)
  }

function Header() {
const isMobile = useMediaQuery({query:`(max-width:576px)`})
  return(
    <div>
      <CssBaseline/>
      {isMobile?<MobileDisplay/>:<LaptopDisplay/>}
    </div>
  )
}

export default Header
