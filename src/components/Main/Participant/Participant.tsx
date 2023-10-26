import { AddressLike } from "ethers";
import { FC, useEffect, useState } from "react";

interface ParticipantProps {
  account: string;
  participate: (amount: number) => Promise<number>;
  // transferEth: (destination: AddressLike, amount: number) => Promise<boolean>;
  logout: () => void;
}

const Participant: FC<ParticipantProps> = ({
  account,
  logout,
  // getBalance,
  participate,
}) => {
  const [balance, setBalance] = useState<string>();
  const [amount, setAmount] = useState<number>(0);
  const [destination, setDestination] = useState<string>("");

  // useEffect(() => {
  //   async function loadBalance() {
  //     const balance = await getBalance(account);
  //     const roundedOffBalance = parseFloat(balance).toFixed(3);
  //     setBalance(roundedOffBalance);
  //   }

    // loadBalance();
  }, 
  // [account, getBalance]);

  return (
    <section className="space-y-6">
      <div>
        <h3 className="mb-2 text-xl font-medium text-gray-700">Account</h3>
        <p className="flex items-center space-x-3">
          <span>{account}</span>
          <button
            type="button"
            onClick={logout}
            className="px-5 py-3 text-white bg-blue-500 rounded-md"
          >
            logout
          </button>
        </p>
      </div>
      <div>
        <h3 className="mb-2 text-xl text-gray-700">Balance</h3>
        <p>{balance ? `${balance} ETH` : "Loading balance..."}</p>
      </div>
      <div>
        <h3 className="mb-2 text-xl text-gray-700">Transfer Eth</h3>
        <div>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              await transferEth(destination, amount);
            }}
            className="space-y-3"
          >
            <div>
              <label className="mb-1.5">Amount</label>
              <input
                value={amount}
                onChange={(e) => setAmount(e.currentTarget.valueAsNumber)}
                type="number"
                className="p-4 w-full rounded-md border border-slate-300"
                step="0.0001"
                placeholder="Enter amount"
              />
            </div>
            <div>
              <label className="mb-1.5">Destination Wallet</label>
              <input
                value={destination}
                onChange={(e) => setDestination(e.currentTarget.value)}
                type="text"
                className="p-4 w-full rounded-md border border-slate-300"
                placeholder="Enter wallet address"
              />
            </div>
            <div className="flex justify-end">
              <button
                className="px-5 py-3 text-white bg-blue-500 rounded-md"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export { Participant };
