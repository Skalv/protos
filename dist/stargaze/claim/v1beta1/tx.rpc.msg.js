"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = void 0;
const binary_1 = require("../../../binary");
const tx_1 = require("./tx");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.initialClaim = this.initialClaim.bind(this);
        this.claimFor = this.claimFor.bind(this);
    }
    initialClaim(request) {
        const data = tx_1.MsgInitialClaim.encode(request).finish();
        const promise = this.rpc.request("publicawesome.stargaze.claim.v1beta1.Msg", "InitialClaim", data);
        return promise.then(data => tx_1.MsgInitialClaimResponse.decode(new binary_1.BinaryReader(data)));
    }
    claimFor(request) {
        const data = tx_1.MsgClaimFor.encode(request).finish();
        const promise = this.rpc.request("publicawesome.stargaze.claim.v1beta1.Msg", "ClaimFor", data);
        return promise.then(data => tx_1.MsgClaimForResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
