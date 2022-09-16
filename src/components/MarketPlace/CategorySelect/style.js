/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

export const test=css({
    color:'blue'
})
export const categoryContainer=css({
    position:'sticky',
    top:'5px',
    backgroundColor:'#ffffff',
    width:'90%',
    margin:'auto',
    marginBottom:'3vh',
    paddingBottom:'4vh',
    marginTop:'0px'
})
export const categoriesDiv=css({
    padding:'1vh',
    width:'90%',
    margin:'auto',
    marginTop:'1vh'
})
export const aCategory =css({
    display:'flex',
    justifyContent:'space-between',
    marginTop:'2vh',
    padding:'10px',
    cursor:'pointer',
    transition:'0.4s',
    borderRadius:'10px',
    '&:hover':{
        backgroundColor:'#eeeeee',
        
    }
})
export const nameStyle =css({
    margin:'0px',
    fontSize:'16px',
    color:'#64748B',
    textAlign:'left',
    width:'75%',
    fontWeight:500,

})
export const btnStyle=css({
    width:'85%',
    textTransform:'none',
    padding:'2vh',
    backgroundColor:'#5A48FA',
    fontWeight:'600',
    fontSize:'14px',
    fontFamily:'SF Pro Display'
})