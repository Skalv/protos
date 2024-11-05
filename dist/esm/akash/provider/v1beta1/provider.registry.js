import { MsgCreateProvider, MsgUpdateProvider, MsgDeleteProvider } from "./provider";
export const registry = [["/akash.provider.v1beta1.MsgCreateProvider", MsgCreateProvider], ["/akash.provider.v1beta1.MsgUpdateProvider", MsgUpdateProvider], ["/akash.provider.v1beta1.MsgDeleteProvider", MsgDeleteProvider]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        createProvider(value) {
            return {
                typeUrl: "/akash.provider.v1beta1.MsgCreateProvider",
                value: MsgCreateProvider.encode(value).finish()
            };
        },
        updateProvider(value) {
            return {
                typeUrl: "/akash.provider.v1beta1.MsgUpdateProvider",
                value: MsgUpdateProvider.encode(value).finish()
            };
        },
        deleteProvider(value) {
            return {
                typeUrl: "/akash.provider.v1beta1.MsgDeleteProvider",
                value: MsgDeleteProvider.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        createProvider(value) {
            return {
                typeUrl: "/akash.provider.v1beta1.MsgCreateProvider",
                value
            };
        },
        updateProvider(value) {
            return {
                typeUrl: "/akash.provider.v1beta1.MsgUpdateProvider",
                value
            };
        },
        deleteProvider(value) {
            return {
                typeUrl: "/akash.provider.v1beta1.MsgDeleteProvider",
                value
            };
        }
    },
    fromPartial: {
        createProvider(value) {
            return {
                typeUrl: "/akash.provider.v1beta1.MsgCreateProvider",
                value: MsgCreateProvider.fromPartial(value)
            };
        },
        updateProvider(value) {
            return {
                typeUrl: "/akash.provider.v1beta1.MsgUpdateProvider",
                value: MsgUpdateProvider.fromPartial(value)
            };
        },
        deleteProvider(value) {
            return {
                typeUrl: "/akash.provider.v1beta1.MsgDeleteProvider",
                value: MsgDeleteProvider.fromPartial(value)
            };
        }
    }
};
