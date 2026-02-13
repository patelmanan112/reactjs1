import { useState } from 'react'
import { store } from './redux/store.js'
import { Counter } from './features/counter/Counter.jsx'
import Cart from './features/cart/Cart.jsx'
import UserList from './features/apiThunk/userList.jsx'
import './App.css'
import  Count  from './features/count/Count.jsx'
// import {BrowserRouter , Routes , Route} from 'reaxt-rouer-dom'
import { BrowserRouter,  Routes, Route } from 'react-router-dom'
import Food from './features/apiThunk1/Food.jsx'
import Movie from './features/apiThunk2/Movie.jsx'
import Recipe from './features/apiThunk3/Recipe.jsx'
import Home from './components/Home.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/food' element={<Food/>}></Route>
      <Route path='/movie' element={<Movie/>}></Route>
      <Route path='/recipe' element={<Recipe/>}></Route>
    </Routes>
    </BrowserRouter>
 {/* <Counter/> */}
 {/* <Cart/> */}
 {/* <Count/> */}
 {/* <Food/> */}
{/* <Movie/> */}
{/* <Recipe/> */}
 {/* <UserList/> */}
    </>
  )
}

export default App
