import { ContractFactory } from "ethers";
import { CONTRACT_ABI } from "../abi";
import { BYTE_CODE } from "../bytecode";
import { getSigner } from "./signer";

const deployContract = async () => {
  const signer = await getSigner();
  const contractFactory = new ContractFactory(CONTRACT_ABI, BYTE_CODE, signer);
  const baseContract = await contractFactory.deploy(500000);
  const baseContractWithDeploymentTx = await baseContract.waitForDeployment();
  const deploymentTx = baseContractWithDeploymentTx.deploymentTransaction();
  const newContractAddress = await baseContractWithDeploymentTx.getAddress();
  console.log({
    deploymentTx,
    address: newContractAddress,
  });

  return newContractAddress;
};

export { deployContract };
