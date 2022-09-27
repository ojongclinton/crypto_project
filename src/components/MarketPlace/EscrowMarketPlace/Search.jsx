/** @jsxImportSource @emotion/react */
import React from 'react'
import * as styles from './style'
import { Stack,FormControl,MenuItem,Select,InputBase, Autocomplete,TextField } from '@mui/material'
import {H22 } from '../../Home/GlobalStyles'
import cate1 from '../../../assets/bushmarket.svg'
import cate2 from '../../../assets/foodmarket.svg'
import cate3 from '../../../assets/hardwaremarket.svg'
import cate4 from '../../../assets/techmarket.svg'
import searchIcon from '../../../assets/SearchIcon.svg'
import { useNavigate } from 'react-router-dom'

export const Search =({alltheItems})=>{
  const handleClick=()=>{
    console.log('OKEEEEEEEE na')
  }
  const navigate = useNavigate();
  const handleSelect = (e,value)=>{
    navigate(`/MarketPlace/${value.id}`)
  }
    return(
        <div css={styles.sortBox}>
          <div css={styles.sortBoxLeft}>
            <H22>Esccrow marketplace</H22>
            <select name="sortBy" css={styles.selectStyle}>
              <option disabled selected value="" >filter..</option>
              <option value="price">Price</option>
              <option value="rating">Rating</option>
              <option value="condition">Condition</option>
              <option value="date">Date</option>
            </select>
            <div css={styles.searchBox}>
              <Autocomplete 
        freeSolo
        disableClearable
        onChange={handleSelect}
        // onInput={(e)=>console.log(e.target.value)} // Implement Search functionality
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
      <img src={searchIcon} css={styles.searchicon}/>
            </div>
            
          </div>
          <div css={styles.sortBoxRight}>
           <div css={styles.mostPopularContainer}>
                    <div css={styles.mostPopularIcon} onClick={handleClick}>
                        <img src={cate1} css={styles.popStyle} alt="location"/>
                        <p css={styles.dataTag}>Top sales</p>
                    </div>
                    <div css={styles.mostPopularIcon} onClick={handleClick}>
                        <img src={cate2} css={styles.popStyle} alt="sinceDays"/>
                        <p css={styles.dataTag}>consumables</p>
                    </div>
                    <div css={styles.mostPopularIcon} onClick={handleClick} >
                        <img src={cate3} css={styles.popStyle} alt="rating" />
                        <p css={styles.dataTag}>Favourites</p>
                    </div>
                    <div css={styles.mostPopularIcon} onClick={handleClick} >
                        <img src={cate4} css={styles.popStyle} alt="rating" />
                        <p css={styles.dataTag}>Hardware Market</p>
                    </div>
                </div> 
          </div>
        </div>
    )
}