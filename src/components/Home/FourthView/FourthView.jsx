/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'
import { css,Global } from '@emotion/react'
import {Chip,styled} from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ProtoTypes from "prop-types"
import * as styles from './style'
import { H11 } from '../GlobalStyles';
import { useMediaQuery } from 'react-responsive'

const YoutubeEmbed = ({ embedId,height,width }) => (
  <div className="video-responsive">
    <iframe
      width={width}
      height={height}
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.prototypes = {
  embedId: ProtoTypes.string.isRequired
}

export const FourthView =()=>{
  const isMobile = useMediaQuery({query:`(max-width:576px)`})
  return(
    <div className='FourthView'>
          <div css={styles.shape10}></div>
          <div css={styles.shape11}></div>
          <div css={styles.shape12}></div>
        {isMobile?(<div>
          <Chip label="Who we are" style={{color:'#5A48FA',backgroundColor:'#dcfbff',   marginBottom:'15px'}}/>
          <H11 style={{textAlign:'center'}}>About Us</H11>
          <p css={styles.plainText} style={{textAlign:'center'}} >Welcome to People-Powered Technology</p>
          <p css={styles.plainText} style={{textAlign:'center'}}>OnlineP2P is entirely peer-to-peer, which means our users trade with real people the way bitcoin was intended to be used We're not just an online escrow service, We're THE BEST online escrow service, In just less than five years, weve become one of the leading peer-to-peer bitcoin marketplaces used by millions around the world. And were just getting started. </p>
          <p css={styles.plainText} style={{marginBottom:'5vh'}}>Learn More<KeyboardArrowRightIcon style={{color:'#00C0FF',position:'relative',top:'1vh'}}/></p>
          <div className="Mobilevideo">
        <YoutubeEmbed embedId="rokGy0huYEA" width='100%' height='250' /> {/*Get Original video ID and insert here*/}
      </div>
        </div>):(<div>
          <div css={styles.whoWeAre}>
        <div >
          <Chip label="Who we are" style={{color:'#5A48FA',backgroundColor:'#dcfbff',   marginBottom:'15px'}}/>
          <H11>About Us</H11>
          <p css={styles.plainText} >Welcome to People-Powered Technology</p>
        </div>
        <div >
          <p css={styles.plainText} style={{width:'100vh'}}>OnlineP2P is entirely peer-to-peer, which means our users trade with real people the way bitcoin was intended to be used We're not just an online escrow service, We're THE BEST online escrow service, In just less than five years, weve become one of the leading peer-to-peer bitcoin marketplaces used by millions around the world. And were just getting started. </p>
          <p css={styles.plainText} style={{marginTop:'10px'}}>Learn More<KeyboardArrowRightIcon style={{color:'#00C0FF',position:'relative',top:'1vh'}}/></p>
        </div>
      </div>
      <div className="video">
        <YoutubeEmbed embedId="rokGy0huYEA" height="480" width="1096" /> {/*Get Original video ID and insert here*/}
      </div>

        </div>)}
      
    </div>
  )
}
