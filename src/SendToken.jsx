import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from '@solana/web3.js';
import React from 'react'
import './sendtoken.css'

function SendToken() {
  const wallet = useWallet();
  const {connection} = useConnection();
  
    async function sendTokens() {
        let to = document.getElementById("to").value;
        let amount = document.getElementById("Samount").value;
        const transaction = new Transaction();
        transaction.add(SystemProgram.transfer({
            fromPubkey: wallet.publicKey,
            toPubkey: new PublicKey(to),
            lamports: amount*LAMPORTS_PER_SOL,
        }));
        await wallet.sendTransaction(transaction, connection);
        alert("Send " + amount + " SOL to " + to);
    }

    return (
    <div className='outdiv'>
        <h2 className='sol'>Send Solana</h2>   
    <div className='send'>
        <label className='info'>Send To :<input id='to' type='text' placeholder="Recipient's Address"></input></label>
        <label className='info'>Amount :<input id='Samount' type='text' placeholder='Amount'></input></label>   
    </div>
    <button onClick={sendTokens} className='sendbtn'>Send</button>
    </div>
  )
}

export default SendToken
