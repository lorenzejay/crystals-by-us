import React from "react"
import Button from "./Button"

const CallToAction = props => {
  return (
    <section className="cta">
      <h1>Our goal is to inspire you to believe.</h1>
      <p>
        We vary in sizes for those who prefer to carry crystals around with
        them, wear them, or display them.
      </p>
      <p>Send us a message on Instagram.</p>
      <a href="https://www.instagram.com/crystalsbyus/">
        <Button label="Lets get you started" />
      </a>
    </section>
  )
}

export default CallToAction
