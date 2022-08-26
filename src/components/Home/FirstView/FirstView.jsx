/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'
import {Grid,InputLabel,MenuItem,FormControl,Select,Button,TextField,Box} from '@mui/material'
import bitcoin from '../../../assets/bitcoin-yellow.svg'
import binance from '../../../assets/binance-yellow.svg'
import etherum from '../../../assets/crypto-etherum.svg'
import * as styles from './style'
import { Item } from '../GlobalStyles'
import React from 'react'


export const FirstView =()=>{
  const [formData,setFormData] = React.useState({
    action : "I'm Selling",
    item:'',
    amount:"",
    currency: ""
  })
const handleActionChange =(e)=>{
  setFormData(prev=>{return{...prev,action:e.target.value}})
}
  const handleFormSubmit =(e)=>{
    e.preventDefault()
    console.log(FormData)
  }
  return(
      <div className='firstView'>
          <Grid container >
          <Grid item md={12} lg={7}>     {/*Text on Left Grid*/}
                <div css={styles.shape1}>shape1</div>
                <div css={styles.shape2}>shape2</div>
                <div css={styles.shape3}>shape3</div>
              <div>
                <div css={styles.thegradientText}> <span css={styles.never}>Never</span> <span>buy or sell without using OnlineP2P</span></div>
              </div>
          </Grid>
          <Grid item lg={5} > {/*Form on Right Grid*/}
            <form css={styles.formDiv} onSubmit={handleFormSubmit}>
                    {/* <div>   DONT FORGET TO DO THESE ANINATION...SOURCE:ESCROW.COM
                      <img src={bitcoin} alt='bitcoinimage' css={styles.bitcoinImage} />
                    </div>
                    <div>
                      <img src={binance} alt='binanceimage' css={styles.binanceImage} />
                    </div>
                    <div>
                      <img src={etherum} alt='binanceimage' css={styles.etherumImage} />
                    </div> */}
                <Item elevation={1} css={styles.formCss} >
                      <Grid container spacing={1} > {/*Separates 'Im selling input from domain, nane input'*/}
                        <Grid item lg={5}>
                        <FormControl css={styles.formControl1}> {/*Input: 'Im Selling?*/}
                        <Select value={formData.action} onChange={handleActionChange} >
                                  <MenuItem value="I'm Buying">I'm Buying</MenuItem>
                                  <MenuItem value="I'm Boochering">I'm Boochering</MenuItem>
                                  <MenuItem value="I'm Selling">I'm Selling</MenuItem>
                              </Select>    
                          </FormControl>
                        </Grid>
                        <Grid item lg={7} xs={12} >
                        <FormControl variant="standard" css={styles.formControl1}> {/*Input: 'Domain, name, etc?'*/}
                              <TextField id="outlined-basic" label="Domian name,vehicles..." variant="outlined" />
                          </FormControl>
                      </Grid>
                    </Grid>
                    <Grid container spacing={1}>
                      <Grid item lg={8} xs={6}>
                        <FormControl  css={styles.formControl1}> {/*Input: 'Domain, name, etc?'*/}
                          <TextField id="outlined-basic" label="For $" variant="outlined" />
                        </FormControl>
                      </Grid>
                        <Grid item lg={4} xs={6}>
                          <FormControl css={styles.formControl1}> {/*Input: 'Im Selling?*/}
                            <InputLabel style={{color:'#04063D'}}>USD</InputLabel>
                              <Select label='USD'>
                                <MenuItem value=""><em>None</em></MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                              </Select>
                          </FormControl>
                        </Grid>
                    </Grid>
                      <Button variant='contained' fullWidth style={{marginTop:'3vh', backgroundColor:'#5A48FA',padding:'10px'}} type='submit'>SUBMIT</Button>
              </Item>
            </form>
          </Grid>
        </Grid>
        </div>
  )
}