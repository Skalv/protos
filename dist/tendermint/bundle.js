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
exports.tendermint = void 0;
//@ts-nocheck
const _351 = __importStar(require("./abci/types"));
const _352 = __importStar(require("./crypto/keys"));
const _353 = __importStar(require("./crypto/proof"));
const _354 = __importStar(require("./libs/bits/types"));
const _355 = __importStar(require("./p2p/types"));
const _356 = __importStar(require("./types/block"));
const _357 = __importStar(require("./types/evidence"));
const _358 = __importStar(require("./types/params"));
const _359 = __importStar(require("./types/types"));
const _360 = __importStar(require("./types/validator"));
const _361 = __importStar(require("./version/types"));
var tendermint;
(function (tendermint) {
    tendermint.abci = {
        ..._351
    };
    tendermint.crypto = {
        ..._352,
        ..._353
    };
    let libs;
    (function (libs) {
        libs.bits = {
            ..._354
        };
    })(libs = tendermint.libs || (tendermint.libs = {}));
    tendermint.p2p = {
        ..._355
    };
    tendermint.types = {
        ..._356,
        ..._357,
        ..._358,
        ..._359,
        ..._360
    };
    tendermint.version = {
        ..._361
    };
})(tendermint || (exports.tendermint = tendermint = {}));
