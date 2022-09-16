/** @jsxImportSource @emotion/react */
import { css,keyframes,Global } from '@emotion/react'
import React from 'react'
import Overview from './Overview/Overview'
import "../../DashBoardStyles.css"
import ScrollButton from '../Home/handleScroll'


export const DashBoard=()=>{
  return (
    <div>
        <ScrollButton/>
        <Overview/>
    </div>
  )
}

