"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
const binary_1 = require("../../../binary");
const stargate_1 = require("@cosmjs/stargate");
const query_1 = require("./query");
class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.groupInfo = this.groupInfo.bind(this);
        this.groupAccountInfo = this.groupAccountInfo.bind(this);
        this.groupMembers = this.groupMembers.bind(this);
        this.groupsByAdmin = this.groupsByAdmin.bind(this);
        this.groupAccountsByGroup = this.groupAccountsByGroup.bind(this);
        this.groupAccountsByAdmin = this.groupAccountsByAdmin.bind(this);
        this.proposal = this.proposal.bind(this);
        this.proposalsByGroupAccount = this.proposalsByGroupAccount.bind(this);
        this.voteByProposalVoter = this.voteByProposalVoter.bind(this);
        this.votesByProposal = this.votesByProposal.bind(this);
        this.votesByVoter = this.votesByVoter.bind(this);
    }
    groupInfo(request) {
        const data = query_1.QueryGroupInfoRequest.encode(request).finish();
        const promise = this.rpc.request("regen.group.v1alpha1.Query", "GroupInfo", data);
        return promise.then(data => query_1.QueryGroupInfoResponse.decode(new binary_1.BinaryReader(data)));
    }
    groupAccountInfo(request) {
        const data = query_1.QueryGroupAccountInfoRequest.encode(request).finish();
        const promise = this.rpc.request("regen.group.v1alpha1.Query", "GroupAccountInfo", data);
        return promise.then(data => query_1.QueryGroupAccountInfoResponse.decode(new binary_1.BinaryReader(data)));
    }
    groupMembers(request) {
        const data = query_1.QueryGroupMembersRequest.encode(request).finish();
        const promise = this.rpc.request("regen.group.v1alpha1.Query", "GroupMembers", data);
        return promise.then(data => query_1.QueryGroupMembersResponse.decode(new binary_1.BinaryReader(data)));
    }
    groupsByAdmin(request) {
        const data = query_1.QueryGroupsByAdminRequest.encode(request).finish();
        const promise = this.rpc.request("regen.group.v1alpha1.Query", "GroupsByAdmin", data);
        return promise.then(data => query_1.QueryGroupsByAdminResponse.decode(new binary_1.BinaryReader(data)));
    }
    groupAccountsByGroup(request) {
        const data = query_1.QueryGroupAccountsByGroupRequest.encode(request).finish();
        const promise = this.rpc.request("regen.group.v1alpha1.Query", "GroupAccountsByGroup", data);
        return promise.then(data => query_1.QueryGroupAccountsByGroupResponse.decode(new binary_1.BinaryReader(data)));
    }
    groupAccountsByAdmin(request) {
        const data = query_1.QueryGroupAccountsByAdminRequest.encode(request).finish();
        const promise = this.rpc.request("regen.group.v1alpha1.Query", "GroupAccountsByAdmin", data);
        return promise.then(data => query_1.QueryGroupAccountsByAdminResponse.decode(new binary_1.BinaryReader(data)));
    }
    proposal(request) {
        const data = query_1.QueryProposalRequest.encode(request).finish();
        const promise = this.rpc.request("regen.group.v1alpha1.Query", "Proposal", data);
        return promise.then(data => query_1.QueryProposalResponse.decode(new binary_1.BinaryReader(data)));
    }
    proposalsByGroupAccount(request) {
        const data = query_1.QueryProposalsByGroupAccountRequest.encode(request).finish();
        const promise = this.rpc.request("regen.group.v1alpha1.Query", "ProposalsByGroupAccount", data);
        return promise.then(data => query_1.QueryProposalsByGroupAccountResponse.decode(new binary_1.BinaryReader(data)));
    }
    voteByProposalVoter(request) {
        const data = query_1.QueryVoteByProposalVoterRequest.encode(request).finish();
        const promise = this.rpc.request("regen.group.v1alpha1.Query", "VoteByProposalVoter", data);
        return promise.then(data => query_1.QueryVoteByProposalVoterResponse.decode(new binary_1.BinaryReader(data)));
    }
    votesByProposal(request) {
        const data = query_1.QueryVotesByProposalRequest.encode(request).finish();
        const promise = this.rpc.request("regen.group.v1alpha1.Query", "VotesByProposal", data);
        return promise.then(data => query_1.QueryVotesByProposalResponse.decode(new binary_1.BinaryReader(data)));
    }
    votesByVoter(request) {
        const data = query_1.QueryVotesByVoterRequest.encode(request).finish();
        const promise = this.rpc.request("regen.group.v1alpha1.Query", "VotesByVoter", data);
        return promise.then(data => query_1.QueryVotesByVoterResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        groupInfo(request) {
            return queryService.groupInfo(request);
        },
        groupAccountInfo(request) {
            return queryService.groupAccountInfo(request);
        },
        groupMembers(request) {
            return queryService.groupMembers(request);
        },
        groupsByAdmin(request) {
            return queryService.groupsByAdmin(request);
        },
        groupAccountsByGroup(request) {
            return queryService.groupAccountsByGroup(request);
        },
        groupAccountsByAdmin(request) {
            return queryService.groupAccountsByAdmin(request);
        },
        proposal(request) {
            return queryService.proposal(request);
        },
        proposalsByGroupAccount(request) {
            return queryService.proposalsByGroupAccount(request);
        },
        voteByProposalVoter(request) {
            return queryService.voteByProposalVoter(request);
        },
        votesByProposal(request) {
            return queryService.votesByProposal(request);
        },
        votesByVoter(request) {
            return queryService.votesByVoter(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
