import React, { useState } from 'react'
import  { Card } from 'primereact/card'

import './Accordion.css'
const Accordion = (props) => {

    const [indiceAtual, setIndiceAtual] = useState (null)

    // const estado = useState (null)
    // const indiceAtivo = estado[0]
    // const setIndiceAtivo = estado[1]


    const itemClicado = (indice) => {
        setIndiceAtual(indice)
    }

    const expressaoJSX = props.itens.map((item, indice) => {
        const classeExibirConteudo = indice === indiceAtual ? '' : 'hidden'
        const classeExibirIcone = indice === indiceAtual ? 'pi-angle-down' : 'pi-angle-right'
        return (
            <Card id="accordion" key={indice} className="border-1 border-400">
            <div
                onClick={() => itemClicado(indice)}>
                <i className={`pi ${classeExibirIcone}`}></i>
                <h5 className="inline ml-3">{item.titulo}</h5>
            </div>
            <p className={`${classeExibirConteudo}`}>{item.conteudo}</p>
            </Card>
        )
    })

    return (
        <div>
        {
            expressaoJSX       
        }
        </div>
    )
}

export default Accordion
