"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = void 0;
const binary_1 = require("../../../../binary");
const tx_1 = require("./tx");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.createStableswapPool = this.createStableswapPool.bind(this);
        this.stableSwapAdjustScalingFactors = this.stableSwapAdjustScalingFactors.bind(this);
    }
    createStableswapPool(request) {
        const data = tx_1.MsgCreateStableswapPool.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.poolmodels.stableswap.v1beta1.Msg", "CreateStableswapPool", data);
        return promise.then(data => tx_1.MsgCreateStableswapPoolResponse.decode(new binary_1.BinaryReader(data)));
    }
    stableSwapAdjustScalingFactors(request) {
        const data = tx_1.MsgStableSwapAdjustScalingFactors.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.poolmodels.stableswap.v1beta1.Msg", "StableSwapAdjustScalingFactors", data);
        return promise.then(data => tx_1.MsgStableSwapAdjustScalingFactorsResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
