/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ethers } from "ethers";

import { BrowserProvider, parseUnits } from "ethers";

import { HDNodeWallet } from "ethers/wallet";
import { useState } from "react";
import { Main } from "./components/Main/Main";
import { ConnectWallet } from "./components/Connectwallet/Connectwallet";
import { Footer } from "./components/Footer/Footer";
import { Title } from "./components/Title/Title";
import { Sidebar } from "./components/Sidebar/Sidebar";

import { BUNN_ICO_ABI, BUNN_ICO_ADDRESS } from "./components/BUNN_ICO_ABI";

import "./App.css";

function App() {
  const [account, setAccount] = useState(""),
    [provider, setProvider] = useState(""),
    [buttonText, setButtonText] = useState("Connect Wallet"),
    [contractAddress, setContractAddress] = useState(""),
    [contract, setContract] = useState<ethers.Contract>(),
    [owner, setOwner] = useState(""),
    [signer, setSigner] = useState<ethers.JsonRpcProvider>(),
    /* connect wallet */
    connect = async () => {
      let
        signer: ethers.JsonRpcProvider,
        provider,
        contract: ethers.Contract,
        account;
      // @ts-ignore
      if (window.ethereum == null) {
        console.log("MetaMask not installed; using read-only defaults");
        // @ts-ignore
        provider = ethers.getDefaultProvider();
      } else {
        // @ts-ignore
        provider = new ethers.BrowserProvider(window.ethereum);
        // @ts-ignore

        signer = await provider.getSigner();
        setSigner(signer);

        contract = new ethers.Contract(BUNN_ICO_ADDRESS, BUNN_ICO_ABI, signer);
        setContract(contract);

        // @ts-ignore
        account = await signer.getAddress()
        setAccount(account)

        setContractAddress(BUNN_ICO_ADDRESS);
        setButtonText(account)

      }
    },
    /* test call */
    getOwner = async () => {
      const
        // @ts-ignore
        provider = new ethers.BrowserProvider(window.ethereum),
        contract = new ethers.Contract(BUNN_ICO_ADDRESS, BUNN_ICO_ABI, provider),
        owner = await contract.owner();
      // owner.wait();
      setOwner(owner);
    },
    /* create lottery */
    createLottery = async () => {

    },
    // updateEthers = () => { },
    logout = async () => {
      setAccount("");
      setButtonText("Connect Wallet");
    };

  return (
    <div className="body">
      <Sidebar />
      <div className="mainSection">
        <Title />
        <Main createLottery={createLottery} account={account} getOwner={getOwner} owner={owner} />
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
