import Cart from "../../views/Cart/Cart";
import { Routes, Route, NavLink } from "react-router-dom";
import css from './App.module.css'
import Home from "../../views/Home/Home";

const App = () => {
  return (
    <div>  
    <header className={css.header}>
      <nav className={css.navigation}>
        <NavLink to='/' className={({ isActive }) => 
           `${css.navItem} ${isActive && css.active}`}>Home</NavLink>
        <NavLink to='/cart' className={({ isActive }) => 
           `${css.navItem} ${isActive && css.active}`}>Cart</NavLink>
      </nav>
    </header>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </div>
  )
}

export default App
