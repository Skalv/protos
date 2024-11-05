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
exports.persistence = void 0;
//@ts-nocheck
const _300 = __importStar(require("./halving/v1beta1/genesis"));
const _301 = __importStar(require("./halving/v1beta1/halving"));
const _302 = __importStar(require("./halving/v1beta1/query"));
const _553 = __importStar(require("./halving/v1beta1/query.rpc.Query"));
const _620 = __importStar(require("./rpc.query"));
var persistence;
(function (persistence) {
    let halving;
    (function (halving) {
        halving.v1beta1 = {
            ..._300,
            ..._301,
            ..._302,
            ..._553
        };
    })(halving = persistence.halving || (persistence.halving = {}));
    persistence.ClientFactory = {
        ..._620
    };
})(persistence || (exports.persistence = persistence = {}));
