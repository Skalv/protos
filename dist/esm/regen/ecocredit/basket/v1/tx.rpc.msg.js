import { BinaryReader } from "../../../../binary";
import { MsgCreate, MsgCreateResponse, MsgPut, MsgPutResponse, MsgTake, MsgTakeResponse } from "./tx";
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.create = this.create.bind(this);
        this.put = this.put.bind(this);
        this.take = this.take.bind(this);
    }
    create(request) {
        const data = MsgCreate.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.basket.v1.Msg", "Create", data);
        return promise.then(data => MsgCreateResponse.decode(new BinaryReader(data)));
    }
    put(request) {
        const data = MsgPut.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.basket.v1.Msg", "Put", data);
        return promise.then(data => MsgPutResponse.decode(new BinaryReader(data)));
    }
    take(request) {
        const data = MsgTake.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.basket.v1.Msg", "Take", data);
        return promise.then(data => MsgTakeResponse.decode(new BinaryReader(data)));
    }
}
