import { BinaryReader } from "../../../../../binary";
import { MsgCreateBalancerPool, MsgCreateBalancerPoolResponse } from "./tx";
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.createBalancerPool = this.createBalancerPool.bind(this);
    }
    createBalancerPool(request) {
        const data = MsgCreateBalancerPool.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.poolmodels.balancer.v1beta1.Msg", "CreateBalancerPool", data);
        return promise.then(data => MsgCreateBalancerPoolResponse.decode(new BinaryReader(data)));
    }
}
