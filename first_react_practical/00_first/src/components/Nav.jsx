import React from "react";
import  "./Nav.css"
import Gallery from "./Gallery";
import Link from './Link/Link.jsx'
import Nav1 from './NavBar/Logo.jsx'
function Nav(){
    return(
        <>
           <section>
        <div className="navbar">
            <Nav1/>
         <Link/>
        
        </div>
      </section>
   
        </>
    )
}
export default Nav