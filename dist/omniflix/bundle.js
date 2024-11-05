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
exports.omniflix = void 0;
//@ts-nocheck
const _227 = __importStar(require("./alloc/v1beta1/genesis"));
const _228 = __importStar(require("./alloc/v1beta1/params"));
const _229 = __importStar(require("./alloc/v1beta1/query"));
const _230 = __importStar(require("./alloc/v1beta1/tx"));
const _502 = __importStar(require("./alloc/v1beta1/query.rpc.Query"));
const _614 = __importStar(require("./rpc.query"));
const _615 = __importStar(require("./rpc.tx"));
var omniflix;
(function (omniflix) {
    let alloc;
    (function (alloc) {
        alloc.v1beta1 = {
            ..._227,
            ..._228,
            ..._229,
            ..._230,
            ..._502
        };
    })(alloc = omniflix.alloc || (omniflix.alloc = {}));
    omniflix.ClientFactory = {
        ..._614,
        ..._615
    };
})(omniflix || (exports.omniflix = omniflix = {}));
