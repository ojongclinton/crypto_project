import { css,Global } from '@emotion/react'
import {styled} from '@mui/material'
import { mq } from '../GlobalStyles'

export const whoWeAre= css({
display:'flex',
justifyContent:'space-between',
height:'50vh',
margin:'10vh',
[mq[1,2,3]]:{
    margin:'0px',
    height:'fit-content'
}
})
export const MWhoweAre = css({
    display:'block'
})

const currencies =css({
height:'10vh',
width:'10vh',
position:'relative',
top:'12vh',
[mq[1,2,3]]:{
    top:'2vh',
    height:'10%',
    width:'10%'
}
})

export const currencies2 =css({
    position:'relative',
    height:'17vh',
    width:'17vh',
    top:'17vh',
    [mq[1,2,3]]:{
        top:'4vh',
        height:'15%',
        width:'15%'
    }
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
export const iconContainer =css({
    [mq[1,2,3]]:{
        width:'90%',
        margin:'0px 2vh 0px 2vh',
        paddingLeft:'5px'
    },
    [mq[0]]:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
    }
})
export const bitcoinImage=css`
${currencies};
left:15vh;
${mq[1,2,3]}{
    left:5%
}
`
export const binanceImage =css`
${currencies};
left:25vh;
${mq[1,2,3]}{
    left:15%
}
`
export const etherumImage=css`
${currencies};
left:35vh;
${mq[1,2,3]}{
    left:25%
}
`
export const tetherImage=css`
${currencies};
left:45vh;
${mq[1,2,3]}{
    left:35%
}
`
export const payeerImage=css`
${currencies2};
left:23vh;
${mq[1,2,3]}{
    left:15%
}
`
export const blockImage=css`
${currencies2};
left:26vh;
${mq[1,2,3]}{
    left:25%
}
`
export const moreImage =css`
${currencies2};
left:29vh;
${mq[1,2,3]}{
    left:35%
}
`
export const testimonials=css({
    backgroundColor:'#04063D',
    height:'85vh',
    width:'100%',
    margin:'0px',
    padding:'0px',
    [mq[1,2,3]]:{
        margin:'0px',
        width:'100%',
        height:'fit-content',
        marginTop:'1vh',
        paddingBottom:'3vh'
    },
    [mq[0]]:{
        margin:'0px',
        width:'100%',
        height:'90vh'
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
    margin:'5vh',
    padding:'10px',
    textAlign:'center',
    height:'max-content',
    borderRadius:'10px',
    [mq[1,2,3]]:{
        width:'fit-content',
        margin:'2vh',
        height:'fit-content',
        padding:'10px'
    },
    [mq[0]]:{
        margin:'2vh',
        padding:'20px',
        height:'fit-content'
    }
})
export const userInfocont=css({
    display:'flex',
    justifyContent:'center',
    margin:'0px',
    padding:'0px'
})
export const reactSlider = css({
    [mq[1,2,3]]:{
        width:'90%',
        margin:'auto',
        padding:'0px'
    },
    [mq[0]]:{
        margin:' 0px 10px',
        width:'initial',
        backgroundColor:'initial',
    }
})
export const titleText = css({
    width:'70vh',
    [mq[1,2,3]]:{
        width:'fit-content'
    },
    [mq[0]]:{
        width:'80%',
        textAlign:'center',
        marginBottom:'10vh'
    }
})
export const iconsContainer = css({
    [mq[0,1,2,3]]:{
        display:'flex',
        justifyContent:'space-around'
    }
})