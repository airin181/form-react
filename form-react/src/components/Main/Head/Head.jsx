import React, { Component } from "react";
import {userContext} from '../../../context/userContext';


export class Head extends Component {

  static contextType = userContext //para leer el context

  render() {
    return <div>

      <userContext.Consumer>

      {(user) =>
              user?
                <>
                  <p>{user.email}</p>
                </>:""
          }

      </userContext.Consumer>
      
    </div>;
  }
}

export default Head;
