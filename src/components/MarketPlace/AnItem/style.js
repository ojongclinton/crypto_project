/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { mq } from '../../Home/GlobalStyles'

export const oneItemDiv = css({
    backgroundColor:'white',
    margin:'10px',
    height:'fit-content',
    padding:'3vh',
    borderRadius:'9.5px',
    [mq[0]]:{
        padding:'1vh',
        paddingTop:'2vh',
        width:'90vw',
        margin:'10px',
        marginLeft:'0px'
    }
})

export const belowHeader =css({
   [mq[0]]:{
    display:'flex',
    justifyContent:'space-between',
   } 
})

export const bigHeader =css({
    fontSize:'18px',
    fontWeight:600,
    color:'#1A202c',
    margin:'0px',
    fontFamily:'Plus Jakarta Sans'
})
export const userTag =css({
    margin:'0px',
    padding:'0px',
    color:'#64748B',
    fontFamily:'Plus Jakarta Sans',
    [mq[0]]:{
        fontSize:'14px'
    }
})
export const userTag2 =css({
    margin:'5px',
    padding:'0px',
    color:'#64748B',
    fontFamily:'Plus Jakarta Sans',
    [mq[0]]:{
        fontSize:'12px'
    }
})
export const headerBox=css({
    display:'flex',
    justifyContent:'space-between'
})
export const imgStyle =css({
    height:'50%',
    width:'100%',
    borderRadius:'3.7px',
    margin:'15px 0px',
    [mq[0]]:{
        height:'150px',
        width:'60%'
    }
})
export const chipStyle =css({
    color:'#5A48FA',
    backgroundColor:'#EDEBFF',
    [mq[0]]:{
        display:'none'
    }
})
export const footerIcon =css({
    display:'flex',
    [mq[0]]:{
        margin:'20px 0px'
    }
})
export const footerContainer =css({
    display:'flex',
    justifyContent:'space-between',
    [mq[1]]:{
        display:'block',
        marginTop:'1vh',
        marginRight:'1vh'
    }
})
export const buyNow =css({
    marginTop:'2.5vh',
    display:'flex',
    justifyContent:'space-between',
    [mq[0]]:{
        marginTop:'5px'
    }
})
export const btnStyle =css({
    textTransform:'none',
    width:'40%',
    padding:'4%',
    fontFamily:'Plus Jakarta Sans',
    [mq[0]]:{
        width:'25%',
        marginRight:'20px'
    }
})
export const priceTag = css({
    padding:'0px',
    margin:'auto 0px',
    color:'#04063D',
    fontWeight:700,
    fontFamily:'SF Pro Display',
    [mq[0]]:{
        fontSize:'25px'
    }
})
export const bigImage =css({
    height:'100%',
    width:'100%',
    borderRadius:'10px ',
    marginBottom:'10px',
    [mq[0]]:{
        width:'90%',
        height:'70%',
        margin:'5%',
    }

})
export const itemDetails =css({
    margin:'20px 0px',
    backgroundColor:'#eeeeee',
    marginBottom:'2vh',
    paddingBottom:'2vh'
    
})
export const itemTextDetails =css({
    backgroundColor:'#ffffff',
    borderRadius:'10px',
    padding:'24px',
    [mq[0]]:{
        padding:'16px',
        margin:'0px 10px',
    }
})
export const itemName =css({
    margin:'0px',
    fontSize:'32px',
    fontFamily:'Plus Jakarta Sans',
    [mq[0]]:{
        fontSize:'20px',
        marginBottom:'6px'
    }
})
export const ratingTag =css({
    margin:'0px',
    padding:'0px',
    color:'#64748B',
    fontSize:'14px',
    margin:'2px',
    [mq[0]]:{
        fontSize:'12px',
        marginLeft:'8px'
    }
})
export const Rating =css({
    display:'flex',
    justifyContent:'space-between',
})
export const description =css({
    margin:'5px 0px',
    color:'#596780',
    lineHeight:'180%',
    fontSize:'20px',
    fontWeight:'400',
    fontFamily:'Plus Jakarta Sans',
    [mq[0]]:{
        fontSize:'12px'
    }
})
export const flexDiv = css({
    display:'flex',
    justifyContent:'space-between',
    marginBottom:'0vh'
})
export const typeTag =css({
    margin:'5px',
    fontWeight:600,
    fontSize:'17px',
    color:'#596780',
    fontFamily:'Plus Jakarta Sans',
    [mq[0]]:{
        fontSize:'12px'
    }
})
export const itemprice=css({
    fontSize:'28px',
    color:'#1A202C',
    margin:'0px',
    [mq[0]]:{
        fontSize:'23px',
        marginTop:'10px'
    }
})
export const exchange =css({
    padding:'auto',
    backgroundColor:'#EEEEEE',
    width: '43px',
    height: '56px',
    borderRadius:'5px'
})
export const otherimgs =css({
    display:'flex',
    justifyContent:'space-between',
    height:'fit-content',
    margin:'0px',
    padding:'0px',
    [mq[0]]:{
        margin:'0px 5px'
    }
})
export const otherimgstyle =css({
    width:'100%',
    height:'100%',
    borderRadius:'10px',
    margin:'0px 0px',
})

export const oneOtherDiv =css({
    height:'22vh',
    padding:'8px',
    borderRadius:'10px',
    margin:'0px',
    [mq[0]]:{
        height:'9vh',
        padding:'5px'
    },
    '&:hover':{
        cursor:'pointer'
    }
    // backgroundColor:'red'
})
export const oneActiveDiv =css({
    height:'22vh',
    padding:'8px',
    borderRadius:'10px',
    border:'2px solid #3563E9',
    margin:'0px',
    [mq[0]]:{
        height:'9vh',
        padding:'5px'
    },
})
export const reviewsBox =css({
    display:'inline-flex',
    backgroundColor:'#3563E9',
    color:'white',
    fontWeight:700,
    fontSize:'14px',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:'4px',
    width:'44px',
    height:'28px',
    padding:'0px 25px'
})
export const commentContainer = css({
    margin:'32px 40px',
    width:'95%',
    borderRadius:'10px',
    [mq[0]]:{
        margin:'10px'
    }
})
export const bigcommentContainer = css({
    marginTop:'4vh',
    backgroundColor:'#ffffff',
    padding:'40px',
    width:'95%',
    borderRadius:'10px',
    [mq[0]]:{
        margin:'auto',
        marginTop:'32px',
        padding:'16px',
    }
})
export const singleComment = css({

    height:'fit-content',
    marginBottom:'4vh'
})
export const commentHead =css({
    display:'flex',
    justifyContent:'space-between',
})
export const commentBody =css({
    fontWeight:400,
    lineHeight:'200%',
    fontSize:'14px',
    margin:'0px',
    color:'#596780',
    fontFamily:'Plus Jakarta Sans',
    [mq[0]]:{
        fontSize:'12px'
    }
})
export const commentName =css({
    fontFamily:'Plus Jakarta Sans',
    fontWeight:700,
    fontSize:'20px',
    lineHeight:'150%',
    margin:'8px 0px'
})
export const commentTitle=css({
    fontWeight:500,
    fontSize:'14px',
    lineHeight:'150%',
    color:'#90A3BF',
    margin:'10px 0px'

})
export const commentDate=css({
    fontWeight:500,
    fontSize:'14px',
    lineHeight:'150%',
    color:'#90A3BF',
    margin:'0px',
    textAlign:'right',
    margin:'8px 4px'
})
export const btn2Style =css({
    margin:'0px 40% 0px 45%',
    textTransform:'none',
    [mq[0]]:{
        margin:'0px 35%'
    }
})
export const revText =css({
    fontFamily:'Plus Jakarta Sans',
    fontWeight:600,
    fontSize:'20px'
})
export const allCateContainer=css({
    margin:'20px'
})
export const aCategory =css({
    backgroundColor:'#ffffff',
    height:'10vw'
})
export const allItems =css({
    display:'grid',
    gridTemplateColumns:'1fr 1fr 1fr'
})
export const tagImg =css({
    paddingRight:'5px'
})
