"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = void 0;
const binary_1 = require("../../../binary");
const tx_1 = require("./tx");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.createClass = this.createClass.bind(this);
        this.createProject = this.createProject.bind(this);
        this.createBatch = this.createBatch.bind(this);
        this.mintBatchCredits = this.mintBatchCredits.bind(this);
        this.sealBatch = this.sealBatch.bind(this);
        this.send = this.send.bind(this);
        this.retire = this.retire.bind(this);
        this.cancel = this.cancel.bind(this);
        this.updateClassAdmin = this.updateClassAdmin.bind(this);
        this.updateClassIssuers = this.updateClassIssuers.bind(this);
        this.updateClassMetadata = this.updateClassMetadata.bind(this);
        this.updateProjectAdmin = this.updateProjectAdmin.bind(this);
        this.updateProjectMetadata = this.updateProjectMetadata.bind(this);
    }
    createClass(request) {
        const data = tx_1.MsgCreateClass.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Msg", "CreateClass", data);
        return promise.then(data => tx_1.MsgCreateClassResponse.decode(new binary_1.BinaryReader(data)));
    }
    createProject(request) {
        const data = tx_1.MsgCreateProject.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Msg", "CreateProject", data);
        return promise.then(data => tx_1.MsgCreateProjectResponse.decode(new binary_1.BinaryReader(data)));
    }
    createBatch(request) {
        const data = tx_1.MsgCreateBatch.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Msg", "CreateBatch", data);
        return promise.then(data => tx_1.MsgCreateBatchResponse.decode(new binary_1.BinaryReader(data)));
    }
    mintBatchCredits(request) {
        const data = tx_1.MsgMintBatchCredits.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Msg", "MintBatchCredits", data);
        return promise.then(data => tx_1.MsgMintBatchCreditsResponse.decode(new binary_1.BinaryReader(data)));
    }
    sealBatch(request) {
        const data = tx_1.MsgSealBatch.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Msg", "SealBatch", data);
        return promise.then(data => tx_1.MsgSealBatchResponse.decode(new binary_1.BinaryReader(data)));
    }
    send(request) {
        const data = tx_1.MsgSend.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Msg", "Send", data);
        return promise.then(data => tx_1.MsgSendResponse.decode(new binary_1.BinaryReader(data)));
    }
    retire(request) {
        const data = tx_1.MsgRetire.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Msg", "Retire", data);
        return promise.then(data => tx_1.MsgRetireResponse.decode(new binary_1.BinaryReader(data)));
    }
    cancel(request) {
        const data = tx_1.MsgCancel.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Msg", "Cancel", data);
        return promise.then(data => tx_1.MsgCancelResponse.decode(new binary_1.BinaryReader(data)));
    }
    updateClassAdmin(request) {
        const data = tx_1.MsgUpdateClassAdmin.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Msg", "UpdateClassAdmin", data);
        return promise.then(data => tx_1.MsgUpdateClassAdminResponse.decode(new binary_1.BinaryReader(data)));
    }
    updateClassIssuers(request) {
        const data = tx_1.MsgUpdateClassIssuers.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Msg", "UpdateClassIssuers", data);
        return promise.then(data => tx_1.MsgUpdateClassIssuersResponse.decode(new binary_1.BinaryReader(data)));
    }
    updateClassMetadata(request) {
        const data = tx_1.MsgUpdateClassMetadata.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Msg", "UpdateClassMetadata", data);
        return promise.then(data => tx_1.MsgUpdateClassMetadataResponse.decode(new binary_1.BinaryReader(data)));
    }
    updateProjectAdmin(request) {
        const data = tx_1.MsgUpdateProjectAdmin.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Msg", "UpdateProjectAdmin", data);
        return promise.then(data => tx_1.MsgUpdateProjectAdminResponse.decode(new binary_1.BinaryReader(data)));
    }
    updateProjectMetadata(request) {
        const data = tx_1.MsgUpdateProjectMetadata.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Msg", "UpdateProjectMetadata", data);
        return promise.then(data => tx_1.MsgUpdateProjectMetadataResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
