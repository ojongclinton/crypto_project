/** @jsxImportSource @emotion/react */
import * as styles from './style'
import ShowChartIcon from '@mui/icons-material/ShowChart';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import RefreshIcon from '@mui/icons-material/Refresh';
import ClearIcon from '@mui/icons-material/Clear';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import millify from 'millify';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

{/*Algorithm below calculates the change in balance,total deposit and total payout...meant to compare results of last week and current week and return a sting as to if user has made a percentage loss or a gain*/}
const trendCalc = (data_before,data_after) =>{
    const amt = data_after - data_before
    if(amt >0){
      let calc = ((amt/data_before) * 100).toFixed(2);
      return (<p css={styles.dataChip}> <ArrowUpwardIcon  style={{color:'#37D694'}}/> <span css={styles.spanText}>{calc}% this week </span></p>)
    }
    else if(amt < 0){
      let calc = (((Math.abs(amt))/data_before) * 100).toFixed(2);
      return (<p css={styles.dataChip}> <ArrowDownwardIcon style={{color:'#FF6A55'}}/><span css={styles.spanText}>{calc}% this week </span></p>)
    }
    else if(amt == 0){
      return (<p css={styles.dataChip}><span css={styles.spanText}>No change this week</span></p>)
    }
  }


export const user ={
    name:"Brice Fongang", title:'FINANCIAL EXPERT', followers:200, following:432,escrowSaved:2,imagePath:'#####',rating:3,ThisWeekBalance:120000,LastWeekbalance:100000,ThisWeekPayout:512,LastWeekPayout:782,ThisWeekDeposit:64000,LastWeekDeposit:31000,completedEscrows:78,pendindEscrows:214,rejectedEscrows:93,onHoldPayments:12,releasedEscrows:12,totalSales:177000,contracts:[
      {label:'Jan',amount:'100000'},
      {label:'Feb',amount:'200000'},
      {label:'Mar',amount:'300000'},
      {label:'Apr',amount:'400000'},
      {label:'May',amount:'400000'},
    ],
    topSales:[
          {label:'Week 22',amount:75000},
          {label:'Week 23',amount:37000},
          {label:'Week 24',amount:56000},
    ],
    disputedAmt:100200,
    resolvedPay:95500
  }
  export const ovRow1Data =[
    {
      icon:<ShowChartIcon/>,
      name:"Balance",
      amount:user.ThisWeekBalance,
      trend:trendCalc(user.LastWeekbalance, user.ThisWeekBalance),
      labels : ['January', 'February','march','April'],
      data:[22,8,17,3],
      lineColor:'#37D694'
    },
    {
      icon:<ArrowDownwardIcon/>,
      name:"Total Deposit",
      amount:user.ThisWeekDeposit,
      trend:trendCalc(user.LastWeekDeposit, user.ThisWeekDeposit),
      labels : ['January', 'February','march','April'],
      data:[30,6,18,22],
      lineColor:'#8E59FF'
    },
    {
      icon:<ArrowUpwardIcon/>,
      name:"Total pay-out",
      amount:user.ThisWeekPayout,
      trend:trendCalc(user.LastWeekPayout, user.ThisWeekPayout),
      labels : ['January', 'February','march','April'],
      data:[21,40,16,5],
      lineColor:'#FF7777'
    }
  ]
  export const ovRow2Data =[
    {
      name:'Completed escrows',
      amount:user.completedEscrows,
      icon:<CheckBoxOutlinedIcon style={{fontSize:'3vh'}}/>,
      bColor:'3px solid #43DC80'    
    },
    {
      name:'Pending escrows',
      amount:user.pendindEscrows,
      icon:<RefreshIcon style={{fontSize:'3vh'}}/>,
      bColor:'3px solid #FFB930'     
    },
    {
      name:'Rejected escrows',
      amount:user.rejectedEscrows,
      icon:<ClearIcon style={{fontSize:'3vh'}}/>,
      bColor:'3px solid #FF3030'     
    },
    {
      name:'Payment on hold',
      amount:user.onHoldPayments,
      icon:<AllInclusiveIcon style={{fontSize:'3vh'}}/>,
      bColor:'3px solid #4EE9FE'     
    },
    {
      name:'Released escrows',
      amount:user.releasedEscrows,
      icon:<ShowChartIcon style={{fontSize:'3vh'}}/>,
      bColor:'3px solid #ACA3FC80'     
    },
    {
      name:'Post items',  
      amount:12,
      icon: <CloudUploadIcon style={{fontSize:'3vh'}}/>,
      bColor:'3px solid #ACA3FC80'
    }
  ]

export const feedBack =[
  {name:'Ethel',username:'@ethel',title:'Ferrari Fort',comment:'Great work 😍😍',fedTime:'1h'},
  {name:'Alex',username:'@Alex_Designs',title:'FordJT 96',comment:'Nees you for some work dude... contact me on 623578926',fedTime:'1h'},
  {name:'Ernest',username:'@EnestoTech',title:'Avensis-cyamon',comment:'hello,i saw one of your work you did for my friend....could you help a brother out? thanks in advance',fedTime:'1h'},
  {name:'Tackang',username:'@brandon',title:'Binance',comment:'WOW...this designs are incredible mate...shapo!!',fedTime:'1h'},
]

export const transactions=[
  {name:'Ethel',username:'@ethel',amount:'$384',item:'Domain name',email:'chelsie@ui8.net'},
  {name:'Alex',username:'@Alex_Designs',amount:'$376',item:'100" screen',email:'fahey.designer@robot.co'},
  {name:'Ernest',username:'@EnestoTech',amount:'$645',item:'Playstation 5',email:'orion88@yahoo.com'},
  {name:'Tackang',username:'@brandon',amount:'$229',item:'Ferrari ford JT',email:'brown.be@gmail.com'},
  {name:'Ojong',username:'@ojong',amount:'$929',item:'fufu and egousi',email:'heyEnoh123@gmail.com'},
]