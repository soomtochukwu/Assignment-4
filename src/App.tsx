/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ethers } from "ethers";


import { useState } from "react";
import { Main } from "./components/Main/Main";
import { ConnectWallet } from "./components/Connectwallet/Connectwallet";
import { Footer } from "./components/Footer/Footer";
import { Title } from "./components/Title/Title";
import { Sidebar } from "./components/Sidebar/Sidebar";

import { BUNN_ICO_ABI, BUNN_ICO_ADDRESS } from "./components/store";

import "./App.css";

function App() {
  const [account, setAccount] = useState(""),
    [buttonText, setButtonText] = useState("Connect Wallet"),
    [owner, setOwner] = useState(""),
    [lotteryId, setLotteryIdValue] = useState(""),
    [lotteryId_p, setLotteryIdValue_p] = useState(""),
    [Lottery_noOfPart, setLottery_noOfPart] = useState(""),
    /* connect wallet */
    connect = async () => {
      let
        signer: ethers.JsonRpcProvider,
        provider,
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

        // @ts-ignore
        account = await signer.getAddress()
        setAccount(account)

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
      const
        // @ts-ignore
        provider = new ethers.BrowserProvider(window.ethereum),
        signer = await provider.getSigner(),
        contract = new ethers.Contract(BUNN_ICO_ADDRESS, BUNN_ICO_ABI, signer),
        lottery = await contract.createLottery(lotteryId, Lottery_noOfPart);
      console.log(lottery);
    },

    // [Lottery_Name, setLottery_Name] = useState(""),

    // @ts-ignore
    setLotteryId = (event) => {
      setLotteryIdValue(event.target.value);
      console.log(lotteryId)
    },
    // @ts-ignore
    setNoOfPart = (event) => {
      setLottery_noOfPart(event.target.value)
      console.log(Lottery_noOfPart)
    }/* ,
    // @ts-ignore
    setName = (event) => {
      setLottery_Name(event.target.value)
      console.log(event.target.value)
    } */
    ,
    // @ts-ignore
    setLotteryId_p = async (event) => {
      setLotteryIdValue_p(event.target.value)
      console.log(lotteryId_p)
    },
    participate = async () => {
      const
        // @ts-ignore
        provider = new ethers.BrowserProvider(window.ethereum),
        signer = await provider.getSigner(),
        contract = new ethers.Contract(BUNN_ICO_ADDRESS, BUNN_ICO_ABI, signer),
        participation_tx = await contract.participate(lotteryId_p);
      console.log(participation_tx);
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
        <Main createLottery={createLottery} account={account} getOwner={getOwner} owner={owner}
          // @ts-ignore
          setLotteryId={setLotteryId} setNoOfPart={setNoOfPart} lotteryId={lotteryId} Lottery_noOfPart={Lottery_noOfPart} lotteryId_p={lotteryId_p} setLotteryId_p={setLotteryId_p} participate={participate} />
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
