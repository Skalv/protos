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
exports.injective = void 0;
//@ts-nocheck
const _178 = __importStar(require("./auction/v1beta1/auction"));
const _179 = __importStar(require("./auction/v1beta1/genesis"));
const _180 = __importStar(require("./auction/v1beta1/query"));
const _181 = __importStar(require("./auction/v1beta1/tx"));
const _182 = __importStar(require("./crypto/v1beta1/ethsecp256k1/keys"));
const _183 = __importStar(require("./exchange/v1beta1/authz"));
const _184 = __importStar(require("./exchange/v1beta1/events"));
const _185 = __importStar(require("./exchange/v1beta1/exchange"));
const _186 = __importStar(require("./exchange/v1beta1/genesis"));
const _187 = __importStar(require("./exchange/v1beta1/query"));
const _188 = __importStar(require("./exchange/v1beta1/tx"));
const _189 = __importStar(require("./insurance/v1beta1/genesis"));
const _190 = __importStar(require("./insurance/v1beta1/insurance"));
const _191 = __importStar(require("./insurance/v1beta1/query"));
const _192 = __importStar(require("./insurance/v1beta1/tx"));
const _193 = __importStar(require("./ocr/v1beta1/genesis"));
const _194 = __importStar(require("./ocr/v1beta1/ocr"));
const _195 = __importStar(require("./ocr/v1beta1/query"));
const _196 = __importStar(require("./ocr/v1beta1/tx"));
const _197 = __importStar(require("./oracle/v1beta1/events"));
const _198 = __importStar(require("./oracle/v1beta1/genesis"));
const _199 = __importStar(require("./oracle/v1beta1/oracle"));
const _200 = __importStar(require("./oracle/v1beta1/proposal"));
const _201 = __importStar(require("./oracle/v1beta1/query"));
const _202 = __importStar(require("./oracle/v1beta1/tx"));
const _203 = __importStar(require("./peggy/v1/attestation"));
const _204 = __importStar(require("./peggy/v1/batch"));
const _205 = __importStar(require("./peggy/v1/ethereum_signer"));
const _206 = __importStar(require("./peggy/v1/events"));
const _207 = __importStar(require("./peggy/v1/genesis"));
const _208 = __importStar(require("./peggy/v1/msgs"));
const _209 = __importStar(require("./peggy/v1/pool"));
const _210 = __importStar(require("./peggy/v1/proposal"));
const _211 = __importStar(require("./peggy/v1/query"));
const _212 = __importStar(require("./peggy/v1/types"));
const _213 = __importStar(require("./types/v1beta1/account"));
const _214 = __importStar(require("./types/v1beta1/tx_ext"));
const _215 = __importStar(require("./types/v1beta1/tx_response"));
const _216 = __importStar(require("./wasmx/v1/genesis"));
const _217 = __importStar(require("./wasmx/v1/query"));
const _218 = __importStar(require("./wasmx/v1/tx"));
const _219 = __importStar(require("./wasmx/v1/wasmx"));
const _472 = __importStar(require("./auction/v1beta1/tx.amino"));
const _473 = __importStar(require("./exchange/v1beta1/tx.amino"));
const _474 = __importStar(require("./insurance/v1beta1/tx.amino"));
const _475 = __importStar(require("./ocr/v1beta1/tx.amino"));
const _476 = __importStar(require("./oracle/v1beta1/tx.amino"));
const _477 = __importStar(require("./peggy/v1/msgs.amino"));
const _478 = __importStar(require("./auction/v1beta1/tx.registry"));
const _479 = __importStar(require("./exchange/v1beta1/tx.registry"));
const _480 = __importStar(require("./insurance/v1beta1/tx.registry"));
const _481 = __importStar(require("./ocr/v1beta1/tx.registry"));
const _482 = __importStar(require("./oracle/v1beta1/tx.registry"));
const _483 = __importStar(require("./peggy/v1/msgs.registry"));
const _484 = __importStar(require("./auction/v1beta1/query.rpc.Query"));
const _485 = __importStar(require("./exchange/v1beta1/query.rpc.Query"));
const _486 = __importStar(require("./insurance/v1beta1/query.rpc.Query"));
const _487 = __importStar(require("./ocr/v1beta1/query.rpc.Query"));
const _488 = __importStar(require("./oracle/v1beta1/query.rpc.Query"));
const _489 = __importStar(require("./peggy/v1/query.rpc.Query"));
const _490 = __importStar(require("./wasmx/v1/query.rpc.Query"));
const _491 = __importStar(require("./auction/v1beta1/tx.rpc.msg"));
const _492 = __importStar(require("./exchange/v1beta1/tx.rpc.msg"));
const _493 = __importStar(require("./insurance/v1beta1/tx.rpc.msg"));
const _494 = __importStar(require("./ocr/v1beta1/tx.rpc.msg"));
const _495 = __importStar(require("./oracle/v1beta1/tx.rpc.msg"));
const _496 = __importStar(require("./peggy/v1/msgs.rpc.msg"));
const _609 = __importStar(require("./rpc.query"));
const _610 = __importStar(require("./rpc.tx"));
var injective;
(function (injective) {
    let auction;
    (function (auction) {
        auction.v1beta1 = {
            ..._178,
            ..._179,
            ..._180,
            ..._181,
            ..._472,
            ..._478,
            ..._484,
            ..._491
        };
    })(auction = injective.auction || (injective.auction = {}));
    let crypto;
    (function (crypto) {
        let v1beta1;
        (function (v1beta1) {
            v1beta1.ethsecp256k1 = {
                ..._182
            };
        })(v1beta1 = crypto.v1beta1 || (crypto.v1beta1 = {}));
    })(crypto = injective.crypto || (injective.crypto = {}));
    let exchange;
    (function (exchange) {
        exchange.v1beta1 = {
            ..._183,
            ..._184,
            ..._185,
            ..._186,
            ..._187,
            ..._188,
            ..._473,
            ..._479,
            ..._485,
            ..._492
        };
    })(exchange = injective.exchange || (injective.exchange = {}));
    let insurance;
    (function (insurance) {
        insurance.v1beta1 = {
            ..._189,
            ..._190,
            ..._191,
            ..._192,
            ..._474,
            ..._480,
            ..._486,
            ..._493
        };
    })(insurance = injective.insurance || (injective.insurance = {}));
    let ocr;
    (function (ocr) {
        ocr.v1beta1 = {
            ..._193,
            ..._194,
            ..._195,
            ..._196,
            ..._475,
            ..._481,
            ..._487,
            ..._494
        };
    })(ocr = injective.ocr || (injective.ocr = {}));
    let oracle;
    (function (oracle) {
        oracle.v1beta1 = {
            ..._197,
            ..._198,
            ..._199,
            ..._200,
            ..._201,
            ..._202,
            ..._476,
            ..._482,
            ..._488,
            ..._495
        };
    })(oracle = injective.oracle || (injective.oracle = {}));
    let peggy;
    (function (peggy) {
        peggy.v1 = {
            ..._203,
            ..._204,
            ..._205,
            ..._206,
            ..._207,
            ..._208,
            ..._209,
            ..._210,
            ..._211,
            ..._212,
            ..._477,
            ..._483,
            ..._489,
            ..._496
        };
    })(peggy = injective.peggy || (injective.peggy = {}));
    let types;
    (function (types) {
        types.v1beta1 = {
            ..._213,
            ..._214,
            ..._215
        };
    })(types = injective.types || (injective.types = {}));
    let wasmx;
    (function (wasmx) {
        wasmx.v1 = {
            ..._216,
            ..._217,
            ..._218,
            ..._219,
            ..._490
        };
    })(wasmx = injective.wasmx || (injective.wasmx = {}));
    injective.ClientFactory = {
        ..._609,
        ..._610
    };
})(injective || (exports.injective = injective = {}));
