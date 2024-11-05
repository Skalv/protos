import { BinaryReader } from "../../../binary";
import { MsgClaim, MsgClaimResponse } from "./tx";
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.claim = this.claim.bind(this);
    }
    claim(request) {
        const data = MsgClaim.encode(request).finish();
        const promise = this.rpc.request("passage3d.claim.v1beta1.Msg", "Claim", data);
        return promise.then(data => MsgClaimResponse.decode(new BinaryReader(data)));
    }
}
