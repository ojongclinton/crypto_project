import { css,Global } from '@emotion/react'
import {styled} from '@mui/material'
import { mq } from '../GlobalStyles'

export const whoWeAre= css({
display:'flex',
justifyContent:'space-between',
height:'50vh',
margin:'10vh'
})
export const MWhoweAre = css({
    display:'block'
})

const currencies =css({
height:'10vh',
width:'10vh',
position:'relative',
top:'12vh',
})

export const currencies2 =css({
    position:'relative',
    height:'17vh',
    width:'17vh',
    top:'17vh'
})
export const currencies3 =css({
    position:'relative',
    height:'6vh',
    width:'6vh',
    top:'2vh'
})
export const currencies4 =css({
    position:'relative',
    height:'10vh',
    width:'10vh',
    top:'1vh'
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
    height:'85vh',
    width:'100%',
    margin:'0px',
    padding:'0px',
    [mq[0]]:{
        margin:'0px',
        width:'100%',
        height:'calc(fit-content + 10vh)'
    }
})
export const quoteImage=css({
    position:'relative',
    height:'30vh',
    color:'white',
    left:'20vh'
})
export const MqouteImage=css({
    position:'relative',
    height:'10vh',
    color:'white',
    right:'0vh',
    top:'2vh'
})
export const heading=css({
    [mq[0]]:{   
        margin:'5vh 4vh',
        textAlign:'center'
    }
})
export const cusH1=css({
    color:'white',
    marginLeft:'60vh',
    marginTop:'10vh',
    [mq[0]]:{
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:'6vh',
        color:"white",
    }
})
export const testiDiv = css({
    backgroundColor:'white',
    margin:'5vh',padding:'10px',
    textAlign:'center',
    height:'max-content',
    borderRadius:'10px',
    [mq[0]]:{
        margin:'2vh',
        padding:'20px'
    }
})
export const userInfocont=css({
    display:'flex',
    justifyContent:'center',
    margin:'0px',
    padding:'0px'
})