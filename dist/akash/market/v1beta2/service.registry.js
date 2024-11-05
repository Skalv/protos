"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
//@ts-nocheck
const bid_1 = require("./bid");
const lease_1 = require("./lease");
exports.registry = [["/akash.market.v1beta2.MsgCreateBid", bid_1.MsgCreateBid], ["/akash.market.v1beta2.MsgCloseBid", bid_1.MsgCloseBid], ["/akash.market.v1beta2.MsgWithdrawLease", lease_1.MsgWithdrawLease], ["/akash.market.v1beta2.MsgCreateLease", lease_1.MsgCreateLease], ["/akash.market.v1beta2.MsgCloseLease", lease_1.MsgCloseLease]];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        createBid(value) {
            return {
                typeUrl: "/akash.market.v1beta2.MsgCreateBid",
                value: bid_1.MsgCreateBid.encode(value).finish()
            };
        },
        closeBid(value) {
            return {
                typeUrl: "/akash.market.v1beta2.MsgCloseBid",
                value: bid_1.MsgCloseBid.encode(value).finish()
            };
        },
        withdrawLease(value) {
            return {
                typeUrl: "/akash.market.v1beta2.MsgWithdrawLease",
                value: lease_1.MsgWithdrawLease.encode(value).finish()
            };
        },
        createLease(value) {
            return {
                typeUrl: "/akash.market.v1beta2.MsgCreateLease",
                value: lease_1.MsgCreateLease.encode(value).finish()
            };
        },
        closeLease(value) {
            return {
                typeUrl: "/akash.market.v1beta2.MsgCloseLease",
                value: lease_1.MsgCloseLease.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        createBid(value) {
            return {
                typeUrl: "/akash.market.v1beta2.MsgCreateBid",
                value
            };
        },
        closeBid(value) {
            return {
                typeUrl: "/akash.market.v1beta2.MsgCloseBid",
                value
            };
        },
        withdrawLease(value) {
            return {
                typeUrl: "/akash.market.v1beta2.MsgWithdrawLease",
                value
            };
        },
        createLease(value) {
            return {
                typeUrl: "/akash.market.v1beta2.MsgCreateLease",
                value
            };
        },
        closeLease(value) {
            return {
                typeUrl: "/akash.market.v1beta2.MsgCloseLease",
                value
            };
        }
    },
    fromPartial: {
        createBid(value) {
            return {
                typeUrl: "/akash.market.v1beta2.MsgCreateBid",
                value: bid_1.MsgCreateBid.fromPartial(value)
            };
        },
        closeBid(value) {
            return {
                typeUrl: "/akash.market.v1beta2.MsgCloseBid",
                value: bid_1.MsgCloseBid.fromPartial(value)
            };
        },
        withdrawLease(value) {
            return {
                typeUrl: "/akash.market.v1beta2.MsgWithdrawLease",
                value: lease_1.MsgWithdrawLease.fromPartial(value)
            };
        },
        createLease(value) {
            return {
                typeUrl: "/akash.market.v1beta2.MsgCreateLease",
                value: lease_1.MsgCreateLease.fromPartial(value)
            };
        },
        closeLease(value) {
            return {
                typeUrl: "/akash.market.v1beta2.MsgCloseLease",
                value: lease_1.MsgCloseLease.fromPartial(value)
            };
        }
    }
};
