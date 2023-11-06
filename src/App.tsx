// import { BaseContract, ethers, providers } from "ethers";
import { BUNN_ICO_ABI } from "./components/BUNN_ICO_ABI";
import { SetStateAction, useState } from "react";
import { Main } from "./components/Main/Main";
import { ConnectWallet } from "./components/Connectwallet/Connectwallet";
import { Footer } from "./components/Footer/Footer";
import { Title } from "./components/Title/Title";
import { Sidebar } from "./components/Sidebar/Sidebar";

import "./App.css";
// import { BrowserProvider } from "ethers";
import { Contract, ethers } from "ethers";
// import { ContractRunner } from "ethers";

function App() {
  const [account, setAccount] = useState(null),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [provider, setProvider] = useState<any>(),
    [buttonText, setButtonText] = useState("Connect Wallet"),
    [contractAddress, setContractAddress] = useState<string>(""),
    [contract, setContract] = useState<Contract>(),
    [balance, setBalance] = useState(null),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [signer, setSigner] = useState<any>(),
    connect = async () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      window.ethereum
        ? // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          await window.ethereum
            .request({ method: "eth_requestAccounts" })
            .then((result: SetStateAction<null>[]) => {
              accountChangedHandler(result[0]);
            })
        : alert("install An Ethereum Wallet");

      setContractAddress("0x846C9D65404B5325163f2850DAcF7C3Dff9ef0B2");
      setProvider(
        new ethers.providers.JsonRpcProvider(
          "https://eth-sepolia.g.alchemy.com/v2/uJ6VyGFM0IqVjGXqi0pjDyhbwpp7h58I"
        )
      );

      setSigner(provider.getSigner());

      setContract(new Contract(contractAddress, BUNN_ICO_ABI, signer));

      console.log("contract", contract);

      // updateEthers();
    },
    accountChangedHandler = (account: SetStateAction<null>) => {
      setAccount(account);
      setButtonText(String(account));
    },
    getBal = async () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setBalance(await contract.totalSupply());
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
