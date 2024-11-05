"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
//@ts-nocheck
const tx_1 = require("./tx");
exports.AminoConverter = {
    "/passage3d.claim.v1beta1.MsgClaim": {
        aminoType: "/passage3d.claim.v1beta1.MsgClaim",
        toAmino: tx_1.MsgClaim.toAmino,
        fromAmino: tx_1.MsgClaim.fromAmino
    }
};
