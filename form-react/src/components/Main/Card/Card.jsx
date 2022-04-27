import React, { Component } from "react";
import './Card.css';

export class Card extends Component {
  
  constructor(props) {
    super(props)
    }

  render() {
    const data = this.props.value;
    return (
      data?
        <>
          <div className="card-container">
            <p>Datos del nuevo usuario:</p>
            <p>Nombre: {data.name} </p>
            <p>Email: {data.email} </p>
            <p>URL imagen: {data.url}</p>
            <p>Age: {data.age}</p>
          </div>
        </>:""      
      )
    }
}

export default Card;
