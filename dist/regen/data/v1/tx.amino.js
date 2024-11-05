"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
//@ts-nocheck
const tx_1 = require("./tx");
exports.AminoConverter = {
    "/regen.data.v1.MsgAnchor": {
        aminoType: "/regen.data.v1.MsgAnchor",
        toAmino: tx_1.MsgAnchor.toAmino,
        fromAmino: tx_1.MsgAnchor.fromAmino
    },
    "/regen.data.v1.MsgAttest": {
        aminoType: "/regen.data.v1.MsgAttest",
        toAmino: tx_1.MsgAttest.toAmino,
        fromAmino: tx_1.MsgAttest.fromAmino
    },
    "/regen.data.v1.MsgDefineResolver": {
        aminoType: "/regen.data.v1.MsgDefineResolver",
        toAmino: tx_1.MsgDefineResolver.toAmino,
        fromAmino: tx_1.MsgDefineResolver.fromAmino
    },
    "/regen.data.v1.MsgRegisterResolver": {
        aminoType: "/regen.data.v1.MsgRegisterResolver",
        toAmino: tx_1.MsgRegisterResolver.toAmino,
        fromAmino: tx_1.MsgRegisterResolver.fromAmino
    }
};
