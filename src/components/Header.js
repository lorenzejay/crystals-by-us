import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import Backdrop from "./BackdropSection"

const Header = ({ siteTitle }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scroll, setScroll] = useState(0)
  const toggle = () => setIsOpen(!isOpen)

  let navClasses = "nav-links"
  let navItemClasses = "nav-link-item"
  let burgerClass = "burger"
  let backdropClass = "backdrop"

  if (isOpen) {
    navClasses = "nav-links nav-active"
    navItemClasses = "nav-link-item-active"
    burgerClass = "burger toggle"
    backdropClass = "backdrop backdrop-active"
  }

  useEffect(() => {
    window.addEventListener("scroll", function (event) {
      const scroll = this.scrollY
      setScroll(scroll)
    })
  }, [])

  return (
    <header>
      <Backdrop activeClass={backdropClass} click={toggle} />
      <nav className="navbar transparent navbar-inverse">
        <div
          className={`nav-belt ${
            scroll === 0 ? "nav-content-pop" : "nav-content-display-none "
          }`}
        >
          <div>
            <h4>
              <Link className="logo" to="/">
                <div>
                  <h3>{siteTitle}</h3>
                  <p>Based in San Fernando Valley</p>
                </div>
              </Link>
            </h4>
          </div>
          <ul className={navClasses}>
            <li className={navItemClasses}>
              <a href="#products" onClick={toggle}>
                Products
              </a>
            </li>
            <li className={navItemClasses}>
              <a href="https://www.instagram.com/crystalsbyus/">Instagram</a>
            </li>
          </ul>
          <div className={burgerClass} onClick={toggle}>
            <div className="burger-line-1"></div>
            <div className="burger-line-2"></div>
            <div className="burger-line-3"></div>
          </div>
        </div>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
