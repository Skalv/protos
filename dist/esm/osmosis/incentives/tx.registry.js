import { MsgCreateGauge, MsgAddToGauge } from "./tx";
export const registry = [["/osmosis.incentives.MsgCreateGauge", MsgCreateGauge], ["/osmosis.incentives.MsgAddToGauge", MsgAddToGauge]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        createGauge(value) {
            return {
                typeUrl: "/osmosis.incentives.MsgCreateGauge",
                value: MsgCreateGauge.encode(value).finish()
            };
        },
        addToGauge(value) {
            return {
                typeUrl: "/osmosis.incentives.MsgAddToGauge",
                value: MsgAddToGauge.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        createGauge(value) {
            return {
                typeUrl: "/osmosis.incentives.MsgCreateGauge",
                value
            };
        },
        addToGauge(value) {
            return {
                typeUrl: "/osmosis.incentives.MsgAddToGauge",
                value
            };
        }
    },
    fromPartial: {
        createGauge(value) {
            return {
                typeUrl: "/osmosis.incentives.MsgCreateGauge",
                value: MsgCreateGauge.fromPartial(value)
            };
        },
        addToGauge(value) {
            return {
                typeUrl: "/osmosis.incentives.MsgAddToGauge",
                value: MsgAddToGauge.fromPartial(value)
            };
        }
    }
};
