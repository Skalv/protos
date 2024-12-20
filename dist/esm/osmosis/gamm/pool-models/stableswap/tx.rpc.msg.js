import { BinaryReader } from "../../../../binary";
import { MsgCreateStableswapPool, MsgCreateStableswapPoolResponse, MsgStableSwapAdjustScalingFactors, MsgStableSwapAdjustScalingFactorsResponse } from "./tx";
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.createStableswapPool = this.createStableswapPool.bind(this);
        this.stableSwapAdjustScalingFactors = this.stableSwapAdjustScalingFactors.bind(this);
    }
    createStableswapPool(request) {
        const data = MsgCreateStableswapPool.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.poolmodels.stableswap.v1beta1.Msg", "CreateStableswapPool", data);
        return promise.then(data => MsgCreateStableswapPoolResponse.decode(new BinaryReader(data)));
    }
    stableSwapAdjustScalingFactors(request) {
        const data = MsgStableSwapAdjustScalingFactors.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.poolmodels.stableswap.v1beta1.Msg", "StableSwapAdjustScalingFactors", data);
        return promise.then(data => MsgStableSwapAdjustScalingFactorsResponse.decode(new BinaryReader(data)));
    }
}
