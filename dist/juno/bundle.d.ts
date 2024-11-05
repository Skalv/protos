import * as _220 from "./mint/genesis";
import * as _221 from "./mint/mint";
import * as _222 from "./mint/query";
import * as _497 from "./mint/query.rpc.Query";
export declare namespace juno {
    const mint: {
        QueryClientImpl: typeof _497.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _222.QueryParamsRequest): Promise<_222.QueryParamsResponse>;
            inflation(request?: _222.QueryInflationRequest): Promise<_222.QueryInflationResponse>;
            annualProvisions(request?: _222.QueryAnnualProvisionsRequest): Promise<_222.QueryAnnualProvisionsResponse>;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _222.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _222.QueryParamsRequest;
            fromPartial(_: Partial<_222.QueryParamsRequest>): _222.QueryParamsRequest;
            fromAmino(_: _222.QueryParamsRequestAmino): _222.QueryParamsRequest;
            toAmino(_: _222.QueryParamsRequest): _222.QueryParamsRequestAmino;
            fromAminoMsg(object: _222.QueryParamsRequestAminoMsg): _222.QueryParamsRequest;
            fromProtoMsg(message: _222.QueryParamsRequestProtoMsg): _222.QueryParamsRequest;
            toProto(message: _222.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _222.QueryParamsRequest): _222.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _222.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _222.QueryParamsResponse;
            fromPartial(object: Partial<_222.QueryParamsResponse>): _222.QueryParamsResponse;
            fromAmino(object: _222.QueryParamsResponseAmino): _222.QueryParamsResponse;
            toAmino(message: _222.QueryParamsResponse): _222.QueryParamsResponseAmino;
            fromAminoMsg(object: _222.QueryParamsResponseAminoMsg): _222.QueryParamsResponse;
            fromProtoMsg(message: _222.QueryParamsResponseProtoMsg): _222.QueryParamsResponse;
            toProto(message: _222.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _222.QueryParamsResponse): _222.QueryParamsResponseProtoMsg;
        };
        QueryInflationRequest: {
            typeUrl: string;
            encode(_: _222.QueryInflationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _222.QueryInflationRequest;
            fromPartial(_: Partial<_222.QueryInflationRequest>): _222.QueryInflationRequest;
            fromAmino(_: _222.QueryInflationRequestAmino): _222.QueryInflationRequest;
            toAmino(_: _222.QueryInflationRequest): _222.QueryInflationRequestAmino;
            fromAminoMsg(object: _222.QueryInflationRequestAminoMsg): _222.QueryInflationRequest;
            fromProtoMsg(message: _222.QueryInflationRequestProtoMsg): _222.QueryInflationRequest;
            toProto(message: _222.QueryInflationRequest): Uint8Array;
            toProtoMsg(message: _222.QueryInflationRequest): _222.QueryInflationRequestProtoMsg;
        };
        QueryInflationResponse: {
            typeUrl: string;
            encode(message: _222.QueryInflationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _222.QueryInflationResponse;
            fromPartial(object: Partial<_222.QueryInflationResponse>): _222.QueryInflationResponse;
            fromAmino(object: _222.QueryInflationResponseAmino): _222.QueryInflationResponse;
            toAmino(message: _222.QueryInflationResponse): _222.QueryInflationResponseAmino;
            fromAminoMsg(object: _222.QueryInflationResponseAminoMsg): _222.QueryInflationResponse;
            fromProtoMsg(message: _222.QueryInflationResponseProtoMsg): _222.QueryInflationResponse;
            toProto(message: _222.QueryInflationResponse): Uint8Array;
            toProtoMsg(message: _222.QueryInflationResponse): _222.QueryInflationResponseProtoMsg;
        };
        QueryAnnualProvisionsRequest: {
            typeUrl: string;
            encode(_: _222.QueryAnnualProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _222.QueryAnnualProvisionsRequest;
            fromPartial(_: Partial<_222.QueryAnnualProvisionsRequest>): _222.QueryAnnualProvisionsRequest;
            fromAmino(_: _222.QueryAnnualProvisionsRequestAmino): _222.QueryAnnualProvisionsRequest;
            toAmino(_: _222.QueryAnnualProvisionsRequest): _222.QueryAnnualProvisionsRequestAmino;
            fromAminoMsg(object: _222.QueryAnnualProvisionsRequestAminoMsg): _222.QueryAnnualProvisionsRequest;
            fromProtoMsg(message: _222.QueryAnnualProvisionsRequestProtoMsg): _222.QueryAnnualProvisionsRequest;
            toProto(message: _222.QueryAnnualProvisionsRequest): Uint8Array;
            toProtoMsg(message: _222.QueryAnnualProvisionsRequest): _222.QueryAnnualProvisionsRequestProtoMsg;
        };
        QueryAnnualProvisionsResponse: {
            typeUrl: string;
            encode(message: _222.QueryAnnualProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _222.QueryAnnualProvisionsResponse;
            fromPartial(object: Partial<_222.QueryAnnualProvisionsResponse>): _222.QueryAnnualProvisionsResponse;
            fromAmino(object: _222.QueryAnnualProvisionsResponseAmino): _222.QueryAnnualProvisionsResponse;
            toAmino(message: _222.QueryAnnualProvisionsResponse): _222.QueryAnnualProvisionsResponseAmino;
            fromAminoMsg(object: _222.QueryAnnualProvisionsResponseAminoMsg): _222.QueryAnnualProvisionsResponse;
            fromProtoMsg(message: _222.QueryAnnualProvisionsResponseProtoMsg): _222.QueryAnnualProvisionsResponse;
            toProto(message: _222.QueryAnnualProvisionsResponse): Uint8Array;
            toProtoMsg(message: _222.QueryAnnualProvisionsResponse): _222.QueryAnnualProvisionsResponseProtoMsg;
        };
        Minter: {
            typeUrl: string;
            encode(message: _221.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _221.Minter;
            fromPartial(object: Partial<_221.Minter>): _221.Minter;
            fromAmino(object: _221.MinterAmino): _221.Minter;
            toAmino(message: _221.Minter): _221.MinterAmino;
            fromAminoMsg(object: _221.MinterAminoMsg): _221.Minter;
            fromProtoMsg(message: _221.MinterProtoMsg): _221.Minter;
            toProto(message: _221.Minter): Uint8Array;
            toProtoMsg(message: _221.Minter): _221.MinterProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _221.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _221.Params;
            fromPartial(object: Partial<_221.Params>): _221.Params;
            fromAmino(object: _221.ParamsAmino): _221.Params;
            toAmino(message: _221.Params): _221.ParamsAmino;
            fromAminoMsg(object: _221.ParamsAminoMsg): _221.Params;
            fromProtoMsg(message: _221.ParamsProtoMsg): _221.Params;
            toProto(message: _221.Params): Uint8Array;
            toProtoMsg(message: _221.Params): _221.ParamsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _220.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _220.GenesisState;
            fromPartial(object: Partial<_220.GenesisState>): _220.GenesisState;
            fromAmino(object: _220.GenesisStateAmino): _220.GenesisState;
            toAmino(message: _220.GenesisState): _220.GenesisStateAmino;
            fromAminoMsg(object: _220.GenesisStateAminoMsg): _220.GenesisState;
            fromProtoMsg(message: _220.GenesisStateProtoMsg): _220.GenesisState;
            toProto(message: _220.GenesisState): Uint8Array;
            toProtoMsg(message: _220.GenesisState): _220.GenesisStateProtoMsg;
        };
    };
    const ClientFactory: {
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        moduleAccounts(request?: import("../cosmos/auth/v1beta1/query").QueryModuleAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountsResponse>;
                        bech32Prefix(request?: import("../cosmos/auth/v1beta1/query").Bech32PrefixRequest): Promise<import("../cosmos/auth/v1beta1/query").Bech32PrefixResponse>;
                        addressBytesToString(request: import("../cosmos/auth/v1beta1/query").AddressBytesToStringRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressBytesToStringResponse>;
                        addressStringToBytes(request: import("../cosmos/auth/v1beta1/query").AddressStringToBytesRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                        denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowanceRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowanceResponse>;
                        allowances(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesResponse>;
                        allowancesByGranter(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: import("../cosmos/gov/v1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1/query").QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: import("../cosmos/group/v1/query").QueryGroupInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupInfoResponse>;
                        groupPolicyInfo(request: import("../cosmos/group/v1/query").QueryGroupPolicyInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPolicyInfoResponse>;
                        groupMembers(request: import("../cosmos/group/v1/query").QueryGroupMembersRequest): Promise<import("../cosmos/group/v1/query").QueryGroupMembersResponse>;
                        groupsByAdmin(request: import("../cosmos/group/v1/query").QueryGroupsByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminResponse>;
                        proposal(request: import("../cosmos/group/v1/query").QueryProposalRequest): Promise<import("../cosmos/group/v1/query").QueryProposalResponse>;
                        proposalsByGroupPolicy(request: import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyRequest): Promise<import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: import("../cosmos/group/v1/query").QueryVoteByProposalVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: import("../cosmos/group/v1/query").QueryVotesByProposalRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByProposalResponse>;
                        votesByVoter(request: import("../cosmos/group/v1/query").QueryVotesByVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByVoterResponse>;
                        groupsByMember(request: import("../cosmos/group/v1/query").QueryGroupsByMemberRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByMemberResponse>;
                        tallyResult(request: import("../cosmos/group/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/group/v1/query").QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: import("../cosmos/mint/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryParamsResponse>;
                        inflation(request?: import("../cosmos/mint/v1beta1/query").QueryInflationRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryInflationResponse>;
                        annualProvisions(request?: import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: import("../cosmos/params/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/params/v1beta1/query").QueryParamsResponse>;
                        subspaces(request?: import("../cosmos/params/v1beta1/query").QuerySubspacesRequest): Promise<import("../cosmos/params/v1beta1/query").QuerySubspacesResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                        validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                        validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                        unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                        delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                        historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                        pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                        params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                        getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                        getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                        authority(request?: import("../cosmos/upgrade/v1beta1/query").QueryAuthorityRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAuthorityResponse>;
                    };
                };
            };
            juno: {
                mint: {
                    params(request?: _222.QueryParamsRequest): Promise<_222.QueryParamsResponse>;
                    inflation(request?: _222.QueryInflationRequest): Promise<_222.QueryInflationResponse>;
                    annualProvisions(request?: _222.QueryAnnualProvisionsRequest): Promise<_222.QueryAnnualProvisionsResponse>;
                };
            };
        }>;
    };
}
