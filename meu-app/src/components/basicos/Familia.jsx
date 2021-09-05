import React, {cloneElement} from 'react'

export default function Familia(props){
    return(
        <React.Fragment>
            {props.children.map((child, i) =>{
                return cloneElement(child, {...props, key: i})
            })}
        </React.Fragment>
    )
}