"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
//@ts-nocheck
const tx_1 = require("./tx");
exports.AminoConverter = {
    "/publicawesome.stargaze.claim.v1beta1.MsgInitialClaim": {
        aminoType: "/publicawesome.stargaze.claim.v1beta1.MsgInitialClaim",
        toAmino: tx_1.MsgInitialClaim.toAmino,
        fromAmino: tx_1.MsgInitialClaim.fromAmino
    },
    "/publicawesome.stargaze.claim.v1beta1.MsgClaimFor": {
        aminoType: "/publicawesome.stargaze.claim.v1beta1.MsgClaimFor",
        toAmino: tx_1.MsgClaimFor.toAmino,
        fromAmino: tx_1.MsgClaimFor.fromAmino
    }
};
