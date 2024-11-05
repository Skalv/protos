"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
//@ts-nocheck
const tx_1 = require("./tx");
exports.AminoConverter = {
    "/regen.group.v1alpha1.MsgCreateGroup": {
        aminoType: "/regen.group.v1alpha1.MsgCreateGroup",
        toAmino: tx_1.MsgCreateGroup.toAmino,
        fromAmino: tx_1.MsgCreateGroup.fromAmino
    },
    "/regen.group.v1alpha1.MsgUpdateGroupMembers": {
        aminoType: "/regen.group.v1alpha1.MsgUpdateGroupMembers",
        toAmino: tx_1.MsgUpdateGroupMembers.toAmino,
        fromAmino: tx_1.MsgUpdateGroupMembers.fromAmino
    },
    "/regen.group.v1alpha1.MsgUpdateGroupAdmin": {
        aminoType: "/regen.group.v1alpha1.MsgUpdateGroupAdmin",
        toAmino: tx_1.MsgUpdateGroupAdmin.toAmino,
        fromAmino: tx_1.MsgUpdateGroupAdmin.fromAmino
    },
    "/regen.group.v1alpha1.MsgUpdateGroupMetadata": {
        aminoType: "/regen.group.v1alpha1.MsgUpdateGroupMetadata",
        toAmino: tx_1.MsgUpdateGroupMetadata.toAmino,
        fromAmino: tx_1.MsgUpdateGroupMetadata.fromAmino
    },
    "/regen.group.v1alpha1.MsgCreateGroupAccount": {
        aminoType: "/regen.group.v1alpha1.MsgCreateGroupAccount",
        toAmino: tx_1.MsgCreateGroupAccount.toAmino,
        fromAmino: tx_1.MsgCreateGroupAccount.fromAmino
    },
    "/regen.group.v1alpha1.MsgUpdateGroupAccountAdmin": {
        aminoType: "/regen.group.v1alpha1.MsgUpdateGroupAccountAdmin",
        toAmino: tx_1.MsgUpdateGroupAccountAdmin.toAmino,
        fromAmino: tx_1.MsgUpdateGroupAccountAdmin.fromAmino
    },
    "/regen.group.v1alpha1.MsgUpdateGroupAccountDecisionPolicy": {
        aminoType: "/regen.group.v1alpha1.MsgUpdateGroupAccountDecisionPolicy",
        toAmino: tx_1.MsgUpdateGroupAccountDecisionPolicy.toAmino,
        fromAmino: tx_1.MsgUpdateGroupAccountDecisionPolicy.fromAmino
    },
    "/regen.group.v1alpha1.MsgUpdateGroupAccountMetadata": {
        aminoType: "/regen.group.v1alpha1.MsgUpdateGroupAccountMetadata",
        toAmino: tx_1.MsgUpdateGroupAccountMetadata.toAmino,
        fromAmino: tx_1.MsgUpdateGroupAccountMetadata.fromAmino
    },
    "/regen.group.v1alpha1.MsgCreateProposal": {
        aminoType: "/regen.group.v1alpha1.MsgCreateProposal",
        toAmino: tx_1.MsgCreateProposal.toAmino,
        fromAmino: tx_1.MsgCreateProposal.fromAmino
    },
    "/regen.group.v1alpha1.MsgVote": {
        aminoType: "/regen.group.v1alpha1.MsgVote",
        toAmino: tx_1.MsgVote.toAmino,
        fromAmino: tx_1.MsgVote.fromAmino
    },
    "/regen.group.v1alpha1.MsgExec": {
        aminoType: "/regen.group.v1alpha1.MsgExec",
        toAmino: tx_1.MsgExec.toAmino,
        fromAmino: tx_1.MsgExec.fromAmino
    }
};
