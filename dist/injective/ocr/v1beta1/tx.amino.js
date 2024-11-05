"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
//@ts-nocheck
const tx_1 = require("./tx");
exports.AminoConverter = {
    "/injective.ocr.v1beta1.MsgCreateFeed": {
        aminoType: "/injective.ocr.v1beta1.MsgCreateFeed",
        toAmino: tx_1.MsgCreateFeed.toAmino,
        fromAmino: tx_1.MsgCreateFeed.fromAmino
    },
    "/injective.ocr.v1beta1.MsgUpdateFeed": {
        aminoType: "/injective.ocr.v1beta1.MsgUpdateFeed",
        toAmino: tx_1.MsgUpdateFeed.toAmino,
        fromAmino: tx_1.MsgUpdateFeed.fromAmino
    },
    "/injective.ocr.v1beta1.MsgTransmit": {
        aminoType: "/injective.ocr.v1beta1.MsgTransmit",
        toAmino: tx_1.MsgTransmit.toAmino,
        fromAmino: tx_1.MsgTransmit.fromAmino
    },
    "/injective.ocr.v1beta1.MsgFundFeedRewardPool": {
        aminoType: "/injective.ocr.v1beta1.MsgFundFeedRewardPool",
        toAmino: tx_1.MsgFundFeedRewardPool.toAmino,
        fromAmino: tx_1.MsgFundFeedRewardPool.fromAmino
    },
    "/injective.ocr.v1beta1.MsgWithdrawFeedRewardPool": {
        aminoType: "/injective.ocr.v1beta1.MsgWithdrawFeedRewardPool",
        toAmino: tx_1.MsgWithdrawFeedRewardPool.toAmino,
        fromAmino: tx_1.MsgWithdrawFeedRewardPool.fromAmino
    },
    "/injective.ocr.v1beta1.MsgSetPayees": {
        aminoType: "/injective.ocr.v1beta1.MsgSetPayees",
        toAmino: tx_1.MsgSetPayees.toAmino,
        fromAmino: tx_1.MsgSetPayees.fromAmino
    },
    "/injective.ocr.v1beta1.MsgTransferPayeeship": {
        aminoType: "/injective.ocr.v1beta1.MsgTransferPayeeship",
        toAmino: tx_1.MsgTransferPayeeship.toAmino,
        fromAmino: tx_1.MsgTransferPayeeship.fromAmino
    },
    "/injective.ocr.v1beta1.MsgAcceptPayeeship": {
        aminoType: "/injective.ocr.v1beta1.MsgAcceptPayeeship",
        toAmino: tx_1.MsgAcceptPayeeship.toAmino,
        fromAmino: tx_1.MsgAcceptPayeeship.fromAmino
    }
};
