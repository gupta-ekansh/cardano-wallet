import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import './Utxo.css';
function Utxo() {
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location.state);
    const info = location.state;
    // const info = [
    //     {
    //     "address": "addr1qxqs59lphg8g6qndelq8xwqn60ag3aeyfcp33c2kdp46a09re5df3pzwwmyq946axfcejy5n4x0y99wqpgtp2gd0k09qsgy6pz",
    //     "tx_hash": "39a7a284c2a0948189dc45dec670211cd4d72f7b66c5726c08d9b3df11e44d58",
    //     "output_index": 0,
    //     "amount": [
    //     {
    //     "unit": "lovelace",
    //     "quantity": "42000000"
    //     }
    //     ],
    //     "block": "7eb8e27d18686c7db9a18f8bbcfe34e3fed6e047afaa2d969904d15e934847e6",
    //     "data_hash": "9e478573ab81ea7a8e31891ce0648b81229f408d596a3483e6f4f9b92d3cf710",
    //     "inline_datum": null,
    //     "reference_script_hash": null
    //     },
    //     {
    //     "address": "addr1qxqs59lphg8g6qndelq8xwqn60ag3aeyfcp33c2kdp46a09re5df3pzwwmyq946axfcejy5n4x0y99wqpgtp2gd0k09qsgy6pz",
    //     "tx_hash": "4c4e67bafa15e742c13c592b65c8f74c769cd7d9af04c848099672d1ba391b49",
    //     "output_index": 0,
    //     "amount": [
    //     {
    //     "unit": "lovelace",
    //     "quantity": "729235000"
    //     }
    //     ],
    //     "block": "953f1b80eb7c11a7ffcd67cbd4fde66e824a451aca5a4065725e5174b81685b7",
    //     "data_hash": null,
    //     "inline_datum": null,
    //     "reference_script_hash": null
    //     },
    //     {
    //     "address": "addr1qxqs59lphg8g6qndelq8xwqn60ag3aeyfcp33c2kdp46a09re5df3pzwwmyq946axfcejy5n4x0y99wqpgtp2gd0k09qsgy6pz",
    //     "tx_hash": "768c63e27a1c816a83dc7b07e78af673b2400de8849ea7e7b734ae1333d100d2",
    //     "output_index": 1,
    //     "amount": [
    //     {},
    //     {}
    //     ],
    //     "block": "5c571f83fe6c784d3fbc223792627ccf0eea96773100f9aedecf8b1eda4544d7",
    //     "data_hash": null,
    //     "inline_datum": null,
    //     "reference_script_hash": null
    //     }
    //     ]
        // console.log(Object.keys(info[2].amount[0]).length === 0);
        const navigateToHome = () => {
            navigate('/');
        }
  return (
    <div className='utxo'>
        <div className='utxo-container bg-slate-700'>
            {
                info.length === 0 ? 
                <h1>OOPS! No Information Available</h1>:
                <ul>
                {
                    info.map((item) => (
                        <li className='utxo-li'>
                            <div>
                                <p>Address: <span>{item.address}</span></p>
                                <p>Tx_hash: <span>{item.tx_hash}</span></p>
                                <p>Output_index: <span>{item.output_index}</span></p>
                                <p>Block: <span>{item.block}</span></p>
                            </div>
                            <div>
                                <table className='border-separate border-spacing-2 border border-slate-500'>
                                    <thead>
                                        <tr>
                                            <th className='border border-white'>Unit</th>
                                            <th className='border border-white'>Quantity</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            item.amount.map((val) => (
                                            <tr>
                                                <td className='border'>
                                                    {Object.keys(val).length === 0 ? <>-</>: <>{val.unit}</>}
                                                </td>
                                                <td className='border'>
                                                    {Object.keys(val).length === 0 ? <>-</>: <>{val.quantity}</>}
                                                </td>
                                            </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </li>
                    ))
                }
                </ul>
            }
            
        </div>
        <button className='utxo-btn' onClick={navigateToHome}>Go Back</button>
    </div>
  )
}

export default Utxo