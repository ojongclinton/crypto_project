/** @jsxImportSource @emotion/react */
import { Stack,FormControl,MenuItem,Select,InputBase, Autocomplete } from '@mui/material'
import TextField from '@mui/material/TextField';
import React from 'react'
import { H11,H22 } from '../../Home/GlobalStyles'
import * as styles from './style'
import Item from '../AnItem/Item';
import Slider from 'react-slick';
import { Search } from './Search';
import { Outlet,Routes,Route,BrowserRouter } from 'react-router-dom';
import ItemDetails from '../AnItem/ItemDetails';


const Popular =({alltheItems})=>{
  const popular_escrows = alltheItems.filter(item=>item.popular)
  const [currentSlide,setCurrentSlide] = React.useState(0)
  var settings = {
    beforeChange:function(prev,next){
      setCurrentSlide(next)
    },
    customPaging: function(pagi, i) {
      const style={
        height:'10px',
        width:'10px',
        borderRadius:'100px',
        border:'2px solid #82839e',
        marginTop:"24.6px",
        marginBottom:'36px',
      }
      const activeStyle={
        height:'10px',
        width:'10px',
        borderRadius:'100px',
        backgroundColor:'#04063d',
        marginTop:"24.6px",
        marginBottom:'36px',
      }
      return (
        <div className='slick-dot' style={pagi===currentSlide?activeStyle:style}> </div>
      );
    },
    dots:true,
    infinite:true,
    speed:1000,
    slidesToShow:3,
    slidesToScroll:1,
    arrows:false,
    autoplay:true,
    autoplayspeed:500
  
  }
  return (
    <div css={styles.slickContainer}>
                <Slider {...settings}>
                  {popular_escrows.map(escrow=>{return(
                    <Item item={escrow} btnColor='#FF6A55'/>
                  )})}
                </Slider>
    </div>
  )
}


export const EscrowMarketPlace = ({categories,category,setCategory,alltheItems}) => {
  const popular_escrows = alltheItems.filter(item=>item.popular)
  const popular_categories =[]
  const filterByCategory = alltheItems.filter(item=> item.category === category)
  console.log(filterByCategory)
  popular_escrows.forEach(escrow => {
    if(popular_categories.includes(escrow.category)){
      
    }
    else(
      popular_categories.push(escrow.category)
    )
  })
  // const itemByCategory = alltheItems.filter(item=>item.category === category)
  // console.log(itemByCategory)

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
      <Search alltheItems={alltheItems}/>
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
              <Popular alltheItems={alltheItems}/> {/*Most popular escrows*/}
              <div> {/*Escrows by category*/}
              <div css={styles.popularText}> 
              <p css={styles.popularP}>{category}</p>
          </div>
          <div css={styles.allItems}>
            {category?(
              filterByCategory.map((item,index)=>{
                return(
                  <Item item={item} btnColor='#5A48FB' key={index}/>
                )
              })
            ):(<div style={{margin:'auto'}}>
              <h1 style={{margin:'0px'}}>Choose a category</h1>
            </div>)}
          </div>
              </div>
          <div> {/*All the escrows*/}
          <div css={styles.popularText2}> 
              <p css={styles.popularP2}>Top escrows</p>
          </div>
          <div css={styles.allItems}>
            
                    {alltheItems.map((item,index)=>{
                      return(
                        <Item item={item} btnColor='#5A48FB' key={index}/>
                      )
                    })}
          </div>
          </div>
              
        </div>
    </div>
  )
}
