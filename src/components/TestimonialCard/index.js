import React from "react"
import "./style.scss"

const TestimonialCard = ({
  name,
  itemPurchased,
  description,
  backgroundColor,
}) => {
  return (
    <div
      className="testimonial-cards"
      style={{ backgroundColor: backgroundColor }}
    >
      <div className="testimonial-content">
        <h3>{name}</h3>
        <h6>{itemPurchased}</h6>
        <p>&ldquo;{description}&rdquo;</p>
      </div>
    </div>
  )
}

TestimonialCard.defaultProps = {
  backgroundColor: "white",
}

export default TestimonialCard
