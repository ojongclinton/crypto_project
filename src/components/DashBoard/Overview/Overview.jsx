/** @jsxImportSource @emotion/react */
import React from 'react'
import * as styles from './style'
import millify from 'millify';
import { css,keyframes,Global } from '@emotion/react'
import { Avatar,Grid,Button,Chip } from '@mui/material'
//Everything Below are just icons and styles
import bitcoin from '../../../assets/bitcoin-yellow.svg'
import tropphyBadge from '../../../assets/trophyBadge.svg'
import raieIcon from '../../../assets/rateIcon.svg'
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import NoteIcon from '@mui/icons-material/Note';
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
import { LineChart,LineChart2 } from '../Charts/LineChart';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';

import { user,ovRow1Data,ovRow2Data } from './StaticData'; {/*API for static user data*/}


{/*Lots of data transmission would be going on here....all user data from last week,the current week last month,and the current month are supposed to be compared so the various icons for increase and decrease are diaplayed accordingly...Static data would be used for now since a backend is not yet set up*/}

const OverviewRow1 =()=>{
  return(
    <div css={styles.overviewFirstRow}>
      {ovRow1Data.map(data=>{  {/*Mapping trough the first row of overview ie Balance,total Deposit,ets*/}
              return(
                <div css={styles.overviewRow1}>
                  <div><span css={styles.OviconStyle}>{data.icon}</span>
                    <H22 style={{fontSize:'18px'}}>{data.name}</H22>
                    <H11>{millify(data.amount)}</H11>
                      {data.trend}
                  </div>
                  <div style={{width:'40%',height:'15vh',margin:'0px',padding:'0px',marginTop:'auto',marginRight:'3vh',marginBottom:'auto'}}>
                    <LineChart lineColor={data.lineColor} theData ={data.data} theLabels={data.labels}/>
                  </div>
                </div>
              )
            })}
    </div>
  )
}


const OverviewRow2 =()=>{
  return(
    <div css={styles.overviewSecondRow}> {/*Overview-SecondRow*/}
            {ovRow2Data.map(data=>{{/*Mapping trough the second row of overview ie completed,pending,etc escrows*/}
              return(  
              <div css={styles.overviewRow2} style={{borderTop:data.bColor}}>
                  <div>
                    <H22 style={{color:'#64748B',fontSize:'4.26vh'}}>{data.amount}</H22>
                    <p style={{fontSize:'1.73vh'}}>{data.name}</p>
                  </div>
                  <div>
                    <span css={styles.OviconStyle2}>{data.icon}</span>
                  </div>
              </div>
            )})
            }
          </div>
  )
}

const UserInfo =()=>{
  return(
    <div css={styles.userDataDiv} > {/*Th Div containing the logged in user Information*/}
            <Avatar src={bitcoin} css={styles.userPic}/>
            <H33 css={styles.userName}>{user.name}</H33>
            <p css={styles.userTitle}>{user.title}</p>
            <Rating value={user.rating} css={styles.userRating} max={4} readOnly/>
            <Button variant='contained' css={styles.actionButton} fullWidth style={{backgroundColor:'#5A48FA'}}>
              <DashboardCustomizeIcon/>Create new escrow</Button>
            <Button variant='contained' css={styles.actionButton} fullWidth style={{backgroundColor:'#04063D'}}>
              <NoteIcon/> Generate a report</Button>
          </div>
  )
}

const UserActions =()=>{
  return(
    <div style={{margin:'0px 4.7vh 0px 4.7vh',background:'#ffffff',width:'45vh'}}> {/*The div about the followers, following, settings,etc*/}
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
  )
}

const OverviewRow3 =()=>{
  return(
    <div css={styles.overviewThirdRow}>
            <div style={{backgroundColor:'#eeeeee',width:'25vh',}}>
              <div style={{marginBottom:'2vh'}} css={styles.smallWhiteDiv}> {/*Total sales1*/}
                <H22 css={styles.smallTitle}>Total sales</H22>
                <H11 css={styles.bigTitle}>{millify(user.totalSales)}</H11>
              </div >
              <div css={styles.smallWhiteDiv} style={{height:'29vh'}}> {/*Top sales2*/}
                <H22 css={styles.smallTitle}>Top sales</H22>
              </div>
              <div css={styles.smallWhiteDiv} style={{height:'30.50vh',padding:'1vh'}}> {/*Ads Records*/}
                  <H22 css={styles.smallTitle}>Ads Records</H22>
                  <div style={{display:'flex'}}>
                    <H11 css={styles.bigTitle}>17</H11>
                    <img src={tropphyBadge} style={{height:'6vh',marginTop:'0.5vh'}}/>
                  </div>
                  <div>

                  </div>
              </div>
            </div>
            <div style={{backgroundColor:'#ffffff',width:'57.50vh',height:'61.61vh'}}>
              <div style={{height:'61.61vh',padding:'2vh'}}>
                <H22 css={styles.smallTitle}>Total contracts</H22>
                <div style={{width:'100%',height:'90%',padding:'3vh',marginTop:'5vh',overflow:'auto'}}>
                  <LineChart2 lineColor='#37d694' theData={user.contracts.map(data=>data.amount)} theLabels={user.contracts.map(data=>data.label)} />    
                </div>
              </div>
              <div style={{display:'flex',justifyContent:'space-between'}}>
                <div css={styles.smallWhiteDiv} style={{margin:'0px',marginTop:'2vh',backgroundColor:'#ffeeee',borderTop:'3px solid #FF6A55'}}>one</div>
                <div css={styles.smallWhiteDiv} style={{margin:'0px',marginTop:'2vh',borderTop:'3px solid #ACA3FC80'}}>two</div>
              </div>
            </div>
            <div style={{backgroundColor:'#ffffff',width:'57.50vh',padding:'2vh'}}>
                <H22 css={styles.smallTitle}>FeedBack</H22>
            </div>
          </div>
  )
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
          <UserInfo />
          <UserActions />
        </Grid>
        <Grid item xs={9} style={{backgroundColor:'#eeeeee',marginLeft:'0px'}}>
          <H22>Overview</H22>
            <OverviewRow1 />
            <OverviewRow2 />
            <OverviewRow3/>
        </Grid>
       </Grid>
      </div>
    </div>
  )
}

export default Overview

