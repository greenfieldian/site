import React from 'react'

export default function Hero(props) {
    return (
        <div>
            <section>
                <div>
                    <picture></picture>
                    <div>
                        <div>
                            <h2 className="headline">{props.headline}</h2>
                            <p className="description">{props.description}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
