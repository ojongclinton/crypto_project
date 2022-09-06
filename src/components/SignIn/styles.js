import { css,Global } from '@emotion/react'

export const signUpDiv=css({
    display:'flex',
    justifyContent:'space-around',
    height:'fit-content',
    transition:'2s',
})
export const signInDiv=css({
    display:'flex',
    justifyContent:'space-around',
    height:'fit-content',
})

export const backgroundUp=css({
    backgroundColor:'#5a48fa',
    position:'absolute',
    height:'60%',
    width:'30%',
    zIndex:'-4',
    transform:'scale(3) ',
    borderRadius:'10000px',
    transition:'2s'
})

export const backgroundIn=css({
    backgroundColor:'#5a48fa',
    position:'absolute',
    height:'60%',
    width:'30%',
    zIndex:'-4',
    transform:'translate(200%,0) scale(3)',
    borderRadius:'10000px',
    transition:'2s'
})
export const svgImage =css({
    position:'relative',
    height:'50vh',
    width:'90vh',
    display:'block'
})
export const svgImage1 =css({
    position:'relative',
    top:'10%',
    left:'40%',
    height:'50vh',
    width:'90vh',
    display:'block'
})