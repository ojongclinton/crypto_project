/** @jsxImportSource @emotion/react */
import { css,keyframes } from '@emotion/react'
import { mq } from '../Home/GlobalStyles'


export const blurryBac3 = css`
width: 80.5vh;
height: 30.5vh;
opacity: 0.5;
filter: blur(120px);
position:absolute;
z-index:-10;
${mq[1,2,3]}{
  display:none;
}
${mq[0]}{
  width: 50.5vh;
  height: 30.5vh;
  width:90%
}
`
export const shape1=css`
${blurryBac3};
background:#5A48FA;
${mq[0]}{
  left:1px;
  bottoms:0px;
}
`
export const shape2=css`
${blurryBac3};
background:#4DE6FC;
${mq[0]}{
  left:1px;
}
`
export const shape3=css`
${blurryBac3};
background:#AA80F9;
${mq[0]}{
  left:1px;
  bottoms:0px;
}
`

export const subCss = css({
  fontSize:'30px',
  width:'100vh',
  textAlign:'center',
  marginLeft:'auto',
  marginRight:'auto',
  [mq[1,2,3]]:{
    width:'100%'
  },
  [mq[0]]:{
    width:'100%',
    fontSize:'24px',
    fontWeight:'600',
    width:'80%'
  }
})
export const subDiv =css({
  display:'flex',
  justifyContent:'center',
  marginTop:'6vh',
  [mq[0]]:{
    flexDirection:'column'
  }
})
export const Emailbox =css({
  marginRight:'3vh',
  backgroundColor:'white',
  padding:'5px',
  border:'1px solid #d0d5dd',
  borderRadius:'5px',
  width:'50vh',
  [mq[1,2,3]]:{
    width:'50%',
    marginRight:'1vh'
  },
  [mq[0]]:{
    margin:'2vh 2vh',
    width:'90%'
  }
})
export const footerLink =css({
  display:'block',
  textDecoration:'none',
  color:'#282D6C',
  width:'30vh',
  fontSize:'15px',
  paddingTop:'25px',
  [mq[1,2,3]]:{
    width:'fit-content'
  }
})
export const footerIcon =css({
  display:'block',
  textDecoration:'none',
  width:'8vh',
  color:'#5A48FA',
})

export const footerContainer =css({
  [mq[1,2,3]]:{
    margin:'5%'
  },
 [mq[0]]:{
     margin:'3vh'
 }
})
export const footerContainer2=css({
        display:'flex',
        justifyContent:'space-around',
        borderBottom: '1px solid rgba(173, 173, 173, .5)',
        marginRight:'auto',
        marginLeft:'auto',
        width:'80%',
        marginTop:'10vh',
        [mq[1,2,3]]:{
          width:'80%',
          margin:'auto',
          marginTop:'3vh'
        },
        [mq[0]]:{
            flexDirection:'column',
            margin:'0px',
            borderBottom:'none',
            marginTop:'0px'
        }
})