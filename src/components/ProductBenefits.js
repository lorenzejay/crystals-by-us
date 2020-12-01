import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const ProductBenefits = props => {
  const data = useStaticQuery(graphql`
    query {
      allContentJson {
        nodes {
          title
          crystals {
            _id
            name
            description
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
  `)

  const crystalInfo = data.allContentJson.nodes[2]

  return (
    <section className="product-benefits">
      <div className="product-benefits-content">
        <h1>{crystalInfo.title}</h1>
        {crystalInfo.crystals.map(item => {
          return (
            <div
              className={`${
                item._id % 2 !== 0
                  ? "crystal-image-left"
                  : "crystal-image-right"
              }`}
            >
              <img
                src={item.image.childImageSharp.fluid.src}
                alt={item.description}
              />
              <div>
                {item.name}
                {item.description}
              </div>
            </div>
          )
        })}
        {/* <div className="product-benefits-row-1">
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
        </div> */}
      </div>
    </section>
  )
}

export default ProductBenefits
