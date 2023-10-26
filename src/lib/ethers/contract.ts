import { CONTRACT_ABI } from "../abi";
import { BaseContract } from "ethers";
import { getProvider } from "./provider";

let contract: BaseContract | undefined;

const DEFAULT_CONTRACT_ADDRESS = "0xED1266D037a13Fe14e81c0a593672275e61A81F0"; // on Polygon

const getContract = (at?: string) => {
  if (!contract) {
    const provider = getProvider();
    contract = new BaseContract(at ?? DEFAULT_CONTRACT_ADDRESS, CONTRACT_ABI, provider);
  } 
  return contract;
};

export { getContract };
