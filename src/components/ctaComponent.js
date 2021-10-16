import React from 'react'
import Button from './elements/button'

export default function CTA() {
    return (
        <section className="bg-gradient cta-section-container">
        <div className="container">
          <div className="text-wrapper">
            <h3 className="headline">Let's work together</h3>
            <div>
              <p>Transform your business with an end-to-end partner, or work where you need us most.</p>
              <Button label="Let's Talk"/>
            </div>
          </div>
        </div>
      </section>
    )
}
