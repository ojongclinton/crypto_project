import { CssBaseline, Grid } from '@mui/material'
import React from 'react'
import Category from './CategorySelect/Category'
// import EscrowFilter from './EscrowFilter/EscrowFilter'
// import personIcon from '../../assets/person.svg'
// import peopleIcon from '../../assets/people.svg'
// import bannerIcon from '../../assets/banner.svg'
// import settingicon from '../../assets/settings.svg'
// import chatIcon from '../../assets/chat.svg'
import { EscrowMarketPlace } from './EscrowMarketPlace/EscrowMarketPlace'
import "../../MarketplaceStyles.css"
import { Outlet,Route,Routes } from 'react-router-dom'
import { Search } from './EscrowMarketPlace/Search'
import ItemDetails from './AnItem/ItemDetails'
import ViewCategory from './AnItem/Viewcategory'
import AllCategories from './AnItem/AllCategories'

export const items = [
  {
    name:'The Living Dead',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',category:'movies',id:1,description:'placeholder details where put here just for putting sake to make a placeholder that would be for the test gotten from the databas... quick guess... you ready? one.. two three. should you beleive a lair who says he is lying?',
    type:'Sport'
  },
  {
    name:'Walking talking',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',category:'movies',popular:'popular',id:2,description:'placeholder details where put here just for putting sake to make a placedescriptionr that would be for the test gotten from the databas... quick guess... you ready? one.. two three. should you beleive a lair who says he is lying?',
    type:'Sport'
  },
  {
    name:'Walk like a boss',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',category:'movies' ,popular:'popular',id:3,description:'placeholder details where put here just for putting sake to make adescriptioneholder that would be for the test gotten from the databas... quick guess... you ready? one.. two three. should you beleive a lair who says he is lying?',
    type:'Sport'
  },
  {
    name:'Those that have Eyes',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',category:'movies',id:4,descriptionout:'placeholder details where put here just for putting sake to make adescriptioneholder that would be for the test gotten from the databas... quick guess... you ready? one.. two three. should you beleive a lair who says he is lying?',
    type:'Sport'
  },
  {
    name:'The local Nerd',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',category:'movies',popular:'popular',id:5,description:'placeholder details where put here just for putting sake to make a placedescriptionr that would be for the test gotten from the databas... quick guess... you ready? one.. two three. should you beleive a lair who says he is lying?',
    type:'Sport'
  },
  {
    name:'The local Nerdi',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',category:'movies',id:6,description:'placeholder details where put here just for putting sake to make a placeholder that would be for the test gotten from the databas... quick guess... you ready? one.. two three. should you beleive a lair who says he is lying?',
    type:'Sport'
  },
  {
    name:'LegZus',category:'cars',popular:'popular',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',id:7,description:'placeholder details where put here just for putting sake to make a placeholddescriptionat would be for the test gotten from the databas... quick guess... you ready? one.. two three. should you beleive a lair who says he is lying?',
    type:'Sport'
  },
  {
    name:'Avensis',category:'cars',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',id:8,description:'placeholder details where put here just for putting sake to make a placeholder that would be for the test gotten from the databas... quick guess... you ready? one.. two three. should you beleive a lair who says he is lying?',
    type:'Sport'
  },
  {
    name:'Toyota',category:'cars',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',id:9,description:'placeholder details where put here just for putting sake to make a placeholder that would be for the test gotten from the databas... quick guess... you ready? one.. two three. should you beleive a lair who says he is lying?',
    type:'Sport'
  },
  {
    name:'Schneider',category:'cars' ,popular:'popular',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',id:10,description:'placeholder details where put here just for putting sake to make a placedescriptionr that would be for the test gotten from the databas... quick guess... you ready? one.. two three. should you beleive a lair who says he is lying?',
    type:'Sport'
  },
  {
    name:'Infinity 007',category:'cars',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',id:11,description:'placeholder details where put here just for putting sake to make a placeholder that would be for the test gotten from the databas... quick guess... you ready? one.. two three. should you beleive a lair who says he is lying?',
    type:'Sport'
  },
  {
    name:'Cinderella',category:'actress',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',id:12,description:'placeholder details where put here just for putting sake to make a placeholder that would be for the test gotten from the databas... quick guess... you ready? one.. two three. should you beleive a lair who says he is lying?',
    type:'Sport'
  },
  {
    name:'Justin Beiber',category:'actress',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',id:13,description:'placeholder details where put here just for putting sake to make a placeholder that would be for the test gotten from the databas... quick guess... you ready? one.. two three. should you beleive a lair who says he is lying?',
    type:'Sport'
  },
  {
    name:'Nicky Minaj',category:'actress',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',id:14,description:'placeholder details where put here just for putting sake to make a placeholder that would be for the test gotten from the databas... quick guess... you ready? one.. two three. should you beleive a lair who says he is lying?',
    type:'Sport'
  },
  {
    name:'Cardi B',category:'actress',popular:'popular',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',id:15,description:'placeholder details where put here just for putting sake to make a placedescriptionr that would be for the test gotten from the databas... quick guess... you ready? one.. two three. should you beleive a lair who says he is lying?',
    type:'Sport'
  },
  {
    name:'Beyonce',category:'actress',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',id:16,description:'placeholder details where put here just for putting sake to make a placeholder that would be for the test gotten from the databas... quick guess... you ready? one.. two three. should you beleive a lair who says he is lying?',
    type:'Sport'
  },
  {
    name:'The Rock',category:'actor',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',id:17,description:'placeholder details where put here just for putting sake to make a placeholder that would be for the test gotten from the databas... quick guess... you ready? one.. two three. should you beleive a lair who says he is lying?',
    type:'Sport'
  },
  {
    name:'Snoop Dogg',category:'actor',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',id:18,description:'placeholder details where put here just for putting sake to make a placeholder that would be for the test gotten from the databas... quick guess... you ready? one.. two three. should you beleive a lair who says he is lying?',
    type:'Sport'
  },
  {
    name:'Kevin Harts',category:'actor',popular:'popular',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',id:19,description:'placeholder details where put here just for putting sake to make a placedescriptionr that would be for the test gotten from the databas... quick guess... you ready? one.. two three. should you beleive a lair who says he is lying?',
    type:'Sport'
  },
  {
    name:'Damso',category:'actor',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',id:20,description:'placeholder details where put here just for putting sake to make a placeholder that would be for the test gotten from the databas... quick guess... you ready? one.. two three. should you beleive a lair who says he is lying?',
    type:'Sport'
  },
  {
    name:'Booba',category:'actor',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',id:21,description:'placeholder details where put here just for putting sake to make a placeholder that would be for the test gotten from the databas... quick guess... you ready? one.. two three. should you beleive a lair who says he is lying?',
    type:'Sport'
  },
  {
    name:'Messi',category:'players',popular:'popular',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',id:22,description:'placeholder details where put here just for putting sake to make a placedescriptionr that would be for the test gotten from the databas... quick guess... you ready? one.. two three. should you beleive a lair who says he is lying?',
    type:'Sport'
  },
  {
    name:'Ibrahim Movic',category:'players',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',id:23,description:'placeholder details where put here just for putting sake to make a placeholder that would be for the test gotten from the databas... quick guess... you ready? one.. two three. should you beleive a lair who says he is lying?',
    type:'Sport'
  },
  {
    name:'Sallah',category:'players',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',id:24,description:'placeholder details where put here just for putting sake to make a placeholder that would be for the test gotten from the databas... quick guess... you ready? one.. two three. should you beleive a lair who says he is lying?',
    type:'Sport'
  },
  {
    name:'Christiano Ronaldo',category:'players',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',id:25,description:'placeholder details where put here just for putting sake to make a placeholder thdescriptionuld be for the test gotten from the databas... quick guess... you ready? one.. two three. should you beleive a lair who says he is lying?',
    type:'Sport'
  }, 
  {
    name:'Nje Clinton',category:'players',popular:'popular',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',id:26,description:'placeholder details where put here just for putting sake to make a placeholder that would be for the test gotten from the databas... quick guess... you ready? one.. two three. should you beleive a lair who says he is lying?',
    type:'Sport'
  },
]

export const comments = [
  {id:1,name:'Alex Stanton', comment:'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',title:'CEO at Bukalapak',date:'22 July 2022',rating:3.5},
  {id:2,name:'Skylar Dias',comment:'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',title:'CEO at Bukalapak',date:'22 July 2022',rating:3.5},
  {id:3,name:'Ojong Clinton',comment:'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',title:'CEO at Bukalapak',date:'22 July 2022',rating:3.5},
  {id:4,name:'Angafor precious',comment:'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',title:'CEO at Bukalapak',date:'22 July 2022',rating:3.5},
  {id:5,name:'Mofor Bradley',comment:'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',title:'CEO at Bukalapak',date:'22 July 2022',rating:3.5},
  {id:6,name:'Angafor Konrad',comment:'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',title:'CEO at Bukalapak',date:'22 July 2022',rating:3.5}
]

window.addEventListener('DOMContentLoaded',()=>{
  console.log('ready!!')
})

export const allCategories=[];
items.forEach(cate=>{
  if(allCategories.includes(cate.category)){
  }
  else(
    allCategories.push(cate.category)
  )
})
function MarketPlace() {


const [selectedCategory,setSelectedCategory] = React.useState('')


  return (
    <div style={{backgroundColor:'#eeeeee'}}>
      <CssBaseline/>
      <Grid container>
        <Grid item lg={2.5} xs={12}>
          <Category setCategory={setSelectedCategory} categories={allCategories} choosed={selectedCategory}/>
        </Grid>
        <Grid item lg={9} xs={12} sx={{mt:'2vh'}}>
        <Search alltheItems={items}/>
         <Routes>
            <Route path='/' element={<EscrowMarketPlace categories={allCategories} category={selectedCategory} setCategory={setSelectedCategory} alltheItems={items}/>}/>
            <Route path=':itemId' element={<ItemDetails/>}/>
            <Route path='/categories/:category' element={<ViewCategory/>}/>
            <Route path='/categories' element={<AllCategories />}/>
         </Routes>
        </Grid>
      </Grid>
    </div>
  )
}

export default MarketPlace