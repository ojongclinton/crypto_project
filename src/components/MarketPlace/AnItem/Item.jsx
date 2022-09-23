/** @jsxImportSource @emotion/react */
import * as styles from './style'
import React from 'react'
import imagePlaceHolder from '../../../assets/imagePlaceholder.jpg'
import clock from '../../../assets/clock.svg'
import location from '../../../assets/location.svg'
import star from '../../../assets/star.svg'
import { chipStyle, H33 } from '../../Home/GlobalStyles'
import { Chip,Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'


const Item = ({item,btnColor})=>{
const navigate = useNavigate();
    return(
        <div css={styles.oneItemDiv}>
            <div css={styles.headerBox}> {/*Header*/}
                <div> {/*Left Section*/}
                    <h3 css={styles.bigHeader}>{item.name}</h3>
                    <p css={styles.userTag}>{item.user}</p>
                </div>
                <div> {/*Right Section*/}
                    <Chip label={item.category} css={styles.chipStyle}/>
                </div>
            </div>
            <img src={imagePlaceHolder} css={styles.imgStyle}/>
            <div> {/*Footer section... with Location,time and rating*/}
                <div css={styles.footerContainer}>{/*icons and all*/}
                    <div css={styles.footerIcon}>
                        <img src={location} alt="location"/>
                        <p css={styles.userTag}>{item.location}</p>
                    </div>
                    <div css={styles.footerIcon}>
                        <img src={clock} alt="sinceDays"/>
                        <p css={styles.userTag}>{item.datePosted}</p>
                    </div>
                    <div css={styles.footerIcon} >
                        <img src={star} alt="rating" />
                        <p css={styles.userTag}>{item.rating}</p>
                    </div>
                </div>
                <div css={styles.buyNow}> {/*Buy now*/}
                    <h3 css={styles.priceTag}>{item.amount}</h3>
                    <Button variant='contained' css={styles.btnStyle} style={{backgroundColor:btnColor}} 
                    onClick={()=>navigate(`/MarketPlace/${item.id}`)}>Buy now</Button>
                </div>
            </div>
        </div>
    )
}

export default Item