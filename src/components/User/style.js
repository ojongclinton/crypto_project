import { css } from "@emotion/react"

export const inputStyles = css`
background: transparent;
	border: 0.975853px solid #EAEAF0;
	border-radius: 7.80683px;
	font-style: normal;
	font-weight: 400;
	font-size: 13.6619px;
	line-height: 100%;
	color: #B4B6CC;
	padding: 16px 20px;
	display: block;
	margin-bottom: 10px;
	width: 100%;
	outline: none;
    &:focus{
        border-color:#5A48FA
    }
    &::placeholder{
        color:#B4B6CC
    }
`
export const inputSubmit = css`
background: #5A48FA;
border-radius: 9.75853px;
display: inline-block;
color: #fff;
padding: 11px 12px 12px;
min-width: 229px;
text-align: center;
text-decoration: none;
transition: 0.3s all;
border: 2px solid #5A48FA;
outline: none;
font-weight: 600;
font-size: 15.6137px;
line-height: 23px;
text-align: center;
letter-spacing: 0.0975853px;
cursor: pointer;

&:hover{
    background: transparent;
	color: #5A48FA
}
`
export const textArea = css`
resize:none
`
export const labelStyles =css`
font-style: normal;
font-weight: 400;
font-size: 13.6619px;
line-height: 160%;
letter-spacing: 0.0975853px;
color: #5E6191;
margin-bottom: 7px;
display: block;

& .check{
    margin:20vh;
}
`
export const col_33_col =  css`
width:calc(33.33% - 20px);
`

export const col_50_col =  css`
width:calc(50% - 20px);
`

export const col_100_col= css`
width:100%;
`

export const colc=css`
display: block;
margin: 0 10px 10px;
`

export const styledH3 = css({
    fontWeight:600,
    fontSize:'23px',
    color:'#282D6C'
})
export const pFadedText=css`
color:#04063D;
`
export const pNotFadedText=css`
font-style: normal;
font-weight: 400;
font-size: 13.6619px;

letter-spacing: 0.0975853px;
color: #5E6191;
margin-bottom: 7px;
display: block
`
export const styledH4 =css({
    fontWeight:400,
    fontSize:'13.66px',
    color:'#04063D'
})