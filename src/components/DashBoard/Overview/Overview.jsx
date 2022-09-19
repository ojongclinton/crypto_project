/** @jsxImportSource @emotion/react */
import React from 'react'
import * as styles from './style'
import millify from 'millify';
import { Grid,CssBaseline } from '@mui/material'
import tropphyBadge from '../../../assets/trophyBadge.svg'
import ShowChartIcon from '@mui/icons-material/ShowChart';
import {H11,H22} from '../../Home/GlobalStyles';
import { LineChart,LineChart2 } from '../Charts/LineChart';
import { BarChart } from '../Charts/BarChart';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import { user,ovRow1Data,ovRow2Data} from './StaticData';
import TransactionsHistory from '../TransactionHistory/Transaction';
import { useMediaQuery } from 'react-responsive'
import { FeedBack } from '../FeedBack/Feedback';
import { LocationStats } from '../LocationStats/LocationStats';
import { UserActions,UserInfo } from '../UserActions/User';

{/*Lots of data transmission would be going on here....all user data from last week,the current week last month,and the current month are supposed to be compared so the various icons for increase and decrease are diaplayed accordingly...Static data would be used for now since a backend is not yet set up*/}



const OverviewRow1 =()=>{
  return(
    <div css={styles.overviewFirstRow} >
      {ovRow1Data.map(data=>{  {/*Mapping trough the first row of overview ie Balance,total Deposit,ets*/}
              return(
                <div css={styles.overviewRow1}>
                  <div>
                    <span css={styles.OviconStyle}>{data.icon}</span>
                    <div css={styles.nameDiv}>
                      <H22>{data.name}</H22>
                      <div css={styles.exclamContainer}>
                      <PriorityHighIcon css={styles.exclamIcon}/>
                      </div>
                    </div>
                      <H11 css={styles.Hcss}>{millify(data.amount)}</H11>
                        {data.trend}
                  </div>
                  <div css={styles.lineChartDiv}>
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
                    <H22 css={styles.ovAmtStyle}>{data.amount}</H22>
                    <p css={styles.ovNameStyle}>{data.name}</p>
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

const TopSales_Tickets=()=>{
const isMobile = useMediaQuery({query:`(max-width:576px)`})

  return(
    <div css={styles.topSales}> {/*Total sales1*/}
        <div css={styles.smallerWhiteDiv}>
          <H22 css={styles.smallerTitle}>Total sales</H22>
          <H11 css={styles.bigTitle}>{millify(user.totalSales)}</H11>
        </div>
        <div css={styles.smallerWhiteDiv}>
          <H22 css={styles.smallerTitle}>Support tickets</H22>
          <H11 css={styles.bigTitle}>24</H11>
        </div>
    </div>
  )
}

const TopSales_graph=()=>{
  return(
    <div css={styles.smallWhiteDiv} style={{marginTop:'0px'}}> 
      <H22 css={[styles.smallTitle,styles.cusSmallTitle]}>Top sales</H22>
      <div css={styles.barChart}>
        <BarChart theLabels={user.topSales.map(item=>item.label)} theData={user.topSales.map(item=>item.amount)} Color={['#37d493','#9efdd6','#9efdd6']} />
      </div>
    </div>
  )
}
const AdsRecordsGraph =()=>{
  const isMobile = useMediaQuery({query:`(max-width:576px)`}) 
  return(
    <div css={styles.smallWhiteDiv} style={isMobile?{marginTop:'4vh'}:{}}>
    <H22 css={[styles.smallTitle,styles.cusSmallTitle2]}>Ads Records</H22>
    <div style={{display:'flex',justifyContent:'left',paddingLeft:'10px',marginBottom:'1vh',marginTop:'1vh'}}>
      <H11 css={styles.bigTitle} style={isMobile?{fontSize:'82px',padding:'1vh 0px 0px 10px'}:{fontSize:'40px'}}>17</H11>
      <img src={tropphyBadge} css={styles.trophy}/>
    </div>
    <div css={styles.barChart}>
      <BarChart theLabels={user.topSales.map(item=>item.label)} theData={user.topSales.map(item=>item.amount)} Color={['#ffaa2a','#ffe0b2','#ffe0b2']} />
    </div>
  </div>
  )
}

const TotalContracts = ()=>{
  const isMobile = useMediaQuery({query:`(max-width:576px)`}) 

  return(
    <div css={styles.contractsGraph}>
      <H22 css={styles.smallTitle} style={isMobile?{}:{margin:'0.5vh 0px 0vh 5px'}}>Total contracts</H22>
      <div css={styles.graphContainer}>
        <LineChart2 lineColor='#37d694' theData={user.contracts.map(data=>data.amount)} theLabels={user.contracts.map(data=>data.label)} />    
      </div>
    </div>
  )
}

const Dispu_Resolved =()=>{
  const isMobile = useMediaQuery({query:`(max-width:576px)`})
  return(
  <div css={styles.resolvedBlock}>

    {/*Disputed Amounts*/}
 
      <div css={styles.smallWhiteDiv2} >
        <div>
          <div style={{display:'flex',flexDirection:'column',height:'100%',justifyContent:'space-around'}}>
          <H11 css={styles.smallTitle} style={{color:'#ff6a55',padding:'0px',margin:'0px',fontWeight:600}}>
          {user.disputedAmt}
          </H11> 
          <p style={{margin:'10px',fontSize:isMobile?'11px':'1.7vh',color:'#ff6a55'}}>Disputed amount</p>
          </div>
        </div>
        <span css={styles.smallIcon} style={{color:'#ff6a55',backgroundColor:'white'}}><ShowChartIcon/></span>
      </div>

      {/*Resolved Payments*/}

      <div css={styles.smallWhiteDiv3} >
        <div >
          <div style={{display:'flex',flexDirection:'column',height:'100%',justifyContent:'space-around'}}>
          <H11 css={styles.smallTitle} style={{color:'#5a48fb',padding:'0px',margin:'0px',fontWeight:600}}>
          {user.disputedAmt}
          </H11> 
          <p style={{margin:'0px',fontSize:isMobile?'11px':'1.7vh',color:'#5a48fb'}}>Disputed amount</p>
          </div>
        </div>
        <span css={styles.smallIcon}><ShowChartIcon/></span>
      </div>
    </div>
    )
}

const OverviewRow3 =()=>{
const isMobile = useMediaQuery({query:`(max-width:576px)`})
{/*Beacuse the component alignment of the mobile and desktop versions are not same....this arranges them to their asigned alignments*/}
  return(
    isMobile?(
      <div css={styles.overviewThirdRow}>
        <TotalContracts/>
        <Dispu_Resolved/>
        <TopSales_Tickets/>
        <TopSales_graph/>
        <AdsRecordsGraph/>
      </div>
    ):
    (
      <div css={styles.overviewThirdRow}>
  <div style={{width:'19%'}}>
      <TopSales_Tickets/>
      <TopSales_graph/>
      <AdsRecordsGraph/>
  </div>
  <Grid container style={{width:'80%',margin:'0px'}}>
  <Grid item xl={6} md={12} >
    <TotalContracts/>
    <Dispu_Resolved/>
  </Grid>
  <Grid item xl={6} md={12} css={styles.feedBackContainer}>
    <H22 css={styles.smallTitle} style={isMobile?{}:{margin:'.5vh 0px 1vh 5px'}}>FeedBack</H22>
    <FeedBack/>
  </Grid>
  </Grid>
  
</div>
    ) 

  )
}



export const Overview=()=>{
  const isMobile = useMediaQuery({query:`(max-width:576px)`})
  return (
    <div className='Overview'>
      <CssBaseline/>
       <Grid container spacing={0}>
        <Grid item xl={3} lg={3} md={3}> 
        <div style={{position:'sticky',top:"10px",marginBottom:'10px'}}>
         {!isMobile && [<UserInfo />, <UserActions />]}
          </div>
        </Grid>
        <Grid item xl={9} lg={9} md={9}>
          <H22 style={isMobile?{fontFamily:'Inter',marginTop:'8vh',fontSize:'20px',marginLeft:'14px'}:{}}>Overview</H22>
          <OverviewRow1 />
          <OverviewRow2 />
            <OverviewRow3/>
             <TransactionsHistory />
              {isMobile && <FeedBack/>}
             {isMobile && <LocationStats/>}
        </Grid>
       </Grid>
    </div>
  )
}

export default Overview

