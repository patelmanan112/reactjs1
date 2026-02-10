import { useState } from 'react'
import { store } from './redux/store.js'
import { Counter } from './features/counter/Counter.jsx'
import Cart from './features/cart/Cart.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 {/* <Counter/> */}
 <Cart/>
    </>
  )
}

export default App
