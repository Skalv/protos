"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
//@ts-nocheck
const tx_1 = require("./tx");
exports.AminoConverter = {
    "/injective.insurance.v1beta1.MsgCreateInsuranceFund": {
        aminoType: "/injective.insurance.v1beta1.MsgCreateInsuranceFund",
        toAmino: tx_1.MsgCreateInsuranceFund.toAmino,
        fromAmino: tx_1.MsgCreateInsuranceFund.fromAmino
    },
    "/injective.insurance.v1beta1.MsgUnderwrite": {
        aminoType: "/injective.insurance.v1beta1.MsgUnderwrite",
        toAmino: tx_1.MsgUnderwrite.toAmino,
        fromAmino: tx_1.MsgUnderwrite.fromAmino
    },
    "/injective.insurance.v1beta1.MsgRequestRedemption": {
        aminoType: "/injective.insurance.v1beta1.MsgRequestRedemption",
        toAmino: tx_1.MsgRequestRedemption.toAmino,
        fromAmino: tx_1.MsgRequestRedemption.fromAmino
    }
};
