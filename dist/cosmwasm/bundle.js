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
exports.cosmwasm = void 0;
//@ts-nocheck
const _143 = __importStar(require("./wasm/v1/authz"));
const _144 = __importStar(require("./wasm/v1/genesis"));
const _145 = __importStar(require("./wasm/v1/ibc"));
const _146 = __importStar(require("./wasm/v1/proposal"));
const _147 = __importStar(require("./wasm/v1/query"));
const _148 = __importStar(require("./wasm/v1/tx"));
const _149 = __importStar(require("./wasm/v1/types"));
const _452 = __importStar(require("./wasm/v1/tx.amino"));
const _453 = __importStar(require("./wasm/v1/tx.registry"));
const _454 = __importStar(require("./wasm/v1/query.rpc.Query"));
const _455 = __importStar(require("./wasm/v1/tx.rpc.msg"));
const _605 = __importStar(require("./rpc.query"));
const _606 = __importStar(require("./rpc.tx"));
var cosmwasm;
(function (cosmwasm) {
    let wasm;
    (function (wasm) {
        wasm.v1 = {
            ..._143,
            ..._144,
            ..._145,
            ..._146,
            ..._147,
            ..._148,
            ..._149,
            ..._452,
            ..._453,
            ..._454,
            ..._455
        };
    })(wasm = cosmwasm.wasm || (cosmwasm.wasm = {}));
    cosmwasm.ClientFactory = {
        ..._605,
        ..._606
    };
})(cosmwasm || (exports.cosmwasm = cosmwasm = {}));
