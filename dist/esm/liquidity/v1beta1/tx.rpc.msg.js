import { BinaryReader } from "../../binary";
import { MsgCreatePool, MsgCreatePoolResponse, MsgDepositWithinBatch, MsgDepositWithinBatchResponse, MsgWithdrawWithinBatch, MsgWithdrawWithinBatchResponse, MsgSwapWithinBatch, MsgSwapWithinBatchResponse, MsgDirectSwap, MsgDirectSwapResponse } from "./tx";
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.createPool = this.createPool.bind(this);
        this.depositWithinBatch = this.depositWithinBatch.bind(this);
        this.withdrawWithinBatch = this.withdrawWithinBatch.bind(this);
        this.swap = this.swap.bind(this);
        this.directSwap = this.directSwap.bind(this);
    }
    createPool(request) {
        const data = MsgCreatePool.encode(request).finish();
        const promise = this.rpc.request("liquidity.v1beta1.Msg", "CreatePool", data);
        return promise.then(data => MsgCreatePoolResponse.decode(new BinaryReader(data)));
    }
    depositWithinBatch(request) {
        const data = MsgDepositWithinBatch.encode(request).finish();
        const promise = this.rpc.request("liquidity.v1beta1.Msg", "DepositWithinBatch", data);
        return promise.then(data => MsgDepositWithinBatchResponse.decode(new BinaryReader(data)));
    }
    withdrawWithinBatch(request) {
        const data = MsgWithdrawWithinBatch.encode(request).finish();
        const promise = this.rpc.request("liquidity.v1beta1.Msg", "WithdrawWithinBatch", data);
        return promise.then(data => MsgWithdrawWithinBatchResponse.decode(new BinaryReader(data)));
    }
    swap(request) {
        const data = MsgSwapWithinBatch.encode(request).finish();
        const promise = this.rpc.request("liquidity.v1beta1.Msg", "Swap", data);
        return promise.then(data => MsgSwapWithinBatchResponse.decode(new BinaryReader(data)));
    }
    directSwap(request) {
        const data = MsgDirectSwap.encode(request).finish();
        const promise = this.rpc.request("liquidity.v1beta1.Msg", "DirectSwap", data);
        return promise.then(data => MsgDirectSwapResponse.decode(new BinaryReader(data)));
    }
}
