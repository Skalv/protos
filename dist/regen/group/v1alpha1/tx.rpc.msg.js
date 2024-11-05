"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = void 0;
const binary_1 = require("../../../binary");
const tx_1 = require("./tx");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.createGroup = this.createGroup.bind(this);
        this.updateGroupMembers = this.updateGroupMembers.bind(this);
        this.updateGroupAdmin = this.updateGroupAdmin.bind(this);
        this.updateGroupMetadata = this.updateGroupMetadata.bind(this);
        this.createGroupAccount = this.createGroupAccount.bind(this);
        this.updateGroupAccountAdmin = this.updateGroupAccountAdmin.bind(this);
        this.updateGroupAccountDecisionPolicy = this.updateGroupAccountDecisionPolicy.bind(this);
        this.updateGroupAccountMetadata = this.updateGroupAccountMetadata.bind(this);
        this.createProposal = this.createProposal.bind(this);
        this.vote = this.vote.bind(this);
        this.exec = this.exec.bind(this);
    }
    createGroup(request) {
        const data = tx_1.MsgCreateGroup.encode(request).finish();
        const promise = this.rpc.request("regen.group.v1alpha1.Msg", "CreateGroup", data);
        return promise.then(data => tx_1.MsgCreateGroupResponse.decode(new binary_1.BinaryReader(data)));
    }
    updateGroupMembers(request) {
        const data = tx_1.MsgUpdateGroupMembers.encode(request).finish();
        const promise = this.rpc.request("regen.group.v1alpha1.Msg", "UpdateGroupMembers", data);
        return promise.then(data => tx_1.MsgUpdateGroupMembersResponse.decode(new binary_1.BinaryReader(data)));
    }
    updateGroupAdmin(request) {
        const data = tx_1.MsgUpdateGroupAdmin.encode(request).finish();
        const promise = this.rpc.request("regen.group.v1alpha1.Msg", "UpdateGroupAdmin", data);
        return promise.then(data => tx_1.MsgUpdateGroupAdminResponse.decode(new binary_1.BinaryReader(data)));
    }
    updateGroupMetadata(request) {
        const data = tx_1.MsgUpdateGroupMetadata.encode(request).finish();
        const promise = this.rpc.request("regen.group.v1alpha1.Msg", "UpdateGroupMetadata", data);
        return promise.then(data => tx_1.MsgUpdateGroupMetadataResponse.decode(new binary_1.BinaryReader(data)));
    }
    createGroupAccount(request) {
        const data = tx_1.MsgCreateGroupAccount.encode(request).finish();
        const promise = this.rpc.request("regen.group.v1alpha1.Msg", "CreateGroupAccount", data);
        return promise.then(data => tx_1.MsgCreateGroupAccountResponse.decode(new binary_1.BinaryReader(data)));
    }
    updateGroupAccountAdmin(request) {
        const data = tx_1.MsgUpdateGroupAccountAdmin.encode(request).finish();
        const promise = this.rpc.request("regen.group.v1alpha1.Msg", "UpdateGroupAccountAdmin", data);
        return promise.then(data => tx_1.MsgUpdateGroupAccountAdminResponse.decode(new binary_1.BinaryReader(data)));
    }
    updateGroupAccountDecisionPolicy(request) {
        const data = tx_1.MsgUpdateGroupAccountDecisionPolicy.encode(request).finish();
        const promise = this.rpc.request("regen.group.v1alpha1.Msg", "UpdateGroupAccountDecisionPolicy", data);
        return promise.then(data => tx_1.MsgUpdateGroupAccountDecisionPolicyResponse.decode(new binary_1.BinaryReader(data)));
    }
    updateGroupAccountMetadata(request) {
        const data = tx_1.MsgUpdateGroupAccountMetadata.encode(request).finish();
        const promise = this.rpc.request("regen.group.v1alpha1.Msg", "UpdateGroupAccountMetadata", data);
        return promise.then(data => tx_1.MsgUpdateGroupAccountMetadataResponse.decode(new binary_1.BinaryReader(data)));
    }
    createProposal(request) {
        const data = tx_1.MsgCreateProposal.encode(request).finish();
        const promise = this.rpc.request("regen.group.v1alpha1.Msg", "CreateProposal", data);
        return promise.then(data => tx_1.MsgCreateProposalResponse.decode(new binary_1.BinaryReader(data)));
    }
    vote(request) {
        const data = tx_1.MsgVote.encode(request).finish();
        const promise = this.rpc.request("regen.group.v1alpha1.Msg", "Vote", data);
        return promise.then(data => tx_1.MsgVoteResponse.decode(new binary_1.BinaryReader(data)));
    }
    exec(request) {
        const data = tx_1.MsgExec.encode(request).finish();
        const promise = this.rpc.request("regen.group.v1alpha1.Msg", "Exec", data);
        return promise.then(data => tx_1.MsgExecResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
