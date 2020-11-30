import React from "react"
import "./styles.scss"
const ProductCard = ({ imageSrc, pName, pDescription, pPrice }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt={pDescription} />

      <div className="card-text">
        <h4>{pName}</h4>
        <p>${pPrice}</p>
      </div>
    </div>
  )
}

export default ProductCard
