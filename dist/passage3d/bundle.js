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
exports.passage3d = void 0;
//@ts-nocheck
const _295 = __importStar(require("./claim/v1beta1/claim_record"));
const _296 = __importStar(require("./claim/v1beta1/genesis"));
const _297 = __importStar(require("./claim/v1beta1/params"));
const _298 = __importStar(require("./claim/v1beta1/query"));
const _299 = __importStar(require("./claim/v1beta1/tx"));
const _549 = __importStar(require("./claim/v1beta1/tx.amino"));
const _550 = __importStar(require("./claim/v1beta1/tx.registry"));
const _551 = __importStar(require("./claim/v1beta1/query.rpc.Query"));
const _552 = __importStar(require("./claim/v1beta1/tx.rpc.msg"));
const _618 = __importStar(require("./rpc.query"));
const _619 = __importStar(require("./rpc.tx"));
var passage3d;
(function (passage3d) {
    let claim;
    (function (claim) {
        claim.v1beta1 = {
            ..._295,
            ..._296,
            ..._297,
            ..._298,
            ..._299,
            ..._549,
            ..._550,
            ..._551,
            ..._552
        };
    })(claim = passage3d.claim || (passage3d.claim = {}));
    passage3d.ClientFactory = {
        ..._618,
        ..._619
    };
})(passage3d || (exports.passage3d = passage3d = {}));
