import React from 'react'
import{Link} from "react-router-dom"

const Header = () => {
  return (
    <>
        <section className="header">
          <div className="logo">
            <h1>Global product</h1>
          </div>
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

        <div className="contact">
          <button>contact us</button>
        </div>
        </section>
    </>
  )
}

export default Header
