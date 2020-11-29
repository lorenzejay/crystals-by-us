import React from "react"
import Button from "./Button"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const ValueProp = props => {
  const data = useStaticQuery(
    graphql`
      query {
        crystal: file(relativePath: { eq: "main.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )
  const imageData = data.crystal.childImageSharp.fluid

  return (
    <section className="value-prop">
      <div className="value-prop-content">
        <BackgroundImage
          fluid={imageData}
          backgroundColor="#ffffff"
          className="value-main-image"
        >
          <h2>Crystals</h2>
        </BackgroundImage>
        <div className="main-message">
          <h1>Here is our amazing product</h1>
          <p className="main-subtitle">
            Please buy our amazing product. You&apos;re gonna love it. Promise.
          </p>
          <Button label="Get Started" />
        </div>
        <div className="main-photo"></div>
      </div>
    </section>
  )
}

export default ValueProp
