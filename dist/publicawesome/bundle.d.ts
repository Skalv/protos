import * as _339 from "../stargaze/alloc/v1beta1/genesis";
import * as _340 from "../stargaze/alloc/v1beta1/params";
import * as _341 from "../stargaze/alloc/v1beta1/query";
import * as _342 from "../stargaze/alloc/v1beta1/tx";
import * as _343 from "../stargaze/claim/v1beta1/claim_record";
import * as _344 from "../stargaze/claim/v1beta1/genesis";
import * as _345 from "../stargaze/claim/v1beta1/params";
import * as _346 from "../stargaze/claim/v1beta1/query";
import * as _347 from "../stargaze/claim/v1beta1/tx";
import * as _586 from "../stargaze/alloc/v1beta1/query.rpc.Query";
import * as _587 from "../stargaze/claim/v1beta1/query.rpc.Query";
import * as _588 from "../stargaze/alloc/v1beta1/tx.rpc.msg";
import * as _589 from "../stargaze/claim/v1beta1/tx.rpc.msg";
export declare namespace publicawesome {
    namespace stargaze {
        namespace alloc {
            const v1beta1: {
                MsgClientImpl: typeof _588.MsgClientImpl;
                QueryClientImpl: typeof _586.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    params(request?: _341.QueryParamsRequest): Promise<_341.QueryParamsResponse>;
                };
                registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createVestingAccount(value: _342.MsgCreateVestingAccount): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createVestingAccount(value: _342.MsgCreateVestingAccount): {
                            typeUrl: string;
                            value: _342.MsgCreateVestingAccount;
                        };
                    };
                    fromPartial: {
                        createVestingAccount(value: _342.MsgCreateVestingAccount): {
                            typeUrl: string;
                            value: _342.MsgCreateVestingAccount;
                        };
                    };
                };
                AminoConverter: {
                    "/publicawesome.stargaze.alloc.v1beta1.MsgCreateVestingAccount": {
                        aminoType: string;
                        toAmino: (message: _342.MsgCreateVestingAccount) => _342.MsgCreateVestingAccountAmino;
                        fromAmino: (object: _342.MsgCreateVestingAccountAmino) => _342.MsgCreateVestingAccount;
                    };
                };
                MsgCreateVestingAccount: {
                    typeUrl: string;
                    encode(message: _342.MsgCreateVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _342.MsgCreateVestingAccount;
                    fromPartial(object: Partial<_342.MsgCreateVestingAccount>): _342.MsgCreateVestingAccount;
                    fromAmino(object: _342.MsgCreateVestingAccountAmino): _342.MsgCreateVestingAccount;
                    toAmino(message: _342.MsgCreateVestingAccount): _342.MsgCreateVestingAccountAmino;
                    fromAminoMsg(object: _342.MsgCreateVestingAccountAminoMsg): _342.MsgCreateVestingAccount;
                    fromProtoMsg(message: _342.MsgCreateVestingAccountProtoMsg): _342.MsgCreateVestingAccount;
                    toProto(message: _342.MsgCreateVestingAccount): Uint8Array;
                    toProtoMsg(message: _342.MsgCreateVestingAccount): _342.MsgCreateVestingAccountProtoMsg;
                };
                MsgCreateVestingAccountResponse: {
                    typeUrl: string;
                    encode(_: _342.MsgCreateVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _342.MsgCreateVestingAccountResponse;
                    fromPartial(_: Partial<_342.MsgCreateVestingAccountResponse>): _342.MsgCreateVestingAccountResponse;
                    fromAmino(_: _342.MsgCreateVestingAccountResponseAmino): _342.MsgCreateVestingAccountResponse;
                    toAmino(_: _342.MsgCreateVestingAccountResponse): _342.MsgCreateVestingAccountResponseAmino;
                    fromAminoMsg(object: _342.MsgCreateVestingAccountResponseAminoMsg): _342.MsgCreateVestingAccountResponse;
                    fromProtoMsg(message: _342.MsgCreateVestingAccountResponseProtoMsg): _342.MsgCreateVestingAccountResponse;
                    toProto(message: _342.MsgCreateVestingAccountResponse): Uint8Array;
                    toProtoMsg(message: _342.MsgCreateVestingAccountResponse): _342.MsgCreateVestingAccountResponseProtoMsg;
                };
                QueryParamsRequest: {
                    typeUrl: string;
                    encode(_: _341.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _341.QueryParamsRequest;
                    fromPartial(_: Partial<_341.QueryParamsRequest>): _341.QueryParamsRequest;
                    fromAmino(_: _341.QueryParamsRequestAmino): _341.QueryParamsRequest;
                    toAmino(_: _341.QueryParamsRequest): _341.QueryParamsRequestAmino;
                    fromAminoMsg(object: _341.QueryParamsRequestAminoMsg): _341.QueryParamsRequest;
                    fromProtoMsg(message: _341.QueryParamsRequestProtoMsg): _341.QueryParamsRequest;
                    toProto(message: _341.QueryParamsRequest): Uint8Array;
                    toProtoMsg(message: _341.QueryParamsRequest): _341.QueryParamsRequestProtoMsg;
                };
                QueryParamsResponse: {
                    typeUrl: string;
                    encode(message: _341.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _341.QueryParamsResponse;
                    fromPartial(object: Partial<_341.QueryParamsResponse>): _341.QueryParamsResponse;
                    fromAmino(object: _341.QueryParamsResponseAmino): _341.QueryParamsResponse;
                    toAmino(message: _341.QueryParamsResponse): _341.QueryParamsResponseAmino;
                    fromAminoMsg(object: _341.QueryParamsResponseAminoMsg): _341.QueryParamsResponse;
                    fromProtoMsg(message: _341.QueryParamsResponseProtoMsg): _341.QueryParamsResponse;
                    toProto(message: _341.QueryParamsResponse): Uint8Array;
                    toProtoMsg(message: _341.QueryParamsResponse): _341.QueryParamsResponseProtoMsg;
                };
                WeightedAddress: {
                    typeUrl: string;
                    encode(message: _340.WeightedAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _340.WeightedAddress;
                    fromPartial(object: Partial<_340.WeightedAddress>): _340.WeightedAddress;
                    fromAmino(object: _340.WeightedAddressAmino): _340.WeightedAddress;
                    toAmino(message: _340.WeightedAddress): _340.WeightedAddressAmino;
                    fromAminoMsg(object: _340.WeightedAddressAminoMsg): _340.WeightedAddress;
                    fromProtoMsg(message: _340.WeightedAddressProtoMsg): _340.WeightedAddress;
                    toProto(message: _340.WeightedAddress): Uint8Array;
                    toProtoMsg(message: _340.WeightedAddress): _340.WeightedAddressProtoMsg;
                };
                DistributionProportions: {
                    typeUrl: string;
                    encode(message: _340.DistributionProportions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _340.DistributionProportions;
                    fromPartial(object: Partial<_340.DistributionProportions>): _340.DistributionProportions;
                    fromAmino(object: _340.DistributionProportionsAmino): _340.DistributionProportions;
                    toAmino(message: _340.DistributionProportions): _340.DistributionProportionsAmino;
                    fromAminoMsg(object: _340.DistributionProportionsAminoMsg): _340.DistributionProportions;
                    fromProtoMsg(message: _340.DistributionProportionsProtoMsg): _340.DistributionProportions;
                    toProto(message: _340.DistributionProportions): Uint8Array;
                    toProtoMsg(message: _340.DistributionProportions): _340.DistributionProportionsProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _340.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _340.Params;
                    fromPartial(object: Partial<_340.Params>): _340.Params;
                    fromAmino(object: _340.ParamsAmino): _340.Params;
                    toAmino(message: _340.Params): _340.ParamsAmino;
                    fromAminoMsg(object: _340.ParamsAminoMsg): _340.Params;
                    fromProtoMsg(message: _340.ParamsProtoMsg): _340.Params;
                    toProto(message: _340.Params): Uint8Array;
                    toProtoMsg(message: _340.Params): _340.ParamsProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _339.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _339.GenesisState;
                    fromPartial(object: Partial<_339.GenesisState>): _339.GenesisState;
                    fromAmino(object: _339.GenesisStateAmino): _339.GenesisState;
                    toAmino(message: _339.GenesisState): _339.GenesisStateAmino;
                    fromAminoMsg(object: _339.GenesisStateAminoMsg): _339.GenesisState;
                    fromProtoMsg(message: _339.GenesisStateProtoMsg): _339.GenesisState;
                    toProto(message: _339.GenesisState): Uint8Array;
                    toProtoMsg(message: _339.GenesisState): _339.GenesisStateProtoMsg;
                };
            };
        }
        namespace claim {
            const v1beta1: {
                MsgClientImpl: typeof _589.MsgClientImpl;
                QueryClientImpl: typeof _587.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    moduleAccountBalance(request?: _346.QueryModuleAccountBalanceRequest): Promise<_346.QueryModuleAccountBalanceResponse>;
                    params(request?: _346.QueryParamsRequest): Promise<_346.QueryParamsResponse>;
                    claimRecord(request: _346.QueryClaimRecordRequest): Promise<_346.QueryClaimRecordResponse>;
                    claimableForAction(request: _346.QueryClaimableForActionRequest): Promise<_346.QueryClaimableForActionResponse>;
                    totalClaimable(request: _346.QueryTotalClaimableRequest): Promise<_346.QueryTotalClaimableResponse>;
                };
                registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        initialClaim(value: _347.MsgInitialClaim): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        claimFor(value: _347.MsgClaimFor): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        initialClaim(value: _347.MsgInitialClaim): {
                            typeUrl: string;
                            value: _347.MsgInitialClaim;
                        };
                        claimFor(value: _347.MsgClaimFor): {
                            typeUrl: string;
                            value: _347.MsgClaimFor;
                        };
                    };
                    fromPartial: {
                        initialClaim(value: _347.MsgInitialClaim): {
                            typeUrl: string;
                            value: _347.MsgInitialClaim;
                        };
                        claimFor(value: _347.MsgClaimFor): {
                            typeUrl: string;
                            value: _347.MsgClaimFor;
                        };
                    };
                };
                AminoConverter: {
                    "/publicawesome.stargaze.claim.v1beta1.MsgInitialClaim": {
                        aminoType: string;
                        toAmino: (message: _347.MsgInitialClaim) => _347.MsgInitialClaimAmino;
                        fromAmino: (object: _347.MsgInitialClaimAmino) => _347.MsgInitialClaim;
                    };
                    "/publicawesome.stargaze.claim.v1beta1.MsgClaimFor": {
                        aminoType: string;
                        toAmino: (message: _347.MsgClaimFor) => _347.MsgClaimForAmino;
                        fromAmino: (object: _347.MsgClaimForAmino) => _347.MsgClaimFor;
                    };
                };
                MsgInitialClaim: {
                    typeUrl: string;
                    encode(message: _347.MsgInitialClaim, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _347.MsgInitialClaim;
                    fromPartial(object: Partial<_347.MsgInitialClaim>): _347.MsgInitialClaim;
                    fromAmino(object: _347.MsgInitialClaimAmino): _347.MsgInitialClaim;
                    toAmino(message: _347.MsgInitialClaim): _347.MsgInitialClaimAmino;
                    fromAminoMsg(object: _347.MsgInitialClaimAminoMsg): _347.MsgInitialClaim;
                    fromProtoMsg(message: _347.MsgInitialClaimProtoMsg): _347.MsgInitialClaim;
                    toProto(message: _347.MsgInitialClaim): Uint8Array;
                    toProtoMsg(message: _347.MsgInitialClaim): _347.MsgInitialClaimProtoMsg;
                };
                MsgInitialClaimResponse: {
                    typeUrl: string;
                    encode(message: _347.MsgInitialClaimResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _347.MsgInitialClaimResponse;
                    fromPartial(object: Partial<_347.MsgInitialClaimResponse>): _347.MsgInitialClaimResponse;
                    fromAmino(object: _347.MsgInitialClaimResponseAmino): _347.MsgInitialClaimResponse;
                    toAmino(message: _347.MsgInitialClaimResponse): _347.MsgInitialClaimResponseAmino;
                    fromAminoMsg(object: _347.MsgInitialClaimResponseAminoMsg): _347.MsgInitialClaimResponse;
                    fromProtoMsg(message: _347.MsgInitialClaimResponseProtoMsg): _347.MsgInitialClaimResponse;
                    toProto(message: _347.MsgInitialClaimResponse): Uint8Array;
                    toProtoMsg(message: _347.MsgInitialClaimResponse): _347.MsgInitialClaimResponseProtoMsg;
                };
                MsgClaimFor: {
                    typeUrl: string;
                    encode(message: _347.MsgClaimFor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _347.MsgClaimFor;
                    fromPartial(object: Partial<_347.MsgClaimFor>): _347.MsgClaimFor;
                    fromAmino(object: _347.MsgClaimForAmino): _347.MsgClaimFor;
                    toAmino(message: _347.MsgClaimFor): _347.MsgClaimForAmino;
                    fromAminoMsg(object: _347.MsgClaimForAminoMsg): _347.MsgClaimFor;
                    fromProtoMsg(message: _347.MsgClaimForProtoMsg): _347.MsgClaimFor;
                    toProto(message: _347.MsgClaimFor): Uint8Array;
                    toProtoMsg(message: _347.MsgClaimFor): _347.MsgClaimForProtoMsg;
                };
                MsgClaimForResponse: {
                    typeUrl: string;
                    encode(message: _347.MsgClaimForResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _347.MsgClaimForResponse;
                    fromPartial(object: Partial<_347.MsgClaimForResponse>): _347.MsgClaimForResponse;
                    fromAmino(object: _347.MsgClaimForResponseAmino): _347.MsgClaimForResponse;
                    toAmino(message: _347.MsgClaimForResponse): _347.MsgClaimForResponseAmino;
                    fromAminoMsg(object: _347.MsgClaimForResponseAminoMsg): _347.MsgClaimForResponse;
                    fromProtoMsg(message: _347.MsgClaimForResponseProtoMsg): _347.MsgClaimForResponse;
                    toProto(message: _347.MsgClaimForResponse): Uint8Array;
                    toProtoMsg(message: _347.MsgClaimForResponse): _347.MsgClaimForResponseProtoMsg;
                };
                QueryModuleAccountBalanceRequest: {
                    typeUrl: string;
                    encode(_: _346.QueryModuleAccountBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _346.QueryModuleAccountBalanceRequest;
                    fromPartial(_: Partial<_346.QueryModuleAccountBalanceRequest>): _346.QueryModuleAccountBalanceRequest;
                    fromAmino(_: _346.QueryModuleAccountBalanceRequestAmino): _346.QueryModuleAccountBalanceRequest;
                    toAmino(_: _346.QueryModuleAccountBalanceRequest): _346.QueryModuleAccountBalanceRequestAmino;
                    fromAminoMsg(object: _346.QueryModuleAccountBalanceRequestAminoMsg): _346.QueryModuleAccountBalanceRequest;
                    fromProtoMsg(message: _346.QueryModuleAccountBalanceRequestProtoMsg): _346.QueryModuleAccountBalanceRequest;
                    toProto(message: _346.QueryModuleAccountBalanceRequest): Uint8Array;
                    toProtoMsg(message: _346.QueryModuleAccountBalanceRequest): _346.QueryModuleAccountBalanceRequestProtoMsg;
                };
                QueryModuleAccountBalanceResponse: {
                    typeUrl: string;
                    encode(message: _346.QueryModuleAccountBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _346.QueryModuleAccountBalanceResponse;
                    fromPartial(object: Partial<_346.QueryModuleAccountBalanceResponse>): _346.QueryModuleAccountBalanceResponse;
                    fromAmino(object: _346.QueryModuleAccountBalanceResponseAmino): _346.QueryModuleAccountBalanceResponse;
                    toAmino(message: _346.QueryModuleAccountBalanceResponse): _346.QueryModuleAccountBalanceResponseAmino;
                    fromAminoMsg(object: _346.QueryModuleAccountBalanceResponseAminoMsg): _346.QueryModuleAccountBalanceResponse;
                    fromProtoMsg(message: _346.QueryModuleAccountBalanceResponseProtoMsg): _346.QueryModuleAccountBalanceResponse;
                    toProto(message: _346.QueryModuleAccountBalanceResponse): Uint8Array;
                    toProtoMsg(message: _346.QueryModuleAccountBalanceResponse): _346.QueryModuleAccountBalanceResponseProtoMsg;
                };
                QueryParamsRequest: {
                    typeUrl: string;
                    encode(_: _346.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _346.QueryParamsRequest;
                    fromPartial(_: Partial<_346.QueryParamsRequest>): _346.QueryParamsRequest;
                    fromAmino(_: _346.QueryParamsRequestAmino): _346.QueryParamsRequest;
                    toAmino(_: _346.QueryParamsRequest): _346.QueryParamsRequestAmino;
                    fromAminoMsg(object: _346.QueryParamsRequestAminoMsg): _346.QueryParamsRequest;
                    fromProtoMsg(message: _346.QueryParamsRequestProtoMsg): _346.QueryParamsRequest;
                    toProto(message: _346.QueryParamsRequest): Uint8Array;
                    toProtoMsg(message: _346.QueryParamsRequest): _346.QueryParamsRequestProtoMsg;
                };
                QueryParamsResponse: {
                    typeUrl: string;
                    encode(message: _346.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _346.QueryParamsResponse;
                    fromPartial(object: Partial<_346.QueryParamsResponse>): _346.QueryParamsResponse;
                    fromAmino(object: _346.QueryParamsResponseAmino): _346.QueryParamsResponse;
                    toAmino(message: _346.QueryParamsResponse): _346.QueryParamsResponseAmino;
                    fromAminoMsg(object: _346.QueryParamsResponseAminoMsg): _346.QueryParamsResponse;
                    fromProtoMsg(message: _346.QueryParamsResponseProtoMsg): _346.QueryParamsResponse;
                    toProto(message: _346.QueryParamsResponse): Uint8Array;
                    toProtoMsg(message: _346.QueryParamsResponse): _346.QueryParamsResponseProtoMsg;
                };
                QueryClaimRecordRequest: {
                    typeUrl: string;
                    encode(message: _346.QueryClaimRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _346.QueryClaimRecordRequest;
                    fromPartial(object: Partial<_346.QueryClaimRecordRequest>): _346.QueryClaimRecordRequest;
                    fromAmino(object: _346.QueryClaimRecordRequestAmino): _346.QueryClaimRecordRequest;
                    toAmino(message: _346.QueryClaimRecordRequest): _346.QueryClaimRecordRequestAmino;
                    fromAminoMsg(object: _346.QueryClaimRecordRequestAminoMsg): _346.QueryClaimRecordRequest;
                    fromProtoMsg(message: _346.QueryClaimRecordRequestProtoMsg): _346.QueryClaimRecordRequest;
                    toProto(message: _346.QueryClaimRecordRequest): Uint8Array;
                    toProtoMsg(message: _346.QueryClaimRecordRequest): _346.QueryClaimRecordRequestProtoMsg;
                };
                QueryClaimRecordResponse: {
                    typeUrl: string;
                    encode(message: _346.QueryClaimRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _346.QueryClaimRecordResponse;
                    fromPartial(object: Partial<_346.QueryClaimRecordResponse>): _346.QueryClaimRecordResponse;
                    fromAmino(object: _346.QueryClaimRecordResponseAmino): _346.QueryClaimRecordResponse;
                    toAmino(message: _346.QueryClaimRecordResponse): _346.QueryClaimRecordResponseAmino;
                    fromAminoMsg(object: _346.QueryClaimRecordResponseAminoMsg): _346.QueryClaimRecordResponse;
                    fromProtoMsg(message: _346.QueryClaimRecordResponseProtoMsg): _346.QueryClaimRecordResponse;
                    toProto(message: _346.QueryClaimRecordResponse): Uint8Array;
                    toProtoMsg(message: _346.QueryClaimRecordResponse): _346.QueryClaimRecordResponseProtoMsg;
                };
                QueryClaimableForActionRequest: {
                    typeUrl: string;
                    encode(message: _346.QueryClaimableForActionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _346.QueryClaimableForActionRequest;
                    fromPartial(object: Partial<_346.QueryClaimableForActionRequest>): _346.QueryClaimableForActionRequest;
                    fromAmino(object: _346.QueryClaimableForActionRequestAmino): _346.QueryClaimableForActionRequest;
                    toAmino(message: _346.QueryClaimableForActionRequest): _346.QueryClaimableForActionRequestAmino;
                    fromAminoMsg(object: _346.QueryClaimableForActionRequestAminoMsg): _346.QueryClaimableForActionRequest;
                    fromProtoMsg(message: _346.QueryClaimableForActionRequestProtoMsg): _346.QueryClaimableForActionRequest;
                    toProto(message: _346.QueryClaimableForActionRequest): Uint8Array;
                    toProtoMsg(message: _346.QueryClaimableForActionRequest): _346.QueryClaimableForActionRequestProtoMsg;
                };
                QueryClaimableForActionResponse: {
                    typeUrl: string;
                    encode(message: _346.QueryClaimableForActionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _346.QueryClaimableForActionResponse;
                    fromPartial(object: Partial<_346.QueryClaimableForActionResponse>): _346.QueryClaimableForActionResponse;
                    fromAmino(object: _346.QueryClaimableForActionResponseAmino): _346.QueryClaimableForActionResponse;
                    toAmino(message: _346.QueryClaimableForActionResponse): _346.QueryClaimableForActionResponseAmino;
                    fromAminoMsg(object: _346.QueryClaimableForActionResponseAminoMsg): _346.QueryClaimableForActionResponse;
                    fromProtoMsg(message: _346.QueryClaimableForActionResponseProtoMsg): _346.QueryClaimableForActionResponse;
                    toProto(message: _346.QueryClaimableForActionResponse): Uint8Array;
                    toProtoMsg(message: _346.QueryClaimableForActionResponse): _346.QueryClaimableForActionResponseProtoMsg;
                };
                QueryTotalClaimableRequest: {
                    typeUrl: string;
                    encode(message: _346.QueryTotalClaimableRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _346.QueryTotalClaimableRequest;
                    fromPartial(object: Partial<_346.QueryTotalClaimableRequest>): _346.QueryTotalClaimableRequest;
                    fromAmino(object: _346.QueryTotalClaimableRequestAmino): _346.QueryTotalClaimableRequest;
                    toAmino(message: _346.QueryTotalClaimableRequest): _346.QueryTotalClaimableRequestAmino;
                    fromAminoMsg(object: _346.QueryTotalClaimableRequestAminoMsg): _346.QueryTotalClaimableRequest;
                    fromProtoMsg(message: _346.QueryTotalClaimableRequestProtoMsg): _346.QueryTotalClaimableRequest;
                    toProto(message: _346.QueryTotalClaimableRequest): Uint8Array;
                    toProtoMsg(message: _346.QueryTotalClaimableRequest): _346.QueryTotalClaimableRequestProtoMsg;
                };
                QueryTotalClaimableResponse: {
                    typeUrl: string;
                    encode(message: _346.QueryTotalClaimableResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _346.QueryTotalClaimableResponse;
                    fromPartial(object: Partial<_346.QueryTotalClaimableResponse>): _346.QueryTotalClaimableResponse;
                    fromAmino(object: _346.QueryTotalClaimableResponseAmino): _346.QueryTotalClaimableResponse;
                    toAmino(message: _346.QueryTotalClaimableResponse): _346.QueryTotalClaimableResponseAmino;
                    fromAminoMsg(object: _346.QueryTotalClaimableResponseAminoMsg): _346.QueryTotalClaimableResponse;
                    fromProtoMsg(message: _346.QueryTotalClaimableResponseProtoMsg): _346.QueryTotalClaimableResponse;
                    toProto(message: _346.QueryTotalClaimableResponse): Uint8Array;
                    toProtoMsg(message: _346.QueryTotalClaimableResponse): _346.QueryTotalClaimableResponseProtoMsg;
                };
                ClaimAuthorization: {
                    typeUrl: string;
                    encode(message: _345.ClaimAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _345.ClaimAuthorization;
                    fromPartial(object: Partial<_345.ClaimAuthorization>): _345.ClaimAuthorization;
                    fromAmino(object: _345.ClaimAuthorizationAmino): _345.ClaimAuthorization;
                    toAmino(message: _345.ClaimAuthorization): _345.ClaimAuthorizationAmino;
                    fromAminoMsg(object: _345.ClaimAuthorizationAminoMsg): _345.ClaimAuthorization;
                    fromProtoMsg(message: _345.ClaimAuthorizationProtoMsg): _345.ClaimAuthorization;
                    toProto(message: _345.ClaimAuthorization): Uint8Array;
                    toProtoMsg(message: _345.ClaimAuthorization): _345.ClaimAuthorizationProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _345.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _345.Params;
                    fromPartial(object: Partial<_345.Params>): _345.Params;
                    fromAmino(object: _345.ParamsAmino): _345.Params;
                    toAmino(message: _345.Params): _345.ParamsAmino;
                    fromAminoMsg(object: _345.ParamsAminoMsg): _345.Params;
                    fromProtoMsg(message: _345.ParamsProtoMsg): _345.Params;
                    toProto(message: _345.Params): Uint8Array;
                    toProtoMsg(message: _345.Params): _345.ParamsProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _344.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _344.GenesisState;
                    fromPartial(object: Partial<_344.GenesisState>): _344.GenesisState;
                    fromAmino(object: _344.GenesisStateAmino): _344.GenesisState;
                    toAmino(message: _344.GenesisState): _344.GenesisStateAmino;
                    fromAminoMsg(object: _344.GenesisStateAminoMsg): _344.GenesisState;
                    fromProtoMsg(message: _344.GenesisStateProtoMsg): _344.GenesisState;
                    toProto(message: _344.GenesisState): Uint8Array;
                    toProtoMsg(message: _344.GenesisState): _344.GenesisStateProtoMsg;
                };
                actionFromJSON(object: any): _343.Action;
                actionToJSON(object: _343.Action): string;
                Action: typeof _343.Action;
                ActionSDKType: typeof _343.Action;
                ActionAmino: typeof _343.Action;
                ClaimRecord: {
                    typeUrl: string;
                    encode(message: _343.ClaimRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _343.ClaimRecord;
                    fromPartial(object: Partial<_343.ClaimRecord>): _343.ClaimRecord;
                    fromAmino(object: _343.ClaimRecordAmino): _343.ClaimRecord;
                    toAmino(message: _343.ClaimRecord): _343.ClaimRecordAmino;
                    fromAminoMsg(object: _343.ClaimRecordAminoMsg): _343.ClaimRecord;
                    fromProtoMsg(message: _343.ClaimRecordProtoMsg): _343.ClaimRecord;
                    toProto(message: _343.ClaimRecord): Uint8Array;
                    toProtoMsg(message: _343.ClaimRecord): _343.ClaimRecordProtoMsg;
                };
            };
        }
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
            publicawesome: {
                stargaze: {
                    alloc: {
                        v1beta1: _588.MsgClientImpl;
                    };
                    claim: {
                        v1beta1: _589.MsgClientImpl;
                    };
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
            publicawesome: {
                stargaze: {
                    alloc: {
                        v1beta1: {
                            params(request?: _341.QueryParamsRequest): Promise<_341.QueryParamsResponse>;
                        };
                    };
                    claim: {
                        v1beta1: {
                            moduleAccountBalance(request?: _346.QueryModuleAccountBalanceRequest): Promise<_346.QueryModuleAccountBalanceResponse>;
                            params(request?: _346.QueryParamsRequest): Promise<_346.QueryParamsResponse>;
                            claimRecord(request: _346.QueryClaimRecordRequest): Promise<_346.QueryClaimRecordResponse>;
                            claimableForAction(request: _346.QueryClaimableForActionRequest): Promise<_346.QueryClaimableForActionResponse>;
                            totalClaimable(request: _346.QueryTotalClaimableRequest): Promise<_346.QueryTotalClaimableResponse>;
                        };
                    };
                };
            };
        }>;
    };
}
