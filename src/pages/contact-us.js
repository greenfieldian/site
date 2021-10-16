import React from 'react'
import { Helmet } from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'

import * as contactStyles from "../styles/contact.module.css"

<script src="https://www.google.com/recaptcha/api.js"></script>

export default function Contact() {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Contact Us | Shockmouse Media</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Layout>
                <Hero />
                <div>
                    <div className="wrapper">
                        <div>
                            <div className={contactStyles.main}>
                                <article>
                                    <header>
                                        <h1>Get in touch</h1>
                                        <div>
                                            <p>Thank you for your interest in Shockmouse Media. Please fill out the form below and we’ll be in touch shortly.</p>
                                            <div className={contactStyles.form_group}>
                                                <fieldset>
                                                    <legend>I'm reaching out about: </legend>
                                                    <div className={contactStyles.fieldset_column_3}>
                                                        <div className={contactStyles.fieldset_option}>
                                                            <label>
                                                                <input type="radio" />
                                                                <span>Project Inquiry</span>
                                                            </label>
                                                        </div>
                                                        <div className={contactStyles.fieldset_option}>
                                                            <label>
                                                                <input type="radio" />
                                                                <span>General</span>
                                                            </label>
                                                        </div>
                                                        <div className={contactStyles.fieldset_option}>
                                                            <label>
                                                                <input type="radio" />
                                                                <span>Career Opportunities</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className={contactStyles.fieldset_column_3}>
                                                        <div className={contactStyles.fieldset_option}>
                                                            <label>
                                                                <input type="radio" />
                                                                <span>Speaking</span>
                                                            </label>
                                                        </div>
                                                        <div className={contactStyles.fieldset_option}>
                                                            <label>
                                                                <input type="radio" />
                                                                <span>Customer Support</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </fieldset>
                                            </div>
                                            <div className={contactStyles.form_group}>
                                                <label>Name</label>
                                                <input type="text" />
                                            </div>
                                            <div className={contactStyles.form_group}>
                                                <label>Phone</label>
                                                <input type="text" />
                                            </div>
                                            <div className={contactStyles.form_group}>
                                                <label>Company</label>
                                                <input type="text" />
                                            </div>
                                            <div className={contactStyles.form_group}>
                                                <label>Website/URL</label>
                                                <input type="text" />
                                            </div>
                                            <div className={contactStyles.form_group}>
                                                <label>Message</label>
                                                <textarea maxLength="512"/>
                                            </div>
                                            <div className={contactStyles.form_group}>
                                                <label></label>
                                                <div class="g-recaptcha brochure__form__captcha" data-sitekey="YOUR SITE KEY"></div>
                                            </div>
                                        </div>
                                    </header>
                                </article>
                            </div>
                            <div className={contactStyles.rail}></div>
                        </div>
                    </div>
                </div>
            </Layout>
            
        </div>
    )
}
