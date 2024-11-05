"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
//@ts-nocheck
const tx_1 = require("./tx");
exports.AminoConverter = {
    "/liquidity.v1beta1.MsgCreatePool": {
        aminoType: "/liquidity.v1beta1.MsgCreatePool",
        toAmino: tx_1.MsgCreatePool.toAmino,
        fromAmino: tx_1.MsgCreatePool.fromAmino
    },
    "/liquidity.v1beta1.MsgDepositWithinBatch": {
        aminoType: "/liquidity.v1beta1.MsgDepositWithinBatch",
        toAmino: tx_1.MsgDepositWithinBatch.toAmino,
        fromAmino: tx_1.MsgDepositWithinBatch.fromAmino
    },
    "/liquidity.v1beta1.MsgWithdrawWithinBatch": {
        aminoType: "/liquidity.v1beta1.MsgWithdrawWithinBatch",
        toAmino: tx_1.MsgWithdrawWithinBatch.toAmino,
        fromAmino: tx_1.MsgWithdrawWithinBatch.fromAmino
    },
    "/liquidity.v1beta1.MsgSwapWithinBatch": {
        aminoType: "/liquidity.v1beta1.MsgSwapWithinBatch",
        toAmino: tx_1.MsgSwapWithinBatch.toAmino,
        fromAmino: tx_1.MsgSwapWithinBatch.fromAmino
    },
    "/liquidity.v1beta1.MsgDirectSwap": {
        aminoType: "/liquidity.v1beta1.MsgDirectSwap",
        toAmino: tx_1.MsgDirectSwap.toAmino,
        fromAmino: tx_1.MsgDirectSwap.fromAmino
    }
};
