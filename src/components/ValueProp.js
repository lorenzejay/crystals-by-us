import React from "react"
import Button from "./Button"

const ValueProp = props => {
  return (
    <section className="value-prop">
      <div className="value-prop-content">
        <div className="value-main-image">
          <div className="value-main-image-content">
            <h1 style={{ width: "55%" }}>Let us Help You Find Yours</h1>
            <h3>Based in San Fernando Valley</h3>
            <p>-Connie and Jacob</p>
            <a href="https://www.instagram.com/crystalsbyus/">
              <Button label="Learn More" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ValueProp
