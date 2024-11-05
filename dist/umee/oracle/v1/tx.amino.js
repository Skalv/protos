"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
//@ts-nocheck
const tx_1 = require("./tx");
exports.AminoConverter = {
    "/umee.oracle.v1.MsgAggregateExchangeRatePrevote": {
        aminoType: "/umee.oracle.v1.MsgAggregateExchangeRatePrevote",
        toAmino: tx_1.MsgAggregateExchangeRatePrevote.toAmino,
        fromAmino: tx_1.MsgAggregateExchangeRatePrevote.fromAmino
    },
    "/umee.oracle.v1.MsgAggregateExchangeRateVote": {
        aminoType: "/umee.oracle.v1.MsgAggregateExchangeRateVote",
        toAmino: tx_1.MsgAggregateExchangeRateVote.toAmino,
        fromAmino: tx_1.MsgAggregateExchangeRateVote.fromAmino
    },
    "/umee.oracle.v1.MsgDelegateFeedConsent": {
        aminoType: "/umee.oracle.v1.MsgDelegateFeedConsent",
        toAmino: tx_1.MsgDelegateFeedConsent.toAmino,
        fromAmino: tx_1.MsgDelegateFeedConsent.fromAmino
    }
};
