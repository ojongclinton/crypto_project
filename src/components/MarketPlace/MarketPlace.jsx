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
    {name:'Walking talking',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',category:'movies',popular:'popular'},
    {name:'Walk like a boss',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',category:'movies' ,popular:'popular'},
    {name:'Those that have Eyes',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',category:'movies'},
    {name:'The local Nerd',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',category:'movies',popular:'popular'},
    {name:'The local Nerdi',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',category:'movies'},
    {name:'LegZus',category:'cars',popular:'popular',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',},
    {name:'Avensis',category:'cars',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',},
    {name:'Toyota',category:'cars',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',},
    {name:'Schneider',category:'cars' ,popular:'popular',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',},
    {name:'Infinity 007',category:'cars',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',},
    {name:'Cinderella',category:'actress',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',},
    {name:'Justin Beiber',category:'actress',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',},
    {name:'Nicky Minaj',category:'actress',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',},
    {name:'Cardi B',category:'actress',popular:'popular',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',},
    {name:'Beyonce',category:'actress',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',},
    {name:'The Rock',category:'actor',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',},
    {name:'Snoop Dogg',category:'actor',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',},
    {name:'Kevin Harts',category:'actor',popular:'popular',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',},
    {name:'Damso',category:'actor',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',},
    {name:'Booba',category:'actor',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',},
    {name:'Messi',category:'players',popular:'popular',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',},
    {name:'Ibrahim Movic',category:'players',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',},
    {name:'Sallah',category:'players',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',},
    {name:'Christiano Ronaldo',category:'players',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',},
    {name:'Nje Clinton',category:'players',popular:'popular',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days',},

]
const allCategories=[];
items.forEach(cate=>{
  if(allCategories.includes(cate.category)){
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
          {/* <EscrowFilter category={selectedCategory} setCategory={setSelectedCategory} items={items}/> */}
        </Grid>
      </Grid>
    </div>
  )
}

export default MarketPlace