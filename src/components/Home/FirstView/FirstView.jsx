/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'
import {Grid,InputLabel,MenuItem,FormControl,Select,Button,TextField,Box} from '@mui/material'
import { useMediaQuery } from 'react-responsive'
import bitcoin from '../../../assets/bitcoin-yellow.svg'
import * as styles from './style'
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

    {/*Text on Left Grid*/}

    <Grid item md={12} lg={6} >
      <div css={styles.shape1}>shape1</div>
      <div css={styles.shape2}>shape2</div>
      <div css={styles.shape3}>shape3</div>
      <div >
      <div css={styles.thegradientText}> <span css={styles.never}>Never</span> <span>buy or sell without using OnlineP2P</span></div>
      </div>
    </Grid>

    {/*Form on Right Grid*/}

    <Grid item lg={6} md={12}>
      <form css={styles.formDiv} onSubmit={handleFormSubmit}>
        {/* <div>   
          <img src={bitcoin} alt='bitcoinimage' className='coinImgAnimT' css={styles.bitcoinImage} id='coinImg' onAnim ationEnd={console.log('ended')}/>
        </div>          */}
        <Item elevation={1} css={styles.formCss} >

          {/*Separates 'Im selling input from domain, nane input'*/}

          <Grid container spacing={1} > 
            <Grid item lg={5} xs={12}>

              {/*Input: 'Im Selling?*/}

              <FormControl css={styles.formControl1}> 
                <Select value={formData.action} onChange={handleActionChange} css={styles.selectFont}>
                  <MenuItem value="I'm Buying">I'm Buying</MenuItem>
                  <MenuItem value="I'm Boochering">I'm Boochering</MenuItem>
                  <MenuItem value="I'm Selling">I'm Selling</MenuItem>
                  </Select>    
              </FormControl>
            </Grid>
            <Grid item lg={7} xs={12} >

              {/*Input: 'Domain, name, etc?'*/}

              <FormControl variant="standard" css={styles.formControl1} id='ss'> 
                <TextField fullWidth 
                label="Domian name,vehicles..." 
                variant="outlined"
                css={styles.inptField} 
                value={formData.item} 
                onChange={(e)=>setFormData(prev=>{return{...prev,item:e.target.value}})} />
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item lg={8} xs={12}>

              {/*Input: 'Domain, name, etc?'*/}

              <FormControl  css={styles.formControl1}> 
                <TextField label="For $" 
                variant="outlined" 
                type='number'  
                onChange={handleamountChange} 
                css={styles.inptField}/>
              </FormControl>
            </Grid>
            <Grid item lg={4} xs={12}>

            {/*Input: 'Im Selling?*/}

            <FormControl css={styles.formControl1}> 
              <InputLabel css={styles.inptField}>Currency</InputLabel>
                <Select autoFocus={false} 
                label='Currency' 
                value={formData.currency} 
                onChange={handleCurrencyChange} 
                css={styles.selectFont}>
                  <MenuItem value='USD'>USD</MenuItem>
                  <MenuItem value='AUD'>AUD</MenuItem>
                  <MenuItem value='FRS'>FRS</MenuItem>
              </Select>
            </FormControl>
            </Grid>
          </Grid>
          <Button variant='contained' fullWidth css={styles.sbBtn} type='submit'>Create Contract</Button>
        </Item>
      </form>
    </Grid>
  </Grid>
</div>
)
}