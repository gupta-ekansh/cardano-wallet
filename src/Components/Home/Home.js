import React, { useState } from 'react'
import './Home.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Details from '../Details/Details';
function Home(props) {
  const [address , setAddress] = useState("");
  var newResponse = props.response;
  var newTransactions = props.transactions;
  var newUtxo = props.utxo;
  const navigate = useNavigate();
  console.log(address);
  const fetchData = async () => {
    console.log("Here");
    await fetch("https://cardano-mainnet.blockfrost.io/api/v0/addresses/"+`${address}`, {
    method:'GET',
    headers: {
      project_id: 'mainnetXEzKbFRGhDcE5PZpWluWjisuP99qZO2k',
      // Accept: 'application/json',
    },
    })
    .catch(error => {
      console.log("Error" , error);
    })
    .then(response => {
      return response.json();
    })
    .then(data => {
      newResponse = data;
    })

    console.log(newResponse)
    navigate('/Details' , {state:newResponse});  
  }

  const fetchTransactions = async () => {
    console.log("Here");
    await fetch("https://cardano-mainnet.blockfrost.io/api/v0/addresses/"+`${address}`+"/transactions", {
    method:'GET',
    headers: {
      project_id: 'mainnetXEzKbFRGhDcE5PZpWluWjisuP99qZO2k',
      // Accept: 'application/json',
    },
    })
    .then(response => {
      return response.json();
    })
    .then(data => {
      newTransactions = data;
    })
    navigate('/Transactions' , {state:newTransactions});  
  }
  const fetchUtxo = async () => {
    await fetch("https://cardano-mainnet.blockfrost.io/api/v0/addresses/"+`${address}`+"/utxos", {
    method:'GET',
    headers: {
      project_id: 'mainnetXEzKbFRGhDcE5PZpWluWjisuP99qZO2k',
      // Accept: 'application/json',
    },
    })
    .then(response => {
      return response.json();
    })
    .then(data => {
      newUtxo = data;
    })
    navigate('/Utxo' , {state:newUtxo});
  }
  return (
    <div className='Home'>
      <input onChange={(e) => setAddress(e.target.value)} placeholder='Enter Address....' type = "text" id = "search" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
      <div className='Home-btns'>
      <button onClick={fetchData} className='rounded-full bg-cyan-500 hover:bg-cyan-600 search-btn'>Search Details</button>
      <button onClick={fetchTransactions} className='rounded-full bg-cyan-500 hover:bg-cyan-600 search-btn'>Search Transcations</button>
      <button onClick={fetchUtxo} className='rounded-full bg-cyan-500 hover:bg-cyan-600 search-btn'>Search UTxOs</button>
      </div>
      
    </div>
  )
}

export default Home