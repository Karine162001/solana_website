import './App.css';
import logo from './objectPic/up/solana.png';
import { SlArrowDown } from "react-icons/sl";
import { Routes, Route, NavLink } from 'react-router-dom';
// Kutakel 1in Eji Amboxj Componentnnerin 1 Js Fileum;
import All from './first/All';
import Footer from './forFooter/Footer';
import Learn from './learnpage/Learn';
import Build from './buildpage/Build';
import Network from './networkpage/Network';
import Community from './community/Community';

function App() {
  return (
    <div className="App">
      <header>
        <section>
          <NavLink to='/'>
            <img src={logo} alt="" />
          </NavLink>
          <ul>
            <NavLink to="/learn">Learn <SlArrowDown /> </NavLink>
            <NavLink to="/build">Build <SlArrowDown /> </NavLink>
            <NavLink to="/network">Network <SlArrowDown /> </NavLink>
            <NavLink to="/community">Community <SlArrowDown /> </NavLink>
          </ul>
        </section>
      </header>
      <Routes>
        <Route path='/' element={<All />}></Route>
        <Route path='/learn' element={<Learn />}></Route>
        <Route path='/build' element={<Build />}></Route>
        <Route path='/network' element={<Network />}></Route>
        <Route path='/community' element={<Community />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;