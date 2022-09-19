/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'
import { css,Global } from '@emotion/react'
import {Chip, Avatar,Typography} from '@mui/material'
import letfArrow from '../../../assets/leftArrow.svg'
import rightArrow from '../../../assets/rightArrow.svg'
import bitcoin from '../../../assets/bitcoin-yellow.svg'
import binance from '../../../assets/binance-yellow.svg'
import etherum from '../../../assets/etherum-blue.svg'
import TeTher from '../../../assets/ThtherUSDT-green.svg'
import quotes from '../../../assets/quote.svg'
import Payeer from '../../../assets/Payeer.svg'
import BlockIo from '../../../assets/blockIO.svg'
import More from '../../../assets/More.svg'
import Slider from "react-slick";
import { H11, H33,H22,chipStyle,plainText } from '../GlobalStyles'
import * as styles from './style'
import { useMediaQuery } from 'react-responsive'
import React from 'react'

//React slick arrow to move left
const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <img src={letfArrow} alt="prevArrow" {...props} style={{color:'red',height:'5vh',}}/>
);

//React slick arrow to move Right
const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <img src={rightArrow} alt="nextArrow" {...props} style={{color:'red',height:'5vh'}}/>
);  
const testimonials =[
  {
    name:"Jane Cooper",
    status:"CEO, ABC Corporation",
    title:"Incredible Experience",
    comment:"We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the concept so quickly. It acted as a catalyst to take our design to the next level and get more eyes on our product."
  },
  {
    name:"Jane Coope",
    status:"CEO, ABC Corporation",
    title:"Dependable, Responsive, Professional Partner",
    comment:"Fermin Apps has collaborated with Landify team for several projects such as Photo Sharing Apps and Custom Social Networking Apps. The experience has been pleasant, professional and exceeding our expectations. The team is always thinking beyond the current tasks & helps us formulate a vision and possibilities for future."
  },
  {
    name:"Ojong Clinton",
    status:"React Developer",
    title:"Change This Info",
    comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus natus illo itaque cumque id suscipit aperiam. Repudiandae quas ducimus corrupti nisi tempore nemo aspernatur necessitatibus ut. Fugit commodi expedita molestiae debitis quaerat ad porro amet, fugiat eaque quibusdam odio doloribus."
  },
  {
    name:"Ojong Clinton",
    status:"React Developer",
    title:"Change This Info",
    comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus natus illo itaque cumque id suscipit aperiam. Repudiandae quas ducimus corrupti nisi tempore nemo aspernatur necessitatibus ut. Fugit commodi expedita molestiae debitis quaerat ad porro amet, fugiat eaque quibusdam odio doloribus."
  }
]

export const FithView =()=>{
  const isMobile = useMediaQuery({query:`(max-width:576px)`})
  const [currentSlide,setCurrentSlide] = React.useState(0)
  
//////////This are the options for the react slick component
var settings = {
  beforeChange:function(prev,next){
    setCurrentSlide(next)
  },
  customPaging: function(pagi, i) {
    const style={
      height:'10px',
      width:'10px',
      borderRadius:'100px',
      border:'2px solid #82839e'
    }
    const activeStyle={
      height:'10px',
      width:'10px',
      borderRadius:'100px',
      backgroundColor:'white'
    }
    return (
      <div className='slick-dot' style={pagi===currentSlide?activeStyle:style}> </div>
    );
  },
  className:isMobile?'Mcenter':'center',
  dots:true,
  infinite:true,
  speed:1000,
  slidesToShow:isMobile?1:2,
  slidesToScroll:1,
  prevArrow:<SlickArrowLeft/>,
  nextArrow:<SlickArrowRight/>,
  arrows:isMobile?false:true,
  autoplay:true,
  autoplayspeed:400

}

  return(
    <div className="FithView" >
      <div css={isMobile?styles.MWhoweAre:styles.whoWeAre}>
        <div css={styles.iconContainer}>
          <Chip label="Payment" css={chipStyle}/>
          <H11 css={styles.heading}>We accept these different cryptos</H11>
          <p css={[plainText,styles.titleText]}>Safely buy and sell products and services from $100 to $10 million or more</p>
        </div>
        <div className='fithViewHalfCircle'>
          <div style={isMobile?{display:'flex',justifyContent:'space-around'}:{}}>
            <img src={bitcoin} alt="bitcoinIMG" css={ isMobile?styles.currencies3:styles.bitcoinImage} />
            <img src={binance} alt="bitcoinIMG" css={ isMobile?styles.currencies3:styles.binanceImage} />
            <img src={etherum} alt="bitcoinIMG" css={ isMobile?styles.currencies3:styles.etherumImage} />
            <img src={TeTher} alt="bitcoinIMG" css={ isMobile?styles.currencies3:styles.tetherImage} />
          </div>
          <div style={isMobile?{display:'flex',justifyContent:'space-around',padding:'5vh'}:{}}>
            <img src={Payeer} alt="bitcoinIMG" css={isMobile?styles.currencies4:styles.payeerImage} />
            <img src={BlockIo} alt="bitcoinIMG" css={isMobile?styles.currencies4:styles.blockImage} />
            <img src={More} alt="bitcoinIMG" css={isMobile?styles.currencies4:styles.moreImage} />
          </div>
        </div>
      </div>
      <div css={styles.testimonials}>
        <div  style={{height:'fit-content',display:'flex',justifyContent:'space-around'}}>
        <H11 style={{color:'white',padding:'auto'}}>Testimonial</H11>
            {!isMobile && <img src={quotes} alt='quoteIMG' css={isMobile?styles.MqouteImage:styles.quoteImage}/>}
        </div>
        <Slider {...settings} css={styles.reactSlider}>
          {testimonials.map((testimony,key)=>{
            return(
              <div key={key}>
                <div css={styles.testiDiv}>
                  <H33 style={{margin:'1vh'}}>{testimony.title}</H33>
                  <p css={plainText} style={{fontSize:'14px',lineHeight:isMobile?'25px':''}}>{testimony.comment}</p>
                </div>
                <div css={styles.userInfocont}>
                    <Avatar src={bitcoin} alt={testimony.name} sx={{ width: 50, height: 50,m:1}}/>
                    <div>
                    <Typography variant='h6' style={{color:'white'}}>{testimony.name}</Typography>
                    <Typography style={{color:'white'}}>{testimony.status}</Typography>
                    </div>
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
    </div>
  )
}