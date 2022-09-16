/** @jsxImportSource @emotion/react */
import { css,keyframes } from '@emotion/react'
import React from 'react'
import { H33,plainText,H22,H11} from '../Home/GlobalStyles'
import { Button, InputBase } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import * as Styles from './style'
import { useMediaQuery } from 'react-responsive'

function Footer() {
  const isMobile = useMediaQuery({query:`(max-width:576px)`})
  const [email,setEmail] = React.useState("")
  const handleSubmit = (e)=>{
    e.preventDefault()
    alert(`Email is : ${email}`)
  }
  return (
    <div className='Footer'>
      <div >
        <H22 css={Styles.subCss}>Subscribe to our Newsletter and learn more about our updated services</H22>
        <div>
          <form onSubmit={handleSubmit}  css={Styles.subDiv}>
                <InputBase placeholder='YourEmail...' css={Styles.Emailbox} value={email} type='email' onChange={(e)=>setEmail(e.target.value)}/>
                <Button variant='contained'style={isMobile?{backgroundColor:'#5A48FA',width:'fit-content',margin:'auto',padding:'15px 30px'}:{backgroundColor:'#5A48FA'}} type='submit'>Submit</Button>
          </form>
            </div>
      </div>
      <div css={Styles.footerContainer2}>
            <div css={Styles.footerContainer}>
              <H33>OnlineP2P</H33>
              <div>
              <NavLink to='/aboutUS' css={Styles.footerLink}>About Us</NavLink>
              <NavLink to='/aboutUS' css={Styles.footerLink}>How are we different</NavLink>
              {/* <div css={Styles.shape1}></div> */}
              </div>
              
            </div>
            <div css={Styles.footerContainer}>
            <H33>Useful Links</H33>
              <div>
              <NavLink to='/aboutUS' css={Styles.footerLink}>Contact</NavLink>
              <NavLink to='/aboutUS' css={Styles.footerLink}>Privacy</NavLink>
              <NavLink to='/aboutUS' css={Styles.footerLink}>Terms and Comditions</NavLink>
              </div>
            </div>
            <div css={Styles.footerContainer}>
            {/* <div css={Styles.shape2}></div> */}
            <H33>Resources</H33>
              <div>
              <NavLink to='/aboutUS' css={Styles.footerLink}>Blog</NavLink>
              <NavLink to='/aboutUS' css={Styles.footerLink}>Case Studies</NavLink>
              </div>
            </div>
            <div css={Styles.footerContainer}>
            <H33>Support</H33>
              <div>
              <NavLink to='/aboutUS' css={Styles.footerLink}>Help Center</NavLink>
              {/* <div css={Styles.shape3}></div> */}
              </div>
            </div>
            <div css={Styles.footerContainer}>
            <H33>Location</H33>
              <div>
              <NavLink to='/aboutUS' css={Styles.footerLink}>360 Spear St Floor 4,
Nkoulouloun, DLA 94105</NavLink>
              </div>
            </div>
      </div>
      <div style={{display:'flex',justifyContent:'space-around',gap:'50vh',marginTop:'5vh'}}>
        <p css={plainText}>© Copyright 2021. All Rights Reserved.</p>
        {!isMobile && <div style={{display:'flex',justifyContent:'space-around'}}>
          <a href="https://www.google.com" css={Styles.footerIcon}><LinkedInIcon/></a>
          <a href="https://www.google.com" css={Styles.footerIcon}><FacebookIcon/></a>
          <a href="https://www.google.com" css={Styles.footerIcon}><TwitterIcon/></a>
        </div>}
      </div>
    </div>
  )
}

export default Footer
            
            
            