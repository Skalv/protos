import { MsgAnchorData, MsgSignData, MsgStoreRawData } from "./tx";
export declare const AminoConverter: {
    "/regen.data.v1alpha2.MsgAnchorData": {
        aminoType: string;
        toAmino: (message: MsgAnchorData) => import("./tx").MsgAnchorDataAmino;
        fromAmino: (object: import("./tx").MsgAnchorDataAmino) => MsgAnchorData;
    };
    "/regen.data.v1alpha2.MsgSignData": {
        aminoType: string;
        toAmino: (message: MsgSignData) => import("./tx").MsgSignDataAmino;
        fromAmino: (object: import("./tx").MsgSignDataAmino) => MsgSignData;
    };
    "/regen.data.v1alpha2.MsgStoreRawData": {
        aminoType: string;
        toAmino: (message: MsgStoreRawData) => import("./tx").MsgStoreRawDataAmino;
        fromAmino: (object: import("./tx").MsgStoreRawDataAmino) => MsgStoreRawData;
    };
};
