"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_1 = require("./tx");
exports.registry = [["/regen.data.v1alpha2.MsgAnchorData", tx_1.MsgAnchorData], ["/regen.data.v1alpha2.MsgSignData", tx_1.MsgSignData], ["/regen.data.v1alpha2.MsgStoreRawData", tx_1.MsgStoreRawData]];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        anchorData(value) {
            return {
                typeUrl: "/regen.data.v1alpha2.MsgAnchorData",
                value: tx_1.MsgAnchorData.encode(value).finish()
            };
        },
        signData(value) {
            return {
                typeUrl: "/regen.data.v1alpha2.MsgSignData",
                value: tx_1.MsgSignData.encode(value).finish()
            };
        },
        storeRawData(value) {
            return {
                typeUrl: "/regen.data.v1alpha2.MsgStoreRawData",
                value: tx_1.MsgStoreRawData.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        anchorData(value) {
            return {
                typeUrl: "/regen.data.v1alpha2.MsgAnchorData",
                value
            };
        },
        signData(value) {
            return {
                typeUrl: "/regen.data.v1alpha2.MsgSignData",
                value
            };
        },
        storeRawData(value) {
            return {
                typeUrl: "/regen.data.v1alpha2.MsgStoreRawData",
                value
            };
        }
    },
    fromPartial: {
        anchorData(value) {
            return {
                typeUrl: "/regen.data.v1alpha2.MsgAnchorData",
                value: tx_1.MsgAnchorData.fromPartial(value)
            };
        },
        signData(value) {
            return {
                typeUrl: "/regen.data.v1alpha2.MsgSignData",
                value: tx_1.MsgSignData.fromPartial(value)
            };
        },
        storeRawData(value) {
            return {
                typeUrl: "/regen.data.v1alpha2.MsgStoreRawData",
                value: tx_1.MsgStoreRawData.fromPartial(value)
            };
        }
    }
};
