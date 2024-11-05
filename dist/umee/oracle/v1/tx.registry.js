"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_1 = require("./tx");
exports.registry = [["/umee.oracle.v1.MsgAggregateExchangeRatePrevote", tx_1.MsgAggregateExchangeRatePrevote], ["/umee.oracle.v1.MsgAggregateExchangeRateVote", tx_1.MsgAggregateExchangeRateVote], ["/umee.oracle.v1.MsgDelegateFeedConsent", tx_1.MsgDelegateFeedConsent]];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        aggregateExchangeRatePrevote(value) {
            return {
                typeUrl: "/umee.oracle.v1.MsgAggregateExchangeRatePrevote",
                value: tx_1.MsgAggregateExchangeRatePrevote.encode(value).finish()
            };
        },
        aggregateExchangeRateVote(value) {
            return {
                typeUrl: "/umee.oracle.v1.MsgAggregateExchangeRateVote",
                value: tx_1.MsgAggregateExchangeRateVote.encode(value).finish()
            };
        },
        delegateFeedConsent(value) {
            return {
                typeUrl: "/umee.oracle.v1.MsgDelegateFeedConsent",
                value: tx_1.MsgDelegateFeedConsent.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        aggregateExchangeRatePrevote(value) {
            return {
                typeUrl: "/umee.oracle.v1.MsgAggregateExchangeRatePrevote",
                value
            };
        },
        aggregateExchangeRateVote(value) {
            return {
                typeUrl: "/umee.oracle.v1.MsgAggregateExchangeRateVote",
                value
            };
        },
        delegateFeedConsent(value) {
            return {
                typeUrl: "/umee.oracle.v1.MsgDelegateFeedConsent",
                value
            };
        }
    },
    fromPartial: {
        aggregateExchangeRatePrevote(value) {
            return {
                typeUrl: "/umee.oracle.v1.MsgAggregateExchangeRatePrevote",
                value: tx_1.MsgAggregateExchangeRatePrevote.fromPartial(value)
            };
        },
        aggregateExchangeRateVote(value) {
            return {
                typeUrl: "/umee.oracle.v1.MsgAggregateExchangeRateVote",
                value: tx_1.MsgAggregateExchangeRateVote.fromPartial(value)
            };
        },
        delegateFeedConsent(value) {
            return {
                typeUrl: "/umee.oracle.v1.MsgDelegateFeedConsent",
                value: tx_1.MsgDelegateFeedConsent.fromPartial(value)
            };
        }
    }
};
