import { css,keyframes } from '@emotion/react'
import { mq } from '../../Home/GlobalStyles'

export const contractsGraph=css({
    height:'fit-content',
    padding:'2vh',
    margin:'0vh',
    backgroundColor:'#FFFFFF',
    marginBottom:'2vh',
    borderRadius:'10px',
    width:'95%',
    overflowX:'scroll',
    overflowY:'hidden',
    [mq[1,2,3]]:{
        padding:'1vh',
        width:'95%',
        margin:'0px',
        height:'fit-content',
    overflowY:'hidden',
        
    },
    [mq[0]]:{
    boxShadow: '0px 5.89381px 5.85841px 5px #eeeeee',
    width:'95%',
    padding:'2vh',
    overflow:'auto',
    margin:'auto',
    marginTop:'3vh',
    marginBottom:'19px',
    height:'fit-content',
}
})

export const graphContainer =css({
    width:'90vh',
    height:'61vh',
    padding:'1vh',
    margin:'0px',
[mq[1,2,3]]:{
    width:'100%',
    height:'40vh',
    padding:'1vh',
},
[mq[0]]:{
    width:'100%',
    padding:'0vh',
    height:'60vh',
    padding:'0px'
}
})

export const topSales=css({
    marginBottom:'2vh',
    display:'flex', 
    justifyContent:'space-between',
    marginTop:'0px',
    [mq[0]]:{
        justifyContent:'space-around',
        marginTop:'19px'
    }
})

export const overviewFirstRow =css({
    display:'flex',
    padding:'0px',
    justifyContent:'space-around',
    [mq[1,2,3]]:{
        display:'flex',
        justifyContent:'space-between',
    },
    [mq[0]]:{
    display:'block',
    marginBottom:'25px'
}
})
export const overviewRow1 =css({
    width:'40%',
    height:'fit-content',
    backgroundColor:'#ffffff',
    borderRadius:'10px',
    margin:'1vh',
    marginBottom:'0px',
    paddingLeft:'1%',
    paddingTop:'5vh',
    display:'flex',
    justifyContent:'space-between',
    [mq[1,2,3]]:{
        width:'32%',
        margin:'0px',
        padding:'10px'
    },
    [mq[0]]:{
    paddingLeft:'4%',
    paddingTop:'5vh',
    width:'96%',
    margin:'1vh',
    marginTop:'10px',
    border: '1px solid #D5D0FD',
    boxShadow: '0px 2.89381px 5.85841px 2px #eeeeee',
}
})
export const overviewSecondRow =css({
    display:'flex',
    justifyContent:'space-between',
    padding:'0px',
    margin:'3vh 2vh',
    [mq[1,2,3]]:{
    margin:'0px',
    marginTop:'10px'
    },
    [mq[0]]:{
    display:'grid',
    gridTemplateColumns:'1fr 1fr',
    margin:'0vh 2.5vh',
    gap:'1.5vh',
    marginBottom:'24px'  
}

})
export const overviewRow2 =css({
    width:'15%',
    height:'fit-content',
    backgroundColor:'#ffffff',
    borderRadius: '0px 0px 9.32674px 9.32674px',
    display:'flex',
    justifyContent:'space-between',
    alignItems:'flex-start',
    paddingTop:'10px',
    [mq[1,2,3]]:{
        width:'fit-content',
        marginTop:'10px',
        padding:'5px',
        marginRight:'5px'
    },
    [mq[0]]:{
    boxShadow: '3px 5.45645px 5.4582px 2.4582px  #eeeeee',
    minWidth:'160px',
    height:'76px',
    padding:'10px',
}
})
export const ovAmtStyle =css({
    color:'#64748B',
    fontSize:'4.26vh',
    marginLeft:'1.5vh',
    [mq[1,2,3]]:{
        marginLeft:'5px'
    },
    [mq[0]]:{

    }
})
export const ovNameStyle = css({
    fontSize:'10px',
    marginLeft:'1vh',
    width:'100%',
    [mq[1,2,3]]:{
        margin:'1px',
        padding:'0px',
        fontSize:'10px',
    },
    [mq[0]]:{
        marginTop:"10px",
        fontSize:'12px'
    }
})
export const overviewThirdRow=css({
    display:'flex',
    justifyContent:'space-between',
    margin:'2vh',
[mq[1,2,3]]:{
    margin:'2vh 0px'
},
    [mq[0]]:{
    display:'block',
    margin:'0px 0px',
    backgroundColor:'#ffffff'
}
})
export const resolvedBlock=css({
    display:'flex',
    justifyContent:'space-between',
    [mq[1,2,3]]:{
        padding:'0px',
        margin:'0px',
        justifyContent:'space-around',
    },
    [mq[0]]:{
    width:'100%',
    display:'grid',
    gridTemplateColumns:'1fr 1fr',
    gap:'0vh',
    padding:'0vh 0vh 1vh 2vh',
    marginTop:'0px'
}
})
export const smallWhiteDiv =css({
    height:'fit-content',
    width:'100%',
    backgroundColor:'#ffffff',
    borderRadius: '5px',
    padding:'10px 0px',
    marginBottom:'2vh',
    width:'100%',
    [mq[0]]:{
    width:'95%',
    margin:'auto',
    border: '1px solid #DEDAFB',
    borderRadius:'10px',
    boxShadow: '0px 5.89381px 5.85841px 5px #eeeeee'
}
})
export const smallWhiteDiv2 =css({
    height:'14vh',
    width:'27vh',
    borderRadius: '0px 0px 9.32674px 9.32674px',
    padding:'1vh',  //set to 1vh
    margin:'3vh 1vh 0vh 2vh',
    backgroundColor:'#ffeeee',
    borderTop:'3px solid #FF6A55',
    padding:'0px',
    display:'flex',
    justifyContent:'space-evenly',
    [mq[0]]:{
    margin:'0px',
    width:'90%',
    boxShadow: '0px 2.89381px 5.85841px 2px #eeeeee',
    marginTop:'0px',
    height:'fit-content',
}
})
export const smallWhiteDiv3 =css({
    height:'14vh',
    width:'27vh',
    borderRadius: '0px 0px 9.32674px 9.32674px',
    padding:'1vh',  //set to 1vh
    margin:'3vh 1vh 0vh 2vh',
    backgroundColor:'#ffffff',
    borderTop:'3px solid #5a48fb',
    padding:'0px',
    display:'flex',
    justifyContent:'space-evenly',
    [mq[0]]:{
        margin:'0px',
    width:'22vh',
    height:'fit-content',
    boxShadow: '0px 2.89381px 5.85841px 2px #eeeeee',
    marginTop:'0px'
}
})

export const smallerWhiteDiv =css({
    width:'47%',
    height:'fit-content',
    backgroundColor:'#ffffff',
    borderRadius: '5px',
    padding:'1vh',  //set to 1vh
    margin:'0px',
    [mq[1,2,3]]:{
        padding:'0px'
    },
    [mq[0]]:{
    width:'43%',
    height:'80%',
    paddingLeft:'0px',
    border: '1px solid #D5D0FD',
    boxShadow: '0px 2.89381px 5.85841px 2px #eeeeee',
    paddingBottom:'3vh'
}
})

export const feedBackContainer =css({
    backgroundColor:'#ffffff',
    width:'60%',
    padding:'2vh',
    borderRadius:'10px',
    height:'93vh',
    [mq[1,2,3]]:{
        width:'100%',
        padding:'0px',
        margin:'2vh 4vh',
        marginLeft:'0px',
        height:'fit-content',
    }
})
export const dataChip =css({
    color:'#8E59FF',
    fontWeight:700,
    fontSize:'12px',
    display:'flex',
    backgroundColor:'#efedff',
    width:'fit-content',
    textAlign:'center',
    padding:'5px',
    borderRadius:'5px',
    [mq[1,2,3]]:{
        textAlign:'center',
        padding:'0px'
    },
    [mq[0]]:{
    marginTop:'0vh',
    textAlign:'center',
    padding:'5px',
}
})
export const arrowChip =css({
    margin:'0px',

})

export const spanText =css({
    marginTop:'auto',
    marginBottom:'auto',
    [mq[0]]:{
    fontSize:'10px'
}
})
export const OviconStyle =css({
    color:'#5a48fb',
    backgroundColor:'#e6e7ff',
    padding:'15px',
    borderRadius:'1000px',
    paddingTop:'auto',
    display:'flex',
    justifyContent:'left',
    width:'fit-content',
    [mq[1,2,3]]:{
        padding:'8px'
    },
    [mq[0]]:{
    padding:'15px',
    marginBottom:'2vh'
}
})
export const OviconStyle2 =css({
    color:'#5a48fb',
    backgroundColor:'#e6e7ff',
    padding:'5px',
    borderRadius:'1000px',
    paddingTop:'auto',
    display:'flex',
    margin:'0px',
    marginTop:'0.5vh',
    marginRight:'1vh',
    [mq[1,2,3]]:{
        padding:'3px',
        margin:'0px',
    },
    [mq[0]]:{
    
    }
})
export const bigTitle =css({
    padding:'0px',
    margin:'0px',
    lineHeight:'6vh',
    fontSize:'20px',
    [mq[1,2,3]]:{
        fontSize:'15px'
    },
    [mq[0]]:{
    fontSize:'30px',
    lineHeight:'0px',
    color:'#04063D'
}
})
export const smallTitle = css({
    fontSize:'3.15vh',
    fontWeight:500,
    color:'#1A1D1F',
    [mq[0]]:{
    fontSize:'20.292px',
    color:'#04063D'
}
})
export const cusSmallTitle=css({
    textAlign:'center',
    padding:'1vh 0px',
    [mq[0]]:{
        textAlign:'left',
        padding:'3vh 5vh',
        paddingTop:'6vh',
        fontSize:'40px',
        fontWeight:'500'
    }
})
export const cusSmallTitle2=css({
    textAlign:'left',
    paddingLeft:'10px',
    [mq[0]]:{
        padding:'2vh 5vh',
        fontSize:'40px',
        fontWeight:'500'
    }
})
export const smallerTitle = css({
    fontSize:'2.9vh',
    fontWeight:500,
    color:'#1A1D1F',
    lineHeight:'normal',
    [mq[1,2,3]]:{
        padding:'8px 0px'
    },
    [mq[0]]:{
    color:'#04063D',
    fontSize:'16px',
    fontWeight:500,
    padding:'8px 10px'
}
})
export const nameDiv=css({
    display:'flex',
    justifyContent:'space-around',
    [mq[1,2,3]]:{
        justifyContent:'flex-start'
    }
})
export const exclamContainer = css({
    backgroundColor:'#C4C2D3',
    borderRadius:'1000px',
    display:'flex',
    padding:'1vh',
    margin:'0.5vh',
    height:'fit-content',
    width:'fit-content',
    [mq[1,2,3]]:{
        display:'none'
    },  
    [mq[0]]:{
    display:'contents',
    margin:'-3px 10px',
    padding:'0px',
    height:'25px',
    width:'25px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
}
})
export const exclamIcon = css({
    transform:'rotate(180deg)',
    color:"#FFFFFF",
    fontSize:'x-small',
})
export const barChart=css({
    padding:'0px 0px 0px 10px',
    height:'50%',
    width:'100%',
[mq[1,2,3]]:{
    padding:'0px'
},
[mq[0]]:{
    padding:'0px 0px 0px 10px',

}
})
export const trophy =css({
    height:'5vh',marginTop:'0.5vh',
    [mq[1,2,3]]:{
        height:'35px'
    },
    [mq[0]]:{
        margin:'0px',height:'8vh',marginTop:'-9px',
    }
})
export const smallIcon =css({
    backgroundColor:'#efedff',
    height:'fit-content',
    color:'#5a48fb',
    borderRadius:'1000px',
    padding:'1.5vh',
    display:'flex',
    marginTop:'4vh',
[mq[1,2,3]]:{
    padding:'1vh',
    marginTop:'20px',
    

},
    [mq[0]]:{
    fontSize:'smaller',
    padding:'1vh',
    marginTop:'4vh',
}
})

export const Hcss=css({
    [mq[1,2,3]]:{
        fontSize:'30px'
    },
    [mq[0]]:{
    fontSize:'48px',
    margin:'0px',
    padding:'opx'
}
})
export const lineChartDiv=css({
    width:'40%',
    height:'15vh',
    margin:'0px',
    padding:'0px',
    marginTop:'auto',
    marginRight:'3vh',
    marginBottom:'auto',
    [mq[1,2,3]]:{
        width:'90px',
        height:'90px',
        margin:'auto',
    },
    [mq[0]]:{
    height:'18vh',
    width:'18vh',
    margin:'auto'
    }

})
