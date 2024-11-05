import { BinaryReader } from "../../../binary";
import { MsgSetHotRoutes, MsgSetHotRoutesResponse, MsgSetDeveloperAccount, MsgSetDeveloperAccountResponse } from "./tx";
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.setHotRoutes = this.setHotRoutes.bind(this);
        this.setDeveloperAccount = this.setDeveloperAccount.bind(this);
    }
    setHotRoutes(request) {
        const data = MsgSetHotRoutes.encode(request).finish();
        const promise = this.rpc.request("osmosis.protorev.v1beta1.Msg", "SetHotRoutes", data);
        return promise.then(data => MsgSetHotRoutesResponse.decode(new BinaryReader(data)));
    }
    setDeveloperAccount(request) {
        const data = MsgSetDeveloperAccount.encode(request).finish();
        const promise = this.rpc.request("osmosis.protorev.v1beta1.Msg", "SetDeveloperAccount", data);
        return promise.then(data => MsgSetDeveloperAccountResponse.decode(new BinaryReader(data)));
    }
}
