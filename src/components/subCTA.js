import React from 'react'
import { Link } from 'gatsby'
import Button from './elements/button'
import { FaLinkedin, FaMediumM, FaInstagram, FaYoutube } from "react-icons/fa";

import * as subCTAStyles from "./subCTA.module.css"

export default function SubCTA() {
    return (
        <section className="bg-lightest-grey cta-section-container">
            <div>
                <div className="container">
                    <div className="text-wrapper">
                        <h3 className="headline">Connect with Shockmouse wherever you go</h3>
                    </div>
                    <div>
                        <Link>
                            <Button label="Join Our Newsletter" />
                        </Link>
                    </div>
                    <div className={subCTAStyles.social_container}>
                        <div className={"d-flex" + " " + subCTAStyles.socialLinks}>
                            <a>
                                <FaLinkedin size={25}/>
                                <span>LinkedIn</span>
                            </a>
                            <a>
                                <FaMediumM size={25}/>
                                <span>Medium</span>
                            </a>
                            <a>
                                <FaInstagram size={25}/>
                                <span>Instagram</span>
                            </a>
                            <a>
                                <FaYoutube size={25}/>
                                <span>YouTube</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
