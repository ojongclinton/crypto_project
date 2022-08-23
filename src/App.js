import React from 'react'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MarketPlace from './components/MarketPlace/MarketPlace';
import Home from './components/Home/Home';
import Developper from './components/Developper/Developper';
import Help from './components/Help/Help';
import NotFound from './components/NotFound/NotFound';
import { Outlet, Routes,Route} from 'react-router-dom'
import { DashBoard } from './components/DashBoard/DashBoard';



function App() {
  return (
    <div>
      <Header/>
        <div>
            <Routes>
              <Route path='/Dashboard' element={<DashBoard/>}></Route>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/Developper' element={<Developper/>}></Route>
              <Route path='/Help' element={<Help/>}></Route>
              <Route path='/MarketPlace' element={<MarketPlace/>}></Route>
              <Route path='*' element={<NotFound/>}></Route>
            </Routes>
        </div>
      <Footer/>
    </div>
  );
}

export default App;
