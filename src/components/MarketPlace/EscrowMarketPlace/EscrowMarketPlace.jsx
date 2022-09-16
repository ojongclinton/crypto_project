/** @jsxImportSource @emotion/react */
import { Stack,FormControl,MenuItem,Select,InputBase } from '@mui/material'
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
    const searchResults = alltheItems.map(item=>item.items.filter(item=>item.name.toLowerCase().includes(searchTerm.toLowerCase())))
    const allActual = searchResults.filter(result=>result.length>0).flat()
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
              {categories.map(cate=>{
                return(
                  <option value={cate[0]}>{cate[0]}</option>
                )
              })}
            </select>
            <div style={{}}>
              <div css={styles.searchDiv}>
                <InputBase style={{backgroundColor:'white',marginLeft:'2vh',borderRadius:'10px'}} onInput={handleSearch} onBlur={()=>setShowSearchResults(false)} value={searchTerm}/>
                <img src={Search} style={{height:'70%',margin:'auto',paddingRight:'1vh',zIndex:'10'}}/>
              </div>
                {showSearchResults && <SearchResults items={allActual}/>}
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
    </div>
  )
}
