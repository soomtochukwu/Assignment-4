import "./Connectwallet.css";

interface ConnectWalletProps {
  connectWallet: () => Promise<void>;
  logout: () => Promise<void>;
  buttonText: string;
  account: string;
}

const ConnectWallet = ({
  connectWallet,
  logout,
  buttonText,
  account,
}: ConnectWalletProps) => {
  return (
    <div className="connectWallet">
      {!account ?
        <button
          onClick={connectWallet}
          className="connectWallet button px-5 py-3 text-white bg-blue-500 rounded-md"
        >
          {buttonText}
        </button>
        :
        <a
          title="view on explorer (sepolia.etherscan.io)"
          href={"https://sepolia.etherscan.io/address/" + account}
          target="account"
          onClick={connectWallet}
          className="connectWallet button px-5 py-3 text-white bg-blue-500 rounded-md"
        >
          {buttonText}
        </a>}

      {account ? (
        <button
          onClick={logout}
          className="connectWallet button px-5 py-3 text-white bg-blue-500 rounded-md"
        >
          disconnect
        </button>
      ) : null}
    </div>
  );
};

export { ConnectWallet };
