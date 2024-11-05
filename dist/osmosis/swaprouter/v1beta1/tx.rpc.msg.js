"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = void 0;
const binary_1 = require("../../../binary");
const tx_1 = require("./tx");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.swapExactAmountIn = this.swapExactAmountIn.bind(this);
        this.swapExactAmountOut = this.swapExactAmountOut.bind(this);
    }
    swapExactAmountIn(request) {
        const data = tx_1.MsgSwapExactAmountIn.encode(request).finish();
        const promise = this.rpc.request("osmosis.swaprouter.v1beta1.Msg", "SwapExactAmountIn", data);
        return promise.then(data => tx_1.MsgSwapExactAmountInResponse.decode(new binary_1.BinaryReader(data)));
    }
    swapExactAmountOut(request) {
        const data = tx_1.MsgSwapExactAmountOut.encode(request).finish();
        const promise = this.rpc.request("osmosis.swaprouter.v1beta1.Msg", "SwapExactAmountOut", data);
        return promise.then(data => tx_1.MsgSwapExactAmountOutResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
