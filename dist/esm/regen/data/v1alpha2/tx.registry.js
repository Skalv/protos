import { MsgAnchorData, MsgSignData, MsgStoreRawData } from "./tx";
export const registry = [["/regen.data.v1alpha2.MsgAnchorData", MsgAnchorData], ["/regen.data.v1alpha2.MsgSignData", MsgSignData], ["/regen.data.v1alpha2.MsgStoreRawData", MsgStoreRawData]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        anchorData(value) {
            return {
                typeUrl: "/regen.data.v1alpha2.MsgAnchorData",
                value: MsgAnchorData.encode(value).finish()
            };
        },
        signData(value) {
            return {
                typeUrl: "/regen.data.v1alpha2.MsgSignData",
                value: MsgSignData.encode(value).finish()
            };
        },
        storeRawData(value) {
            return {
                typeUrl: "/regen.data.v1alpha2.MsgStoreRawData",
                value: MsgStoreRawData.encode(value).finish()
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
                value: MsgAnchorData.fromPartial(value)
            };
        },
        signData(value) {
            return {
                typeUrl: "/regen.data.v1alpha2.MsgSignData",
                value: MsgSignData.fromPartial(value)
            };
        },
        storeRawData(value) {
            return {
                typeUrl: "/regen.data.v1alpha2.MsgStoreRawData",
                value: MsgStoreRawData.fromPartial(value)
            };
        }
    }
};
