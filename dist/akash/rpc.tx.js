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
exports.createRPCMsgClient = void 0;
const createRPCMsgClient = async ({ rpc }) => ({
    akash: {
        audit: {
            v1beta1: new (await Promise.resolve().then(() => __importStar(require("./audit/v1beta1/audit.rpc.msg")))).MsgClientImpl(rpc),
            v1beta2: new (await Promise.resolve().then(() => __importStar(require("./audit/v1beta2/audit.rpc.msg")))).MsgClientImpl(rpc)
        },
        cert: {
            v1beta2: new (await Promise.resolve().then(() => __importStar(require("./cert/v1beta2/cert.rpc.msg")))).MsgClientImpl(rpc)
        },
        deployment: {
            v1beta1: new (await Promise.resolve().then(() => __importStar(require("./deployment/v1beta1/deployment.rpc.msg")))).MsgClientImpl(rpc),
            v1beta2: new (await Promise.resolve().then(() => __importStar(require("./deployment/v1beta2/service.rpc.msg")))).MsgClientImpl(rpc)
        },
        market: {
            v1beta2: new (await Promise.resolve().then(() => __importStar(require("./market/v1beta2/service.rpc.msg")))).MsgClientImpl(rpc)
        },
        provider: {
            v1beta1: new (await Promise.resolve().then(() => __importStar(require("./provider/v1beta1/provider.rpc.msg")))).MsgClientImpl(rpc),
            v1beta2: new (await Promise.resolve().then(() => __importStar(require("./provider/v1beta2/provider.rpc.msg")))).MsgClientImpl(rpc)
        }
    },
    cosmos: {
        authz: {
            v1beta1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/authz/v1beta1/tx.rpc.msg")))).MsgClientImpl(rpc)
        },
        bank: {
            v1beta1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/bank/v1beta1/tx.rpc.msg")))).MsgClientImpl(rpc)
        },
        distribution: {
            v1beta1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/distribution/v1beta1/tx.rpc.msg")))).MsgClientImpl(rpc)
        },
        feegrant: {
            v1beta1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/feegrant/v1beta1/tx.rpc.msg")))).MsgClientImpl(rpc)
        },
        gov: {
            v1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/gov/v1/tx.rpc.msg")))).MsgClientImpl(rpc),
            v1beta1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/gov/v1beta1/tx.rpc.msg")))).MsgClientImpl(rpc)
        },
        group: {
            v1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/group/v1/tx.rpc.msg")))).MsgClientImpl(rpc)
        },
        staking: {
            v1beta1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/staking/v1beta1/tx.rpc.msg")))).MsgClientImpl(rpc)
        },
        upgrade: {
            v1beta1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/upgrade/v1beta1/tx.rpc.msg")))).MsgClientImpl(rpc)
        },
        vesting: {
            v1beta1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/vesting/v1beta1/tx.rpc.msg")))).MsgClientImpl(rpc)
        }
    }
});
exports.createRPCMsgClient = createRPCMsgClient;
