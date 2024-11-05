import { BinaryReader } from "../../../binary";
import { MsgCreateClass, MsgCreateClassResponse, MsgCreateProject, MsgCreateProjectResponse, MsgCreateBatch, MsgCreateBatchResponse, MsgMintBatchCredits, MsgMintBatchCreditsResponse, MsgSealBatch, MsgSealBatchResponse, MsgSend, MsgSendResponse, MsgRetire, MsgRetireResponse, MsgCancel, MsgCancelResponse, MsgUpdateClassAdmin, MsgUpdateClassAdminResponse, MsgUpdateClassIssuers, MsgUpdateClassIssuersResponse, MsgUpdateClassMetadata, MsgUpdateClassMetadataResponse, MsgUpdateProjectAdmin, MsgUpdateProjectAdminResponse, MsgUpdateProjectMetadata, MsgUpdateProjectMetadataResponse } from "./tx";
export class MsgClientImpl {
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
        const data = MsgCreateClass.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Msg", "CreateClass", data);
        return promise.then(data => MsgCreateClassResponse.decode(new BinaryReader(data)));
    }
    createProject(request) {
        const data = MsgCreateProject.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Msg", "CreateProject", data);
        return promise.then(data => MsgCreateProjectResponse.decode(new BinaryReader(data)));
    }
    createBatch(request) {
        const data = MsgCreateBatch.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Msg", "CreateBatch", data);
        return promise.then(data => MsgCreateBatchResponse.decode(new BinaryReader(data)));
    }
    mintBatchCredits(request) {
        const data = MsgMintBatchCredits.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Msg", "MintBatchCredits", data);
        return promise.then(data => MsgMintBatchCreditsResponse.decode(new BinaryReader(data)));
    }
    sealBatch(request) {
        const data = MsgSealBatch.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Msg", "SealBatch", data);
        return promise.then(data => MsgSealBatchResponse.decode(new BinaryReader(data)));
    }
    send(request) {
        const data = MsgSend.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Msg", "Send", data);
        return promise.then(data => MsgSendResponse.decode(new BinaryReader(data)));
    }
    retire(request) {
        const data = MsgRetire.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Msg", "Retire", data);
        return promise.then(data => MsgRetireResponse.decode(new BinaryReader(data)));
    }
    cancel(request) {
        const data = MsgCancel.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Msg", "Cancel", data);
        return promise.then(data => MsgCancelResponse.decode(new BinaryReader(data)));
    }
    updateClassAdmin(request) {
        const data = MsgUpdateClassAdmin.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Msg", "UpdateClassAdmin", data);
        return promise.then(data => MsgUpdateClassAdminResponse.decode(new BinaryReader(data)));
    }
    updateClassIssuers(request) {
        const data = MsgUpdateClassIssuers.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Msg", "UpdateClassIssuers", data);
        return promise.then(data => MsgUpdateClassIssuersResponse.decode(new BinaryReader(data)));
    }
    updateClassMetadata(request) {
        const data = MsgUpdateClassMetadata.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Msg", "UpdateClassMetadata", data);
        return promise.then(data => MsgUpdateClassMetadataResponse.decode(new BinaryReader(data)));
    }
    updateProjectAdmin(request) {
        const data = MsgUpdateProjectAdmin.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Msg", "UpdateProjectAdmin", data);
        return promise.then(data => MsgUpdateProjectAdminResponse.decode(new BinaryReader(data)));
    }
    updateProjectMetadata(request) {
        const data = MsgUpdateProjectMetadata.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Msg", "UpdateProjectMetadata", data);
        return promise.then(data => MsgUpdateProjectMetadataResponse.decode(new BinaryReader(data)));
    }
}
