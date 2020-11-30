import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const ProductBenefits = props => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "crystal1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, maxHeight: 500, quality: 100) {
            src
          }
        }
      }
      image2: file(relativePath: { eq: "crystal2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, maxHeight: 500, quality: 100) {
            src
          }
        }
      }
      image3: file(relativePath: { eq: "crystal3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, maxHeight: 500, quality: 100) {
            src
          }
        }
      }
      image4: file(relativePath: { eq: "crystal4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, maxHeight: 500) {
            src
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
          <img
            src={image1.src}
            style={{ height: 700, width: 450 }}
            alt="Crystal of various kinds."
          />
          <img
            src={image2.src}
            style={{ height: 450, width: 400 }}
            alt="Crystal of various kinds."
          />
        </div>
        <div className="product-benefits-row-2">
          <img
            src={image4.src}
            style={{ height: 500, width: 350 }}
            alt="Crystal of various kinds."
          />
          <img
            src={image3.src}
            style={{ height: 600, width: 450 }}
            alt="Crystal of various kinds."
          />
        </div>
      </div>
    </section>
  )
}

export default ProductBenefits
