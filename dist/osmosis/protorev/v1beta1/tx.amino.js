"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
//@ts-nocheck
const tx_1 = require("./tx");
exports.AminoConverter = {
    "/osmosis.protorev.v1beta1.MsgSetHotRoutes": {
        aminoType: "osmosis/MsgSetHotRoutes",
        toAmino: tx_1.MsgSetHotRoutes.toAmino,
        fromAmino: tx_1.MsgSetHotRoutes.fromAmino
    },
    "/osmosis.protorev.v1beta1.MsgSetDeveloperAccount": {
        aminoType: "osmosis/MsgSetDeveloperAccount",
        toAmino: tx_1.MsgSetDeveloperAccount.toAmino,
        fromAmino: tx_1.MsgSetDeveloperAccount.fromAmino
    }
};
