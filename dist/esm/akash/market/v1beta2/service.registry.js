//@ts-nocheck
import { MsgCreateBid, MsgCloseBid } from "./bid";
import { MsgWithdrawLease, MsgCreateLease, MsgCloseLease } from "./lease";
export const registry = [["/akash.market.v1beta2.MsgCreateBid", MsgCreateBid], ["/akash.market.v1beta2.MsgCloseBid", MsgCloseBid], ["/akash.market.v1beta2.MsgWithdrawLease", MsgWithdrawLease], ["/akash.market.v1beta2.MsgCreateLease", MsgCreateLease], ["/akash.market.v1beta2.MsgCloseLease", MsgCloseLease]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        createBid(value) {
            return {
                typeUrl: "/akash.market.v1beta2.MsgCreateBid",
                value: MsgCreateBid.encode(value).finish()
            };
        },
        closeBid(value) {
            return {
                typeUrl: "/akash.market.v1beta2.MsgCloseBid",
                value: MsgCloseBid.encode(value).finish()
            };
        },
        withdrawLease(value) {
            return {
                typeUrl: "/akash.market.v1beta2.MsgWithdrawLease",
                value: MsgWithdrawLease.encode(value).finish()
            };
        },
        createLease(value) {
            return {
                typeUrl: "/akash.market.v1beta2.MsgCreateLease",
                value: MsgCreateLease.encode(value).finish()
            };
        },
        closeLease(value) {
            return {
                typeUrl: "/akash.market.v1beta2.MsgCloseLease",
                value: MsgCloseLease.encode(value).finish()
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
                value: MsgCreateBid.fromPartial(value)
            };
        },
        closeBid(value) {
            return {
                typeUrl: "/akash.market.v1beta2.MsgCloseBid",
                value: MsgCloseBid.fromPartial(value)
            };
        },
        withdrawLease(value) {
            return {
                typeUrl: "/akash.market.v1beta2.MsgWithdrawLease",
                value: MsgWithdrawLease.fromPartial(value)
            };
        },
        createLease(value) {
            return {
                typeUrl: "/akash.market.v1beta2.MsgCreateLease",
                value: MsgCreateLease.fromPartial(value)
            };
        },
        closeLease(value) {
            return {
                typeUrl: "/akash.market.v1beta2.MsgCloseLease",
                value: MsgCloseLease.fromPartial(value)
            };
        }
    }
};
