import React, {Component} from 'react'

import Card from '/components/layout/Card'
import olamundo from './components/basico/olamundo';
import Propriedade from './components/basico/Propriedades';

class App extends Component {
  render () {
    return(
      <div>
        <h1> Propriedade </h1>
        <Propriedade nome="homer"  sobrenome="Jay Simpson" idade={38}/>

        <h1>Aula 01-Fundamentos</h1>
        <h2> Componente olamundo </h2>
        <h4>primeiro componente JSX</h4>
        <olamundo />
        
      </div>

    )
  }

}


export default App;
