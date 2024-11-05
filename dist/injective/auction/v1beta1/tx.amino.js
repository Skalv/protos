"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
//@ts-nocheck
const tx_1 = require("./tx");
exports.AminoConverter = {
    "/injective.auction.v1beta1.MsgBid": {
        aminoType: "/injective.auction.v1beta1.MsgBid",
        toAmino: tx_1.MsgBid.toAmino,
        fromAmino: tx_1.MsgBid.fromAmino
    }
};
