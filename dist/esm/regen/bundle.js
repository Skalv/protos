//@ts-nocheck
import * as _303 from "./data/v1/events";
import * as _304 from "./data/v1/query";
import * as _305 from "./data/v1/state";
import * as _306 from "./data/v1/tx";
import * as _307 from "./data/v1/types";
import * as _308 from "./data/v1alpha2/events";
import * as _309 from "./data/v1alpha2/genesis";
import * as _310 from "./data/v1alpha2/query";
import * as _311 from "./data/v1alpha2/tx";
import * as _312 from "./data/v1alpha2/types";
import * as _313 from "./ecocredit/basket/v1/events";
import * as _314 from "./ecocredit/basket/v1/query";
import * as _315 from "./ecocredit/basket/v1/state";
import * as _316 from "./ecocredit/basket/v1/tx";
import * as _317 from "./ecocredit/basket/v1/types";
import * as _318 from "./ecocredit/marketplace/v1/events";
import * as _319 from "./ecocredit/marketplace/v1/query";
import * as _320 from "./ecocredit/marketplace/v1/state";
import * as _321 from "./ecocredit/marketplace/v1/tx";
import * as _322 from "./ecocredit/marketplace/v1/types";
import * as _323 from "./ecocredit/orderbook/v1alpha1/memory";
import * as _324 from "./ecocredit/v1/events";
import * as _325 from "./ecocredit/v1/query";
import * as _326 from "./ecocredit/v1/state";
import * as _327 from "./ecocredit/v1/tx";
import * as _328 from "./ecocredit/v1/types";
import * as _329 from "./ecocredit/v1alpha1/events";
import * as _330 from "./ecocredit/v1alpha1/genesis";
import * as _331 from "./ecocredit/v1alpha1/query";
import * as _332 from "./ecocredit/v1alpha1/tx";
import * as _333 from "./ecocredit/v1alpha1/types";
import * as _334 from "./group/v1alpha1/events";
import * as _335 from "./group/v1alpha1/genesis";
import * as _336 from "./group/v1alpha1/query";
import * as _337 from "./group/v1alpha1/tx";
import * as _338 from "./group/v1alpha1/types";
import * as _554 from "./data/v1/tx.amino";
import * as _555 from "./data/v1alpha2/tx.amino";
import * as _556 from "./ecocredit/basket/v1/tx.amino";
import * as _557 from "./ecocredit/marketplace/v1/tx.amino";
import * as _558 from "./ecocredit/v1/tx.amino";
import * as _559 from "./ecocredit/v1alpha1/tx.amino";
import * as _560 from "./group/v1alpha1/tx.amino";
import * as _561 from "./data/v1/tx.registry";
import * as _562 from "./data/v1alpha2/tx.registry";
import * as _563 from "./ecocredit/basket/v1/tx.registry";
import * as _564 from "./ecocredit/marketplace/v1/tx.registry";
import * as _565 from "./ecocredit/v1/tx.registry";
import * as _566 from "./ecocredit/v1alpha1/tx.registry";
import * as _567 from "./group/v1alpha1/tx.registry";
import * as _568 from "./data/v1/query.rpc.Query";
import * as _569 from "./data/v1alpha2/query.rpc.Query";
import * as _570 from "./ecocredit/basket/v1/query.rpc.Query";
import * as _571 from "./ecocredit/marketplace/v1/query.rpc.Query";
import * as _572 from "./ecocredit/v1/query.rpc.Query";
import * as _573 from "./ecocredit/v1alpha1/query.rpc.Query";
import * as _574 from "./group/v1alpha1/query.rpc.Query";
import * as _575 from "./data/v1/tx.rpc.msg";
import * as _576 from "./data/v1alpha2/tx.rpc.msg";
import * as _577 from "./ecocredit/basket/v1/tx.rpc.msg";
import * as _578 from "./ecocredit/marketplace/v1/tx.rpc.msg";
import * as _579 from "./ecocredit/v1/tx.rpc.msg";
import * as _580 from "./ecocredit/v1alpha1/tx.rpc.msg";
import * as _581 from "./group/v1alpha1/tx.rpc.msg";
import * as _621 from "./rpc.query";
import * as _622 from "./rpc.tx";
export var regen;
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
})(regen || (regen = {}));
