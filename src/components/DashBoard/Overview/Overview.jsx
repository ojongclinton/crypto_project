/** @jsxImportSource @emotion/react */
import React from 'react'
import * as styles from './style'
import millify from 'millify';
import { css,keyframes,Global } from '@emotion/react'
import { Avatar,Grid,Button,Chip, FormControlLabel, Switch,CssBaseline } from '@mui/material'
//Everything Below are just icons and styles
import bitcoin from '../../../assets/bitcoin-yellow.svg'
import tropphyBadge from '../../../assets/trophyBadge.svg'
import raieIcon from '../../../assets/rateIcon.svg'
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import ShowChartIcon from '@mui/icons-material/ShowChart';
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
import { BarChart } from '../Charts/BarChart';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import { user,ovRow1Data,ovRow2Data,feedBack } from './StaticData';
import TransactionsHistory from '../TransactionHistory/Transaction';
  {/*API for static user data*/}





{/*Lots of data transmission would be going on here....all user data from last week,the current week last month,and the current month are supposed to be compared so the various icons for increase and decrease are diaplayed accordingly...Static data would be used for now since a backend is not yet set up*/}

const OverviewRow1 =()=>{
  return(
    <div css={styles.overviewFirstRow}>
      {ovRow1Data.map(data=>{  {/*Mapping trough the first row of overview ie Balance,total Deposit,ets*/}
              return(
                <div css={styles.overviewRow1}>
                  <div><span css={styles.OviconStyle}>{data.icon}</span>
                  <div style={{display:'flex',justifyContent:"space-around"}}>
                  <H22 style={{fontSize:'18px'}}>{data.name}</H22>
                  <div css={styles.exclamContainer} onMouseEnter={()=>console.log('Mouse entered')} onMouseLeave={()=>console.log('Mouse leave')}>
                  <PriorityHighIcon css={styles.exclamIcon}/>
                  </div>
                  </div>
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

const FeedBack =()=>{
  
  return(
    <div>
      {feedBack.slice(0,3).map((fed,index)=>
        (
          <div key={index} css={styles.userFeedback}>
            <Avatar src={bitcoin} css={styles.feedImage}/>
            <div style={{marginLeft:'3vh',width:'70%', borderBottom:'0.5px solid #EFEFEF'}}>
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
              <div css={styles.smallWhiteDiv} style={{height:'fit-content',padding:'0px'}}> {/*Top sales2*/}
                <H22 css={styles.smallTitle} style={{paddingTop:'1vh',paddingLeft:'3vh',paddingBottom:'1vh'}}>Top sales</H22>
                <div css={styles.barChart}>
                  <BarChart theLabels={user.topSales.map(item=>item.label)} theData={user.topSales.map(item=>item.amount)} Color={['#37d493','#9efdd6','#9efdd6']} />
                </div>
              </div>
              <div css={styles.smallWhiteDiv} style={{height:'fit-content',padding:'0px'}}> {/*Ads Records*/}
                  <H22 css={styles.smallTitle} style={{paddingTop:'1vh',paddingLeft:'3vh',paddingBottom:'0px'}}>Ads Records</H22>
                  <div style={{display:'flex',margin:'2vh'}}>
                    <H11 css={styles.bigTitle}>17</H11>
                    <img src={tropphyBadge} style={{height:'5vh',marginTop:'0.5vh'}}/>
                  </div>
                  <div css={styles.barChart}>
                  <BarChart theLabels={user.topSales.map(item=>item.label)} theData={user.topSales.map(item=>item.amount)} Color={['#ffaa2a','#ffe0b2','#ffe0b2']} />
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
                <div css={styles.smallWhiteDiv} style={{margin:'0px',marginTop:'2vh',backgroundColor:'#ffeeee',borderTop:'3px solid #FF6A55',padding:'0px'}}>
                  <div style={{display:'flex',justifyContent:'space-around',height:'8vh'}}>
                  <H11 css={styles.smallTitle} style={{color:'#ff6a55',padding:'0px',margin:'0px'}}>
                    {user.disputedAmt}
                    </H11> <span css={styles.smallIcon} style={{color:'#ff6a55',backgroundColor:'white'}}><ShowChartIcon/></span>
                  </div>
                  <p style={{paddingLeft:'2vh',margin:'0px',fontSize:'1.7vh',color:'#ff6a55'}}>Disputed amount</p>
                </div>
                <div css={styles.smallWhiteDiv} style={{margin:'10px',marginTop:'2vh',borderTop:'3px solid #ACA3FC80',padding:'0px'}}>
                  <div style={{display:'flex',justifyContent:'space-around',height:'8vh'}}>
                  <H11 css={styles.smallTitle} style={{color:'#5a48fb',padding:'0px',margin:'0px'}}>
                    {user.disputedAmt}
                    </H11> <span css={styles.smallIcon}><ShowChartIcon/></span>
                  </div>
                  <p style={{paddingLeft:'2vh',margin:'0px',fontSize:'1.7vh',color:'#5a48fb'}}>Disputed amount</p>
                </div>
              </div>
            </div>
            <div style={{backgroundColor:'#ffffff',width:'57.50vh',padding:'2vh',borderRadius:'10px'}}>
                <H22 css={styles.smallTitle}>FeedBack</H22>
                <FeedBack/>
            </div>
          </div>
  )
}



export const Overview=()=>{
  return (
    <div className='Overview'>
      <CssBaseline/>
      <div >
       <Grid container spacing={2}>
        <Grid item xs={3} > 
        <div style={{position:'sticky',top:"10px"}}>
          <UserInfo />
          <UserActions />
          </div>
        </Grid>
        <Grid item xs={9} style={{backgroundColor:'#eeeeee',padding:'10px'}}>
          <H22>Overview</H22>
            <OverviewRow1 />
            <OverviewRow2 />
            <OverviewRow3/>
            <TransactionsHistory />
        </Grid>
       </Grid>
      </div>
    </div>
  )
}

export default Overview

