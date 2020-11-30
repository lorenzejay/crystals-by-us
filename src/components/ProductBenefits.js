import React from "react"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image/withIEPolyfill"
import { graphql, useStaticQuery } from "gatsby"

const ProductBenefits = props => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "crystal1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, maxHeight: 500, quality: 85) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image2: file(relativePath: { eq: "crystal2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, maxHeight: 500, quality: 85) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image3: file(relativePath: { eq: "crystal3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, maxHeight: 500, quality: 85) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image4: file(relativePath: { eq: "crystal4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, maxHeight: 500, quality: 85) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const image1 = data.image1.childImageSharp.fluid
  const image2 = data.image2.childImageSharp.fluid
  const image3 = data.image3.childImageSharp.fluid
  const image4 = data.image4.childImageSharp.fluid

  return (
    <section className="product-benefits">
      <div className="product-benefits-content">
        <h1>Each Crystal has meaning.</h1>
        <div className="product-benefits-row-1">
          <Img
            fluid={image1}
            style={{ height: 700, width: 500 }}
            objectFit="cover"
          />
          <Img
            fluid={image2}
            style={{ height: 450, width: 400 }}
            objectFit="cover"
          />
        </div>
        <div className="product-benefits-row-2">
          <Img
            fluid={image4}
            style={{ height: 500, width: 350 }}
            objectFit="cover"
          />
          <Img
            fluid={image3}
            style={{ height: 600, width: 450 }}
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  )
}

export default ProductBenefits
