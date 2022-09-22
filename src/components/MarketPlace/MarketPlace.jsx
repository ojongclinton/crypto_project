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

export const items = [
  {
    name:'The Living Dead',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',category:'movies',id:1
  },
  {
    name:'Walking talking',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',category:'movies',popular:'popular',id:2
  },
  {
    name:'Walk like a boss',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',category:'movies' ,popular:'popular',id:3
  },
  {
    name:'Those that have Eyes',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',category:'movies',id:4
  },
  {
    name:'The local Nerd',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',category:'movies',popular:'popular',id:5
  },
  {
    name:'The local Nerdi',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',category:'movies',id:6
  },
  {
    name:'LegZus',category:'cars',popular:'popular',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',id:7
  },
  {
    name:'Avensis',category:'cars',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',id:8
  },
  {
    name:'Toyota',category:'cars',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',id:9
  },
  {
    name:'Schneider',category:'cars' ,popular:'popular',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',id:10
  },
  {
    name:'Infinity 007',category:'cars',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',id:11
  },
  {
    name:'Cinderella',category:'actress',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',id:12
  },
  {
    name:'Justin Beiber',category:'actress',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',id:13
  },
  {
    name:'Nicky Minaj',category:'actress',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',id:14
  },
  {
    name:'Cardi B',category:'actress',popular:'popular',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',id:15
  },
  {
    name:'Beyonce',category:'actress',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',id:16
  },
  {
    name:'The Rock',category:'actor',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',id:17
  },
  {
    name:'Snoop Dogg',category:'actor',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',id:18
  },
  {
    name:'Kevin Harts',category:'actor',popular:'popular',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',id:19
  },
  {
    name:'Damso',category:'actor',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',id:20
  },
  {
    name:'Booba',category:'actor',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',id:21
  },
  {
    name:'Messi',category:'players',popular:'popular',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',id:22
  },
  {
    name:'Ibrahim Movic',category:'players',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',id:23
  },
  {
    name:'Sallah',category:'players',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',id:24
  },
  {
    name:'Christiano Ronaldo',category:'players',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',id:25
  },
  {
    name:'Nje Clinton',category:'players',popular:'popular',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',id:26
  },
]
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
          {/*   */}
         <Routes>
            <Route path='/' element={<EscrowMarketPlace categories={allCategories} category={selectedCategory} setCategory={setSelectedCategory} alltheItems={items}/>}/>
            <Route path=':itemId' element={<ItemDetails/>}/>
         </Routes>
        </Grid>
      </Grid>
    </div>
  )
}

export default MarketPlace