import { AddressLike, formatEther } from "ethers";
import { getProvider } from "./provider";

async function getBalance(account: AddressLike) {
  const balance = await getProvider().getBalance(account);

  const formattedBalance = formatEther(balance);

  return formattedBalance;
}

export { getBalance };
