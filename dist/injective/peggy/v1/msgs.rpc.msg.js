"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = void 0;
const binary_1 = require("../../../binary");
const msgs_1 = require("./msgs");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.valsetConfirm = this.valsetConfirm.bind(this);
        this.sendToEth = this.sendToEth.bind(this);
        this.requestBatch = this.requestBatch.bind(this);
        this.confirmBatch = this.confirmBatch.bind(this);
        this.depositClaim = this.depositClaim.bind(this);
        this.withdrawClaim = this.withdrawClaim.bind(this);
        this.valsetUpdateClaim = this.valsetUpdateClaim.bind(this);
        this.eRC20DeployedClaim = this.eRC20DeployedClaim.bind(this);
        this.setOrchestratorAddresses = this.setOrchestratorAddresses.bind(this);
        this.cancelSendToEth = this.cancelSendToEth.bind(this);
        this.submitBadSignatureEvidence = this.submitBadSignatureEvidence.bind(this);
    }
    valsetConfirm(request) {
        const data = msgs_1.MsgValsetConfirm.encode(request).finish();
        const promise = this.rpc.request("injective.peggy.v1.Msg", "ValsetConfirm", data);
        return promise.then(data => msgs_1.MsgValsetConfirmResponse.decode(new binary_1.BinaryReader(data)));
    }
    sendToEth(request) {
        const data = msgs_1.MsgSendToEth.encode(request).finish();
        const promise = this.rpc.request("injective.peggy.v1.Msg", "SendToEth", data);
        return promise.then(data => msgs_1.MsgSendToEthResponse.decode(new binary_1.BinaryReader(data)));
    }
    requestBatch(request) {
        const data = msgs_1.MsgRequestBatch.encode(request).finish();
        const promise = this.rpc.request("injective.peggy.v1.Msg", "RequestBatch", data);
        return promise.then(data => msgs_1.MsgRequestBatchResponse.decode(new binary_1.BinaryReader(data)));
    }
    confirmBatch(request) {
        const data = msgs_1.MsgConfirmBatch.encode(request).finish();
        const promise = this.rpc.request("injective.peggy.v1.Msg", "ConfirmBatch", data);
        return promise.then(data => msgs_1.MsgConfirmBatchResponse.decode(new binary_1.BinaryReader(data)));
    }
    depositClaim(request) {
        const data = msgs_1.MsgDepositClaim.encode(request).finish();
        const promise = this.rpc.request("injective.peggy.v1.Msg", "DepositClaim", data);
        return promise.then(data => msgs_1.MsgDepositClaimResponse.decode(new binary_1.BinaryReader(data)));
    }
    withdrawClaim(request) {
        const data = msgs_1.MsgWithdrawClaim.encode(request).finish();
        const promise = this.rpc.request("injective.peggy.v1.Msg", "WithdrawClaim", data);
        return promise.then(data => msgs_1.MsgWithdrawClaimResponse.decode(new binary_1.BinaryReader(data)));
    }
    valsetUpdateClaim(request) {
        const data = msgs_1.MsgValsetUpdatedClaim.encode(request).finish();
        const promise = this.rpc.request("injective.peggy.v1.Msg", "ValsetUpdateClaim", data);
        return promise.then(data => msgs_1.MsgValsetUpdatedClaimResponse.decode(new binary_1.BinaryReader(data)));
    }
    eRC20DeployedClaim(request) {
        const data = msgs_1.MsgERC20DeployedClaim.encode(request).finish();
        const promise = this.rpc.request("injective.peggy.v1.Msg", "ERC20DeployedClaim", data);
        return promise.then(data => msgs_1.MsgERC20DeployedClaimResponse.decode(new binary_1.BinaryReader(data)));
    }
    setOrchestratorAddresses(request) {
        const data = msgs_1.MsgSetOrchestratorAddresses.encode(request).finish();
        const promise = this.rpc.request("injective.peggy.v1.Msg", "SetOrchestratorAddresses", data);
        return promise.then(data => msgs_1.MsgSetOrchestratorAddressesResponse.decode(new binary_1.BinaryReader(data)));
    }
    cancelSendToEth(request) {
        const data = msgs_1.MsgCancelSendToEth.encode(request).finish();
        const promise = this.rpc.request("injective.peggy.v1.Msg", "CancelSendToEth", data);
        return promise.then(data => msgs_1.MsgCancelSendToEthResponse.decode(new binary_1.BinaryReader(data)));
    }
    submitBadSignatureEvidence(request) {
        const data = msgs_1.MsgSubmitBadSignatureEvidence.encode(request).finish();
        const promise = this.rpc.request("injective.peggy.v1.Msg", "SubmitBadSignatureEvidence", data);
        return promise.then(data => msgs_1.MsgSubmitBadSignatureEvidenceResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
