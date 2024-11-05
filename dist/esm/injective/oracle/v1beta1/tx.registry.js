import { MsgRelayProviderPrices, MsgRelayPriceFeedPrice, MsgRelayBandRates, MsgRequestBandIBCRates, MsgRelayCoinbaseMessages } from "./tx";
export const registry = [["/injective.oracle.v1beta1.MsgRelayProviderPrices", MsgRelayProviderPrices], ["/injective.oracle.v1beta1.MsgRelayPriceFeedPrice", MsgRelayPriceFeedPrice], ["/injective.oracle.v1beta1.MsgRelayBandRates", MsgRelayBandRates], ["/injective.oracle.v1beta1.MsgRequestBandIBCRates", MsgRequestBandIBCRates], ["/injective.oracle.v1beta1.MsgRelayCoinbaseMessages", MsgRelayCoinbaseMessages]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        relayProviderPrices(value) {
            return {
                typeUrl: "/injective.oracle.v1beta1.MsgRelayProviderPrices",
                value: MsgRelayProviderPrices.encode(value).finish()
            };
        },
        relayPriceFeedPrice(value) {
            return {
                typeUrl: "/injective.oracle.v1beta1.MsgRelayPriceFeedPrice",
                value: MsgRelayPriceFeedPrice.encode(value).finish()
            };
        },
        relayBandRates(value) {
            return {
                typeUrl: "/injective.oracle.v1beta1.MsgRelayBandRates",
                value: MsgRelayBandRates.encode(value).finish()
            };
        },
        requestBandIBCRates(value) {
            return {
                typeUrl: "/injective.oracle.v1beta1.MsgRequestBandIBCRates",
                value: MsgRequestBandIBCRates.encode(value).finish()
            };
        },
        relayCoinbaseMessages(value) {
            return {
                typeUrl: "/injective.oracle.v1beta1.MsgRelayCoinbaseMessages",
                value: MsgRelayCoinbaseMessages.encode(value).finish()
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
                value: MsgRelayProviderPrices.fromPartial(value)
            };
        },
        relayPriceFeedPrice(value) {
            return {
                typeUrl: "/injective.oracle.v1beta1.MsgRelayPriceFeedPrice",
                value: MsgRelayPriceFeedPrice.fromPartial(value)
            };
        },
        relayBandRates(value) {
            return {
                typeUrl: "/injective.oracle.v1beta1.MsgRelayBandRates",
                value: MsgRelayBandRates.fromPartial(value)
            };
        },
        requestBandIBCRates(value) {
            return {
                typeUrl: "/injective.oracle.v1beta1.MsgRequestBandIBCRates",
                value: MsgRequestBandIBCRates.fromPartial(value)
            };
        },
        relayCoinbaseMessages(value) {
            return {
                typeUrl: "/injective.oracle.v1beta1.MsgRelayCoinbaseMessages",
                value: MsgRelayCoinbaseMessages.fromPartial(value)
            };
        }
    }
};
