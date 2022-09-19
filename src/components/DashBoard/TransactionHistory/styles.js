import { css,Global } from '@emotion/react'
import { mq } from '../../Home/GlobalStyles'


export const transacContainer =css({
    backgroundColor:'white',
    borderRadius:'7px',
    margin:'3vh',
    padding:'3vh 3vh 3vh 3vh',
    [mq[1,2,3]]:{
        margin:'auto',
        padding:'10px',
        width:"fit-content",
        marginRight:'20px'
    },
    [mq[0]]:{
        border:'1px solid #DEDAFB',
        margin:'3vh 0vh 0vh 1vh',
        padding:'5px 0vh 0vh 5px',
        width:'95%',
        boxShadow:'0px 2.89381px 5.85841px 2px #eeeeee'
    }

}) 
export const telBigText=css({
    fontSize:'18px',
    fontWeight:'600',
    margin:'0px',
    fontFamily:'Inter',
})
export const telPrice =css({
    margin:'0px',
    color:'#83BF6E',
    backgroundColor:'#EAFAE5',
    width:'fit-content',
    height:'fit-content',
    padding:'2px',
    borderRadius:'4px',
    fontWeight:'600',
    marginRight:'2vh'
})
export const itemName =css({
    padding:'0px',
    margin:'0px',
    color:'#9A9FA5',
    fontSize:'15px',
    fontWeight:'600',
    textAlign:'left',
    width:'130px'
})
export const bigText =css({
    margin:'0px',
    marginLeft:'20px',
    fontSize:'15px',
    fontWeight:700
})
export const smallText =css({
    margin:'0px',
    marginLeft:'20px',
    color:'#6F767E',
    fontSize:'13px'
})
export const tdPStyles =css({
    backgroundColor:'#efefef',
    margin:'4px',
    verticalAlign:'top',
    borderRadius:'5px',
    textAlign:'center',
    fontWeight:700
})
export const btnStyle =css({
    textTransform:'none',
    border:'2px solid #5A48FA',
    borderColor:'#5A48FA',
    fontWeight:700,
    borderRadius:'10px',
    [mq[0]]:{
        color:'#5A48FB',
        padding:'10px'
    }
})
export const theadStyle = css({
    textAlign:'left'
})