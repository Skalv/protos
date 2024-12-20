"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = void 0;
const binary_1 = require("../../binary");
const tx_1 = require("./tx");
class MsgClientImpl {
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
        const data = tx_1.MsgCreatePool.encode(request).finish();
        const promise = this.rpc.request("liquidity.v1beta1.Msg", "CreatePool", data);
        return promise.then(data => tx_1.MsgCreatePoolResponse.decode(new binary_1.BinaryReader(data)));
    }
    depositWithinBatch(request) {
        const data = tx_1.MsgDepositWithinBatch.encode(request).finish();
        const promise = this.rpc.request("liquidity.v1beta1.Msg", "DepositWithinBatch", data);
        return promise.then(data => tx_1.MsgDepositWithinBatchResponse.decode(new binary_1.BinaryReader(data)));
    }
    withdrawWithinBatch(request) {
        const data = tx_1.MsgWithdrawWithinBatch.encode(request).finish();
        const promise = this.rpc.request("liquidity.v1beta1.Msg", "WithdrawWithinBatch", data);
        return promise.then(data => tx_1.MsgWithdrawWithinBatchResponse.decode(new binary_1.BinaryReader(data)));
    }
    swap(request) {
        const data = tx_1.MsgSwapWithinBatch.encode(request).finish();
        const promise = this.rpc.request("liquidity.v1beta1.Msg", "Swap", data);
        return promise.then(data => tx_1.MsgSwapWithinBatchResponse.decode(new binary_1.BinaryReader(data)));
    }
    directSwap(request) {
        const data = tx_1.MsgDirectSwap.encode(request).finish();
        const promise = this.rpc.request("liquidity.v1beta1.Msg", "DirectSwap", data);
        return promise.then(data => tx_1.MsgDirectSwapResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
