import { BinaryReader } from "../../../binary";
import { MsgJoinPool, MsgJoinPoolResponse, MsgExitPool, MsgExitPoolResponse, MsgSwapExactAmountIn, MsgSwapExactAmountInResponse, MsgSwapExactAmountOut, MsgSwapExactAmountOutResponse, MsgJoinSwapExternAmountIn, MsgJoinSwapExternAmountInResponse, MsgJoinSwapShareAmountOut, MsgJoinSwapShareAmountOutResponse, MsgExitSwapExternAmountOut, MsgExitSwapExternAmountOutResponse, MsgExitSwapShareAmountIn, MsgExitSwapShareAmountInResponse } from "./tx";
export class MsgClientImpl {
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
        const data = MsgJoinPool.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.v1beta1.Msg", "JoinPool", data);
        return promise.then(data => MsgJoinPoolResponse.decode(new BinaryReader(data)));
    }
    exitPool(request) {
        const data = MsgExitPool.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.v1beta1.Msg", "ExitPool", data);
        return promise.then(data => MsgExitPoolResponse.decode(new BinaryReader(data)));
    }
    swapExactAmountIn(request) {
        const data = MsgSwapExactAmountIn.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.v1beta1.Msg", "SwapExactAmountIn", data);
        return promise.then(data => MsgSwapExactAmountInResponse.decode(new BinaryReader(data)));
    }
    swapExactAmountOut(request) {
        const data = MsgSwapExactAmountOut.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.v1beta1.Msg", "SwapExactAmountOut", data);
        return promise.then(data => MsgSwapExactAmountOutResponse.decode(new BinaryReader(data)));
    }
    joinSwapExternAmountIn(request) {
        const data = MsgJoinSwapExternAmountIn.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.v1beta1.Msg", "JoinSwapExternAmountIn", data);
        return promise.then(data => MsgJoinSwapExternAmountInResponse.decode(new BinaryReader(data)));
    }
    joinSwapShareAmountOut(request) {
        const data = MsgJoinSwapShareAmountOut.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.v1beta1.Msg", "JoinSwapShareAmountOut", data);
        return promise.then(data => MsgJoinSwapShareAmountOutResponse.decode(new BinaryReader(data)));
    }
    exitSwapExternAmountOut(request) {
        const data = MsgExitSwapExternAmountOut.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.v1beta1.Msg", "ExitSwapExternAmountOut", data);
        return promise.then(data => MsgExitSwapExternAmountOutResponse.decode(new BinaryReader(data)));
    }
    exitSwapShareAmountIn(request) {
        const data = MsgExitSwapShareAmountIn.encode(request).finish();
        const promise = this.rpc.request("osmosis.gamm.v1beta1.Msg", "ExitSwapShareAmountIn", data);
        return promise.then(data => MsgExitSwapShareAmountInResponse.decode(new BinaryReader(data)));
    }
}
