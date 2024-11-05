"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRPCQueryClient = void 0;
//@ts-nocheck
const tendermint_rpc_1 = require("@cosmjs/tendermint-rpc");
const stargate_1 = require("@cosmjs/stargate");
const createRPCQueryClient = async ({ rpcEndpoint }) => {
    const tmClient = await tendermint_rpc_1.Tendermint34Client.connect(rpcEndpoint);
    const client = new stargate_1.QueryClient(tmClient);
    return {
        cosmos: {
            auth: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("../cosmos/auth/v1beta1/query.rpc.Query")))).createRpcQueryExtension(client)
            },
            authz: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("../cosmos/authz/v1beta1/query.rpc.Query")))).createRpcQueryExtension(client)
            },
            bank: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("../cosmos/bank/v1beta1/query.rpc.Query")))).createRpcQueryExtension(client)
            },
            distribution: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("../cosmos/distribution/v1beta1/query.rpc.Query")))).createRpcQueryExtension(client)
            },
            feegrant: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("../cosmos/feegrant/v1beta1/query.rpc.Query")))).createRpcQueryExtension(client)
            },
            gov: {
                v1: (await Promise.resolve().then(() => __importStar(require("../cosmos/gov/v1/query.rpc.Query")))).createRpcQueryExtension(client),
                v1beta1: (await Promise.resolve().then(() => __importStar(require("../cosmos/gov/v1beta1/query.rpc.Query")))).createRpcQueryExtension(client)
            },
            group: {
                v1: (await Promise.resolve().then(() => __importStar(require("../cosmos/group/v1/query.rpc.Query")))).createRpcQueryExtension(client)
            },
            mint: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("../cosmos/mint/v1beta1/query.rpc.Query")))).createRpcQueryExtension(client)
            },
            params: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("../cosmos/params/v1beta1/query.rpc.Query")))).createRpcQueryExtension(client)
            },
            staking: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("../cosmos/staking/v1beta1/query.rpc.Query")))).createRpcQueryExtension(client)
            },
            tx: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("../cosmos/tx/v1beta1/service.rpc.Service")))).createRpcQueryExtension(client)
            },
            upgrade: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("../cosmos/upgrade/v1beta1/query.rpc.Query")))).createRpcQueryExtension(client)
            }
        },
        osmosis: {
            downtimedetector: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("./downtime-detector/v1beta1/query.rpc.Query")))).createRpcQueryExtension(client)
            },
            epochs: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("./epochs/query.rpc.Query")))).createRpcQueryExtension(client)
            },
            gamm: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("./gamm/v1beta1/query.rpc.Query")))).createRpcQueryExtension(client),
                v2: (await Promise.resolve().then(() => __importStar(require("./gamm/v2/query.rpc.Query")))).createRpcQueryExtension(client)
            },
            ibcratelimit: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("./ibc-rate-limit/v1beta1/query.rpc.Query")))).createRpcQueryExtension(client)
            },
            incentives: (await Promise.resolve().then(() => __importStar(require("./incentives/query.rpc.Query")))).createRpcQueryExtension(client),
            lockup: (await Promise.resolve().then(() => __importStar(require("./lockup/query.rpc.Query")))).createRpcQueryExtension(client),
            mint: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("./mint/v1beta1/query.rpc.Query")))).createRpcQueryExtension(client)
            },
            poolincentives: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("./pool-incentives/v1beta1/query.rpc.Query")))).createRpcQueryExtension(client)
            },
            protorev: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("./protorev/v1beta1/query.rpc.Query")))).createRpcQueryExtension(client)
            },
            superfluid: (await Promise.resolve().then(() => __importStar(require("./superfluid/query.rpc.Query")))).createRpcQueryExtension(client),
            swaprouter: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("./swaprouter/v1beta1/query.rpc.Query")))).createRpcQueryExtension(client)
            },
            tokenfactory: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("./tokenfactory/v1beta1/query.rpc.Query")))).createRpcQueryExtension(client)
            },
            twap: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("./twap/v1beta1/query.rpc.Query")))).createRpcQueryExtension(client)
            },
            txfees: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("./txfees/v1beta1/query.rpc.Query")))).createRpcQueryExtension(client)
            },
            valsetpref: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("./valset-pref/v1beta1/query.rpc.Query")))).createRpcQueryExtension(client)
            }
        }
    };
};
exports.createRPCQueryClient = createRPCQueryClient;