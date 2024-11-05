import { BinaryReader } from "../../../binary";
import { MsgSupply, MsgSupplyResponse, MsgWithdraw, MsgWithdrawResponse, MsgCollateralize, MsgCollateralizeResponse, MsgDecollateralize, MsgDecollateralizeResponse, MsgBorrow, MsgBorrowResponse, MsgRepay, MsgRepayResponse, MsgLiquidate, MsgLiquidateResponse } from "./tx";
export class MsgClientImpl {
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
        const data = MsgSupply.encode(request).finish();
        const promise = this.rpc.request("umee.leverage.v1.Msg", "Supply", data);
        return promise.then(data => MsgSupplyResponse.decode(new BinaryReader(data)));
    }
    withdraw(request) {
        const data = MsgWithdraw.encode(request).finish();
        const promise = this.rpc.request("umee.leverage.v1.Msg", "Withdraw", data);
        return promise.then(data => MsgWithdrawResponse.decode(new BinaryReader(data)));
    }
    collateralize(request) {
        const data = MsgCollateralize.encode(request).finish();
        const promise = this.rpc.request("umee.leverage.v1.Msg", "Collateralize", data);
        return promise.then(data => MsgCollateralizeResponse.decode(new BinaryReader(data)));
    }
    decollateralize(request) {
        const data = MsgDecollateralize.encode(request).finish();
        const promise = this.rpc.request("umee.leverage.v1.Msg", "Decollateralize", data);
        return promise.then(data => MsgDecollateralizeResponse.decode(new BinaryReader(data)));
    }
    borrow(request) {
        const data = MsgBorrow.encode(request).finish();
        const promise = this.rpc.request("umee.leverage.v1.Msg", "Borrow", data);
        return promise.then(data => MsgBorrowResponse.decode(new BinaryReader(data)));
    }
    repay(request) {
        const data = MsgRepay.encode(request).finish();
        const promise = this.rpc.request("umee.leverage.v1.Msg", "Repay", data);
        return promise.then(data => MsgRepayResponse.decode(new BinaryReader(data)));
    }
    liquidate(request) {
        const data = MsgLiquidate.encode(request).finish();
        const promise = this.rpc.request("umee.leverage.v1.Msg", "Liquidate", data);
        return promise.then(data => MsgLiquidateResponse.decode(new BinaryReader(data)));
    }
}
