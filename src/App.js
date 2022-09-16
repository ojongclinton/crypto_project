/** @jsxImportSource @emotion/react */
import { css,keyframes,Global } from '@emotion/react'
import React from 'react'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MarketPlace from './components/MarketPlace/MarketPlace';
import Home from './components/Home/Home';
import Developper from './components/Developper/Developper';
import Help from './components/Help/Help';
import NotFound from './components/NotFound/NotFound';
import {Routes,Route} from 'react-router-dom'
import { DashBoard } from './components/DashBoard/DashBoard';
import { SignIn } from './components/SignIn/SignIn';



function App() {
  return (
    <div>
      
      {/*Emotion was the prefered styling use... The Global component here is to define global styles...such as the font family for the whole website as you can see here*/}
      <Global
      styles={css`
        * {
          font-family:'Inter'
        }
      `}
    />
      <Header/>
        <div>
            <Routes>
               <Route path='/Dashboard' element={<DashBoard/>}></Route> 
              <Route path='/' element={<Home/>}></Route>
              <Route path='/MarketPlace' element={<MarketPlace/>}></Route>
              {/* <Route path='/Developper' element={<Developper/>}></Route>
              <Route path='/Help' element={<Help/>}></Route>
              <Route path='/signIn' element={<SignIn/>}></Route>
              <Route path='*' element={<NotFound/>}></Route> */}
            </Routes>
        </div>
       <Footer/>
    </div>
  );
}

export default App;
