import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './Transactions.css';
function Transactions() {
    const location = useLocation();
    const navigate = useNavigate();
    const transactions = location.state;
    // const transactions = [];
    console.log(transactions);
    const navigateToHome = () => {
        navigate('/')
    }
  return (
    <div className='add_transc'>
        <div className='add_transc_container bg-slate-700'>
            {
                transactions.length === 0? 
                <h1>OOPS! No Information Available</h1>:
                <>
                    <p className='add_transc_heading'>Transactions</p>
                    <table className='border-separate border-spacing-2 border border-slate-400'>
                        <thead>
                            <tr>
                                <th className='border border-white'>block_height</th>
                                <th className='border border-white'>block_time</th>
                                <th className='border border-white'>tx_hash</th>
                                <th className='border border-white'>tx_index</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                transactions.map((item) => (
                                    <tr>
                                        <td className='border border-white'>{item.block_height}</td>
                                        <td className='border border-white'>{item.block_time}</td>
                                        <td className='border border-white'>{item.tx_hash}</td>
                                        <td className='border border-white'>{item.tx_index}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </>
            }
        </div>
        <button onClick = {navigateToHome} className='add_transc_go_back'>Go Back</button>
    </div>
  )
}

export default Transactions