import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import React from 'react'
import './Airdrop.css'
import { LAMPORTS_PER_SOL } from '@solana/web3.js';

function Airdrop() {

    const wallet = useWallet();
    const {connection} = useConnection();

  
    async function sendAirdropToUser(){
        const airdropAmount = document.getElementById('amount').value
        await connection.requestAirdrop(wallet.publicKey, airdropAmount* LAMPORTS_PER_SOL);
        alert("Airdropped 1 SOL");
    }

  return (
    <div className='text'>Request Air Drop
      <div className='inputbox'>
          <input type='text' placeholder='Amount to Airdrop' id='amount' className='Amountinput' />
          <button className='btn' onClick={sendAirdropToUser}>Send Airdrop</button>
      </div>
    </div>
  )
}

export default Airdrop
   