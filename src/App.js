import "./styles.css";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { useState } from "react";
import { WalletLink } from 'walletlink'

// const providerOptions = {
//   walletconnect: {
//     package: WalletConnectProvider, // required
//     options: {
//       infuraId: "asda" // required
//     }
//   }
// };

// const providerOptions = {
//   walletconnect: {
//     package: WalletConnectProvider, // required
//     options: {
//       infuraId: "asda" // required
//     }
//   }
// };

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      //infuraId: "62d9c446e0334c6d8de75211031884d8",
      // rpc: {
      //   1: "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
      //   137: "https://polygon-rpc.com/"
      // },
      rpc: "https://polygon-rpc.com/"
    }
  },
  walletlink: {
    package: WalletLink, // Required
    options: {
      appName: "JunkyardDogs", // Required
      //infuraId: "62d9c446e0334c6d8de75211031884d8", // Required unless you provide a JSON RPC url; see `rpc` below
      // rpc: {
      //   1: "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
      //   137: "https://polygon-rpc.com/"
      // }, // Optional if `infuraId` is provided; otherwise it's required
      rpc: "https://polygon-rpc.com/",
      chainId: 137, // Optional. It defaults to 1 if not provided
      appLogoUrl: null, // Optional. Application logo image URL. favicon is used if unspecified
      darkMode: false // Optional. Use dark theme, defaults to false
    }
  }
};

const web3Modal = new Web3Modal({
  //network: "mainnet", // optional
  cacheProvider: false, // optional
  providerOptions // required
});

export default function App() {
  const [wallet, setWallet] = useState();
  //const [provider, setProvider] = useState()
  //const [signer, setSigner] = useState()
  async function connect() {
    console.log('Connecting...');
    const instance = await web3Modal.connect();

    console.log('Getting provider...');

    const provider = new ethers.providers.Web3Provider(instance);
    const signer = provider.getSigner();

    console.log('Finishing');    

    setWallet(Object({ provider: provider, signer: signer }));

    console.log(wallet);
  }
  async function disconect() {
    console.log(Disconecting...);
    
    web3Modal.clearCachedProvider();
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={connect}>Connect!</button>
      <button onClick={disconect}>Disconect!</button>

      
    </div>
  );
}
