/** @jsxImportSource @emotion/react */
import * as styles from './style'
import React from 'react'
import { useParams } from 'react-router-dom'
import { Grid,Chip,Rating,Button } from '@mui/material'
import { comments, items } from '../MarketPlace'
import imagePlaceHolder from '../../../assets/imagePlaceholder.jpg'
import imagePlaceHolder1 from '../../../assets/imagePlaceholder1.jpg'
import imagePlaceHolder2 from '../../../assets/imagePlaceholder2.jpg'
import SwapHorizontalCircleRoundedIcon from '@mui/icons-material/SwapHorizontalCircleRounded';
import { useMediaQuery } from 'react-responsive'



const pics = [imagePlaceHolder,imagePlaceHolder1,imagePlaceHolder2]


function ItemDetails() {
const isMobile = useMediaQuery({query:`(max-width:576px)`})
const [showComments,setShowComments] = React.useState(2);
const showMoreComments = ()=>{
  setShowComments(comments.length)
}
const {itemId} = useParams()
const theItem = items.find(item=>item.id == itemId)

const [currentImage,setCurrentImage] = React.useState(imagePlaceHolder)
const [anId,setId] = React.useState(0)
const hadleImageChange =(e)=>{
  setCurrentImage(pics[e])
  setId(e)
}

  return (
    <div css={styles.itemDetails}>
      <Grid container gap={4}>
        <Grid item xl={6}>
          <div>
            <img src={currentImage} alt="itemImage" css={styles.bigImage} />
            <div css={styles.otherimgs}>{/*Other Item images */}
            {pics.map((pic,index)=>{
              return(
                <div css={anId==index?styles.oneActiveDiv:styles.oneOtherDiv} onClick={()=>hadleImageChange(index)} key={index}>
                <img 
                src={pic} 
                alt="otherImages" 
                css={styles.otherimgstyle}  />
              </div>
              )
            })}
            </div>
          </div>
        </Grid>
        <Grid item xl={5}>
          <div css={styles.itemTextDetails}>
              <div css={styles.Rating}> {/*name and tag container*/}
              <div>
                  <h1 css={styles.itemName}>{theItem.name}</h1>
                  <div css={styles.flexDiv}>
                    <Rating
                     value={3} 
                     readOnly 
                     size={isMobile?"small":"medium"}
                     />
                    <p css={styles.ratingTag}>440+ Reviewers</p>
                  </div>
              </div>
              <Chip label={theItem.category} css={styles.chipStyle}/>
              </div>
              <div> {/*Item Description*/}
                <p css={styles.description}>
                  {theItem.description}
                </p>
              </div>
              <div style={{width:'40%',marginBottom:'17px'}}> {/*Item type details*/}
                <div css={styles.flexDiv}>
                  <p css={styles.userTag2}>Type:</p>
                  <p css={styles.typeTag}>{theItem.type}</p>
                </div>
                <div css={styles.flexDiv}>
                  <p css={styles.userTag2}>Category:</p>
                  <p css={styles.typeTag}>{theItem.category}</p>
                </div>
              </div>
              <div css={styles.flexDiv} style={isMobile?{width:'100%'}:{width:'80%'}}> {/*Price and Contract*/}
                <div>
                  <h2 css={styles.itemprice}>{theItem.amount}</h2>
                </div>
                <div css={styles.flexDiv}>
                  <div css={styles.exchange}> 
                  <SwapHorizontalCircleRoundedIcon 
                  style={{color:'#666666',margin:'11px',marginTop:'14px'}}/>
                   </div>
                  <Button variant='contained' fullWidth style={{margin:'0px 10px',textTransform:'none',backgroundColor:'#3563E9'}}>Contract</Button>
                </div>
              </div>
          </div>
        </Grid>
      </Grid> 

      
    </div>
  )
}

export default ItemDetails
