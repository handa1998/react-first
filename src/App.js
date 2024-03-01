import logo from './logo.svg';
// import './App.css';
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';

function App() {
  // const [counter, setCounter] = useState(10);
  const [arraylist, setArraylist] = useState(null);
  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then(response => response.json())
      .then(item => {
        console.log(item)
        setArraylist(item.data)
      })
      .catch(error => console.error(error))
  })


  return (
    <div>
      {/* <table>
        <tr>
          <th>sr.no</th>
          <th>firstName</th>
          <th>lastName</th>
          <th>Email</th>
          <th>avatar</th>
        </tr>
        {
          arraylist ? arraylist.map(item =>
            <tr>
              <td>{item.id}</td>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
              <td><img src={item.avatar} alt="" /></td>

            </tr>
          ) : null}


      </table> */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Sr.no</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Avatar</th>
          </tr>
        </thead>
        <tbody>
          {
            arraylist ? arraylist.map(item =>
              <tr>
                <td>{item.id}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td><img src={item.avatar} alt="" /></td>

              </tr>
            ) : null}
        </tbody>
      </Table>

    </div>)

}

export default App;
