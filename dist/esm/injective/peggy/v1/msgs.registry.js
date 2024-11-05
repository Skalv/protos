import { MsgValsetConfirm, MsgSendToEth, MsgRequestBatch, MsgConfirmBatch, MsgDepositClaim, MsgWithdrawClaim, MsgValsetUpdatedClaim, MsgERC20DeployedClaim, MsgSetOrchestratorAddresses, MsgCancelSendToEth, MsgSubmitBadSignatureEvidence } from "./msgs";
export const registry = [["/injective.peggy.v1.MsgValsetConfirm", MsgValsetConfirm], ["/injective.peggy.v1.MsgSendToEth", MsgSendToEth], ["/injective.peggy.v1.MsgRequestBatch", MsgRequestBatch], ["/injective.peggy.v1.MsgConfirmBatch", MsgConfirmBatch], ["/injective.peggy.v1.MsgDepositClaim", MsgDepositClaim], ["/injective.peggy.v1.MsgWithdrawClaim", MsgWithdrawClaim], ["/injective.peggy.v1.MsgValsetUpdatedClaim", MsgValsetUpdatedClaim], ["/injective.peggy.v1.MsgERC20DeployedClaim", MsgERC20DeployedClaim], ["/injective.peggy.v1.MsgSetOrchestratorAddresses", MsgSetOrchestratorAddresses], ["/injective.peggy.v1.MsgCancelSendToEth", MsgCancelSendToEth], ["/injective.peggy.v1.MsgSubmitBadSignatureEvidence", MsgSubmitBadSignatureEvidence]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        valsetConfirm(value) {
            return {
                typeUrl: "/injective.peggy.v1.MsgValsetConfirm",
                value: MsgValsetConfirm.encode(value).finish()
            };
        },
        sendToEth(value) {
            return {
                typeUrl: "/injective.peggy.v1.MsgSendToEth",
                value: MsgSendToEth.encode(value).finish()
            };
        },
        requestBatch(value) {
            return {
                typeUrl: "/injective.peggy.v1.MsgRequestBatch",
                value: MsgRequestBatch.encode(value).finish()
            };
        },
        confirmBatch(value) {
            return {
                typeUrl: "/injective.peggy.v1.MsgConfirmBatch",
                value: MsgConfirmBatch.encode(value).finish()
            };
        },
        depositClaim(value) {
            return {
                typeUrl: "/injective.peggy.v1.MsgDepositClaim",
                value: MsgDepositClaim.encode(value).finish()
            };
        },
        withdrawClaim(value) {
            return {
                typeUrl: "/injective.peggy.v1.MsgWithdrawClaim",
                value: MsgWithdrawClaim.encode(value).finish()
            };
        },
        valsetUpdateClaim(value) {
            return {
                typeUrl: "/injective.peggy.v1.MsgValsetUpdatedClaim",
                value: MsgValsetUpdatedClaim.encode(value).finish()
            };
        },
        eRC20DeployedClaim(value) {
            return {
                typeUrl: "/injective.peggy.v1.MsgERC20DeployedClaim",
                value: MsgERC20DeployedClaim.encode(value).finish()
            };
        },
        setOrchestratorAddresses(value) {
            return {
                typeUrl: "/injective.peggy.v1.MsgSetOrchestratorAddresses",
                value: MsgSetOrchestratorAddresses.encode(value).finish()
            };
        },
        cancelSendToEth(value) {
            return {
                typeUrl: "/injective.peggy.v1.MsgCancelSendToEth",
                value: MsgCancelSendToEth.encode(value).finish()
            };
        },
        submitBadSignatureEvidence(value) {
            return {
                typeUrl: "/injective.peggy.v1.MsgSubmitBadSignatureEvidence",
                value: MsgSubmitBadSignatureEvidence.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        valsetConfirm(value) {
            return {
                typeUrl: "/injective.peggy.v1.MsgValsetConfirm",
                value
            };
        },
        sendToEth(value) {
            return {
                typeUrl: "/injective.peggy.v1.MsgSendToEth",
                value
            };
        },
        requestBatch(value) {
            return {
                typeUrl: "/injective.peggy.v1.MsgRequestBatch",
                value
            };
        },
        confirmBatch(value) {
            return {
                typeUrl: "/injective.peggy.v1.MsgConfirmBatch",
                value
            };
        },
        depositClaim(value) {
            return {
                typeUrl: "/injective.peggy.v1.MsgDepositClaim",
                value
            };
        },
        withdrawClaim(value) {
            return {
                typeUrl: "/injective.peggy.v1.MsgWithdrawClaim",
                value
            };
        },
        valsetUpdateClaim(value) {
            return {
                typeUrl: "/injective.peggy.v1.MsgValsetUpdatedClaim",
                value
            };
        },
        eRC20DeployedClaim(value) {
            return {
                typeUrl: "/injective.peggy.v1.MsgERC20DeployedClaim",
                value
            };
        },
        setOrchestratorAddresses(value) {
            return {
                typeUrl: "/injective.peggy.v1.MsgSetOrchestratorAddresses",
                value
            };
        },
        cancelSendToEth(value) {
            return {
                typeUrl: "/injective.peggy.v1.MsgCancelSendToEth",
                value
            };
        },
        submitBadSignatureEvidence(value) {
            return {
                typeUrl: "/injective.peggy.v1.MsgSubmitBadSignatureEvidence",
                value
            };
        }
    },
    fromPartial: {
        valsetConfirm(value) {
            return {
                typeUrl: "/injective.peggy.v1.MsgValsetConfirm",
                value: MsgValsetConfirm.fromPartial(value)
            };
        },
        sendToEth(value) {
            return {
                typeUrl: "/injective.peggy.v1.MsgSendToEth",
                value: MsgSendToEth.fromPartial(value)
            };
        },
        requestBatch(value) {
            return {
                typeUrl: "/injective.peggy.v1.MsgRequestBatch",
                value: MsgRequestBatch.fromPartial(value)
            };
        },
        confirmBatch(value) {
            return {
                typeUrl: "/injective.peggy.v1.MsgConfirmBatch",
                value: MsgConfirmBatch.fromPartial(value)
            };
        },
        depositClaim(value) {
            return {
                typeUrl: "/injective.peggy.v1.MsgDepositClaim",
                value: MsgDepositClaim.fromPartial(value)
            };
        },
        withdrawClaim(value) {
            return {
                typeUrl: "/injective.peggy.v1.MsgWithdrawClaim",
                value: MsgWithdrawClaim.fromPartial(value)
            };
        },
        valsetUpdateClaim(value) {
            return {
                typeUrl: "/injective.peggy.v1.MsgValsetUpdatedClaim",
                value: MsgValsetUpdatedClaim.fromPartial(value)
            };
        },
        eRC20DeployedClaim(value) {
            return {
                typeUrl: "/injective.peggy.v1.MsgERC20DeployedClaim",
                value: MsgERC20DeployedClaim.fromPartial(value)
            };
        },
        setOrchestratorAddresses(value) {
            return {
                typeUrl: "/injective.peggy.v1.MsgSetOrchestratorAddresses",
                value: MsgSetOrchestratorAddresses.fromPartial(value)
            };
        },
        cancelSendToEth(value) {
            return {
                typeUrl: "/injective.peggy.v1.MsgCancelSendToEth",
                value: MsgCancelSendToEth.fromPartial(value)
            };
        },
        submitBadSignatureEvidence(value) {
            return {
                typeUrl: "/injective.peggy.v1.MsgSubmitBadSignatureEvidence",
                value: MsgSubmitBadSignatureEvidence.fromPartial(value)
            };
        }
    }
};
