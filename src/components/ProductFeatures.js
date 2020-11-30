import React from "react"
import Img from "gatsby-image/withIEPolyfill"
import { graphql, useStaticQuery } from "gatsby"
import ProductCard from "./ProductCard"
import ProductData from "../content/allProductData.json"

const ProductFeatures = props => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allContentJson {
        nodes {
          content {
            _id
            name
            price
            image {
              childImageSharp {
                fluid(maxWidth: 400, maxHeight: 400, quality: 100) {
                  src
                }
              }
            }
          }
        }
      }
    }
  `)
  const products = data.allContentJson.nodes[1].content

  return (
    <div className="product-features" id="products">
      <h1>Our Product Features</h1>
      <div className="core-features">
        {products.map(product => {
          console.log(product.image)
          return (
            <ProductCard
              key={product._id}
              imageSrc={product.image.childImageSharp.fluid.src}
              pName={product.name}
              pPrice={product.price}
            />
          )
        })}
      </div>
    </div>
  )
}

export default ProductFeatures
