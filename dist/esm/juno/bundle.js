//@ts-nocheck
import * as _220 from "./mint/genesis";
import * as _221 from "./mint/mint";
import * as _222 from "./mint/query";
import * as _497 from "./mint/query.rpc.Query";
import * as _611 from "./rpc.query";
export var juno;
(function (juno) {
    juno.mint = {
        ..._220,
        ..._221,
        ..._222,
        ..._497
    };
    juno.ClientFactory = {
        ..._611
    };
})(juno || (juno = {}));
