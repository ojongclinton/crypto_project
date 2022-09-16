/** @jsxImportSource @emotion/react */
import { Avatar, Button } from '@mui/material'
import React from 'react'
import { feedBack } from '../Overview/StaticData'
import * as styles from './style'
import MessageIcon from '@mui/icons-material/Message';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import bitcoin from '../../../assets/bitcoin-yellow.svg'
import { useMediaQuery } from 'react-responsive'
import { useNavigate } from 'react-router-dom';



export const FeedBack =()=>{
const isMobile = useMediaQuery({query:`(max-width:576px)`})
const navigate = useNavigate()
    return(
      <div css={styles.feedContainer}>
        {isMobile && <h2 css={styles.title}>Feedback</h2>}
        {feedBack.slice(0,2).map((fed,index)=>
          (
            <div key={index} css={styles.userFeedback}>
              <Avatar src={bitcoin} css={styles.feedImage}/>
              <div style={{marginLeft:isMobile?'1vh':'3vh',width:'70%', borderBottom:'0.5px solid #EFEFEF'}}>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                <p css={styles.fedText}><b>{fed.name}</b> <span style={{color:'#9A9FA5'}}>{fed.username}</span></p>
                <p style={{color:'#9A9FA5',padding:'0px',margin:'0px'}}>{fed.fedTime}</p>
                </div>
                
                <p css={styles.fedText}><span style={{color:'#9A9FA5'}}>On</span> <b>{fed.title}</b> </p>
                <p css={styles.fedText}>{fed.comment}</p>
                <div style={{display:'flex',justifyContent:'space-between',margin:'1.5vh auto 3vh auto'}}>
                  <MessageIcon css={styles.feedbackIcon}/>
                  <FavoriteBorderIcon css={styles.feedbackIcon}/>
                  <InsertLinkIcon css={styles.feedbackIcon}/>
                </div>
              </div>
            </div>
          ))}
          <div style={{width:'90%',margin:'auto'}}>

          <Button variant='outlined' fullWidth css={styles.btnStyle} onClick={()=>navigate('/')}>View all</Button>
          </div>
      </div>
    )
  }