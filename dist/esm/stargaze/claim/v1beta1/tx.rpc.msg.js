import { BinaryReader } from "../../../binary";
import { MsgInitialClaim, MsgInitialClaimResponse, MsgClaimFor, MsgClaimForResponse } from "./tx";
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.initialClaim = this.initialClaim.bind(this);
        this.claimFor = this.claimFor.bind(this);
    }
    initialClaim(request) {
        const data = MsgInitialClaim.encode(request).finish();
        const promise = this.rpc.request("publicawesome.stargaze.claim.v1beta1.Msg", "InitialClaim", data);
        return promise.then(data => MsgInitialClaimResponse.decode(new BinaryReader(data)));
    }
    claimFor(request) {
        const data = MsgClaimFor.encode(request).finish();
        const promise = this.rpc.request("publicawesome.stargaze.claim.v1beta1.Msg", "ClaimFor", data);
        return promise.then(data => MsgClaimForResponse.decode(new BinaryReader(data)));
    }
}
