"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
//@ts-nocheck
const tx_1 = require("./tx");
exports.AminoConverter = {
    "/regen.ecocredit.v1.MsgCreateClass": {
        aminoType: "/regen.ecocredit.v1.MsgCreateClass",
        toAmino: tx_1.MsgCreateClass.toAmino,
        fromAmino: tx_1.MsgCreateClass.fromAmino
    },
    "/regen.ecocredit.v1.MsgCreateProject": {
        aminoType: "/regen.ecocredit.v1.MsgCreateProject",
        toAmino: tx_1.MsgCreateProject.toAmino,
        fromAmino: tx_1.MsgCreateProject.fromAmino
    },
    "/regen.ecocredit.v1.MsgCreateBatch": {
        aminoType: "/regen.ecocredit.v1.MsgCreateBatch",
        toAmino: tx_1.MsgCreateBatch.toAmino,
        fromAmino: tx_1.MsgCreateBatch.fromAmino
    },
    "/regen.ecocredit.v1.MsgMintBatchCredits": {
        aminoType: "/regen.ecocredit.v1.MsgMintBatchCredits",
        toAmino: tx_1.MsgMintBatchCredits.toAmino,
        fromAmino: tx_1.MsgMintBatchCredits.fromAmino
    },
    "/regen.ecocredit.v1.MsgSealBatch": {
        aminoType: "/regen.ecocredit.v1.MsgSealBatch",
        toAmino: tx_1.MsgSealBatch.toAmino,
        fromAmino: tx_1.MsgSealBatch.fromAmino
    },
    "/regen.ecocredit.v1.MsgSend": {
        aminoType: "/regen.ecocredit.v1.MsgSend",
        toAmino: tx_1.MsgSend.toAmino,
        fromAmino: tx_1.MsgSend.fromAmino
    },
    "/regen.ecocredit.v1.MsgRetire": {
        aminoType: "/regen.ecocredit.v1.MsgRetire",
        toAmino: tx_1.MsgRetire.toAmino,
        fromAmino: tx_1.MsgRetire.fromAmino
    },
    "/regen.ecocredit.v1.MsgCancel": {
        aminoType: "/regen.ecocredit.v1.MsgCancel",
        toAmino: tx_1.MsgCancel.toAmino,
        fromAmino: tx_1.MsgCancel.fromAmino
    },
    "/regen.ecocredit.v1.MsgUpdateClassAdmin": {
        aminoType: "/regen.ecocredit.v1.MsgUpdateClassAdmin",
        toAmino: tx_1.MsgUpdateClassAdmin.toAmino,
        fromAmino: tx_1.MsgUpdateClassAdmin.fromAmino
    },
    "/regen.ecocredit.v1.MsgUpdateClassIssuers": {
        aminoType: "/regen.ecocredit.v1.MsgUpdateClassIssuers",
        toAmino: tx_1.MsgUpdateClassIssuers.toAmino,
        fromAmino: tx_1.MsgUpdateClassIssuers.fromAmino
    },
    "/regen.ecocredit.v1.MsgUpdateClassMetadata": {
        aminoType: "/regen.ecocredit.v1.MsgUpdateClassMetadata",
        toAmino: tx_1.MsgUpdateClassMetadata.toAmino,
        fromAmino: tx_1.MsgUpdateClassMetadata.fromAmino
    },
    "/regen.ecocredit.v1.MsgUpdateProjectAdmin": {
        aminoType: "/regen.ecocredit.v1.MsgUpdateProjectAdmin",
        toAmino: tx_1.MsgUpdateProjectAdmin.toAmino,
        fromAmino: tx_1.MsgUpdateProjectAdmin.fromAmino
    },
    "/regen.ecocredit.v1.MsgUpdateProjectMetadata": {
        aminoType: "/regen.ecocredit.v1.MsgUpdateProjectMetadata",
        toAmino: tx_1.MsgUpdateProjectMetadata.toAmino,
        fromAmino: tx_1.MsgUpdateProjectMetadata.fromAmino
    }
};
