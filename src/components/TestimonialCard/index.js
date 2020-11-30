import React from "react"
import "./style.scss"

const TestimonialCard = ({ name, itemPurchased, description }) => {
  return (
    <div className="testimonial-cards">
      <div className="testimonial-content">
        <h3>{name}</h3>
        <h6>{itemPurchased}</h6>
        <p>&ldquo;{description}&rdquo;</p>
      </div>
    </div>
  )
}

export default TestimonialCard
