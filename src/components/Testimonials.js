import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import TestimonialCard from "./TestimonialCard"

const Testimonials = props => {
  const data = useStaticQuery(graphql`
    query {
      allContentJson(filter: { clientTestimonials: { _id: { eq: 2 } } }) {
        edges {
          node {
            clientTestimonials {
              title
              testimonials {
                _id
                author
                color
                review
              }
            }
          }
        }
      }
    }
  `)
  const testimonials =
    data.allContentJson.edges[0].node.clientTestimonials.testimonials
  console.log(testimonials)

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
