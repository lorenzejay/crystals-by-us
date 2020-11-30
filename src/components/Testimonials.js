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
          }
        }
      }
    }
  `)
  const testimonials = data.allContentJson.nodes[0].testimonials

  return (
    <section className="testimonials">
      <h1>Here&apos;s What Our Customers Are Saying</h1>
      <div className="testimonial-group">
        {testimonials.map(item => {
          console.log(item)
          return (
            <TestimonialCard
              name={item.author}
              itemPurchased={item.itemPurchased}
              description={item.review}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Testimonials
