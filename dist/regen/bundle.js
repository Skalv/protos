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
exports.regen = void 0;
//@ts-nocheck
const _303 = __importStar(require("./data/v1/events"));
const _304 = __importStar(require("./data/v1/query"));
const _305 = __importStar(require("./data/v1/state"));
const _306 = __importStar(require("./data/v1/tx"));
const _307 = __importStar(require("./data/v1/types"));
const _308 = __importStar(require("./data/v1alpha2/events"));
const _309 = __importStar(require("./data/v1alpha2/genesis"));
const _310 = __importStar(require("./data/v1alpha2/query"));
const _311 = __importStar(require("./data/v1alpha2/tx"));
const _312 = __importStar(require("./data/v1alpha2/types"));
const _313 = __importStar(require("./ecocredit/basket/v1/events"));
const _314 = __importStar(require("./ecocredit/basket/v1/query"));
const _315 = __importStar(require("./ecocredit/basket/v1/state"));
const _316 = __importStar(require("./ecocredit/basket/v1/tx"));
const _317 = __importStar(require("./ecocredit/basket/v1/types"));
const _318 = __importStar(require("./ecocredit/marketplace/v1/events"));
const _319 = __importStar(require("./ecocredit/marketplace/v1/query"));
const _320 = __importStar(require("./ecocredit/marketplace/v1/state"));
const _321 = __importStar(require("./ecocredit/marketplace/v1/tx"));
const _322 = __importStar(require("./ecocredit/marketplace/v1/types"));
const _323 = __importStar(require("./ecocredit/orderbook/v1alpha1/memory"));
const _324 = __importStar(require("./ecocredit/v1/events"));
const _325 = __importStar(require("./ecocredit/v1/query"));
const _326 = __importStar(require("./ecocredit/v1/state"));
const _327 = __importStar(require("./ecocredit/v1/tx"));
const _328 = __importStar(require("./ecocredit/v1/types"));
const _329 = __importStar(require("./ecocredit/v1alpha1/events"));
const _330 = __importStar(require("./ecocredit/v1alpha1/genesis"));
const _331 = __importStar(require("./ecocredit/v1alpha1/query"));
const _332 = __importStar(require("./ecocredit/v1alpha1/tx"));
const _333 = __importStar(require("./ecocredit/v1alpha1/types"));
const _334 = __importStar(require("./group/v1alpha1/events"));
const _335 = __importStar(require("./group/v1alpha1/genesis"));
const _336 = __importStar(require("./group/v1alpha1/query"));
const _337 = __importStar(require("./group/v1alpha1/tx"));
const _338 = __importStar(require("./group/v1alpha1/types"));
const _554 = __importStar(require("./data/v1/tx.amino"));
const _555 = __importStar(require("./data/v1alpha2/tx.amino"));
const _556 = __importStar(require("./ecocredit/basket/v1/tx.amino"));
const _557 = __importStar(require("./ecocredit/marketplace/v1/tx.amino"));
const _558 = __importStar(require("./ecocredit/v1/tx.amino"));
const _559 = __importStar(require("./ecocredit/v1alpha1/tx.amino"));
const _560 = __importStar(require("./group/v1alpha1/tx.amino"));
const _561 = __importStar(require("./data/v1/tx.registry"));
const _562 = __importStar(require("./data/v1alpha2/tx.registry"));
const _563 = __importStar(require("./ecocredit/basket/v1/tx.registry"));
const _564 = __importStar(require("./ecocredit/marketplace/v1/tx.registry"));
const _565 = __importStar(require("./ecocredit/v1/tx.registry"));
const _566 = __importStar(require("./ecocredit/v1alpha1/tx.registry"));
const _567 = __importStar(require("./group/v1alpha1/tx.registry"));
const _568 = __importStar(require("./data/v1/query.rpc.Query"));
const _569 = __importStar(require("./data/v1alpha2/query.rpc.Query"));
const _570 = __importStar(require("./ecocredit/basket/v1/query.rpc.Query"));
const _571 = __importStar(require("./ecocredit/marketplace/v1/query.rpc.Query"));
const _572 = __importStar(require("./ecocredit/v1/query.rpc.Query"));
const _573 = __importStar(require("./ecocredit/v1alpha1/query.rpc.Query"));
const _574 = __importStar(require("./group/v1alpha1/query.rpc.Query"));
const _575 = __importStar(require("./data/v1/tx.rpc.msg"));
const _576 = __importStar(require("./data/v1alpha2/tx.rpc.msg"));
const _577 = __importStar(require("./ecocredit/basket/v1/tx.rpc.msg"));
const _578 = __importStar(require("./ecocredit/marketplace/v1/tx.rpc.msg"));
const _579 = __importStar(require("./ecocredit/v1/tx.rpc.msg"));
const _580 = __importStar(require("./ecocredit/v1alpha1/tx.rpc.msg"));
const _581 = __importStar(require("./group/v1alpha1/tx.rpc.msg"));
const _621 = __importStar(require("./rpc.query"));
const _622 = __importStar(require("./rpc.tx"));
var regen;
(function (regen) {
    let data;
    (function (data) {
        data.v1 = {
            ..._303,
            ..._304,
            ..._305,
            ..._306,
            ..._307,
            ..._554,
            ..._561,
            ..._568,
            ..._575
        };
        data.v1alpha2 = {
            ..._308,
            ..._309,
            ..._310,
            ..._311,
            ..._312,
            ..._555,
            ..._562,
            ..._569,
            ..._576
        };
    })(data = regen.data || (regen.data = {}));
    let ecocredit;
    (function (ecocredit) {
        let basket;
        (function (basket) {
            basket.v1 = {
                ..._313,
                ..._314,
                ..._315,
                ..._316,
                ..._317,
                ..._556,
                ..._563,
                ..._570,
                ..._577
            };
        })(basket = ecocredit.basket || (ecocredit.basket = {}));
        let marketplace;
        (function (marketplace) {
            marketplace.v1 = {
                ..._318,
                ..._319,
                ..._320,
                ..._321,
                ..._322,
                ..._557,
                ..._564,
                ..._571,
                ..._578
            };
        })(marketplace = ecocredit.marketplace || (ecocredit.marketplace = {}));
        let orderbook;
        (function (orderbook) {
            orderbook.v1alpha1 = {
                ..._323
            };
        })(orderbook = ecocredit.orderbook || (ecocredit.orderbook = {}));
        ecocredit.v1 = {
            ..._324,
            ..._325,
            ..._326,
            ..._327,
            ..._328,
            ..._558,
            ..._565,
            ..._572,
            ..._579
        };
        ecocredit.v1alpha1 = {
            ..._329,
            ..._330,
            ..._331,
            ..._332,
            ..._333,
            ..._559,
            ..._566,
            ..._573,
            ..._580
        };
    })(ecocredit = regen.ecocredit || (regen.ecocredit = {}));
    let group;
    (function (group) {
        group.v1alpha1 = {
            ..._334,
            ..._335,
            ..._336,
            ..._337,
            ..._338,
            ..._560,
            ..._567,
            ..._574,
            ..._581
        };
    })(group = regen.group || (regen.group = {}));
    regen.ClientFactory = {
        ..._621,
        ..._622
    };
})(regen || (exports.regen = regen = {}));
