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
exports.comdex = void 0;
//@ts-nocheck
const _60 = __importStar(require("./asset/v1beta1/asset"));
const _61 = __importStar(require("./asset/v1beta1/events"));
const _62 = __importStar(require("./asset/v1beta1/genesis"));
const _63 = __importStar(require("./asset/v1beta1/gov"));
const _64 = __importStar(require("./asset/v1beta1/msg"));
const _65 = __importStar(require("./asset/v1beta1/pair"));
const _66 = __importStar(require("./asset/v1beta1/params"));
const _67 = __importStar(require("./asset/v1beta1/querier"));
const _68 = __importStar(require("./oracle/v1beta1/genesis"));
const _69 = __importStar(require("./oracle/v1beta1/gov"));
const _70 = __importStar(require("./oracle/v1beta1/msg"));
const _71 = __importStar(require("./oracle/v1beta1/oracle"));
const _72 = __importStar(require("./oracle/v1beta1/params"));
const _73 = __importStar(require("./oracle/v1beta1/querier"));
const _74 = __importStar(require("./vault/v1beta1/events"));
const _75 = __importStar(require("./vault/v1beta1/genesis"));
const _76 = __importStar(require("./vault/v1beta1/msg"));
const _77 = __importStar(require("./vault/v1beta1/querier"));
const _78 = __importStar(require("./vault/v1beta1/vault"));
var comdex;
(function (comdex) {
    let asset;
    (function (asset) {
        asset.v1beta1 = {
            ..._60,
            ..._61,
            ..._62,
            ..._63,
            ..._64,
            ..._65,
            ..._66,
            ..._67
        };
    })(asset = comdex.asset || (comdex.asset = {}));
    let oracle;
    (function (oracle) {
        oracle.v1beta1 = {
            ..._68,
            ..._69,
            ..._70,
            ..._71,
            ..._72,
            ..._73
        };
    })(oracle = comdex.oracle || (comdex.oracle = {}));
    let vault;
    (function (vault) {
        vault.v1beta1 = {
            ..._74,
            ..._75,
            ..._76,
            ..._77,
            ..._78
        };
    })(vault = comdex.vault || (comdex.vault = {}));
})(comdex || (exports.comdex = comdex = {}));
