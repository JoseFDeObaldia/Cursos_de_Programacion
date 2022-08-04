import { Component } from 'react';
import Productos from './components/Productos';
import './App.css';
import Layout from './components/Layout';
import Title from './components/Title';
import NavBar from './components/NavBar';

class Input extends Component {
  render() {
    return (
      <input value={this.props.value} 
             onChange = {this.props.onChange} 
      />
    );
  }
}


class App extends Component {
  state = {
    productos: [
      { name: 'Tomate', price: 1500, img: './img/tomate.jpg'},
      { name: 'Arvejas', price: 2500, img: './img/arvejas.jpg'},
      { name: 'Lechuga', price: 500, img: './img/lechuga.jpg'}
    ],
    carro: [],
    esCarroVisible: false,
  }

  agregarAlCarro = (producto) => {
    const { carro } = this.state;
    if (carro.find(x => x.name === producto.name)) {
      const newCarro = carro.map(x => x.name === producto.name ? ({
        ...x,
        cantidad: x.cantidad + 1
      }) : x)
      return this.setState(
        {carro: newCarro}
      )
    }
    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1,
      })
    });
  }

  mostrarCarro = () => {
    if(!this.state.carro.length) {
      return
    }
    this.setState({esCarroVisible: !this.state.esCarroVisible});
  }


  render() {
    console.log(this.state.carro);

    const { esCarroVisible } = this.state;
    return (
      <div>
        <NavBar carro = {this.state.carro} esCarroVisible = {esCarroVisible} mostrarCarro = {this.mostrarCarro} />
        <Layout>
          <Title />
          <Productos
            agregarAlCarro= {this.agregarAlCarro}
            productos= {this.state.productos}
          />
        </Layout>
      </div>
    );
  }
}

export default App;