import { css, Global } from "@emotion/react";
import { mq } from '../../Home/GlobalStyles'

export const mainContainer =css({
    margin:'10px',
    [mq[0]]:{
        marginTop:'10vh'
    }
})
export const testThis = css({
    margin:'0px',
    padding:'0px',
    fontFamily:'SF Pro Display',
    fontSize:'25px',
    fontWeight:600,
    lineHeight:'24px',
    color:'#1A1D1F'
})

export const boxContainer = css({
    backgroundColor:'white',
    borderRadius:'7px',
    padding:'30px 20px',
    '& label':{
        display:'block',
        color:'#5E6191',
        marginBottom:'7px',
        fontFamily:'Poppins'
    },
    [mq[0]]:{
        marginTop:'0vh'
    }
})
export const Big50inputStyle = css({
    border:'1px solid #EAEAF0',
    borderRadius:'7px',
    height:'45px',
    width:'100%',
    [mq[0]]:{
        width:'100%'
    }
})
export const inputBoxContainer =css({
    width:'80%',
    padding:'15px 45px',
    [mq[0]]:{
        width:'100%',
        padding:'10px'
    }
})
export const selectStyle =css({
    border:'1px solid #EAEAF0',
    height:'45px',
    padding:'10px',
    color:'#04063D',
    borderRadius:'7px',
})
export const serviceDetailsBox =css({
    border: '1px solid #EAEAF0',
    borderRadius:'8px',
    padding:'10px',
    [mq[0]]:{
        border:'none',
        padding:'0px'
    }

})
// export const subBox =css({
    
// })
export const uploadImageSection =css({

})
export const itemdescriptionSection =css({
    display:'grid',
    gridTemplateColumns:'1fr 1fr',
    gap:'10px'
})
export const img_upload =css({
    height:'20vh',
    borderRadius:'10px'
})
export const blurryP =css({
    margin:'5px',
    color:'#5E6191',
    lineHeight:'normal',
    fontFamily:'Poppins'
})
export const small50inputStyle = css({
    border:'1px solid #EAEAF0',
    borderRadius:'7px',
    height:'35px',
    width:'100%',
    [mq[0]]:{
        height:'45px',
        
    }
})
export const textArea =css({
    resize:'none',
    width:'100%',
    border:'1px solid #EAEAF0',
    borderRadius:'7px',
})
export const addMilstone =css({
    marginTop:'5vh'
})

export const addMilstoneBtn =css({
    marginLeft:'auto',
    display:"flex",
    marginTop:'5vh',
    justifyContent:'right',
    cursor:'pointer',
    width:'fit-content',
    fontFamily:'Poppins',
    '& p,.MuiSvgIcon-root':{
        color:'#64748B',
    },
    '&:hover':{
        '& p,.MuiSvgIcon-root':{
            color:'#5a48fa',
        },
    }
})

