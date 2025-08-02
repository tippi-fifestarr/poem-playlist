import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";
import { type PropsWithChildren } from "react";
import { Network } from "@aptos-labs/ts-sdk";

const APTOS_API_KEY = process.env.NEXT_PUBLIC_APTOS_API_KEY || "";
const NETWORK = process.env.NEXT_PUBLIC_NETWORK === "mainnet" ? Network.MAINNET : Network.TESTNET;

export const WalletProvider = ({ children }: PropsWithChildren) => {
  return (
    <AptosWalletAdapterProvider
      autoConnect={true}
      dappConfig={{
        network: NETWORK,
        aptosApiKeys: APTOS_API_KEY ? {
          [NETWORK]: APTOS_API_KEY,
        } : undefined
      }}
      onError={(error) => {
        console.log("error", error);
      }}
    >
      {children}
    </AptosWalletAdapterProvider>
  );
};