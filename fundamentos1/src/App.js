import React, {Component} from 'react';

import './app.css'
import Card from './components/layout/Card';
import Propriedade from './components/basico/Propriedades';
import olamundo from './components/basico/olamundo';

class App extends Component {
  render () {
    return(
      <div>

        <Card titulo="Propriedades">
        <Propriedade nome="Homer"  sobrenome="Jay Simpson" idade={38}/>
         </Card>

      <Card titulo="Olá Mundo!">
        <h3>Componente OlaMundo</h3>
        <h4> Primeiro componente JSX</h4>
      </Card>
        <olamundo />
        
      </div>

    )
  }

}


export default App;
