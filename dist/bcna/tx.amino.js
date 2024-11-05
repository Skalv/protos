"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
//@ts-nocheck
const tx_1 = require("./tx");
exports.AminoConverter = {
    "/BitCannaGlobal.bcna.bcna.MsgCreateBitcannaid": {
        aminoType: "/BitCannaGlobal.bcna.bcna.MsgCreateBitcannaid",
        toAmino: tx_1.MsgCreateBitcannaid.toAmino,
        fromAmino: tx_1.MsgCreateBitcannaid.fromAmino
    },
    "/BitCannaGlobal.bcna.bcna.MsgUpdateBitcannaid": {
        aminoType: "/BitCannaGlobal.bcna.bcna.MsgUpdateBitcannaid",
        toAmino: tx_1.MsgUpdateBitcannaid.toAmino,
        fromAmino: tx_1.MsgUpdateBitcannaid.fromAmino
    },
    "/BitCannaGlobal.bcna.bcna.MsgDeleteBitcannaid": {
        aminoType: "/BitCannaGlobal.bcna.bcna.MsgDeleteBitcannaid",
        toAmino: tx_1.MsgDeleteBitcannaid.toAmino,
        fromAmino: tx_1.MsgDeleteBitcannaid.fromAmino
    },
    "/BitCannaGlobal.bcna.bcna.MsgCreateSupplychain": {
        aminoType: "/BitCannaGlobal.bcna.bcna.MsgCreateSupplychain",
        toAmino: tx_1.MsgCreateSupplychain.toAmino,
        fromAmino: tx_1.MsgCreateSupplychain.fromAmino
    },
    "/BitCannaGlobal.bcna.bcna.MsgUpdateSupplychain": {
        aminoType: "/BitCannaGlobal.bcna.bcna.MsgUpdateSupplychain",
        toAmino: tx_1.MsgUpdateSupplychain.toAmino,
        fromAmino: tx_1.MsgUpdateSupplychain.fromAmino
    },
    "/BitCannaGlobal.bcna.bcna.MsgDeleteSupplychain": {
        aminoType: "/BitCannaGlobal.bcna.bcna.MsgDeleteSupplychain",
        toAmino: tx_1.MsgDeleteSupplychain.toAmino,
        fromAmino: tx_1.MsgDeleteSupplychain.fromAmino
    }
};
