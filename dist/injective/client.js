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
exports.getSigningInjectiveClient = exports.getSigningInjectiveClientOptions = exports.injectiveProtoRegistry = exports.injectiveAminoConverters = void 0;
//@ts-nocheck
const proto_signing_1 = require("@cosmjs/proto-signing");
const stargate_1 = require("@cosmjs/stargate");
const injectiveAuctionV1beta1TxRegistry = __importStar(require("./auction/v1beta1/tx.registry"));
const injectiveExchangeV1beta1TxRegistry = __importStar(require("./exchange/v1beta1/tx.registry"));
const injectiveInsuranceV1beta1TxRegistry = __importStar(require("./insurance/v1beta1/tx.registry"));
const injectiveOcrV1beta1TxRegistry = __importStar(require("./ocr/v1beta1/tx.registry"));
const injectiveOracleV1beta1TxRegistry = __importStar(require("./oracle/v1beta1/tx.registry"));
const injectivePeggyV1MsgsRegistry = __importStar(require("./peggy/v1/msgs.registry"));
const injectiveAuctionV1beta1TxAmino = __importStar(require("./auction/v1beta1/tx.amino"));
const injectiveExchangeV1beta1TxAmino = __importStar(require("./exchange/v1beta1/tx.amino"));
const injectiveInsuranceV1beta1TxAmino = __importStar(require("./insurance/v1beta1/tx.amino"));
const injectiveOcrV1beta1TxAmino = __importStar(require("./ocr/v1beta1/tx.amino"));
const injectiveOracleV1beta1TxAmino = __importStar(require("./oracle/v1beta1/tx.amino"));
const injectivePeggyV1MsgsAmino = __importStar(require("./peggy/v1/msgs.amino"));
exports.injectiveAminoConverters = {
    ...injectiveAuctionV1beta1TxAmino.AminoConverter,
    ...injectiveExchangeV1beta1TxAmino.AminoConverter,
    ...injectiveInsuranceV1beta1TxAmino.AminoConverter,
    ...injectiveOcrV1beta1TxAmino.AminoConverter,
    ...injectiveOracleV1beta1TxAmino.AminoConverter,
    ...injectivePeggyV1MsgsAmino.AminoConverter
};
exports.injectiveProtoRegistry = [...injectiveAuctionV1beta1TxRegistry.registry, ...injectiveExchangeV1beta1TxRegistry.registry, ...injectiveInsuranceV1beta1TxRegistry.registry, ...injectiveOcrV1beta1TxRegistry.registry, ...injectiveOracleV1beta1TxRegistry.registry, ...injectivePeggyV1MsgsRegistry.registry];
const getSigningInjectiveClientOptions = ({ defaultTypes = stargate_1.defaultRegistryTypes } = {}) => {
    const registry = new proto_signing_1.Registry([...defaultTypes, ...exports.injectiveProtoRegistry]);
    const aminoTypes = new stargate_1.AminoTypes({
        ...exports.injectiveAminoConverters
    });
    return {
        registry,
        aminoTypes
    };
};
exports.getSigningInjectiveClientOptions = getSigningInjectiveClientOptions;
const getSigningInjectiveClient = async ({ rpcEndpoint, signer, defaultTypes = stargate_1.defaultRegistryTypes }) => {
    const { registry, aminoTypes } = (0, exports.getSigningInjectiveClientOptions)({
        defaultTypes
    });
    const client = await stargate_1.SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
        registry: registry,
        aminoTypes
    });
    return client;
};
exports.getSigningInjectiveClient = getSigningInjectiveClient;
