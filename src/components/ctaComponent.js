import React from 'react'
import { Link } from 'gatsby'

export default function CTA() {
    return (
        <section className="bg-gradient cta-section-container text-center">
        <div className="container">
          <div className="text-wrapper">
            <h3 className="headline">Let's work together</h3>
            <div>
              <p>Transform your business with an end-to-end partner, or work where you need us most.</p>
              <Link className="cta text-white" to="/contact-us">Start a conversation</Link>
            </div>
          </div>
        </div>
      </section>
    )
}
