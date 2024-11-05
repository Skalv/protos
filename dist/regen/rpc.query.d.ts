import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const createRPCQueryClient: ({ rpcEndpoint }: {
    rpcEndpoint: string | HttpEndpoint;
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
    regen: {
        data: {
            v1: {
                byIRI(request: import("./data/v1/query").QueryByIRIRequest): Promise<import("./data/v1/query").QueryByIRIResponse>;
                byHash(request: import("./data/v1/query").QueryByHashRequest): Promise<import("./data/v1/query").QueryByHashResponse>;
                byAttestor(request: import("./data/v1/query").QueryByAttestorRequest): Promise<import("./data/v1/query").QueryByAttestorResponse>;
                iRIByHash(request: import("./data/v1/query").QueryIRIByHashRequest): Promise<import("./data/v1/query").QueryIRIByHashResponse>;
                iRIByRawHash(request: import("./data/v1/query").QueryIRIByRawHashRequest): Promise<import("./data/v1/query").QueryIRIByRawHashResponse>;
                iRIByGraphHash(request: import("./data/v1/query").QueryIRIByGraphHashRequest): Promise<import("./data/v1/query").QueryIRIByGraphHashResponse>;
                hashByIRI(request: import("./data/v1/query").QueryHashByIRIRequest): Promise<import("./data/v1/query").QueryHashByIRIResponse>;
                attestorsByIRI(request: import("./data/v1/query").QueryAttestorsByIRIRequest): Promise<import("./data/v1/query").QueryAttestorsByIRIResponse>;
                attestorsByHash(request: import("./data/v1/query").QueryAttestorsByHashRequest): Promise<import("./data/v1/query").QueryAttestorsByHashResponse>;
                resolversByIRI(request: import("./data/v1/query").QueryResolversByIRIRequest): Promise<import("./data/v1/query").QueryResolversByIRIResponse>;
                resolversByHash(request: import("./data/v1/query").QueryResolversByHashRequest): Promise<import("./data/v1/query").QueryResolversByHashResponse>;
                resolverInfo(request: import("./data/v1/query").QueryResolverInfoRequest): Promise<import("./data/v1/query").QueryResolverInfoResponse>;
            };
            v1alpha2: {
                byHash(request: import("./data/v1alpha2/query").QueryByHashRequest): Promise<import("./data/v1alpha2/query").QueryByHashResponse>;
                bySigner(request: import("./data/v1alpha2/query").QueryBySignerRequest): Promise<import("./data/v1alpha2/query").QueryBySignerResponse>;
            };
        };
        ecocredit: {
            basket: {
                v1: {
                    basket(request: import("./ecocredit/basket/v1/query").QueryBasketRequest): Promise<import("./ecocredit/basket/v1/query").QueryBasketResponse>;
                    baskets(request?: import("./ecocredit/basket/v1/query").QueryBasketsRequest): Promise<import("./ecocredit/basket/v1/query").QueryBasketsResponse>;
                    basketBalances(request: import("./ecocredit/basket/v1/query").QueryBasketBalancesRequest): Promise<import("./ecocredit/basket/v1/query").QueryBasketBalancesResponse>;
                    basketBalance(request: import("./ecocredit/basket/v1/query").QueryBasketBalanceRequest): Promise<import("./ecocredit/basket/v1/query").QueryBasketBalanceResponse>;
                };
            };
            marketplace: {
                v1: {
                    sellOrder(request: import("./ecocredit/marketplace/v1/query").QuerySellOrderRequest): Promise<import("./ecocredit/marketplace/v1/query").QuerySellOrderResponse>;
                    sellOrders(request?: import("./ecocredit/marketplace/v1/query").QuerySellOrdersRequest): Promise<import("./ecocredit/marketplace/v1/query").QuerySellOrdersResponse>;
                    sellOrdersByBatchDenom(request: import("./ecocredit/marketplace/v1/query").QuerySellOrdersByBatchDenomRequest): Promise<import("./ecocredit/marketplace/v1/query").QuerySellOrdersByBatchDenomResponse>;
                    sellOrdersByAddress(request: import("./ecocredit/marketplace/v1/query").QuerySellOrdersByAddressRequest): Promise<import("./ecocredit/marketplace/v1/query").QuerySellOrdersByAddressResponse>;
                    allowedDenoms(request?: import("./ecocredit/marketplace/v1/query").QueryAllowedDenomsRequest): Promise<import("./ecocredit/marketplace/v1/query").QueryAllowedDenomsResponse>;
                };
            };
            v1: {
                classes(request?: import("./ecocredit/v1/query").QueryClassesRequest): Promise<import("./ecocredit/v1/query").QueryClassesResponse>;
                classesByAdmin(request: import("./ecocredit/v1/query").QueryClassesByAdminRequest): Promise<import("./ecocredit/v1/query").QueryClassesByAdminResponse>;
                class(request: import("./ecocredit/v1/query").QueryClassRequest): Promise<import("./ecocredit/v1/query").QueryClassResponse>;
                classIssuers(request: import("./ecocredit/v1/query").QueryClassIssuersRequest): Promise<import("./ecocredit/v1/query").QueryClassIssuersResponse>;
                projects(request: import("./ecocredit/v1/query").QueryProjectsRequest): Promise<import("./ecocredit/v1/query").QueryProjectsResponse>;
                projectsByReferenceId(request: import("./ecocredit/v1/query").QueryProjectsByReferenceIdRequest): Promise<import("./ecocredit/v1/query").QueryProjectsByReferenceIdResponse>;
                project(request: import("./ecocredit/v1/query").QueryProjectRequest): Promise<import("./ecocredit/v1/query").QueryProjectResponse>;
                batches(request: import("./ecocredit/v1/query").QueryBatchesRequest): Promise<import("./ecocredit/v1/query").QueryBatchesResponse>;
                batchesByIssuer(request: import("./ecocredit/v1/query").QueryBatchesByIssuerRequest): Promise<import("./ecocredit/v1/query").QueryBatchesByIssuerResponse>;
                batchesByClass(request: import("./ecocredit/v1/query").QueryBatchesByClassRequest): Promise<import("./ecocredit/v1/query").QueryBatchesByClassResponse>;
                batch(request: import("./ecocredit/v1/query").QueryBatchRequest): Promise<import("./ecocredit/v1/query").QueryBatchResponse>;
                balance(request: import("./ecocredit/v1/query").QueryBalanceRequest): Promise<import("./ecocredit/v1/query").QueryBalanceResponse>;
                balances(request: import("./ecocredit/v1/query").QueryBalancesRequest): Promise<import("./ecocredit/v1/query").QueryBalancesResponse>;
                supply(request: import("./ecocredit/v1/query").QuerySupplyRequest): Promise<import("./ecocredit/v1/query").QuerySupplyResponse>;
                creditTypes(request?: import("./ecocredit/v1/query").QueryCreditTypesRequest): Promise<import("./ecocredit/v1/query").QueryCreditTypesResponse>;
                params(request?: import("./ecocredit/v1/query").QueryParamsRequest): Promise<import("./ecocredit/v1/query").QueryParamsResponse>;
            };
            v1alpha1: {
                classes(request?: import("./ecocredit/v1alpha1/query").QueryClassesRequest): Promise<import("./ecocredit/v1alpha1/query").QueryClassesResponse>;
                classInfo(request: import("./ecocredit/v1alpha1/query").QueryClassInfoRequest): Promise<import("./ecocredit/v1alpha1/query").QueryClassInfoResponse>;
                batches(request: import("./ecocredit/v1alpha1/query").QueryBatchesRequest): Promise<import("./ecocredit/v1alpha1/query").QueryBatchesResponse>;
                batchInfo(request: import("./ecocredit/v1alpha1/query").QueryBatchInfoRequest): Promise<import("./ecocredit/v1alpha1/query").QueryBatchInfoResponse>;
                balance(request: import("./ecocredit/v1alpha1/query").QueryBalanceRequest): Promise<import("./ecocredit/v1alpha1/query").QueryBalanceResponse>;
                supply(request: import("./ecocredit/v1alpha1/query").QuerySupplyRequest): Promise<import("./ecocredit/v1alpha1/query").QuerySupplyResponse>;
                creditTypes(request?: import("./ecocredit/v1alpha1/query").QueryCreditTypesRequest): Promise<import("./ecocredit/v1alpha1/query").QueryCreditTypesResponse>;
                params(request?: import("./ecocredit/v1alpha1/query").QueryParamsRequest): Promise<import("./ecocredit/v1alpha1/query").QueryParamsResponse>;
            };
        };
        group: {
            v1alpha1: {
                groupInfo(request: import("./group/v1alpha1/query").QueryGroupInfoRequest): Promise<import("./group/v1alpha1/query").QueryGroupInfoResponse>;
                groupAccountInfo(request: import("./group/v1alpha1/query").QueryGroupAccountInfoRequest): Promise<import("./group/v1alpha1/query").QueryGroupAccountInfoResponse>;
                groupMembers(request: import("./group/v1alpha1/query").QueryGroupMembersRequest): Promise<import("./group/v1alpha1/query").QueryGroupMembersResponse>;
                groupsByAdmin(request: import("./group/v1alpha1/query").QueryGroupsByAdminRequest): Promise<import("./group/v1alpha1/query").QueryGroupsByAdminResponse>;
                groupAccountsByGroup(request: import("./group/v1alpha1/query").QueryGroupAccountsByGroupRequest): Promise<import("./group/v1alpha1/query").QueryGroupAccountsByGroupResponse>;
                groupAccountsByAdmin(request: import("./group/v1alpha1/query").QueryGroupAccountsByAdminRequest): Promise<import("./group/v1alpha1/query").QueryGroupAccountsByAdminResponse>;
                proposal(request: import("./group/v1alpha1/query").QueryProposalRequest): Promise<import("./group/v1alpha1/query").QueryProposalResponse>;
                proposalsByGroupAccount(request: import("./group/v1alpha1/query").QueryProposalsByGroupAccountRequest): Promise<import("./group/v1alpha1/query").QueryProposalsByGroupAccountResponse>;
                voteByProposalVoter(request: import("./group/v1alpha1/query").QueryVoteByProposalVoterRequest): Promise<import("./group/v1alpha1/query").QueryVoteByProposalVoterResponse>;
                votesByProposal(request: import("./group/v1alpha1/query").QueryVotesByProposalRequest): Promise<import("./group/v1alpha1/query").QueryVotesByProposalResponse>;
                votesByVoter(request: import("./group/v1alpha1/query").QueryVotesByVoterRequest): Promise<import("./group/v1alpha1/query").QueryVotesByVoterResponse>;
            };
        };
    };
}>;
