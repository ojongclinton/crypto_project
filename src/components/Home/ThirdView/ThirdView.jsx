/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'
import {Paper,styled,Chip} from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import * as styles from './style'
import { H11,H33,H22 } from '../GlobalStyles';
import { useMediaQuery } from 'react-responsive'


export const ThirdView =()=>{
  const isMobile = useMediaQuery({query:`(max-width:576px)`})
  const isLlaptop = useMediaQuery({query:`(max-width:1024px)`})
  const Reason = styled(Paper)(({ theme,index }) => ({
    color: index ==0?'white':theme.palette.text.secondary,
    background:index==0?'linear-gradient(rgba(78, 231, 255, 1),rgba(170, 128, 249, 1))':'',
    height: 'fit-content',
    width:'40vh',
    padding:'4vh',
    textAlign:'center',
  }));
const whyChooseusReasons =[ 
  {title:"Pro services",body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada at faucibus vitae libero tellus enim eros, tristique. Lorem aliquet nunc bibendum."},
  {title:"Low Costing",body:"You can easily escrow vehicles, websites, domain names, jewellery, intellectual property, and nearly anything else you can ."},
  {title:"Live Support",body:"Customer support has been made available to you 24hours a day 7days a week, contact us any time and we are there to respond."},
  {title:"Safe and secure",body:"We are the only government regulated and licensed escrow company online that is compliant with escrow Law. "}
]
  return(
    <div >
      {isMobile? (<div>
        <H11>Why choose us?</H11>
        <div css={styles.shape7}></div>
          <div css={styles.shape8}></div>
          <div css={styles.shape9}></div>
          <p css={styles.plainText}>We're not just an online escrow service, We're THE BEST online escrow service.</p>
        {whyChooseusReasons.map(reason=>{
          return(
            <div style={{marginTop:'2vh'}}>
              <H22 style={{textDecoration:'underline',textAlign:'center'}}>{reason.title}</H22>
              <p css={styles.plainText}>{reason.body}</p>
              <p css={styles.MviewMore}>Learn More <span><KeyboardArrowRightIcon style={{color:'#00C0FF'}}/></span></p>
            </div>
          )
        })}
      </div>)
      :
      (
        <div>
          <div css={styles.whyChoose}>
        <div>
          <div css={styles.shape7}></div>
          <div css={styles.shape8}></div>
          <div css={styles.shape9}></div>
          <Chip label="We explain" style={{color:'#5A48FA',backgroundColor:'#dcfbff'}}/>
          <H11>Why choose us?</H11>
          <p css={styles.plainText} style={{width:'80vh'}}>We're not just an online escrow service, We're THE BEST online escrow service.</p>
        </div>
      </div>
      <div css={styles.reasonBox}>
          {whyChooseusReasons.map((reason,index)=>(
            <Reason elevation={3} key={index} index={index}>
              <H33 index={index}>{reason.title}</H33>
              <p style={{height:'20.53vh'}}>{reason.body}</p>
              <p css={index==0?styles.FviewMore:styles.viewMore}>Learn More <span><KeyboardArrowRightIcon style={index==0?{color:'#04063d'}:{color:'#00C0FF'}}/></span></p>
            </Reason>
          ))}
      </div>
        </div>
      )}
    </div>
  )
}