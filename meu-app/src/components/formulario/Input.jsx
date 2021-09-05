import React, { useState } from 'react'
import './Input.css'

export default function Input(props){

    const [valor, setValor] = useState('Inicial')

    function quandoMudar(e) {
        console.log(e)
       
    }
    return(
        <div className='Input'>
           <Input valor={valor} onChange={quandoMudar}/>
        </div>
    )
}