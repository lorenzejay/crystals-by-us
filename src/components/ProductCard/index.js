import React from "react"
import Img from "gatsby-image/withIEPolyfill"
import "./styles.scss"
const ProductCard = ({ imageSrc, pName, pDescription, pPrice }) => {
  return (
    <div className="card">
      <Img fluid={imageSrc} alt={pName} style={{ width: 300, height: 300 }} />

      <div className="card-text">
        <h4>{pName}</h4>
        <p>${pPrice}</p>
      </div>
    </div>
  )
}

export default ProductCard
