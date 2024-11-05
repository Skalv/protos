"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
//@ts-nocheck
const tx_1 = require("./tx");
exports.AminoConverter = {
    "/regen.data.v1alpha2.MsgAnchorData": {
        aminoType: "/regen.data.v1alpha2.MsgAnchorData",
        toAmino: tx_1.MsgAnchorData.toAmino,
        fromAmino: tx_1.MsgAnchorData.fromAmino
    },
    "/regen.data.v1alpha2.MsgSignData": {
        aminoType: "/regen.data.v1alpha2.MsgSignData",
        toAmino: tx_1.MsgSignData.toAmino,
        fromAmino: tx_1.MsgSignData.fromAmino
    },
    "/regen.data.v1alpha2.MsgStoreRawData": {
        aminoType: "/regen.data.v1alpha2.MsgStoreRawData",
        toAmino: tx_1.MsgStoreRawData.toAmino,
        fromAmino: tx_1.MsgStoreRawData.fromAmino
    }
};
