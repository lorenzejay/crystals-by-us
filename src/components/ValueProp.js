import React from "react"
import Button from "./Button"
// import BackgroundImage from "gatsby-background-image"
// import { graphql, useStaticQuery } from "gatsby"

const ValueProp = props => {
  // const data = useStaticQuery(
  //   graphql`
  //     query {
  //       desktop: file(relativePath: { eq: "main.jpg" }) {
  //         childImageSharp {
  //           fluid(quality: 90, maxWidth: 1920) {
  //             ...GatsbyImageSharpFluid_withWebp
  //           }
  //         }
  //       }
  //     }
  //   `
  // )
  // const imageData = data.desktop.childImageSharp.fluid
  return (
    <section className="value-prop">
      <div className="value-prop-content">
        {/* <BackgroundImage
          Tag="section"
          className="value-main-image"
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          <div className="value-main-image-content">
            <h1 style={{ width: "55%" }}>Let us Help You Find Yours</h1>
            <p>-Connie and Jacob</p>
            <a href="https://www.instagram.com/crystalsbyus/">
              <Button label="Learn More" />
            </a>
          </div>
        </BackgroundImage> */}
        <div className="value-main-image">
          <div className="value-main-image-content">
            <h1 style={{ width: "55%" }}>Let us Help You Find Yours</h1>
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
