import { Signer } from "ethers";
import { getProvider } from "./provider";

let signer: Signer | undefined;

const getSigner = async () => {
  if (!signer) {
    signer = await getProvider().getSigner();
  }
  return signer;
};

export { getSigner };
