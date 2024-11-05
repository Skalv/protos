//@ts-nocheck
import { MsgCreateBid, MsgCreateBidResponse, MsgCloseBid, MsgCloseBidResponse } from "./bid";
import { MsgWithdrawLease, MsgWithdrawLeaseResponse, MsgCreateLease, MsgCreateLeaseResponse, MsgCloseLease, MsgCloseLeaseResponse } from "./lease";
import { BinaryReader } from "../../../binary";
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.createBid = this.createBid.bind(this);
        this.closeBid = this.closeBid.bind(this);
        this.withdrawLease = this.withdrawLease.bind(this);
        this.createLease = this.createLease.bind(this);
        this.closeLease = this.closeLease.bind(this);
    }
    createBid(request) {
        const data = MsgCreateBid.encode(request).finish();
        const promise = this.rpc.request("akash.market.v1beta2.Msg", "CreateBid", data);
        return promise.then(data => MsgCreateBidResponse.decode(new BinaryReader(data)));
    }
    closeBid(request) {
        const data = MsgCloseBid.encode(request).finish();
        const promise = this.rpc.request("akash.market.v1beta2.Msg", "CloseBid", data);
        return promise.then(data => MsgCloseBidResponse.decode(new BinaryReader(data)));
    }
    withdrawLease(request) {
        const data = MsgWithdrawLease.encode(request).finish();
        const promise = this.rpc.request("akash.market.v1beta2.Msg", "WithdrawLease", data);
        return promise.then(data => MsgWithdrawLeaseResponse.decode(new BinaryReader(data)));
    }
    createLease(request) {
        const data = MsgCreateLease.encode(request).finish();
        const promise = this.rpc.request("akash.market.v1beta2.Msg", "CreateLease", data);
        return promise.then(data => MsgCreateLeaseResponse.decode(new BinaryReader(data)));
    }
    closeLease(request) {
        const data = MsgCloseLease.encode(request).finish();
        const promise = this.rpc.request("akash.market.v1beta2.Msg", "CloseLease", data);
        return promise.then(data => MsgCloseLeaseResponse.decode(new BinaryReader(data)));
    }
}
