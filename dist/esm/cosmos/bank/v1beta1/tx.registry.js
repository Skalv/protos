import { MsgSend, MsgMultiSend } from "./tx";
export const registry = [["/cosmos.bank.v1beta1.MsgSend", MsgSend], ["/cosmos.bank.v1beta1.MsgMultiSend", MsgMultiSend]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        send(value) {
            return {
                typeUrl: "/cosmos.bank.v1beta1.MsgSend",
                value: MsgSend.encode(value).finish()
            };
        },
        multiSend(value) {
            return {
                typeUrl: "/cosmos.bank.v1beta1.MsgMultiSend",
                value: MsgMultiSend.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        send(value) {
            return {
                typeUrl: "/cosmos.bank.v1beta1.MsgSend",
                value
            };
        },
        multiSend(value) {
            return {
                typeUrl: "/cosmos.bank.v1beta1.MsgMultiSend",
                value
            };
        }
    },
    fromPartial: {
        send(value) {
            return {
                typeUrl: "/cosmos.bank.v1beta1.MsgSend",
                value: MsgSend.fromPartial(value)
            };
        },
        multiSend(value) {
            return {
                typeUrl: "/cosmos.bank.v1beta1.MsgMultiSend",
                value: MsgMultiSend.fromPartial(value)
            };
        }
    }
};
