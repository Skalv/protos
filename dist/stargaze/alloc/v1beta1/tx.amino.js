"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
//@ts-nocheck
const tx_1 = require("./tx");
exports.AminoConverter = {
    "/publicawesome.stargaze.alloc.v1beta1.MsgCreateVestingAccount": {
        aminoType: "/publicawesome.stargaze.alloc.v1beta1.MsgCreateVestingAccount",
        toAmino: tx_1.MsgCreateVestingAccount.toAmino,
        fromAmino: tx_1.MsgCreateVestingAccount.fromAmino
    }
};
