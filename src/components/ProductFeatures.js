import React from "react"
import Img from "gatsby-image/withIEPolyfill"
import { graphql, useStaticQuery } from "gatsby"
import ProductCard from "./ProductCard"

const ProductFeatures = props => {
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
    <div className="product-features">
      <h1>Our Product Features</h1>
      <div className="core-features">
        <ProductCard imageSrc={image1} pName="Green Flurite" pPrice="10" />
        <ProductCard imageSrc={image2} pName="Rose Quartz" pPrice="10" />
        <ProductCard imageSrc={image3} pName="Obsedian" pPrice="10" />
        <ProductCard imageSrc={image4} pName="Opal" pPrice="10" />
        <ProductCard imageSrc={image1} pName="Amethyst" pPrice="10" />
      </div>
    </div>
  )
}

export default ProductFeatures
