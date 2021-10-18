import React from 'react'

import * as heroStyles from "../styles/hero.module.css"

export default function Hero(props) {
    return (
        <div>
            <section>
                <div className={heroStyles.hero_container}>
                    <picture>
                        <img src={props.image} />
                    </picture>
                    <div className={heroStyles.hero_overlay}>
                        <div className="text-wrapper container">
                            <h2 className="headline">{props.headline}</h2>
                            <p className="description">{props.description}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
