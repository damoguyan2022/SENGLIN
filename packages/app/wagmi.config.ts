import { defineConfig } from "@wagmi/cli";
import { foundry } from "@wagmi/cli/plugins";
import * as wagmiChains from "@wagmi/core/chains";
import { base, mxc } from "./src/domain/chain";
import foundryJson from "../contracts/broadcast/Deploy.s.sol/31337/run-latest.json";
import { headerSyncABI, signalServiceABI } from "./src/abi";
import { Abi } from "abitype";

const chains = { ...wagmiChains, base, mxc };

export default defineConfig({
  out: "src/generated.ts",
  contracts: [
    {
      name: "SignalService",
      abi: signalServiceABI as Abi,
      address: {
        [chains.arbitrumGoerli.id]: "0x435eeAeDe938dFD69906fCaBAe4e1f6b6B5af4dF",
        [chains.mxc.id]: "0x0000777700000000000000000000000000000007",
      },
    },
    {
      name: "MXCL2",
      abi: headerSyncABI as Abi, // only using headerSyncABI for now
      address: {
        [chains.mxc.id]: "0x0000777700000000000000000000000000000001",
      },
    },
  ],
  plugins: [
    foundry({
      deployments: {
        Foo: {
          [chains.foundry.id]: foundryJson.transactions[0].contractAddress as `0x${string}`,
          // OR
          // [chains.foundry.id]: "0xblahblahblah"
        },
      },
      project: "../../",
    }),
  ],
});
