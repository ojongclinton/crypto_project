import { css,Global } from '@emotion/react'
import {styled} from '@mui/material'
import { mq } from '../GlobalStyles'

export const whyChoose =css({
    textAlign:'center',
    display:'flex',
    justifyContent:'center'
})
export const reasonBox =css({
    display:'flex',
    justifyContent:'space-around',
    height:'52vh',
    width:'90%',
    marginLeft:'auto',
    marginRight:'auto',
    paddingTop:'0vh',
    [mq[1,2,3]]:{
        display:'grid',
        gridTemplateColumns:'1fr 1fr',
        height:'fit-content',
        gap:'20px'
    },
    [mq[0]]:{
        display:'block',
        height:'fit-content',
    }
})
export const viewMore =css({
    color:'#8B8BFD',
    paddingTop:'4vh',
    display:'flex',
    justifyContent:"center",
    fontSize:'18px',
    margin:'0px',
    [mq[0]]:{
        paddingTop:'1vh'
    }
})
export const FviewMore =css({
    paddingTop:'4vh',
    display:'flex',
    justifyContent:"center",
    fontSize:'18px',
    margin:'0px',
    color:'white',
})
export const MviewMore =css({
    paddingTop:'1vh',
    display:'flex',
    justifyContent:"left",
    fontSize:'18px',
    margin:'0px',
    color:'inherit',
})
const blurryBack2 =css`
width: 30.5vh;
height: 30.5vh;
opacity: 0.5;
filter: blur(200px);
position:absolute;
${mq[1,2,3]}{
    display:none;
}
${mq[0]}{
    display:initial;
    filter:blur(200px);
}
`
export const shape7=css`
${blurryBack2};
background: #4DE6FC;
left: 90.26vh;
top: 250vh;
z-index:-1;
${mq[0]}{
    top:300vh;
    left:20%;
}
`
export const shape8=css`
${blurryBack2};
background:#AA80F9;
left: 90.26vh;
top: 250vh;
z-index:-1;
${mq[0]}{
    top:300vh;
    left:20%;
}
`
export const shape9=css`
${blurryBack2};
background:#5A48FA;
left: 90.26vh;
top: 250vh;
z-index:-1;
${mq[0]}{
    top:300vh;
    left:20%;
}
`
export const whyTitle=css({
    margin:'5vh 0vh',
    [mq[1,2,3]]:{
        margin:'1vh'
    }
    ,
    [mq[0]]:{
        marginBottom:'0px',
    }
})
export const reasonText =css({
    height:'22.53vh',
    [mq[3]]:{
        height:'fit-content'
    },
    [mq[2]]:{
        height:'fit-content'
    },
    [mq[1]]:{
        height:'fit-content'
    },
    [mq[0]]:{
      height:'fit-content'
    }
})