"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_1 = require("./tx");
exports.registry = [["/injective.oracle.v1beta1.MsgRelayProviderPrices", tx_1.MsgRelayProviderPrices], ["/injective.oracle.v1beta1.MsgRelayPriceFeedPrice", tx_1.MsgRelayPriceFeedPrice], ["/injective.oracle.v1beta1.MsgRelayBandRates", tx_1.MsgRelayBandRates], ["/injective.oracle.v1beta1.MsgRequestBandIBCRates", tx_1.MsgRequestBandIBCRates], ["/injective.oracle.v1beta1.MsgRelayCoinbaseMessages", tx_1.MsgRelayCoinbaseMessages]];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        relayProviderPrices(value) {
            return {
                typeUrl: "/injective.oracle.v1beta1.MsgRelayProviderPrices",
                value: tx_1.MsgRelayProviderPrices.encode(value).finish()
            };
        },
        relayPriceFeedPrice(value) {
            return {
                typeUrl: "/injective.oracle.v1beta1.MsgRelayPriceFeedPrice",
                value: tx_1.MsgRelayPriceFeedPrice.encode(value).finish()
            };
        },
        relayBandRates(value) {
            return {
                typeUrl: "/injective.oracle.v1beta1.MsgRelayBandRates",
                value: tx_1.MsgRelayBandRates.encode(value).finish()
            };
        },
        requestBandIBCRates(value) {
            return {
                typeUrl: "/injective.oracle.v1beta1.MsgRequestBandIBCRates",
                value: tx_1.MsgRequestBandIBCRates.encode(value).finish()
            };
        },
        relayCoinbaseMessages(value) {
            return {
                typeUrl: "/injective.oracle.v1beta1.MsgRelayCoinbaseMessages",
                value: tx_1.MsgRelayCoinbaseMessages.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        relayProviderPrices(value) {
            return {
                typeUrl: "/injective.oracle.v1beta1.MsgRelayProviderPrices",
                value
            };
        },
        relayPriceFeedPrice(value) {
            return {
                typeUrl: "/injective.oracle.v1beta1.MsgRelayPriceFeedPrice",
                value
            };
        },
        relayBandRates(value) {
            return {
                typeUrl: "/injective.oracle.v1beta1.MsgRelayBandRates",
                value
            };
        },
        requestBandIBCRates(value) {
            return {
                typeUrl: "/injective.oracle.v1beta1.MsgRequestBandIBCRates",
                value
            };
        },
        relayCoinbaseMessages(value) {
            return {
                typeUrl: "/injective.oracle.v1beta1.MsgRelayCoinbaseMessages",
                value
            };
        }
    },
    fromPartial: {
        relayProviderPrices(value) {
            return {
                typeUrl: "/injective.oracle.v1beta1.MsgRelayProviderPrices",
                value: tx_1.MsgRelayProviderPrices.fromPartial(value)
            };
        },
        relayPriceFeedPrice(value) {
            return {
                typeUrl: "/injective.oracle.v1beta1.MsgRelayPriceFeedPrice",
                value: tx_1.MsgRelayPriceFeedPrice.fromPartial(value)
            };
        },
        relayBandRates(value) {
            return {
                typeUrl: "/injective.oracle.v1beta1.MsgRelayBandRates",
                value: tx_1.MsgRelayBandRates.fromPartial(value)
            };
        },
        requestBandIBCRates(value) {
            return {
                typeUrl: "/injective.oracle.v1beta1.MsgRequestBandIBCRates",
                value: tx_1.MsgRequestBandIBCRates.fromPartial(value)
            };
        },
        relayCoinbaseMessages(value) {
            return {
                typeUrl: "/injective.oracle.v1beta1.MsgRelayCoinbaseMessages",
                value: tx_1.MsgRelayCoinbaseMessages.fromPartial(value)
            };
        }
    }
};
