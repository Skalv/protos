"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
//@ts-nocheck
const msgs_1 = require("./msgs");
exports.AminoConverter = {
    "/injective.peggy.v1.MsgValsetConfirm": {
        aminoType: "/injective.peggy.v1.MsgValsetConfirm",
        toAmino: msgs_1.MsgValsetConfirm.toAmino,
        fromAmino: msgs_1.MsgValsetConfirm.fromAmino
    },
    "/injective.peggy.v1.MsgSendToEth": {
        aminoType: "/injective.peggy.v1.MsgSendToEth",
        toAmino: msgs_1.MsgSendToEth.toAmino,
        fromAmino: msgs_1.MsgSendToEth.fromAmino
    },
    "/injective.peggy.v1.MsgRequestBatch": {
        aminoType: "/injective.peggy.v1.MsgRequestBatch",
        toAmino: msgs_1.MsgRequestBatch.toAmino,
        fromAmino: msgs_1.MsgRequestBatch.fromAmino
    },
    "/injective.peggy.v1.MsgConfirmBatch": {
        aminoType: "/injective.peggy.v1.MsgConfirmBatch",
        toAmino: msgs_1.MsgConfirmBatch.toAmino,
        fromAmino: msgs_1.MsgConfirmBatch.fromAmino
    },
    "/injective.peggy.v1.MsgDepositClaim": {
        aminoType: "/injective.peggy.v1.MsgDepositClaim",
        toAmino: msgs_1.MsgDepositClaim.toAmino,
        fromAmino: msgs_1.MsgDepositClaim.fromAmino
    },
    "/injective.peggy.v1.MsgWithdrawClaim": {
        aminoType: "/injective.peggy.v1.MsgWithdrawClaim",
        toAmino: msgs_1.MsgWithdrawClaim.toAmino,
        fromAmino: msgs_1.MsgWithdrawClaim.fromAmino
    },
    "/injective.peggy.v1.MsgValsetUpdatedClaim": {
        aminoType: "/injective.peggy.v1.MsgValsetUpdatedClaim",
        toAmino: msgs_1.MsgValsetUpdatedClaim.toAmino,
        fromAmino: msgs_1.MsgValsetUpdatedClaim.fromAmino
    },
    "/injective.peggy.v1.MsgERC20DeployedClaim": {
        aminoType: "/injective.peggy.v1.MsgERC20DeployedClaim",
        toAmino: msgs_1.MsgERC20DeployedClaim.toAmino,
        fromAmino: msgs_1.MsgERC20DeployedClaim.fromAmino
    },
    "/injective.peggy.v1.MsgSetOrchestratorAddresses": {
        aminoType: "/injective.peggy.v1.MsgSetOrchestratorAddresses",
        toAmino: msgs_1.MsgSetOrchestratorAddresses.toAmino,
        fromAmino: msgs_1.MsgSetOrchestratorAddresses.fromAmino
    },
    "/injective.peggy.v1.MsgCancelSendToEth": {
        aminoType: "/injective.peggy.v1.MsgCancelSendToEth",
        toAmino: msgs_1.MsgCancelSendToEth.toAmino,
        fromAmino: msgs_1.MsgCancelSendToEth.fromAmino
    },
    "/injective.peggy.v1.MsgSubmitBadSignatureEvidence": {
        aminoType: "/injective.peggy.v1.MsgSubmitBadSignatureEvidence",
        toAmino: msgs_1.MsgSubmitBadSignatureEvidence.toAmino,
        fromAmino: msgs_1.MsgSubmitBadSignatureEvidence.fromAmino
    }
};
