/** @jsxImportSource @emotion/react */
import * as styles from './style'
import { Grid } from '@mui/material'
import React from 'react'
import { allCategories, items } from '../MarketPlace'
import { CateItem } from './Item'
import { H22 } from '../../Home/GlobalStyles'

const AllCategories =()=>{
    return(
        <div css={styles.allCateContainer} >
            <H22>All Categories</H22>
            <Grid container spacing={3}>
            {allCategories.map(cate=>{
                return(
                    <Grid item xl={6}>
                            <CateItem cate={cate}/>
                    </Grid>
                )
            })}
            </Grid>
            
        </div>
    )
}

export default AllCategories