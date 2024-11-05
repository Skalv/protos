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
exports.liquidity = void 0;
//@ts-nocheck
const _223 = __importStar(require("./v1beta1/genesis"));
const _224 = __importStar(require("./v1beta1/liquidity"));
const _225 = __importStar(require("./v1beta1/query"));
const _226 = __importStar(require("./v1beta1/tx"));
const _498 = __importStar(require("./v1beta1/tx.amino"));
const _499 = __importStar(require("./v1beta1/tx.registry"));
const _500 = __importStar(require("./v1beta1/query.rpc.Query"));
const _501 = __importStar(require("./v1beta1/tx.rpc.msg"));
const _612 = __importStar(require("./rpc.query"));
const _613 = __importStar(require("./rpc.tx"));
var liquidity;
(function (liquidity) {
    liquidity.v1beta1 = {
        ..._223,
        ..._224,
        ..._225,
        ..._226,
        ..._498,
        ..._499,
        ..._500,
        ..._501
    };
    liquidity.ClientFactory = {
        ..._612,
        ..._613
    };
})(liquidity || (exports.liquidity = liquidity = {}));
