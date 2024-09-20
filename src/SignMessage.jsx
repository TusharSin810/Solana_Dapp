import { useWallet } from '@solana/wallet-adapter-react'
import bs58 from 'bs58'
import {ed25519} from '@noble/curves/ed25519'
import React from 'react'

function SignMessage() {
  const {publicKey,signMessage} = useWallet();

  async function Click() {
    if(!publicKey) throw new Error("Wallet Not Connected");
    if(!signMessage) throw new Error("Wallet Does not Support Message Signing");

    const message = document.getElementById('message').value;
    const encodedMessage = new TextEncoder().encode(message);
    const signature = await signMessage(encodedMessage);

    if(!ed25519.verify(signature, encodedMessage, publicKey.toBytes())) throw new Error("Message Signature Invalid !");
    alert('Success ', `Message signature : ${bs58.encode(signature)}`);
};
  
    return (
    <div>
        <input id='message' type='text' placeholder='Message'></input>
        <button onClick={Click}>Sign Message</button>
    </div>
  )
}
export default SignMessage
