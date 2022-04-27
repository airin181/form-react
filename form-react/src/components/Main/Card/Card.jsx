import React, { Component } from "react";

export class Card extends Component {
  
  constructor(props) {
    super(props)
    }

  render() {
    const data = this.props.value;
    return (
      data?
        <>
          <p>Nombre: {data.name} </p>
          <p>Email: {data.email} </p>
          <p>URL imagen: {data.url}</p>
          <p>Age: {data.age}</p>
        </>:""      
      )
    }
}

export default Card;
