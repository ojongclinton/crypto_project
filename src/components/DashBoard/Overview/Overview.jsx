/** @jsxImportSource @emotion/react */
import React from 'react'
import * as styles from './style'
import { css,keyframes,Global } from '@emotion/react'
import { Avatar,Grid,Button,Chip } from '@mui/material'
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import NoteIcon from '@mui/icons-material/Note';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import RefreshIcon from '@mui/icons-material/Refresh';
import ClearIcon from '@mui/icons-material/Clear';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import MessageIcon from '@mui/icons-material/Message';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import LogoutIcon from '@mui/icons-material/Logout';
import {plainText,H11,H22,H33} from '../../Home/GlobalStyles';
import Rating from '@mui/material/Rating';
import bitcoin from '../../../assets/bitcoin-yellow.svg'


const user ={
  name:"Brice Fongang", title:'FINANCIAL EXPERT', followers:200, following:432,escrowSaved:2,imagePath:'#####',rating:3
}

export const Overview=()=>{
  return (
    
    <div className='Overview'>
      <Global
      styles={css`
        * {
          font-family:'SF Pro Display'
        }
      `}
    />
      <div >
       <Grid container spacing={2}>
        <Grid item xs={3} >
        <div css={styles.userDataDiv} >
        <Avatar src={bitcoin} css={styles.userPic}/>
        <H33 css={styles.userName}>{user.name}</H33>
        <p css={styles.userTitle}>{user.title}</p>
        <Rating value={user.rating} css={styles.userRating} max={4} readOnly/>
        <Button variant='contained' css={styles.actionButton} fullWidth style={{backgroundColor:'#5A48FA'}}> <DashboardCustomizeIcon/>Create new escrow</Button>
        <Button variant='contained' css={styles.actionButton} fullWidth style={{backgroundColor:'#04063D'}}><NoteIcon/> Generate a report</Button>
        </div>
        <div style={{margin:'0px 4.7vh 0px 4.7vh',background:'#ffffff',width:'45vh'}}>
          <div css={styles.foloContainer}>
            <PersonOutlineIcon css={styles.iconStyle}/>
            <p css={styles.plainText}>Followers</p>
            <Chip label={user.followers} css={styles.userChip}/>
          </div>
          <div css={styles.foloContainer}>
            <GroupOutlinedIcon css={styles.iconStyle}/>
            <p css={styles.plainText}>Following</p>
            <Chip label={user.following} css={styles.userChip}/>
          </div>
          <div css={styles.foloContainer}>
            <BookmarkBorderOutlinedIcon css={styles.iconStyle}/>
            <p css={styles.plainText}>Escrow saved</p>
            <Chip label={user.escrowSaved} css={styles.userChip}/>
          </div>
          <div css={styles.foloContainer2}>
            <SettingsIcon css={styles.iconStyle} />
            <p css={styles.plainText} style={{textAlign:'left',width:'fit-content'}}>Settings</p>
          </div>
          <div css={styles.foloContainer2} style={{marginTop:'9vh'}}>
            <LogoutIcon css={styles.iconStyle} />
            <p css={styles.plainText} style={{textAlign:'left'}}>Log Out</p>
          </div>
        </div>
        </Grid>
        <Grid item xs={9} style={{backgroundColor:'#eeeeee',marginLeft:'0px'}}>
        <H22>Overview</H22>
          <div css={styles.overviewFirstRow}> {/*Overview-FirstCol*/}
            <div css={styles.overviewRow1}>
e
            </div>
            <div css={styles.overviewRow1}>
              e
            </div>
            <div css={styles.overviewRow1}>
              d
            </div>
          </div>
          <div css={styles.overviewSecondRow}> {/*Overview-SecondRow*/}
            <div css={styles.overviewRow2} style={{borderTop:'3px solid #43DC80'}}> {/*Completed Escrows*/}

            </div>
            <div css={styles.overviewRow2} style={{borderTop:'3px solid #FFB930  '}}> {/*Pending Escrows*/}
              
            </div>
            <div css={styles.overviewRow2} style={{borderTop:'3px solid #FF3030'}}> {/*Rejected Escrows*/}
              
            </div>
            <div css={styles.overviewRow2} style={{borderTop:'3px solid #4EE9FE'}}> {/*Payment on Hold*/}
              
            </div>
            <div css={styles.overviewRow2} style={{borderTop:'3px solid #ACA3FC80 '}}> {/*Released Escrows*/}
              
            </div>
          </div>
          <div css={styles.overviewThirdRow}>
            <div style={{backgroundColor:'#eeeeee',width:'25vh',}}>
              <div style={{marginBottom:'2vh'}} css={styles.smallWhiteDiv}> {/*Top sales1*/}
                Top sales1
              </div >
              <div css={styles.smallWhiteDiv} style={{height:'29vh'}}> {/*Top sales2*/}
              Top sales2
              </div>
              <div css={styles.smallWhiteDiv} style={{height:'30.50vh'}}> {/*Ads Records*/}
              Ads records
              </div>
            </div>
            <div style={{backgroundColor:'#ffffff',width:'57.50vh',height:'61.61vh'}}>
              <div style={{height:'61.61vh'}}>
              Total contracs
              </div>
              <div style={{display:'flex',justifyContent:'space-between'}}>
                <div css={styles.smallWhiteDiv} style={{margin:'0px',marginTop:'2vh',backgroundColor:'#ffeeee',borderTop:'3px solid #FF6A55'}}>one</div>
                <div css={styles.smallWhiteDiv} style={{margin:'0px',marginTop:'2vh',borderTop:'3px solid #ACA3FC80'}}>two</div>
              </div>
            </div>
            <div style={{backgroundColor:'#ffffff',width:'57.50vh'}}>
feedback 
            </div>
          </div>
        </Grid>
       </Grid>
      </div>
    </div>
  )
}

export default Overview

