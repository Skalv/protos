"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = void 0;
//@ts-nocheck
const bid_1 = require("./bid");
const lease_1 = require("./lease");
const binary_1 = require("../../../binary");
class MsgClientImpl {
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
        const data = bid_1.MsgCreateBid.encode(request).finish();
        const promise = this.rpc.request("akash.market.v1beta2.Msg", "CreateBid", data);
        return promise.then(data => bid_1.MsgCreateBidResponse.decode(new binary_1.BinaryReader(data)));
    }
    closeBid(request) {
        const data = bid_1.MsgCloseBid.encode(request).finish();
        const promise = this.rpc.request("akash.market.v1beta2.Msg", "CloseBid", data);
        return promise.then(data => bid_1.MsgCloseBidResponse.decode(new binary_1.BinaryReader(data)));
    }
    withdrawLease(request) {
        const data = lease_1.MsgWithdrawLease.encode(request).finish();
        const promise = this.rpc.request("akash.market.v1beta2.Msg", "WithdrawLease", data);
        return promise.then(data => lease_1.MsgWithdrawLeaseResponse.decode(new binary_1.BinaryReader(data)));
    }
    createLease(request) {
        const data = lease_1.MsgCreateLease.encode(request).finish();
        const promise = this.rpc.request("akash.market.v1beta2.Msg", "CreateLease", data);
        return promise.then(data => lease_1.MsgCreateLeaseResponse.decode(new binary_1.BinaryReader(data)));
    }
    closeLease(request) {
        const data = lease_1.MsgCloseLease.encode(request).finish();
        const promise = this.rpc.request("akash.market.v1beta2.Msg", "CloseLease", data);
        return promise.then(data => lease_1.MsgCloseLeaseResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
