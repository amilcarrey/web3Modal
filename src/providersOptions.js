import WalletConnectProvider from "@walletconnect/web3-provider";
import { WalletLink } from "walletlink";

export const providerOptions = {
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
