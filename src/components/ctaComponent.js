import React from 'react'
import Button from './elements/button'

export default function CTA() {
    return (
        <section className="bg-lightest-grey">
        <div className="container">
          <div className="text-wrapper">
            <h3>Transform your business with an end-to-end partner, or work where you need us most.</h3>
            <div>
              <p>Ready to start a conversation?</p>
              <Button label="Let's Talk"/>
            </div>
          </div>
        </div>
      </section>
    )
}
