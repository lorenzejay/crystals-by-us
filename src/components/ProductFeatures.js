import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ProductCard from "./ProductCard"

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
  const products = data.allContentJson.nodes[0].content
  console.log(data)

  return (
    <div className="product-features" id="products">
      <h1>Our Product Features</h1>
      <div className="core-features">
        {products.map(product => {
          console.log(product)
          return (
            <ProductCard
              key={product._id}
              imageSrc={product.image.childImageSharp.fluid.src}
              pName={product.name}
              pPrice={product.price}
              pDescription={product.description}
            />
          )
        })}
      </div>
    </div>
  )
}

export default ProductFeatures
