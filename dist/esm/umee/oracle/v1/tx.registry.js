import { MsgAggregateExchangeRatePrevote, MsgAggregateExchangeRateVote, MsgDelegateFeedConsent } from "./tx";
export const registry = [["/umee.oracle.v1.MsgAggregateExchangeRatePrevote", MsgAggregateExchangeRatePrevote], ["/umee.oracle.v1.MsgAggregateExchangeRateVote", MsgAggregateExchangeRateVote], ["/umee.oracle.v1.MsgDelegateFeedConsent", MsgDelegateFeedConsent]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        aggregateExchangeRatePrevote(value) {
            return {
                typeUrl: "/umee.oracle.v1.MsgAggregateExchangeRatePrevote",
                value: MsgAggregateExchangeRatePrevote.encode(value).finish()
            };
        },
        aggregateExchangeRateVote(value) {
            return {
                typeUrl: "/umee.oracle.v1.MsgAggregateExchangeRateVote",
                value: MsgAggregateExchangeRateVote.encode(value).finish()
            };
        },
        delegateFeedConsent(value) {
            return {
                typeUrl: "/umee.oracle.v1.MsgDelegateFeedConsent",
                value: MsgDelegateFeedConsent.encode(value).finish()
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
                value: MsgAggregateExchangeRatePrevote.fromPartial(value)
            };
        },
        aggregateExchangeRateVote(value) {
            return {
                typeUrl: "/umee.oracle.v1.MsgAggregateExchangeRateVote",
                value: MsgAggregateExchangeRateVote.fromPartial(value)
            };
        },
        delegateFeedConsent(value) {
            return {
                typeUrl: "/umee.oracle.v1.MsgDelegateFeedConsent",
                value: MsgDelegateFeedConsent.fromPartial(value)
            };
        }
    }
};
