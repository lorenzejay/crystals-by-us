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
            color
          }
        }
      }
    }
  `)
  const testimonials = data.allContentJson.nodes[0].testimonials

  return (
    <section className="testimonials">
      <h1>Here's What Our Customers Are Saying</h1>
      <div className="testimonial-group">
        {testimonials &&
          testimonials.map(item => {
            return (
              <TestimonialCard
                key={item._id}
                name={item.author}
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
