"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = void 0;
const binary_1 = require("../../../binary");
const tx_1 = require("./tx");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.joinPool = this.joinPool.bind(this);
        this.exitPool = this.exitPool.bind(this);
        this.swapExactAmountIn = this.swapExactAmountIn.bind(this);
        this.swapExactAmountOut = this.swapExactAmountOut.bind(this);
        this.joinSwapExternAmountIn = this.joinSwapExternAmountIn.bind(this);
        this.joinSwapShareAmountOut = this.joinSwapShareAmountOut.bind(this);
        this.exitSwapExternAmountOut = this.exitSwapExternAmountOut.bind(this);
        this.exitSwapShareAmountIn = this.exitSwapShareAmountIn.bind(this);
    }
    joinPool(request) {
        const data = tx_1.MsgJoinPool.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.v1beta1.Msg", "JoinPool", data);
        return promise.then(data => tx_1.MsgJoinPoolResponse.decode(new binary_1.BinaryReader(data)));
    }
    exitPool(request) {
        const data = tx_1.MsgExitPool.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.v1beta1.Msg", "ExitPool", data);
        return promise.then(data => tx_1.MsgExitPoolResponse.decode(new binary_1.BinaryReader(data)));
    }
    swapExactAmountIn(request) {
        const data = tx_1.MsgSwapExactAmountIn.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.v1beta1.Msg", "SwapExactAmountIn", data);
        return promise.then(data => tx_1.MsgSwapExactAmountInResponse.decode(new binary_1.BinaryReader(data)));
    }
    swapExactAmountOut(request) {
        const data = tx_1.MsgSwapExactAmountOut.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.v1beta1.Msg", "SwapExactAmountOut", data);
        return promise.then(data => tx_1.MsgSwapExactAmountOutResponse.decode(new binary_1.BinaryReader(data)));
    }
    joinSwapExternAmountIn(request) {
        const data = tx_1.MsgJoinSwapExternAmountIn.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.v1beta1.Msg", "JoinSwapExternAmountIn", data);
        return promise.then(data => tx_1.MsgJoinSwapExternAmountInResponse.decode(new binary_1.BinaryReader(data)));
    }
    joinSwapShareAmountOut(request) {
        const data = tx_1.MsgJoinSwapShareAmountOut.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.v1beta1.Msg", "JoinSwapShareAmountOut", data);
        return promise.then(data => tx_1.MsgJoinSwapShareAmountOutResponse.decode(new binary_1.BinaryReader(data)));
    }
    exitSwapExternAmountOut(request) {
        const data = tx_1.MsgExitSwapExternAmountOut.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.v1beta1.Msg", "ExitSwapExternAmountOut", data);
        return promise.then(data => tx_1.MsgExitSwapExternAmountOutResponse.decode(new binary_1.BinaryReader(data)));
    }
    exitSwapShareAmountIn(request) {
        const data = tx_1.MsgExitSwapShareAmountIn.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.v1beta1.Msg", "ExitSwapShareAmountIn", data);
        return promise.then(data => tx_1.MsgExitSwapShareAmountInResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
