"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = void 0;
const binary_1 = require("../../../binary");
const tx_1 = require("./tx");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.claim = this.claim.bind(this);
    }
    claim(request) {
        const data = tx_1.MsgClaim.encode(request).finish();
        const promise = this.rpc.request("passage3d.claim.v1beta1.Msg", "Claim", data);
        return promise.then(data => tx_1.MsgClaimResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
