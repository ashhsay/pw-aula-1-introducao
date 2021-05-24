import React, {Component} from 'react';
import Card from './components/layout/Card';
import Propriedades from './components/basico/Propriedades';
import olamundo from './components/basico/olamundo';
import './App.css' 

class App extends Component {
  render () {
    return(
      <div classname="App">
        <h1> Exemplo React</h1>

      <div classname="Cards">
      <Card titulo="Propriedades" cor="#91cb3e">
        <Propriedades nome="Homer"  sobrenome="Jay Simpson" idade={38}/>
         </Card>

      <Card titulo="Olá Mundo!" cor="#226ce0">
        <h3>Componente OlaMundo</h3>
        <h4> Primeiro componente JSX</h4>
          <olamundo /> 
        </Card>
      </div>
      </div>

     
    )
  }

}


export default App;
