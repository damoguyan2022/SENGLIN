import type { Chain } from "@wagmi/core";

export const base = {
  id: 84531,
  name: "Base",
  network: "Base Goerli",
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: {
    public: {
      http: ["https://goerli.base.org"],
    },
    default: {
      http: ["https://goerli.base.org"],
    },
  },
} as const satisfies Chain;

export const mxc = {
  id: 5167003,
  name: "MXC",
  network: "Wannsee",
  nativeCurrency: {
    name: "Test MXC Token",
    symbol: "MXC",
    decimals: 18,
  },
  rpcUrls: {
    public: {
      http: ["https://wannsee-rpc.mxc.com"],
    },
    default: {
      http: ["https://wannsee-rpc.mxc.com"],
    },
  },
  blockExplorers: {
    default: {
      name: "L2 Explorer",
      url: "https://wannsee-explorer.mxc.com",
    },
  },
  testnet: true,
} as const satisfies Chain;
