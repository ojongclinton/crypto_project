/** @jsxImportSource @emotion/react */
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react'
import * as styles from './style'
import Typography from '@mui/material/Typography'
import { Button } from '@mui/material';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import { useNavigate } from 'react-router-dom';


const Category = ({setCategory,categories,choosed}) => {
const navigate = useNavigate()
const handleCate =(category)=>{
    navigate(`/Marketplace/categories/${category}`)
    setCategory(category)
}
  return (
    <div css={styles.categoryContainer}>
        <div css={styles.categoriesDiv} >
        {/* <p css={styles.nameStyle} onClick={()=>{navigate('/Marketplace/categories')}}>All Categories</p> */}
            {categories.map((category,index)=>{
                return(
                    <div key={index} onClick={()=>handleCate(category)} css={styles.aCategory} style={choosed===category?{backgroundColor:'#623CEA'}:{}}>
                        <p css={styles.nameStyle} style={choosed==category?{color:'white'}:{}}>{category}</p>
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
