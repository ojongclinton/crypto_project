import { css } from "@emotion/react";
import { border, borderRadius } from "@mui/system";
import { mq } from '../GlobalStyles'

export const faqSearch = css({
    textAlign:'center',
    [mq[0]]:{
        marginBottom:'42px'
    }
})
export const searchBox =css({
    marginTop:'6vh',
    marginRight:'auto',
    marginLeft:'auto',
    backgroundColor:'white',
    width:'fit-content',
    padding:'10px',
    paddingTop:'0px',
    border:'1px solid #d0d5dd',
    borderRadius:'10px',
    [mq[0]]:{
        width:'80%',
        textAlign:'left'
    }
})
export const searchIcon=css({
color:'#667085',
margin:'0px',
padding:'0px',
position:'relative',
fontSize:'30px',
top:'10px',
right:'3px'
})
export const searchInput=css({
    margin:'0px',

    backgroundColor:'white',
    '&:focus-within':{
        borderBottom:'2px solid #667085'
    }
})

export const solutionIcon =css({
    color:'#5a48fb',
    backgroundColor:'#e6e7ff',
    padding:'15px',
    borderRadius:'1000px',
    paddingTop:'auto',
    display:'flex',
    justifyContent:'center',
    width:'fit-content',
    marginLeft:'auto',
    marginRight:'auto',
    [mq[0]]:{
        margin:'auto',
        marginBottom:'3vh',
    }

})

const blurryBack =css`
width: 30.5vh;
height: 30.5vh;
opacity: 0.5;
filter: blur(140px);
position:absolute;
`

export const shape1=css`
${blurryBack};
z-index:-10;
background:#4DE6FC;
left:60vh;
`
export const shape2=css`
${blurryBack};
background:#5A48FA;
left: 80vh;
`
export const shape3=css`
${blurryBack};
background:#AA80F9;
left:100vh;
`
export const searchAnswers =css({
    margin:'10vh 6vh 5vh 4vh',
    [mq[0]]:{
        margin:'1vh'
    }
})