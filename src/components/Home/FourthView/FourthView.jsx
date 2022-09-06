/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'
import { css,Global } from '@emotion/react'
import {Chip, CssBaseline} from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ProtoTypes from "prop-types"
import * as styles from './style'
import { H11 } from '../GlobalStyles';
import { useMediaQuery } from 'react-responsive'
import { chipStyle } from '../SecondView/style';



const YoutubeEmbed = ({ embedId,height,width}) => (
  <div style={{display:'flex',justifyContent:'center', width:'100%',height:'100%'}}>
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
  const isMobile = useMediaQuery({query:`(max-width:576px)`}) /*This is a query that checks is the user is viewing on mobile*/
  return(
    <div className='FourthView' >
      <CssBaseline/>
          <div css={styles.shape10}></div>
          <div css={styles.shape11}></div>
          <div css={styles.shape12}></div>
        <div>
          <div css={styles.whoWeAre}>
        <div style={{display:'flex',flexDirection:'column'}} >
          <Chip label="Who we are" css={chipStyle} style={{margin:isMobile?'auto':''}}/>
          <H11 style={{textAlign:isMobile?'center':''}}>About Us</H11>
          <p css={styles.plainText} style={{textAlign:isMobile?'center':''}}>Welcome to People-Powered Technology</p>
        </div>
        <div >
         {!isMobile && <p css={styles.plainText} style={{width:isMobile?'100%':'100vh'}}>OnlineP2P is entirely peer-to-peer, which means our users trade with real people the way bitcoin was intended to be used We're not just an online escrow service, We're THE BEST online escrow service, In just less than five years, weve become one of the leading peer-to-peer bitcoin marketplaces used by millions around the world. And were just getting started. </p>} 
         {!isMobile && <p css={styles.plainText} style={{marginTop:'10px'}}>Learn More<KeyboardArrowRightIcon style={{color:'#00C0FF',position:'relative',top:'1vh'}}/></p>}
          
        </div>
      </div>
      <div className="video">
        <YoutubeEmbed embedId="UUgSzLzxJyo" height={isMobile?"100%":'480'} width={isMobile?"100%":'1096'} />
      </div> 
        </div>
      
    </div>
  )
}
