"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const provider_1 = require("./provider");
exports.registry = [["/akash.provider.v1beta1.MsgCreateProvider", provider_1.MsgCreateProvider], ["/akash.provider.v1beta1.MsgUpdateProvider", provider_1.MsgUpdateProvider], ["/akash.provider.v1beta1.MsgDeleteProvider", provider_1.MsgDeleteProvider]];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        createProvider(value) {
            return {
                typeUrl: "/akash.provider.v1beta1.MsgCreateProvider",
                value: provider_1.MsgCreateProvider.encode(value).finish()
            };
        },
        updateProvider(value) {
            return {
                typeUrl: "/akash.provider.v1beta1.MsgUpdateProvider",
                value: provider_1.MsgUpdateProvider.encode(value).finish()
            };
        },
        deleteProvider(value) {
            return {
                typeUrl: "/akash.provider.v1beta1.MsgDeleteProvider",
                value: provider_1.MsgDeleteProvider.encode(value).finish()
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
                value: provider_1.MsgCreateProvider.fromPartial(value)
            };
        },
        updateProvider(value) {
            return {
                typeUrl: "/akash.provider.v1beta1.MsgUpdateProvider",
                value: provider_1.MsgUpdateProvider.fromPartial(value)
            };
        },
        deleteProvider(value) {
            return {
                typeUrl: "/akash.provider.v1beta1.MsgDeleteProvider",
                value: provider_1.MsgDeleteProvider.fromPartial(value)
            };
        }
    }
};
