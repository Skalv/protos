import { MsgSetHotRoutes, MsgSetDeveloperAccount } from "./tx";
export const registry = [["/osmosis.protorev.v1beta1.MsgSetHotRoutes", MsgSetHotRoutes], ["/osmosis.protorev.v1beta1.MsgSetDeveloperAccount", MsgSetDeveloperAccount]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        setHotRoutes(value) {
            return {
                typeUrl: "/osmosis.protorev.v1beta1.MsgSetHotRoutes",
                value: MsgSetHotRoutes.encode(value).finish()
            };
        },
        setDeveloperAccount(value) {
            return {
                typeUrl: "/osmosis.protorev.v1beta1.MsgSetDeveloperAccount",
                value: MsgSetDeveloperAccount.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        setHotRoutes(value) {
            return {
                typeUrl: "/osmosis.protorev.v1beta1.MsgSetHotRoutes",
                value
            };
        },
        setDeveloperAccount(value) {
            return {
                typeUrl: "/osmosis.protorev.v1beta1.MsgSetDeveloperAccount",
                value
            };
        }
    },
    fromPartial: {
        setHotRoutes(value) {
            return {
                typeUrl: "/osmosis.protorev.v1beta1.MsgSetHotRoutes",
                value: MsgSetHotRoutes.fromPartial(value)
            };
        },
        setDeveloperAccount(value) {
            return {
                typeUrl: "/osmosis.protorev.v1beta1.MsgSetDeveloperAccount",
                value: MsgSetDeveloperAccount.fromPartial(value)
            };
        }
    }
};
