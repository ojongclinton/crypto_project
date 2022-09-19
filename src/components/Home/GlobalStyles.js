import { css,Global } from '@emotion/react'
import {Paper, styled} from '@mui/material'

{/*This file contains styled components and styles used by all files in the home component.....be sure of the effect of your actions*/}

//The different breakPoints to change styles on the different screens
//E.G to target screens with a max sixw of 567px, use mq[0]

const breakpoints = [576, 768, 992, 1200]
export const mq = breakpoints.map(bp => `@media (max-width: ${bp}px)`)

export const Item = styled(Paper)(({ theme }) => ({
    color: theme.palette.text.secondary,
    height: 'fit-content',
    width:'fit-content',
    padding:'4vh',
    [mq[1,2,3]]:{
      padding:'2vh'
    }
    
  }));
  export const StyledBox = styled(Paper)(({ theme,index }) => ({
    color: index ==0?'white':theme.palette.text.secondary,
    background:index==0?'linear-gradient(rgba(78, 231, 255, 1),rgba(170, 128, 249, 1))':'',
    height: 'fit-content',
    width:'40vh',
    padding:'4vh',
    textAlign:'center',
    [mq[1,2,3]]:{
      width:'fit-content',
    padding:'5px',
    height:'fit-content',
    margin:'0px',
    marginBottom:'10%'
  },
    [mq[0]]:{
      width:'90%',
      margin:'auto',
      marginTop:'42px',
      height:'fit-content',
      padding:'4vh'
    }
  }));
export const H11 = styled('h1')({
    color: '#04063D',
    fontWeight: '600px',
    fontSize: '48px',
    lineHeight: '64px',
    margin:'0px',
    padding:'0px',
    [mq[1,2,3]]:{
      fontSize:'35px',
      lineHeight:'normal'
    },
    [mq[0]]:{
      fontSize:'4vh',
      lineHeight:'normal',
      margin:'2vh'
    }
  })
export const H22 = styled('h2')({
    color: '#04063D',
    fontWeight: '600',
    fontSize: '20px',
    padding:'0px',
    margin:'0px',
    lineHeight: '34px',
    [mq[1,2,3]]:{
      fontSize:'15px',
      lineHeight:'normal'
    },
    [mq[0]]:{
      fontSize:'16px',
      lineHeight:'normal',
      fontWeight:'600'
    }
  })
 export const H33 = styled('h2')(({index})=>({
    color:index==0?'white':'#282D6C',
    fontWeight: '600px',
    fontSize: '17px',
    padding:'0px',
    margin:'0px',
    lineHeight: '34px',
    [mq[0]]:{
      fontSize:'16px',
      lineHeight:'normal',
      fontWeight:'600'
    }
  }))

export const blurryBack =css`
width: 40.5vh;
height: 40.5vh;
opacity: 0.5;
filter: blur(200px);
${mq[1,2,3]}{
filter: blur(150px);
width: 10.5vh;
height: 10.5vh;
}
${mq[0]}{
  display:block;
width: 30.5vh;
height: 20.5vh;
border-radius:100px;
  filter:blur(120px);
}
`
export const plainText = css({
color:'#282D6C',
fontWeight:400,
fontSize:'16px',
lineHeight:'160%',
fontStyle:'normal',
margin:'0px',
padding:'0px',
[mq[1,2,3]]:{
  fontSize:'14px'
},
[mq[0]]:{
  fontFamily:'Montserrat Alternates',
  fontStyle:'normal',
}
})

export const whoWeAre= css({
display:'flex',
justifyContent:'space-between',
padding:'0 10vh'
})

export const chipStyle=css({
  color:'#5A48FA',
  backgroundColor:'#dcfbff',
  width:'fit-content',
  [mq[0]]:{
      color:'#4EE9FE ',
      backgroundColor:'#4EE9FF33',
      marginLeft:'auto',
      marginRight:'auto'
  }
})