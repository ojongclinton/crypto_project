/** @jsxImportSource @emotion/react */
import { Global,css } from '@emotion/react'
import React from 'react'
import * as styles from './style'
import imagePlaceHolder from '../../../assets/imagePlaceholder.jpg'
import { Grid } from '@mui/material'
import { LibraryAddOutlined } from '@mui/icons-material'


const SellProduct =()=>{
    return(
        <div css={styles.boxContainer}>
            <h1>Sell Product</h1>
        </div>
    )
}

const SellService =()=>{
    return(
        <div css={styles.boxContainer}>
            <h1 css={styles.testThis}>Sell Service</h1>
            <div css={styles.inputBoxContainer}>
                <Grid container spacing={2} > {/*Service main details*/}
                    <Grid item xl={6} md={6} sm ={12}>
                        <label htmlFor="Username">Username</label>
                        <input type="text" css={styles.Big50inputStyle} id='Username' required/>
                    </Grid>
                    <Grid item xl={6} md={6} sm ={12}>
                        <label htmlFor="UserID">User Id</label>
                        <input type="text" css={styles.Big50inputStyle} id='UserID' required/>
                    </Grid>
                    <Grid item xl={6} md={6} sm ={12}>
                        <label htmlFor="serviceId">Service ID</label>
                        <input type="text" css={styles.Big50inputStyle} id='serviceId' required/>
                    </Grid>
                    <Grid item xl={6} md={6} sm ={12}>
                        <label htmlFor="location">Location address</label>
                        <input type="text" css={styles.Big50inputStyle} id='location' required/>
                    </Grid>
                    <Grid item xl={6} md={6} sm ={12}>
                        <label htmlFor="PaymentId">Payment ID</label>
                        <input type="text" css={styles.Big50inputStyle} id='PaymentId' required/>
                    </Grid>
                    <Grid item xl={6} md={6} sm ={12}>
                        <label htmlFor="UserID">Payment Method</label>
                        <select name="payment-method" id="payment_method" css={styles.selectStyle}>
                            <option value="Mobile MOney">MTN</option>
                            <option value="Orange Money">Orange</option>
                            <option value="Paypal">Paypal</option>
                            <option value="Credit Card">Bank</option>
                        </select>
                    </Grid>
                </Grid>
                <p style={{color:"#5E6191"}}>Service Deatils</p>
                <Grid container spacing={0} css={styles.serviceDetailsBox} > {/*Service Details section*/}
                    <Grid item xl={4} md={4} sm={12} css={styles.uploadImageSection}> {/*Upload image section*/}
                    <p css={styles.blurryP}>Upload Image</p>
                        <img src={imagePlaceHolder} alt="upload_image" css={styles.img_upload}/>
                    </Grid>
                    <Grid item xl={8} md={8} sm={12} > {/*Description section*/}
                    <Grid container spacing={2}>
                        <Grid item xl={6} md={6} sm={12}>
                            <label htmlFor="ServiceName">Service Name</label>
                            <input type="text" css={styles.small50inputStyle} id='ServiceName'/>
                        </Grid>
                        <Grid item xl={6} md={6} sm={12}>
                        <label htmlFor="ServiceType">Type</label>
                            <input type="text" css={styles.small50inputStyle} id='ServiceType'/>
                        </Grid>
                        <Grid item xl={12} md={12} sm={12}>
                            <label htmlFor="refNum">Reference number</label>
                            <input type="text" css={styles.small50inputStyle}/>
                        </Grid>
                        <Grid item xs={12}>
                            <label htmlFor="descript">Description</label>
                            <textarea name="description" id="descript" rows={6} css={styles.textArea}></textarea>
                        </Grid>
                        <Grid item xl={6} md={6} sm={12}>
                            <label htmlFor="location">Location</label>
                            <input type="text" css={styles.small50inputStyle} id='location'/>
                        </Grid>
                        <Grid item xl={6} md={6} sm={12}>
                        <label htmlFor="status">Status</label>
                            <input type="text" css={styles.small50inputStyle} id='status'/>
                        </Grid>
                        <Grid item xl={9} md={9} sm={9}>
                            <label htmlFor="cost">cost</label>
                            <input type="number" css={styles.small50inputStyle} id='cost'/>
                        </Grid>
                        <Grid item xl={3} md={3} sm={3}>
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
                <div css={styles.addMilstone}> {/*Add milestone block*/}
                <div>
                    <label htmlFor="MileName">Milestone name</label>
                    <input type="text" id='MileName' css={styles.Big50inputStyle}/>
                </div>
                <div>
                    <label htmlFor="MileDesc">Milestone name</label>
                    <textarea name="MileDesc" id="MileDesc" rows={6} css={styles.textArea}></textarea>
                </div>
                <div>
                <label htmlFor="MileObj">Objectives of the milestone</label>
                    <input type="text" id='MileObj' css={styles.Big50inputStyle}/>
                </div>
                <Grid container spacing={2}>
                    <Grid item xl={3} md={4} sm={12}>
                        <p css={styles.blurryP}>Duration</p>
                        <input type="number" css={styles.Big50inputStyle}/>
                    </Grid>
                    <Grid item xl={3} md={4} sm={12}>
                        <p css={styles.blurryP}><i>:</i></p>
                    <select css={styles.selectStyle}>
                            <option value="days">Days</option>
                            <option value="Months">Months</option>
                            <option value="Years">Years</option>
                            <option value="Unspecified">Unspecified</option>
                        </select>
                    </Grid>
                    <Grid item xl={4} md={4} sm={12}>
                    <p css={styles.blurryP}>Cost of the Milestone</p>
                    <input type="number" css={styles.Big50inputStyle}/>
                    </Grid>
                    <Grid item xl={2} md={4} sm={12}>
                    <p css={styles.blurryP}><i>:</i></p>
                    <select css={styles.selectStyle}>
                    <option value="USD">USD</option>
                                <option value="AUD">AUD</option>
                                <option value="FRS">FRS</option>
                                <option value="PUD">PUD</option>
                        </select>
                    </Grid>
                    <div style={{marginLeft:'auto',display:"flex",marginTop:'5vh'}}>
                    <p css={styles.blurryP}>Add Milestone</p> <span><LibraryAddOutlined style={{color:'#64748B'}} /></span>
                    </div>
                    {/* */}
                </Grid>
                </div> 
            </div>
        </div>
    )
}

export const SellContract =({contract_type})=>{
    return(
        <div style={{margin:'10px'}}>
           {contract_type=='service'?<SellService/>:<SellProduct/>}
        </div>
    )
}
