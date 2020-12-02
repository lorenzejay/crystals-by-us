import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import TestimonialCard from "./TestimonialCard"

const Testimonials = props => {
  const data = useStaticQuery(graphql`
    query Testimonials {
      allContentJson {
        nodes {
          testimonials {
            _id
            author
            review
            itemPurchased
            color
          }
        }
      }
    }
  `)
  const testimonials = data.allContentJson.nodes[1].testimonials

  return (
    <section className="testimonials">
      <h1>Here&apos;s What Our Customers Are Saying</h1>
      <div className="testimonial-group">
        {testimonials &&
          testimonials.map(item => {
            return (
              <TestimonialCard
                key={item._id}
                name={item.author}
                itemPurchased={item.itemPurchased}
                description={item.review}
                backgroundColor={item.color}
              />
            )
          })}
      </div>
    </section>
  )
}

export default Testimonials
