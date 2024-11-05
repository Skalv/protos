"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
//@ts-nocheck
const tx_1 = require("./tx");
exports.AminoConverter = {
    "/umee.leverage.v1.MsgSupply": {
        aminoType: "/umee.leverage.v1.MsgSupply",
        toAmino: tx_1.MsgSupply.toAmino,
        fromAmino: tx_1.MsgSupply.fromAmino
    },
    "/umee.leverage.v1.MsgWithdraw": {
        aminoType: "/umee.leverage.v1.MsgWithdraw",
        toAmino: tx_1.MsgWithdraw.toAmino,
        fromAmino: tx_1.MsgWithdraw.fromAmino
    },
    "/umee.leverage.v1.MsgCollateralize": {
        aminoType: "/umee.leverage.v1.MsgCollateralize",
        toAmino: tx_1.MsgCollateralize.toAmino,
        fromAmino: tx_1.MsgCollateralize.fromAmino
    },
    "/umee.leverage.v1.MsgDecollateralize": {
        aminoType: "/umee.leverage.v1.MsgDecollateralize",
        toAmino: tx_1.MsgDecollateralize.toAmino,
        fromAmino: tx_1.MsgDecollateralize.fromAmino
    },
    "/umee.leverage.v1.MsgBorrow": {
        aminoType: "/umee.leverage.v1.MsgBorrow",
        toAmino: tx_1.MsgBorrow.toAmino,
        fromAmino: tx_1.MsgBorrow.fromAmino
    },
    "/umee.leverage.v1.MsgRepay": {
        aminoType: "/umee.leverage.v1.MsgRepay",
        toAmino: tx_1.MsgRepay.toAmino,
        fromAmino: tx_1.MsgRepay.fromAmino
    },
    "/umee.leverage.v1.MsgLiquidate": {
        aminoType: "/umee.leverage.v1.MsgLiquidate",
        toAmino: tx_1.MsgLiquidate.toAmino,
        fromAmino: tx_1.MsgLiquidate.fromAmino
    }
};
