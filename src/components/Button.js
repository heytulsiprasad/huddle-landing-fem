import React from "react"

const Button = ({ children, type }) => {
    return (
        <button className={type}>
            {children}
        </button>
    )
}

export default Button;