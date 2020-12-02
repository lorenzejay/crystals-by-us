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
        <p>&ldquo;{description}&rdquo;</p>
        <h3>{name}</h3>
      </div>
    </div>
  )
}

TestimonialCard.defaultProps = {
  backgroundColor: "white",
}

export default TestimonialCard
