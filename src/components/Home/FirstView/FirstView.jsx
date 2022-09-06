/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'
import {Grid,InputLabel,MenuItem,FormControl,Select,Button,TextField,Box} from '@mui/material'
import { useMediaQuery } from 'react-responsive'
import bitcoin from '../../../assets/bitcoin-yellow.svg'
import binance from '../../../assets/binance-yellow.svg'
import etherum from '../../../assets/crypto-etherum.svg'
import * as styles from './style'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Item } from '../GlobalStyles'
import React from 'react' 


export const FirstView =()=>{
  const isMobile = useMediaQuery({query:`(max-width:576px)`})
  const [formData,setFormData] = React.useState({
    action : "I'm Selling",
    item:"",
    amount:'',
    currency: "USD"
  })
const handleActionChange =(e)=>{
  setFormData(prev=>{return{...prev,action:e.target.value}})
}
const handleCurrencyChange =(e)=>{
  setFormData(prev=>{return{...prev,currency:e.target.value}})
}
  const handleFormSubmit =(e)=>{
    e.preventDefault()
    console.log(formData)
  }
  const handleamountChange = (e)=>{
    setFormData(prev=>{return{...prev,amount:e.target.value}})
  }
return(
  <div className='firstView'>
          <Grid container >
          <Grid item md={12} lg={6} >     {/*Text on Left Grid*/}
                <div css={styles.shape1}>shape1</div>
                <div css={styles.shape2}>shape2</div>
                <div css={styles.shape3}>shape3</div>
              <div >
                <div css={styles.thegradientText}> <span css={styles.never}>Never</span> <span>buy or sell without using OnlineP2P</span></div>
              </div>
          </Grid>
          <Grid item lg={6} > {/*Form on Right Grid*/}
            <form css={styles.formDiv} onSubmit={handleFormSubmit}>
                    <div>   
                      <img src={bitcoin} alt='bitcoinimage' css={styles.bitcoinImage} />
                    </div>
                    <div>
                      <img src={binance} alt='binanceimage' css={styles.binanceImage} />
                    </div>
                    <div>
                      <img src={etherum} alt='binanceimage' css={styles.etherumImage} />
                    </div>
                    
                <Item elevation={1} css={styles.formCss} >
                      <Grid container spacing={1} > {/*Separates 'Im selling input from domain, nane input'*/}
                        <Grid item lg={5} xs={12}>
                        <FormControl css={styles.formControl1}> {/*Input: 'Im Selling?*/}
                        <Select value={formData.action} onChange={handleActionChange} css={styles.selectFont}>
                                  <MenuItem value="I'm Buying">I'm Buying</MenuItem>
                                  <MenuItem value="I'm Boochering">I'm Boochering</MenuItem>
                                  <MenuItem value="I'm Selling">I'm Selling</MenuItem>
                              </Select>    
                          </FormControl>
                        </Grid>
                        <Grid item lg={7} xs={12} >
                        <FormControl variant="standard" css={styles.formControl1} id='ss'> {/*Input: 'Domain, name, etc?'*/}
                              <TextField  label="Domian name,vehicles..." variant="outlined" value={formData.item} onChange={(e)=>setFormData(prev=>{return{...prev,item:e.target.value}})} />
                          </FormControl>
                      </Grid>
                    </Grid>
                    <Grid container spacing={1}>
                      <Grid item lg={8} xs={12}>
                        <FormControl  css={styles.formControl1}> {/*Input: 'Domain, name, etc?'*/}
                          <TextField label="For $" variant="outlined" type='number'  onChange={handleamountChange} style={{color:'red'}}/>
                        </FormControl>
                      </Grid>
                        <Grid item lg={4} xs={12}>
                          <FormControl css={styles.formControl1}> {/*Input: 'Im Selling?*/}
                            <InputLabel style={{color:'#04063D'}}>Currency</InputLabel>
                              <Select autoFocus={false} label='Currency' value={formData.currency} onChange={handleCurrencyChange} css={styles.selectFont}>
                                <MenuItem value='USD'>USD</MenuItem>
                                <MenuItem value='AUD'>AUD</MenuItem>
                                <MenuItem value='FRS'>FRS</MenuItem>
                              </Select>
                          </FormControl>
                        </Grid>
                    </Grid>
                      <Button variant='contained' fullWidth css={styles.sbBtn} type='submit'>SUBMIT</Button>
              </Item>
            </form>
          </Grid>
        </Grid>
        </div>
)
}