import { css,Global } from '@emotion/react'

export const loginWrap = css`
padding: 40px 0;
`

export const loginWrapContainer = css`
max-width: 660px;
margin: 0 auto;
padding: 0px 15px;
`

export const h2Span =css`
color: #5A48FA
`

export const checkwrap = css`
display: flex;
justify-content: space-between;
align-items: center;
gap: 10px;
`


export const checkwrap_a = css`
font-weight: 600;
font-size: 16px;
line-height: 120%;
display: flex;
align-items: center;
text-align: right;
color: #5A48FA;
text-decoration:none;
&:hover{
    text-decoration:underline
}
`

export const checkwrap_check_cont = css`
display:flex;

`

export const login_wrap_a=css`
text-decoration: none;
`

export const login_wrap_inputSubmit=css`
width: 100%;
margin-top: 40px
`

export const center_text=css`
text-align: center;
margin-top: 10px
`

export const forget_pass=css`
margin-top: 30px;
`

export const forget_pass_a=css`
padding-left: 5px;
color: #5A48FB;
cursor:pointer;
`

export const login_wrap_a_hover=css`
text-decoration: underline
`

export const login_wrap_form=css`
max-width: 511px;
margin: 20px auto 0;
`

export const error =css`
color:red;
display:block;
margin:10px;
`

export const signup_wrap_container=css`
max-width: 1000px;
margin: 0 auto;
padding: 40px 15px;
`

export const signup_wrap_form=css`
max-width: 900px;
margin: 0 auto;
`

export const signup_wrap_signup_form=css`
margin-top: 30px;
display: flex;
flex-wrap: wrap
`

export const signup_form_signup_input=css`
display: inline-block;
`

export const signup_form_signup=css`
text-align: center
`

export const h2Heading = css`
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 120%;
color: #264653;
margin-bottom:10px;
`

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

export const labelStyles =css`
font-style: normal;
font-weight: 400;
font-size: 13.6619px;
line-height: 160%;
letter-spacing: 0.0975853px;
color: #5E6191;
margin-bottom: 7px;
display: block
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
export const textArea = css`
resize:none
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
