import React, { Component } from "react";
import {userContext} from '../../../context/userContext';


class Form extends Component {

  static contextType = userContext

  constructor(props) {
    super(props)
  }

  register = (event) => {

    event.preventDefault(); //esto para el formulario para leer los inputs

    const user = {
      name: event.target.name.value,
      email: event.target.email.value,
      url: event.target.url.value,
      age: event.target.age.value
    }
    
    this.props.value(user)
  }

  render() {
    return <div>
      <h1>Formulario</h1>
      <form onSubmit={this.register}>
          <label htmlFor="name">Nombre:</label> <br />
          <input type="text" name="name"id="name"/> <br />
          <label htmlFor="email">Email:</label> <br />
          <input type="text" name="email"id="email"/> <br />
          <label htmlFor="url">URL foto de perfil:</label> <br />
          <input type="text" name="url"id="url"/> <br />
          <label htmlFor="age">Edad</label> <br />
          <input type="text" name="age"id="age"/> <br />

          <input type="submit" value="Enviar"/>
        </form>

        <hr />
    </div>;

  }
}

export default Form;
