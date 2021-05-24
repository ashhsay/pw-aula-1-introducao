import React from 'react';

export default function Propriedade (props) {
    resturn(
            <div>
                <h2>{ props.nome }</h2>
                <h3>{ props.sobrenome }</h3>
                <h3>{ props.idade }</h3>
            </div>
    )
}