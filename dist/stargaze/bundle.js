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
exports.stargaze = void 0;
//@ts-nocheck
const _348 = __importStar(require("./mint/v1beta1/genesis"));
const _349 = __importStar(require("./mint/v1beta1/mint"));
const _350 = __importStar(require("./mint/v1beta1/query"));
const _590 = __importStar(require("./mint/v1beta1/query.rpc.Query"));
const _625 = __importStar(require("./rpc.query"));
var stargaze;
(function (stargaze) {
    let mint;
    (function (mint) {
        mint.v1beta1 = {
            ..._348,
            ..._349,
            ..._350,
            ..._590
        };
    })(mint = stargaze.mint || (stargaze.mint = {}));
    stargaze.ClientFactory = {
        ..._625
    };
})(stargaze || (exports.stargaze = stargaze = {}));
