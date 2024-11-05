import { MsgSignProviderAttributes, MsgDeleteProviderAttributes } from "./audit";
export const registry = [["/akash.audit.v1beta1.MsgSignProviderAttributes", MsgSignProviderAttributes], ["/akash.audit.v1beta1.MsgDeleteProviderAttributes", MsgDeleteProviderAttributes]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        signProviderAttributes(value) {
            return {
                typeUrl: "/akash.audit.v1beta1.MsgSignProviderAttributes",
                value: MsgSignProviderAttributes.encode(value).finish()
            };
        },
        deleteProviderAttributes(value) {
            return {
                typeUrl: "/akash.audit.v1beta1.MsgDeleteProviderAttributes",
                value: MsgDeleteProviderAttributes.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        signProviderAttributes(value) {
            return {
                typeUrl: "/akash.audit.v1beta1.MsgSignProviderAttributes",
                value
            };
        },
        deleteProviderAttributes(value) {
            return {
                typeUrl: "/akash.audit.v1beta1.MsgDeleteProviderAttributes",
                value
            };
        }
    },
    fromPartial: {
        signProviderAttributes(value) {
            return {
                typeUrl: "/akash.audit.v1beta1.MsgSignProviderAttributes",
                value: MsgSignProviderAttributes.fromPartial(value)
            };
        },
        deleteProviderAttributes(value) {
            return {
                typeUrl: "/akash.audit.v1beta1.MsgDeleteProviderAttributes",
                value: MsgDeleteProviderAttributes.fromPartial(value)
            };
        }
    }
};
