import "./styles.css";
import useWallet from "./useWallet";

export default function App() {
  //const [wallet, setWallet] = useState();

  const { connect, disconect, provider, signer } = useWallet();

  function log() {
    console.log(provider);
    console.log(signer);
  }
  //const [provider, setProvider] = useState()
  //const [signer, setSigner] = useState()
  // async function connect() {
  //   console.log('Connecting...');

  // const instance = await web3Modal.connect();

  // console.log('Getting provider...');

  // const provider = new ethers.providers.Web3Provider(instance);
  // const signer = provider.getSigner();

  // console.log('Finishing');

  // setWallet(Object({ provider: provider, signer: signer }));

  // console.log(wallet);
  // }
  // async function disconect() {
  //   console.log('Disconecting...');

  //   web3Modal.clearCachedProvider();
  // }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={connect}>Connect!</button>
      <button onClick={disconect}>Disconect!</button>
      <button onClick={log}>Log!</button>
    </div>
  );
}
