/** @jsxImportSource @emotion/react */
import { Avatar,Button } from '@mui/material'
import { transactions } from '../Overview/StaticData';
import { smallTitle } from '../Overview/style';
import bitcoin from '../../../assets/bitcoin-yellow.svg'
import * as styles from './styles'
import React from 'react';
import { useMediaQuery } from 'react-responsive'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const TransactionsHistory =()=>{
const isMobile = useMediaQuery({query:`(max-width:576px)`})
const transactionLength = transactions.length
const [show, setShow] = React.useState(3);
const handleShowMore = ()=>{
setShow(prev=>prev+1)
}

return (

isMobile?(
    <div css={styles.transacContainer}>
        <h1 css={smallTitle} >Transaction history</h1>
        <div style={{padding:'5px'}}>
            {transactions.slice(0,show).map((trans,index)=>{
                return(
                    <div style={{display:'flex',justifyContent:'space-between',marginTop:'2vh'}} key={index}>
                        {/*Picture Div*/}
                        <div style={{backgroundColor:'green',height:'95px',width:'95px',borderRadius:'10px'}}> 
                        </div>

                        {/*Info Div*/}
                        <div style={{width:'67%'}}>
                            {/*name n 3dots Div*/}
                            <div style={{display:'flex',justifyContent:'space-between',height:'60%',marginRight:'3vh'}}>
                                <p css={styles.telBigText}>{trans.name}</p>
                                <MoreHorizIcon style={{color:'#6F767E',marginTop:'1vh'}}/>
                            </div>

                            {/*Price n item name Div*/}
                            <div style={{display:'flex',justifyContent:'space-between',width:'80%'}}>
                                <p css={styles.telPrice}>{trans.amount}</p>
                                <p css={styles.itemName}>{trans.item}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
            <div style={{display:'flex',justifyContent:'space-around',width:'100%',margin:'2vh'}}>
            <Button disabled={show==transactionLength} css={styles.btnStyle} onClick={handleShowMore}>Load more</Button>
            </div>
            
        </div>
    </div>
):(
    <div css={styles.transacContainer}>
    <h1 css={smallTitle} style={{fontWeight:600,paddingLeft:'7vh'}}>Transaction history</h1>
    <div style={{width:'fit-content'}}>
        <table >
            <thead style={{color:'#6F767E',borderBottom:'1px solid #EFEFEF'}} >
                <th css={styles.theadStyle}>Name</th>
                <th css={styles.theadStyle}>Email</th>
                <th css={styles.theadStyle}>Amount</th>
                <th css={styles.theadStyle}>Items</th>
            </thead>
            <tbody>
                {transactions.slice(0,show).map((item,index)=>{
                return(
                <React.Fragment key={index}>
                    <tr>
                        <td style={{display:'flex',justifyContent:'left'}}>
                            <Avatar src={bitcoin}/>
                            <div>
                                <p css={styles.bigText}>{item.name}</p>
                                <p css={styles.smallText}>{item.username}</p>
                            </div>
                        </td>
                        <td style={{color:'#6F767E',verticalAlign:'top'}}>
                            {item.email}
                        </td>
                        <td style={{verticalAlign:'top'}} className='btn'>
                            <p className='lala' css={styles.tdPStyles} >{item.amount}
                            </p>
                        </td>
                        <td style={{verticalAlign:'top',fontSize:'15px',fontWeight:600}}>
                        {item.item}
                        </td>
                    </tr> 
                </React.Fragment>

                )
                })}
            </tbody>
        </table>
        <div style={{display:'flex',justifyContent:'space-around', width:'100%'}}>
            <Button disabled={show==transactionLength} css={styles.btnStyle} onClick={handleShowMore}>See more</Button>
        </div>
    </div>
</div>
)
)
}

export default TransactionsHistory;