import { BinaryReader } from "../../../binary";
import { MsgCreateGroup, MsgCreateGroupResponse, MsgUpdateGroupMembers, MsgUpdateGroupMembersResponse, MsgUpdateGroupAdmin, MsgUpdateGroupAdminResponse, MsgUpdateGroupMetadata, MsgUpdateGroupMetadataResponse, MsgCreateGroupAccount, MsgCreateGroupAccountResponse, MsgUpdateGroupAccountAdmin, MsgUpdateGroupAccountAdminResponse, MsgUpdateGroupAccountDecisionPolicy, MsgUpdateGroupAccountDecisionPolicyResponse, MsgUpdateGroupAccountMetadata, MsgUpdateGroupAccountMetadataResponse, MsgCreateProposal, MsgCreateProposalResponse, MsgVote, MsgVoteResponse, MsgExec, MsgExecResponse } from "./tx";
export class MsgClientImpl {
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
        const data = MsgCreateGroup.encode(request).finish();
        const promise = this.rpc.request("regen.group.v1alpha1.Msg", "CreateGroup", data);
        return promise.then(data => MsgCreateGroupResponse.decode(new BinaryReader(data)));
    }
    updateGroupMembers(request) {
        const data = MsgUpdateGroupMembers.encode(request).finish();
        const promise = this.rpc.request("regen.group.v1alpha1.Msg", "UpdateGroupMembers", data);
        return promise.then(data => MsgUpdateGroupMembersResponse.decode(new BinaryReader(data)));
    }
    updateGroupAdmin(request) {
        const data = MsgUpdateGroupAdmin.encode(request).finish();
        const promise = this.rpc.request("regen.group.v1alpha1.Msg", "UpdateGroupAdmin", data);
        return promise.then(data => MsgUpdateGroupAdminResponse.decode(new BinaryReader(data)));
    }
    updateGroupMetadata(request) {
        const data = MsgUpdateGroupMetadata.encode(request).finish();
        const promise = this.rpc.request("regen.group.v1alpha1.Msg", "UpdateGroupMetadata", data);
        return promise.then(data => MsgUpdateGroupMetadataResponse.decode(new BinaryReader(data)));
    }
    createGroupAccount(request) {
        const data = MsgCreateGroupAccount.encode(request).finish();
        const promise = this.rpc.request("regen.group.v1alpha1.Msg", "CreateGroupAccount", data);
        return promise.then(data => MsgCreateGroupAccountResponse.decode(new BinaryReader(data)));
    }
    updateGroupAccountAdmin(request) {
        const data = MsgUpdateGroupAccountAdmin.encode(request).finish();
        const promise = this.rpc.request("regen.group.v1alpha1.Msg", "UpdateGroupAccountAdmin", data);
        return promise.then(data => MsgUpdateGroupAccountAdminResponse.decode(new BinaryReader(data)));
    }
    updateGroupAccountDecisionPolicy(request) {
        const data = MsgUpdateGroupAccountDecisionPolicy.encode(request).finish();
        const promise = this.rpc.request("regen.group.v1alpha1.Msg", "UpdateGroupAccountDecisionPolicy", data);
        return promise.then(data => MsgUpdateGroupAccountDecisionPolicyResponse.decode(new BinaryReader(data)));
    }
    updateGroupAccountMetadata(request) {
        const data = MsgUpdateGroupAccountMetadata.encode(request).finish();
        const promise = this.rpc.request("regen.group.v1alpha1.Msg", "UpdateGroupAccountMetadata", data);
        return promise.then(data => MsgUpdateGroupAccountMetadataResponse.decode(new BinaryReader(data)));
    }
    createProposal(request) {
        const data = MsgCreateProposal.encode(request).finish();
        const promise = this.rpc.request("regen.group.v1alpha1.Msg", "CreateProposal", data);
        return promise.then(data => MsgCreateProposalResponse.decode(new BinaryReader(data)));
    }
    vote(request) {
        const data = MsgVote.encode(request).finish();
        const promise = this.rpc.request("regen.group.v1alpha1.Msg", "Vote", data);
        return promise.then(data => MsgVoteResponse.decode(new BinaryReader(data)));
    }
    exec(request) {
        const data = MsgExec.encode(request).finish();
        const promise = this.rpc.request("regen.group.v1alpha1.Msg", "Exec", data);
        return promise.then(data => MsgExecResponse.decode(new BinaryReader(data)));
    }
}
