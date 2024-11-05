import { BinaryReader } from "../../../binary";
import { MsgValsetConfirm, MsgValsetConfirmResponse, MsgSendToEth, MsgSendToEthResponse, MsgRequestBatch, MsgRequestBatchResponse, MsgConfirmBatch, MsgConfirmBatchResponse, MsgDepositClaim, MsgDepositClaimResponse, MsgWithdrawClaim, MsgWithdrawClaimResponse, MsgValsetUpdatedClaim, MsgValsetUpdatedClaimResponse, MsgERC20DeployedClaim, MsgERC20DeployedClaimResponse, MsgSetOrchestratorAddresses, MsgSetOrchestratorAddressesResponse, MsgCancelSendToEth, MsgCancelSendToEthResponse, MsgSubmitBadSignatureEvidence, MsgSubmitBadSignatureEvidenceResponse } from "./msgs";
export class MsgClientImpl {
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
        const data = MsgValsetConfirm.encode(request).finish();
        const promise = this.rpc.request("injective.peggy.v1.Msg", "ValsetConfirm", data);
        return promise.then(data => MsgValsetConfirmResponse.decode(new BinaryReader(data)));
    }
    sendToEth(request) {
        const data = MsgSendToEth.encode(request).finish();
        const promise = this.rpc.request("injective.peggy.v1.Msg", "SendToEth", data);
        return promise.then(data => MsgSendToEthResponse.decode(new BinaryReader(data)));
    }
    requestBatch(request) {
        const data = MsgRequestBatch.encode(request).finish();
        const promise = this.rpc.request("injective.peggy.v1.Msg", "RequestBatch", data);
        return promise.then(data => MsgRequestBatchResponse.decode(new BinaryReader(data)));
    }
    confirmBatch(request) {
        const data = MsgConfirmBatch.encode(request).finish();
        const promise = this.rpc.request("injective.peggy.v1.Msg", "ConfirmBatch", data);
        return promise.then(data => MsgConfirmBatchResponse.decode(new BinaryReader(data)));
    }
    depositClaim(request) {
        const data = MsgDepositClaim.encode(request).finish();
        const promise = this.rpc.request("injective.peggy.v1.Msg", "DepositClaim", data);
        return promise.then(data => MsgDepositClaimResponse.decode(new BinaryReader(data)));
    }
    withdrawClaim(request) {
        const data = MsgWithdrawClaim.encode(request).finish();
        const promise = this.rpc.request("injective.peggy.v1.Msg", "WithdrawClaim", data);
        return promise.then(data => MsgWithdrawClaimResponse.decode(new BinaryReader(data)));
    }
    valsetUpdateClaim(request) {
        const data = MsgValsetUpdatedClaim.encode(request).finish();
        const promise = this.rpc.request("injective.peggy.v1.Msg", "ValsetUpdateClaim", data);
        return promise.then(data => MsgValsetUpdatedClaimResponse.decode(new BinaryReader(data)));
    }
    eRC20DeployedClaim(request) {
        const data = MsgERC20DeployedClaim.encode(request).finish();
        const promise = this.rpc.request("injective.peggy.v1.Msg", "ERC20DeployedClaim", data);
        return promise.then(data => MsgERC20DeployedClaimResponse.decode(new BinaryReader(data)));
    }
    setOrchestratorAddresses(request) {
        const data = MsgSetOrchestratorAddresses.encode(request).finish();
        const promise = this.rpc.request("injective.peggy.v1.Msg", "SetOrchestratorAddresses", data);
        return promise.then(data => MsgSetOrchestratorAddressesResponse.decode(new BinaryReader(data)));
    }
    cancelSendToEth(request) {
        const data = MsgCancelSendToEth.encode(request).finish();
        const promise = this.rpc.request("injective.peggy.v1.Msg", "CancelSendToEth", data);
        return promise.then(data => MsgCancelSendToEthResponse.decode(new BinaryReader(data)));
    }
    submitBadSignatureEvidence(request) {
        const data = MsgSubmitBadSignatureEvidence.encode(request).finish();
        const promise = this.rpc.request("injective.peggy.v1.Msg", "SubmitBadSignatureEvidence", data);
        return promise.then(data => MsgSubmitBadSignatureEvidenceResponse.decode(new BinaryReader(data)));
    }
}
