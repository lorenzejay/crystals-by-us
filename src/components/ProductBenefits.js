import React, { useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import AOS from "aos"
import "aos/dist/aos.css"
import sanitizeHtml from "sanitize-html"

const ProductBenefits = props => {
  useEffect(() => {
    AOS.init({ duration: 2000 })
    AOS.refresh()
  }, [])

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
              data-aos="fade-up"
              key={item._id}
              className={`${
                item._id % 2 !== 0
                  ? "crystal-image-left"
                  : "crystal-image-right"
              }`}
            >
              <a href="https://www.instagram.com/crystalsbyus/">
                <img
                  src={item.image.childImageSharp.fluid.src}
                  alt={item.description}
                />
              </a>
              <div className="product-info-text">
                <h2>{item.name}</h2>
                <span>
                  <div
                    key={item._id}
                    id={item._id}
                    dangerouslySetInnerHTML={{
                      __html: sanitizeHtml(item.description, {
                        allowedTags: ["p", "ol", "li", "span"],
                      }),
                    }}
                  />
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default ProductBenefits
