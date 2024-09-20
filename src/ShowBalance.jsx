import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import React, { useEffect } from 'react'
import './Show.css'

function ShowBalance() {
    const {connection} = useConnection();
    const wallet = useWallet();

    async function getUserBalance() {
        const balance = await connection.getBalance(wallet.publicKey);        
        document.getElementById("Balance").innerHTML = balance/ LAMPORTS_PER_SOL;
    }

    useEffect(() => {
        getUserBalance();
    },[wallet])

    return (
    <div className='balance'>
      <a>Balance : <span id='Balance'></span></a>
    </div>
  )
}

export default ShowBalance
