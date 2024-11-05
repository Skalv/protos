"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
//@ts-nocheck
const bid_1 = require("./bid");
const lease_1 = require("./lease");
exports.AminoConverter = {
    "/akash.market.v1beta2.MsgCreateBid": {
        aminoType: "/akash.market.v1beta2.MsgCreateBid",
        toAmino: bid_1.MsgCreateBid.toAmino,
        fromAmino: bid_1.MsgCreateBid.fromAmino
    },
    "/akash.market.v1beta2.MsgCloseBid": {
        aminoType: "/akash.market.v1beta2.MsgCloseBid",
        toAmino: bid_1.MsgCloseBid.toAmino,
        fromAmino: bid_1.MsgCloseBid.fromAmino
    },
    "/akash.market.v1beta2.MsgWithdrawLease": {
        aminoType: "/akash.market.v1beta2.MsgWithdrawLease",
        toAmino: lease_1.MsgWithdrawLease.toAmino,
        fromAmino: lease_1.MsgWithdrawLease.fromAmino
    },
    "/akash.market.v1beta2.MsgCreateLease": {
        aminoType: "/akash.market.v1beta2.MsgCreateLease",
        toAmino: lease_1.MsgCreateLease.toAmino,
        fromAmino: lease_1.MsgCreateLease.fromAmino
    },
    "/akash.market.v1beta2.MsgCloseLease": {
        aminoType: "/akash.market.v1beta2.MsgCloseLease",
        toAmino: lease_1.MsgCloseLease.toAmino,
        fromAmino: lease_1.MsgCloseLease.fromAmino
    }
};
