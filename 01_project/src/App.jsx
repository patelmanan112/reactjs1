import {Link ,Routes , Route } from 'react-router-dom'
import './App.css'
import Post from './components/Post.jsx'
import Product from './components/Product.jsx'
import User from './components/User.jsx'
function App() {

  return (
    <>

    <div>
      <Link to="/Post">Post</Link> <br />
      <Link to="/Product">product</Link> <br />
      <Link to="/User">User</Link><br />
    </div>
 
    <Routes>
      <Route path='/Post' element= {<Post/>}></Route>
      <Route path='/Product' element= {<Product/>}></Route>
      <Route path='/User' element= {<User/>}></Route>
      <Route path='/' element= {[<User/> , <Post/> , <Product/>]}></Route>
    </Routes>
    </>
  )
}

export default App
