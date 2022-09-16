/** @jsxImportSource @emotion/react */
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react'
import * as styles from './style'
import Typography from '@mui/material/Typography'
import { Button } from '@mui/material';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';



const Category = ({setCategory,categories,choosed}) => {
  return (
    <div css={styles.categoryContainer}>
        <div css={styles.categoriesDiv}>
            {categories.map((category,index)=>{
                return(
                    <div key={index} onClick={()=>setCategory(category[0])} css={styles.aCategory} style={choosed===category[0]?{backgroundColor:'#623CEA'}:{}}>
                        <img src={category[1]} />
                        <p css={styles.nameStyle} style={choosed==category[0]?{color:'white'}:{}}>{category[0]}</p>
                    </div>
                )
            })}
        </div>
        <div style={{display:'flex',justifyContent:'center'}}>
            <Button variant='contained' css={styles.btnStyle}><DashboardCustomizeIcon style={{marginRight:'1vh'}}/> Create New escrow</Button>
        </div>
    </div>
  )
}

export default Category