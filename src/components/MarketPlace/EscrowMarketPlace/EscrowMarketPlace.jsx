/** @jsxImportSource @emotion/react */
import React from 'react'
import * as styles from './style'
import Item from '../AnItem/Item';
import Slider from 'react-slick';
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';

const Popular =({alltheItems})=>{
  const isMobile = useMediaQuery({query:`(max-width:576px)`})
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
    slidesToShow:isMobile?1:3,
    slidesToScroll:1,
    arrows:false,
    autoplay:true,
    autoplayspeed:500
  
  }
  return (
    <div css={styles.slickContainer}>
                <Slider {...settings} >
                  {popular_escrows.map(escrow=>{return(
                    <Item item={escrow} btnColor='#FF6A55'/>
                  )})}
                </Slider>
    </div>
  )
}


export const EscrowMarketPlace = ({categories,category,setCategory,alltheItems}) => {
  const isMobile = useMediaQuery({query:`(max-width:576px)`})
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

  return (
    <div css={styles.escrowMarketContainer}>
        <div css={styles.bestPlatform} id='bestPlatForm'>
          <div css={styles.textContainer}>
            <h1 css={styles.bestText}>The Best Platform for Escrow services</h1>
            <p css={styles.pText}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, veritatis distinctio voluptas quas explicabo hic quibusdam reprehenderit aspernatur voluptatum tempora.</p>
          </div>
        </div>
        <div> {/*Most popular escrows!*/}
          <div css={styles.popularText}> 
              <p css={styles.popularP}>Most popuar escrows</p>
              {isMobile && <Link to='/'>View All</Link>}
          </div>
              <Popular alltheItems={alltheItems}/> {/*Most popular escrows*/}
              {/*<div> Escrows by category
              <div css={styles.popularText}> 
              <p css={styles.popularP}>{category}Right Here</p>
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
              </div>*/}
          <div> {/*All the escrows*/}
          <div css={styles.popularText2}> 
              <p css={styles.popularP2}>Top escrows</p>
          </div>
           <Grid container>
            
                    {alltheItems.map((item,index)=>{
                      return(
                        <Grid item xl={4} sm={12}>
                          <Item item={item} btnColor='#5A48FB' key={index}/>
                        </Grid>
                      )
                    })}
          </Grid>
          </div>
              
        </div>
    </div>
  )
}
