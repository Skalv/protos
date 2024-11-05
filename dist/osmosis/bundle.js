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
exports.osmosis = void 0;
//@ts-nocheck
const _231 = __importStar(require("./downtime-detector/v1beta1/downtime_duration"));
const _232 = __importStar(require("./downtime-detector/v1beta1/genesis"));
const _233 = __importStar(require("./downtime-detector/v1beta1/query"));
const _234 = __importStar(require("./epochs/genesis"));
const _235 = __importStar(require("./epochs/query"));
const _236 = __importStar(require("./gamm/pool-models/balancer/balancerPool"));
const _237 = __importStar(require("./gamm/v1beta1/genesis"));
const _238 = __importStar(require("./gamm/v1beta1/query"));
const _239 = __importStar(require("./gamm/v1beta1/tx"));
const _240 = __importStar(require("./gamm/pool-models/balancer/tx/tx"));
const _241 = __importStar(require("./gamm/pool-models/stableswap/stableswap_pool"));
const _242 = __importStar(require("./gamm/pool-models/stableswap/tx"));
const _243 = __importStar(require("./gamm/v2/query"));
const _244 = __importStar(require("./ibc-rate-limit/v1beta1/params"));
const _245 = __importStar(require("./ibc-rate-limit/v1beta1/query"));
const _246 = __importStar(require("./incentives/gauge"));
const _247 = __importStar(require("./incentives/genesis"));
const _248 = __importStar(require("./incentives/params"));
const _249 = __importStar(require("./incentives/query"));
const _250 = __importStar(require("./incentives/tx"));
const _251 = __importStar(require("./lockup/genesis"));
const _252 = __importStar(require("./lockup/lock"));
const _253 = __importStar(require("./lockup/params"));
const _254 = __importStar(require("./lockup/query"));
const _255 = __importStar(require("./lockup/tx"));
const _256 = __importStar(require("./mint/v1beta1/genesis"));
const _257 = __importStar(require("./mint/v1beta1/mint"));
const _258 = __importStar(require("./mint/v1beta1/query"));
const _259 = __importStar(require("./pool-incentives/v1beta1/genesis"));
const _260 = __importStar(require("./pool-incentives/v1beta1/gov"));
const _261 = __importStar(require("./pool-incentives/v1beta1/incentives"));
const _262 = __importStar(require("./pool-incentives/v1beta1/query"));
const _263 = __importStar(require("./protorev/v1beta1/genesis"));
const _264 = __importStar(require("./protorev/v1beta1/gov"));
const _265 = __importStar(require("./protorev/v1beta1/params"));
const _266 = __importStar(require("./protorev/v1beta1/protorev"));
const _267 = __importStar(require("./protorev/v1beta1/query"));
const _268 = __importStar(require("./protorev/v1beta1/tx"));
const _269 = __importStar(require("./sumtree/v1beta1/tree"));
const _270 = __importStar(require("./superfluid/genesis"));
const _271 = __importStar(require("./superfluid/params"));
const _272 = __importStar(require("./superfluid/query"));
const _273 = __importStar(require("./superfluid/superfluid"));
const _274 = __importStar(require("./superfluid/tx"));
const _275 = __importStar(require("./swaprouter/v1beta1/genesis"));
const _276 = __importStar(require("./swaprouter/v1beta1/module_route"));
const _277 = __importStar(require("./swaprouter/v1beta1/query"));
const _278 = __importStar(require("./swaprouter/v1beta1/swap_route"));
const _279 = __importStar(require("./swaprouter/v1beta1/tx"));
const _280 = __importStar(require("./tokenfactory/v1beta1/authorityMetadata"));
const _281 = __importStar(require("./tokenfactory/v1beta1/genesis"));
const _282 = __importStar(require("./tokenfactory/v1beta1/params"));
const _283 = __importStar(require("./tokenfactory/v1beta1/query"));
const _284 = __importStar(require("./tokenfactory/v1beta1/tx"));
const _285 = __importStar(require("./twap/v1beta1/genesis"));
const _286 = __importStar(require("./twap/v1beta1/query"));
const _287 = __importStar(require("./twap/v1beta1/twap_record"));
const _288 = __importStar(require("./txfees/v1beta1/feetoken"));
const _289 = __importStar(require("./txfees/v1beta1/genesis"));
const _290 = __importStar(require("./txfees/v1beta1/gov"));
const _291 = __importStar(require("./txfees/v1beta1/query"));
const _292 = __importStar(require("./valset-pref/v1beta1/query"));
const _293 = __importStar(require("./valset-pref/v1beta1/state"));
const _294 = __importStar(require("./valset-pref/v1beta1/tx"));
const _503 = __importStar(require("./gamm/pool-models/balancer/tx/tx.amino"));
const _504 = __importStar(require("./gamm/pool-models/stableswap/tx.amino"));
const _505 = __importStar(require("./gamm/v1beta1/tx.amino"));
const _506 = __importStar(require("./incentives/tx.amino"));
const _507 = __importStar(require("./lockup/tx.amino"));
const _508 = __importStar(require("./protorev/v1beta1/tx.amino"));
const _509 = __importStar(require("./superfluid/tx.amino"));
const _510 = __importStar(require("./swaprouter/v1beta1/tx.amino"));
const _511 = __importStar(require("./tokenfactory/v1beta1/tx.amino"));
const _512 = __importStar(require("./valset-pref/v1beta1/tx.amino"));
const _513 = __importStar(require("./gamm/pool-models/balancer/tx/tx.registry"));
const _514 = __importStar(require("./gamm/pool-models/stableswap/tx.registry"));
const _515 = __importStar(require("./gamm/v1beta1/tx.registry"));
const _516 = __importStar(require("./incentives/tx.registry"));
const _517 = __importStar(require("./lockup/tx.registry"));
const _518 = __importStar(require("./protorev/v1beta1/tx.registry"));
const _519 = __importStar(require("./superfluid/tx.registry"));
const _520 = __importStar(require("./swaprouter/v1beta1/tx.registry"));
const _521 = __importStar(require("./tokenfactory/v1beta1/tx.registry"));
const _522 = __importStar(require("./valset-pref/v1beta1/tx.registry"));
const _523 = __importStar(require("./downtime-detector/v1beta1/query.rpc.Query"));
const _524 = __importStar(require("./epochs/query.rpc.Query"));
const _525 = __importStar(require("./gamm/v1beta1/query.rpc.Query"));
const _526 = __importStar(require("./gamm/v2/query.rpc.Query"));
const _527 = __importStar(require("./ibc-rate-limit/v1beta1/query.rpc.Query"));
const _528 = __importStar(require("./incentives/query.rpc.Query"));
const _529 = __importStar(require("./lockup/query.rpc.Query"));
const _530 = __importStar(require("./mint/v1beta1/query.rpc.Query"));
const _531 = __importStar(require("./pool-incentives/v1beta1/query.rpc.Query"));
const _532 = __importStar(require("./protorev/v1beta1/query.rpc.Query"));
const _533 = __importStar(require("./superfluid/query.rpc.Query"));
const _534 = __importStar(require("./swaprouter/v1beta1/query.rpc.Query"));
const _535 = __importStar(require("./tokenfactory/v1beta1/query.rpc.Query"));
const _536 = __importStar(require("./twap/v1beta1/query.rpc.Query"));
const _537 = __importStar(require("./txfees/v1beta1/query.rpc.Query"));
const _538 = __importStar(require("./valset-pref/v1beta1/query.rpc.Query"));
const _539 = __importStar(require("./gamm/pool-models/balancer/tx/tx.rpc.msg"));
const _540 = __importStar(require("./gamm/pool-models/stableswap/tx.rpc.msg"));
const _541 = __importStar(require("./gamm/v1beta1/tx.rpc.msg"));
const _542 = __importStar(require("./incentives/tx.rpc.msg"));
const _543 = __importStar(require("./lockup/tx.rpc.msg"));
const _544 = __importStar(require("./protorev/v1beta1/tx.rpc.msg"));
const _545 = __importStar(require("./superfluid/tx.rpc.msg"));
const _546 = __importStar(require("./swaprouter/v1beta1/tx.rpc.msg"));
const _547 = __importStar(require("./tokenfactory/v1beta1/tx.rpc.msg"));
const _548 = __importStar(require("./valset-pref/v1beta1/tx.rpc.msg"));
const _616 = __importStar(require("./rpc.query"));
const _617 = __importStar(require("./rpc.tx"));
var osmosis;
(function (osmosis) {
    let downtimedetector;
    (function (downtimedetector) {
        downtimedetector.v1beta1 = {
            ..._231,
            ..._232,
            ..._233,
            ..._523
        };
    })(downtimedetector = osmosis.downtimedetector || (osmosis.downtimedetector = {}));
    let epochs;
    (function (epochs) {
        epochs.v1beta1 = {
            ..._234,
            ..._235,
            ..._524
        };
    })(epochs = osmosis.epochs || (osmosis.epochs = {}));
    let gamm;
    (function (gamm) {
        gamm.v1beta1 = {
            ..._236,
            ..._237,
            ..._238,
            ..._239,
            ..._505,
            ..._515,
            ..._525,
            ..._541
        };
        let poolmodels;
        (function (poolmodels) {
            let balancer;
            (function (balancer) {
                balancer.v1beta1 = {
                    ..._240,
                    ..._503,
                    ..._513,
                    ..._539
                };
            })(balancer = poolmodels.balancer || (poolmodels.balancer = {}));
            let stableswap;
            (function (stableswap) {
                stableswap.v1beta1 = {
                    ..._241,
                    ..._242,
                    ..._504,
                    ..._514,
                    ..._540
                };
            })(stableswap = poolmodels.stableswap || (poolmodels.stableswap = {}));
        })(poolmodels = gamm.poolmodels || (gamm.poolmodels = {}));
        gamm.v2 = {
            ..._243,
            ..._526
        };
    })(gamm = osmosis.gamm || (osmosis.gamm = {}));
    let ibcratelimit;
    (function (ibcratelimit) {
        ibcratelimit.v1beta1 = {
            ..._244,
            ..._245,
            ..._527
        };
    })(ibcratelimit = osmosis.ibcratelimit || (osmosis.ibcratelimit = {}));
    osmosis.incentives = {
        ..._246,
        ..._247,
        ..._248,
        ..._249,
        ..._250,
        ..._506,
        ..._516,
        ..._528,
        ..._542
    };
    osmosis.lockup = {
        ..._251,
        ..._252,
        ..._253,
        ..._254,
        ..._255,
        ..._507,
        ..._517,
        ..._529,
        ..._543
    };
    let mint;
    (function (mint) {
        mint.v1beta1 = {
            ..._256,
            ..._257,
            ..._258,
            ..._530
        };
    })(mint = osmosis.mint || (osmosis.mint = {}));
    let poolincentives;
    (function (poolincentives) {
        poolincentives.v1beta1 = {
            ..._259,
            ..._260,
            ..._261,
            ..._262,
            ..._531
        };
    })(poolincentives = osmosis.poolincentives || (osmosis.poolincentives = {}));
    let protorev;
    (function (protorev) {
        protorev.v1beta1 = {
            ..._263,
            ..._264,
            ..._265,
            ..._266,
            ..._267,
            ..._268,
            ..._508,
            ..._518,
            ..._532,
            ..._544
        };
    })(protorev = osmosis.protorev || (osmosis.protorev = {}));
    let store;
    (function (store) {
        store.v1beta1 = {
            ..._269
        };
    })(store = osmosis.store || (osmosis.store = {}));
    osmosis.superfluid = {
        ..._270,
        ..._271,
        ..._272,
        ..._273,
        ..._274,
        ..._509,
        ..._519,
        ..._533,
        ..._545
    };
    let swaprouter;
    (function (swaprouter) {
        swaprouter.v1beta1 = {
            ..._275,
            ..._276,
            ..._277,
            ..._278,
            ..._279,
            ..._510,
            ..._520,
            ..._534,
            ..._546
        };
    })(swaprouter = osmosis.swaprouter || (osmosis.swaprouter = {}));
    let tokenfactory;
    (function (tokenfactory) {
        tokenfactory.v1beta1 = {
            ..._280,
            ..._281,
            ..._282,
            ..._283,
            ..._284,
            ..._511,
            ..._521,
            ..._535,
            ..._547
        };
    })(tokenfactory = osmosis.tokenfactory || (osmosis.tokenfactory = {}));
    let twap;
    (function (twap) {
        twap.v1beta1 = {
            ..._285,
            ..._286,
            ..._287,
            ..._536
        };
    })(twap = osmosis.twap || (osmosis.twap = {}));
    let txfees;
    (function (txfees) {
        txfees.v1beta1 = {
            ..._288,
            ..._289,
            ..._290,
            ..._291,
            ..._537
        };
    })(txfees = osmosis.txfees || (osmosis.txfees = {}));
    let valsetpref;
    (function (valsetpref) {
        valsetpref.v1beta1 = {
            ..._292,
            ..._293,
            ..._294,
            ..._512,
            ..._522,
            ..._538,
            ..._548
        };
    })(valsetpref = osmosis.valsetpref || (osmosis.valsetpref = {}));
    osmosis.ClientFactory = {
        ..._616,
        ..._617
    };
})(osmosis || (exports.osmosis = osmosis = {}));
