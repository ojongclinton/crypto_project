/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'
import { css,Global } from '@emotion/react'
import {styled,Chip, Avatar, Stack, Typography} from '@mui/material'
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
import { H11, H33,H22 } from '../GlobalStyles'
import * as styles from './style'

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <img src={letfArrow} alt="prevArrow" {...props} style={{color:'red',height:'5vh',width:'5vh'}}/>
);

const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <img src={rightArrow} alt="nextArrow" {...props} style={{color:'red',height:'5vh',width:'5vh'}}/>
);  


export const FithView =()=>{
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
var settings = {
  className:'center',
  dots:false,
  infinite:true,
  speed:1000,
  slidesToShow:2,
  slidesToScroll:1,
  prevArrow:<SlickArrowLeft/>,
  nextArrow:<SlickArrowRight/>,
}

  return(
    <div className="FithView">
      <div css={styles.whoWeAre} style={{margin:'10vh'}}>
        <div >
          <Chip label="Payment" style={{color:'#5A48FA',backgroundColor:'#dcfbff',   marginBottom:'15px'}}/>
          <H11 style={{width:'70.30vh'}}>We accept these different cryptos</H11>
          <p css={styles.plainText} style={{width:'70.30vh'}}>Safely buy and sell products and services from $100 to $10 million or more</p>
        </div>
        <div className='fithViewHalfCircle'>
          <div>
          <img src={bitcoin} alt="bitcoinIMG" css={styles.bitcoinImage} />
          <img src={binance} alt="bitcoinIMG" css={styles.binanceImage} />
          <img src={etherum} alt="bitcoinIMG" css={styles.etherumImage} />
          <img src={TeTher} alt="bitcoinIMG" css={styles.tetherImage} />
          </div>
          <div>
          <img src={Payeer} alt="bitcoinIMG" css={styles.payeerImage} />
                    <img src={BlockIo} alt="bitcoinIMG" css={styles.blockImage} />
          <img src={More} alt="bitcoinIMG" css={styles.moreImage} />
          </div>
        </div>
      </div>
      <div css={styles.testimonials}>
      
        <div  style={{height:'10vh',display:'flex',justifyContent:'space-around'}}>
        <H11 style={{color:'white',marginLeft:'60vh',marginTop:'10vh'}}>Testimonial</H11>
            <img src={quotes} alt='quoteIMG' css={styles.quoteImage}/>
        </div>
        <Slider {...settings}>
          {testimonials.map(testimony=>{
            return(
              <div>
                <div style={{backgroundColor:'white',margin:'5vh',padding:'10px',textAlign:'center',height:'30vh',borderRadius:'10px'}}>
                  <H33>{testimony.title}</H33>
                  <p css={styles.plainText} style={{fontSize:'14px'}}>{testimony.comment}</p>
                </div>
                <div style={{display:'flex',justifyContent:'center',margin:'0px'}}>
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