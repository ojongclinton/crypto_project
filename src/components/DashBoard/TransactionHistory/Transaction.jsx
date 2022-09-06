/** @jsxImportSource @emotion/react */
import { css,keyframes,Global } from '@emotion/react'
import { Avatar,Grid,Button,Chip, FormControlLabel, Switch } from '@mui/material'
import { transactions } from '../Overview/StaticData';
import { smallTitle } from '../Overview/style';
import bitcoin from '../../../assets/bitcoin-yellow.svg'
import * as styles from './styles'
import React from 'react';


const TransactionsHistory =()=>{
    const transactionLength = transactions.length
    const [show, setShow] = React.useState(3);
    const handleShowMore = ()=>{
        setShow(prev=>prev+1)
        console.log(transactionLength, show)
    }
    return(
        <div css={styles.transacContainer}>
            <h1 css={smallTitle} style={{fontWeight:600,paddingLeft:'7vh'}}>Transaction history</h1>
            <div style={{width:'fit-content'}}>

            
            <table css={styles.tableStyle}>
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
                            <tr >
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
}

export default TransactionsHistory;