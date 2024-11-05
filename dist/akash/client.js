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
exports.getSigningAkashClient = exports.getSigningAkashClientOptions = exports.akashProtoRegistry = exports.akashAminoConverters = void 0;
//@ts-nocheck
const proto_signing_1 = require("@cosmjs/proto-signing");
const stargate_1 = require("@cosmjs/stargate");
const akashAuditV1beta1AuditRegistry = __importStar(require("./audit/v1beta1/audit.registry"));
const akashAuditV1beta2AuditRegistry = __importStar(require("./audit/v1beta2/audit.registry"));
const akashCertV1beta2CertRegistry = __importStar(require("./cert/v1beta2/cert.registry"));
const akashDeploymentV1beta1DeploymentRegistry = __importStar(require("./deployment/v1beta1/deployment.registry"));
const akashDeploymentV1beta2ServiceRegistry = __importStar(require("./deployment/v1beta2/service.registry"));
const akashMarketV1beta2ServiceRegistry = __importStar(require("./market/v1beta2/service.registry"));
const akashProviderV1beta1ProviderRegistry = __importStar(require("./provider/v1beta1/provider.registry"));
const akashProviderV1beta2ProviderRegistry = __importStar(require("./provider/v1beta2/provider.registry"));
const akashAuditV1beta1AuditAmino = __importStar(require("./audit/v1beta1/audit.amino"));
const akashAuditV1beta2AuditAmino = __importStar(require("./audit/v1beta2/audit.amino"));
const akashCertV1beta2CertAmino = __importStar(require("./cert/v1beta2/cert.amino"));
const akashDeploymentV1beta1DeploymentAmino = __importStar(require("./deployment/v1beta1/deployment.amino"));
const akashDeploymentV1beta2ServiceAmino = __importStar(require("./deployment/v1beta2/service.amino"));
const akashMarketV1beta2ServiceAmino = __importStar(require("./market/v1beta2/service.amino"));
const akashProviderV1beta1ProviderAmino = __importStar(require("./provider/v1beta1/provider.amino"));
const akashProviderV1beta2ProviderAmino = __importStar(require("./provider/v1beta2/provider.amino"));
exports.akashAminoConverters = {
    ...akashAuditV1beta1AuditAmino.AminoConverter,
    ...akashAuditV1beta2AuditAmino.AminoConverter,
    ...akashCertV1beta2CertAmino.AminoConverter,
    ...akashDeploymentV1beta1DeploymentAmino.AminoConverter,
    ...akashDeploymentV1beta2ServiceAmino.AminoConverter,
    ...akashMarketV1beta2ServiceAmino.AminoConverter,
    ...akashProviderV1beta1ProviderAmino.AminoConverter,
    ...akashProviderV1beta2ProviderAmino.AminoConverter
};
exports.akashProtoRegistry = [...akashAuditV1beta1AuditRegistry.registry, ...akashAuditV1beta2AuditRegistry.registry, ...akashCertV1beta2CertRegistry.registry, ...akashDeploymentV1beta1DeploymentRegistry.registry, ...akashDeploymentV1beta2ServiceRegistry.registry, ...akashMarketV1beta2ServiceRegistry.registry, ...akashProviderV1beta1ProviderRegistry.registry, ...akashProviderV1beta2ProviderRegistry.registry];
const getSigningAkashClientOptions = ({ defaultTypes = stargate_1.defaultRegistryTypes } = {}) => {
    const registry = new proto_signing_1.Registry([...defaultTypes, ...exports.akashProtoRegistry]);
    const aminoTypes = new stargate_1.AminoTypes({
        ...exports.akashAminoConverters
    });
    return {
        registry,
        aminoTypes
    };
};
exports.getSigningAkashClientOptions = getSigningAkashClientOptions;
const getSigningAkashClient = async ({ rpcEndpoint, signer, defaultTypes = stargate_1.defaultRegistryTypes }) => {
    const { registry, aminoTypes } = (0, exports.getSigningAkashClientOptions)({
        defaultTypes
    });
    const client = await stargate_1.SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
        registry: registry,
        aminoTypes
    });
    return client;
};
exports.getSigningAkashClient = getSigningAkashClient;
