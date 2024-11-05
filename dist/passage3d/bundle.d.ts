import * as _295 from "./claim/v1beta1/claim_record";
import * as _296 from "./claim/v1beta1/genesis";
import * as _297 from "./claim/v1beta1/params";
import * as _298 from "./claim/v1beta1/query";
import * as _299 from "./claim/v1beta1/tx";
import * as _551 from "./claim/v1beta1/query.rpc.Query";
import * as _552 from "./claim/v1beta1/tx.rpc.msg";
export declare namespace passage3d {
    namespace claim {
        const v1beta1: {
            MsgClientImpl: typeof _552.MsgClientImpl;
            QueryClientImpl: typeof _551.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                moduleAccountBalance(request?: _298.QueryModuleAccountBalanceRequest): Promise<_298.QueryModuleAccountBalanceResponse>;
                params(request?: _298.QueryParamsRequest): Promise<_298.QueryParamsResponse>;
                claimRecord(request: _298.QueryClaimRecordRequest): Promise<_298.QueryClaimRecordResponse>;
                claimableForAction(request: _298.QueryClaimableForActionRequest): Promise<_298.QueryClaimableForActionResponse>;
                totalClaimable(request: _298.QueryTotalClaimableRequest): Promise<_298.QueryTotalClaimableResponse>;
            };
            registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    claim(value: _299.MsgClaim): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    claim(value: _299.MsgClaim): {
                        typeUrl: string;
                        value: _299.MsgClaim;
                    };
                };
                fromPartial: {
                    claim(value: _299.MsgClaim): {
                        typeUrl: string;
                        value: _299.MsgClaim;
                    };
                };
            };
            AminoConverter: {
                "/passage3d.claim.v1beta1.MsgClaim": {
                    aminoType: string;
                    toAmino: (message: _299.MsgClaim) => _299.MsgClaimAmino;
                    fromAmino: (object: _299.MsgClaimAmino) => _299.MsgClaim;
                };
            };
            MsgClaim: {
                typeUrl: string;
                encode(message: _299.MsgClaim, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _299.MsgClaim;
                fromPartial(object: Partial<_299.MsgClaim>): _299.MsgClaim;
                fromAmino(object: _299.MsgClaimAmino): _299.MsgClaim;
                toAmino(message: _299.MsgClaim): _299.MsgClaimAmino;
                fromAminoMsg(object: _299.MsgClaimAminoMsg): _299.MsgClaim;
                fromProtoMsg(message: _299.MsgClaimProtoMsg): _299.MsgClaim;
                toProto(message: _299.MsgClaim): Uint8Array;
                toProtoMsg(message: _299.MsgClaim): _299.MsgClaimProtoMsg;
            };
            MsgClaimResponse: {
                typeUrl: string;
                encode(message: _299.MsgClaimResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _299.MsgClaimResponse;
                fromPartial(object: Partial<_299.MsgClaimResponse>): _299.MsgClaimResponse;
                fromAmino(object: _299.MsgClaimResponseAmino): _299.MsgClaimResponse;
                toAmino(message: _299.MsgClaimResponse): _299.MsgClaimResponseAmino;
                fromAminoMsg(object: _299.MsgClaimResponseAminoMsg): _299.MsgClaimResponse;
                fromProtoMsg(message: _299.MsgClaimResponseProtoMsg): _299.MsgClaimResponse;
                toProto(message: _299.MsgClaimResponse): Uint8Array;
                toProtoMsg(message: _299.MsgClaimResponse): _299.MsgClaimResponseProtoMsg;
            };
            QueryModuleAccountBalanceRequest: {
                typeUrl: string;
                encode(_: _298.QueryModuleAccountBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _298.QueryModuleAccountBalanceRequest;
                fromPartial(_: Partial<_298.QueryModuleAccountBalanceRequest>): _298.QueryModuleAccountBalanceRequest;
                fromAmino(_: _298.QueryModuleAccountBalanceRequestAmino): _298.QueryModuleAccountBalanceRequest;
                toAmino(_: _298.QueryModuleAccountBalanceRequest): _298.QueryModuleAccountBalanceRequestAmino;
                fromAminoMsg(object: _298.QueryModuleAccountBalanceRequestAminoMsg): _298.QueryModuleAccountBalanceRequest;
                fromProtoMsg(message: _298.QueryModuleAccountBalanceRequestProtoMsg): _298.QueryModuleAccountBalanceRequest;
                toProto(message: _298.QueryModuleAccountBalanceRequest): Uint8Array;
                toProtoMsg(message: _298.QueryModuleAccountBalanceRequest): _298.QueryModuleAccountBalanceRequestProtoMsg;
            };
            QueryModuleAccountBalanceResponse: {
                typeUrl: string;
                encode(message: _298.QueryModuleAccountBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _298.QueryModuleAccountBalanceResponse;
                fromPartial(object: Partial<_298.QueryModuleAccountBalanceResponse>): _298.QueryModuleAccountBalanceResponse;
                fromAmino(object: _298.QueryModuleAccountBalanceResponseAmino): _298.QueryModuleAccountBalanceResponse;
                toAmino(message: _298.QueryModuleAccountBalanceResponse): _298.QueryModuleAccountBalanceResponseAmino;
                fromAminoMsg(object: _298.QueryModuleAccountBalanceResponseAminoMsg): _298.QueryModuleAccountBalanceResponse;
                fromProtoMsg(message: _298.QueryModuleAccountBalanceResponseProtoMsg): _298.QueryModuleAccountBalanceResponse;
                toProto(message: _298.QueryModuleAccountBalanceResponse): Uint8Array;
                toProtoMsg(message: _298.QueryModuleAccountBalanceResponse): _298.QueryModuleAccountBalanceResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _298.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _298.QueryParamsRequest;
                fromPartial(_: Partial<_298.QueryParamsRequest>): _298.QueryParamsRequest;
                fromAmino(_: _298.QueryParamsRequestAmino): _298.QueryParamsRequest;
                toAmino(_: _298.QueryParamsRequest): _298.QueryParamsRequestAmino;
                fromAminoMsg(object: _298.QueryParamsRequestAminoMsg): _298.QueryParamsRequest;
                fromProtoMsg(message: _298.QueryParamsRequestProtoMsg): _298.QueryParamsRequest;
                toProto(message: _298.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _298.QueryParamsRequest): _298.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _298.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _298.QueryParamsResponse;
                fromPartial(object: Partial<_298.QueryParamsResponse>): _298.QueryParamsResponse;
                fromAmino(object: _298.QueryParamsResponseAmino): _298.QueryParamsResponse;
                toAmino(message: _298.QueryParamsResponse): _298.QueryParamsResponseAmino;
                fromAminoMsg(object: _298.QueryParamsResponseAminoMsg): _298.QueryParamsResponse;
                fromProtoMsg(message: _298.QueryParamsResponseProtoMsg): _298.QueryParamsResponse;
                toProto(message: _298.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _298.QueryParamsResponse): _298.QueryParamsResponseProtoMsg;
            };
            QueryClaimRecordRequest: {
                typeUrl: string;
                encode(message: _298.QueryClaimRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _298.QueryClaimRecordRequest;
                fromPartial(object: Partial<_298.QueryClaimRecordRequest>): _298.QueryClaimRecordRequest;
                fromAmino(object: _298.QueryClaimRecordRequestAmino): _298.QueryClaimRecordRequest;
                toAmino(message: _298.QueryClaimRecordRequest): _298.QueryClaimRecordRequestAmino;
                fromAminoMsg(object: _298.QueryClaimRecordRequestAminoMsg): _298.QueryClaimRecordRequest;
                fromProtoMsg(message: _298.QueryClaimRecordRequestProtoMsg): _298.QueryClaimRecordRequest;
                toProto(message: _298.QueryClaimRecordRequest): Uint8Array;
                toProtoMsg(message: _298.QueryClaimRecordRequest): _298.QueryClaimRecordRequestProtoMsg;
            };
            QueryClaimRecordResponse: {
                typeUrl: string;
                encode(message: _298.QueryClaimRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _298.QueryClaimRecordResponse;
                fromPartial(object: Partial<_298.QueryClaimRecordResponse>): _298.QueryClaimRecordResponse;
                fromAmino(object: _298.QueryClaimRecordResponseAmino): _298.QueryClaimRecordResponse;
                toAmino(message: _298.QueryClaimRecordResponse): _298.QueryClaimRecordResponseAmino;
                fromAminoMsg(object: _298.QueryClaimRecordResponseAminoMsg): _298.QueryClaimRecordResponse;
                fromProtoMsg(message: _298.QueryClaimRecordResponseProtoMsg): _298.QueryClaimRecordResponse;
                toProto(message: _298.QueryClaimRecordResponse): Uint8Array;
                toProtoMsg(message: _298.QueryClaimRecordResponse): _298.QueryClaimRecordResponseProtoMsg;
            };
            QueryClaimableForActionRequest: {
                typeUrl: string;
                encode(message: _298.QueryClaimableForActionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _298.QueryClaimableForActionRequest;
                fromPartial(object: Partial<_298.QueryClaimableForActionRequest>): _298.QueryClaimableForActionRequest;
                fromAmino(object: _298.QueryClaimableForActionRequestAmino): _298.QueryClaimableForActionRequest;
                toAmino(message: _298.QueryClaimableForActionRequest): _298.QueryClaimableForActionRequestAmino;
                fromAminoMsg(object: _298.QueryClaimableForActionRequestAminoMsg): _298.QueryClaimableForActionRequest;
                fromProtoMsg(message: _298.QueryClaimableForActionRequestProtoMsg): _298.QueryClaimableForActionRequest;
                toProto(message: _298.QueryClaimableForActionRequest): Uint8Array;
                toProtoMsg(message: _298.QueryClaimableForActionRequest): _298.QueryClaimableForActionRequestProtoMsg;
            };
            QueryClaimableForActionResponse: {
                typeUrl: string;
                encode(message: _298.QueryClaimableForActionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _298.QueryClaimableForActionResponse;
                fromPartial(object: Partial<_298.QueryClaimableForActionResponse>): _298.QueryClaimableForActionResponse;
                fromAmino(object: _298.QueryClaimableForActionResponseAmino): _298.QueryClaimableForActionResponse;
                toAmino(message: _298.QueryClaimableForActionResponse): _298.QueryClaimableForActionResponseAmino;
                fromAminoMsg(object: _298.QueryClaimableForActionResponseAminoMsg): _298.QueryClaimableForActionResponse;
                fromProtoMsg(message: _298.QueryClaimableForActionResponseProtoMsg): _298.QueryClaimableForActionResponse;
                toProto(message: _298.QueryClaimableForActionResponse): Uint8Array;
                toProtoMsg(message: _298.QueryClaimableForActionResponse): _298.QueryClaimableForActionResponseProtoMsg;
            };
            QueryTotalClaimableRequest: {
                typeUrl: string;
                encode(message: _298.QueryTotalClaimableRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _298.QueryTotalClaimableRequest;
                fromPartial(object: Partial<_298.QueryTotalClaimableRequest>): _298.QueryTotalClaimableRequest;
                fromAmino(object: _298.QueryTotalClaimableRequestAmino): _298.QueryTotalClaimableRequest;
                toAmino(message: _298.QueryTotalClaimableRequest): _298.QueryTotalClaimableRequestAmino;
                fromAminoMsg(object: _298.QueryTotalClaimableRequestAminoMsg): _298.QueryTotalClaimableRequest;
                fromProtoMsg(message: _298.QueryTotalClaimableRequestProtoMsg): _298.QueryTotalClaimableRequest;
                toProto(message: _298.QueryTotalClaimableRequest): Uint8Array;
                toProtoMsg(message: _298.QueryTotalClaimableRequest): _298.QueryTotalClaimableRequestProtoMsg;
            };
            QueryTotalClaimableResponse: {
                typeUrl: string;
                encode(message: _298.QueryTotalClaimableResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _298.QueryTotalClaimableResponse;
                fromPartial(object: Partial<_298.QueryTotalClaimableResponse>): _298.QueryTotalClaimableResponse;
                fromAmino(object: _298.QueryTotalClaimableResponseAmino): _298.QueryTotalClaimableResponse;
                toAmino(message: _298.QueryTotalClaimableResponse): _298.QueryTotalClaimableResponseAmino;
                fromAminoMsg(object: _298.QueryTotalClaimableResponseAminoMsg): _298.QueryTotalClaimableResponse;
                fromProtoMsg(message: _298.QueryTotalClaimableResponseProtoMsg): _298.QueryTotalClaimableResponse;
                toProto(message: _298.QueryTotalClaimableResponse): Uint8Array;
                toProtoMsg(message: _298.QueryTotalClaimableResponse): _298.QueryTotalClaimableResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _297.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _297.Params;
                fromPartial(object: Partial<_297.Params>): _297.Params;
                fromAmino(object: _297.ParamsAmino): _297.Params;
                toAmino(message: _297.Params): _297.ParamsAmino;
                fromAminoMsg(object: _297.ParamsAminoMsg): _297.Params;
                fromProtoMsg(message: _297.ParamsProtoMsg): _297.Params;
                toProto(message: _297.Params): Uint8Array;
                toProtoMsg(message: _297.Params): _297.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _296.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _296.GenesisState;
                fromPartial(object: Partial<_296.GenesisState>): _296.GenesisState;
                fromAmino(object: _296.GenesisStateAmino): _296.GenesisState;
                toAmino(message: _296.GenesisState): _296.GenesisStateAmino;
                fromAminoMsg(object: _296.GenesisStateAminoMsg): _296.GenesisState;
                fromProtoMsg(message: _296.GenesisStateProtoMsg): _296.GenesisState;
                toProto(message: _296.GenesisState): Uint8Array;
                toProtoMsg(message: _296.GenesisState): _296.GenesisStateProtoMsg;
            };
            ClaimRecord: {
                typeUrl: string;
                encode(message: _295.ClaimRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _295.ClaimRecord;
                fromPartial(object: Partial<_295.ClaimRecord>): _295.ClaimRecord;
                fromAmino(object: _295.ClaimRecordAmino): _295.ClaimRecord;
                toAmino(message: _295.ClaimRecord): _295.ClaimRecordAmino;
                fromAminoMsg(object: _295.ClaimRecordAminoMsg): _295.ClaimRecord;
                fromProtoMsg(message: _295.ClaimRecordProtoMsg): _295.ClaimRecord;
                toProto(message: _295.ClaimRecord): Uint8Array;
                toProtoMsg(message: _295.ClaimRecord): _295.ClaimRecordProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/tx.rpc.msg").MsgClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                group: {
                    v1: import("../cosmos/group/v1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                vesting: {
                    v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            passage3d: {
                claim: {
                    v1beta1: _552.MsgClientImpl;
                };
            };
        }>;
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
            passage3d: {
                claim: {
                    v1beta1: {
                        moduleAccountBalance(request?: _298.QueryModuleAccountBalanceRequest): Promise<_298.QueryModuleAccountBalanceResponse>;
                        params(request?: _298.QueryParamsRequest): Promise<_298.QueryParamsResponse>;
                        claimRecord(request: _298.QueryClaimRecordRequest): Promise<_298.QueryClaimRecordResponse>;
                        claimableForAction(request: _298.QueryClaimableForActionRequest): Promise<_298.QueryClaimableForActionResponse>;
                        totalClaimable(request: _298.QueryTotalClaimableRequest): Promise<_298.QueryTotalClaimableResponse>;
                    };
                };
            };
        }>;
    };
}
