/** @jsxImportSource @emotion/react */
import { Stack,FormControl,MenuItem,Select,InputBase, Autocomplete } from '@mui/material'
import TextField from '@mui/material/TextField';
import React from 'react'
import { H11,H22 } from '../../Home/GlobalStyles'
import * as styles from './style'
import Search from '../../../assets/SearchIcon.svg'

const SearchResults=({items})=>{
  return(

    <div css={styles.searchBox} id='searchResults'>
      {items.length>0?(
          items.map(item=>(
          <div>
            <h4>{item.name}</h4>
          </div>
          ))
      ):(
        <h3 style={{color:'red'}}>No result found</h3>
      )}
    </div>
  )
}

export const EscrowMarketPlace = ({categories,category,setCategory,alltheItems}) => {
  
    const handleCategoryChange =(e)=>{
        setCategory(e.target.value)
    }
    const [searchTerm,setSearchTerm] = React.useState('')
    const handleSearch=(e)=>{
      setShowSearchResults(true);
      setSearchTerm(e.target.value)
    }
    const [showSearchResults,setShowSearchResults] = React.useState(true)
  return (
    
    <div>
        <div css={styles.sortBox}>
          <div css={styles.sortBoxLeft}>
            <H22 style={{margin:'0px',padding:'0px'}}>Esccrow marketplace</H22>
            <select name="sortBy" css={styles.selectStyle} value={category} onChange={handleCategoryChange}>
              <option value="price">Price</option>
              <option value="rating">Rating</option>
              <option value="condition">Condition</option>
              <option value="date">Date</option>
            </select>
            <div css={styles.searchBox}>
              <Autocomplete 
        freeSolo
        disableClearable
        renderInput={(params)=>
        <TextField {...params}
        variant='standard'
        size='small'
        placeholder='Search....'
        css={styles.textField}
        InputProps={{
          disableUnderline: true,
          ...params.InputProps,
        }}
        />}
        options={alltheItems}
        getOptionLabel={(option)=>option.name}
        groupBy={(option)=>option.category}
        sx={{width:200,height:20}}
      />
      <img src={Search} css={styles.searchicon}/>
            </div>
            
          </div>
          <div css={styles.sortBoxRight}>
            Right
          </div>
        </div>
        <div css={styles.bestPlatform} id='bestPlatForm'>
          <div style={{padding:'4vh 0vh 0vh 5vh',width:'34%'}}>
            <h1 css={styles.bestText}>The Best Platform for Escrow services</h1>
            <p css={styles.pText}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, veritatis distinctio voluptas quas explicabo hic quibusdam reprehenderit aspernatur voluptatum tempora.</p>
          </div>
        </div>
        <div> {/*Most popular escrows!*/}
          <div> 
              <p>Most popuar escrows</p>
          </div>
        </div>
    </div>
  )
}
