import { ethers } from "ethers";
import Web3Modal from "web3modal";
import { useMemo, useState } from "react";
//import providerOptions from './providersOptions'
import WalletConnectProvider from "@walletconnect/web3-provider";
import { WalletLink } from "walletlink";

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      infuraId: "62d9c446e0334c6d8de75211031884d8"
      // // rpc: {
      // //   1: "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
      // //   137: "https://polygon-rpc.com/"
      // // },
      // rpc: "https://polygon-rpc.com/"
    }
  },
  walletlink: {
    package: WalletLink, // Required
    options: {
      appName: "JunkyardDogs", // Required
      infuraId: "62d9c446e0334c6d8de75211031884d8", // Required unless you provide a JSON RPC url; see `rpc` below
      // rpc: {
      //   1: "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
      //   137: "https://polygon-rpc.com/"
      // }, // Optional if `infuraId` is provided; otherwise it's required
      //rpc: "https://polygon-rpc.com/",
      chainId: 137, // Optional. It defaults to 1 if not provided
      appLogoUrl: null, // Optional. Application logo image URL. favicon is used if unspecified
      darkMode: false // Optional. Use dark theme, defaults to false
    }
  }
};

const web3Modal = new Web3Modal({
  //network: "mainnet", // optional
  cacheProvider: false, // optional
  theme: "dark",
  providerOptions // required
});

export default function useWallet() {
  const [instance, setInstance] = useState();

  //const connect = web3Modal.connect;

  async function connect() {
    const init = await web3Modal.connect();
    setInstance(init);
  }

  function disconect() {
    console.log("Disconecting...");
    web3Modal.clearCachedProvider();
  }

  const provider = useMemo(() => {
    if (instance) {
      console.log("Getting provider...");
      return new ethers.providers.Web3Provider(instance);
    } else {
      return undefined;
    }
  }, [instance]);

  const signer = useMemo(() => {
    if (provider) {
      console.log("Getting signer");
      return provider.getSigner();
    } else {
      return undefined;
    }
  }, [provider]);

  return { disconect, connect, provider, signer };
}
