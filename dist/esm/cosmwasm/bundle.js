//@ts-nocheck
import * as _143 from "./wasm/v1/authz";
import * as _144 from "./wasm/v1/genesis";
import * as _145 from "./wasm/v1/ibc";
import * as _146 from "./wasm/v1/proposal";
import * as _147 from "./wasm/v1/query";
import * as _148 from "./wasm/v1/tx";
import * as _149 from "./wasm/v1/types";
import * as _452 from "./wasm/v1/tx.amino";
import * as _453 from "./wasm/v1/tx.registry";
import * as _454 from "./wasm/v1/query.rpc.Query";
import * as _455 from "./wasm/v1/tx.rpc.msg";
import * as _605 from "./rpc.query";
import * as _606 from "./rpc.tx";
export var cosmwasm;
(function (cosmwasm) {
    let wasm;
    (function (wasm) {
        wasm.v1 = {
            ..._143,
            ..._144,
            ..._145,
            ..._146,
            ..._147,
            ..._148,
            ..._149,
            ..._452,
            ..._453,
            ..._454,
            ..._455
        };
    })(wasm = cosmwasm.wasm || (cosmwasm.wasm = {}));
    cosmwasm.ClientFactory = {
        ..._605,
        ..._606
    };
})(cosmwasm || (cosmwasm = {}));
