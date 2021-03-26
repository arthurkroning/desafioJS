import React from "react";

const Button = ({handleClick, text }) => {
    return (
        <Button onClick={handleClick}>
            {text}
        </Button>
    )
}
export default Button;