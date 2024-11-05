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
exports.BitCannaGlobal = void 0;
//@ts-nocheck
const _54 = __importStar(require("../bcna/bitcannaid"));
const _55 = __importStar(require("../bcna/genesis"));
const _56 = __importStar(require("../bcna/params"));
const _57 = __importStar(require("../bcna/query"));
const _58 = __importStar(require("../bcna/supplychain"));
const _59 = __importStar(require("../bcna/tx"));
const _405 = __importStar(require("../bcna/tx.amino"));
const _406 = __importStar(require("../bcna/tx.registry"));
const _407 = __importStar(require("../bcna/query.rpc.Query"));
const _408 = __importStar(require("../bcna/tx.rpc.msg"));
const _601 = __importStar(require("./rpc.query"));
const _602 = __importStar(require("./rpc.tx"));
var BitCannaGlobal;
(function (BitCannaGlobal) {
    let bcna;
    (function (bcna_1) {
        bcna_1.bcna = {
            ..._54,
            ..._55,
            ..._56,
            ..._57,
            ..._58,
            ..._59,
            ..._405,
            ..._406,
            ..._407,
            ..._408
        };
    })(bcna = BitCannaGlobal.bcna || (BitCannaGlobal.bcna = {}));
    BitCannaGlobal.ClientFactory = {
        ..._601,
        ..._602
    };
})(BitCannaGlobal || (exports.BitCannaGlobal = BitCannaGlobal = {}));
