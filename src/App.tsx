import { ethers } from "ethers";
import BUNN_ICO_ABI from "./assets/BUNN_ICO_ABI.json";

import { SetStateAction, useState } from "react";
import { Main } from "./components/Main/Main";
import { ConnectWallet } from "./components/Connectwallet/Connectwallet";
import { Footer } from "./components/Footer/Footer";
import { Title } from "./components/Title/Title";
import { Sidebar } from "./components/Sidebar/Sidebar";

import "./App.css";
import { BrowserProvider } from "ethers";
import { Contract } from "ethers";
// import { ContractRunner } from "ethers";

const ERC20_ABI = [
  "function totalSupply() view returns (uint256)",
  "event  Transfer(address indexed from, address indexed to, uint256)",
];
function App() {
  const [account, setAccount] = useState(null),
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    [provider, setProvider] = useState<BrowserProvider>(),
    [buttonText, setButtonText] = useState("Connect Wallet"),
    [contractAddress, setContractAddress] = useState<string>(null),
    [contract, setContract] = useState<Contract>(),
    [balance, setBalance] = useState(null),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [signer, setSigner] = useState<any>(),
    connect = async () => {
      window.ethereum
        ? await window.ethereum
            .request({ method: "eth_requestAccounts" })
            .then((result: SetStateAction<null>[]) => {
              accountChangedHandler(result[0]);
            })
        : alert("install An Ethereum Wallet");

      setContractAddress("0x846C9D65404B5325163f2850DAcF7C3Dff9ef0B2");

      const _provider = new ethers.providers.Web3Provider(window.ethereum);

      setSigner(provider?.getSigner());

      const _contract = new ethers.Contract(
        contractAddress,
        BUNN_ICO_ABI,
        signer
      );
      console.log("contract", _contract);
      setContract(_contract);

      setProvider(_provider);

      // updateEthers();
    },
    accountChangedHandler = (account: SetStateAction<null>) => {
      setAccount(account);
      setButtonText(String(account));
    },
    getBal = async () => {
      const b = await contract.totalSupply();
      setBalance(b);
    },
    // updateEthers = () => { },
    logout = async () => {
      setAccount(null);
      setButtonText("Connect Wallet");
    };

  return (
    <div className="body">
      <Sidebar />
      <div className="mainSection">
        <Title />
        <Main account={account} getBalance={getBal} balance={balance} />
        <ConnectWallet
          account={account}
          logout={logout}
          buttonText={buttonText}
          connectWallet={connect}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
