import React from "react"

const Footer = ({ siteTitle }) => {
  return (
    <footer className="footer">
      <div className="footer-belt">
        <div className="company-sign">&copy; 2020 {siteTitle}</div>
        <div className="social-media">
          <a className="footer-email" href="mailto:Crystalsbyus@gmail.com">
            Crystalsbyus@gmail.com
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
