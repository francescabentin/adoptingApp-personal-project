import { useState, useEffect } from 'react';
import getDataApi from '../services/api';
import '../styles/App.scss';


function App() {
 
const [users, setUsers] = useState('');

useEffect(() => {
      getDataApi()
        .then(data => {
          setUsers(data);
    }, []);
})
console.log(users);
  return (
  <div>
    <h1>AMIGO FIEL</h1>
    <navbar>MENU</navbar>
  </div>

)
}

export default App;
