import { useState } from 'react'
import { store } from './redux/store.js'
import { Counter } from './features/counter/Counter.jsx'
import Cart from './features/cart/Cart.jsx'
import UserList from './features/apiThunk/userList.jsx'
import './App.css'
import  Count  from './features/count/Count.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 {/* <Counter/> */}
 {/* <Cart/> */}
 <Count/>
 {/* <UserList/> */}
    </>
  )
}

export default App
