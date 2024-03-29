import React from "react";
import { Link } from "react-router-dom";
import { RiContactsBook2Fill } from "react-icons/ri";

const Navbar = ()=>{
    return(
        <>
           <nav className="navbar navbar-dark navbar-expand-sm" style={{backgroundColor: "#60dae0"}}>
                <div className="container">
                     <Link to={"/"} className="navbar-brand">
                     <RiContactsBook2Fill style={{color:"blue", fontSize:"30px"}} />&nbsp; Contact &nbsp; <span className="fw-bolder" style={{color:"blue"}}>Diary</span>
                     </Link>
                </div>
               
           </nav>
        </>
    )
}
export default Navbar;