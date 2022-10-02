/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { mq } from '../../Home/GlobalStyles'

export const escrowMarketContainer =css({
    [mq[0]]:{
        padding:'0vh 2vh',
        backgroundColor:'#f6f7f9'
    }
})
export const selectStyle = css({
    border:'none',
    borderRadius:'50px',
    marginLeft:'10px',
    padding:'0px 0px 0px 0px',
    backgroundColor:'white'
})
export const bestPlatform=css({
backgroundColor:'#623cea',
height:'360px',
borderRadius:'10px',
marginTop:'4vh',
[mq[0]]:{
    height:'35vh',
    marginTop:'0px'
}

})
export const textContainer =css({
    padding:'4vh 0vh 0vh 5vh',
    width:'34%',
    [mq[0]]:{
        padding:'10px',
        width:'80%'
    }
})

export const bestText=css({
color:'white',
fontWeight:600,
fontSize:'32px',
[mq[0]]:{
    fontSize:'16px',
    lineHeight:'150%',
    fontFamily:'Plus Jakarta Sans'
}
})
export const pText=css({
    color:'white',
    fontSize:'16px',
    fontWeight:500,
    lineHeight:'150%',
    display:'flex',
    alignItems:'center',
    [mq[0]]:{
        fontSize:'12px',
        fontFamily:'Plus Jakarta Sans',
        lineHeight:'160%'
    }
})
export const sortBox=css({
display:'flex',
justifyContent:'space-between',
[mq[0]]:{
    paddingTop:'8ch',
    backgroundColor:'white',
}
})
export const sortBoxLeft=css({
    width:'fit-content',
    display:'flex',
    justifyContent:'space-between',
    [mq[0]]:{
        marginBottom:'32px'
    }
})
export const filterMobileBox =css({
    border:'1px solid #C3D4E966',
    width:'fit-content',
    padding:'10px 10px 1px 10px',
    color:'#04063d',
    fontSize:'medium',
    margin:'0px 15px',
    borderRadius:'5px'
})
export const sortBoxRight=css({
    width:'43%',
    [mq[0]]:{
        display:'none'
    }
})
export const searchDiv=css({
    backgroundColor:'white',
    borderRadius:'50px',
    display:'flex',
    justifyContent:'space-between',
    width:'fit-content',
    marginLeft:'2vh',
    width:'30vh'
})
export const autocomplete =css({
    backgroundColor:'white',
    borderRadius:'40px',
    border:'none'
})
export const searchBox =css({
    width:'fit-content',
    padding:'5px 10px',
    display:'flex',
    justifyContent:'space-between',
    borderRadius:'50px',
    margin:'0px 1vh',
    backgroundColor:'white',
    [mq[0]]:{
        height:'50px',
        width:'70vw',
        borderRadius:'10px',
        margin:'0px 0px 0px 20px',
        border:'1px solid #C3D4E966'
    }
})
export const textField =css({
    margin:'0px',
    border:'none',
    borderRadius:'20px',
    marginLeft:'5px',
    width:200,
    [mq[0]]:{
        width:'96%',
        borderRadius:'5px',
        margin:'1vh',
    }
})
export const searchicon=css({
    height:"20px",
    width:'20px',
    [mq[0]]:{
        margin:'auto',
        height:'90%',
        width:'fit-content',
    }
})
export const popularText =css({
    width:'100%',
    backgroundColor:'#04063D',
    height:'50px',
    margin:'3vh 0px',
    padding:"12px 10px",
    [mq[0]]:{
        marginTop:'4vh',
        marginBottom:'10px',
        height:'40px',
        backgroundColor:'inherit',
        display:'flex',
        justifyContent:'space-between',
        '& a':{
            textDecoration:'none',
            color:'#3563E9'
        }
    }
})
export const popularText2 =css({
    width:'100%',
    backgroundColor:'white',
    height:'50px',
    margin:'3vh 0px',
    padding:"12px 10px"
})
export const popularP=css({
    margin:'0px',
    color:'white',
    fontSize:'18px',
    fontWeight:'500',
    [mq[0]]:{
        color:'#04063D'
    }
})
export const popularP2=css({
    margin:'0px',
    color:'#04063D',
    fontSize:'18px',
    fontWeight:'500'
})
export const slickContainer=css({
    margin:'0px',
    marginBottom:'50px',
    
})
export const allItems =css({
    display:'grid',
    gridTemplateColumns:'1fr 1fr 1fr'
})
export const mostPopularContainer = css({
        display:'flex',
        justifyContent:'space-between',

})
export const mostPopularIcon =css({
    display:'flex'
})
export const dataTag =css({
    margin:'0px',
    padding:'0px',
    color:'#64748B',
    fontSize:'11px',
    margin:'auto 0px'
})
export const popStyle =css({
    height:'25px',
    margin:'0px 4px'
})
export const smallSortbOX =css({
    display:'flex',
    [mq[0]]:{
        display:'none'
    }
})
