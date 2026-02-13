import React from 'react'
import {Link} from 'react-router-dom'
function Home() {
  return (
    <div>
    <ul>
        <li> <Link to='/food'>Food</Link></li>
        <li> <Link to='/movie'>Movie</Link></li>
        <li> <Link to='/recipe'>Recipe</Link></li>
        
    
    
    </ul>
    </div>
  )
}

export default Home
