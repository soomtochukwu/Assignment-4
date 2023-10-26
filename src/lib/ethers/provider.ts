import { ethers, BrowserProvider } from "ethers";

let provider: BrowserProvider | undefined;

const getProvider = () => {
  if (!provider) {
    if (!window.ethereum) throw Error("Install a crypto wallet");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    provider = new ethers.BrowserProvider(window.ethereum as any);
  }
  return provider;
};

export { getProvider };
