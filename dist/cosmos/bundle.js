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
exports.cosmos = void 0;
//@ts-nocheck
const _81 = __importStar(require("./auth/v1beta1/auth"));
const _82 = __importStar(require("./auth/v1beta1/genesis"));
const _83 = __importStar(require("./auth/v1beta1/query"));
const _84 = __importStar(require("./authz/v1beta1/authz"));
const _85 = __importStar(require("./authz/v1beta1/event"));
const _86 = __importStar(require("./authz/v1beta1/genesis"));
const _87 = __importStar(require("./authz/v1beta1/query"));
const _88 = __importStar(require("./authz/v1beta1/tx"));
const _89 = __importStar(require("./bank/v1beta1/authz"));
const _90 = __importStar(require("./bank/v1beta1/bank"));
const _91 = __importStar(require("./bank/v1beta1/genesis"));
const _92 = __importStar(require("./bank/v1beta1/query"));
const _93 = __importStar(require("./bank/v1beta1/tx"));
const _94 = __importStar(require("./base/abci/v1beta1/abci"));
const _95 = __importStar(require("./base/query/v1beta1/pagination"));
const _96 = __importStar(require("./base/reflection/v2alpha1/reflection"));
const _97 = __importStar(require("./base/v1beta1/coin"));
const _98 = __importStar(require("./crypto/ed25519/keys"));
const _99 = __importStar(require("./crypto/hd/v1/hd"));
const _100 = __importStar(require("./crypto/keyring/v1/record"));
const _101 = __importStar(require("./crypto/multisig/keys"));
const _102 = __importStar(require("./crypto/secp256k1/keys"));
const _103 = __importStar(require("./crypto/secp256r1/keys"));
const _104 = __importStar(require("./distribution/v1beta1/distribution"));
const _105 = __importStar(require("./distribution/v1beta1/genesis"));
const _106 = __importStar(require("./distribution/v1beta1/query"));
const _107 = __importStar(require("./distribution/v1beta1/tx"));
const _108 = __importStar(require("./feegrant/v1beta1/feegrant"));
const _109 = __importStar(require("./feegrant/v1beta1/genesis"));
const _110 = __importStar(require("./feegrant/v1beta1/query"));
const _111 = __importStar(require("./feegrant/v1beta1/tx"));
const _112 = __importStar(require("./gov/v1/genesis"));
const _113 = __importStar(require("./gov/v1/gov"));
const _114 = __importStar(require("./gov/v1/query"));
const _115 = __importStar(require("./gov/v1/tx"));
const _116 = __importStar(require("./gov/v1beta1/genesis"));
const _117 = __importStar(require("./gov/v1beta1/gov"));
const _118 = __importStar(require("./gov/v1beta1/query"));
const _119 = __importStar(require("./gov/v1beta1/tx"));
const _120 = __importStar(require("./group/v1/events"));
const _121 = __importStar(require("./group/v1/genesis"));
const _122 = __importStar(require("./group/v1/query"));
const _123 = __importStar(require("./group/v1/tx"));
const _124 = __importStar(require("./group/v1/types"));
const _125 = __importStar(require("./mint/v1beta1/genesis"));
const _126 = __importStar(require("./mint/v1beta1/mint"));
const _127 = __importStar(require("./mint/v1beta1/query"));
const _128 = __importStar(require("./params/v1beta1/params"));
const _129 = __importStar(require("./params/v1beta1/query"));
const _130 = __importStar(require("./staking/v1beta1/authz"));
const _131 = __importStar(require("./staking/v1beta1/genesis"));
const _132 = __importStar(require("./staking/v1beta1/query"));
const _133 = __importStar(require("./staking/v1beta1/staking"));
const _134 = __importStar(require("./staking/v1beta1/tx"));
const _135 = __importStar(require("./tx/signing/v1beta1/signing"));
const _136 = __importStar(require("./tx/v1beta1/service"));
const _137 = __importStar(require("./tx/v1beta1/tx"));
const _138 = __importStar(require("./upgrade/v1beta1/query"));
const _139 = __importStar(require("./upgrade/v1beta1/tx"));
const _140 = __importStar(require("./upgrade/v1beta1/upgrade"));
const _141 = __importStar(require("./vesting/v1beta1/tx"));
const _142 = __importStar(require("./vesting/v1beta1/vesting"));
const _409 = __importStar(require("./authz/v1beta1/tx.amino"));
const _410 = __importStar(require("./bank/v1beta1/tx.amino"));
const _411 = __importStar(require("./distribution/v1beta1/tx.amino"));
const _412 = __importStar(require("./feegrant/v1beta1/tx.amino"));
const _413 = __importStar(require("./gov/v1/tx.amino"));
const _414 = __importStar(require("./gov/v1beta1/tx.amino"));
const _415 = __importStar(require("./group/v1/tx.amino"));
const _416 = __importStar(require("./staking/v1beta1/tx.amino"));
const _417 = __importStar(require("./upgrade/v1beta1/tx.amino"));
const _418 = __importStar(require("./vesting/v1beta1/tx.amino"));
const _419 = __importStar(require("./authz/v1beta1/tx.registry"));
const _420 = __importStar(require("./bank/v1beta1/tx.registry"));
const _421 = __importStar(require("./distribution/v1beta1/tx.registry"));
const _422 = __importStar(require("./feegrant/v1beta1/tx.registry"));
const _423 = __importStar(require("./gov/v1/tx.registry"));
const _424 = __importStar(require("./gov/v1beta1/tx.registry"));
const _425 = __importStar(require("./group/v1/tx.registry"));
const _426 = __importStar(require("./staking/v1beta1/tx.registry"));
const _427 = __importStar(require("./upgrade/v1beta1/tx.registry"));
const _428 = __importStar(require("./vesting/v1beta1/tx.registry"));
const _429 = __importStar(require("./auth/v1beta1/query.rpc.Query"));
const _430 = __importStar(require("./authz/v1beta1/query.rpc.Query"));
const _431 = __importStar(require("./bank/v1beta1/query.rpc.Query"));
const _432 = __importStar(require("./distribution/v1beta1/query.rpc.Query"));
const _433 = __importStar(require("./feegrant/v1beta1/query.rpc.Query"));
const _434 = __importStar(require("./gov/v1/query.rpc.Query"));
const _435 = __importStar(require("./gov/v1beta1/query.rpc.Query"));
const _436 = __importStar(require("./group/v1/query.rpc.Query"));
const _437 = __importStar(require("./mint/v1beta1/query.rpc.Query"));
const _438 = __importStar(require("./params/v1beta1/query.rpc.Query"));
const _439 = __importStar(require("./staking/v1beta1/query.rpc.Query"));
const _440 = __importStar(require("./tx/v1beta1/service.rpc.Service"));
const _441 = __importStar(require("./upgrade/v1beta1/query.rpc.Query"));
const _442 = __importStar(require("./authz/v1beta1/tx.rpc.msg"));
const _443 = __importStar(require("./bank/v1beta1/tx.rpc.msg"));
const _444 = __importStar(require("./distribution/v1beta1/tx.rpc.msg"));
const _445 = __importStar(require("./feegrant/v1beta1/tx.rpc.msg"));
const _446 = __importStar(require("./gov/v1/tx.rpc.msg"));
const _447 = __importStar(require("./gov/v1beta1/tx.rpc.msg"));
const _448 = __importStar(require("./group/v1/tx.rpc.msg"));
const _449 = __importStar(require("./staking/v1beta1/tx.rpc.msg"));
const _450 = __importStar(require("./upgrade/v1beta1/tx.rpc.msg"));
const _451 = __importStar(require("./vesting/v1beta1/tx.rpc.msg"));
const _603 = __importStar(require("./rpc.query"));
const _604 = __importStar(require("./rpc.tx"));
var cosmos;
(function (cosmos) {
    let auth;
    (function (auth) {
        auth.v1beta1 = {
            ..._81,
            ..._82,
            ..._83,
            ..._429
        };
    })(auth = cosmos.auth || (cosmos.auth = {}));
    let authz;
    (function (authz) {
        authz.v1beta1 = {
            ..._84,
            ..._85,
            ..._86,
            ..._87,
            ..._88,
            ..._409,
            ..._419,
            ..._430,
            ..._442
        };
    })(authz = cosmos.authz || (cosmos.authz = {}));
    let bank;
    (function (bank) {
        bank.v1beta1 = {
            ..._89,
            ..._90,
            ..._91,
            ..._92,
            ..._93,
            ..._410,
            ..._420,
            ..._431,
            ..._443
        };
    })(bank = cosmos.bank || (cosmos.bank = {}));
    let base;
    (function (base) {
        let abci;
        (function (abci) {
            abci.v1beta1 = {
                ..._94
            };
        })(abci = base.abci || (base.abci = {}));
        let query;
        (function (query) {
            query.v1beta1 = {
                ..._95
            };
        })(query = base.query || (base.query = {}));
        let reflection;
        (function (reflection) {
            reflection.v2alpha1 = {
                ..._96
            };
        })(reflection = base.reflection || (base.reflection = {}));
        base.v1beta1 = {
            ..._97
        };
    })(base = cosmos.base || (cosmos.base = {}));
    let crypto;
    (function (crypto) {
        crypto.ed25519 = {
            ..._98
        };
        let hd;
        (function (hd) {
            hd.v1 = {
                ..._99
            };
        })(hd = crypto.hd || (crypto.hd = {}));
        let keyring;
        (function (keyring) {
            keyring.v1 = {
                ..._100
            };
        })(keyring = crypto.keyring || (crypto.keyring = {}));
        crypto.multisig = {
            ..._101
        };
        crypto.secp256k1 = {
            ..._102
        };
        crypto.secp256r1 = {
            ..._103
        };
    })(crypto = cosmos.crypto || (cosmos.crypto = {}));
    let distribution;
    (function (distribution) {
        distribution.v1beta1 = {
            ..._104,
            ..._105,
            ..._106,
            ..._107,
            ..._411,
            ..._421,
            ..._432,
            ..._444
        };
    })(distribution = cosmos.distribution || (cosmos.distribution = {}));
    let feegrant;
    (function (feegrant) {
        feegrant.v1beta1 = {
            ..._108,
            ..._109,
            ..._110,
            ..._111,
            ..._412,
            ..._422,
            ..._433,
            ..._445
        };
    })(feegrant = cosmos.feegrant || (cosmos.feegrant = {}));
    let gov;
    (function (gov) {
        gov.v1 = {
            ..._112,
            ..._113,
            ..._114,
            ..._115,
            ..._413,
            ..._423,
            ..._434,
            ..._446
        };
        gov.v1beta1 = {
            ..._116,
            ..._117,
            ..._118,
            ..._119,
            ..._414,
            ..._424,
            ..._435,
            ..._447
        };
    })(gov = cosmos.gov || (cosmos.gov = {}));
    let group;
    (function (group) {
        group.v1 = {
            ..._120,
            ..._121,
            ..._122,
            ..._123,
            ..._124,
            ..._415,
            ..._425,
            ..._436,
            ..._448
        };
    })(group = cosmos.group || (cosmos.group = {}));
    let mint;
    (function (mint) {
        mint.v1beta1 = {
            ..._125,
            ..._126,
            ..._127,
            ..._437
        };
    })(mint = cosmos.mint || (cosmos.mint = {}));
    let params;
    (function (params) {
        params.v1beta1 = {
            ..._128,
            ..._129,
            ..._438
        };
    })(params = cosmos.params || (cosmos.params = {}));
    let staking;
    (function (staking) {
        staking.v1beta1 = {
            ..._130,
            ..._131,
            ..._132,
            ..._133,
            ..._134,
            ..._416,
            ..._426,
            ..._439,
            ..._449
        };
    })(staking = cosmos.staking || (cosmos.staking = {}));
    let tx;
    (function (tx) {
        let signing;
        (function (signing) {
            signing.v1beta1 = {
                ..._135
            };
        })(signing = tx.signing || (tx.signing = {}));
        tx.v1beta1 = {
            ..._136,
            ..._137,
            ..._440
        };
    })(tx = cosmos.tx || (cosmos.tx = {}));
    let upgrade;
    (function (upgrade) {
        upgrade.v1beta1 = {
            ..._138,
            ..._139,
            ..._140,
            ..._417,
            ..._427,
            ..._441,
            ..._450
        };
    })(upgrade = cosmos.upgrade || (cosmos.upgrade = {}));
    let vesting;
    (function (vesting) {
        vesting.v1beta1 = {
            ..._141,
            ..._142,
            ..._418,
            ..._428,
            ..._451
        };
    })(vesting = cosmos.vesting || (cosmos.vesting = {}));
    cosmos.ClientFactory = {
        ..._603,
        ..._604
    };
})(cosmos || (exports.cosmos = cosmos = {}));
