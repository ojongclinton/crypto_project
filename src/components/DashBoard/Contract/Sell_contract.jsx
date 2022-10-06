/** @jsxImportSource @emotion/react */
import { Global,css } from '@emotion/react'
import React from 'react'
import * as styles from './style'
import imagePlaceHolder from '../../../assets/imagePlaceholder.jpg'
import { Button, Grid } from '@mui/material'
import { LibraryAddOutlined } from '@mui/icons-material'

const SellProduct =()=>{
    return(
        <div css={styles.boxContainer}>
            <div css={styles.inputBoxContainer}>
            <Grid container spacing={2} > {/*Service main details*/}
                    <Grid item xl={6} md={6} xs ={12}>
                        <label htmlFor="Username">Username</label>
                        <input type="text" css={styles.Big50inputStyle} id='Username' required/>
                    </Grid>
                    <Grid item xl={6} md={6} xs ={12}>
                        <label htmlFor="UserID">User Id</label>
                        <input type="text" css={styles.Big50inputStyle} id='UserID' required/>
                    </Grid>
                    <Grid item xl={6} md={6} xs ={12}>
                        <label htmlFor="serviceId">Service ID</label>
                        <input type="text" css={styles.Big50inputStyle} id='serviceId' required/>
                    </Grid>
                    <Grid item xl={6} md={6} xs ={12}>
                        <label htmlFor="location">Location address</label>
                        <input type="text" css={styles.Big50inputStyle} id='location' required/>
                    </Grid>
                    <Grid item xl={6} md={6} xs ={12}>
                        <label htmlFor="PaymentId">Payment ID</label>
                        <input type="text" css={styles.Big50inputStyle} id='PaymentId' required/>
                    </Grid>
                    <Grid item xl={6} md={6} xs ={12}>
                        <label htmlFor="UserID">Payment Method</label>
                        <select name="payment-method" id="payment_method" css={styles.selectStyle}>
                            <option value="Mobile Money">MTN</option>
                            <option value="Orange Money">Orange</option>
                            <option value="Paypal">Paypal</option>
                            <option value="Credit Card">Bank</option>
                        </select>
                    </Grid>
                </Grid>
                <p style={{color:"#5E6191"}}>Product Deatils</p>
                <Grid container spacing={1} css={styles.serviceDetailsBox} > {/*Service Details section*/}
                    <Grid item xl={4} md={4} xs={12} css={styles.uploadImageSection} sx={{display:{xs:'block',md:'none',lg:'block'}}}> {/*Upload image section*/}
                    <p css={styles.blurryP}>Upload Image</p>
                        <img src={imagePlaceHolder} alt="upload_image" css={styles.img_upload}/>
                    </Grid>
                    <Grid item xl={8} md={8} xs={12} > {/*Description section*/}
                    <Grid container spacing={2}>
                        <Grid item xl={6} md={6} xs={12}>
                            <label htmlFor="ServiceName">Service Name</label>
                            <input type="text" css={styles.small50inputStyle} id='ServiceName'/>
                        </Grid>
                        <Grid item xl={6} md={6} xs={12}>
                        <label htmlFor="ServiceType">Type</label>
                            <input type="text" css={styles.small50inputStyle} id='ServiceType'/>
                        </Grid>
                        <Grid item xl={12} md={12} xs={12}>
                            <label htmlFor="refNum">Reference number</label>
                            <input type="text" css={styles.small50inputStyle}/>
                        </Grid>
                        <Grid item xs={12}>
                            <label htmlFor="descript">Description</label>
                            <textarea name="description" id="descript" rows={6} css={styles.textArea}></textarea>
                        </Grid>
                        <Grid item xl={6} md={6} xs={12}>
                            <label htmlFor="location">Location</label>
                            <input type="text" css={styles.small50inputStyle} id='location'/>
                        </Grid>
                        <Grid item xl={6} md={6} xs={12}>
                        <label htmlFor="status">Status</label>
                            <input type="text" css={styles.small50inputStyle} id='status'/>
                        </Grid>
                        <Grid item xl={9} md={9} xs={9}>
                            <label htmlFor="cost">cost</label>
                            <input type="number" css={styles.small50inputStyle} id='cost'/>
                        </Grid>
                        <Grid item xl={3} md={3} xs={3}>
                        <label htmlFor="currency">currency</label>
                            <select type="text" css={styles.small50inputStyle} id='currency'>
                                <option value="USD">USD</option>
                                <option value="AUD">AUD</option>
                                <option value="FRS">FRS</option>
                                <option value="PUD">PUD</option>
                            </select>
                        </Grid>
                    </Grid> 
                    </Grid>
                </Grid>
                </div>
        </div>
    )
}

const Allmilestones =[];
const SellService =()=>{
    const [milestones,setMileStone] = React.useState(0);
    const handleAddMilseStone =()=>{
        Allmilestones.push('milestone')
        setMileStone(Allmilestones.length)
    }
    return(
        <div css={styles.boxContainer}>
            
            <div css={styles.inputBoxContainer}>
                <Grid container spacing={2} > {/*Service main details*/}
                    <Grid item xl={6} md={6} xs ={12}>
                        <label htmlFor="Username">Username</label>
                        <input type="text" css={styles.Big50inputStyle} id='Username' required/>
                    </Grid>
                    <Grid item xl={6} md={6} xs ={12}>
                        <label htmlFor="UserID">User Id</label>
                        <input type="text" css={styles.Big50inputStyle} id='UserID' required/>
                    </Grid>
                    <Grid item xl={6} md={6} xs ={12}>
                        <label htmlFor="serviceId">Service ID</label>
                        <input type="text" css={styles.Big50inputStyle} id='serviceId' required/>
                    </Grid>
                    <Grid item xl={6} md={6} xs ={12}>
                        <label htmlFor="location">Location address</label>
                        <input type="text" css={styles.Big50inputStyle} id='location' required/>
                    </Grid>
                    <Grid item xl={6} md={6} xs ={12}>
                        <label htmlFor="PaymentId">Payment ID</label>
                        <input type="text" css={styles.Big50inputStyle} id='PaymentId' required/>
                    </Grid>
                    <Grid item xl={6} md={6} xs ={12}>
                        <label htmlFor="UserID">Payment Method</label>
                        <select name="payment-method" id="payment_method" css={styles.selectStyle}>
                            <option value="Mobile Money">MTN</option>
                            <option value="Orange Money">Orange</option>
                            <option value="Paypal">Paypal</option>
                            <option value="Credit Card">Bank</option>
                        </select>
                    </Grid>
                </Grid>
                <p style={{color:"#5E6191"}}>Service Deatils</p>
                <Grid container spacing={1} css={styles.serviceDetailsBox} > {/*Service Details section*/}
                    <Grid item xl={4} md={4} xs={12} css={styles.uploadImageSection} sx={{display:{xs:'block',md:'none',lg:'block'}}}> {/*Upload image section*/}
                    <p css={styles.blurryP}>Upload Image</p>
                        <img src={imagePlaceHolder} alt="upload_image" css={styles.img_upload}/>
                    </Grid>
                    <Grid item xl={8} md={8} xs={12} > {/*Description section*/}
                    <Grid container spacing={2}>
                        <Grid item xl={6} md={6} xs={12}>
                            <label htmlFor="ServiceName">Service Name</label>
                            <input type="text" css={styles.small50inputStyle} id='ServiceName'/>
                        </Grid>
                        <Grid item xl={6} md={6} xs={12}>
                        <label htmlFor="ServiceType">Type</label>
                            <input type="text" css={styles.small50inputStyle} id='ServiceType'/>
                        </Grid>
                        <Grid item xl={12} md={12} xs={12}>
                            <label htmlFor="refNum">Reference number</label>
                            <input type="text" css={styles.small50inputStyle}/>
                        </Grid>
                        <Grid item xs={12}>
                            <label htmlFor="descript">Description</label>
                            <textarea name="description" id="descript" rows={6} css={styles.textArea}></textarea>
                        </Grid>
                        <Grid item xl={6} md={6} xs={12}>
                            <label htmlFor="location">Location</label>
                            <input type="text" css={styles.small50inputStyle} id='location'/>
                        </Grid>
                        <Grid item xl={6} md={6} xs={12}>
                        <label htmlFor="status">Status</label>
                            <input type="text" css={styles.small50inputStyle} id='status'/>
                        </Grid>
                        <Grid item xl={9} md={9} xs={9}>
                            <label htmlFor="cost">cost</label>
                            <input type="number" css={styles.small50inputStyle} id='cost'/>
                        </Grid>
                        <Grid item xl={3} md={3} xs={3}>
                        <label htmlFor="currency">currency</label>
                            <select type="text" css={styles.small50inputStyle} id='currency'>
                                <option value="USD">USD</option>
                                <option value="AUD">AUD</option>
                                <option value="FRS">FRS</option>
                                <option value="PUD">PUD</option>
                            </select>
                        </Grid>
                    </Grid> 
                    </Grid>
                </Grid>
                {
                    Allmilestones.slice(0,milestones).map((mile,index)=>{
                        return(
                            <MileStone key={index}/>
                        )
                    })
                }
                <div css={styles.addMilstoneBtn} onClick={handleAddMilseStone}>
                    <p css={styles.blurryP}>Add Milestone</p> <span><LibraryAddOutlined/></span>
                    </div>
            </div>
            
        </div>
    )
}

const MileStone =()=>{
    return(
        <div css={styles.addMilstone}> {/*Add milestone block*/}
                <div>
                    <label htmlFor="MileName">Milestone name</label>
                    <input type="text" id='MileName' css={styles.small50inputStyle}/>
                </div>
                <div>
                    <label htmlFor="MileDesc">Milestone Description</label>
                    <textarea name="MileDesc" id="MileDesc" rows={6} css={styles.textArea}></textarea>
                </div>
                <div>
                <label htmlFor="MileObj">Objectives of the milestone</label>
                    <input type="text" id='MileObj' css={styles.small50inputStyle}/>
                </div>
                <Grid container spacing={2}>
                    <Grid item xl={3} md={4} xs={8}>
                        <p css={styles.blurryP}>Duration</p>
                        <input type="number" css={styles.small50inputStyle}/>
                    </Grid>
                    <Grid item xl={3} md={4} xs={4}>
                        <p css={styles.blurryP}><i>:</i></p>
                    <select css={styles.selectStyle}>
                            <option value="days">Days</option>
                            <option value="Months">Months</option>
                            <option value="Years">Years</option>
                        </select>
                    </Grid>
                    <Grid item xl={4} md={4} xs={8}>
                    <p css={styles.blurryP}>Cost</p>
                    <input type="number" css={styles.small50inputStyle}/>
                    </Grid>
                    <Grid item xl={2} md={4} xs={4}>
                    <p css={styles.blurryP}><i>:</i></p>
                    <select css={styles.selectStyle}>
                    <option value="USD">USD</option>
                                <option value="AUD">AUD</option>
                                <option value="FRS">FRS</option>
                                <option value="PUD">PUD</option>
                        </select>
                    </Grid>
                    
                    {/* */}
                </Grid>
                </div> 
    )
}


export const SellContract =({contract_type})=>{
    const [type,setType]=React.useState(contract_type);
    const handleSwitch = ()=>{
        type=='service'?setType('product'):setType('service')
    } 
    return(
        <div css={styles.mainContainer}>
            <div style={{display:'flex',justifyContent:'space-between'}}>
                <h1 css={styles.testThis}>Sell {type}</h1>
                <Button onClick={handleSwitch}>Switch to {type==='service'?'product':'service'}</Button>
            </div>
           {type=='service'?<SellService/>:<SellProduct/>}
        </div>
    )
}
