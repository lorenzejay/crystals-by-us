import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ProductCard from "./ProductCard"

const ProductFeatures = props => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allContentJson(filter: { clientProductData: { _id: { eq: 3 } } }) {
        edges {
          node {
            clientProductData {
              title
              content {
                _id
                name
                price
                image {
                  childImageSharp {
                    fluid {
                      src
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  const products = data.allContentJson.edges[0].node.clientProductData
  console.log(data.allContentJson.edges[0].node.clientProductData)

  return (
    <div className="product-features" id="products">
      <h1>{products.title}</h1>
      <p>{products.info}</p>
      <div className="core-features">
        {products.content &&
          products.content.map(product => {
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
