import { BinaryReader } from "../../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryGroupInfoRequest, QueryGroupInfoResponse, QueryGroupAccountInfoRequest, QueryGroupAccountInfoResponse, QueryGroupMembersRequest, QueryGroupMembersResponse, QueryGroupsByAdminRequest, QueryGroupsByAdminResponse, QueryGroupAccountsByGroupRequest, QueryGroupAccountsByGroupResponse, QueryGroupAccountsByAdminRequest, QueryGroupAccountsByAdminResponse, QueryProposalRequest, QueryProposalResponse, QueryProposalsByGroupAccountRequest, QueryProposalsByGroupAccountResponse, QueryVoteByProposalVoterRequest, QueryVoteByProposalVoterResponse, QueryVotesByProposalRequest, QueryVotesByProposalResponse, QueryVotesByVoterRequest, QueryVotesByVoterResponse } from "./query";
export class QueryClientImpl {
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
        const data = QueryGroupInfoRequest.encode(request).finish();
        const promise = this.rpc.request("regen.group.v1alpha1.Query", "GroupInfo", data);
        return promise.then(data => QueryGroupInfoResponse.decode(new BinaryReader(data)));
    }
    groupAccountInfo(request) {
        const data = QueryGroupAccountInfoRequest.encode(request).finish();
        const promise = this.rpc.request("regen.group.v1alpha1.Query", "GroupAccountInfo", data);
        return promise.then(data => QueryGroupAccountInfoResponse.decode(new BinaryReader(data)));
    }
    groupMembers(request) {
        const data = QueryGroupMembersRequest.encode(request).finish();
        const promise = this.rpc.request("regen.group.v1alpha1.Query", "GroupMembers", data);
        return promise.then(data => QueryGroupMembersResponse.decode(new BinaryReader(data)));
    }
    groupsByAdmin(request) {
        const data = QueryGroupsByAdminRequest.encode(request).finish();
        const promise = this.rpc.request("regen.group.v1alpha1.Query", "GroupsByAdmin", data);
        return promise.then(data => QueryGroupsByAdminResponse.decode(new BinaryReader(data)));
    }
    groupAccountsByGroup(request) {
        const data = QueryGroupAccountsByGroupRequest.encode(request).finish();
        const promise = this.rpc.request("regen.group.v1alpha1.Query", "GroupAccountsByGroup", data);
        return promise.then(data => QueryGroupAccountsByGroupResponse.decode(new BinaryReader(data)));
    }
    groupAccountsByAdmin(request) {
        const data = QueryGroupAccountsByAdminRequest.encode(request).finish();
        const promise = this.rpc.request("regen.group.v1alpha1.Query", "GroupAccountsByAdmin", data);
        return promise.then(data => QueryGroupAccountsByAdminResponse.decode(new BinaryReader(data)));
    }
    proposal(request) {
        const data = QueryProposalRequest.encode(request).finish();
        const promise = this.rpc.request("regen.group.v1alpha1.Query", "Proposal", data);
        return promise.then(data => QueryProposalResponse.decode(new BinaryReader(data)));
    }
    proposalsByGroupAccount(request) {
        const data = QueryProposalsByGroupAccountRequest.encode(request).finish();
        const promise = this.rpc.request("regen.group.v1alpha1.Query", "ProposalsByGroupAccount", data);
        return promise.then(data => QueryProposalsByGroupAccountResponse.decode(new BinaryReader(data)));
    }
    voteByProposalVoter(request) {
        const data = QueryVoteByProposalVoterRequest.encode(request).finish();
        const promise = this.rpc.request("regen.group.v1alpha1.Query", "VoteByProposalVoter", data);
        return promise.then(data => QueryVoteByProposalVoterResponse.decode(new BinaryReader(data)));
    }
    votesByProposal(request) {
        const data = QueryVotesByProposalRequest.encode(request).finish();
        const promise = this.rpc.request("regen.group.v1alpha1.Query", "VotesByProposal", data);
        return promise.then(data => QueryVotesByProposalResponse.decode(new BinaryReader(data)));
    }
    votesByVoter(request) {
        const data = QueryVotesByVoterRequest.encode(request).finish();
        const promise = this.rpc.request("regen.group.v1alpha1.Query", "VotesByVoter", data);
        return promise.then(data => QueryVotesByVoterResponse.decode(new BinaryReader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
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
