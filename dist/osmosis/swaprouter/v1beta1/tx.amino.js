"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
//@ts-nocheck
const tx_1 = require("./tx");
exports.AminoConverter = {
    "/osmosis.swaprouter.v1beta1.MsgSwapExactAmountIn": {
        aminoType: "osmosis/swaprouter/swap-exact-amount-in",
        toAmino: tx_1.MsgSwapExactAmountIn.toAmino,
        fromAmino: tx_1.MsgSwapExactAmountIn.fromAmino
    },
    "/osmosis.swaprouter.v1beta1.MsgSwapExactAmountOut": {
        aminoType: "osmosis/swaprouter/swap-exact-amount-out",
        toAmino: tx_1.MsgSwapExactAmountOut.toAmino,
        fromAmino: tx_1.MsgSwapExactAmountOut.fromAmino
    }
};
