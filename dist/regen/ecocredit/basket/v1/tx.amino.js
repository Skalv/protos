"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
//@ts-nocheck
const tx_1 = require("./tx");
exports.AminoConverter = {
    "/regen.ecocredit.basket.v1.MsgCreate": {
        aminoType: "/regen.ecocredit.basket.v1.MsgCreate",
        toAmino: tx_1.MsgCreate.toAmino,
        fromAmino: tx_1.MsgCreate.fromAmino
    },
    "/regen.ecocredit.basket.v1.MsgPut": {
        aminoType: "/regen.ecocredit.basket.v1.MsgPut",
        toAmino: tx_1.MsgPut.toAmino,
        fromAmino: tx_1.MsgPut.fromAmino
    },
    "/regen.ecocredit.basket.v1.MsgTake": {
        aminoType: "/regen.ecocredit.basket.v1.MsgTake",
        toAmino: tx_1.MsgTake.toAmino,
        fromAmino: tx_1.MsgTake.fromAmino
    }
};
