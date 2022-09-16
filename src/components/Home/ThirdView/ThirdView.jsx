/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'
import {Paper,styled,Chip} from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import * as styles from './style'
import { H11,H33,H22, mq,plainText,chipStyle,StyledBox } from '../GlobalStyles';
import { useMediaQuery } from 'react-responsive'


export const ThirdView =()=>{
const isMobile = useMediaQuery({query:`(max-width:576px)`})


const whyChooseusReasons =[ 
  {title:"Pro services",body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada at faucibus vitae libero tellus enim eros, tristique. Lorem aliquet nunc bibendum."},
  {title:"Low Costing",body:"You can easily escrow vehicles, websites, domain names, jewellery, intellectual property, and nearly anything else you can ."},
  {title:"Live Support",body:"Customer support has been made available to you 24hours a day 7days a week, contact us any time and we are there to respond."},
  {title:"Safe and secure",body:"We are the only government regulated and licensed escrow company online that is compliant with escrow Law. "}
]
  return(
    <div className='ThirdView'>
      
        <div>
          <div css={styles.whyChoose}>
        <div>
          <div css={styles.shape7}></div>
          <div css={styles.shape8}></div>
          <div css={styles.shape9}></div>
          <Chip label="We explain" css={chipStyle}/>
          <H11>Why choose us?</H11>
          <p css={plainText} style={isMobile?{marginBottom:'0px'}:{margin:'5vh 0vh'}}>We're not just an online escrow service, We're THE BEST online escrow service.</p>
        </div>
      </div>
      <div css={styles.reasonBox}>
          {whyChooseusReasons.map((reason,index)=>(
            <StyledBox elevation={3} key={index} index={index}>
              <H33 index={index}>{reason.title}</H33>
              <p style={{height:isMobile?'fit-content':'20.53vh'}}>{reason.body}</p>
              <p css={index==0?styles.FviewMore:styles.viewMore}>Learn More <span><KeyboardArrowRightIcon style={index==0?{color:'#04063d'}:{color:'#00C0FF'}}/></span></p>
            </StyledBox>
          ))}
      </div>
        </div>
    </div>
  )
}