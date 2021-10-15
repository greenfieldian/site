import React from 'react'

import * as buttonStyles from "./button.module.css"

export default function Button(props) {
    return (
        <div>
            <button className={buttonStyles.button_container}>
                {props.label}
            </button>
        </div>
    )
}
