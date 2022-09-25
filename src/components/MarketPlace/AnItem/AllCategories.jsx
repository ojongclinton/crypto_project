/** @jsxImportSource @emotion/react */
import * as styles from './style'
import { Grid } from '@mui/material'
import React from 'react'
import { allCategories } from '../MarketPlace'
import { CateItem } from './Item'

const AllCategories =()=>{
    return(
        <div css={styles.allCateContainer} >
            <Grid container>
            {allCategories.map(cate=>{
                return(
                    <Grid item xl={6}>
                        <div>
                            <CateItem cate={cate}/>
                        </div>
                    </Grid>
                )
            })}
            </Grid>
            
        </div>
    )
}

export default AllCategories