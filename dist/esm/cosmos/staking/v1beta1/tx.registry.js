import { MsgCreateValidator, MsgEditValidator, MsgDelegate, MsgBeginRedelegate, MsgUndelegate } from "./tx";
export const registry = [["/cosmos.staking.v1beta1.MsgCreateValidator", MsgCreateValidator], ["/cosmos.staking.v1beta1.MsgEditValidator", MsgEditValidator], ["/cosmos.staking.v1beta1.MsgDelegate", MsgDelegate], ["/cosmos.staking.v1beta1.MsgBeginRedelegate", MsgBeginRedelegate], ["/cosmos.staking.v1beta1.MsgUndelegate", MsgUndelegate]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        createValidator(value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator",
                value: MsgCreateValidator.encode(value).finish()
            };
        },
        editValidator(value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator",
                value: MsgEditValidator.encode(value).finish()
            };
        },
        delegate(value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
                value: MsgDelegate.encode(value).finish()
            };
        },
        beginRedelegate(value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
                value: MsgBeginRedelegate.encode(value).finish()
            };
        },
        undelegate(value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
                value: MsgUndelegate.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        createValidator(value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator",
                value
            };
        },
        editValidator(value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator",
                value
            };
        },
        delegate(value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
                value
            };
        },
        beginRedelegate(value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
                value
            };
        },
        undelegate(value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
                value
            };
        }
    },
    fromPartial: {
        createValidator(value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator",
                value: MsgCreateValidator.fromPartial(value)
            };
        },
        editValidator(value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator",
                value: MsgEditValidator.fromPartial(value)
            };
        },
        delegate(value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
                value: MsgDelegate.fromPartial(value)
            };
        },
        beginRedelegate(value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
                value: MsgBeginRedelegate.fromPartial(value)
            };
        },
        undelegate(value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
                value: MsgUndelegate.fromPartial(value)
            };
        }
    }
};
