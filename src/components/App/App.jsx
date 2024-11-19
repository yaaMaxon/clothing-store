import { Routes, Route, NavLink } from "react-router-dom";
import Cart from "../../views/Cart/Cart";
import Home from "../../views/Home/Home";
import Reviews from "../../views/Reviews/Reviews";
import Information from "../../views/Information/Information";
import Footer from "../Footer/Footer";
import logo from '../../assets/logo.svg';
import css from './App.module.css'

const App = () => {
  return (
    <div>  
    <header className={css.header}>
      <nav className={css.navigation}>
        <NavLink to='/' href="http://" className={css.headerLogo}>
            <img src={logo} alt="Logo" width='39px' height='39px'/>
                    E-Comm
        </NavLink>
        <div className={css.viewsBox}>
         <NavLink to='/' className={({ isActive }) => 
           `${css.navItem} ${isActive && css.active}`}>Home</NavLink>
         <NavLink to='/cart' className={({ isActive }) => 
           `${css.navItem} ${isActive && css.active}`}>Cart</NavLink>
          <NavLink to='/reviews' className={({ isActive }) => 
           `${css.navItem} ${isActive && css.active}`}>Reviews</NavLink> 
          <NavLink to='/information' className={({ isActive }) => 
           `${css.navItem} ${isActive && css.active}`}>Information</NavLink>
        </div>
      </nav>
    </header>
    <div className={css.headerLinkBox}>
      <ul>
        <NavLink to='/' className={css.headerLinkItem}>Home</NavLink>
        <span style={{color: '#C1C8CE', marginRight: '8px', marginLeft: '8px'}}>/</span>
        <NavLink to='/cart' className={({ isActive }) => 
           `${css.headerLinkItem} ${!isActive && css.active}`}>Hot Deal</NavLink>
      </ul>
    </div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/reviews' element={<Reviews/>}/>
      <Route path='/information' element={<Information/>}/>
    </Routes>
    <Footer/>
    </div>
  )
}

export default App
