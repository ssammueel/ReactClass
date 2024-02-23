import React from 'react'
import{Link} from "react-router-dom"

const Header = () => {
  return (
    <>
        <nav className="nav">
          <ul>
            <li>
              <Link className='link' to={"/"}>home</Link>
            </li>
            <li>
              <Link className='link' to={"/about"}>about</Link>
            </li>
            <li>
              <Link className='link' to={"/product"}>product</Link>
            </li>
            <li>
              <Link className='link' to={"/service"}>service</Link>
            </li>
            
          </ul>
        </nav>
    </>
  )
}

export default Header