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
          style={{ backgroundFit: "cover" }}
        >
          <div className="value-main-image-content">
            <h1 style={{ width: "55%" }}>Let us Help You Find Yours</h1>
            <a href="https://www.instagram.com/crystalsbyus/">
              <Button label="Learn More" />
            </a>
          </div>
        </BackgroundImage>
      </div>
    </section>
  )
}

export default ValueProp
