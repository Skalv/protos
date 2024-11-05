"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const msgs_1 = require("./msgs");
exports.registry = [["/injective.peggy.v1.MsgValsetConfirm", msgs_1.MsgValsetConfirm], ["/injective.peggy.v1.MsgSendToEth", msgs_1.MsgSendToEth], ["/injective.peggy.v1.MsgRequestBatch", msgs_1.MsgRequestBatch], ["/injective.peggy.v1.MsgConfirmBatch", msgs_1.MsgConfirmBatch], ["/injective.peggy.v1.MsgDepositClaim", msgs_1.MsgDepositClaim], ["/injective.peggy.v1.MsgWithdrawClaim", msgs_1.MsgWithdrawClaim], ["/injective.peggy.v1.MsgValsetUpdatedClaim", msgs_1.MsgValsetUpdatedClaim], ["/injective.peggy.v1.MsgERC20DeployedClaim", msgs_1.MsgERC20DeployedClaim], ["/injective.peggy.v1.MsgSetOrchestratorAddresses", msgs_1.MsgSetOrchestratorAddresses], ["/injective.peggy.v1.MsgCancelSendToEth", msgs_1.MsgCancelSendToEth], ["/injective.peggy.v1.MsgSubmitBadSignatureEvidence", msgs_1.MsgSubmitBadSignatureEvidence]];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        valsetConfirm(value) {
            return {
                typeUrl: "/injective.peggy.v1.MsgValsetConfirm",
                value: msgs_1.MsgValsetConfirm.encode(value).finish()
            };
        },
        sendToEth(value) {
            return {
                typeUrl: "/injective.peggy.v1.MsgSendToEth",
                value: msgs_1.MsgSendToEth.encode(value).finish()
            };
        },
        requestBatch(value) {
            return {
                typeUrl: "/injective.peggy.v1.MsgRequestBatch",
                value: msgs_1.MsgRequestBatch.encode(value).finish()
            };
        },
        confirmBatch(value) {
            return {
                typeUrl: "/injective.peggy.v1.MsgConfirmBatch",
                value: msgs_1.MsgConfirmBatch.encode(value).finish()
            };
        },
        depositClaim(value) {
            return {
                typeUrl: "/injective.peggy.v1.MsgDepositClaim",
                value: msgs_1.MsgDepositClaim.encode(value).finish()
            };
        },
        withdrawClaim(value) {
            return {
                typeUrl: "/injective.peggy.v1.MsgWithdrawClaim",
                value: msgs_1.MsgWithdrawClaim.encode(value).finish()
            };
        },
        valsetUpdateClaim(value) {
            return {
                typeUrl: "/injective.peggy.v1.MsgValsetUpdatedClaim",
                value: msgs_1.MsgValsetUpdatedClaim.encode(value).finish()
            };
        },
        eRC20DeployedClaim(value) {
            return {
                typeUrl: "/injective.peggy.v1.MsgERC20DeployedClaim",
                value: msgs_1.MsgERC20DeployedClaim.encode(value).finish()
            };
        },
        setOrchestratorAddresses(value) {
            return {
                typeUrl: "/injective.peggy.v1.MsgSetOrchestratorAddresses",
                value: msgs_1.MsgSetOrchestratorAddresses.encode(value).finish()
            };
        },
        cancelSendToEth(value) {
            return {
                typeUrl: "/injective.peggy.v1.MsgCancelSendToEth",
                value: msgs_1.MsgCancelSendToEth.encode(value).finish()
            };
        },
        submitBadSignatureEvidence(value) {
            return {
                typeUrl: "/injective.peggy.v1.MsgSubmitBadSignatureEvidence",
                value: msgs_1.MsgSubmitBadSignatureEvidence.encode(value).finish()
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
                value: msgs_1.MsgValsetConfirm.fromPartial(value)
            };
        },
        sendToEth(value) {
            return {
                typeUrl: "/injective.peggy.v1.MsgSendToEth",
                value: msgs_1.MsgSendToEth.fromPartial(value)
            };
        },
        requestBatch(value) {
            return {
                typeUrl: "/injective.peggy.v1.MsgRequestBatch",
                value: msgs_1.MsgRequestBatch.fromPartial(value)
            };
        },
        confirmBatch(value) {
            return {
                typeUrl: "/injective.peggy.v1.MsgConfirmBatch",
                value: msgs_1.MsgConfirmBatch.fromPartial(value)
            };
        },
        depositClaim(value) {
            return {
                typeUrl: "/injective.peggy.v1.MsgDepositClaim",
                value: msgs_1.MsgDepositClaim.fromPartial(value)
            };
        },
        withdrawClaim(value) {
            return {
                typeUrl: "/injective.peggy.v1.MsgWithdrawClaim",
                value: msgs_1.MsgWithdrawClaim.fromPartial(value)
            };
        },
        valsetUpdateClaim(value) {
            return {
                typeUrl: "/injective.peggy.v1.MsgValsetUpdatedClaim",
                value: msgs_1.MsgValsetUpdatedClaim.fromPartial(value)
            };
        },
        eRC20DeployedClaim(value) {
            return {
                typeUrl: "/injective.peggy.v1.MsgERC20DeployedClaim",
                value: msgs_1.MsgERC20DeployedClaim.fromPartial(value)
            };
        },
        setOrchestratorAddresses(value) {
            return {
                typeUrl: "/injective.peggy.v1.MsgSetOrchestratorAddresses",
                value: msgs_1.MsgSetOrchestratorAddresses.fromPartial(value)
            };
        },
        cancelSendToEth(value) {
            return {
                typeUrl: "/injective.peggy.v1.MsgCancelSendToEth",
                value: msgs_1.MsgCancelSendToEth.fromPartial(value)
            };
        },
        submitBadSignatureEvidence(value) {
            return {
                typeUrl: "/injective.peggy.v1.MsgSubmitBadSignatureEvidence",
                value: msgs_1.MsgSubmitBadSignatureEvidence.fromPartial(value)
            };
        }
    }
};
