import React, { Component } from 'react'
import axios from 'axios'
// Clase de react que hereda a los componentes
export default class NotesList extends Component {

  // Para hacer uso de los datos los establecemos en el estado de la aplicación
  // Dentro almacena un arreglo de notas
  state = {
      notes: []
  }

// Método permite ejecutar ciertas funciones una vez el componente ha sido montado
// Será utilizado para pedir los datos 
  async componentDidMount(){
    // Utilizamos axios para hacer la petición GET y especiicamos la dirección a la cuál se hará la petición
    // Se maneja como una promesa debido a que es asíncrono
    const res = await axios.get('http://localhost:3001/api/notes');
    // Una vez obtenida la respuesta se muestra en consola
    console.log(res)
    // Almacenamos en el estado de notas la propiedad data
    this.setState({notes: res.data}); 
    console.log(this.state.notes)
  }
  render() {
    return (
      <div>Renderizar las notas actuales en una tabla</div>
    )
  }
}


