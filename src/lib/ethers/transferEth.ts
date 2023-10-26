import { parseEther } from "ethers/utils";
import { getSigner } from "./signer";
import { AddressLike } from "ethers";

const transferEth = async (destinationWallet: AddressLike, amount: number) => {
  const signer = await getSigner();
  const tx = await signer.sendTransaction({
    to: destinationWallet,
    value: parseEther(`${amount}`), // parseEther converts amount to a bigint => amount * 10**18
  });

  const receipt = await tx.wait();

  if (!receipt) {
    alert("Transaction failed");
    return false;
  }
  alert(`Tx Hash: ${receipt.hash}`);
  return Boolean(receipt.status);
};

export { transferEth };
