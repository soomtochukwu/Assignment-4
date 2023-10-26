import { useState } from "react";
import { Main } from "./components/Main/Main";
import { ConnectWallet } from "./components/Connectwallet/Connectwallet";
import { Footer } from "./components/Footer/Footer";
import { Title } from "./components/Title/Title";
import { Sidebar } from "./components/Sidebar/Sidebar";

import { connectWallet } from "./lib/ethers/connectWallet";

import "./App.css";

function App() {
  const [account, setAccount] = useState<string>();
  const connect = async () => {
    try {
      const account = await connectWallet();
      setAccount(account);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
      alert("Something went wrong");
    }
  };
  return (
    <div className="body">
      <Sidebar />
      <div className="mainSection">
        <Title />
        <Main />

        {!account ? <ConnectWallet connectWallet={connect} /> : null}
      </div>
      <Footer />
    </div>
  );
}

export default App;
