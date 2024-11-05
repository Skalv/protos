//@ts-nocheck
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import { QueryClient } from "@cosmjs/stargate";
export const createRPCQueryClient = async ({ rpcEndpoint }) => {
    const tmClient = await Tendermint34Client.connect(rpcEndpoint);
    const client = new QueryClient(tmClient);
    return {
        cosmos: {
            auth: {
                v1beta1: (await import("../cosmos/auth/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
            },
            authz: {
                v1beta1: (await import("../cosmos/authz/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
            },
            bank: {
                v1beta1: (await import("../cosmos/bank/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
            },
            distribution: {
                v1beta1: (await import("../cosmos/distribution/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
            },
            feegrant: {
                v1beta1: (await import("../cosmos/feegrant/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
            },
            gov: {
                v1: (await import("../cosmos/gov/v1/query.rpc.Query")).createRpcQueryExtension(client),
                v1beta1: (await import("../cosmos/gov/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
            },
            group: {
                v1: (await import("../cosmos/group/v1/query.rpc.Query")).createRpcQueryExtension(client)
            },
            mint: {
                v1beta1: (await import("../cosmos/mint/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
            },
            params: {
                v1beta1: (await import("../cosmos/params/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
            },
            staking: {
                v1beta1: (await import("../cosmos/staking/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
            },
            tx: {
                v1beta1: (await import("../cosmos/tx/v1beta1/service.rpc.Service")).createRpcQueryExtension(client)
            },
            upgrade: {
                v1beta1: (await import("../cosmos/upgrade/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
            }
        },
        injective: {
            auction: {
                v1beta1: (await import("./auction/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
            },
            exchange: {
                v1beta1: (await import("./exchange/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
            },
            insurance: {
                v1beta1: (await import("./insurance/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
            },
            ocr: {
                v1beta1: (await import("./ocr/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
            },
            oracle: {
                v1beta1: (await import("./oracle/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
            },
            peggy: {
                v1: (await import("./peggy/v1/query.rpc.Query")).createRpcQueryExtension(client)
            },
            wasmx: {
                v1: (await import("./wasmx/v1/query.rpc.Query")).createRpcQueryExtension(client)
            }
        }
    };
};