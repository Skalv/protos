//@ts-nocheck
import { MsgAnchorData, MsgSignData, MsgStoreRawData } from "./tx";
export const AminoConverter = {
    "/regen.data.v1alpha2.MsgAnchorData": {
        aminoType: "/regen.data.v1alpha2.MsgAnchorData",
        toAmino: MsgAnchorData.toAmino,
        fromAmino: MsgAnchorData.fromAmino
    },
    "/regen.data.v1alpha2.MsgSignData": {
        aminoType: "/regen.data.v1alpha2.MsgSignData",
        toAmino: MsgSignData.toAmino,
        fromAmino: MsgSignData.fromAmino
    },
    "/regen.data.v1alpha2.MsgStoreRawData": {
        aminoType: "/regen.data.v1alpha2.MsgStoreRawData",
        toAmino: MsgStoreRawData.toAmino,
        fromAmino: MsgStoreRawData.fromAmino
    }
};
