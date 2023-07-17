import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './Details.css';
function Details() {
    const location = useLocation();
    console.log("Here" , location.state);
    var p = location.state;
    var address = p.address;
    var amount = p.amount; 
    var stake_address = p.stake_address;
    var status = p.status_code;
    const navigate = useNavigate();
    const navigateToHome = () => {
        navigate('/')
    }
  return (
    <div className='transc-details'>
        {
            status === 400?
            <h1 className='bg-slate-700 address-inv'>OOPS! Address Invalid</h1>:
            <div className='transc-container bg-slate-700'>
            <p className='transc-address'><b>Address</b>: <span>{address}</span></p>
            <p className='transc-stake_address'><b>Stake Address</b>: <span>{stake_address}</span></p>
            <p className='transc-type'><b>Type</b>: <span>{p.type}</span></p>
            <table className='border-separate border-spacing-2 border border-slate-500'>
                <thead>
                    <tr>
                        <th className='border border-white'>Unit</th>
                        <th className='border border-white'>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                {
                    
                    amount.map(item => (
                        <tr>
                            <td className='border'><p>{item.unit}</p></td>
                            <td className='border'><p>{item.quantity}</p></td>
                        </tr>
                    ))
                }
                <tr>
                    <td className='border'>1</td>
                    <td className='border'>1s</td>
                </tr>
                <tr>
                    <td className='border'>1</td>
                    <td className='border'>1s</td>
                </tr>
                <tr>
                    <td className='border'>1</td>
                    <td className='border'>1s</td>
                </tr>
                <tr>
                    <td className='border'>1</td>
                    <td className='border'>1s</td>
                </tr>
                </tbody>
                
            </table>
            </div>
        }
        
        <button onClick = {navigateToHome}>Go Back</button>
    </div>
  )
}

export default Details