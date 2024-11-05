//@ts-nocheck
import * as _81 from "./auth/v1beta1/auth";
import * as _82 from "./auth/v1beta1/genesis";
import * as _83 from "./auth/v1beta1/query";
import * as _84 from "./authz/v1beta1/authz";
import * as _85 from "./authz/v1beta1/event";
import * as _86 from "./authz/v1beta1/genesis";
import * as _87 from "./authz/v1beta1/query";
import * as _88 from "./authz/v1beta1/tx";
import * as _89 from "./bank/v1beta1/authz";
import * as _90 from "./bank/v1beta1/bank";
import * as _91 from "./bank/v1beta1/genesis";
import * as _92 from "./bank/v1beta1/query";
import * as _93 from "./bank/v1beta1/tx";
import * as _94 from "./base/abci/v1beta1/abci";
import * as _95 from "./base/query/v1beta1/pagination";
import * as _96 from "./base/reflection/v2alpha1/reflection";
import * as _97 from "./base/v1beta1/coin";
import * as _98 from "./crypto/ed25519/keys";
import * as _99 from "./crypto/hd/v1/hd";
import * as _100 from "./crypto/keyring/v1/record";
import * as _101 from "./crypto/multisig/keys";
import * as _102 from "./crypto/secp256k1/keys";
import * as _103 from "./crypto/secp256r1/keys";
import * as _104 from "./distribution/v1beta1/distribution";
import * as _105 from "./distribution/v1beta1/genesis";
import * as _106 from "./distribution/v1beta1/query";
import * as _107 from "./distribution/v1beta1/tx";
import * as _108 from "./feegrant/v1beta1/feegrant";
import * as _109 from "./feegrant/v1beta1/genesis";
import * as _110 from "./feegrant/v1beta1/query";
import * as _111 from "./feegrant/v1beta1/tx";
import * as _112 from "./gov/v1/genesis";
import * as _113 from "./gov/v1/gov";
import * as _114 from "./gov/v1/query";
import * as _115 from "./gov/v1/tx";
import * as _116 from "./gov/v1beta1/genesis";
import * as _117 from "./gov/v1beta1/gov";
import * as _118 from "./gov/v1beta1/query";
import * as _119 from "./gov/v1beta1/tx";
import * as _120 from "./group/v1/events";
import * as _121 from "./group/v1/genesis";
import * as _122 from "./group/v1/query";
import * as _123 from "./group/v1/tx";
import * as _124 from "./group/v1/types";
import * as _125 from "./mint/v1beta1/genesis";
import * as _126 from "./mint/v1beta1/mint";
import * as _127 from "./mint/v1beta1/query";
import * as _128 from "./params/v1beta1/params";
import * as _129 from "./params/v1beta1/query";
import * as _130 from "./staking/v1beta1/authz";
import * as _131 from "./staking/v1beta1/genesis";
import * as _132 from "./staking/v1beta1/query";
import * as _133 from "./staking/v1beta1/staking";
import * as _134 from "./staking/v1beta1/tx";
import * as _135 from "./tx/signing/v1beta1/signing";
import * as _136 from "./tx/v1beta1/service";
import * as _137 from "./tx/v1beta1/tx";
import * as _138 from "./upgrade/v1beta1/query";
import * as _139 from "./upgrade/v1beta1/tx";
import * as _140 from "./upgrade/v1beta1/upgrade";
import * as _141 from "./vesting/v1beta1/tx";
import * as _142 from "./vesting/v1beta1/vesting";
import * as _409 from "./authz/v1beta1/tx.amino";
import * as _410 from "./bank/v1beta1/tx.amino";
import * as _411 from "./distribution/v1beta1/tx.amino";
import * as _412 from "./feegrant/v1beta1/tx.amino";
import * as _413 from "./gov/v1/tx.amino";
import * as _414 from "./gov/v1beta1/tx.amino";
import * as _415 from "./group/v1/tx.amino";
import * as _416 from "./staking/v1beta1/tx.amino";
import * as _417 from "./upgrade/v1beta1/tx.amino";
import * as _418 from "./vesting/v1beta1/tx.amino";
import * as _419 from "./authz/v1beta1/tx.registry";
import * as _420 from "./bank/v1beta1/tx.registry";
import * as _421 from "./distribution/v1beta1/tx.registry";
import * as _422 from "./feegrant/v1beta1/tx.registry";
import * as _423 from "./gov/v1/tx.registry";
import * as _424 from "./gov/v1beta1/tx.registry";
import * as _425 from "./group/v1/tx.registry";
import * as _426 from "./staking/v1beta1/tx.registry";
import * as _427 from "./upgrade/v1beta1/tx.registry";
import * as _428 from "./vesting/v1beta1/tx.registry";
import * as _429 from "./auth/v1beta1/query.rpc.Query";
import * as _430 from "./authz/v1beta1/query.rpc.Query";
import * as _431 from "./bank/v1beta1/query.rpc.Query";
import * as _432 from "./distribution/v1beta1/query.rpc.Query";
import * as _433 from "./feegrant/v1beta1/query.rpc.Query";
import * as _434 from "./gov/v1/query.rpc.Query";
import * as _435 from "./gov/v1beta1/query.rpc.Query";
import * as _436 from "./group/v1/query.rpc.Query";
import * as _437 from "./mint/v1beta1/query.rpc.Query";
import * as _438 from "./params/v1beta1/query.rpc.Query";
import * as _439 from "./staking/v1beta1/query.rpc.Query";
import * as _440 from "./tx/v1beta1/service.rpc.Service";
import * as _441 from "./upgrade/v1beta1/query.rpc.Query";
import * as _442 from "./authz/v1beta1/tx.rpc.msg";
import * as _443 from "./bank/v1beta1/tx.rpc.msg";
import * as _444 from "./distribution/v1beta1/tx.rpc.msg";
import * as _445 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _446 from "./gov/v1/tx.rpc.msg";
import * as _447 from "./gov/v1beta1/tx.rpc.msg";
import * as _448 from "./group/v1/tx.rpc.msg";
import * as _449 from "./staking/v1beta1/tx.rpc.msg";
import * as _450 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _451 from "./vesting/v1beta1/tx.rpc.msg";
import * as _603 from "./rpc.query";
import * as _604 from "./rpc.tx";
export var cosmos;
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
})(cosmos || (cosmos = {}));
