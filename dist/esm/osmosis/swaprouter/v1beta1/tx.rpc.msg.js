import { BinaryReader } from "../../../binary";
import { MsgSwapExactAmountIn, MsgSwapExactAmountInResponse, MsgSwapExactAmountOut, MsgSwapExactAmountOutResponse } from "./tx";
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.swapExactAmountIn = this.swapExactAmountIn.bind(this);
        this.swapExactAmountOut = this.swapExactAmountOut.bind(this);
    }
    swapExactAmountIn(request) {
        const data = MsgSwapExactAmountIn.encode(request).finish();
        const promise = this.rpc.request("osmosis.swaprouter.v1beta1.Msg", "SwapExactAmountIn", data);
        return promise.then(data => MsgSwapExactAmountInResponse.decode(new BinaryReader(data)));
    }
    swapExactAmountOut(request) {
        const data = MsgSwapExactAmountOut.encode(request).finish();
        const promise = this.rpc.request("osmosis.swaprouter.v1beta1.Msg", "SwapExactAmountOut", data);
        return promise.then(data => MsgSwapExactAmountOutResponse.decode(new BinaryReader(data)));
    }
}
