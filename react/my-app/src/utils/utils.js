import React from "react";

// Cria essa função abaixo para não precisar ficar repetindo dentro de 'export default'

export function childrenWithProps(props) {
    return React.Children.map(props.children, child => {
        return React.cloneElement(child, { ...props, ...child.props })
    })
}