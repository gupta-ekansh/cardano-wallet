import {useState , useEffect} from 'react';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Details from './Components/Details/Details';
import Transactions from './Components/Transactions/Transactions';
import Utxo from './Components/Utxo/Utxo';
function App() {
  const[response , setResponse] = useState({});
  const [transactions , setTransactions] = useState({});
  const [utxo , setUtxo] = useState({});
  // useEffect(() => {
  //   fetch("https://cardano-mainnet.blockfrost.io/api/v0/addresses/addr1qxqs59lphg8g6qndelq8xwqn60ag3aeyfcp33c2kdp46a09re5df3pzwwmyq946axfcejy5n4x0y99wqpgtp2gd0k09qsgy6pz", {
  //     method:'GET',
  //     headers: {
  //       project_id: 'mainnetXEzKbFRGhDcE5PZpWluWjisuP99qZO2k',
  //       // Accept: 'application/json',
  //     },
  //   })
  //   .then(response => {
  //     return response.json();
  //   })
  //   .then(data => {
  //     setResponse(data);
  //   })
  // },[])
  // console.log(response);
  return (
    // <div className="bg-slate-800 App">
      

    // </div>
    <Router>
      <Routes>
        <Route path = '/' element = {<Home response = {response}/>}/>
        <Route exact path = '/Details' element = {<Details/>}/>
        <Route exact path = '/Transactions' element = {<Transactions transactions = {transactions}/>}/>
        <Route exact path = '/Utxo' element = {<Utxo utxo = {utxo}/>}/>
      </Routes>
    </Router>
  );
  
}

export default App;
