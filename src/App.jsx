import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton,
    WalletConnectButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import Airdrop from './Airdrop';
import './App.css'
import ShowBalance from './ShowBalance';
import SendToken from './SendToken';

function App() {
  return (
    <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
            <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider>
                  <div className='out'>
                    <div> 
                      <div className='connect'>
                        <WalletMultiButton />
                        <WalletDisconnectButton />
                      </div> 
                      <ShowBalance />
                      <Airdrop />
                    </div>
                    <SendToken />
                  </div>  
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>

  );
}

export default App
