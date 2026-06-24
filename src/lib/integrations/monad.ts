import { createPublicClient, createWalletClient, http, parseAbi, encodeFunctionData, decodeFunctionData } from "viem";
import { monadTestnet } from "viem/chains";

export const monadChain = {
  ...monadTestnet,
  id: Number(process.env.MONAD_CHAIN_ID) || 10143,
  rpcUrls: { default: { http: [process.env.MONAD_RPC_URL || "https://rpc.monad.xyz"] } },
  blockExplorerUrls: { default: [process.env.MONAD_EXPLORER_URL || "https://monad.xyz"] },
};

export const monadPublicClient = createPublicClient({
  chain: monadChain,
  transport: http(),
});

export async function getBalance(address: `0x${string}`) {
  return monadPublicClient.getBalance({ address });
}

export async function sendMonadTransaction(to: `0x${string}`, value: bigint) {
  const privateKey = process.env.MONAD_PRIVATE_KEY as `0x${string}`;
  const walletClient = createWalletClient({
    chain: monadChain,
    transport: http(),
    privateKey,
  } as any);
  const hash = await walletClient.sendTransaction({
    account: privateKey,
    to,
    value,
    chain: monadChain,
  });
  return hash;
}

export const MONAD_ABI = [
  {
    name: "balanceOf",
    type: "function",
    stateMutability: "view",
    inputs: [{ name: "owner", type: "address" }],
    outputs: [{ name: "", type: "uint256" }],
  },
  {
    name: "transfer",
    type: "function",
    stateMutability: "nonpayable",
    inputs: [
      { name: "to", type: "address" },
      { name: "amount", type: "uint256" }],
    outputs: [{ name: "", type: "bool" }],
  },
] as const;

export function encodeTransfer(to: `0x${string}`, amount: bigint) {
  return encodeFunctionData({ abi: MONAD_ABI, functionName: "transfer", args: [to, amount] });
}

export function decodeTransferData(data: `0x${string}`) {
  return decodeFunctionData({ abi: MONAD_ABI, data } as any);
}

const monadExports = {
  monadPublicClient,
  monadChain,
  MONAD_ABI,
};

export default monadExports;
