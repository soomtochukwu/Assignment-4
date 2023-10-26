import { getProvider } from "./provider";

const connectWallet = async () => {
  const provider = getProvider();
  const signer = await provider.getSigner();

  return signer.address;
};

export { connectWallet };
