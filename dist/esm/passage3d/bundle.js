//@ts-nocheck
import * as _295 from "./claim/v1beta1/claim_record";
import * as _296 from "./claim/v1beta1/genesis";
import * as _297 from "./claim/v1beta1/params";
import * as _298 from "./claim/v1beta1/query";
import * as _299 from "./claim/v1beta1/tx";
import * as _549 from "./claim/v1beta1/tx.amino";
import * as _550 from "./claim/v1beta1/tx.registry";
import * as _551 from "./claim/v1beta1/query.rpc.Query";
import * as _552 from "./claim/v1beta1/tx.rpc.msg";
import * as _618 from "./rpc.query";
import * as _619 from "./rpc.tx";
export var passage3d;
(function (passage3d) {
    let claim;
    (function (claim) {
        claim.v1beta1 = {
            ..._295,
            ..._296,
            ..._297,
            ..._298,
            ..._299,
            ..._549,
            ..._550,
            ..._551,
            ..._552
        };
    })(claim = passage3d.claim || (passage3d.claim = {}));
    passage3d.ClientFactory = {
        ..._618,
        ..._619
    };
})(passage3d || (passage3d = {}));
