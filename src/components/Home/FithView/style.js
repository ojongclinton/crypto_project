import { css,Global } from '@emotion/react'
import {styled} from '@mui/material'

export const plainText = css({
color:'#282D6C',
font:'Montserrat',
fontWeight:400,
fontSize:'18px',
lineHeight:'160%',
fontStyle:'normal',
margin:'0px',
padding:'0px'
})

export const whoWeAre= css({
display:'flex',
justifyContent:'space-between',
height:'50vh'
})

const currencies =css({
height:'10vh',
width:'10vh',
position:'relative',
top:'12vh',
})

const currencies2 =css({
    position:'relative',
    height:'17vh',
    width:'17vh',
    top:'17vh'
})

export const bitcoinImage=css`
${currencies};
left:15vh;
`
export const binanceImage =css`
${currencies};
left:25vh;
`
export const etherumImage=css`
${currencies};
left:35vh;
`
export const tetherImage=css`
${currencies};
left:45vh;
`
export const payeerImage=css`
${currencies2};
left:23vh;
`
export const blockImage=css`
${currencies2};
left:26vh;
`
export const moreImage =css`
${currencies2};
left:29vh;
`
export const testimonials=css({
    backgroundColor:'#04063D',
    height:'80vh',
    width:'100%',
    margin:'0px'
})
export const quoteImage=css({
    position:'relative',
    height:'30vh',
    color:'white',
    left:'20vh'
})

export const halfCircle= css({

})
