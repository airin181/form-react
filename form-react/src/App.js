import './App.css';
import Head from './components/Main/Head';
import Form from './components/Main/Form';
import Card from './components/Main/Card';
import {userContext} from './context/userContext';
import {useState} from 'react';

function App() {

  const [user, setUser] = useState(); //se crea un estado "user" de manera diferente con valor "".

 //login
  const register = (input) => {
    setUser(input)
  } // aquí se le da valores como keys

  return (
    <div className='app-container'>
      
      <userContext.Provider value={user}>
        <Head/>
        <Form value={register}/>
        <Card value={user}/>
      </userContext.Provider>
    </div>
  );
}

export default App;