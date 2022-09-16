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
  {Category:'Category 4',items:[
    {name:'The Living Dead',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days'},
    {name:'Walking talking',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days'},
    {name:'Walk like a boss',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days'},
    {name:'Those that have Eyes',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days'},
    {name:'The local Nerd',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days'},
    {name:'The local Nerd',user:'@EstherMorella',amount:'$$99.00',rating:'3/5',location:'England',datePosted:'17 Days'}
  ],icon:personIcon},
  {Category:'Cars',items:[
    {name:'LegZus'},
    {name:'Avensis'},
    {name:'Toyota'},
    {name:'Schneider'},
    {name:'Infinity 007'},
    {name:'Infinity 007'},
  ],icon:peopleIcon},
  {Category:'Actress',items:[
    {name:'Cinderella'},
    {name:'Justin Beiber'},
    {name:'Nicky Minaj'},
    {name:'Cardi B'},
    {name:'Beyonce'},
    {name:'Beyonce'},
  ],icon:bannerIcon}
  ,
  {Category:'Actors',items:[
    {name:'The Rock'},
    {name:'Snoop Dogg'},
    {name:'Kevin Harts'},
    {name:'Damso'},
    {name:'Booba'},
    {name:'Booba'},
  ],icon:settingicon}
  ,
  {Category:'Players',items:[
    {name:'Messi'},
    {name:'Ibrahim Movic'},
    {name:'Sallah'},
    {name:'Sallah'},
    {name:'Christiano Ronaldo'},
    {name:'Nje Clinton'},
  ],icon:chatIcon}
]
const allCategories = items.map(item=>{ return([item.Category,item.icon])})
console.log(allCategories[0])
const [selectedCategory,setSelectedCategory] = React.useState('')

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