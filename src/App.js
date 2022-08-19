import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';


function App() {
  const [custId, setCustId] = useState('');
  const [result, setResult] = useState([]);

  function searchData() {
    var requestOptions = {
      method: "GET",
    };
    //var url = "http://localhost:3000/customer/id?cid=" + custId;
    var url = "https://nus-backend.herokuapp.com/customer/id?cid=" + custId;
    console.log(url); 
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((responseJSON) => { setResult(responseJSON)})
      .catch((error) => console.log("error", error));
  } 

  function allData() {
    var requestOptions = {
      method: "GET",
    };
    //var url = "http://localhost:3000/customer/all";
    var url = "https://nus-backend.herokuapp.com/customer/all";
    
    console.log(url);
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((responseJSON) => { setResult(responseJSON)})
      .catch((error) => console.log("error", error));
  } 

  /* const alertCustId = () => {
    alert(custId);
  }; */

  const handleNameInput = e => {
    setCustId(e.target.value);
  };

  return (
    <div>
      <h3>CONNECT TO API SERVER</h3>
      <div>
      <input
        type="text"
        onChange={handleNameInput}
        value={custId}
        placeholder="Customer ID"
      />
      <button  onClick={searchData}>
        searchData
      </button>
      
      <button  onClick={allData}>
        All Data
      </button>
      </div>
    
      <ul>
          {result.map(customer => (
            <li key={customer.customer_id}> ID: {customer.customer_id}, Name: {customer.customer_name}, email:  {customer.customer_name}</li>
          ))}
        </ul>
    </div>
  );
};

export default App;
