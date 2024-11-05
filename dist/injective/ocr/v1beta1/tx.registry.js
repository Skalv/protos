"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_1 = require("./tx");
exports.registry = [["/injective.ocr.v1beta1.MsgCreateFeed", tx_1.MsgCreateFeed], ["/injective.ocr.v1beta1.MsgUpdateFeed", tx_1.MsgUpdateFeed], ["/injective.ocr.v1beta1.MsgTransmit", tx_1.MsgTransmit], ["/injective.ocr.v1beta1.MsgFundFeedRewardPool", tx_1.MsgFundFeedRewardPool], ["/injective.ocr.v1beta1.MsgWithdrawFeedRewardPool", tx_1.MsgWithdrawFeedRewardPool], ["/injective.ocr.v1beta1.MsgSetPayees", tx_1.MsgSetPayees], ["/injective.ocr.v1beta1.MsgTransferPayeeship", tx_1.MsgTransferPayeeship], ["/injective.ocr.v1beta1.MsgAcceptPayeeship", tx_1.MsgAcceptPayeeship]];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        createFeed(value) {
            return {
                typeUrl: "/injective.ocr.v1beta1.MsgCreateFeed",
                value: tx_1.MsgCreateFeed.encode(value).finish()
            };
        },
        updateFeed(value) {
            return {
                typeUrl: "/injective.ocr.v1beta1.MsgUpdateFeed",
                value: tx_1.MsgUpdateFeed.encode(value).finish()
            };
        },
        transmit(value) {
            return {
                typeUrl: "/injective.ocr.v1beta1.MsgTransmit",
                value: tx_1.MsgTransmit.encode(value).finish()
            };
        },
        fundFeedRewardPool(value) {
            return {
                typeUrl: "/injective.ocr.v1beta1.MsgFundFeedRewardPool",
                value: tx_1.MsgFundFeedRewardPool.encode(value).finish()
            };
        },
        withdrawFeedRewardPool(value) {
            return {
                typeUrl: "/injective.ocr.v1beta1.MsgWithdrawFeedRewardPool",
                value: tx_1.MsgWithdrawFeedRewardPool.encode(value).finish()
            };
        },
        setPayees(value) {
            return {
                typeUrl: "/injective.ocr.v1beta1.MsgSetPayees",
                value: tx_1.MsgSetPayees.encode(value).finish()
            };
        },
        transferPayeeship(value) {
            return {
                typeUrl: "/injective.ocr.v1beta1.MsgTransferPayeeship",
                value: tx_1.MsgTransferPayeeship.encode(value).finish()
            };
        },
        acceptPayeeship(value) {
            return {
                typeUrl: "/injective.ocr.v1beta1.MsgAcceptPayeeship",
                value: tx_1.MsgAcceptPayeeship.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        createFeed(value) {
            return {
                typeUrl: "/injective.ocr.v1beta1.MsgCreateFeed",
                value
            };
        },
        updateFeed(value) {
            return {
                typeUrl: "/injective.ocr.v1beta1.MsgUpdateFeed",
                value
            };
        },
        transmit(value) {
            return {
                typeUrl: "/injective.ocr.v1beta1.MsgTransmit",
                value
            };
        },
        fundFeedRewardPool(value) {
            return {
                typeUrl: "/injective.ocr.v1beta1.MsgFundFeedRewardPool",
                value
            };
        },
        withdrawFeedRewardPool(value) {
            return {
                typeUrl: "/injective.ocr.v1beta1.MsgWithdrawFeedRewardPool",
                value
            };
        },
        setPayees(value) {
            return {
                typeUrl: "/injective.ocr.v1beta1.MsgSetPayees",
                value
            };
        },
        transferPayeeship(value) {
            return {
                typeUrl: "/injective.ocr.v1beta1.MsgTransferPayeeship",
                value
            };
        },
        acceptPayeeship(value) {
            return {
                typeUrl: "/injective.ocr.v1beta1.MsgAcceptPayeeship",
                value
            };
        }
    },
    fromPartial: {
        createFeed(value) {
            return {
                typeUrl: "/injective.ocr.v1beta1.MsgCreateFeed",
                value: tx_1.MsgCreateFeed.fromPartial(value)
            };
        },
        updateFeed(value) {
            return {
                typeUrl: "/injective.ocr.v1beta1.MsgUpdateFeed",
                value: tx_1.MsgUpdateFeed.fromPartial(value)
            };
        },
        transmit(value) {
            return {
                typeUrl: "/injective.ocr.v1beta1.MsgTransmit",
                value: tx_1.MsgTransmit.fromPartial(value)
            };
        },
        fundFeedRewardPool(value) {
            return {
                typeUrl: "/injective.ocr.v1beta1.MsgFundFeedRewardPool",
                value: tx_1.MsgFundFeedRewardPool.fromPartial(value)
            };
        },
        withdrawFeedRewardPool(value) {
            return {
                typeUrl: "/injective.ocr.v1beta1.MsgWithdrawFeedRewardPool",
                value: tx_1.MsgWithdrawFeedRewardPool.fromPartial(value)
            };
        },
        setPayees(value) {
            return {
                typeUrl: "/injective.ocr.v1beta1.MsgSetPayees",
                value: tx_1.MsgSetPayees.fromPartial(value)
            };
        },
        transferPayeeship(value) {
            return {
                typeUrl: "/injective.ocr.v1beta1.MsgTransferPayeeship",
                value: tx_1.MsgTransferPayeeship.fromPartial(value)
            };
        },
        acceptPayeeship(value) {
            return {
                typeUrl: "/injective.ocr.v1beta1.MsgAcceptPayeeship",
                value: tx_1.MsgAcceptPayeeship.fromPartial(value)
            };
        }
    }
};
