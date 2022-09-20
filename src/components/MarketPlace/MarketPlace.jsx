import { CssBaseline, Grid } from '@mui/material'
import React from 'react'
import Category from './CategorySelect/Category'
import EscrowFilter from './EscrowFilter/EscrowFilter'
import personIcon from '../../assets/person.svg'
import peopleIcon from '../../assets/people.svg'
import bannerIcon from '../../assets/banner.svg'
import settingicon from '../../assets/settings.svg'
import chatIcon from '../../assets/chat.svg'
import { EscrowMarketPlace } from './EscrowMarketPlace/EscrowMarketPlace'
import "../../MarketplaceStyles.css"

function MarketPlace() {
const items = [
    {name:'The Living Dead',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',category:'movies'},
    {name:'Walking talking',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',category:'movies'},
    {name:'Walk like a boss',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',category:'movies'},
    {name:'Those that have Eyes',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',category:'movies'},
    {name:'The local Nerd',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',category:'movies'},
    {name:'The local Nerdi',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',category:'movies'},
    {name:'LegZus',category:'cars'},
    {name:'Avensis',category:'cars'},
    {name:'Toyota',category:'cars'},
    {name:'Schneider',category:'cars'},
    {name:'Infinity 007',category:'cars'},
    {name:'Cinderella',category:'actress'},
    {name:'Justin Beiber',category:'actress'},
    {name:'Nicky Minaj',category:'actress'},
    {name:'Cardi B',category:'actress'},
    {name:'Beyonce',category:'actress'},
    {name:'The Rock',category:'actor'},
    {name:'Snoop Dogg',category:'actor'},
    {name:'Kevin Harts',category:'actor'},
    {name:'Damso',category:'actor'},
    {name:'Booba',category:'actor'},
    {name:'Messi',category:'players'},
    {name:'Ibrahim Movic',category:'players'},
    {name:'Sallah',category:'players'},
    {name:'Christiano Ronaldo',category:'players'},
    {name:'Nje Clinton',category:'players'},

]
const allCategories=[];
items.forEach(cate=>{
  if(allCategories.includes(cate.category)){
    console.log('already here')
  }
  else(
    allCategories.push(cate.category)
  )
})

const [selectedCategory,setSelectedCategory] = React.useState('actor')


  return (
    <div style={{backgroundColor:'#eeeeee'}}>
      <CssBaseline/>
      <Grid container>
        <Grid item lg={2.5} xs={12}>
          <Category setCategory={setSelectedCategory} categories={allCategories} choosed={selectedCategory}/>
        </Grid>
        <Grid item lg={9} xs={12} sx={{mt:'2vh'}}>
          <EscrowMarketPlace categories={allCategories} category={selectedCategory} setCategory={setSelectedCategory} alltheItems={items}/> 
          <EscrowFilter category={selectedCategory} setCategory={setSelectedCategory} items={items}/>
        </Grid>
      </Grid>
    </div>
  )
}

export default MarketPlace