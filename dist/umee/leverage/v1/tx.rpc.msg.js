"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = void 0;
const binary_1 = require("../../../binary");
const tx_1 = require("./tx");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.supply = this.supply.bind(this);
        this.withdraw = this.withdraw.bind(this);
        this.collateralize = this.collateralize.bind(this);
        this.decollateralize = this.decollateralize.bind(this);
        this.borrow = this.borrow.bind(this);
        this.repay = this.repay.bind(this);
        this.liquidate = this.liquidate.bind(this);
    }
    supply(request) {
        const data = tx_1.MsgSupply.encode(request).finish();
        const promise = this.rpc.request("umee.leverage.v1.Msg", "Supply", data);
        return promise.then(data => tx_1.MsgSupplyResponse.decode(new binary_1.BinaryReader(data)));
    }
    withdraw(request) {
        const data = tx_1.MsgWithdraw.encode(request).finish();
        const promise = this.rpc.request("umee.leverage.v1.Msg", "Withdraw", data);
        return promise.then(data => tx_1.MsgWithdrawResponse.decode(new binary_1.BinaryReader(data)));
    }
    collateralize(request) {
        const data = tx_1.MsgCollateralize.encode(request).finish();
        const promise = this.rpc.request("umee.leverage.v1.Msg", "Collateralize", data);
        return promise.then(data => tx_1.MsgCollateralizeResponse.decode(new binary_1.BinaryReader(data)));
    }
    decollateralize(request) {
        const data = tx_1.MsgDecollateralize.encode(request).finish();
        const promise = this.rpc.request("umee.leverage.v1.Msg", "Decollateralize", data);
        return promise.then(data => tx_1.MsgDecollateralizeResponse.decode(new binary_1.BinaryReader(data)));
    }
    borrow(request) {
        const data = tx_1.MsgBorrow.encode(request).finish();
        const promise = this.rpc.request("umee.leverage.v1.Msg", "Borrow", data);
        return promise.then(data => tx_1.MsgBorrowResponse.decode(new binary_1.BinaryReader(data)));
    }
    repay(request) {
        const data = tx_1.MsgRepay.encode(request).finish();
        const promise = this.rpc.request("umee.leverage.v1.Msg", "Repay", data);
        return promise.then(data => tx_1.MsgRepayResponse.decode(new binary_1.BinaryReader(data)));
    }
    liquidate(request) {
        const data = tx_1.MsgLiquidate.encode(request).finish();
        const promise = this.rpc.request("umee.leverage.v1.Msg", "Liquidate", data);
        return promise.then(data => tx_1.MsgLiquidateResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
