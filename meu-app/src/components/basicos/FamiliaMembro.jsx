import React from 'react'

export default function FamiliaMembro (props){
    return(
        <React.Fragment>
            {props.nome}<strong>{props.sobrenome}</strong>
        </React.Fragment>
    )
}