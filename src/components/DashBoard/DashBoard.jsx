/** @jsxImportSource @emotion/react */
import { css,keyframes,Global } from '@emotion/react'
import React from 'react'
import Overview from './Overview/Overview'
import "../../DashBoardStyles.css"
import ScrollButton from '../Home/handleScroll'
import { Route,Routes } from 'react-router-dom'
import { CssBaseline, Grid } from '@mui/material'
import { useMediaQuery } from 'react-responsive'
import { UserData } from './UserActions/User'
import { SellContract } from './Contract/Sell_contract'

export const DashBoard=()=>{
  const isMobile = useMediaQuery({query:`(max-width:576px)`})
  return (
    <div>
        {/* 
        <Overview/> */}
          <CssBaseline/>
          <Grid container spacing={0} style={{backgroundColor:'#eeeeee'}}>
          <ScrollButton/>
          <Grid item xl={3} lg={3} md={3} style={{margin:'0px',padding:'0px'}}> 
            <div style={{position:'sticky',top:"0px",marginBottom:'10px'}}>
            {!isMobile && <UserData/>}
          </div>
        </Grid>
        <Grid item xl={9} lg={9} md={9} >
        <Routes>
          <Route path='/' element={<Overview/>}/>
          <Route path='/Create-contract' element={<SellContract contract_type='service'/>}/>
        </Routes>
        </Grid>
          </Grid>
    </div>
  )
}

