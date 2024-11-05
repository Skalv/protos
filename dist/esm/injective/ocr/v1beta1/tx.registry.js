import { MsgCreateFeed, MsgUpdateFeed, MsgTransmit, MsgFundFeedRewardPool, MsgWithdrawFeedRewardPool, MsgSetPayees, MsgTransferPayeeship, MsgAcceptPayeeship } from "./tx";
export const registry = [["/injective.ocr.v1beta1.MsgCreateFeed", MsgCreateFeed], ["/injective.ocr.v1beta1.MsgUpdateFeed", MsgUpdateFeed], ["/injective.ocr.v1beta1.MsgTransmit", MsgTransmit], ["/injective.ocr.v1beta1.MsgFundFeedRewardPool", MsgFundFeedRewardPool], ["/injective.ocr.v1beta1.MsgWithdrawFeedRewardPool", MsgWithdrawFeedRewardPool], ["/injective.ocr.v1beta1.MsgSetPayees", MsgSetPayees], ["/injective.ocr.v1beta1.MsgTransferPayeeship", MsgTransferPayeeship], ["/injective.ocr.v1beta1.MsgAcceptPayeeship", MsgAcceptPayeeship]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        createFeed(value) {
            return {
                typeUrl: "/injective.ocr.v1beta1.MsgCreateFeed",
                value: MsgCreateFeed.encode(value).finish()
            };
        },
        updateFeed(value) {
            return {
                typeUrl: "/injective.ocr.v1beta1.MsgUpdateFeed",
                value: MsgUpdateFeed.encode(value).finish()
            };
        },
        transmit(value) {
            return {
                typeUrl: "/injective.ocr.v1beta1.MsgTransmit",
                value: MsgTransmit.encode(value).finish()
            };
        },
        fundFeedRewardPool(value) {
            return {
                typeUrl: "/injective.ocr.v1beta1.MsgFundFeedRewardPool",
                value: MsgFundFeedRewardPool.encode(value).finish()
            };
        },
        withdrawFeedRewardPool(value) {
            return {
                typeUrl: "/injective.ocr.v1beta1.MsgWithdrawFeedRewardPool",
                value: MsgWithdrawFeedRewardPool.encode(value).finish()
            };
        },
        setPayees(value) {
            return {
                typeUrl: "/injective.ocr.v1beta1.MsgSetPayees",
                value: MsgSetPayees.encode(value).finish()
            };
        },
        transferPayeeship(value) {
            return {
                typeUrl: "/injective.ocr.v1beta1.MsgTransferPayeeship",
                value: MsgTransferPayeeship.encode(value).finish()
            };
        },
        acceptPayeeship(value) {
            return {
                typeUrl: "/injective.ocr.v1beta1.MsgAcceptPayeeship",
                value: MsgAcceptPayeeship.encode(value).finish()
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
                value: MsgCreateFeed.fromPartial(value)
            };
        },
        updateFeed(value) {
            return {
                typeUrl: "/injective.ocr.v1beta1.MsgUpdateFeed",
                value: MsgUpdateFeed.fromPartial(value)
            };
        },
        transmit(value) {
            return {
                typeUrl: "/injective.ocr.v1beta1.MsgTransmit",
                value: MsgTransmit.fromPartial(value)
            };
        },
        fundFeedRewardPool(value) {
            return {
                typeUrl: "/injective.ocr.v1beta1.MsgFundFeedRewardPool",
                value: MsgFundFeedRewardPool.fromPartial(value)
            };
        },
        withdrawFeedRewardPool(value) {
            return {
                typeUrl: "/injective.ocr.v1beta1.MsgWithdrawFeedRewardPool",
                value: MsgWithdrawFeedRewardPool.fromPartial(value)
            };
        },
        setPayees(value) {
            return {
                typeUrl: "/injective.ocr.v1beta1.MsgSetPayees",
                value: MsgSetPayees.fromPartial(value)
            };
        },
        transferPayeeship(value) {
            return {
                typeUrl: "/injective.ocr.v1beta1.MsgTransferPayeeship",
                value: MsgTransferPayeeship.fromPartial(value)
            };
        },
        acceptPayeeship(value) {
            return {
                typeUrl: "/injective.ocr.v1beta1.MsgAcceptPayeeship",
                value: MsgAcceptPayeeship.fromPartial(value)
            };
        }
    }
};
