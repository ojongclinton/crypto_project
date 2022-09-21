/** @jsxImportSource @emotion/react */
import { Grid } from '@mui/material'
import React from 'react'
import * as styles from './style'


const Products =({item})=>{
  return(
    <Grid item  xs={4}>
      <h3>yeahh</h3>
    </Grid>
  )
}

const EscrowFilter = ({category,setCategory,items}) => {
  let filteredList
  if(category){
   filteredList = items.filter((item)=>item.category==category)
  }
  return (
    <div>
      {filteredList?.length>0?(
        <Grid container>
        {filteredList.map((item,index)=>{
          return(
            <Products item={item.name}/>
          )
        })}
    </Grid>
      ):(
        <div>
          {category && <p>No category exist with the name '{category}'</p>}
          {items.map(item=>{
          return(
            <div>
              <h3>{item.name}</h3>
                
            </div>
          )
        })}
        </div>
      )}
    
        
    </div>
  )
}

export default EscrowFilter