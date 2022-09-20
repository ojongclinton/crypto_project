/** @jsxImportSource @emotion/react */
import { Stack,FormControl,MenuItem,Select,InputBase, Autocomplete } from '@mui/material'
import TextField from '@mui/material/TextField';
import React from 'react'
import { H11,H22 } from '../../Home/GlobalStyles'
import * as styles from './style'
import Search from '../../../assets/SearchIcon.svg'
import Item from '../AnItem/Item';
import Slider from 'react-slick';


var settings = {
  // customPaging: function(pagi, i) {
  //   const style={
  //     height:'50px',
  //     width:'10px',
  //     borderRadius:'100px',
  //     border:'2px solid #82839e'
  //   }
  //   const activeStyle={
  //     height:'90px',
  //     width:'10px',
  //     borderRadius:'100px',
  //     backgroundColor:'white'
  //   }
  //   return (
  //     <div className='slick-dot'> </div>
  //   );
  // },
  dots:true,
  infinite:true,
  speed:1000,
  slidesToShow:3,
  slidesToScroll:2,
  arrows:false,
  autoplay:true,
  autoplayspeed:500

}

export const EscrowMarketPlace = ({categories,category,setCategory,alltheItems}) => {
  const popular_escrows = alltheItems.filter(item=>item.popular)
  console.log(popular_escrows)
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
          <div css={styles.popularText}> 
              <p css={styles.popularP}>Most popuar escrows</p>
          </div>
          <div css={styles.slickContainer}>
                <Slider {...settings}>
                  {popular_escrows.map(escrow=>{return(
                    <Item item={escrow}/>
                  )})}
                </Slider>
              </div>
        </div>
    </div>
  )
}
