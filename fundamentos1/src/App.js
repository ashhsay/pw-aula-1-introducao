import React, {Component} from 'react'

import olamundo from './components/basico/olamundo'
import Propriedade from '/workspace/pw-aula-1-introducao/fundamentos1./src/app.js/components/basico/Propriedade'

class App extends Component {
  render () {
    return(
      <div>
        <h1> Propriedade </h1>
        <h1>Aula 01-Fundamentos</h1>
        <h2>Olá mundo</h2>
        <Propriedade nome="homer"  sobrenome="Jay Simpson" idade={38}/>
        <olamundo />

      </div>

    )
  }

}


export default App;
