/** @jsxImportSource @emotion/react */
import { css,keyframes } from '@emotion/react'
import React from 'react'
import { H33,plainText,H22,H11} from '../Home/GlobalStyles'
import { Button, InputBase } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const blurryBac3 = css`
width: 100.5vh;
height: 30.5vh;
opacity: 0.5;
filter: blur(140px);
position:absolute;
z-index:-10;
`
const shape1=css`
${blurryBac3};
background:#5A48FA;
`
const shape2=css`
${blurryBac3};
background:#4DE6FC;
`
const shape3=css`
${blurryBac3};
background:#AA80F9;
`

const subCss = css({
  fontSize:'30px',
  width:'100vh',
  textAlign:'center',
  marginLeft:'auto',
  marginRight:'auto'
})
const subDiv =css({
  display:'flex',
  justifyContent:'center',
  marginTop:'6vh',
})
const Emailbox =css({
  marginRight:'3vh',
  backgroundColor:'white',
  padding:'5px',
  border:'1px solid #d0d5dd',
  borderRadius:'5px',
  width:'50vh',
})
const footerLink =css({
  display:'block',
  textDecoration:'none',
  color:'#282D6C',
  width:'30vh',
  fontSize:'15px',
  paddingTop:'25px'
})
const footerIcon =css({
  display:'block',
  textDecoration:'none',
  width:'8vh',
  color:'#5A48FA',
})

const footerContainer =css({
  marginRight:'5vh'
})

function Footer() {
  return (
    <div className='Footer'>
      <div >
        <H22 css={subCss}>Subscribe to our Newsletter and learn more about our updated services</H22>
        <div>
          <form onSubmit={(e)=>{
            e.preventDefault()
            console.log('Form submitted')
            }}  css={subDiv}>
                <InputBase placeholder='YourEmail...' css={Emailbox}/>
                <Button variant='contained'style={{backgroundColor:'#5A48FA'}} type='submit'>Submit</Button>
          </form>
            </div>
      </div>
      <div style={{
        display:'flex',
        justifyContent:'space-around',
        marginTop:'15vh',
        borderBottom: '1px solid rgba(173, 173, 173, .5)',
        marginRight:'auto',
        marginLeft:'auto',
        width:'fit-content'
        }}>
            <div css={footerContainer}>
              <H33>OnlineP2P</H33>
              <div>
              <NavLink to='/aboutUS' css={footerLink}>About Us</NavLink>
              <NavLink to='/aboutUS' css={footerLink}>How are we different</NavLink>
              <div css={shape1}></div>
              </div>
              
            </div>
            <div css={footerContainer}>
            <H33>Useful Links</H33>
              <div>
              <NavLink to='/aboutUS' css={footerLink}>Contact</NavLink>
              <NavLink to='/aboutUS' css={footerLink}>Privacy</NavLink>
              <NavLink to='/aboutUS' css={footerLink}>Terms and Comditions</NavLink>
              </div>
            </div>
            <div css={footerContainer}>
            <div css={shape2}></div>
            <H33>Resources</H33>
              <div>
              <NavLink to='/aboutUS' css={footerLink}>Blog</NavLink>
              <NavLink to='/aboutUS' css={footerLink}>Case Studies</NavLink>
              </div>
            </div>
            <div css={footerContainer}>
            <H33>Support</H33>
              <div>
              <NavLink to='/aboutUS' css={footerLink}>Help Center</NavLink>
              <div css={shape3}></div>
              </div>
            </div>
            <div css={footerContainer}>
            <H33>Location</H33>
              <div>
              <NavLink to='/aboutUS' css={footerLink}>360 Spear St Floor 4,
Nkoulouloun, DLA 94105</NavLink>
              </div>
            </div>
      </div>
      <div style={{display:'flex',justifyContent:'space-around',gap:'50vh',marginTop:'5vh'}}>
        <p css={plainText}>© Copyright 2021. All Rights Reserved.</p>
        <div style={{display:'flex',justifyContent:'space-around'}}>
          <a href="https://www.google.com" css={footerIcon}><LinkedInIcon/></a>
          <a href="https://www.google.com" css={footerIcon}><FacebookIcon/></a>
          <a href="https://www.google.com" css={footerIcon}><TwitterIcon/></a>
        </div>
      </div>
    </div>
  )
}

export default Footer
            
            
            