import { parseEther } from "ethers";
import { getContract } from "./contract";
import { getSigner } from "./signer";

const transferToken = async (destination: string, amount: number, tokenAddress?: string) => {
  const signer = await getSigner();
  const contract = getContract(tokenAddress);
  const bigIntAmount = parseEther(`${amount}`); // parseEther converts amount to a bigint => amount * 10**18
  const tx = await contract.connect(signer).getFunction("transfer").send(destination, bigIntAmount);
  const receipt = await tx.wait();

  console.log({
    receipt,
  });

  if (!receipt) {
    alert("Transaction failed");
    return false;
  }
  alert(`Tx Hash: ${receipt.hash}`);
  return Boolean(receipt.status);
};

export { transferToken };
