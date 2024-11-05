import { BinaryReader } from "../../../binary";
import { MsgCreateVestingAccount, MsgCreateVestingAccountResponse } from "./tx";
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.createVestingAccount = this.createVestingAccount.bind(this);
    }
    createVestingAccount(request) {
        const data = MsgCreateVestingAccount.encode(request).finish();
        const promise = this.rpc.request("publicawesome.stargaze.alloc.v1beta1.Msg", "CreateVestingAccount", data);
        return promise.then(data => MsgCreateVestingAccountResponse.decode(new BinaryReader(data)));
    }
}
