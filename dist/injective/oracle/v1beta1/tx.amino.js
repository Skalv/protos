"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
//@ts-nocheck
const tx_1 = require("./tx");
exports.AminoConverter = {
    "/injective.oracle.v1beta1.MsgRelayProviderPrices": {
        aminoType: "/injective.oracle.v1beta1.MsgRelayProviderPrices",
        toAmino: tx_1.MsgRelayProviderPrices.toAmino,
        fromAmino: tx_1.MsgRelayProviderPrices.fromAmino
    },
    "/injective.oracle.v1beta1.MsgRelayPriceFeedPrice": {
        aminoType: "/injective.oracle.v1beta1.MsgRelayPriceFeedPrice",
        toAmino: tx_1.MsgRelayPriceFeedPrice.toAmino,
        fromAmino: tx_1.MsgRelayPriceFeedPrice.fromAmino
    },
    "/injective.oracle.v1beta1.MsgRelayBandRates": {
        aminoType: "/injective.oracle.v1beta1.MsgRelayBandRates",
        toAmino: tx_1.MsgRelayBandRates.toAmino,
        fromAmino: tx_1.MsgRelayBandRates.fromAmino
    },
    "/injective.oracle.v1beta1.MsgRequestBandIBCRates": {
        aminoType: "/injective.oracle.v1beta1.MsgRequestBandIBCRates",
        toAmino: tx_1.MsgRequestBandIBCRates.toAmino,
        fromAmino: tx_1.MsgRequestBandIBCRates.fromAmino
    },
    "/injective.oracle.v1beta1.MsgRelayCoinbaseMessages": {
        aminoType: "/injective.oracle.v1beta1.MsgRelayCoinbaseMessages",
        toAmino: tx_1.MsgRelayCoinbaseMessages.toAmino,
        fromAmino: tx_1.MsgRelayCoinbaseMessages.fromAmino
    }
};
