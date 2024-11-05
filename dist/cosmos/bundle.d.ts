import * as _81 from "./auth/v1beta1/auth";
import * as _82 from "./auth/v1beta1/genesis";
import * as _83 from "./auth/v1beta1/query";
import * as _84 from "./authz/v1beta1/authz";
import * as _85 from "./authz/v1beta1/event";
import * as _86 from "./authz/v1beta1/genesis";
import * as _87 from "./authz/v1beta1/query";
import * as _88 from "./authz/v1beta1/tx";
import * as _89 from "./bank/v1beta1/authz";
import * as _90 from "./bank/v1beta1/bank";
import * as _91 from "./bank/v1beta1/genesis";
import * as _92 from "./bank/v1beta1/query";
import * as _93 from "./bank/v1beta1/tx";
import * as _94 from "./base/abci/v1beta1/abci";
import * as _95 from "./base/query/v1beta1/pagination";
import * as _96 from "./base/reflection/v2alpha1/reflection";
import * as _97 from "./base/v1beta1/coin";
import * as _98 from "./crypto/ed25519/keys";
import * as _99 from "./crypto/hd/v1/hd";
import * as _100 from "./crypto/keyring/v1/record";
import * as _101 from "./crypto/multisig/keys";
import * as _102 from "./crypto/secp256k1/keys";
import * as _103 from "./crypto/secp256r1/keys";
import * as _104 from "./distribution/v1beta1/distribution";
import * as _105 from "./distribution/v1beta1/genesis";
import * as _106 from "./distribution/v1beta1/query";
import * as _107 from "./distribution/v1beta1/tx";
import * as _108 from "./feegrant/v1beta1/feegrant";
import * as _109 from "./feegrant/v1beta1/genesis";
import * as _110 from "./feegrant/v1beta1/query";
import * as _111 from "./feegrant/v1beta1/tx";
import * as _112 from "./gov/v1/genesis";
import * as _113 from "./gov/v1/gov";
import * as _114 from "./gov/v1/query";
import * as _115 from "./gov/v1/tx";
import * as _116 from "./gov/v1beta1/genesis";
import * as _117 from "./gov/v1beta1/gov";
import * as _118 from "./gov/v1beta1/query";
import * as _119 from "./gov/v1beta1/tx";
import * as _120 from "./group/v1/events";
import * as _121 from "./group/v1/genesis";
import * as _122 from "./group/v1/query";
import * as _123 from "./group/v1/tx";
import * as _124 from "./group/v1/types";
import * as _125 from "./mint/v1beta1/genesis";
import * as _126 from "./mint/v1beta1/mint";
import * as _127 from "./mint/v1beta1/query";
import * as _128 from "./params/v1beta1/params";
import * as _129 from "./params/v1beta1/query";
import * as _130 from "./staking/v1beta1/authz";
import * as _131 from "./staking/v1beta1/genesis";
import * as _132 from "./staking/v1beta1/query";
import * as _133 from "./staking/v1beta1/staking";
import * as _134 from "./staking/v1beta1/tx";
import * as _135 from "./tx/signing/v1beta1/signing";
import * as _136 from "./tx/v1beta1/service";
import * as _137 from "./tx/v1beta1/tx";
import * as _138 from "./upgrade/v1beta1/query";
import * as _139 from "./upgrade/v1beta1/tx";
import * as _140 from "./upgrade/v1beta1/upgrade";
import * as _141 from "./vesting/v1beta1/tx";
import * as _142 from "./vesting/v1beta1/vesting";
import * as _429 from "./auth/v1beta1/query.rpc.Query";
import * as _430 from "./authz/v1beta1/query.rpc.Query";
import * as _431 from "./bank/v1beta1/query.rpc.Query";
import * as _432 from "./distribution/v1beta1/query.rpc.Query";
import * as _433 from "./feegrant/v1beta1/query.rpc.Query";
import * as _434 from "./gov/v1/query.rpc.Query";
import * as _435 from "./gov/v1beta1/query.rpc.Query";
import * as _436 from "./group/v1/query.rpc.Query";
import * as _437 from "./mint/v1beta1/query.rpc.Query";
import * as _438 from "./params/v1beta1/query.rpc.Query";
import * as _439 from "./staking/v1beta1/query.rpc.Query";
import * as _440 from "./tx/v1beta1/service.rpc.Service";
import * as _441 from "./upgrade/v1beta1/query.rpc.Query";
import * as _442 from "./authz/v1beta1/tx.rpc.msg";
import * as _443 from "./bank/v1beta1/tx.rpc.msg";
import * as _444 from "./distribution/v1beta1/tx.rpc.msg";
import * as _445 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _446 from "./gov/v1/tx.rpc.msg";
import * as _447 from "./gov/v1beta1/tx.rpc.msg";
import * as _448 from "./group/v1/tx.rpc.msg";
import * as _449 from "./staking/v1beta1/tx.rpc.msg";
import * as _450 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _451 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _429.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _83.QueryAccountsRequest): Promise<_83.QueryAccountsResponse>;
                account(request: _83.QueryAccountRequest): Promise<_83.QueryAccountResponse>;
                params(request?: _83.QueryParamsRequest): Promise<_83.QueryParamsResponse>;
                moduleAccounts(request?: _83.QueryModuleAccountsRequest): Promise<_83.QueryModuleAccountsResponse>;
                bech32Prefix(request?: _83.Bech32PrefixRequest): Promise<_83.Bech32PrefixResponse>;
                addressBytesToString(request: _83.AddressBytesToStringRequest): Promise<_83.AddressBytesToStringResponse>;
                addressStringToBytes(request: _83.AddressStringToBytesRequest): Promise<_83.AddressStringToBytesResponse>;
            };
            QueryAccountsRequest: {
                typeUrl: string;
                encode(message: _83.QueryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.QueryAccountsRequest;
                fromPartial(object: Partial<_83.QueryAccountsRequest>): _83.QueryAccountsRequest;
                fromAmino(object: _83.QueryAccountsRequestAmino): _83.QueryAccountsRequest;
                toAmino(message: _83.QueryAccountsRequest): _83.QueryAccountsRequestAmino;
                fromAminoMsg(object: _83.QueryAccountsRequestAminoMsg): _83.QueryAccountsRequest;
                toAminoMsg(message: _83.QueryAccountsRequest): _83.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _83.QueryAccountsRequestProtoMsg): _83.QueryAccountsRequest;
                toProto(message: _83.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _83.QueryAccountsRequest): _83.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                typeUrl: string;
                encode(message: _83.QueryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.QueryAccountsResponse;
                fromPartial(object: Partial<_83.QueryAccountsResponse>): _83.QueryAccountsResponse;
                fromAmino(object: _83.QueryAccountsResponseAmino): _83.QueryAccountsResponse;
                toAmino(message: _83.QueryAccountsResponse): _83.QueryAccountsResponseAmino;
                fromAminoMsg(object: _83.QueryAccountsResponseAminoMsg): _83.QueryAccountsResponse;
                toAminoMsg(message: _83.QueryAccountsResponse): _83.QueryAccountsResponseAminoMsg;
                fromProtoMsg(message: _83.QueryAccountsResponseProtoMsg): _83.QueryAccountsResponse;
                toProto(message: _83.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _83.QueryAccountsResponse): _83.QueryAccountsResponseProtoMsg;
            };
            QueryAccountRequest: {
                typeUrl: string;
                encode(message: _83.QueryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.QueryAccountRequest;
                fromPartial(object: Partial<_83.QueryAccountRequest>): _83.QueryAccountRequest;
                fromAmino(object: _83.QueryAccountRequestAmino): _83.QueryAccountRequest;
                toAmino(message: _83.QueryAccountRequest): _83.QueryAccountRequestAmino;
                fromAminoMsg(object: _83.QueryAccountRequestAminoMsg): _83.QueryAccountRequest;
                toAminoMsg(message: _83.QueryAccountRequest): _83.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _83.QueryAccountRequestProtoMsg): _83.QueryAccountRequest;
                toProto(message: _83.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _83.QueryAccountRequest): _83.QueryAccountRequestProtoMsg;
            };
            QueryModuleAccountsRequest: {
                typeUrl: string;
                encode(_: _83.QueryModuleAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.QueryModuleAccountsRequest;
                fromPartial(_: Partial<_83.QueryModuleAccountsRequest>): _83.QueryModuleAccountsRequest;
                fromAmino(_: _83.QueryModuleAccountsRequestAmino): _83.QueryModuleAccountsRequest;
                toAmino(_: _83.QueryModuleAccountsRequest): _83.QueryModuleAccountsRequestAmino;
                fromAminoMsg(object: _83.QueryModuleAccountsRequestAminoMsg): _83.QueryModuleAccountsRequest;
                toAminoMsg(message: _83.QueryModuleAccountsRequest): _83.QueryModuleAccountsRequestAminoMsg;
                fromProtoMsg(message: _83.QueryModuleAccountsRequestProtoMsg): _83.QueryModuleAccountsRequest;
                toProto(message: _83.QueryModuleAccountsRequest): Uint8Array;
                toProtoMsg(message: _83.QueryModuleAccountsRequest): _83.QueryModuleAccountsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _83.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.QueryParamsResponse;
                fromPartial(object: Partial<_83.QueryParamsResponse>): _83.QueryParamsResponse;
                fromAmino(object: _83.QueryParamsResponseAmino): _83.QueryParamsResponse;
                toAmino(message: _83.QueryParamsResponse): _83.QueryParamsResponseAmino;
                fromAminoMsg(object: _83.QueryParamsResponseAminoMsg): _83.QueryParamsResponse;
                toAminoMsg(message: _83.QueryParamsResponse): _83.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _83.QueryParamsResponseProtoMsg): _83.QueryParamsResponse;
                toProto(message: _83.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _83.QueryParamsResponse): _83.QueryParamsResponseProtoMsg;
            };
            QueryAccountResponse: {
                typeUrl: string;
                encode(message: _83.QueryAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.QueryAccountResponse;
                fromPartial(object: Partial<_83.QueryAccountResponse>): _83.QueryAccountResponse;
                fromAmino(object: _83.QueryAccountResponseAmino): _83.QueryAccountResponse;
                toAmino(message: _83.QueryAccountResponse): _83.QueryAccountResponseAmino;
                fromAminoMsg(object: _83.QueryAccountResponseAminoMsg): _83.QueryAccountResponse;
                toAminoMsg(message: _83.QueryAccountResponse): _83.QueryAccountResponseAminoMsg;
                fromProtoMsg(message: _83.QueryAccountResponseProtoMsg): _83.QueryAccountResponse;
                toProto(message: _83.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _83.QueryAccountResponse): _83.QueryAccountResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _83.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.QueryParamsRequest;
                fromPartial(_: Partial<_83.QueryParamsRequest>): _83.QueryParamsRequest;
                fromAmino(_: _83.QueryParamsRequestAmino): _83.QueryParamsRequest;
                toAmino(_: _83.QueryParamsRequest): _83.QueryParamsRequestAmino;
                fromAminoMsg(object: _83.QueryParamsRequestAminoMsg): _83.QueryParamsRequest;
                toAminoMsg(message: _83.QueryParamsRequest): _83.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _83.QueryParamsRequestProtoMsg): _83.QueryParamsRequest;
                toProto(message: _83.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _83.QueryParamsRequest): _83.QueryParamsRequestProtoMsg;
            };
            QueryModuleAccountsResponse: {
                typeUrl: string;
                encode(message: _83.QueryModuleAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.QueryModuleAccountsResponse;
                fromPartial(object: Partial<_83.QueryModuleAccountsResponse>): _83.QueryModuleAccountsResponse;
                fromAmino(object: _83.QueryModuleAccountsResponseAmino): _83.QueryModuleAccountsResponse;
                toAmino(message: _83.QueryModuleAccountsResponse): _83.QueryModuleAccountsResponseAmino;
                fromAminoMsg(object: _83.QueryModuleAccountsResponseAminoMsg): _83.QueryModuleAccountsResponse;
                toAminoMsg(message: _83.QueryModuleAccountsResponse): _83.QueryModuleAccountsResponseAminoMsg;
                fromProtoMsg(message: _83.QueryModuleAccountsResponseProtoMsg): _83.QueryModuleAccountsResponse;
                toProto(message: _83.QueryModuleAccountsResponse): Uint8Array;
                toProtoMsg(message: _83.QueryModuleAccountsResponse): _83.QueryModuleAccountsResponseProtoMsg;
            };
            Bech32PrefixRequest: {
                typeUrl: string;
                encode(_: _83.Bech32PrefixRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.Bech32PrefixRequest;
                fromPartial(_: Partial<_83.Bech32PrefixRequest>): _83.Bech32PrefixRequest;
                fromAmino(_: _83.Bech32PrefixRequestAmino): _83.Bech32PrefixRequest;
                toAmino(_: _83.Bech32PrefixRequest): _83.Bech32PrefixRequestAmino;
                fromAminoMsg(object: _83.Bech32PrefixRequestAminoMsg): _83.Bech32PrefixRequest;
                toAminoMsg(message: _83.Bech32PrefixRequest): _83.Bech32PrefixRequestAminoMsg;
                fromProtoMsg(message: _83.Bech32PrefixRequestProtoMsg): _83.Bech32PrefixRequest;
                toProto(message: _83.Bech32PrefixRequest): Uint8Array;
                toProtoMsg(message: _83.Bech32PrefixRequest): _83.Bech32PrefixRequestProtoMsg;
            };
            Bech32PrefixResponse: {
                typeUrl: string;
                encode(message: _83.Bech32PrefixResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.Bech32PrefixResponse;
                fromPartial(object: Partial<_83.Bech32PrefixResponse>): _83.Bech32PrefixResponse;
                fromAmino(object: _83.Bech32PrefixResponseAmino): _83.Bech32PrefixResponse;
                toAmino(message: _83.Bech32PrefixResponse): _83.Bech32PrefixResponseAmino;
                fromAminoMsg(object: _83.Bech32PrefixResponseAminoMsg): _83.Bech32PrefixResponse;
                toAminoMsg(message: _83.Bech32PrefixResponse): _83.Bech32PrefixResponseAminoMsg;
                fromProtoMsg(message: _83.Bech32PrefixResponseProtoMsg): _83.Bech32PrefixResponse;
                toProto(message: _83.Bech32PrefixResponse): Uint8Array;
                toProtoMsg(message: _83.Bech32PrefixResponse): _83.Bech32PrefixResponseProtoMsg;
            };
            AddressBytesToStringRequest: {
                typeUrl: string;
                encode(message: _83.AddressBytesToStringRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.AddressBytesToStringRequest;
                fromPartial(object: Partial<_83.AddressBytesToStringRequest>): _83.AddressBytesToStringRequest;
                fromAmino(object: _83.AddressBytesToStringRequestAmino): _83.AddressBytesToStringRequest;
                toAmino(message: _83.AddressBytesToStringRequest): _83.AddressBytesToStringRequestAmino;
                fromAminoMsg(object: _83.AddressBytesToStringRequestAminoMsg): _83.AddressBytesToStringRequest;
                toAminoMsg(message: _83.AddressBytesToStringRequest): _83.AddressBytesToStringRequestAminoMsg;
                fromProtoMsg(message: _83.AddressBytesToStringRequestProtoMsg): _83.AddressBytesToStringRequest;
                toProto(message: _83.AddressBytesToStringRequest): Uint8Array;
                toProtoMsg(message: _83.AddressBytesToStringRequest): _83.AddressBytesToStringRequestProtoMsg;
            };
            AddressBytesToStringResponse: {
                typeUrl: string;
                encode(message: _83.AddressBytesToStringResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.AddressBytesToStringResponse;
                fromPartial(object: Partial<_83.AddressBytesToStringResponse>): _83.AddressBytesToStringResponse;
                fromAmino(object: _83.AddressBytesToStringResponseAmino): _83.AddressBytesToStringResponse;
                toAmino(message: _83.AddressBytesToStringResponse): _83.AddressBytesToStringResponseAmino;
                fromAminoMsg(object: _83.AddressBytesToStringResponseAminoMsg): _83.AddressBytesToStringResponse;
                toAminoMsg(message: _83.AddressBytesToStringResponse): _83.AddressBytesToStringResponseAminoMsg;
                fromProtoMsg(message: _83.AddressBytesToStringResponseProtoMsg): _83.AddressBytesToStringResponse;
                toProto(message: _83.AddressBytesToStringResponse): Uint8Array;
                toProtoMsg(message: _83.AddressBytesToStringResponse): _83.AddressBytesToStringResponseProtoMsg;
            };
            AddressStringToBytesRequest: {
                typeUrl: string;
                encode(message: _83.AddressStringToBytesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.AddressStringToBytesRequest;
                fromPartial(object: Partial<_83.AddressStringToBytesRequest>): _83.AddressStringToBytesRequest;
                fromAmino(object: _83.AddressStringToBytesRequestAmino): _83.AddressStringToBytesRequest;
                toAmino(message: _83.AddressStringToBytesRequest): _83.AddressStringToBytesRequestAmino;
                fromAminoMsg(object: _83.AddressStringToBytesRequestAminoMsg): _83.AddressStringToBytesRequest;
                toAminoMsg(message: _83.AddressStringToBytesRequest): _83.AddressStringToBytesRequestAminoMsg;
                fromProtoMsg(message: _83.AddressStringToBytesRequestProtoMsg): _83.AddressStringToBytesRequest;
                toProto(message: _83.AddressStringToBytesRequest): Uint8Array;
                toProtoMsg(message: _83.AddressStringToBytesRequest): _83.AddressStringToBytesRequestProtoMsg;
            };
            AddressStringToBytesResponse: {
                typeUrl: string;
                encode(message: _83.AddressStringToBytesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.AddressStringToBytesResponse;
                fromPartial(object: Partial<_83.AddressStringToBytesResponse>): _83.AddressStringToBytesResponse;
                fromAmino(object: _83.AddressStringToBytesResponseAmino): _83.AddressStringToBytesResponse;
                toAmino(message: _83.AddressStringToBytesResponse): _83.AddressStringToBytesResponseAmino;
                fromAminoMsg(object: _83.AddressStringToBytesResponseAminoMsg): _83.AddressStringToBytesResponse;
                toAminoMsg(message: _83.AddressStringToBytesResponse): _83.AddressStringToBytesResponseAminoMsg;
                fromProtoMsg(message: _83.AddressStringToBytesResponseProtoMsg): _83.AddressStringToBytesResponse;
                toProto(message: _83.AddressStringToBytesResponse): Uint8Array;
                toProtoMsg(message: _83.AddressStringToBytesResponse): _83.AddressStringToBytesResponseProtoMsg;
            };
            Cosmos_authAccountI_InterfaceDecoder: (input: import("..").BinaryReader | Uint8Array) => _81.BaseAccount | import("../google/protobuf/any").Any;
            Cosmos_authAccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_authAccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Cosmos_authModuleAccountI_InterfaceDecoder: (input: import("..").BinaryReader | Uint8Array) => _81.ModuleAccount | import("../google/protobuf/any").Any;
            Cosmos_authModuleAccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_authModuleAccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            GenesisState: {
                typeUrl: string;
                encode(message: _82.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _82.GenesisState;
                fromPartial(object: Partial<_82.GenesisState>): _82.GenesisState;
                fromAmino(object: _82.GenesisStateAmino): _82.GenesisState;
                toAmino(message: _82.GenesisState): _82.GenesisStateAmino;
                fromAminoMsg(object: _82.GenesisStateAminoMsg): _82.GenesisState;
                toAminoMsg(message: _82.GenesisState): _82.GenesisStateAminoMsg;
                fromProtoMsg(message: _82.GenesisStateProtoMsg): _82.GenesisState;
                toProto(message: _82.GenesisState): Uint8Array;
                toProtoMsg(message: _82.GenesisState): _82.GenesisStateProtoMsg;
            };
            BaseAccount: {
                typeUrl: string;
                encode(message: _81.BaseAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _81.BaseAccount;
                fromPartial(object: Partial<_81.BaseAccount>): _81.BaseAccount;
                fromAmino(object: _81.BaseAccountAmino): _81.BaseAccount;
                toAmino(message: _81.BaseAccount): _81.BaseAccountAmino;
                fromAminoMsg(object: _81.BaseAccountAminoMsg): _81.BaseAccount;
                toAminoMsg(message: _81.BaseAccount): _81.BaseAccountAminoMsg;
                fromProtoMsg(message: _81.BaseAccountProtoMsg): _81.BaseAccount;
                toProto(message: _81.BaseAccount): Uint8Array;
                toProtoMsg(message: _81.BaseAccount): _81.BaseAccountProtoMsg;
            };
            ModuleAccount: {
                typeUrl: string;
                encode(message: _81.ModuleAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _81.ModuleAccount;
                fromPartial(object: Partial<_81.ModuleAccount>): _81.ModuleAccount;
                fromAmino(object: _81.ModuleAccountAmino): _81.ModuleAccount;
                toAmino(message: _81.ModuleAccount): _81.ModuleAccountAmino;
                fromAminoMsg(object: _81.ModuleAccountAminoMsg): _81.ModuleAccount;
                toAminoMsg(message: _81.ModuleAccount): _81.ModuleAccountAminoMsg;
                fromProtoMsg(message: _81.ModuleAccountProtoMsg): _81.ModuleAccount;
                toProto(message: _81.ModuleAccount): Uint8Array;
                toProtoMsg(message: _81.ModuleAccount): _81.ModuleAccountProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _81.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _81.Params;
                fromPartial(object: Partial<_81.Params>): _81.Params;
                fromAmino(object: _81.ParamsAmino): _81.Params;
                toAmino(message: _81.Params): _81.ParamsAmino;
                fromAminoMsg(object: _81.ParamsAminoMsg): _81.Params;
                toAminoMsg(message: _81.Params): _81.ParamsAminoMsg;
                fromProtoMsg(message: _81.ParamsProtoMsg): _81.Params;
                toProto(message: _81.Params): Uint8Array;
                toProtoMsg(message: _81.Params): _81.ParamsProtoMsg;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _442.MsgClientImpl;
            QueryClientImpl: typeof _430.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _87.QueryGrantsRequest): Promise<_87.QueryGrantsResponse>;
                granterGrants(request: _87.QueryGranterGrantsRequest): Promise<_87.QueryGranterGrantsResponse>;
                granteeGrants(request: _87.QueryGranteeGrantsRequest): Promise<_87.QueryGranteeGrantsResponse>;
            };
            registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _88.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _88.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _88.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _88.MsgGrant): {
                        typeUrl: string;
                        value: _88.MsgGrant;
                    };
                    exec(value: _88.MsgExec): {
                        typeUrl: string;
                        value: _88.MsgExec;
                    };
                    revoke(value: _88.MsgRevoke): {
                        typeUrl: string;
                        value: _88.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _88.MsgGrant): {
                        typeUrl: string;
                        value: _88.MsgGrant;
                    };
                    exec(value: _88.MsgExec): {
                        typeUrl: string;
                        value: _88.MsgExec;
                    };
                    revoke(value: _88.MsgRevoke): {
                        typeUrl: string;
                        value: _88.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: (message: _88.MsgGrant) => _88.MsgGrantAmino;
                    fromAmino: (object: _88.MsgGrantAmino) => _88.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _88.MsgExec) => _88.MsgExecAmino;
                    fromAmino: (object: _88.MsgExecAmino) => _88.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _88.MsgRevoke) => _88.MsgRevokeAmino;
                    fromAmino: (object: _88.MsgRevokeAmino) => _88.MsgRevoke;
                };
            };
            MsgGrant: {
                typeUrl: string;
                encode(message: _88.MsgGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _88.MsgGrant;
                fromPartial(object: Partial<_88.MsgGrant>): _88.MsgGrant;
                fromAmino(object: _88.MsgGrantAmino): _88.MsgGrant;
                toAmino(message: _88.MsgGrant): _88.MsgGrantAmino;
                fromAminoMsg(object: _88.MsgGrantAminoMsg): _88.MsgGrant;
                toAminoMsg(message: _88.MsgGrant): _88.MsgGrantAminoMsg;
                fromProtoMsg(message: _88.MsgGrantProtoMsg): _88.MsgGrant;
                toProto(message: _88.MsgGrant): Uint8Array;
                toProtoMsg(message: _88.MsgGrant): _88.MsgGrantProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _88.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _88.MsgExecResponse;
                fromPartial(object: Partial<_88.MsgExecResponse>): _88.MsgExecResponse;
                fromAmino(object: _88.MsgExecResponseAmino): _88.MsgExecResponse;
                toAmino(message: _88.MsgExecResponse): _88.MsgExecResponseAmino;
                fromAminoMsg(object: _88.MsgExecResponseAminoMsg): _88.MsgExecResponse;
                toAminoMsg(message: _88.MsgExecResponse): _88.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _88.MsgExecResponseProtoMsg): _88.MsgExecResponse;
                toProto(message: _88.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _88.MsgExecResponse): _88.MsgExecResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _88.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _88.MsgExec;
                fromPartial(object: Partial<_88.MsgExec>): _88.MsgExec;
                fromAmino(object: _88.MsgExecAmino): _88.MsgExec;
                toAmino(message: _88.MsgExec): _88.MsgExecAmino;
                fromAminoMsg(object: _88.MsgExecAminoMsg): _88.MsgExec;
                toAminoMsg(message: _88.MsgExec): _88.MsgExecAminoMsg;
                fromProtoMsg(message: _88.MsgExecProtoMsg): _88.MsgExec;
                toProto(message: _88.MsgExec): Uint8Array;
                toProtoMsg(message: _88.MsgExec): _88.MsgExecProtoMsg;
            };
            MsgGrantResponse: {
                typeUrl: string;
                encode(_: _88.MsgGrantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _88.MsgGrantResponse;
                fromPartial(_: Partial<_88.MsgGrantResponse>): _88.MsgGrantResponse;
                fromAmino(_: _88.MsgGrantResponseAmino): _88.MsgGrantResponse;
                toAmino(_: _88.MsgGrantResponse): _88.MsgGrantResponseAmino;
                fromAminoMsg(object: _88.MsgGrantResponseAminoMsg): _88.MsgGrantResponse;
                toAminoMsg(message: _88.MsgGrantResponse): _88.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _88.MsgGrantResponseProtoMsg): _88.MsgGrantResponse;
                toProto(message: _88.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _88.MsgGrantResponse): _88.MsgGrantResponseProtoMsg;
            };
            MsgRevoke: {
                typeUrl: string;
                encode(message: _88.MsgRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _88.MsgRevoke;
                fromPartial(object: Partial<_88.MsgRevoke>): _88.MsgRevoke;
                fromAmino(object: _88.MsgRevokeAmino): _88.MsgRevoke;
                toAmino(message: _88.MsgRevoke): _88.MsgRevokeAmino;
                fromAminoMsg(object: _88.MsgRevokeAminoMsg): _88.MsgRevoke;
                toAminoMsg(message: _88.MsgRevoke): _88.MsgRevokeAminoMsg;
                fromProtoMsg(message: _88.MsgRevokeProtoMsg): _88.MsgRevoke;
                toProto(message: _88.MsgRevoke): Uint8Array;
                toProtoMsg(message: _88.MsgRevoke): _88.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                typeUrl: string;
                encode(_: _88.MsgRevokeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _88.MsgRevokeResponse;
                fromPartial(_: Partial<_88.MsgRevokeResponse>): _88.MsgRevokeResponse;
                fromAmino(_: _88.MsgRevokeResponseAmino): _88.MsgRevokeResponse;
                toAmino(_: _88.MsgRevokeResponse): _88.MsgRevokeResponseAmino;
                fromAminoMsg(object: _88.MsgRevokeResponseAminoMsg): _88.MsgRevokeResponse;
                toAminoMsg(message: _88.MsgRevokeResponse): _88.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _88.MsgRevokeResponseProtoMsg): _88.MsgRevokeResponse;
                toProto(message: _88.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _88.MsgRevokeResponse): _88.MsgRevokeResponseProtoMsg;
            };
            Sdk_Msg_InterfaceDecoder: (input: import("..").BinaryReader | Uint8Array) => import("../google/protobuf/any").Any;
            Sdk_Msg_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Sdk_Msg_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Cosmos_authzAuthorization_InterfaceDecoder: (input: import("..").BinaryReader | Uint8Array) => import("../akash/deployment/v1beta1/authz").DepositDeploymentAuthorization | import("../akash/deployment/v1beta2/authz").DepositDeploymentAuthorization | _84.GenericAuthorization | _89.SendAuthorization | _130.StakeAuthorization | import("../cosmwasm/wasm/v1/authz").ContractExecutionAuthorization | import("../cosmwasm/wasm/v1/authz").ContractMigrationAuthorization | import("../injective/exchange/v1beta1/authz").CreateSpotLimitOrderAuthz | import("../injective/exchange/v1beta1/authz").CreateSpotMarketOrderAuthz | import("../injective/exchange/v1beta1/authz").BatchCreateSpotLimitOrdersAuthz | import("../injective/exchange/v1beta1/authz").CancelSpotOrderAuthz | import("../injective/exchange/v1beta1/authz").BatchCancelSpotOrdersAuthz | import("../injective/exchange/v1beta1/authz").CreateDerivativeLimitOrderAuthz | import("../injective/exchange/v1beta1/authz").CreateDerivativeMarketOrderAuthz | import("../injective/exchange/v1beta1/authz").BatchCreateDerivativeLimitOrdersAuthz | import("../injective/exchange/v1beta1/authz").CancelDerivativeOrderAuthz | import("../injective/exchange/v1beta1/authz").BatchCancelDerivativeOrdersAuthz | import("../injective/exchange/v1beta1/authz").BatchUpdateOrdersAuthz | import("../google/protobuf/any").Any;
            Cosmos_authzAuthorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_authzAuthorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryGrantsRequest: {
                typeUrl: string;
                encode(message: _87.QueryGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _87.QueryGrantsRequest;
                fromPartial(object: Partial<_87.QueryGrantsRequest>): _87.QueryGrantsRequest;
                fromAmino(object: _87.QueryGrantsRequestAmino): _87.QueryGrantsRequest;
                toAmino(message: _87.QueryGrantsRequest): _87.QueryGrantsRequestAmino;
                fromAminoMsg(object: _87.QueryGrantsRequestAminoMsg): _87.QueryGrantsRequest;
                toAminoMsg(message: _87.QueryGrantsRequest): _87.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _87.QueryGrantsRequestProtoMsg): _87.QueryGrantsRequest;
                toProto(message: _87.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _87.QueryGrantsRequest): _87.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                typeUrl: string;
                encode(message: _87.QueryGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _87.QueryGrantsResponse;
                fromPartial(object: Partial<_87.QueryGrantsResponse>): _87.QueryGrantsResponse;
                fromAmino(object: _87.QueryGrantsResponseAmino): _87.QueryGrantsResponse;
                toAmino(message: _87.QueryGrantsResponse): _87.QueryGrantsResponseAmino;
                fromAminoMsg(object: _87.QueryGrantsResponseAminoMsg): _87.QueryGrantsResponse;
                toAminoMsg(message: _87.QueryGrantsResponse): _87.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _87.QueryGrantsResponseProtoMsg): _87.QueryGrantsResponse;
                toProto(message: _87.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _87.QueryGrantsResponse): _87.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                typeUrl: string;
                encode(message: _87.QueryGranterGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _87.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_87.QueryGranterGrantsRequest>): _87.QueryGranterGrantsRequest;
                fromAmino(object: _87.QueryGranterGrantsRequestAmino): _87.QueryGranterGrantsRequest;
                toAmino(message: _87.QueryGranterGrantsRequest): _87.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _87.QueryGranterGrantsRequestAminoMsg): _87.QueryGranterGrantsRequest;
                toAminoMsg(message: _87.QueryGranterGrantsRequest): _87.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _87.QueryGranterGrantsRequestProtoMsg): _87.QueryGranterGrantsRequest;
                toProto(message: _87.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _87.QueryGranterGrantsRequest): _87.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                typeUrl: string;
                encode(message: _87.QueryGranterGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _87.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_87.QueryGranterGrantsResponse>): _87.QueryGranterGrantsResponse;
                fromAmino(object: _87.QueryGranterGrantsResponseAmino): _87.QueryGranterGrantsResponse;
                toAmino(message: _87.QueryGranterGrantsResponse): _87.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _87.QueryGranterGrantsResponseAminoMsg): _87.QueryGranterGrantsResponse;
                toAminoMsg(message: _87.QueryGranterGrantsResponse): _87.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _87.QueryGranterGrantsResponseProtoMsg): _87.QueryGranterGrantsResponse;
                toProto(message: _87.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _87.QueryGranterGrantsResponse): _87.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                typeUrl: string;
                encode(message: _87.QueryGranteeGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _87.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_87.QueryGranteeGrantsRequest>): _87.QueryGranteeGrantsRequest;
                fromAmino(object: _87.QueryGranteeGrantsRequestAmino): _87.QueryGranteeGrantsRequest;
                toAmino(message: _87.QueryGranteeGrantsRequest): _87.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _87.QueryGranteeGrantsRequestAminoMsg): _87.QueryGranteeGrantsRequest;
                toAminoMsg(message: _87.QueryGranteeGrantsRequest): _87.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _87.QueryGranteeGrantsRequestProtoMsg): _87.QueryGranteeGrantsRequest;
                toProto(message: _87.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _87.QueryGranteeGrantsRequest): _87.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                typeUrl: string;
                encode(message: _87.QueryGranteeGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _87.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_87.QueryGranteeGrantsResponse>): _87.QueryGranteeGrantsResponse;
                fromAmino(object: _87.QueryGranteeGrantsResponseAmino): _87.QueryGranteeGrantsResponse;
                toAmino(message: _87.QueryGranteeGrantsResponse): _87.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _87.QueryGranteeGrantsResponseAminoMsg): _87.QueryGranteeGrantsResponse;
                toAminoMsg(message: _87.QueryGranteeGrantsResponse): _87.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _87.QueryGranteeGrantsResponseProtoMsg): _87.QueryGranteeGrantsResponse;
                toProto(message: _87.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _87.QueryGranteeGrantsResponse): _87.QueryGranteeGrantsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _86.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _86.GenesisState;
                fromPartial(object: Partial<_86.GenesisState>): _86.GenesisState;
                fromAmino(object: _86.GenesisStateAmino): _86.GenesisState;
                toAmino(message: _86.GenesisState): _86.GenesisStateAmino;
                fromAminoMsg(object: _86.GenesisStateAminoMsg): _86.GenesisState;
                toAminoMsg(message: _86.GenesisState): _86.GenesisStateAminoMsg;
                fromProtoMsg(message: _86.GenesisStateProtoMsg): _86.GenesisState;
                toProto(message: _86.GenesisState): Uint8Array;
                toProtoMsg(message: _86.GenesisState): _86.GenesisStateProtoMsg;
            };
            EventGrant: {
                typeUrl: string;
                encode(message: _85.EventGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _85.EventGrant;
                fromPartial(object: Partial<_85.EventGrant>): _85.EventGrant;
                fromAmino(object: _85.EventGrantAmino): _85.EventGrant;
                toAmino(message: _85.EventGrant): _85.EventGrantAmino;
                fromAminoMsg(object: _85.EventGrantAminoMsg): _85.EventGrant;
                toAminoMsg(message: _85.EventGrant): _85.EventGrantAminoMsg;
                fromProtoMsg(message: _85.EventGrantProtoMsg): _85.EventGrant;
                toProto(message: _85.EventGrant): Uint8Array;
                toProtoMsg(message: _85.EventGrant): _85.EventGrantProtoMsg;
            };
            EventRevoke: {
                typeUrl: string;
                encode(message: _85.EventRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _85.EventRevoke;
                fromPartial(object: Partial<_85.EventRevoke>): _85.EventRevoke;
                fromAmino(object: _85.EventRevokeAmino): _85.EventRevoke;
                toAmino(message: _85.EventRevoke): _85.EventRevokeAmino;
                fromAminoMsg(object: _85.EventRevokeAminoMsg): _85.EventRevoke;
                toAminoMsg(message: _85.EventRevoke): _85.EventRevokeAminoMsg;
                fromProtoMsg(message: _85.EventRevokeProtoMsg): _85.EventRevoke;
                toProto(message: _85.EventRevoke): Uint8Array;
                toProtoMsg(message: _85.EventRevoke): _85.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                typeUrl: string;
                encode(message: _84.GenericAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _84.GenericAuthorization;
                fromPartial(object: Partial<_84.GenericAuthorization>): _84.GenericAuthorization;
                fromAmino(object: _84.GenericAuthorizationAmino): _84.GenericAuthorization;
                toAmino(message: _84.GenericAuthorization): _84.GenericAuthorizationAmino;
                fromAminoMsg(object: _84.GenericAuthorizationAminoMsg): _84.GenericAuthorization;
                toAminoMsg(message: _84.GenericAuthorization): _84.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _84.GenericAuthorizationProtoMsg): _84.GenericAuthorization;
                toProto(message: _84.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _84.GenericAuthorization): _84.GenericAuthorizationProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _84.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _84.Grant;
                fromPartial(object: Partial<_84.Grant>): _84.Grant;
                fromAmino(object: _84.GrantAmino): _84.Grant;
                toAmino(message: _84.Grant): _84.GrantAmino;
                fromAminoMsg(object: _84.GrantAminoMsg): _84.Grant;
                toAminoMsg(message: _84.Grant): _84.GrantAminoMsg;
                fromProtoMsg(message: _84.GrantProtoMsg): _84.Grant;
                toProto(message: _84.Grant): Uint8Array;
                toProtoMsg(message: _84.Grant): _84.GrantProtoMsg;
            };
            GrantAuthorization: {
                typeUrl: string;
                encode(message: _84.GrantAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _84.GrantAuthorization;
                fromPartial(object: Partial<_84.GrantAuthorization>): _84.GrantAuthorization;
                fromAmino(object: _84.GrantAuthorizationAmino): _84.GrantAuthorization;
                toAmino(message: _84.GrantAuthorization): _84.GrantAuthorizationAmino;
                fromAminoMsg(object: _84.GrantAuthorizationAminoMsg): _84.GrantAuthorization;
                toAminoMsg(message: _84.GrantAuthorization): _84.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _84.GrantAuthorizationProtoMsg): _84.GrantAuthorization;
                toProto(message: _84.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _84.GrantAuthorization): _84.GrantAuthorizationProtoMsg;
            };
            GrantQueueItem: {
                typeUrl: string;
                encode(message: _84.GrantQueueItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _84.GrantQueueItem;
                fromPartial(object: Partial<_84.GrantQueueItem>): _84.GrantQueueItem;
                fromAmino(object: _84.GrantQueueItemAmino): _84.GrantQueueItem;
                toAmino(message: _84.GrantQueueItem): _84.GrantQueueItemAmino;
                fromAminoMsg(object: _84.GrantQueueItemAminoMsg): _84.GrantQueueItem;
                toAminoMsg(message: _84.GrantQueueItem): _84.GrantQueueItemAminoMsg;
                fromProtoMsg(message: _84.GrantQueueItemProtoMsg): _84.GrantQueueItem;
                toProto(message: _84.GrantQueueItem): Uint8Array;
                toProtoMsg(message: _84.GrantQueueItem): _84.GrantQueueItemProtoMsg;
            };
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _443.MsgClientImpl;
            QueryClientImpl: typeof _431.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _92.QueryBalanceRequest): Promise<_92.QueryBalanceResponse>;
                allBalances(request: _92.QueryAllBalancesRequest): Promise<_92.QueryAllBalancesResponse>;
                spendableBalances(request: _92.QuerySpendableBalancesRequest): Promise<_92.QuerySpendableBalancesResponse>;
                totalSupply(request?: _92.QueryTotalSupplyRequest): Promise<_92.QueryTotalSupplyResponse>;
                supplyOf(request: _92.QuerySupplyOfRequest): Promise<_92.QuerySupplyOfResponse>;
                params(request?: _92.QueryParamsRequest): Promise<_92.QueryParamsResponse>;
                denomMetadata(request: _92.QueryDenomMetadataRequest): Promise<_92.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _92.QueryDenomsMetadataRequest): Promise<_92.QueryDenomsMetadataResponse>;
                denomOwners(request: _92.QueryDenomOwnersRequest): Promise<_92.QueryDenomOwnersResponse>;
            };
            registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _93.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _93.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _93.MsgSend): {
                        typeUrl: string;
                        value: _93.MsgSend;
                    };
                    multiSend(value: _93.MsgMultiSend): {
                        typeUrl: string;
                        value: _93.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _93.MsgSend): {
                        typeUrl: string;
                        value: _93.MsgSend;
                    };
                    multiSend(value: _93.MsgMultiSend): {
                        typeUrl: string;
                        value: _93.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _93.MsgSend) => _93.MsgSendAmino;
                    fromAmino: (object: _93.MsgSendAmino) => _93.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _93.MsgMultiSend) => _93.MsgMultiSendAmino;
                    fromAmino: (object: _93.MsgMultiSendAmino) => _93.MsgMultiSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _93.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _93.MsgSend;
                fromPartial(object: Partial<_93.MsgSend>): _93.MsgSend;
                fromAmino(object: _93.MsgSendAmino): _93.MsgSend;
                toAmino(message: _93.MsgSend): _93.MsgSendAmino;
                fromAminoMsg(object: _93.MsgSendAminoMsg): _93.MsgSend;
                toAminoMsg(message: _93.MsgSend): _93.MsgSendAminoMsg;
                fromProtoMsg(message: _93.MsgSendProtoMsg): _93.MsgSend;
                toProto(message: _93.MsgSend): Uint8Array;
                toProtoMsg(message: _93.MsgSend): _93.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _93.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _93.MsgSendResponse;
                fromPartial(_: Partial<_93.MsgSendResponse>): _93.MsgSendResponse;
                fromAmino(_: _93.MsgSendResponseAmino): _93.MsgSendResponse;
                toAmino(_: _93.MsgSendResponse): _93.MsgSendResponseAmino;
                fromAminoMsg(object: _93.MsgSendResponseAminoMsg): _93.MsgSendResponse;
                toAminoMsg(message: _93.MsgSendResponse): _93.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _93.MsgSendResponseProtoMsg): _93.MsgSendResponse;
                toProto(message: _93.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _93.MsgSendResponse): _93.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                typeUrl: string;
                encode(message: _93.MsgMultiSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _93.MsgMultiSend;
                fromPartial(object: Partial<_93.MsgMultiSend>): _93.MsgMultiSend;
                fromAmino(object: _93.MsgMultiSendAmino): _93.MsgMultiSend;
                toAmino(message: _93.MsgMultiSend): _93.MsgMultiSendAmino;
                fromAminoMsg(object: _93.MsgMultiSendAminoMsg): _93.MsgMultiSend;
                toAminoMsg(message: _93.MsgMultiSend): _93.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _93.MsgMultiSendProtoMsg): _93.MsgMultiSend;
                toProto(message: _93.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _93.MsgMultiSend): _93.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                typeUrl: string;
                encode(_: _93.MsgMultiSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _93.MsgMultiSendResponse;
                fromPartial(_: Partial<_93.MsgMultiSendResponse>): _93.MsgMultiSendResponse;
                fromAmino(_: _93.MsgMultiSendResponseAmino): _93.MsgMultiSendResponse;
                toAmino(_: _93.MsgMultiSendResponse): _93.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _93.MsgMultiSendResponseAminoMsg): _93.MsgMultiSendResponse;
                toAminoMsg(message: _93.MsgMultiSendResponse): _93.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _93.MsgMultiSendResponseProtoMsg): _93.MsgMultiSendResponse;
                toProto(message: _93.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _93.MsgMultiSendResponse): _93.MsgMultiSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _92.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _92.QueryBalanceRequest;
                fromPartial(object: Partial<_92.QueryBalanceRequest>): _92.QueryBalanceRequest;
                fromAmino(object: _92.QueryBalanceRequestAmino): _92.QueryBalanceRequest;
                toAmino(message: _92.QueryBalanceRequest): _92.QueryBalanceRequestAmino;
                fromAminoMsg(object: _92.QueryBalanceRequestAminoMsg): _92.QueryBalanceRequest;
                toAminoMsg(message: _92.QueryBalanceRequest): _92.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _92.QueryBalanceRequestProtoMsg): _92.QueryBalanceRequest;
                toProto(message: _92.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _92.QueryBalanceRequest): _92.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _92.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _92.QueryBalanceResponse;
                fromPartial(object: Partial<_92.QueryBalanceResponse>): _92.QueryBalanceResponse;
                fromAmino(object: _92.QueryBalanceResponseAmino): _92.QueryBalanceResponse;
                toAmino(message: _92.QueryBalanceResponse): _92.QueryBalanceResponseAmino;
                fromAminoMsg(object: _92.QueryBalanceResponseAminoMsg): _92.QueryBalanceResponse;
                toAminoMsg(message: _92.QueryBalanceResponse): _92.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _92.QueryBalanceResponseProtoMsg): _92.QueryBalanceResponse;
                toProto(message: _92.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _92.QueryBalanceResponse): _92.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                typeUrl: string;
                encode(message: _92.QueryAllBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _92.QueryAllBalancesRequest;
                fromPartial(object: Partial<_92.QueryAllBalancesRequest>): _92.QueryAllBalancesRequest;
                fromAmino(object: _92.QueryAllBalancesRequestAmino): _92.QueryAllBalancesRequest;
                toAmino(message: _92.QueryAllBalancesRequest): _92.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _92.QueryAllBalancesRequestAminoMsg): _92.QueryAllBalancesRequest;
                toAminoMsg(message: _92.QueryAllBalancesRequest): _92.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _92.QueryAllBalancesRequestProtoMsg): _92.QueryAllBalancesRequest;
                toProto(message: _92.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _92.QueryAllBalancesRequest): _92.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                typeUrl: string;
                encode(message: _92.QueryAllBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _92.QueryAllBalancesResponse;
                fromPartial(object: Partial<_92.QueryAllBalancesResponse>): _92.QueryAllBalancesResponse;
                fromAmino(object: _92.QueryAllBalancesResponseAmino): _92.QueryAllBalancesResponse;
                toAmino(message: _92.QueryAllBalancesResponse): _92.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _92.QueryAllBalancesResponseAminoMsg): _92.QueryAllBalancesResponse;
                toAminoMsg(message: _92.QueryAllBalancesResponse): _92.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _92.QueryAllBalancesResponseProtoMsg): _92.QueryAllBalancesResponse;
                toProto(message: _92.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _92.QueryAllBalancesResponse): _92.QueryAllBalancesResponseProtoMsg;
            };
            QuerySpendableBalancesRequest: {
                typeUrl: string;
                encode(message: _92.QuerySpendableBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _92.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_92.QuerySpendableBalancesRequest>): _92.QuerySpendableBalancesRequest;
                fromAmino(object: _92.QuerySpendableBalancesRequestAmino): _92.QuerySpendableBalancesRequest;
                toAmino(message: _92.QuerySpendableBalancesRequest): _92.QuerySpendableBalancesRequestAmino;
                fromAminoMsg(object: _92.QuerySpendableBalancesRequestAminoMsg): _92.QuerySpendableBalancesRequest;
                toAminoMsg(message: _92.QuerySpendableBalancesRequest): _92.QuerySpendableBalancesRequestAminoMsg;
                fromProtoMsg(message: _92.QuerySpendableBalancesRequestProtoMsg): _92.QuerySpendableBalancesRequest;
                toProto(message: _92.QuerySpendableBalancesRequest): Uint8Array;
                toProtoMsg(message: _92.QuerySpendableBalancesRequest): _92.QuerySpendableBalancesRequestProtoMsg;
            };
            QuerySpendableBalancesResponse: {
                typeUrl: string;
                encode(message: _92.QuerySpendableBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _92.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_92.QuerySpendableBalancesResponse>): _92.QuerySpendableBalancesResponse;
                fromAmino(object: _92.QuerySpendableBalancesResponseAmino): _92.QuerySpendableBalancesResponse;
                toAmino(message: _92.QuerySpendableBalancesResponse): _92.QuerySpendableBalancesResponseAmino;
                fromAminoMsg(object: _92.QuerySpendableBalancesResponseAminoMsg): _92.QuerySpendableBalancesResponse;
                toAminoMsg(message: _92.QuerySpendableBalancesResponse): _92.QuerySpendableBalancesResponseAminoMsg;
                fromProtoMsg(message: _92.QuerySpendableBalancesResponseProtoMsg): _92.QuerySpendableBalancesResponse;
                toProto(message: _92.QuerySpendableBalancesResponse): Uint8Array;
                toProtoMsg(message: _92.QuerySpendableBalancesResponse): _92.QuerySpendableBalancesResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                encode(message: _92.QueryTotalSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _92.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_92.QueryTotalSupplyRequest>): _92.QueryTotalSupplyRequest;
                fromAmino(object: _92.QueryTotalSupplyRequestAmino): _92.QueryTotalSupplyRequest;
                toAmino(message: _92.QueryTotalSupplyRequest): _92.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _92.QueryTotalSupplyRequestAminoMsg): _92.QueryTotalSupplyRequest;
                toAminoMsg(message: _92.QueryTotalSupplyRequest): _92.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _92.QueryTotalSupplyRequestProtoMsg): _92.QueryTotalSupplyRequest;
                toProto(message: _92.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _92.QueryTotalSupplyRequest): _92.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                encode(message: _92.QueryTotalSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _92.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_92.QueryTotalSupplyResponse>): _92.QueryTotalSupplyResponse;
                fromAmino(object: _92.QueryTotalSupplyResponseAmino): _92.QueryTotalSupplyResponse;
                toAmino(message: _92.QueryTotalSupplyResponse): _92.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _92.QueryTotalSupplyResponseAminoMsg): _92.QueryTotalSupplyResponse;
                toAminoMsg(message: _92.QueryTotalSupplyResponse): _92.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _92.QueryTotalSupplyResponseProtoMsg): _92.QueryTotalSupplyResponse;
                toProto(message: _92.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _92.QueryTotalSupplyResponse): _92.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                typeUrl: string;
                encode(message: _92.QuerySupplyOfRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _92.QuerySupplyOfRequest;
                fromPartial(object: Partial<_92.QuerySupplyOfRequest>): _92.QuerySupplyOfRequest;
                fromAmino(object: _92.QuerySupplyOfRequestAmino): _92.QuerySupplyOfRequest;
                toAmino(message: _92.QuerySupplyOfRequest): _92.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _92.QuerySupplyOfRequestAminoMsg): _92.QuerySupplyOfRequest;
                toAminoMsg(message: _92.QuerySupplyOfRequest): _92.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _92.QuerySupplyOfRequestProtoMsg): _92.QuerySupplyOfRequest;
                toProto(message: _92.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _92.QuerySupplyOfRequest): _92.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                typeUrl: string;
                encode(message: _92.QuerySupplyOfResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _92.QuerySupplyOfResponse;
                fromPartial(object: Partial<_92.QuerySupplyOfResponse>): _92.QuerySupplyOfResponse;
                fromAmino(object: _92.QuerySupplyOfResponseAmino): _92.QuerySupplyOfResponse;
                toAmino(message: _92.QuerySupplyOfResponse): _92.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _92.QuerySupplyOfResponseAminoMsg): _92.QuerySupplyOfResponse;
                toAminoMsg(message: _92.QuerySupplyOfResponse): _92.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _92.QuerySupplyOfResponseProtoMsg): _92.QuerySupplyOfResponse;
                toProto(message: _92.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _92.QuerySupplyOfResponse): _92.QuerySupplyOfResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _92.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _92.QueryParamsRequest;
                fromPartial(_: Partial<_92.QueryParamsRequest>): _92.QueryParamsRequest;
                fromAmino(_: _92.QueryParamsRequestAmino): _92.QueryParamsRequest;
                toAmino(_: _92.QueryParamsRequest): _92.QueryParamsRequestAmino;
                fromAminoMsg(object: _92.QueryParamsRequestAminoMsg): _92.QueryParamsRequest;
                toAminoMsg(message: _92.QueryParamsRequest): _92.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _92.QueryParamsRequestProtoMsg): _92.QueryParamsRequest;
                toProto(message: _92.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _92.QueryParamsRequest): _92.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _92.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _92.QueryParamsResponse;
                fromPartial(object: Partial<_92.QueryParamsResponse>): _92.QueryParamsResponse;
                fromAmino(object: _92.QueryParamsResponseAmino): _92.QueryParamsResponse;
                toAmino(message: _92.QueryParamsResponse): _92.QueryParamsResponseAmino;
                fromAminoMsg(object: _92.QueryParamsResponseAminoMsg): _92.QueryParamsResponse;
                toAminoMsg(message: _92.QueryParamsResponse): _92.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _92.QueryParamsResponseProtoMsg): _92.QueryParamsResponse;
                toProto(message: _92.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _92.QueryParamsResponse): _92.QueryParamsResponseProtoMsg;
            };
            QueryDenomsMetadataRequest: {
                typeUrl: string;
                encode(message: _92.QueryDenomsMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _92.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_92.QueryDenomsMetadataRequest>): _92.QueryDenomsMetadataRequest;
                fromAmino(object: _92.QueryDenomsMetadataRequestAmino): _92.QueryDenomsMetadataRequest;
                toAmino(message: _92.QueryDenomsMetadataRequest): _92.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _92.QueryDenomsMetadataRequestAminoMsg): _92.QueryDenomsMetadataRequest;
                toAminoMsg(message: _92.QueryDenomsMetadataRequest): _92.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _92.QueryDenomsMetadataRequestProtoMsg): _92.QueryDenomsMetadataRequest;
                toProto(message: _92.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _92.QueryDenomsMetadataRequest): _92.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                typeUrl: string;
                encode(message: _92.QueryDenomsMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _92.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_92.QueryDenomsMetadataResponse>): _92.QueryDenomsMetadataResponse;
                fromAmino(object: _92.QueryDenomsMetadataResponseAmino): _92.QueryDenomsMetadataResponse;
                toAmino(message: _92.QueryDenomsMetadataResponse): _92.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _92.QueryDenomsMetadataResponseAminoMsg): _92.QueryDenomsMetadataResponse;
                toAminoMsg(message: _92.QueryDenomsMetadataResponse): _92.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _92.QueryDenomsMetadataResponseProtoMsg): _92.QueryDenomsMetadataResponse;
                toProto(message: _92.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _92.QueryDenomsMetadataResponse): _92.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                typeUrl: string;
                encode(message: _92.QueryDenomMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _92.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_92.QueryDenomMetadataRequest>): _92.QueryDenomMetadataRequest;
                fromAmino(object: _92.QueryDenomMetadataRequestAmino): _92.QueryDenomMetadataRequest;
                toAmino(message: _92.QueryDenomMetadataRequest): _92.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _92.QueryDenomMetadataRequestAminoMsg): _92.QueryDenomMetadataRequest;
                toAminoMsg(message: _92.QueryDenomMetadataRequest): _92.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _92.QueryDenomMetadataRequestProtoMsg): _92.QueryDenomMetadataRequest;
                toProto(message: _92.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _92.QueryDenomMetadataRequest): _92.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                typeUrl: string;
                encode(message: _92.QueryDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _92.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_92.QueryDenomMetadataResponse>): _92.QueryDenomMetadataResponse;
                fromAmino(object: _92.QueryDenomMetadataResponseAmino): _92.QueryDenomMetadataResponse;
                toAmino(message: _92.QueryDenomMetadataResponse): _92.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _92.QueryDenomMetadataResponseAminoMsg): _92.QueryDenomMetadataResponse;
                toAminoMsg(message: _92.QueryDenomMetadataResponse): _92.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _92.QueryDenomMetadataResponseProtoMsg): _92.QueryDenomMetadataResponse;
                toProto(message: _92.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _92.QueryDenomMetadataResponse): _92.QueryDenomMetadataResponseProtoMsg;
            };
            QueryDenomOwnersRequest: {
                typeUrl: string;
                encode(message: _92.QueryDenomOwnersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _92.QueryDenomOwnersRequest;
                fromPartial(object: Partial<_92.QueryDenomOwnersRequest>): _92.QueryDenomOwnersRequest;
                fromAmino(object: _92.QueryDenomOwnersRequestAmino): _92.QueryDenomOwnersRequest;
                toAmino(message: _92.QueryDenomOwnersRequest): _92.QueryDenomOwnersRequestAmino;
                fromAminoMsg(object: _92.QueryDenomOwnersRequestAminoMsg): _92.QueryDenomOwnersRequest;
                toAminoMsg(message: _92.QueryDenomOwnersRequest): _92.QueryDenomOwnersRequestAminoMsg;
                fromProtoMsg(message: _92.QueryDenomOwnersRequestProtoMsg): _92.QueryDenomOwnersRequest;
                toProto(message: _92.QueryDenomOwnersRequest): Uint8Array;
                toProtoMsg(message: _92.QueryDenomOwnersRequest): _92.QueryDenomOwnersRequestProtoMsg;
            };
            DenomOwner: {
                typeUrl: string;
                encode(message: _92.DenomOwner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _92.DenomOwner;
                fromPartial(object: Partial<_92.DenomOwner>): _92.DenomOwner;
                fromAmino(object: _92.DenomOwnerAmino): _92.DenomOwner;
                toAmino(message: _92.DenomOwner): _92.DenomOwnerAmino;
                fromAminoMsg(object: _92.DenomOwnerAminoMsg): _92.DenomOwner;
                toAminoMsg(message: _92.DenomOwner): _92.DenomOwnerAminoMsg;
                fromProtoMsg(message: _92.DenomOwnerProtoMsg): _92.DenomOwner;
                toProto(message: _92.DenomOwner): Uint8Array;
                toProtoMsg(message: _92.DenomOwner): _92.DenomOwnerProtoMsg;
            };
            QueryDenomOwnersResponse: {
                typeUrl: string;
                encode(message: _92.QueryDenomOwnersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _92.QueryDenomOwnersResponse;
                fromPartial(object: Partial<_92.QueryDenomOwnersResponse>): _92.QueryDenomOwnersResponse;
                fromAmino(object: _92.QueryDenomOwnersResponseAmino): _92.QueryDenomOwnersResponse;
                toAmino(message: _92.QueryDenomOwnersResponse): _92.QueryDenomOwnersResponseAmino;
                fromAminoMsg(object: _92.QueryDenomOwnersResponseAminoMsg): _92.QueryDenomOwnersResponse;
                toAminoMsg(message: _92.QueryDenomOwnersResponse): _92.QueryDenomOwnersResponseAminoMsg;
                fromProtoMsg(message: _92.QueryDenomOwnersResponseProtoMsg): _92.QueryDenomOwnersResponse;
                toProto(message: _92.QueryDenomOwnersResponse): Uint8Array;
                toProtoMsg(message: _92.QueryDenomOwnersResponse): _92.QueryDenomOwnersResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _91.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _91.GenesisState;
                fromPartial(object: Partial<_91.GenesisState>): _91.GenesisState;
                fromAmino(object: _91.GenesisStateAmino): _91.GenesisState;
                toAmino(message: _91.GenesisState): _91.GenesisStateAmino;
                fromAminoMsg(object: _91.GenesisStateAminoMsg): _91.GenesisState;
                toAminoMsg(message: _91.GenesisState): _91.GenesisStateAminoMsg;
                fromProtoMsg(message: _91.GenesisStateProtoMsg): _91.GenesisState;
                toProto(message: _91.GenesisState): Uint8Array;
                toProtoMsg(message: _91.GenesisState): _91.GenesisStateProtoMsg;
            };
            Balance: {
                typeUrl: string;
                encode(message: _91.Balance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _91.Balance;
                fromPartial(object: Partial<_91.Balance>): _91.Balance;
                fromAmino(object: _91.BalanceAmino): _91.Balance;
                toAmino(message: _91.Balance): _91.BalanceAmino;
                fromAminoMsg(object: _91.BalanceAminoMsg): _91.Balance;
                toAminoMsg(message: _91.Balance): _91.BalanceAminoMsg;
                fromProtoMsg(message: _91.BalanceProtoMsg): _91.Balance;
                toProto(message: _91.Balance): Uint8Array;
                toProtoMsg(message: _91.Balance): _91.BalanceProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _90.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _90.Params;
                fromPartial(object: Partial<_90.Params>): _90.Params;
                fromAmino(object: _90.ParamsAmino): _90.Params;
                toAmino(message: _90.Params): _90.ParamsAmino;
                fromAminoMsg(object: _90.ParamsAminoMsg): _90.Params;
                toAminoMsg(message: _90.Params): _90.ParamsAminoMsg;
                fromProtoMsg(message: _90.ParamsProtoMsg): _90.Params;
                toProto(message: _90.Params): Uint8Array;
                toProtoMsg(message: _90.Params): _90.ParamsProtoMsg;
            };
            SendEnabled: {
                typeUrl: string;
                encode(message: _90.SendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _90.SendEnabled;
                fromPartial(object: Partial<_90.SendEnabled>): _90.SendEnabled;
                fromAmino(object: _90.SendEnabledAmino): _90.SendEnabled;
                toAmino(message: _90.SendEnabled): _90.SendEnabledAmino;
                fromAminoMsg(object: _90.SendEnabledAminoMsg): _90.SendEnabled;
                toAminoMsg(message: _90.SendEnabled): _90.SendEnabledAminoMsg;
                fromProtoMsg(message: _90.SendEnabledProtoMsg): _90.SendEnabled;
                toProto(message: _90.SendEnabled): Uint8Array;
                toProtoMsg(message: _90.SendEnabled): _90.SendEnabledProtoMsg;
            };
            Input: {
                typeUrl: string;
                encode(message: _90.Input, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _90.Input;
                fromPartial(object: Partial<_90.Input>): _90.Input;
                fromAmino(object: _90.InputAmino): _90.Input;
                toAmino(message: _90.Input): _90.InputAmino;
                fromAminoMsg(object: _90.InputAminoMsg): _90.Input;
                toAminoMsg(message: _90.Input): _90.InputAminoMsg;
                fromProtoMsg(message: _90.InputProtoMsg): _90.Input;
                toProto(message: _90.Input): Uint8Array;
                toProtoMsg(message: _90.Input): _90.InputProtoMsg;
            };
            Output: {
                typeUrl: string;
                encode(message: _90.Output, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _90.Output;
                fromPartial(object: Partial<_90.Output>): _90.Output;
                fromAmino(object: _90.OutputAmino): _90.Output;
                toAmino(message: _90.Output): _90.OutputAmino;
                fromAminoMsg(object: _90.OutputAminoMsg): _90.Output;
                toAminoMsg(message: _90.Output): _90.OutputAminoMsg;
                fromProtoMsg(message: _90.OutputProtoMsg): _90.Output;
                toProto(message: _90.Output): Uint8Array;
                toProtoMsg(message: _90.Output): _90.OutputProtoMsg;
            };
            Supply: {
                typeUrl: string;
                encode(message: _90.Supply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _90.Supply;
                fromPartial(object: Partial<_90.Supply>): _90.Supply;
                fromAmino(object: _90.SupplyAmino): _90.Supply;
                toAmino(message: _90.Supply): _90.SupplyAmino;
                fromAminoMsg(object: _90.SupplyAminoMsg): _90.Supply;
                toAminoMsg(message: _90.Supply): _90.SupplyAminoMsg;
                fromProtoMsg(message: _90.SupplyProtoMsg): _90.Supply;
                toProto(message: _90.Supply): Uint8Array;
                toProtoMsg(message: _90.Supply): _90.SupplyProtoMsg;
            };
            DenomUnit: {
                typeUrl: string;
                encode(message: _90.DenomUnit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _90.DenomUnit;
                fromPartial(object: Partial<_90.DenomUnit>): _90.DenomUnit;
                fromAmino(object: _90.DenomUnitAmino): _90.DenomUnit;
                toAmino(message: _90.DenomUnit): _90.DenomUnitAmino;
                fromAminoMsg(object: _90.DenomUnitAminoMsg): _90.DenomUnit;
                toAminoMsg(message: _90.DenomUnit): _90.DenomUnitAminoMsg;
                fromProtoMsg(message: _90.DenomUnitProtoMsg): _90.DenomUnit;
                toProto(message: _90.DenomUnit): Uint8Array;
                toProtoMsg(message: _90.DenomUnit): _90.DenomUnitProtoMsg;
            };
            Metadata: {
                typeUrl: string;
                encode(message: _90.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _90.Metadata;
                fromPartial(object: Partial<_90.Metadata>): _90.Metadata;
                fromAmino(object: _90.MetadataAmino): _90.Metadata;
                toAmino(message: _90.Metadata): _90.MetadataAmino;
                fromAminoMsg(object: _90.MetadataAminoMsg): _90.Metadata;
                toAminoMsg(message: _90.Metadata): _90.MetadataAminoMsg;
                fromProtoMsg(message: _90.MetadataProtoMsg): _90.Metadata;
                toProto(message: _90.Metadata): Uint8Array;
                toProtoMsg(message: _90.Metadata): _90.MetadataProtoMsg;
            };
            SendAuthorization: {
                typeUrl: string;
                encode(message: _89.SendAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _89.SendAuthorization;
                fromPartial(object: Partial<_89.SendAuthorization>): _89.SendAuthorization;
                fromAmino(object: _89.SendAuthorizationAmino): _89.SendAuthorization;
                toAmino(message: _89.SendAuthorization): _89.SendAuthorizationAmino;
                fromAminoMsg(object: _89.SendAuthorizationAminoMsg): _89.SendAuthorization;
                toAminoMsg(message: _89.SendAuthorization): _89.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _89.SendAuthorizationProtoMsg): _89.SendAuthorization;
                toProto(message: _89.SendAuthorization): Uint8Array;
                toProtoMsg(message: _89.SendAuthorization): _89.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    typeUrl: string;
                    encode(message: _94.TxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _94.TxResponse;
                    fromPartial(object: Partial<_94.TxResponse>): _94.TxResponse;
                    fromAmino(object: _94.TxResponseAmino): _94.TxResponse;
                    toAmino(message: _94.TxResponse): _94.TxResponseAmino;
                    fromAminoMsg(object: _94.TxResponseAminoMsg): _94.TxResponse;
                    toAminoMsg(message: _94.TxResponse): _94.TxResponseAminoMsg;
                    fromProtoMsg(message: _94.TxResponseProtoMsg): _94.TxResponse;
                    toProto(message: _94.TxResponse): Uint8Array;
                    toProtoMsg(message: _94.TxResponse): _94.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    typeUrl: string;
                    encode(message: _94.ABCIMessageLog, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _94.ABCIMessageLog;
                    fromPartial(object: Partial<_94.ABCIMessageLog>): _94.ABCIMessageLog;
                    fromAmino(object: _94.ABCIMessageLogAmino): _94.ABCIMessageLog;
                    toAmino(message: _94.ABCIMessageLog): _94.ABCIMessageLogAmino;
                    fromAminoMsg(object: _94.ABCIMessageLogAminoMsg): _94.ABCIMessageLog;
                    toAminoMsg(message: _94.ABCIMessageLog): _94.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _94.ABCIMessageLogProtoMsg): _94.ABCIMessageLog;
                    toProto(message: _94.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _94.ABCIMessageLog): _94.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    typeUrl: string;
                    encode(message: _94.StringEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _94.StringEvent;
                    fromPartial(object: Partial<_94.StringEvent>): _94.StringEvent;
                    fromAmino(object: _94.StringEventAmino): _94.StringEvent;
                    toAmino(message: _94.StringEvent): _94.StringEventAmino;
                    fromAminoMsg(object: _94.StringEventAminoMsg): _94.StringEvent;
                    toAminoMsg(message: _94.StringEvent): _94.StringEventAminoMsg;
                    fromProtoMsg(message: _94.StringEventProtoMsg): _94.StringEvent;
                    toProto(message: _94.StringEvent): Uint8Array;
                    toProtoMsg(message: _94.StringEvent): _94.StringEventProtoMsg;
                };
                Attribute: {
                    typeUrl: string;
                    encode(message: _94.Attribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _94.Attribute;
                    fromPartial(object: Partial<_94.Attribute>): _94.Attribute;
                    fromAmino(object: _94.AttributeAmino): _94.Attribute;
                    toAmino(message: _94.Attribute): _94.AttributeAmino;
                    fromAminoMsg(object: _94.AttributeAminoMsg): _94.Attribute;
                    toAminoMsg(message: _94.Attribute): _94.AttributeAminoMsg;
                    fromProtoMsg(message: _94.AttributeProtoMsg): _94.Attribute;
                    toProto(message: _94.Attribute): Uint8Array;
                    toProtoMsg(message: _94.Attribute): _94.AttributeProtoMsg;
                };
                GasInfo: {
                    typeUrl: string;
                    encode(message: _94.GasInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _94.GasInfo;
                    fromPartial(object: Partial<_94.GasInfo>): _94.GasInfo;
                    fromAmino(object: _94.GasInfoAmino): _94.GasInfo;
                    toAmino(message: _94.GasInfo): _94.GasInfoAmino;
                    fromAminoMsg(object: _94.GasInfoAminoMsg): _94.GasInfo;
                    toAminoMsg(message: _94.GasInfo): _94.GasInfoAminoMsg;
                    fromProtoMsg(message: _94.GasInfoProtoMsg): _94.GasInfo;
                    toProto(message: _94.GasInfo): Uint8Array;
                    toProtoMsg(message: _94.GasInfo): _94.GasInfoProtoMsg;
                };
                Result: {
                    typeUrl: string;
                    encode(message: _94.Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _94.Result;
                    fromPartial(object: Partial<_94.Result>): _94.Result;
                    fromAmino(object: _94.ResultAmino): _94.Result;
                    toAmino(message: _94.Result): _94.ResultAmino;
                    fromAminoMsg(object: _94.ResultAminoMsg): _94.Result;
                    toAminoMsg(message: _94.Result): _94.ResultAminoMsg;
                    fromProtoMsg(message: _94.ResultProtoMsg): _94.Result;
                    toProto(message: _94.Result): Uint8Array;
                    toProtoMsg(message: _94.Result): _94.ResultProtoMsg;
                };
                SimulationResponse: {
                    typeUrl: string;
                    encode(message: _94.SimulationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _94.SimulationResponse;
                    fromPartial(object: Partial<_94.SimulationResponse>): _94.SimulationResponse;
                    fromAmino(object: _94.SimulationResponseAmino): _94.SimulationResponse;
                    toAmino(message: _94.SimulationResponse): _94.SimulationResponseAmino;
                    fromAminoMsg(object: _94.SimulationResponseAminoMsg): _94.SimulationResponse;
                    toAminoMsg(message: _94.SimulationResponse): _94.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _94.SimulationResponseProtoMsg): _94.SimulationResponse;
                    toProto(message: _94.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _94.SimulationResponse): _94.SimulationResponseProtoMsg;
                };
                MsgData: {
                    typeUrl: string;
                    encode(message: _94.MsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _94.MsgData;
                    fromPartial(object: Partial<_94.MsgData>): _94.MsgData;
                    fromAmino(object: _94.MsgDataAmino): _94.MsgData;
                    toAmino(message: _94.MsgData): _94.MsgDataAmino;
                    fromAminoMsg(object: _94.MsgDataAminoMsg): _94.MsgData;
                    toAminoMsg(message: _94.MsgData): _94.MsgDataAminoMsg;
                    fromProtoMsg(message: _94.MsgDataProtoMsg): _94.MsgData;
                    toProto(message: _94.MsgData): Uint8Array;
                    toProtoMsg(message: _94.MsgData): _94.MsgDataProtoMsg;
                };
                TxMsgData: {
                    typeUrl: string;
                    encode(message: _94.TxMsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _94.TxMsgData;
                    fromPartial(object: Partial<_94.TxMsgData>): _94.TxMsgData;
                    fromAmino(object: _94.TxMsgDataAmino): _94.TxMsgData;
                    toAmino(message: _94.TxMsgData): _94.TxMsgDataAmino;
                    fromAminoMsg(object: _94.TxMsgDataAminoMsg): _94.TxMsgData;
                    toAminoMsg(message: _94.TxMsgData): _94.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _94.TxMsgDataProtoMsg): _94.TxMsgData;
                    toProto(message: _94.TxMsgData): Uint8Array;
                    toProtoMsg(message: _94.TxMsgData): _94.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    typeUrl: string;
                    encode(message: _94.SearchTxsResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _94.SearchTxsResult;
                    fromPartial(object: Partial<_94.SearchTxsResult>): _94.SearchTxsResult;
                    fromAmino(object: _94.SearchTxsResultAmino): _94.SearchTxsResult;
                    toAmino(message: _94.SearchTxsResult): _94.SearchTxsResultAmino;
                    fromAminoMsg(object: _94.SearchTxsResultAminoMsg): _94.SearchTxsResult;
                    toAminoMsg(message: _94.SearchTxsResult): _94.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _94.SearchTxsResultProtoMsg): _94.SearchTxsResult;
                    toProto(message: _94.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _94.SearchTxsResult): _94.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    typeUrl: string;
                    encode(message: _95.PageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _95.PageRequest;
                    fromPartial(object: Partial<_95.PageRequest>): _95.PageRequest;
                    fromAmino(object: _95.PageRequestAmino): _95.PageRequest;
                    toAmino(message: _95.PageRequest): _95.PageRequestAmino;
                    fromAminoMsg(object: _95.PageRequestAminoMsg): _95.PageRequest;
                    toAminoMsg(message: _95.PageRequest): _95.PageRequestAminoMsg;
                    fromProtoMsg(message: _95.PageRequestProtoMsg): _95.PageRequest;
                    toProto(message: _95.PageRequest): Uint8Array;
                    toProtoMsg(message: _95.PageRequest): _95.PageRequestProtoMsg;
                };
                PageResponse: {
                    typeUrl: string;
                    encode(message: _95.PageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _95.PageResponse;
                    fromPartial(object: Partial<_95.PageResponse>): _95.PageResponse;
                    fromAmino(object: _95.PageResponseAmino): _95.PageResponse;
                    toAmino(message: _95.PageResponse): _95.PageResponseAmino;
                    fromAminoMsg(object: _95.PageResponseAminoMsg): _95.PageResponse;
                    toAminoMsg(message: _95.PageResponse): _95.PageResponseAminoMsg;
                    fromProtoMsg(message: _95.PageResponseProtoMsg): _95.PageResponse;
                    toProto(message: _95.PageResponse): Uint8Array;
                    toProtoMsg(message: _95.PageResponse): _95.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v2alpha1: {
                AppDescriptor: {
                    typeUrl: string;
                    encode(message: _96.AppDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _96.AppDescriptor;
                    fromPartial(object: Partial<_96.AppDescriptor>): _96.AppDescriptor;
                    fromAmino(object: _96.AppDescriptorAmino): _96.AppDescriptor;
                    toAmino(message: _96.AppDescriptor): _96.AppDescriptorAmino;
                    fromAminoMsg(object: _96.AppDescriptorAminoMsg): _96.AppDescriptor;
                    toAminoMsg(message: _96.AppDescriptor): _96.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _96.AppDescriptorProtoMsg): _96.AppDescriptor;
                    toProto(message: _96.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _96.AppDescriptor): _96.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    typeUrl: string;
                    encode(message: _96.TxDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _96.TxDescriptor;
                    fromPartial(object: Partial<_96.TxDescriptor>): _96.TxDescriptor;
                    fromAmino(object: _96.TxDescriptorAmino): _96.TxDescriptor;
                    toAmino(message: _96.TxDescriptor): _96.TxDescriptorAmino;
                    fromAminoMsg(object: _96.TxDescriptorAminoMsg): _96.TxDescriptor;
                    toAminoMsg(message: _96.TxDescriptor): _96.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _96.TxDescriptorProtoMsg): _96.TxDescriptor;
                    toProto(message: _96.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _96.TxDescriptor): _96.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    typeUrl: string;
                    encode(message: _96.AuthnDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _96.AuthnDescriptor;
                    fromPartial(object: Partial<_96.AuthnDescriptor>): _96.AuthnDescriptor;
                    fromAmino(object: _96.AuthnDescriptorAmino): _96.AuthnDescriptor;
                    toAmino(message: _96.AuthnDescriptor): _96.AuthnDescriptorAmino;
                    fromAminoMsg(object: _96.AuthnDescriptorAminoMsg): _96.AuthnDescriptor;
                    toAminoMsg(message: _96.AuthnDescriptor): _96.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _96.AuthnDescriptorProtoMsg): _96.AuthnDescriptor;
                    toProto(message: _96.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _96.AuthnDescriptor): _96.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    typeUrl: string;
                    encode(message: _96.SigningModeDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _96.SigningModeDescriptor;
                    fromPartial(object: Partial<_96.SigningModeDescriptor>): _96.SigningModeDescriptor;
                    fromAmino(object: _96.SigningModeDescriptorAmino): _96.SigningModeDescriptor;
                    toAmino(message: _96.SigningModeDescriptor): _96.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _96.SigningModeDescriptorAminoMsg): _96.SigningModeDescriptor;
                    toAminoMsg(message: _96.SigningModeDescriptor): _96.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _96.SigningModeDescriptorProtoMsg): _96.SigningModeDescriptor;
                    toProto(message: _96.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _96.SigningModeDescriptor): _96.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    typeUrl: string;
                    encode(message: _96.ChainDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _96.ChainDescriptor;
                    fromPartial(object: Partial<_96.ChainDescriptor>): _96.ChainDescriptor;
                    fromAmino(object: _96.ChainDescriptorAmino): _96.ChainDescriptor;
                    toAmino(message: _96.ChainDescriptor): _96.ChainDescriptorAmino;
                    fromAminoMsg(object: _96.ChainDescriptorAminoMsg): _96.ChainDescriptor;
                    toAminoMsg(message: _96.ChainDescriptor): _96.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _96.ChainDescriptorProtoMsg): _96.ChainDescriptor;
                    toProto(message: _96.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _96.ChainDescriptor): _96.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    typeUrl: string;
                    encode(message: _96.CodecDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _96.CodecDescriptor;
                    fromPartial(object: Partial<_96.CodecDescriptor>): _96.CodecDescriptor;
                    fromAmino(object: _96.CodecDescriptorAmino): _96.CodecDescriptor;
                    toAmino(message: _96.CodecDescriptor): _96.CodecDescriptorAmino;
                    fromAminoMsg(object: _96.CodecDescriptorAminoMsg): _96.CodecDescriptor;
                    toAminoMsg(message: _96.CodecDescriptor): _96.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _96.CodecDescriptorProtoMsg): _96.CodecDescriptor;
                    toProto(message: _96.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _96.CodecDescriptor): _96.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    typeUrl: string;
                    encode(message: _96.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _96.InterfaceDescriptor;
                    fromPartial(object: Partial<_96.InterfaceDescriptor>): _96.InterfaceDescriptor;
                    fromAmino(object: _96.InterfaceDescriptorAmino): _96.InterfaceDescriptor;
                    toAmino(message: _96.InterfaceDescriptor): _96.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _96.InterfaceDescriptorAminoMsg): _96.InterfaceDescriptor;
                    toAminoMsg(message: _96.InterfaceDescriptor): _96.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _96.InterfaceDescriptorProtoMsg): _96.InterfaceDescriptor;
                    toProto(message: _96.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _96.InterfaceDescriptor): _96.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    typeUrl: string;
                    encode(message: _96.InterfaceImplementerDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _96.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_96.InterfaceImplementerDescriptor>): _96.InterfaceImplementerDescriptor;
                    fromAmino(object: _96.InterfaceImplementerDescriptorAmino): _96.InterfaceImplementerDescriptor;
                    toAmino(message: _96.InterfaceImplementerDescriptor): _96.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _96.InterfaceImplementerDescriptorAminoMsg): _96.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _96.InterfaceImplementerDescriptor): _96.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _96.InterfaceImplementerDescriptorProtoMsg): _96.InterfaceImplementerDescriptor;
                    toProto(message: _96.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _96.InterfaceImplementerDescriptor): _96.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    typeUrl: string;
                    encode(message: _96.InterfaceAcceptingMessageDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _96.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_96.InterfaceAcceptingMessageDescriptor>): _96.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _96.InterfaceAcceptingMessageDescriptorAmino): _96.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _96.InterfaceAcceptingMessageDescriptor): _96.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _96.InterfaceAcceptingMessageDescriptorAminoMsg): _96.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _96.InterfaceAcceptingMessageDescriptor): _96.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _96.InterfaceAcceptingMessageDescriptorProtoMsg): _96.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _96.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _96.InterfaceAcceptingMessageDescriptor): _96.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    typeUrl: string;
                    encode(message: _96.ConfigurationDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _96.ConfigurationDescriptor;
                    fromPartial(object: Partial<_96.ConfigurationDescriptor>): _96.ConfigurationDescriptor;
                    fromAmino(object: _96.ConfigurationDescriptorAmino): _96.ConfigurationDescriptor;
                    toAmino(message: _96.ConfigurationDescriptor): _96.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _96.ConfigurationDescriptorAminoMsg): _96.ConfigurationDescriptor;
                    toAminoMsg(message: _96.ConfigurationDescriptor): _96.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _96.ConfigurationDescriptorProtoMsg): _96.ConfigurationDescriptor;
                    toProto(message: _96.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _96.ConfigurationDescriptor): _96.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    typeUrl: string;
                    encode(message: _96.MsgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _96.MsgDescriptor;
                    fromPartial(object: Partial<_96.MsgDescriptor>): _96.MsgDescriptor;
                    fromAmino(object: _96.MsgDescriptorAmino): _96.MsgDescriptor;
                    toAmino(message: _96.MsgDescriptor): _96.MsgDescriptorAmino;
                    fromAminoMsg(object: _96.MsgDescriptorAminoMsg): _96.MsgDescriptor;
                    toAminoMsg(message: _96.MsgDescriptor): _96.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _96.MsgDescriptorProtoMsg): _96.MsgDescriptor;
                    toProto(message: _96.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _96.MsgDescriptor): _96.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _96.GetAuthnDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _96.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_96.GetAuthnDescriptorRequest>): _96.GetAuthnDescriptorRequest;
                    fromAmino(_: _96.GetAuthnDescriptorRequestAmino): _96.GetAuthnDescriptorRequest;
                    toAmino(_: _96.GetAuthnDescriptorRequest): _96.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _96.GetAuthnDescriptorRequestAminoMsg): _96.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _96.GetAuthnDescriptorRequest): _96.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _96.GetAuthnDescriptorRequestProtoMsg): _96.GetAuthnDescriptorRequest;
                    toProto(message: _96.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _96.GetAuthnDescriptorRequest): _96.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _96.GetAuthnDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _96.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_96.GetAuthnDescriptorResponse>): _96.GetAuthnDescriptorResponse;
                    fromAmino(object: _96.GetAuthnDescriptorResponseAmino): _96.GetAuthnDescriptorResponse;
                    toAmino(message: _96.GetAuthnDescriptorResponse): _96.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _96.GetAuthnDescriptorResponseAminoMsg): _96.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _96.GetAuthnDescriptorResponse): _96.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _96.GetAuthnDescriptorResponseProtoMsg): _96.GetAuthnDescriptorResponse;
                    toProto(message: _96.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _96.GetAuthnDescriptorResponse): _96.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _96.GetChainDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _96.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_96.GetChainDescriptorRequest>): _96.GetChainDescriptorRequest;
                    fromAmino(_: _96.GetChainDescriptorRequestAmino): _96.GetChainDescriptorRequest;
                    toAmino(_: _96.GetChainDescriptorRequest): _96.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _96.GetChainDescriptorRequestAminoMsg): _96.GetChainDescriptorRequest;
                    toAminoMsg(message: _96.GetChainDescriptorRequest): _96.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _96.GetChainDescriptorRequestProtoMsg): _96.GetChainDescriptorRequest;
                    toProto(message: _96.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _96.GetChainDescriptorRequest): _96.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _96.GetChainDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _96.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_96.GetChainDescriptorResponse>): _96.GetChainDescriptorResponse;
                    fromAmino(object: _96.GetChainDescriptorResponseAmino): _96.GetChainDescriptorResponse;
                    toAmino(message: _96.GetChainDescriptorResponse): _96.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _96.GetChainDescriptorResponseAminoMsg): _96.GetChainDescriptorResponse;
                    toAminoMsg(message: _96.GetChainDescriptorResponse): _96.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _96.GetChainDescriptorResponseProtoMsg): _96.GetChainDescriptorResponse;
                    toProto(message: _96.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _96.GetChainDescriptorResponse): _96.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _96.GetCodecDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _96.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_96.GetCodecDescriptorRequest>): _96.GetCodecDescriptorRequest;
                    fromAmino(_: _96.GetCodecDescriptorRequestAmino): _96.GetCodecDescriptorRequest;
                    toAmino(_: _96.GetCodecDescriptorRequest): _96.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _96.GetCodecDescriptorRequestAminoMsg): _96.GetCodecDescriptorRequest;
                    toAminoMsg(message: _96.GetCodecDescriptorRequest): _96.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _96.GetCodecDescriptorRequestProtoMsg): _96.GetCodecDescriptorRequest;
                    toProto(message: _96.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _96.GetCodecDescriptorRequest): _96.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _96.GetCodecDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _96.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_96.GetCodecDescriptorResponse>): _96.GetCodecDescriptorResponse;
                    fromAmino(object: _96.GetCodecDescriptorResponseAmino): _96.GetCodecDescriptorResponse;
                    toAmino(message: _96.GetCodecDescriptorResponse): _96.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _96.GetCodecDescriptorResponseAminoMsg): _96.GetCodecDescriptorResponse;
                    toAminoMsg(message: _96.GetCodecDescriptorResponse): _96.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _96.GetCodecDescriptorResponseProtoMsg): _96.GetCodecDescriptorResponse;
                    toProto(message: _96.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _96.GetCodecDescriptorResponse): _96.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _96.GetConfigurationDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _96.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_96.GetConfigurationDescriptorRequest>): _96.GetConfigurationDescriptorRequest;
                    fromAmino(_: _96.GetConfigurationDescriptorRequestAmino): _96.GetConfigurationDescriptorRequest;
                    toAmino(_: _96.GetConfigurationDescriptorRequest): _96.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _96.GetConfigurationDescriptorRequestAminoMsg): _96.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _96.GetConfigurationDescriptorRequest): _96.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _96.GetConfigurationDescriptorRequestProtoMsg): _96.GetConfigurationDescriptorRequest;
                    toProto(message: _96.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _96.GetConfigurationDescriptorRequest): _96.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _96.GetConfigurationDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _96.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_96.GetConfigurationDescriptorResponse>): _96.GetConfigurationDescriptorResponse;
                    fromAmino(object: _96.GetConfigurationDescriptorResponseAmino): _96.GetConfigurationDescriptorResponse;
                    toAmino(message: _96.GetConfigurationDescriptorResponse): _96.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _96.GetConfigurationDescriptorResponseAminoMsg): _96.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _96.GetConfigurationDescriptorResponse): _96.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _96.GetConfigurationDescriptorResponseProtoMsg): _96.GetConfigurationDescriptorResponse;
                    toProto(message: _96.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _96.GetConfigurationDescriptorResponse): _96.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _96.GetQueryServicesDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _96.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_96.GetQueryServicesDescriptorRequest>): _96.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _96.GetQueryServicesDescriptorRequestAmino): _96.GetQueryServicesDescriptorRequest;
                    toAmino(_: _96.GetQueryServicesDescriptorRequest): _96.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _96.GetQueryServicesDescriptorRequestAminoMsg): _96.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _96.GetQueryServicesDescriptorRequest): _96.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _96.GetQueryServicesDescriptorRequestProtoMsg): _96.GetQueryServicesDescriptorRequest;
                    toProto(message: _96.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _96.GetQueryServicesDescriptorRequest): _96.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _96.GetQueryServicesDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _96.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_96.GetQueryServicesDescriptorResponse>): _96.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _96.GetQueryServicesDescriptorResponseAmino): _96.GetQueryServicesDescriptorResponse;
                    toAmino(message: _96.GetQueryServicesDescriptorResponse): _96.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _96.GetQueryServicesDescriptorResponseAminoMsg): _96.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _96.GetQueryServicesDescriptorResponse): _96.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _96.GetQueryServicesDescriptorResponseProtoMsg): _96.GetQueryServicesDescriptorResponse;
                    toProto(message: _96.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _96.GetQueryServicesDescriptorResponse): _96.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _96.GetTxDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _96.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_96.GetTxDescriptorRequest>): _96.GetTxDescriptorRequest;
                    fromAmino(_: _96.GetTxDescriptorRequestAmino): _96.GetTxDescriptorRequest;
                    toAmino(_: _96.GetTxDescriptorRequest): _96.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _96.GetTxDescriptorRequestAminoMsg): _96.GetTxDescriptorRequest;
                    toAminoMsg(message: _96.GetTxDescriptorRequest): _96.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _96.GetTxDescriptorRequestProtoMsg): _96.GetTxDescriptorRequest;
                    toProto(message: _96.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _96.GetTxDescriptorRequest): _96.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _96.GetTxDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _96.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_96.GetTxDescriptorResponse>): _96.GetTxDescriptorResponse;
                    fromAmino(object: _96.GetTxDescriptorResponseAmino): _96.GetTxDescriptorResponse;
                    toAmino(message: _96.GetTxDescriptorResponse): _96.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _96.GetTxDescriptorResponseAminoMsg): _96.GetTxDescriptorResponse;
                    toAminoMsg(message: _96.GetTxDescriptorResponse): _96.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _96.GetTxDescriptorResponseProtoMsg): _96.GetTxDescriptorResponse;
                    toProto(message: _96.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _96.GetTxDescriptorResponse): _96.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    typeUrl: string;
                    encode(message: _96.QueryServicesDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _96.QueryServicesDescriptor;
                    fromPartial(object: Partial<_96.QueryServicesDescriptor>): _96.QueryServicesDescriptor;
                    fromAmino(object: _96.QueryServicesDescriptorAmino): _96.QueryServicesDescriptor;
                    toAmino(message: _96.QueryServicesDescriptor): _96.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _96.QueryServicesDescriptorAminoMsg): _96.QueryServicesDescriptor;
                    toAminoMsg(message: _96.QueryServicesDescriptor): _96.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _96.QueryServicesDescriptorProtoMsg): _96.QueryServicesDescriptor;
                    toProto(message: _96.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _96.QueryServicesDescriptor): _96.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    typeUrl: string;
                    encode(message: _96.QueryServiceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _96.QueryServiceDescriptor;
                    fromPartial(object: Partial<_96.QueryServiceDescriptor>): _96.QueryServiceDescriptor;
                    fromAmino(object: _96.QueryServiceDescriptorAmino): _96.QueryServiceDescriptor;
                    toAmino(message: _96.QueryServiceDescriptor): _96.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _96.QueryServiceDescriptorAminoMsg): _96.QueryServiceDescriptor;
                    toAminoMsg(message: _96.QueryServiceDescriptor): _96.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _96.QueryServiceDescriptorProtoMsg): _96.QueryServiceDescriptor;
                    toProto(message: _96.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _96.QueryServiceDescriptor): _96.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    typeUrl: string;
                    encode(message: _96.QueryMethodDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _96.QueryMethodDescriptor;
                    fromPartial(object: Partial<_96.QueryMethodDescriptor>): _96.QueryMethodDescriptor;
                    fromAmino(object: _96.QueryMethodDescriptorAmino): _96.QueryMethodDescriptor;
                    toAmino(message: _96.QueryMethodDescriptor): _96.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _96.QueryMethodDescriptorAminoMsg): _96.QueryMethodDescriptor;
                    toAminoMsg(message: _96.QueryMethodDescriptor): _96.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _96.QueryMethodDescriptorProtoMsg): _96.QueryMethodDescriptor;
                    toProto(message: _96.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _96.QueryMethodDescriptor): _96.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                typeUrl: string;
                encode(message: _97.Coin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _97.Coin;
                fromPartial(object: Partial<_97.Coin>): _97.Coin;
                fromAmino(object: _97.CoinAmino): _97.Coin;
                toAmino(message: _97.Coin): _97.CoinAmino;
                fromAminoMsg(object: _97.CoinAminoMsg): _97.Coin;
                toAminoMsg(message: _97.Coin): _97.CoinAminoMsg;
                fromProtoMsg(message: _97.CoinProtoMsg): _97.Coin;
                toProto(message: _97.Coin): Uint8Array;
                toProtoMsg(message: _97.Coin): _97.CoinProtoMsg;
            };
            DecCoin: {
                typeUrl: string;
                encode(message: _97.DecCoin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _97.DecCoin;
                fromPartial(object: Partial<_97.DecCoin>): _97.DecCoin;
                fromAmino(object: _97.DecCoinAmino): _97.DecCoin;
                toAmino(message: _97.DecCoin): _97.DecCoinAmino;
                fromAminoMsg(object: _97.DecCoinAminoMsg): _97.DecCoin;
                toAminoMsg(message: _97.DecCoin): _97.DecCoinAminoMsg;
                fromProtoMsg(message: _97.DecCoinProtoMsg): _97.DecCoin;
                toProto(message: _97.DecCoin): Uint8Array;
                toProtoMsg(message: _97.DecCoin): _97.DecCoinProtoMsg;
            };
            IntProto: {
                typeUrl: string;
                encode(message: _97.IntProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _97.IntProto;
                fromPartial(object: Partial<_97.IntProto>): _97.IntProto;
                fromAmino(object: _97.IntProtoAmino): _97.IntProto;
                toAmino(message: _97.IntProto): _97.IntProtoAmino;
                fromAminoMsg(object: _97.IntProtoAminoMsg): _97.IntProto;
                toAminoMsg(message: _97.IntProto): _97.IntProtoAminoMsg;
                fromProtoMsg(message: _97.IntProtoProtoMsg): _97.IntProto;
                toProto(message: _97.IntProto): Uint8Array;
                toProtoMsg(message: _97.IntProto): _97.IntProtoProtoMsg;
            };
            DecProto: {
                typeUrl: string;
                encode(message: _97.DecProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _97.DecProto;
                fromPartial(object: Partial<_97.DecProto>): _97.DecProto;
                fromAmino(object: _97.DecProtoAmino): _97.DecProto;
                toAmino(message: _97.DecProto): _97.DecProtoAmino;
                fromAminoMsg(object: _97.DecProtoAminoMsg): _97.DecProto;
                toAminoMsg(message: _97.DecProto): _97.DecProtoAminoMsg;
                fromProtoMsg(message: _97.DecProtoProtoMsg): _97.DecProto;
                toProto(message: _97.DecProto): Uint8Array;
                toProtoMsg(message: _97.DecProto): _97.DecProtoProtoMsg;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                typeUrl: string;
                encode(message: _98.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _98.PubKey;
                fromPartial(object: Partial<_98.PubKey>): _98.PubKey;
                fromAmino(object: _98.PubKeyAmino): _98.PubKey;
                toAmino(message: _98.PubKey): _98.PubKeyAmino;
                fromAminoMsg(object: _98.PubKeyAminoMsg): _98.PubKey;
                toAminoMsg(message: _98.PubKey): _98.PubKeyAminoMsg;
                fromProtoMsg(message: _98.PubKeyProtoMsg): _98.PubKey;
                toProto(message: _98.PubKey): Uint8Array;
                toProtoMsg(message: _98.PubKey): _98.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _98.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _98.PrivKey;
                fromPartial(object: Partial<_98.PrivKey>): _98.PrivKey;
                fromAmino(object: _98.PrivKeyAmino): _98.PrivKey;
                toAmino(message: _98.PrivKey): _98.PrivKeyAmino;
                fromAminoMsg(object: _98.PrivKeyAminoMsg): _98.PrivKey;
                toAminoMsg(message: _98.PrivKey): _98.PrivKeyAminoMsg;
                fromProtoMsg(message: _98.PrivKeyProtoMsg): _98.PrivKey;
                toProto(message: _98.PrivKey): Uint8Array;
                toProtoMsg(message: _98.PrivKey): _98.PrivKeyProtoMsg;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    typeUrl: string;
                    encode(message: _99.BIP44Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _99.BIP44Params;
                    fromPartial(object: Partial<_99.BIP44Params>): _99.BIP44Params;
                    fromAmino(object: _99.BIP44ParamsAmino): _99.BIP44Params;
                    toAmino(message: _99.BIP44Params): _99.BIP44ParamsAmino;
                    fromAminoMsg(object: _99.BIP44ParamsAminoMsg): _99.BIP44Params;
                    toAminoMsg(message: _99.BIP44Params): _99.BIP44ParamsAminoMsg;
                    fromProtoMsg(message: _99.BIP44ParamsProtoMsg): _99.BIP44Params;
                    toProto(message: _99.BIP44Params): Uint8Array;
                    toProtoMsg(message: _99.BIP44Params): _99.BIP44ParamsProtoMsg;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    typeUrl: string;
                    encode(message: _100.Record, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _100.Record;
                    fromPartial(object: Partial<_100.Record>): _100.Record;
                    fromAmino(object: _100.RecordAmino): _100.Record;
                    toAmino(message: _100.Record): _100.RecordAmino;
                    fromAminoMsg(object: _100.RecordAminoMsg): _100.Record;
                    toAminoMsg(message: _100.Record): _100.RecordAminoMsg;
                    fromProtoMsg(message: _100.RecordProtoMsg): _100.Record;
                    toProto(message: _100.Record): Uint8Array;
                    toProtoMsg(message: _100.Record): _100.RecordProtoMsg;
                };
                Record_Local: {
                    typeUrl: string;
                    encode(message: _100.Record_Local, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _100.Record_Local;
                    fromPartial(object: Partial<_100.Record_Local>): _100.Record_Local;
                    fromAmino(object: _100.Record_LocalAmino): _100.Record_Local;
                    toAmino(message: _100.Record_Local): _100.Record_LocalAmino;
                    fromAminoMsg(object: _100.Record_LocalAminoMsg): _100.Record_Local;
                    toAminoMsg(message: _100.Record_Local): _100.Record_LocalAminoMsg;
                    fromProtoMsg(message: _100.Record_LocalProtoMsg): _100.Record_Local;
                    toProto(message: _100.Record_Local): Uint8Array;
                    toProtoMsg(message: _100.Record_Local): _100.Record_LocalProtoMsg;
                };
                Record_Ledger: {
                    typeUrl: string;
                    encode(message: _100.Record_Ledger, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _100.Record_Ledger;
                    fromPartial(object: Partial<_100.Record_Ledger>): _100.Record_Ledger;
                    fromAmino(object: _100.Record_LedgerAmino): _100.Record_Ledger;
                    toAmino(message: _100.Record_Ledger): _100.Record_LedgerAmino;
                    fromAminoMsg(object: _100.Record_LedgerAminoMsg): _100.Record_Ledger;
                    toAminoMsg(message: _100.Record_Ledger): _100.Record_LedgerAminoMsg;
                    fromProtoMsg(message: _100.Record_LedgerProtoMsg): _100.Record_Ledger;
                    toProto(message: _100.Record_Ledger): Uint8Array;
                    toProtoMsg(message: _100.Record_Ledger): _100.Record_LedgerProtoMsg;
                };
                Record_Multi: {
                    typeUrl: string;
                    encode(_: _100.Record_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _100.Record_Multi;
                    fromPartial(_: Partial<_100.Record_Multi>): _100.Record_Multi;
                    fromAmino(_: _100.Record_MultiAmino): _100.Record_Multi;
                    toAmino(_: _100.Record_Multi): _100.Record_MultiAmino;
                    fromAminoMsg(object: _100.Record_MultiAminoMsg): _100.Record_Multi;
                    toAminoMsg(message: _100.Record_Multi): _100.Record_MultiAminoMsg;
                    fromProtoMsg(message: _100.Record_MultiProtoMsg): _100.Record_Multi;
                    toProto(message: _100.Record_Multi): Uint8Array;
                    toProtoMsg(message: _100.Record_Multi): _100.Record_MultiProtoMsg;
                };
                Record_Offline: {
                    typeUrl: string;
                    encode(_: _100.Record_Offline, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _100.Record_Offline;
                    fromPartial(_: Partial<_100.Record_Offline>): _100.Record_Offline;
                    fromAmino(_: _100.Record_OfflineAmino): _100.Record_Offline;
                    toAmino(_: _100.Record_Offline): _100.Record_OfflineAmino;
                    fromAminoMsg(object: _100.Record_OfflineAminoMsg): _100.Record_Offline;
                    toAminoMsg(message: _100.Record_Offline): _100.Record_OfflineAminoMsg;
                    fromProtoMsg(message: _100.Record_OfflineProtoMsg): _100.Record_Offline;
                    toProto(message: _100.Record_Offline): Uint8Array;
                    toProtoMsg(message: _100.Record_Offline): _100.Record_OfflineProtoMsg;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                typeUrl: string;
                encode(message: _101.LegacyAminoPubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _101.LegacyAminoPubKey;
                fromPartial(object: Partial<_101.LegacyAminoPubKey>): _101.LegacyAminoPubKey;
                fromAmino(object: _101.LegacyAminoPubKeyAmino): _101.LegacyAminoPubKey;
                toAmino(message: _101.LegacyAminoPubKey): _101.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _101.LegacyAminoPubKeyAminoMsg): _101.LegacyAminoPubKey;
                toAminoMsg(message: _101.LegacyAminoPubKey): _101.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _101.LegacyAminoPubKeyProtoMsg): _101.LegacyAminoPubKey;
                toProto(message: _101.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _101.LegacyAminoPubKey): _101.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
            PubKey: {
                typeUrl: string;
                encode(message: _102.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _102.PubKey;
                fromPartial(object: Partial<_102.PubKey>): _102.PubKey;
                fromAmino(object: _102.PubKeyAmino): _102.PubKey;
                toAmino(message: _102.PubKey): _102.PubKeyAmino;
                fromAminoMsg(object: _102.PubKeyAminoMsg): _102.PubKey;
                toAminoMsg(message: _102.PubKey): _102.PubKeyAminoMsg;
                fromProtoMsg(message: _102.PubKeyProtoMsg): _102.PubKey;
                toProto(message: _102.PubKey): Uint8Array;
                toProtoMsg(message: _102.PubKey): _102.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _102.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _102.PrivKey;
                fromPartial(object: Partial<_102.PrivKey>): _102.PrivKey;
                fromAmino(object: _102.PrivKeyAmino): _102.PrivKey;
                toAmino(message: _102.PrivKey): _102.PrivKeyAmino;
                fromAminoMsg(object: _102.PrivKeyAminoMsg): _102.PrivKey;
                toAminoMsg(message: _102.PrivKey): _102.PrivKeyAminoMsg;
                fromProtoMsg(message: _102.PrivKeyProtoMsg): _102.PrivKey;
                toProto(message: _102.PrivKey): Uint8Array;
                toProtoMsg(message: _102.PrivKey): _102.PrivKeyProtoMsg;
            };
        };
        const secp256r1: {
            PubKey: {
                typeUrl: string;
                encode(message: _103.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _103.PubKey;
                fromPartial(object: Partial<_103.PubKey>): _103.PubKey;
                fromAmino(object: _103.PubKeyAmino): _103.PubKey;
                toAmino(message: _103.PubKey): _103.PubKeyAmino;
                fromAminoMsg(object: _103.PubKeyAminoMsg): _103.PubKey;
                toAminoMsg(message: _103.PubKey): _103.PubKeyAminoMsg;
                fromProtoMsg(message: _103.PubKeyProtoMsg): _103.PubKey;
                toProto(message: _103.PubKey): Uint8Array;
                toProtoMsg(message: _103.PubKey): _103.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _103.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _103.PrivKey;
                fromPartial(object: Partial<_103.PrivKey>): _103.PrivKey;
                fromAmino(object: _103.PrivKeyAmino): _103.PrivKey;
                toAmino(message: _103.PrivKey): _103.PrivKeyAmino;
                fromAminoMsg(object: _103.PrivKeyAminoMsg): _103.PrivKey;
                toAminoMsg(message: _103.PrivKey): _103.PrivKeyAminoMsg;
                fromProtoMsg(message: _103.PrivKeyProtoMsg): _103.PrivKey;
                toProto(message: _103.PrivKey): Uint8Array;
                toProtoMsg(message: _103.PrivKey): _103.PrivKeyProtoMsg;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _444.MsgClientImpl;
            QueryClientImpl: typeof _432.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _106.QueryParamsRequest): Promise<_106.QueryParamsResponse>;
                validatorOutstandingRewards(request: _106.QueryValidatorOutstandingRewardsRequest): Promise<_106.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _106.QueryValidatorCommissionRequest): Promise<_106.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _106.QueryValidatorSlashesRequest): Promise<_106.QueryValidatorSlashesResponse>;
                delegationRewards(request: _106.QueryDelegationRewardsRequest): Promise<_106.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _106.QueryDelegationTotalRewardsRequest): Promise<_106.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _106.QueryDelegatorValidatorsRequest): Promise<_106.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _106.QueryDelegatorWithdrawAddressRequest): Promise<_106.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _106.QueryCommunityPoolRequest): Promise<_106.QueryCommunityPoolResponse>;
            };
            registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _107.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _107.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _107.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _107.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _107.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _107.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _107.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _107.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _107.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _107.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _107.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _107.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _107.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _107.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _107.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _107.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _107.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _107.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _107.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _107.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _107.MsgSetWithdrawAddress) => _107.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _107.MsgSetWithdrawAddressAmino) => _107.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _107.MsgWithdrawDelegatorReward) => _107.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _107.MsgWithdrawDelegatorRewardAmino) => _107.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _107.MsgWithdrawValidatorCommission) => _107.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _107.MsgWithdrawValidatorCommissionAmino) => _107.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _107.MsgFundCommunityPool) => _107.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _107.MsgFundCommunityPoolAmino) => _107.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                typeUrl: string;
                encode(message: _107.MsgSetWithdrawAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_107.MsgSetWithdrawAddress>): _107.MsgSetWithdrawAddress;
                fromAmino(object: _107.MsgSetWithdrawAddressAmino): _107.MsgSetWithdrawAddress;
                toAmino(message: _107.MsgSetWithdrawAddress): _107.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _107.MsgSetWithdrawAddressAminoMsg): _107.MsgSetWithdrawAddress;
                toAminoMsg(message: _107.MsgSetWithdrawAddress): _107.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _107.MsgSetWithdrawAddressProtoMsg): _107.MsgSetWithdrawAddress;
                toProto(message: _107.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _107.MsgSetWithdrawAddress): _107.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                typeUrl: string;
                encode(_: _107.MsgSetWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_107.MsgSetWithdrawAddressResponse>): _107.MsgSetWithdrawAddressResponse;
                fromAmino(_: _107.MsgSetWithdrawAddressResponseAmino): _107.MsgSetWithdrawAddressResponse;
                toAmino(_: _107.MsgSetWithdrawAddressResponse): _107.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _107.MsgSetWithdrawAddressResponseAminoMsg): _107.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _107.MsgSetWithdrawAddressResponse): _107.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _107.MsgSetWithdrawAddressResponseProtoMsg): _107.MsgSetWithdrawAddressResponse;
                toProto(message: _107.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _107.MsgSetWithdrawAddressResponse): _107.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                typeUrl: string;
                encode(message: _107.MsgWithdrawDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_107.MsgWithdrawDelegatorReward>): _107.MsgWithdrawDelegatorReward;
                fromAmino(object: _107.MsgWithdrawDelegatorRewardAmino): _107.MsgWithdrawDelegatorReward;
                toAmino(message: _107.MsgWithdrawDelegatorReward): _107.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _107.MsgWithdrawDelegatorRewardAminoMsg): _107.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _107.MsgWithdrawDelegatorReward): _107.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _107.MsgWithdrawDelegatorRewardProtoMsg): _107.MsgWithdrawDelegatorReward;
                toProto(message: _107.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _107.MsgWithdrawDelegatorReward): _107.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                typeUrl: string;
                encode(message: _107.MsgWithdrawDelegatorRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.MsgWithdrawDelegatorRewardResponse;
                fromPartial(object: Partial<_107.MsgWithdrawDelegatorRewardResponse>): _107.MsgWithdrawDelegatorRewardResponse;
                fromAmino(object: _107.MsgWithdrawDelegatorRewardResponseAmino): _107.MsgWithdrawDelegatorRewardResponse;
                toAmino(message: _107.MsgWithdrawDelegatorRewardResponse): _107.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _107.MsgWithdrawDelegatorRewardResponseAminoMsg): _107.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _107.MsgWithdrawDelegatorRewardResponse): _107.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _107.MsgWithdrawDelegatorRewardResponseProtoMsg): _107.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _107.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _107.MsgWithdrawDelegatorRewardResponse): _107.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                typeUrl: string;
                encode(message: _107.MsgWithdrawValidatorCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_107.MsgWithdrawValidatorCommission>): _107.MsgWithdrawValidatorCommission;
                fromAmino(object: _107.MsgWithdrawValidatorCommissionAmino): _107.MsgWithdrawValidatorCommission;
                toAmino(message: _107.MsgWithdrawValidatorCommission): _107.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _107.MsgWithdrawValidatorCommissionAminoMsg): _107.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _107.MsgWithdrawValidatorCommission): _107.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _107.MsgWithdrawValidatorCommissionProtoMsg): _107.MsgWithdrawValidatorCommission;
                toProto(message: _107.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _107.MsgWithdrawValidatorCommission): _107.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _107.MsgWithdrawValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.MsgWithdrawValidatorCommissionResponse;
                fromPartial(object: Partial<_107.MsgWithdrawValidatorCommissionResponse>): _107.MsgWithdrawValidatorCommissionResponse;
                fromAmino(object: _107.MsgWithdrawValidatorCommissionResponseAmino): _107.MsgWithdrawValidatorCommissionResponse;
                toAmino(message: _107.MsgWithdrawValidatorCommissionResponse): _107.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _107.MsgWithdrawValidatorCommissionResponseAminoMsg): _107.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _107.MsgWithdrawValidatorCommissionResponse): _107.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _107.MsgWithdrawValidatorCommissionResponseProtoMsg): _107.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _107.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _107.MsgWithdrawValidatorCommissionResponse): _107.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                typeUrl: string;
                encode(message: _107.MsgFundCommunityPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.MsgFundCommunityPool;
                fromPartial(object: Partial<_107.MsgFundCommunityPool>): _107.MsgFundCommunityPool;
                fromAmino(object: _107.MsgFundCommunityPoolAmino): _107.MsgFundCommunityPool;
                toAmino(message: _107.MsgFundCommunityPool): _107.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _107.MsgFundCommunityPoolAminoMsg): _107.MsgFundCommunityPool;
                toAminoMsg(message: _107.MsgFundCommunityPool): _107.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _107.MsgFundCommunityPoolProtoMsg): _107.MsgFundCommunityPool;
                toProto(message: _107.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _107.MsgFundCommunityPool): _107.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                typeUrl: string;
                encode(_: _107.MsgFundCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_107.MsgFundCommunityPoolResponse>): _107.MsgFundCommunityPoolResponse;
                fromAmino(_: _107.MsgFundCommunityPoolResponseAmino): _107.MsgFundCommunityPoolResponse;
                toAmino(_: _107.MsgFundCommunityPoolResponse): _107.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _107.MsgFundCommunityPoolResponseAminoMsg): _107.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _107.MsgFundCommunityPoolResponse): _107.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _107.MsgFundCommunityPoolResponseProtoMsg): _107.MsgFundCommunityPoolResponse;
                toProto(message: _107.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _107.MsgFundCommunityPoolResponse): _107.MsgFundCommunityPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _106.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _106.QueryParamsRequest;
                fromPartial(_: Partial<_106.QueryParamsRequest>): _106.QueryParamsRequest;
                fromAmino(_: _106.QueryParamsRequestAmino): _106.QueryParamsRequest;
                toAmino(_: _106.QueryParamsRequest): _106.QueryParamsRequestAmino;
                fromAminoMsg(object: _106.QueryParamsRequestAminoMsg): _106.QueryParamsRequest;
                toAminoMsg(message: _106.QueryParamsRequest): _106.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _106.QueryParamsRequestProtoMsg): _106.QueryParamsRequest;
                toProto(message: _106.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _106.QueryParamsRequest): _106.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _106.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _106.QueryParamsResponse;
                fromPartial(object: Partial<_106.QueryParamsResponse>): _106.QueryParamsResponse;
                fromAmino(object: _106.QueryParamsResponseAmino): _106.QueryParamsResponse;
                toAmino(message: _106.QueryParamsResponse): _106.QueryParamsResponseAmino;
                fromAminoMsg(object: _106.QueryParamsResponseAminoMsg): _106.QueryParamsResponse;
                toAminoMsg(message: _106.QueryParamsResponse): _106.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _106.QueryParamsResponseProtoMsg): _106.QueryParamsResponse;
                toProto(message: _106.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _106.QueryParamsResponse): _106.QueryParamsResponseProtoMsg;
            };
            QueryValidatorOutstandingRewardsRequest: {
                typeUrl: string;
                encode(message: _106.QueryValidatorOutstandingRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _106.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_106.QueryValidatorOutstandingRewardsRequest>): _106.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _106.QueryValidatorOutstandingRewardsRequestAmino): _106.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _106.QueryValidatorOutstandingRewardsRequest): _106.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _106.QueryValidatorOutstandingRewardsRequestAminoMsg): _106.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _106.QueryValidatorOutstandingRewardsRequest): _106.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _106.QueryValidatorOutstandingRewardsRequestProtoMsg): _106.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _106.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _106.QueryValidatorOutstandingRewardsRequest): _106.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                typeUrl: string;
                encode(message: _106.QueryValidatorOutstandingRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _106.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_106.QueryValidatorOutstandingRewardsResponse>): _106.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _106.QueryValidatorOutstandingRewardsResponseAmino): _106.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _106.QueryValidatorOutstandingRewardsResponse): _106.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _106.QueryValidatorOutstandingRewardsResponseAminoMsg): _106.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _106.QueryValidatorOutstandingRewardsResponse): _106.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _106.QueryValidatorOutstandingRewardsResponseProtoMsg): _106.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _106.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _106.QueryValidatorOutstandingRewardsResponse): _106.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                typeUrl: string;
                encode(message: _106.QueryValidatorCommissionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _106.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_106.QueryValidatorCommissionRequest>): _106.QueryValidatorCommissionRequest;
                fromAmino(object: _106.QueryValidatorCommissionRequestAmino): _106.QueryValidatorCommissionRequest;
                toAmino(message: _106.QueryValidatorCommissionRequest): _106.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _106.QueryValidatorCommissionRequestAminoMsg): _106.QueryValidatorCommissionRequest;
                toAminoMsg(message: _106.QueryValidatorCommissionRequest): _106.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _106.QueryValidatorCommissionRequestProtoMsg): _106.QueryValidatorCommissionRequest;
                toProto(message: _106.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _106.QueryValidatorCommissionRequest): _106.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _106.QueryValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _106.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_106.QueryValidatorCommissionResponse>): _106.QueryValidatorCommissionResponse;
                fromAmino(object: _106.QueryValidatorCommissionResponseAmino): _106.QueryValidatorCommissionResponse;
                toAmino(message: _106.QueryValidatorCommissionResponse): _106.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _106.QueryValidatorCommissionResponseAminoMsg): _106.QueryValidatorCommissionResponse;
                toAminoMsg(message: _106.QueryValidatorCommissionResponse): _106.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _106.QueryValidatorCommissionResponseProtoMsg): _106.QueryValidatorCommissionResponse;
                toProto(message: _106.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _106.QueryValidatorCommissionResponse): _106.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                typeUrl: string;
                encode(message: _106.QueryValidatorSlashesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _106.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_106.QueryValidatorSlashesRequest>): _106.QueryValidatorSlashesRequest;
                fromAmino(object: _106.QueryValidatorSlashesRequestAmino): _106.QueryValidatorSlashesRequest;
                toAmino(message: _106.QueryValidatorSlashesRequest): _106.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _106.QueryValidatorSlashesRequestAminoMsg): _106.QueryValidatorSlashesRequest;
                toAminoMsg(message: _106.QueryValidatorSlashesRequest): _106.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _106.QueryValidatorSlashesRequestProtoMsg): _106.QueryValidatorSlashesRequest;
                toProto(message: _106.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _106.QueryValidatorSlashesRequest): _106.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                typeUrl: string;
                encode(message: _106.QueryValidatorSlashesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _106.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_106.QueryValidatorSlashesResponse>): _106.QueryValidatorSlashesResponse;
                fromAmino(object: _106.QueryValidatorSlashesResponseAmino): _106.QueryValidatorSlashesResponse;
                toAmino(message: _106.QueryValidatorSlashesResponse): _106.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _106.QueryValidatorSlashesResponseAminoMsg): _106.QueryValidatorSlashesResponse;
                toAminoMsg(message: _106.QueryValidatorSlashesResponse): _106.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _106.QueryValidatorSlashesResponseProtoMsg): _106.QueryValidatorSlashesResponse;
                toProto(message: _106.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _106.QueryValidatorSlashesResponse): _106.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                typeUrl: string;
                encode(message: _106.QueryDelegationRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _106.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_106.QueryDelegationRewardsRequest>): _106.QueryDelegationRewardsRequest;
                fromAmino(object: _106.QueryDelegationRewardsRequestAmino): _106.QueryDelegationRewardsRequest;
                toAmino(message: _106.QueryDelegationRewardsRequest): _106.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _106.QueryDelegationRewardsRequestAminoMsg): _106.QueryDelegationRewardsRequest;
                toAminoMsg(message: _106.QueryDelegationRewardsRequest): _106.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _106.QueryDelegationRewardsRequestProtoMsg): _106.QueryDelegationRewardsRequest;
                toProto(message: _106.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _106.QueryDelegationRewardsRequest): _106.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                typeUrl: string;
                encode(message: _106.QueryDelegationRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _106.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_106.QueryDelegationRewardsResponse>): _106.QueryDelegationRewardsResponse;
                fromAmino(object: _106.QueryDelegationRewardsResponseAmino): _106.QueryDelegationRewardsResponse;
                toAmino(message: _106.QueryDelegationRewardsResponse): _106.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _106.QueryDelegationRewardsResponseAminoMsg): _106.QueryDelegationRewardsResponse;
                toAminoMsg(message: _106.QueryDelegationRewardsResponse): _106.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _106.QueryDelegationRewardsResponseProtoMsg): _106.QueryDelegationRewardsResponse;
                toProto(message: _106.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _106.QueryDelegationRewardsResponse): _106.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                typeUrl: string;
                encode(message: _106.QueryDelegationTotalRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _106.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_106.QueryDelegationTotalRewardsRequest>): _106.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _106.QueryDelegationTotalRewardsRequestAmino): _106.QueryDelegationTotalRewardsRequest;
                toAmino(message: _106.QueryDelegationTotalRewardsRequest): _106.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _106.QueryDelegationTotalRewardsRequestAminoMsg): _106.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _106.QueryDelegationTotalRewardsRequest): _106.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _106.QueryDelegationTotalRewardsRequestProtoMsg): _106.QueryDelegationTotalRewardsRequest;
                toProto(message: _106.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _106.QueryDelegationTotalRewardsRequest): _106.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                typeUrl: string;
                encode(message: _106.QueryDelegationTotalRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _106.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_106.QueryDelegationTotalRewardsResponse>): _106.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _106.QueryDelegationTotalRewardsResponseAmino): _106.QueryDelegationTotalRewardsResponse;
                toAmino(message: _106.QueryDelegationTotalRewardsResponse): _106.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _106.QueryDelegationTotalRewardsResponseAminoMsg): _106.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _106.QueryDelegationTotalRewardsResponse): _106.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _106.QueryDelegationTotalRewardsResponseProtoMsg): _106.QueryDelegationTotalRewardsResponse;
                toProto(message: _106.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _106.QueryDelegationTotalRewardsResponse): _106.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _106.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _106.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_106.QueryDelegatorValidatorsRequest>): _106.QueryDelegatorValidatorsRequest;
                fromAmino(object: _106.QueryDelegatorValidatorsRequestAmino): _106.QueryDelegatorValidatorsRequest;
                toAmino(message: _106.QueryDelegatorValidatorsRequest): _106.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _106.QueryDelegatorValidatorsRequestAminoMsg): _106.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _106.QueryDelegatorValidatorsRequest): _106.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _106.QueryDelegatorValidatorsRequestProtoMsg): _106.QueryDelegatorValidatorsRequest;
                toProto(message: _106.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _106.QueryDelegatorValidatorsRequest): _106.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _106.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _106.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_106.QueryDelegatorValidatorsResponse>): _106.QueryDelegatorValidatorsResponse;
                fromAmino(object: _106.QueryDelegatorValidatorsResponseAmino): _106.QueryDelegatorValidatorsResponse;
                toAmino(message: _106.QueryDelegatorValidatorsResponse): _106.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _106.QueryDelegatorValidatorsResponseAminoMsg): _106.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _106.QueryDelegatorValidatorsResponse): _106.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _106.QueryDelegatorValidatorsResponseProtoMsg): _106.QueryDelegatorValidatorsResponse;
                toProto(message: _106.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _106.QueryDelegatorValidatorsResponse): _106.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                typeUrl: string;
                encode(message: _106.QueryDelegatorWithdrawAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _106.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_106.QueryDelegatorWithdrawAddressRequest>): _106.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _106.QueryDelegatorWithdrawAddressRequestAmino): _106.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _106.QueryDelegatorWithdrawAddressRequest): _106.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _106.QueryDelegatorWithdrawAddressRequestAminoMsg): _106.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _106.QueryDelegatorWithdrawAddressRequest): _106.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _106.QueryDelegatorWithdrawAddressRequestProtoMsg): _106.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _106.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _106.QueryDelegatorWithdrawAddressRequest): _106.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                typeUrl: string;
                encode(message: _106.QueryDelegatorWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _106.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_106.QueryDelegatorWithdrawAddressResponse>): _106.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _106.QueryDelegatorWithdrawAddressResponseAmino): _106.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _106.QueryDelegatorWithdrawAddressResponse): _106.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _106.QueryDelegatorWithdrawAddressResponseAminoMsg): _106.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _106.QueryDelegatorWithdrawAddressResponse): _106.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _106.QueryDelegatorWithdrawAddressResponseProtoMsg): _106.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _106.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _106.QueryDelegatorWithdrawAddressResponse): _106.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                typeUrl: string;
                encode(_: _106.QueryCommunityPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _106.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_106.QueryCommunityPoolRequest>): _106.QueryCommunityPoolRequest;
                fromAmino(_: _106.QueryCommunityPoolRequestAmino): _106.QueryCommunityPoolRequest;
                toAmino(_: _106.QueryCommunityPoolRequest): _106.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _106.QueryCommunityPoolRequestAminoMsg): _106.QueryCommunityPoolRequest;
                toAminoMsg(message: _106.QueryCommunityPoolRequest): _106.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _106.QueryCommunityPoolRequestProtoMsg): _106.QueryCommunityPoolRequest;
                toProto(message: _106.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _106.QueryCommunityPoolRequest): _106.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                typeUrl: string;
                encode(message: _106.QueryCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _106.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_106.QueryCommunityPoolResponse>): _106.QueryCommunityPoolResponse;
                fromAmino(object: _106.QueryCommunityPoolResponseAmino): _106.QueryCommunityPoolResponse;
                toAmino(message: _106.QueryCommunityPoolResponse): _106.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _106.QueryCommunityPoolResponseAminoMsg): _106.QueryCommunityPoolResponse;
                toAminoMsg(message: _106.QueryCommunityPoolResponse): _106.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _106.QueryCommunityPoolResponseProtoMsg): _106.QueryCommunityPoolResponse;
                toProto(message: _106.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _106.QueryCommunityPoolResponse): _106.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                typeUrl: string;
                encode(message: _105.DelegatorWithdrawInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _105.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_105.DelegatorWithdrawInfo>): _105.DelegatorWithdrawInfo;
                fromAmino(object: _105.DelegatorWithdrawInfoAmino): _105.DelegatorWithdrawInfo;
                toAmino(message: _105.DelegatorWithdrawInfo): _105.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _105.DelegatorWithdrawInfoAminoMsg): _105.DelegatorWithdrawInfo;
                toAminoMsg(message: _105.DelegatorWithdrawInfo): _105.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _105.DelegatorWithdrawInfoProtoMsg): _105.DelegatorWithdrawInfo;
                toProto(message: _105.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _105.DelegatorWithdrawInfo): _105.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                typeUrl: string;
                encode(message: _105.ValidatorOutstandingRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _105.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_105.ValidatorOutstandingRewardsRecord>): _105.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _105.ValidatorOutstandingRewardsRecordAmino): _105.ValidatorOutstandingRewardsRecord;
                toAmino(message: _105.ValidatorOutstandingRewardsRecord): _105.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _105.ValidatorOutstandingRewardsRecordAminoMsg): _105.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _105.ValidatorOutstandingRewardsRecord): _105.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _105.ValidatorOutstandingRewardsRecordProtoMsg): _105.ValidatorOutstandingRewardsRecord;
                toProto(message: _105.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _105.ValidatorOutstandingRewardsRecord): _105.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                typeUrl: string;
                encode(message: _105.ValidatorAccumulatedCommissionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _105.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_105.ValidatorAccumulatedCommissionRecord>): _105.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _105.ValidatorAccumulatedCommissionRecordAmino): _105.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _105.ValidatorAccumulatedCommissionRecord): _105.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _105.ValidatorAccumulatedCommissionRecordAminoMsg): _105.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _105.ValidatorAccumulatedCommissionRecord): _105.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _105.ValidatorAccumulatedCommissionRecordProtoMsg): _105.ValidatorAccumulatedCommissionRecord;
                toProto(message: _105.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _105.ValidatorAccumulatedCommissionRecord): _105.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                typeUrl: string;
                encode(message: _105.ValidatorHistoricalRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _105.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_105.ValidatorHistoricalRewardsRecord>): _105.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _105.ValidatorHistoricalRewardsRecordAmino): _105.ValidatorHistoricalRewardsRecord;
                toAmino(message: _105.ValidatorHistoricalRewardsRecord): _105.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _105.ValidatorHistoricalRewardsRecordAminoMsg): _105.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _105.ValidatorHistoricalRewardsRecord): _105.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _105.ValidatorHistoricalRewardsRecordProtoMsg): _105.ValidatorHistoricalRewardsRecord;
                toProto(message: _105.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _105.ValidatorHistoricalRewardsRecord): _105.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                typeUrl: string;
                encode(message: _105.ValidatorCurrentRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _105.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_105.ValidatorCurrentRewardsRecord>): _105.ValidatorCurrentRewardsRecord;
                fromAmino(object: _105.ValidatorCurrentRewardsRecordAmino): _105.ValidatorCurrentRewardsRecord;
                toAmino(message: _105.ValidatorCurrentRewardsRecord): _105.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _105.ValidatorCurrentRewardsRecordAminoMsg): _105.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _105.ValidatorCurrentRewardsRecord): _105.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _105.ValidatorCurrentRewardsRecordProtoMsg): _105.ValidatorCurrentRewardsRecord;
                toProto(message: _105.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _105.ValidatorCurrentRewardsRecord): _105.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                typeUrl: string;
                encode(message: _105.DelegatorStartingInfoRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _105.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_105.DelegatorStartingInfoRecord>): _105.DelegatorStartingInfoRecord;
                fromAmino(object: _105.DelegatorStartingInfoRecordAmino): _105.DelegatorStartingInfoRecord;
                toAmino(message: _105.DelegatorStartingInfoRecord): _105.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _105.DelegatorStartingInfoRecordAminoMsg): _105.DelegatorStartingInfoRecord;
                toAminoMsg(message: _105.DelegatorStartingInfoRecord): _105.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _105.DelegatorStartingInfoRecordProtoMsg): _105.DelegatorStartingInfoRecord;
                toProto(message: _105.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _105.DelegatorStartingInfoRecord): _105.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                typeUrl: string;
                encode(message: _105.ValidatorSlashEventRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _105.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_105.ValidatorSlashEventRecord>): _105.ValidatorSlashEventRecord;
                fromAmino(object: _105.ValidatorSlashEventRecordAmino): _105.ValidatorSlashEventRecord;
                toAmino(message: _105.ValidatorSlashEventRecord): _105.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _105.ValidatorSlashEventRecordAminoMsg): _105.ValidatorSlashEventRecord;
                toAminoMsg(message: _105.ValidatorSlashEventRecord): _105.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _105.ValidatorSlashEventRecordProtoMsg): _105.ValidatorSlashEventRecord;
                toProto(message: _105.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _105.ValidatorSlashEventRecord): _105.ValidatorSlashEventRecordProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _105.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _105.GenesisState;
                fromPartial(object: Partial<_105.GenesisState>): _105.GenesisState;
                fromAmino(object: _105.GenesisStateAmino): _105.GenesisState;
                toAmino(message: _105.GenesisState): _105.GenesisStateAmino;
                fromAminoMsg(object: _105.GenesisStateAminoMsg): _105.GenesisState;
                toAminoMsg(message: _105.GenesisState): _105.GenesisStateAminoMsg;
                fromProtoMsg(message: _105.GenesisStateProtoMsg): _105.GenesisState;
                toProto(message: _105.GenesisState): Uint8Array;
                toProtoMsg(message: _105.GenesisState): _105.GenesisStateProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _104.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _104.Params;
                fromPartial(object: Partial<_104.Params>): _104.Params;
                fromAmino(object: _104.ParamsAmino): _104.Params;
                toAmino(message: _104.Params): _104.ParamsAmino;
                fromAminoMsg(object: _104.ParamsAminoMsg): _104.Params;
                toAminoMsg(message: _104.Params): _104.ParamsAminoMsg;
                fromProtoMsg(message: _104.ParamsProtoMsg): _104.Params;
                toProto(message: _104.Params): Uint8Array;
                toProtoMsg(message: _104.Params): _104.ParamsProtoMsg;
            };
            ValidatorHistoricalRewards: {
                typeUrl: string;
                encode(message: _104.ValidatorHistoricalRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _104.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_104.ValidatorHistoricalRewards>): _104.ValidatorHistoricalRewards;
                fromAmino(object: _104.ValidatorHistoricalRewardsAmino): _104.ValidatorHistoricalRewards;
                toAmino(message: _104.ValidatorHistoricalRewards): _104.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _104.ValidatorHistoricalRewardsAminoMsg): _104.ValidatorHistoricalRewards;
                toAminoMsg(message: _104.ValidatorHistoricalRewards): _104.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _104.ValidatorHistoricalRewardsProtoMsg): _104.ValidatorHistoricalRewards;
                toProto(message: _104.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _104.ValidatorHistoricalRewards): _104.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                typeUrl: string;
                encode(message: _104.ValidatorCurrentRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _104.ValidatorCurrentRewards;
                fromPartial(object: Partial<_104.ValidatorCurrentRewards>): _104.ValidatorCurrentRewards;
                fromAmino(object: _104.ValidatorCurrentRewardsAmino): _104.ValidatorCurrentRewards;
                toAmino(message: _104.ValidatorCurrentRewards): _104.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _104.ValidatorCurrentRewardsAminoMsg): _104.ValidatorCurrentRewards;
                toAminoMsg(message: _104.ValidatorCurrentRewards): _104.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _104.ValidatorCurrentRewardsProtoMsg): _104.ValidatorCurrentRewards;
                toProto(message: _104.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _104.ValidatorCurrentRewards): _104.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                typeUrl: string;
                encode(message: _104.ValidatorAccumulatedCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _104.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_104.ValidatorAccumulatedCommission>): _104.ValidatorAccumulatedCommission;
                fromAmino(object: _104.ValidatorAccumulatedCommissionAmino): _104.ValidatorAccumulatedCommission;
                toAmino(message: _104.ValidatorAccumulatedCommission): _104.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _104.ValidatorAccumulatedCommissionAminoMsg): _104.ValidatorAccumulatedCommission;
                toAminoMsg(message: _104.ValidatorAccumulatedCommission): _104.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _104.ValidatorAccumulatedCommissionProtoMsg): _104.ValidatorAccumulatedCommission;
                toProto(message: _104.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _104.ValidatorAccumulatedCommission): _104.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                typeUrl: string;
                encode(message: _104.ValidatorOutstandingRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _104.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_104.ValidatorOutstandingRewards>): _104.ValidatorOutstandingRewards;
                fromAmino(object: _104.ValidatorOutstandingRewardsAmino): _104.ValidatorOutstandingRewards;
                toAmino(message: _104.ValidatorOutstandingRewards): _104.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _104.ValidatorOutstandingRewardsAminoMsg): _104.ValidatorOutstandingRewards;
                toAminoMsg(message: _104.ValidatorOutstandingRewards): _104.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _104.ValidatorOutstandingRewardsProtoMsg): _104.ValidatorOutstandingRewards;
                toProto(message: _104.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _104.ValidatorOutstandingRewards): _104.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                typeUrl: string;
                encode(message: _104.ValidatorSlashEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _104.ValidatorSlashEvent;
                fromPartial(object: Partial<_104.ValidatorSlashEvent>): _104.ValidatorSlashEvent;
                fromAmino(object: _104.ValidatorSlashEventAmino): _104.ValidatorSlashEvent;
                toAmino(message: _104.ValidatorSlashEvent): _104.ValidatorSlashEventAmino;
                fromAminoMsg(object: _104.ValidatorSlashEventAminoMsg): _104.ValidatorSlashEvent;
                toAminoMsg(message: _104.ValidatorSlashEvent): _104.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _104.ValidatorSlashEventProtoMsg): _104.ValidatorSlashEvent;
                toProto(message: _104.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _104.ValidatorSlashEvent): _104.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                typeUrl: string;
                encode(message: _104.ValidatorSlashEvents, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _104.ValidatorSlashEvents;
                fromPartial(object: Partial<_104.ValidatorSlashEvents>): _104.ValidatorSlashEvents;
                fromAmino(object: _104.ValidatorSlashEventsAmino): _104.ValidatorSlashEvents;
                toAmino(message: _104.ValidatorSlashEvents): _104.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _104.ValidatorSlashEventsAminoMsg): _104.ValidatorSlashEvents;
                toAminoMsg(message: _104.ValidatorSlashEvents): _104.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _104.ValidatorSlashEventsProtoMsg): _104.ValidatorSlashEvents;
                toProto(message: _104.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _104.ValidatorSlashEvents): _104.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                typeUrl: string;
                encode(message: _104.FeePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _104.FeePool;
                fromPartial(object: Partial<_104.FeePool>): _104.FeePool;
                fromAmino(object: _104.FeePoolAmino): _104.FeePool;
                toAmino(message: _104.FeePool): _104.FeePoolAmino;
                fromAminoMsg(object: _104.FeePoolAminoMsg): _104.FeePool;
                toAminoMsg(message: _104.FeePool): _104.FeePoolAminoMsg;
                fromProtoMsg(message: _104.FeePoolProtoMsg): _104.FeePool;
                toProto(message: _104.FeePool): Uint8Array;
                toProtoMsg(message: _104.FeePool): _104.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                typeUrl: string;
                encode(message: _104.CommunityPoolSpendProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _104.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_104.CommunityPoolSpendProposal>): _104.CommunityPoolSpendProposal;
                fromAmino(object: _104.CommunityPoolSpendProposalAmino): _104.CommunityPoolSpendProposal;
                toAmino(message: _104.CommunityPoolSpendProposal): _104.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _104.CommunityPoolSpendProposalAminoMsg): _104.CommunityPoolSpendProposal;
                toAminoMsg(message: _104.CommunityPoolSpendProposal): _104.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _104.CommunityPoolSpendProposalProtoMsg): _104.CommunityPoolSpendProposal;
                toProto(message: _104.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _104.CommunityPoolSpendProposal): _104.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                typeUrl: string;
                encode(message: _104.DelegatorStartingInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _104.DelegatorStartingInfo;
                fromPartial(object: Partial<_104.DelegatorStartingInfo>): _104.DelegatorStartingInfo;
                fromAmino(object: _104.DelegatorStartingInfoAmino): _104.DelegatorStartingInfo;
                toAmino(message: _104.DelegatorStartingInfo): _104.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _104.DelegatorStartingInfoAminoMsg): _104.DelegatorStartingInfo;
                toAminoMsg(message: _104.DelegatorStartingInfo): _104.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _104.DelegatorStartingInfoProtoMsg): _104.DelegatorStartingInfo;
                toProto(message: _104.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _104.DelegatorStartingInfo): _104.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                typeUrl: string;
                encode(message: _104.DelegationDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _104.DelegationDelegatorReward;
                fromPartial(object: Partial<_104.DelegationDelegatorReward>): _104.DelegationDelegatorReward;
                fromAmino(object: _104.DelegationDelegatorRewardAmino): _104.DelegationDelegatorReward;
                toAmino(message: _104.DelegationDelegatorReward): _104.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _104.DelegationDelegatorRewardAminoMsg): _104.DelegationDelegatorReward;
                toAminoMsg(message: _104.DelegationDelegatorReward): _104.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _104.DelegationDelegatorRewardProtoMsg): _104.DelegationDelegatorReward;
                toProto(message: _104.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _104.DelegationDelegatorReward): _104.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                typeUrl: string;
                encode(message: _104.CommunityPoolSpendProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _104.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_104.CommunityPoolSpendProposalWithDeposit>): _104.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _104.CommunityPoolSpendProposalWithDepositAmino): _104.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _104.CommunityPoolSpendProposalWithDeposit): _104.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _104.CommunityPoolSpendProposalWithDepositAminoMsg): _104.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _104.CommunityPoolSpendProposalWithDeposit): _104.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _104.CommunityPoolSpendProposalWithDepositProtoMsg): _104.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _104.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _104.CommunityPoolSpendProposalWithDeposit): _104.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _445.MsgClientImpl;
            QueryClientImpl: typeof _433.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _110.QueryAllowanceRequest): Promise<_110.QueryAllowanceResponse>;
                allowances(request: _110.QueryAllowancesRequest): Promise<_110.QueryAllowancesResponse>;
                allowancesByGranter(request: _110.QueryAllowancesByGranterRequest): Promise<_110.QueryAllowancesByGranterResponse>;
            };
            registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _111.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _111.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _111.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _111.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _111.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _111.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _111.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _111.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _111.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _111.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: (message: _111.MsgGrantAllowance) => _111.MsgGrantAllowanceAmino;
                    fromAmino: (object: _111.MsgGrantAllowanceAmino) => _111.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: (message: _111.MsgRevokeAllowance) => _111.MsgRevokeAllowanceAmino;
                    fromAmino: (object: _111.MsgRevokeAllowanceAmino) => _111.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                typeUrl: string;
                encode(message: _111.MsgGrantAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.MsgGrantAllowance;
                fromPartial(object: Partial<_111.MsgGrantAllowance>): _111.MsgGrantAllowance;
                fromAmino(object: _111.MsgGrantAllowanceAmino): _111.MsgGrantAllowance;
                toAmino(message: _111.MsgGrantAllowance): _111.MsgGrantAllowanceAmino;
                fromAminoMsg(object: _111.MsgGrantAllowanceAminoMsg): _111.MsgGrantAllowance;
                toAminoMsg(message: _111.MsgGrantAllowance): _111.MsgGrantAllowanceAminoMsg;
                fromProtoMsg(message: _111.MsgGrantAllowanceProtoMsg): _111.MsgGrantAllowance;
                toProto(message: _111.MsgGrantAllowance): Uint8Array;
                toProtoMsg(message: _111.MsgGrantAllowance): _111.MsgGrantAllowanceProtoMsg;
            };
            MsgGrantAllowanceResponse: {
                typeUrl: string;
                encode(_: _111.MsgGrantAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_111.MsgGrantAllowanceResponse>): _111.MsgGrantAllowanceResponse;
                fromAmino(_: _111.MsgGrantAllowanceResponseAmino): _111.MsgGrantAllowanceResponse;
                toAmino(_: _111.MsgGrantAllowanceResponse): _111.MsgGrantAllowanceResponseAmino;
                fromAminoMsg(object: _111.MsgGrantAllowanceResponseAminoMsg): _111.MsgGrantAllowanceResponse;
                toAminoMsg(message: _111.MsgGrantAllowanceResponse): _111.MsgGrantAllowanceResponseAminoMsg;
                fromProtoMsg(message: _111.MsgGrantAllowanceResponseProtoMsg): _111.MsgGrantAllowanceResponse;
                toProto(message: _111.MsgGrantAllowanceResponse): Uint8Array;
                toProtoMsg(message: _111.MsgGrantAllowanceResponse): _111.MsgGrantAllowanceResponseProtoMsg;
            };
            MsgRevokeAllowance: {
                typeUrl: string;
                encode(message: _111.MsgRevokeAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.MsgRevokeAllowance;
                fromPartial(object: Partial<_111.MsgRevokeAllowance>): _111.MsgRevokeAllowance;
                fromAmino(object: _111.MsgRevokeAllowanceAmino): _111.MsgRevokeAllowance;
                toAmino(message: _111.MsgRevokeAllowance): _111.MsgRevokeAllowanceAmino;
                fromAminoMsg(object: _111.MsgRevokeAllowanceAminoMsg): _111.MsgRevokeAllowance;
                toAminoMsg(message: _111.MsgRevokeAllowance): _111.MsgRevokeAllowanceAminoMsg;
                fromProtoMsg(message: _111.MsgRevokeAllowanceProtoMsg): _111.MsgRevokeAllowance;
                toProto(message: _111.MsgRevokeAllowance): Uint8Array;
                toProtoMsg(message: _111.MsgRevokeAllowance): _111.MsgRevokeAllowanceProtoMsg;
            };
            MsgRevokeAllowanceResponse: {
                typeUrl: string;
                encode(_: _111.MsgRevokeAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_111.MsgRevokeAllowanceResponse>): _111.MsgRevokeAllowanceResponse;
                fromAmino(_: _111.MsgRevokeAllowanceResponseAmino): _111.MsgRevokeAllowanceResponse;
                toAmino(_: _111.MsgRevokeAllowanceResponse): _111.MsgRevokeAllowanceResponseAmino;
                fromAminoMsg(object: _111.MsgRevokeAllowanceResponseAminoMsg): _111.MsgRevokeAllowanceResponse;
                toAminoMsg(message: _111.MsgRevokeAllowanceResponse): _111.MsgRevokeAllowanceResponseAminoMsg;
                fromProtoMsg(message: _111.MsgRevokeAllowanceResponseProtoMsg): _111.MsgRevokeAllowanceResponse;
                toProto(message: _111.MsgRevokeAllowanceResponse): Uint8Array;
                toProtoMsg(message: _111.MsgRevokeAllowanceResponse): _111.MsgRevokeAllowanceResponseProtoMsg;
            };
            Cosmos_feegrantFeeAllowanceI_InterfaceDecoder: (input: import("..").BinaryReader | Uint8Array) => _108.BasicAllowance | _108.PeriodicAllowance | _108.AllowedMsgAllowance | import("../google/protobuf/any").Any;
            Cosmos_feegrantFeeAllowanceI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_feegrantFeeAllowanceI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryAllowanceRequest: {
                typeUrl: string;
                encode(message: _110.QueryAllowanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _110.QueryAllowanceRequest;
                fromPartial(object: Partial<_110.QueryAllowanceRequest>): _110.QueryAllowanceRequest;
                fromAmino(object: _110.QueryAllowanceRequestAmino): _110.QueryAllowanceRequest;
                toAmino(message: _110.QueryAllowanceRequest): _110.QueryAllowanceRequestAmino;
                fromAminoMsg(object: _110.QueryAllowanceRequestAminoMsg): _110.QueryAllowanceRequest;
                toAminoMsg(message: _110.QueryAllowanceRequest): _110.QueryAllowanceRequestAminoMsg;
                fromProtoMsg(message: _110.QueryAllowanceRequestProtoMsg): _110.QueryAllowanceRequest;
                toProto(message: _110.QueryAllowanceRequest): Uint8Array;
                toProtoMsg(message: _110.QueryAllowanceRequest): _110.QueryAllowanceRequestProtoMsg;
            };
            QueryAllowanceResponse: {
                typeUrl: string;
                encode(message: _110.QueryAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _110.QueryAllowanceResponse;
                fromPartial(object: Partial<_110.QueryAllowanceResponse>): _110.QueryAllowanceResponse;
                fromAmino(object: _110.QueryAllowanceResponseAmino): _110.QueryAllowanceResponse;
                toAmino(message: _110.QueryAllowanceResponse): _110.QueryAllowanceResponseAmino;
                fromAminoMsg(object: _110.QueryAllowanceResponseAminoMsg): _110.QueryAllowanceResponse;
                toAminoMsg(message: _110.QueryAllowanceResponse): _110.QueryAllowanceResponseAminoMsg;
                fromProtoMsg(message: _110.QueryAllowanceResponseProtoMsg): _110.QueryAllowanceResponse;
                toProto(message: _110.QueryAllowanceResponse): Uint8Array;
                toProtoMsg(message: _110.QueryAllowanceResponse): _110.QueryAllowanceResponseProtoMsg;
            };
            QueryAllowancesRequest: {
                typeUrl: string;
                encode(message: _110.QueryAllowancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _110.QueryAllowancesRequest;
                fromPartial(object: Partial<_110.QueryAllowancesRequest>): _110.QueryAllowancesRequest;
                fromAmino(object: _110.QueryAllowancesRequestAmino): _110.QueryAllowancesRequest;
                toAmino(message: _110.QueryAllowancesRequest): _110.QueryAllowancesRequestAmino;
                fromAminoMsg(object: _110.QueryAllowancesRequestAminoMsg): _110.QueryAllowancesRequest;
                toAminoMsg(message: _110.QueryAllowancesRequest): _110.QueryAllowancesRequestAminoMsg;
                fromProtoMsg(message: _110.QueryAllowancesRequestProtoMsg): _110.QueryAllowancesRequest;
                toProto(message: _110.QueryAllowancesRequest): Uint8Array;
                toProtoMsg(message: _110.QueryAllowancesRequest): _110.QueryAllowancesRequestProtoMsg;
            };
            QueryAllowancesResponse: {
                typeUrl: string;
                encode(message: _110.QueryAllowancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _110.QueryAllowancesResponse;
                fromPartial(object: Partial<_110.QueryAllowancesResponse>): _110.QueryAllowancesResponse;
                fromAmino(object: _110.QueryAllowancesResponseAmino): _110.QueryAllowancesResponse;
                toAmino(message: _110.QueryAllowancesResponse): _110.QueryAllowancesResponseAmino;
                fromAminoMsg(object: _110.QueryAllowancesResponseAminoMsg): _110.QueryAllowancesResponse;
                toAminoMsg(message: _110.QueryAllowancesResponse): _110.QueryAllowancesResponseAminoMsg;
                fromProtoMsg(message: _110.QueryAllowancesResponseProtoMsg): _110.QueryAllowancesResponse;
                toProto(message: _110.QueryAllowancesResponse): Uint8Array;
                toProtoMsg(message: _110.QueryAllowancesResponse): _110.QueryAllowancesResponseProtoMsg;
            };
            QueryAllowancesByGranterRequest: {
                typeUrl: string;
                encode(message: _110.QueryAllowancesByGranterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _110.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_110.QueryAllowancesByGranterRequest>): _110.QueryAllowancesByGranterRequest;
                fromAmino(object: _110.QueryAllowancesByGranterRequestAmino): _110.QueryAllowancesByGranterRequest;
                toAmino(message: _110.QueryAllowancesByGranterRequest): _110.QueryAllowancesByGranterRequestAmino;
                fromAminoMsg(object: _110.QueryAllowancesByGranterRequestAminoMsg): _110.QueryAllowancesByGranterRequest;
                toAminoMsg(message: _110.QueryAllowancesByGranterRequest): _110.QueryAllowancesByGranterRequestAminoMsg;
                fromProtoMsg(message: _110.QueryAllowancesByGranterRequestProtoMsg): _110.QueryAllowancesByGranterRequest;
                toProto(message: _110.QueryAllowancesByGranterRequest): Uint8Array;
                toProtoMsg(message: _110.QueryAllowancesByGranterRequest): _110.QueryAllowancesByGranterRequestProtoMsg;
            };
            QueryAllowancesByGranterResponse: {
                typeUrl: string;
                encode(message: _110.QueryAllowancesByGranterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _110.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_110.QueryAllowancesByGranterResponse>): _110.QueryAllowancesByGranterResponse;
                fromAmino(object: _110.QueryAllowancesByGranterResponseAmino): _110.QueryAllowancesByGranterResponse;
                toAmino(message: _110.QueryAllowancesByGranterResponse): _110.QueryAllowancesByGranterResponseAmino;
                fromAminoMsg(object: _110.QueryAllowancesByGranterResponseAminoMsg): _110.QueryAllowancesByGranterResponse;
                toAminoMsg(message: _110.QueryAllowancesByGranterResponse): _110.QueryAllowancesByGranterResponseAminoMsg;
                fromProtoMsg(message: _110.QueryAllowancesByGranterResponseProtoMsg): _110.QueryAllowancesByGranterResponse;
                toProto(message: _110.QueryAllowancesByGranterResponse): Uint8Array;
                toProtoMsg(message: _110.QueryAllowancesByGranterResponse): _110.QueryAllowancesByGranterResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _109.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _109.GenesisState;
                fromPartial(object: Partial<_109.GenesisState>): _109.GenesisState;
                fromAmino(object: _109.GenesisStateAmino): _109.GenesisState;
                toAmino(message: _109.GenesisState): _109.GenesisStateAmino;
                fromAminoMsg(object: _109.GenesisStateAminoMsg): _109.GenesisState;
                toAminoMsg(message: _109.GenesisState): _109.GenesisStateAminoMsg;
                fromProtoMsg(message: _109.GenesisStateProtoMsg): _109.GenesisState;
                toProto(message: _109.GenesisState): Uint8Array;
                toProtoMsg(message: _109.GenesisState): _109.GenesisStateProtoMsg;
            };
            BasicAllowance: {
                typeUrl: string;
                encode(message: _108.BasicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _108.BasicAllowance;
                fromPartial(object: Partial<_108.BasicAllowance>): _108.BasicAllowance;
                fromAmino(object: _108.BasicAllowanceAmino): _108.BasicAllowance;
                toAmino(message: _108.BasicAllowance): _108.BasicAllowanceAmino;
                fromAminoMsg(object: _108.BasicAllowanceAminoMsg): _108.BasicAllowance;
                toAminoMsg(message: _108.BasicAllowance): _108.BasicAllowanceAminoMsg;
                fromProtoMsg(message: _108.BasicAllowanceProtoMsg): _108.BasicAllowance;
                toProto(message: _108.BasicAllowance): Uint8Array;
                toProtoMsg(message: _108.BasicAllowance): _108.BasicAllowanceProtoMsg;
            };
            PeriodicAllowance: {
                typeUrl: string;
                encode(message: _108.PeriodicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _108.PeriodicAllowance;
                fromPartial(object: Partial<_108.PeriodicAllowance>): _108.PeriodicAllowance;
                fromAmino(object: _108.PeriodicAllowanceAmino): _108.PeriodicAllowance;
                toAmino(message: _108.PeriodicAllowance): _108.PeriodicAllowanceAmino;
                fromAminoMsg(object: _108.PeriodicAllowanceAminoMsg): _108.PeriodicAllowance;
                toAminoMsg(message: _108.PeriodicAllowance): _108.PeriodicAllowanceAminoMsg;
                fromProtoMsg(message: _108.PeriodicAllowanceProtoMsg): _108.PeriodicAllowance;
                toProto(message: _108.PeriodicAllowance): Uint8Array;
                toProtoMsg(message: _108.PeriodicAllowance): _108.PeriodicAllowanceProtoMsg;
            };
            AllowedMsgAllowance: {
                typeUrl: string;
                encode(message: _108.AllowedMsgAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _108.AllowedMsgAllowance;
                fromPartial(object: Partial<_108.AllowedMsgAllowance>): _108.AllowedMsgAllowance;
                fromAmino(object: _108.AllowedMsgAllowanceAmino): _108.AllowedMsgAllowance;
                toAmino(message: _108.AllowedMsgAllowance): _108.AllowedMsgAllowanceAmino;
                fromAminoMsg(object: _108.AllowedMsgAllowanceAminoMsg): _108.AllowedMsgAllowance;
                toAminoMsg(message: _108.AllowedMsgAllowance): _108.AllowedMsgAllowanceAminoMsg;
                fromProtoMsg(message: _108.AllowedMsgAllowanceProtoMsg): _108.AllowedMsgAllowance;
                toProto(message: _108.AllowedMsgAllowance): Uint8Array;
                toProtoMsg(message: _108.AllowedMsgAllowance): _108.AllowedMsgAllowanceProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _108.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _108.Grant;
                fromPartial(object: Partial<_108.Grant>): _108.Grant;
                fromAmino(object: _108.GrantAmino): _108.Grant;
                toAmino(message: _108.Grant): _108.GrantAmino;
                fromAminoMsg(object: _108.GrantAminoMsg): _108.Grant;
                toAminoMsg(message: _108.Grant): _108.GrantAminoMsg;
                fromProtoMsg(message: _108.GrantProtoMsg): _108.Grant;
                toProto(message: _108.Grant): Uint8Array;
                toProtoMsg(message: _108.Grant): _108.GrantProtoMsg;
            };
        };
    }
    namespace gov {
        const v1: {
            MsgClientImpl: typeof _446.MsgClientImpl;
            QueryClientImpl: typeof _434.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _114.QueryProposalRequest): Promise<_114.QueryProposalResponse>;
                proposals(request: _114.QueryProposalsRequest): Promise<_114.QueryProposalsResponse>;
                vote(request: _114.QueryVoteRequest): Promise<_114.QueryVoteResponse>;
                votes(request: _114.QueryVotesRequest): Promise<_114.QueryVotesResponse>;
                params(request: _114.QueryParamsRequest): Promise<_114.QueryParamsResponse>;
                deposit(request: _114.QueryDepositRequest): Promise<_114.QueryDepositResponse>;
                deposits(request: _114.QueryDepositsRequest): Promise<_114.QueryDepositsResponse>;
                tallyResult(request: _114.QueryTallyResultRequest): Promise<_114.QueryTallyResultResponse>;
            };
            registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _115.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _115.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _115.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _115.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _115.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _115.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _115.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _115.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _115.MsgExecLegacyContent;
                    };
                    vote(value: _115.MsgVote): {
                        typeUrl: string;
                        value: _115.MsgVote;
                    };
                    voteWeighted(value: _115.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _115.MsgVoteWeighted;
                    };
                    deposit(value: _115.MsgDeposit): {
                        typeUrl: string;
                        value: _115.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _115.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _115.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _115.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _115.MsgExecLegacyContent;
                    };
                    vote(value: _115.MsgVote): {
                        typeUrl: string;
                        value: _115.MsgVote;
                    };
                    voteWeighted(value: _115.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _115.MsgVoteWeighted;
                    };
                    deposit(value: _115.MsgDeposit): {
                        typeUrl: string;
                        value: _115.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _115.MsgSubmitProposal) => _115.MsgSubmitProposalAmino;
                    fromAmino: (object: _115.MsgSubmitProposalAmino) => _115.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: (message: _115.MsgExecLegacyContent) => _115.MsgExecLegacyContentAmino;
                    fromAmino: (object: _115.MsgExecLegacyContentAmino) => _115.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _115.MsgVote) => _115.MsgVoteAmino;
                    fromAmino: (object: _115.MsgVoteAmino) => _115.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _115.MsgVoteWeighted) => _115.MsgVoteWeightedAmino;
                    fromAmino: (object: _115.MsgVoteWeightedAmino) => _115.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _115.MsgDeposit) => _115.MsgDepositAmino;
                    fromAmino: (object: _115.MsgDepositAmino) => _115.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _115.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _115.MsgSubmitProposal;
                fromPartial(object: Partial<_115.MsgSubmitProposal>): _115.MsgSubmitProposal;
                fromAmino(object: _115.MsgSubmitProposalAmino): _115.MsgSubmitProposal;
                toAmino(message: _115.MsgSubmitProposal): _115.MsgSubmitProposalAmino;
                fromAminoMsg(object: _115.MsgSubmitProposalAminoMsg): _115.MsgSubmitProposal;
                toAminoMsg(message: _115.MsgSubmitProposal): _115.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _115.MsgSubmitProposalProtoMsg): _115.MsgSubmitProposal;
                toProto(message: _115.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _115.MsgSubmitProposal): _115.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _115.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _115.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_115.MsgSubmitProposalResponse>): _115.MsgSubmitProposalResponse;
                fromAmino(object: _115.MsgSubmitProposalResponseAmino): _115.MsgSubmitProposalResponse;
                toAmino(message: _115.MsgSubmitProposalResponse): _115.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _115.MsgSubmitProposalResponseAminoMsg): _115.MsgSubmitProposalResponse;
                toAminoMsg(message: _115.MsgSubmitProposalResponse): _115.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _115.MsgSubmitProposalResponseProtoMsg): _115.MsgSubmitProposalResponse;
                toProto(message: _115.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _115.MsgSubmitProposalResponse): _115.MsgSubmitProposalResponseProtoMsg;
            };
            MsgExecLegacyContent: {
                typeUrl: string;
                encode(message: _115.MsgExecLegacyContent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _115.MsgExecLegacyContent;
                fromPartial(object: Partial<_115.MsgExecLegacyContent>): _115.MsgExecLegacyContent;
                fromAmino(object: _115.MsgExecLegacyContentAmino): _115.MsgExecLegacyContent;
                toAmino(message: _115.MsgExecLegacyContent): _115.MsgExecLegacyContentAmino;
                fromAminoMsg(object: _115.MsgExecLegacyContentAminoMsg): _115.MsgExecLegacyContent;
                toAminoMsg(message: _115.MsgExecLegacyContent): _115.MsgExecLegacyContentAminoMsg;
                fromProtoMsg(message: _115.MsgExecLegacyContentProtoMsg): _115.MsgExecLegacyContent;
                toProto(message: _115.MsgExecLegacyContent): Uint8Array;
                toProtoMsg(message: _115.MsgExecLegacyContent): _115.MsgExecLegacyContentProtoMsg;
            };
            MsgExecLegacyContentResponse: {
                typeUrl: string;
                encode(_: _115.MsgExecLegacyContentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _115.MsgExecLegacyContentResponse;
                fromPartial(_: Partial<_115.MsgExecLegacyContentResponse>): _115.MsgExecLegacyContentResponse;
                fromAmino(_: _115.MsgExecLegacyContentResponseAmino): _115.MsgExecLegacyContentResponse;
                toAmino(_: _115.MsgExecLegacyContentResponse): _115.MsgExecLegacyContentResponseAmino;
                fromAminoMsg(object: _115.MsgExecLegacyContentResponseAminoMsg): _115.MsgExecLegacyContentResponse;
                toAminoMsg(message: _115.MsgExecLegacyContentResponse): _115.MsgExecLegacyContentResponseAminoMsg;
                fromProtoMsg(message: _115.MsgExecLegacyContentResponseProtoMsg): _115.MsgExecLegacyContentResponse;
                toProto(message: _115.MsgExecLegacyContentResponse): Uint8Array;
                toProtoMsg(message: _115.MsgExecLegacyContentResponse): _115.MsgExecLegacyContentResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _115.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _115.MsgVote;
                fromPartial(object: Partial<_115.MsgVote>): _115.MsgVote;
                fromAmino(object: _115.MsgVoteAmino): _115.MsgVote;
                toAmino(message: _115.MsgVote): _115.MsgVoteAmino;
                fromAminoMsg(object: _115.MsgVoteAminoMsg): _115.MsgVote;
                toAminoMsg(message: _115.MsgVote): _115.MsgVoteAminoMsg;
                fromProtoMsg(message: _115.MsgVoteProtoMsg): _115.MsgVote;
                toProto(message: _115.MsgVote): Uint8Array;
                toProtoMsg(message: _115.MsgVote): _115.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _115.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _115.MsgVoteResponse;
                fromPartial(_: Partial<_115.MsgVoteResponse>): _115.MsgVoteResponse;
                fromAmino(_: _115.MsgVoteResponseAmino): _115.MsgVoteResponse;
                toAmino(_: _115.MsgVoteResponse): _115.MsgVoteResponseAmino;
                fromAminoMsg(object: _115.MsgVoteResponseAminoMsg): _115.MsgVoteResponse;
                toAminoMsg(message: _115.MsgVoteResponse): _115.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _115.MsgVoteResponseProtoMsg): _115.MsgVoteResponse;
                toProto(message: _115.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _115.MsgVoteResponse): _115.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _115.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _115.MsgVoteWeighted;
                fromPartial(object: Partial<_115.MsgVoteWeighted>): _115.MsgVoteWeighted;
                fromAmino(object: _115.MsgVoteWeightedAmino): _115.MsgVoteWeighted;
                toAmino(message: _115.MsgVoteWeighted): _115.MsgVoteWeightedAmino;
                fromAminoMsg(object: _115.MsgVoteWeightedAminoMsg): _115.MsgVoteWeighted;
                toAminoMsg(message: _115.MsgVoteWeighted): _115.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _115.MsgVoteWeightedProtoMsg): _115.MsgVoteWeighted;
                toProto(message: _115.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _115.MsgVoteWeighted): _115.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _115.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _115.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_115.MsgVoteWeightedResponse>): _115.MsgVoteWeightedResponse;
                fromAmino(_: _115.MsgVoteWeightedResponseAmino): _115.MsgVoteWeightedResponse;
                toAmino(_: _115.MsgVoteWeightedResponse): _115.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _115.MsgVoteWeightedResponseAminoMsg): _115.MsgVoteWeightedResponse;
                toAminoMsg(message: _115.MsgVoteWeightedResponse): _115.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _115.MsgVoteWeightedResponseProtoMsg): _115.MsgVoteWeightedResponse;
                toProto(message: _115.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _115.MsgVoteWeightedResponse): _115.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _115.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _115.MsgDeposit;
                fromPartial(object: Partial<_115.MsgDeposit>): _115.MsgDeposit;
                fromAmino(object: _115.MsgDepositAmino): _115.MsgDeposit;
                toAmino(message: _115.MsgDeposit): _115.MsgDepositAmino;
                fromAminoMsg(object: _115.MsgDepositAminoMsg): _115.MsgDeposit;
                toAminoMsg(message: _115.MsgDeposit): _115.MsgDepositAminoMsg;
                fromProtoMsg(message: _115.MsgDepositProtoMsg): _115.MsgDeposit;
                toProto(message: _115.MsgDeposit): Uint8Array;
                toProtoMsg(message: _115.MsgDeposit): _115.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _115.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _115.MsgDepositResponse;
                fromPartial(_: Partial<_115.MsgDepositResponse>): _115.MsgDepositResponse;
                fromAmino(_: _115.MsgDepositResponseAmino): _115.MsgDepositResponse;
                toAmino(_: _115.MsgDepositResponse): _115.MsgDepositResponseAmino;
                fromAminoMsg(object: _115.MsgDepositResponseAminoMsg): _115.MsgDepositResponse;
                toAminoMsg(message: _115.MsgDepositResponse): _115.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _115.MsgDepositResponseProtoMsg): _115.MsgDepositResponse;
                toProto(message: _115.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _115.MsgDepositResponse): _115.MsgDepositResponseProtoMsg;
            };
            Cosmos_govv1beta1Content_InterfaceDecoder: (input: import("..").BinaryReader | Uint8Array) => _104.CommunityPoolSpendProposal | _104.CommunityPoolSpendProposalWithDeposit | _117.TextProposal | _128.ParameterChangeProposal | _140.SoftwareUpgradeProposal | _140.CancelSoftwareUpgradeProposal | import("../cosmwasm/wasm/v1/proposal").StoreCodeProposal | import("../cosmwasm/wasm/v1/proposal").InstantiateContractProposal | import("../cosmwasm/wasm/v1/proposal").InstantiateContract2Proposal | import("../cosmwasm/wasm/v1/proposal").MigrateContractProposal | import("../cosmwasm/wasm/v1/proposal").SudoContractProposal | import("../cosmwasm/wasm/v1/proposal").ExecuteContractProposal | import("../cosmwasm/wasm/v1/proposal").UpdateAdminProposal | import("../cosmwasm/wasm/v1/proposal").ClearAdminProposal | import("../cosmwasm/wasm/v1/proposal").PinCodesProposal | import("../cosmwasm/wasm/v1/proposal").UnpinCodesProposal | import("../cosmwasm/wasm/v1/proposal").UpdateInstantiateConfigProposal | import("../cosmwasm/wasm/v1/proposal").StoreAndInstantiateContractProposal | import("../ibc/core/client/v1/client").ClientUpdateProposal | import("../ibc/core/client/v1/client").UpgradeProposal | import("../osmosis/pool-incentives/v1beta1/gov").ReplacePoolIncentivesProposal | import("../osmosis/pool-incentives/v1beta1/gov").UpdatePoolIncentivesProposal | import("../osmosis/protorev/v1beta1/gov").SetProtoRevEnabledProposal | import("../osmosis/protorev/v1beta1/gov").SetProtoRevAdminAccountProposal | import("../osmosis/superfluid/v1beta1/gov").SetSuperfluidAssetsProposal | import("../osmosis/superfluid/v1beta1/gov").RemoveSuperfluidAssetsProposal | import("../osmosis/superfluid/v1beta1/gov").UpdateUnpoolWhiteListProposal | import("../osmosis/txfees/v1beta1/gov").UpdateFeeTokenProposal | import("../google/protobuf/any").Any;
            Cosmos_govv1beta1Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_govv1beta1Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _114.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _114.QueryProposalRequest;
                fromPartial(object: Partial<_114.QueryProposalRequest>): _114.QueryProposalRequest;
                fromAmino(object: _114.QueryProposalRequestAmino): _114.QueryProposalRequest;
                toAmino(message: _114.QueryProposalRequest): _114.QueryProposalRequestAmino;
                fromAminoMsg(object: _114.QueryProposalRequestAminoMsg): _114.QueryProposalRequest;
                toAminoMsg(message: _114.QueryProposalRequest): _114.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _114.QueryProposalRequestProtoMsg): _114.QueryProposalRequest;
                toProto(message: _114.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _114.QueryProposalRequest): _114.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _114.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _114.QueryProposalResponse;
                fromPartial(object: Partial<_114.QueryProposalResponse>): _114.QueryProposalResponse;
                fromAmino(object: _114.QueryProposalResponseAmino): _114.QueryProposalResponse;
                toAmino(message: _114.QueryProposalResponse): _114.QueryProposalResponseAmino;
                fromAminoMsg(object: _114.QueryProposalResponseAminoMsg): _114.QueryProposalResponse;
                toAminoMsg(message: _114.QueryProposalResponse): _114.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _114.QueryProposalResponseProtoMsg): _114.QueryProposalResponse;
                toProto(message: _114.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _114.QueryProposalResponse): _114.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _114.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _114.QueryProposalsRequest;
                fromPartial(object: Partial<_114.QueryProposalsRequest>): _114.QueryProposalsRequest;
                fromAmino(object: _114.QueryProposalsRequestAmino): _114.QueryProposalsRequest;
                toAmino(message: _114.QueryProposalsRequest): _114.QueryProposalsRequestAmino;
                fromAminoMsg(object: _114.QueryProposalsRequestAminoMsg): _114.QueryProposalsRequest;
                toAminoMsg(message: _114.QueryProposalsRequest): _114.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _114.QueryProposalsRequestProtoMsg): _114.QueryProposalsRequest;
                toProto(message: _114.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _114.QueryProposalsRequest): _114.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _114.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _114.QueryProposalsResponse;
                fromPartial(object: Partial<_114.QueryProposalsResponse>): _114.QueryProposalsResponse;
                fromAmino(object: _114.QueryProposalsResponseAmino): _114.QueryProposalsResponse;
                toAmino(message: _114.QueryProposalsResponse): _114.QueryProposalsResponseAmino;
                fromAminoMsg(object: _114.QueryProposalsResponseAminoMsg): _114.QueryProposalsResponse;
                toAminoMsg(message: _114.QueryProposalsResponse): _114.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _114.QueryProposalsResponseProtoMsg): _114.QueryProposalsResponse;
                toProto(message: _114.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _114.QueryProposalsResponse): _114.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _114.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _114.QueryVoteRequest;
                fromPartial(object: Partial<_114.QueryVoteRequest>): _114.QueryVoteRequest;
                fromAmino(object: _114.QueryVoteRequestAmino): _114.QueryVoteRequest;
                toAmino(message: _114.QueryVoteRequest): _114.QueryVoteRequestAmino;
                fromAminoMsg(object: _114.QueryVoteRequestAminoMsg): _114.QueryVoteRequest;
                toAminoMsg(message: _114.QueryVoteRequest): _114.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _114.QueryVoteRequestProtoMsg): _114.QueryVoteRequest;
                toProto(message: _114.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _114.QueryVoteRequest): _114.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _114.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _114.QueryVoteResponse;
                fromPartial(object: Partial<_114.QueryVoteResponse>): _114.QueryVoteResponse;
                fromAmino(object: _114.QueryVoteResponseAmino): _114.QueryVoteResponse;
                toAmino(message: _114.QueryVoteResponse): _114.QueryVoteResponseAmino;
                fromAminoMsg(object: _114.QueryVoteResponseAminoMsg): _114.QueryVoteResponse;
                toAminoMsg(message: _114.QueryVoteResponse): _114.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _114.QueryVoteResponseProtoMsg): _114.QueryVoteResponse;
                toProto(message: _114.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _114.QueryVoteResponse): _114.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _114.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _114.QueryVotesRequest;
                fromPartial(object: Partial<_114.QueryVotesRequest>): _114.QueryVotesRequest;
                fromAmino(object: _114.QueryVotesRequestAmino): _114.QueryVotesRequest;
                toAmino(message: _114.QueryVotesRequest): _114.QueryVotesRequestAmino;
                fromAminoMsg(object: _114.QueryVotesRequestAminoMsg): _114.QueryVotesRequest;
                toAminoMsg(message: _114.QueryVotesRequest): _114.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _114.QueryVotesRequestProtoMsg): _114.QueryVotesRequest;
                toProto(message: _114.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _114.QueryVotesRequest): _114.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _114.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _114.QueryVotesResponse;
                fromPartial(object: Partial<_114.QueryVotesResponse>): _114.QueryVotesResponse;
                fromAmino(object: _114.QueryVotesResponseAmino): _114.QueryVotesResponse;
                toAmino(message: _114.QueryVotesResponse): _114.QueryVotesResponseAmino;
                fromAminoMsg(object: _114.QueryVotesResponseAminoMsg): _114.QueryVotesResponse;
                toAminoMsg(message: _114.QueryVotesResponse): _114.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _114.QueryVotesResponseProtoMsg): _114.QueryVotesResponse;
                toProto(message: _114.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _114.QueryVotesResponse): _114.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _114.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _114.QueryParamsRequest;
                fromPartial(object: Partial<_114.QueryParamsRequest>): _114.QueryParamsRequest;
                fromAmino(object: _114.QueryParamsRequestAmino): _114.QueryParamsRequest;
                toAmino(message: _114.QueryParamsRequest): _114.QueryParamsRequestAmino;
                fromAminoMsg(object: _114.QueryParamsRequestAminoMsg): _114.QueryParamsRequest;
                toAminoMsg(message: _114.QueryParamsRequest): _114.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _114.QueryParamsRequestProtoMsg): _114.QueryParamsRequest;
                toProto(message: _114.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _114.QueryParamsRequest): _114.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _114.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _114.QueryParamsResponse;
                fromPartial(object: Partial<_114.QueryParamsResponse>): _114.QueryParamsResponse;
                fromAmino(object: _114.QueryParamsResponseAmino): _114.QueryParamsResponse;
                toAmino(message: _114.QueryParamsResponse): _114.QueryParamsResponseAmino;
                fromAminoMsg(object: _114.QueryParamsResponseAminoMsg): _114.QueryParamsResponse;
                toAminoMsg(message: _114.QueryParamsResponse): _114.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _114.QueryParamsResponseProtoMsg): _114.QueryParamsResponse;
                toProto(message: _114.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _114.QueryParamsResponse): _114.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _114.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _114.QueryDepositRequest;
                fromPartial(object: Partial<_114.QueryDepositRequest>): _114.QueryDepositRequest;
                fromAmino(object: _114.QueryDepositRequestAmino): _114.QueryDepositRequest;
                toAmino(message: _114.QueryDepositRequest): _114.QueryDepositRequestAmino;
                fromAminoMsg(object: _114.QueryDepositRequestAminoMsg): _114.QueryDepositRequest;
                toAminoMsg(message: _114.QueryDepositRequest): _114.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _114.QueryDepositRequestProtoMsg): _114.QueryDepositRequest;
                toProto(message: _114.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _114.QueryDepositRequest): _114.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _114.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _114.QueryDepositResponse;
                fromPartial(object: Partial<_114.QueryDepositResponse>): _114.QueryDepositResponse;
                fromAmino(object: _114.QueryDepositResponseAmino): _114.QueryDepositResponse;
                toAmino(message: _114.QueryDepositResponse): _114.QueryDepositResponseAmino;
                fromAminoMsg(object: _114.QueryDepositResponseAminoMsg): _114.QueryDepositResponse;
                toAminoMsg(message: _114.QueryDepositResponse): _114.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _114.QueryDepositResponseProtoMsg): _114.QueryDepositResponse;
                toProto(message: _114.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _114.QueryDepositResponse): _114.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _114.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _114.QueryDepositsRequest;
                fromPartial(object: Partial<_114.QueryDepositsRequest>): _114.QueryDepositsRequest;
                fromAmino(object: _114.QueryDepositsRequestAmino): _114.QueryDepositsRequest;
                toAmino(message: _114.QueryDepositsRequest): _114.QueryDepositsRequestAmino;
                fromAminoMsg(object: _114.QueryDepositsRequestAminoMsg): _114.QueryDepositsRequest;
                toAminoMsg(message: _114.QueryDepositsRequest): _114.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _114.QueryDepositsRequestProtoMsg): _114.QueryDepositsRequest;
                toProto(message: _114.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _114.QueryDepositsRequest): _114.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _114.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _114.QueryDepositsResponse;
                fromPartial(object: Partial<_114.QueryDepositsResponse>): _114.QueryDepositsResponse;
                fromAmino(object: _114.QueryDepositsResponseAmino): _114.QueryDepositsResponse;
                toAmino(message: _114.QueryDepositsResponse): _114.QueryDepositsResponseAmino;
                fromAminoMsg(object: _114.QueryDepositsResponseAminoMsg): _114.QueryDepositsResponse;
                toAminoMsg(message: _114.QueryDepositsResponse): _114.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _114.QueryDepositsResponseProtoMsg): _114.QueryDepositsResponse;
                toProto(message: _114.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _114.QueryDepositsResponse): _114.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _114.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _114.QueryTallyResultRequest;
                fromPartial(object: Partial<_114.QueryTallyResultRequest>): _114.QueryTallyResultRequest;
                fromAmino(object: _114.QueryTallyResultRequestAmino): _114.QueryTallyResultRequest;
                toAmino(message: _114.QueryTallyResultRequest): _114.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _114.QueryTallyResultRequestAminoMsg): _114.QueryTallyResultRequest;
                toAminoMsg(message: _114.QueryTallyResultRequest): _114.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _114.QueryTallyResultRequestProtoMsg): _114.QueryTallyResultRequest;
                toProto(message: _114.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _114.QueryTallyResultRequest): _114.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _114.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _114.QueryTallyResultResponse;
                fromPartial(object: Partial<_114.QueryTallyResultResponse>): _114.QueryTallyResultResponse;
                fromAmino(object: _114.QueryTallyResultResponseAmino): _114.QueryTallyResultResponse;
                toAmino(message: _114.QueryTallyResultResponse): _114.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _114.QueryTallyResultResponseAminoMsg): _114.QueryTallyResultResponse;
                toAminoMsg(message: _114.QueryTallyResultResponse): _114.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _114.QueryTallyResultResponseProtoMsg): _114.QueryTallyResultResponse;
                toProto(message: _114.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _114.QueryTallyResultResponse): _114.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _113.VoteOption;
            voteOptionToJSON(object: _113.VoteOption): string;
            proposalStatusFromJSON(object: any): _113.ProposalStatus;
            proposalStatusToJSON(object: _113.ProposalStatus): string;
            VoteOption: typeof _113.VoteOption;
            VoteOptionSDKType: typeof _113.VoteOption;
            VoteOptionAmino: typeof _113.VoteOption;
            ProposalStatus: typeof _113.ProposalStatus;
            ProposalStatusSDKType: typeof _113.ProposalStatus;
            ProposalStatusAmino: typeof _113.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _113.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _113.WeightedVoteOption;
                fromPartial(object: Partial<_113.WeightedVoteOption>): _113.WeightedVoteOption;
                fromAmino(object: _113.WeightedVoteOptionAmino): _113.WeightedVoteOption;
                toAmino(message: _113.WeightedVoteOption): _113.WeightedVoteOptionAmino;
                fromAminoMsg(object: _113.WeightedVoteOptionAminoMsg): _113.WeightedVoteOption;
                toAminoMsg(message: _113.WeightedVoteOption): _113.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _113.WeightedVoteOptionProtoMsg): _113.WeightedVoteOption;
                toProto(message: _113.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _113.WeightedVoteOption): _113.WeightedVoteOptionProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _113.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _113.Deposit;
                fromPartial(object: Partial<_113.Deposit>): _113.Deposit;
                fromAmino(object: _113.DepositAmino): _113.Deposit;
                toAmino(message: _113.Deposit): _113.DepositAmino;
                fromAminoMsg(object: _113.DepositAminoMsg): _113.Deposit;
                toAminoMsg(message: _113.Deposit): _113.DepositAminoMsg;
                fromProtoMsg(message: _113.DepositProtoMsg): _113.Deposit;
                toProto(message: _113.Deposit): Uint8Array;
                toProtoMsg(message: _113.Deposit): _113.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _113.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _113.Proposal;
                fromPartial(object: Partial<_113.Proposal>): _113.Proposal;
                fromAmino(object: _113.ProposalAmino): _113.Proposal;
                toAmino(message: _113.Proposal): _113.ProposalAmino;
                fromAminoMsg(object: _113.ProposalAminoMsg): _113.Proposal;
                toAminoMsg(message: _113.Proposal): _113.ProposalAminoMsg;
                fromProtoMsg(message: _113.ProposalProtoMsg): _113.Proposal;
                toProto(message: _113.Proposal): Uint8Array;
                toProtoMsg(message: _113.Proposal): _113.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _113.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _113.TallyResult;
                fromPartial(object: Partial<_113.TallyResult>): _113.TallyResult;
                fromAmino(object: _113.TallyResultAmino): _113.TallyResult;
                toAmino(message: _113.TallyResult): _113.TallyResultAmino;
                fromAminoMsg(object: _113.TallyResultAminoMsg): _113.TallyResult;
                toAminoMsg(message: _113.TallyResult): _113.TallyResultAminoMsg;
                fromProtoMsg(message: _113.TallyResultProtoMsg): _113.TallyResult;
                toProto(message: _113.TallyResult): Uint8Array;
                toProtoMsg(message: _113.TallyResult): _113.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _113.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _113.Vote;
                fromPartial(object: Partial<_113.Vote>): _113.Vote;
                fromAmino(object: _113.VoteAmino): _113.Vote;
                toAmino(message: _113.Vote): _113.VoteAmino;
                fromAminoMsg(object: _113.VoteAminoMsg): _113.Vote;
                toAminoMsg(message: _113.Vote): _113.VoteAminoMsg;
                fromProtoMsg(message: _113.VoteProtoMsg): _113.Vote;
                toProto(message: _113.Vote): Uint8Array;
                toProtoMsg(message: _113.Vote): _113.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _113.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _113.DepositParams;
                fromPartial(object: Partial<_113.DepositParams>): _113.DepositParams;
                fromAmino(object: _113.DepositParamsAmino): _113.DepositParams;
                toAmino(message: _113.DepositParams): _113.DepositParamsAmino;
                fromAminoMsg(object: _113.DepositParamsAminoMsg): _113.DepositParams;
                toAminoMsg(message: _113.DepositParams): _113.DepositParamsAminoMsg;
                fromProtoMsg(message: _113.DepositParamsProtoMsg): _113.DepositParams;
                toProto(message: _113.DepositParams): Uint8Array;
                toProtoMsg(message: _113.DepositParams): _113.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _113.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _113.VotingParams;
                fromPartial(object: Partial<_113.VotingParams>): _113.VotingParams;
                fromAmino(object: _113.VotingParamsAmino): _113.VotingParams;
                toAmino(message: _113.VotingParams): _113.VotingParamsAmino;
                fromAminoMsg(object: _113.VotingParamsAminoMsg): _113.VotingParams;
                toAminoMsg(message: _113.VotingParams): _113.VotingParamsAminoMsg;
                fromProtoMsg(message: _113.VotingParamsProtoMsg): _113.VotingParams;
                toProto(message: _113.VotingParams): Uint8Array;
                toProtoMsg(message: _113.VotingParams): _113.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _113.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _113.TallyParams;
                fromPartial(object: Partial<_113.TallyParams>): _113.TallyParams;
                fromAmino(object: _113.TallyParamsAmino): _113.TallyParams;
                toAmino(message: _113.TallyParams): _113.TallyParamsAmino;
                fromAminoMsg(object: _113.TallyParamsAminoMsg): _113.TallyParams;
                toAminoMsg(message: _113.TallyParams): _113.TallyParamsAminoMsg;
                fromProtoMsg(message: _113.TallyParamsProtoMsg): _113.TallyParams;
                toProto(message: _113.TallyParams): Uint8Array;
                toProtoMsg(message: _113.TallyParams): _113.TallyParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _112.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.GenesisState;
                fromPartial(object: Partial<_112.GenesisState>): _112.GenesisState;
                fromAmino(object: _112.GenesisStateAmino): _112.GenesisState;
                toAmino(message: _112.GenesisState): _112.GenesisStateAmino;
                fromAminoMsg(object: _112.GenesisStateAminoMsg): _112.GenesisState;
                toAminoMsg(message: _112.GenesisState): _112.GenesisStateAminoMsg;
                fromProtoMsg(message: _112.GenesisStateProtoMsg): _112.GenesisState;
                toProto(message: _112.GenesisState): Uint8Array;
                toProtoMsg(message: _112.GenesisState): _112.GenesisStateProtoMsg;
            };
        };
        const v1beta1: {
            MsgClientImpl: typeof _447.MsgClientImpl;
            QueryClientImpl: typeof _435.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _118.QueryProposalRequest): Promise<_118.QueryProposalResponse>;
                proposals(request: _118.QueryProposalsRequest): Promise<_118.QueryProposalsResponse>;
                vote(request: _118.QueryVoteRequest): Promise<_118.QueryVoteResponse>;
                votes(request: _118.QueryVotesRequest): Promise<_118.QueryVotesResponse>;
                params(request: _118.QueryParamsRequest): Promise<_118.QueryParamsResponse>;
                deposit(request: _118.QueryDepositRequest): Promise<_118.QueryDepositResponse>;
                deposits(request: _118.QueryDepositsRequest): Promise<_118.QueryDepositsResponse>;
                tallyResult(request: _118.QueryTallyResultRequest): Promise<_118.QueryTallyResultResponse>;
            };
            registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _119.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _119.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _119.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _119.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _119.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _119.MsgSubmitProposal;
                    };
                    vote(value: _119.MsgVote): {
                        typeUrl: string;
                        value: _119.MsgVote;
                    };
                    voteWeighted(value: _119.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _119.MsgVoteWeighted;
                    };
                    deposit(value: _119.MsgDeposit): {
                        typeUrl: string;
                        value: _119.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _119.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _119.MsgSubmitProposal;
                    };
                    vote(value: _119.MsgVote): {
                        typeUrl: string;
                        value: _119.MsgVote;
                    };
                    voteWeighted(value: _119.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _119.MsgVoteWeighted;
                    };
                    deposit(value: _119.MsgDeposit): {
                        typeUrl: string;
                        value: _119.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _119.MsgSubmitProposal) => _119.MsgSubmitProposalAmino;
                    fromAmino: (object: _119.MsgSubmitProposalAmino) => _119.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _119.MsgVote) => _119.MsgVoteAmino;
                    fromAmino: (object: _119.MsgVoteAmino) => _119.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _119.MsgVoteWeighted) => _119.MsgVoteWeightedAmino;
                    fromAmino: (object: _119.MsgVoteWeightedAmino) => _119.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _119.MsgDeposit) => _119.MsgDepositAmino;
                    fromAmino: (object: _119.MsgDepositAmino) => _119.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _119.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _119.MsgSubmitProposal;
                fromPartial(object: Partial<_119.MsgSubmitProposal>): _119.MsgSubmitProposal;
                fromAmino(object: _119.MsgSubmitProposalAmino): _119.MsgSubmitProposal;
                toAmino(message: _119.MsgSubmitProposal): _119.MsgSubmitProposalAmino;
                fromAminoMsg(object: _119.MsgSubmitProposalAminoMsg): _119.MsgSubmitProposal;
                toAminoMsg(message: _119.MsgSubmitProposal): _119.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _119.MsgSubmitProposalProtoMsg): _119.MsgSubmitProposal;
                toProto(message: _119.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _119.MsgSubmitProposal): _119.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _119.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _119.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_119.MsgSubmitProposalResponse>): _119.MsgSubmitProposalResponse;
                fromAmino(object: _119.MsgSubmitProposalResponseAmino): _119.MsgSubmitProposalResponse;
                toAmino(message: _119.MsgSubmitProposalResponse): _119.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _119.MsgSubmitProposalResponseAminoMsg): _119.MsgSubmitProposalResponse;
                toAminoMsg(message: _119.MsgSubmitProposalResponse): _119.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _119.MsgSubmitProposalResponseProtoMsg): _119.MsgSubmitProposalResponse;
                toProto(message: _119.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _119.MsgSubmitProposalResponse): _119.MsgSubmitProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _119.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _119.MsgVote;
                fromPartial(object: Partial<_119.MsgVote>): _119.MsgVote;
                fromAmino(object: _119.MsgVoteAmino): _119.MsgVote;
                toAmino(message: _119.MsgVote): _119.MsgVoteAmino;
                fromAminoMsg(object: _119.MsgVoteAminoMsg): _119.MsgVote;
                toAminoMsg(message: _119.MsgVote): _119.MsgVoteAminoMsg;
                fromProtoMsg(message: _119.MsgVoteProtoMsg): _119.MsgVote;
                toProto(message: _119.MsgVote): Uint8Array;
                toProtoMsg(message: _119.MsgVote): _119.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _119.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _119.MsgVoteResponse;
                fromPartial(_: Partial<_119.MsgVoteResponse>): _119.MsgVoteResponse;
                fromAmino(_: _119.MsgVoteResponseAmino): _119.MsgVoteResponse;
                toAmino(_: _119.MsgVoteResponse): _119.MsgVoteResponseAmino;
                fromAminoMsg(object: _119.MsgVoteResponseAminoMsg): _119.MsgVoteResponse;
                toAminoMsg(message: _119.MsgVoteResponse): _119.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _119.MsgVoteResponseProtoMsg): _119.MsgVoteResponse;
                toProto(message: _119.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _119.MsgVoteResponse): _119.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _119.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _119.MsgVoteWeighted;
                fromPartial(object: Partial<_119.MsgVoteWeighted>): _119.MsgVoteWeighted;
                fromAmino(object: _119.MsgVoteWeightedAmino): _119.MsgVoteWeighted;
                toAmino(message: _119.MsgVoteWeighted): _119.MsgVoteWeightedAmino;
                fromAminoMsg(object: _119.MsgVoteWeightedAminoMsg): _119.MsgVoteWeighted;
                toAminoMsg(message: _119.MsgVoteWeighted): _119.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _119.MsgVoteWeightedProtoMsg): _119.MsgVoteWeighted;
                toProto(message: _119.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _119.MsgVoteWeighted): _119.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _119.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _119.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_119.MsgVoteWeightedResponse>): _119.MsgVoteWeightedResponse;
                fromAmino(_: _119.MsgVoteWeightedResponseAmino): _119.MsgVoteWeightedResponse;
                toAmino(_: _119.MsgVoteWeightedResponse): _119.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _119.MsgVoteWeightedResponseAminoMsg): _119.MsgVoteWeightedResponse;
                toAminoMsg(message: _119.MsgVoteWeightedResponse): _119.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _119.MsgVoteWeightedResponseProtoMsg): _119.MsgVoteWeightedResponse;
                toProto(message: _119.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _119.MsgVoteWeightedResponse): _119.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _119.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _119.MsgDeposit;
                fromPartial(object: Partial<_119.MsgDeposit>): _119.MsgDeposit;
                fromAmino(object: _119.MsgDepositAmino): _119.MsgDeposit;
                toAmino(message: _119.MsgDeposit): _119.MsgDepositAmino;
                fromAminoMsg(object: _119.MsgDepositAminoMsg): _119.MsgDeposit;
                toAminoMsg(message: _119.MsgDeposit): _119.MsgDepositAminoMsg;
                fromProtoMsg(message: _119.MsgDepositProtoMsg): _119.MsgDeposit;
                toProto(message: _119.MsgDeposit): Uint8Array;
                toProtoMsg(message: _119.MsgDeposit): _119.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _119.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _119.MsgDepositResponse;
                fromPartial(_: Partial<_119.MsgDepositResponse>): _119.MsgDepositResponse;
                fromAmino(_: _119.MsgDepositResponseAmino): _119.MsgDepositResponse;
                toAmino(_: _119.MsgDepositResponse): _119.MsgDepositResponseAmino;
                fromAminoMsg(object: _119.MsgDepositResponseAminoMsg): _119.MsgDepositResponse;
                toAminoMsg(message: _119.MsgDepositResponse): _119.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _119.MsgDepositResponseProtoMsg): _119.MsgDepositResponse;
                toProto(message: _119.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _119.MsgDepositResponse): _119.MsgDepositResponseProtoMsg;
            };
            Cosmos_govv1beta1Content_InterfaceDecoder: (input: import("..").BinaryReader | Uint8Array) => _104.CommunityPoolSpendProposal | _104.CommunityPoolSpendProposalWithDeposit | _117.TextProposal | _128.ParameterChangeProposal | _140.SoftwareUpgradeProposal | _140.CancelSoftwareUpgradeProposal | import("../cosmwasm/wasm/v1/proposal").StoreCodeProposal | import("../cosmwasm/wasm/v1/proposal").InstantiateContractProposal | import("../cosmwasm/wasm/v1/proposal").InstantiateContract2Proposal | import("../cosmwasm/wasm/v1/proposal").MigrateContractProposal | import("../cosmwasm/wasm/v1/proposal").SudoContractProposal | import("../cosmwasm/wasm/v1/proposal").ExecuteContractProposal | import("../cosmwasm/wasm/v1/proposal").UpdateAdminProposal | import("../cosmwasm/wasm/v1/proposal").ClearAdminProposal | import("../cosmwasm/wasm/v1/proposal").PinCodesProposal | import("../cosmwasm/wasm/v1/proposal").UnpinCodesProposal | import("../cosmwasm/wasm/v1/proposal").UpdateInstantiateConfigProposal | import("../cosmwasm/wasm/v1/proposal").StoreAndInstantiateContractProposal | import("../ibc/core/client/v1/client").ClientUpdateProposal | import("../ibc/core/client/v1/client").UpgradeProposal | import("../osmosis/pool-incentives/v1beta1/gov").ReplacePoolIncentivesProposal | import("../osmosis/pool-incentives/v1beta1/gov").UpdatePoolIncentivesProposal | import("../osmosis/protorev/v1beta1/gov").SetProtoRevEnabledProposal | import("../osmosis/protorev/v1beta1/gov").SetProtoRevAdminAccountProposal | import("../osmosis/superfluid/v1beta1/gov").SetSuperfluidAssetsProposal | import("../osmosis/superfluid/v1beta1/gov").RemoveSuperfluidAssetsProposal | import("../osmosis/superfluid/v1beta1/gov").UpdateUnpoolWhiteListProposal | import("../osmosis/txfees/v1beta1/gov").UpdateFeeTokenProposal | import("../google/protobuf/any").Any;
            Cosmos_govv1beta1Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_govv1beta1Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _118.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _118.QueryProposalRequest;
                fromPartial(object: Partial<_118.QueryProposalRequest>): _118.QueryProposalRequest;
                fromAmino(object: _118.QueryProposalRequestAmino): _118.QueryProposalRequest;
                toAmino(message: _118.QueryProposalRequest): _118.QueryProposalRequestAmino;
                fromAminoMsg(object: _118.QueryProposalRequestAminoMsg): _118.QueryProposalRequest;
                toAminoMsg(message: _118.QueryProposalRequest): _118.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _118.QueryProposalRequestProtoMsg): _118.QueryProposalRequest;
                toProto(message: _118.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _118.QueryProposalRequest): _118.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _118.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _118.QueryProposalResponse;
                fromPartial(object: Partial<_118.QueryProposalResponse>): _118.QueryProposalResponse;
                fromAmino(object: _118.QueryProposalResponseAmino): _118.QueryProposalResponse;
                toAmino(message: _118.QueryProposalResponse): _118.QueryProposalResponseAmino;
                fromAminoMsg(object: _118.QueryProposalResponseAminoMsg): _118.QueryProposalResponse;
                toAminoMsg(message: _118.QueryProposalResponse): _118.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _118.QueryProposalResponseProtoMsg): _118.QueryProposalResponse;
                toProto(message: _118.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _118.QueryProposalResponse): _118.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _118.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _118.QueryProposalsRequest;
                fromPartial(object: Partial<_118.QueryProposalsRequest>): _118.QueryProposalsRequest;
                fromAmino(object: _118.QueryProposalsRequestAmino): _118.QueryProposalsRequest;
                toAmino(message: _118.QueryProposalsRequest): _118.QueryProposalsRequestAmino;
                fromAminoMsg(object: _118.QueryProposalsRequestAminoMsg): _118.QueryProposalsRequest;
                toAminoMsg(message: _118.QueryProposalsRequest): _118.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _118.QueryProposalsRequestProtoMsg): _118.QueryProposalsRequest;
                toProto(message: _118.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _118.QueryProposalsRequest): _118.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _118.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _118.QueryProposalsResponse;
                fromPartial(object: Partial<_118.QueryProposalsResponse>): _118.QueryProposalsResponse;
                fromAmino(object: _118.QueryProposalsResponseAmino): _118.QueryProposalsResponse;
                toAmino(message: _118.QueryProposalsResponse): _118.QueryProposalsResponseAmino;
                fromAminoMsg(object: _118.QueryProposalsResponseAminoMsg): _118.QueryProposalsResponse;
                toAminoMsg(message: _118.QueryProposalsResponse): _118.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _118.QueryProposalsResponseProtoMsg): _118.QueryProposalsResponse;
                toProto(message: _118.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _118.QueryProposalsResponse): _118.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _118.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _118.QueryVoteRequest;
                fromPartial(object: Partial<_118.QueryVoteRequest>): _118.QueryVoteRequest;
                fromAmino(object: _118.QueryVoteRequestAmino): _118.QueryVoteRequest;
                toAmino(message: _118.QueryVoteRequest): _118.QueryVoteRequestAmino;
                fromAminoMsg(object: _118.QueryVoteRequestAminoMsg): _118.QueryVoteRequest;
                toAminoMsg(message: _118.QueryVoteRequest): _118.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _118.QueryVoteRequestProtoMsg): _118.QueryVoteRequest;
                toProto(message: _118.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _118.QueryVoteRequest): _118.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _118.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _118.QueryVoteResponse;
                fromPartial(object: Partial<_118.QueryVoteResponse>): _118.QueryVoteResponse;
                fromAmino(object: _118.QueryVoteResponseAmino): _118.QueryVoteResponse;
                toAmino(message: _118.QueryVoteResponse): _118.QueryVoteResponseAmino;
                fromAminoMsg(object: _118.QueryVoteResponseAminoMsg): _118.QueryVoteResponse;
                toAminoMsg(message: _118.QueryVoteResponse): _118.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _118.QueryVoteResponseProtoMsg): _118.QueryVoteResponse;
                toProto(message: _118.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _118.QueryVoteResponse): _118.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _118.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _118.QueryVotesRequest;
                fromPartial(object: Partial<_118.QueryVotesRequest>): _118.QueryVotesRequest;
                fromAmino(object: _118.QueryVotesRequestAmino): _118.QueryVotesRequest;
                toAmino(message: _118.QueryVotesRequest): _118.QueryVotesRequestAmino;
                fromAminoMsg(object: _118.QueryVotesRequestAminoMsg): _118.QueryVotesRequest;
                toAminoMsg(message: _118.QueryVotesRequest): _118.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _118.QueryVotesRequestProtoMsg): _118.QueryVotesRequest;
                toProto(message: _118.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _118.QueryVotesRequest): _118.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _118.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _118.QueryVotesResponse;
                fromPartial(object: Partial<_118.QueryVotesResponse>): _118.QueryVotesResponse;
                fromAmino(object: _118.QueryVotesResponseAmino): _118.QueryVotesResponse;
                toAmino(message: _118.QueryVotesResponse): _118.QueryVotesResponseAmino;
                fromAminoMsg(object: _118.QueryVotesResponseAminoMsg): _118.QueryVotesResponse;
                toAminoMsg(message: _118.QueryVotesResponse): _118.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _118.QueryVotesResponseProtoMsg): _118.QueryVotesResponse;
                toProto(message: _118.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _118.QueryVotesResponse): _118.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _118.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _118.QueryParamsRequest;
                fromPartial(object: Partial<_118.QueryParamsRequest>): _118.QueryParamsRequest;
                fromAmino(object: _118.QueryParamsRequestAmino): _118.QueryParamsRequest;
                toAmino(message: _118.QueryParamsRequest): _118.QueryParamsRequestAmino;
                fromAminoMsg(object: _118.QueryParamsRequestAminoMsg): _118.QueryParamsRequest;
                toAminoMsg(message: _118.QueryParamsRequest): _118.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _118.QueryParamsRequestProtoMsg): _118.QueryParamsRequest;
                toProto(message: _118.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _118.QueryParamsRequest): _118.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _118.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _118.QueryParamsResponse;
                fromPartial(object: Partial<_118.QueryParamsResponse>): _118.QueryParamsResponse;
                fromAmino(object: _118.QueryParamsResponseAmino): _118.QueryParamsResponse;
                toAmino(message: _118.QueryParamsResponse): _118.QueryParamsResponseAmino;
                fromAminoMsg(object: _118.QueryParamsResponseAminoMsg): _118.QueryParamsResponse;
                toAminoMsg(message: _118.QueryParamsResponse): _118.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _118.QueryParamsResponseProtoMsg): _118.QueryParamsResponse;
                toProto(message: _118.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _118.QueryParamsResponse): _118.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _118.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _118.QueryDepositRequest;
                fromPartial(object: Partial<_118.QueryDepositRequest>): _118.QueryDepositRequest;
                fromAmino(object: _118.QueryDepositRequestAmino): _118.QueryDepositRequest;
                toAmino(message: _118.QueryDepositRequest): _118.QueryDepositRequestAmino;
                fromAminoMsg(object: _118.QueryDepositRequestAminoMsg): _118.QueryDepositRequest;
                toAminoMsg(message: _118.QueryDepositRequest): _118.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _118.QueryDepositRequestProtoMsg): _118.QueryDepositRequest;
                toProto(message: _118.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _118.QueryDepositRequest): _118.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _118.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _118.QueryDepositResponse;
                fromPartial(object: Partial<_118.QueryDepositResponse>): _118.QueryDepositResponse;
                fromAmino(object: _118.QueryDepositResponseAmino): _118.QueryDepositResponse;
                toAmino(message: _118.QueryDepositResponse): _118.QueryDepositResponseAmino;
                fromAminoMsg(object: _118.QueryDepositResponseAminoMsg): _118.QueryDepositResponse;
                toAminoMsg(message: _118.QueryDepositResponse): _118.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _118.QueryDepositResponseProtoMsg): _118.QueryDepositResponse;
                toProto(message: _118.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _118.QueryDepositResponse): _118.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _118.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _118.QueryDepositsRequest;
                fromPartial(object: Partial<_118.QueryDepositsRequest>): _118.QueryDepositsRequest;
                fromAmino(object: _118.QueryDepositsRequestAmino): _118.QueryDepositsRequest;
                toAmino(message: _118.QueryDepositsRequest): _118.QueryDepositsRequestAmino;
                fromAminoMsg(object: _118.QueryDepositsRequestAminoMsg): _118.QueryDepositsRequest;
                toAminoMsg(message: _118.QueryDepositsRequest): _118.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _118.QueryDepositsRequestProtoMsg): _118.QueryDepositsRequest;
                toProto(message: _118.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _118.QueryDepositsRequest): _118.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _118.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _118.QueryDepositsResponse;
                fromPartial(object: Partial<_118.QueryDepositsResponse>): _118.QueryDepositsResponse;
                fromAmino(object: _118.QueryDepositsResponseAmino): _118.QueryDepositsResponse;
                toAmino(message: _118.QueryDepositsResponse): _118.QueryDepositsResponseAmino;
                fromAminoMsg(object: _118.QueryDepositsResponseAminoMsg): _118.QueryDepositsResponse;
                toAminoMsg(message: _118.QueryDepositsResponse): _118.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _118.QueryDepositsResponseProtoMsg): _118.QueryDepositsResponse;
                toProto(message: _118.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _118.QueryDepositsResponse): _118.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _118.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _118.QueryTallyResultRequest;
                fromPartial(object: Partial<_118.QueryTallyResultRequest>): _118.QueryTallyResultRequest;
                fromAmino(object: _118.QueryTallyResultRequestAmino): _118.QueryTallyResultRequest;
                toAmino(message: _118.QueryTallyResultRequest): _118.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _118.QueryTallyResultRequestAminoMsg): _118.QueryTallyResultRequest;
                toAminoMsg(message: _118.QueryTallyResultRequest): _118.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _118.QueryTallyResultRequestProtoMsg): _118.QueryTallyResultRequest;
                toProto(message: _118.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _118.QueryTallyResultRequest): _118.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _118.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _118.QueryTallyResultResponse;
                fromPartial(object: Partial<_118.QueryTallyResultResponse>): _118.QueryTallyResultResponse;
                fromAmino(object: _118.QueryTallyResultResponseAmino): _118.QueryTallyResultResponse;
                toAmino(message: _118.QueryTallyResultResponse): _118.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _118.QueryTallyResultResponseAminoMsg): _118.QueryTallyResultResponse;
                toAminoMsg(message: _118.QueryTallyResultResponse): _118.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _118.QueryTallyResultResponseProtoMsg): _118.QueryTallyResultResponse;
                toProto(message: _118.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _118.QueryTallyResultResponse): _118.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _117.VoteOption;
            voteOptionToJSON(object: _117.VoteOption): string;
            proposalStatusFromJSON(object: any): _117.ProposalStatus;
            proposalStatusToJSON(object: _117.ProposalStatus): string;
            VoteOption: typeof _117.VoteOption;
            VoteOptionSDKType: typeof _117.VoteOption;
            VoteOptionAmino: typeof _117.VoteOption;
            ProposalStatus: typeof _117.ProposalStatus;
            ProposalStatusSDKType: typeof _117.ProposalStatus;
            ProposalStatusAmino: typeof _117.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _117.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _117.WeightedVoteOption;
                fromPartial(object: Partial<_117.WeightedVoteOption>): _117.WeightedVoteOption;
                fromAmino(object: _117.WeightedVoteOptionAmino): _117.WeightedVoteOption;
                toAmino(message: _117.WeightedVoteOption): _117.WeightedVoteOptionAmino;
                fromAminoMsg(object: _117.WeightedVoteOptionAminoMsg): _117.WeightedVoteOption;
                toAminoMsg(message: _117.WeightedVoteOption): _117.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _117.WeightedVoteOptionProtoMsg): _117.WeightedVoteOption;
                toProto(message: _117.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _117.WeightedVoteOption): _117.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                typeUrl: string;
                encode(message: _117.TextProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _117.TextProposal;
                fromPartial(object: Partial<_117.TextProposal>): _117.TextProposal;
                fromAmino(object: _117.TextProposalAmino): _117.TextProposal;
                toAmino(message: _117.TextProposal): _117.TextProposalAmino;
                fromAminoMsg(object: _117.TextProposalAminoMsg): _117.TextProposal;
                toAminoMsg(message: _117.TextProposal): _117.TextProposalAminoMsg;
                fromProtoMsg(message: _117.TextProposalProtoMsg): _117.TextProposal;
                toProto(message: _117.TextProposal): Uint8Array;
                toProtoMsg(message: _117.TextProposal): _117.TextProposalProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _117.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _117.Deposit;
                fromPartial(object: Partial<_117.Deposit>): _117.Deposit;
                fromAmino(object: _117.DepositAmino): _117.Deposit;
                toAmino(message: _117.Deposit): _117.DepositAmino;
                fromAminoMsg(object: _117.DepositAminoMsg): _117.Deposit;
                toAminoMsg(message: _117.Deposit): _117.DepositAminoMsg;
                fromProtoMsg(message: _117.DepositProtoMsg): _117.Deposit;
                toProto(message: _117.Deposit): Uint8Array;
                toProtoMsg(message: _117.Deposit): _117.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _117.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _117.Proposal;
                fromPartial(object: Partial<_117.Proposal>): _117.Proposal;
                fromAmino(object: _117.ProposalAmino): _117.Proposal;
                toAmino(message: _117.Proposal): _117.ProposalAmino;
                fromAminoMsg(object: _117.ProposalAminoMsg): _117.Proposal;
                toAminoMsg(message: _117.Proposal): _117.ProposalAminoMsg;
                fromProtoMsg(message: _117.ProposalProtoMsg): _117.Proposal;
                toProto(message: _117.Proposal): Uint8Array;
                toProtoMsg(message: _117.Proposal): _117.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _117.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _117.TallyResult;
                fromPartial(object: Partial<_117.TallyResult>): _117.TallyResult;
                fromAmino(object: _117.TallyResultAmino): _117.TallyResult;
                toAmino(message: _117.TallyResult): _117.TallyResultAmino;
                fromAminoMsg(object: _117.TallyResultAminoMsg): _117.TallyResult;
                toAminoMsg(message: _117.TallyResult): _117.TallyResultAminoMsg;
                fromProtoMsg(message: _117.TallyResultProtoMsg): _117.TallyResult;
                toProto(message: _117.TallyResult): Uint8Array;
                toProtoMsg(message: _117.TallyResult): _117.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _117.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _117.Vote;
                fromPartial(object: Partial<_117.Vote>): _117.Vote;
                fromAmino(object: _117.VoteAmino): _117.Vote;
                toAmino(message: _117.Vote): _117.VoteAmino;
                fromAminoMsg(object: _117.VoteAminoMsg): _117.Vote;
                toAminoMsg(message: _117.Vote): _117.VoteAminoMsg;
                fromProtoMsg(message: _117.VoteProtoMsg): _117.Vote;
                toProto(message: _117.Vote): Uint8Array;
                toProtoMsg(message: _117.Vote): _117.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _117.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _117.DepositParams;
                fromPartial(object: Partial<_117.DepositParams>): _117.DepositParams;
                fromAmino(object: _117.DepositParamsAmino): _117.DepositParams;
                toAmino(message: _117.DepositParams): _117.DepositParamsAmino;
                fromAminoMsg(object: _117.DepositParamsAminoMsg): _117.DepositParams;
                toAminoMsg(message: _117.DepositParams): _117.DepositParamsAminoMsg;
                fromProtoMsg(message: _117.DepositParamsProtoMsg): _117.DepositParams;
                toProto(message: _117.DepositParams): Uint8Array;
                toProtoMsg(message: _117.DepositParams): _117.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _117.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _117.VotingParams;
                fromPartial(object: Partial<_117.VotingParams>): _117.VotingParams;
                fromAmino(object: _117.VotingParamsAmino): _117.VotingParams;
                toAmino(message: _117.VotingParams): _117.VotingParamsAmino;
                fromAminoMsg(object: _117.VotingParamsAminoMsg): _117.VotingParams;
                toAminoMsg(message: _117.VotingParams): _117.VotingParamsAminoMsg;
                fromProtoMsg(message: _117.VotingParamsProtoMsg): _117.VotingParams;
                toProto(message: _117.VotingParams): Uint8Array;
                toProtoMsg(message: _117.VotingParams): _117.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _117.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _117.TallyParams;
                fromPartial(object: Partial<_117.TallyParams>): _117.TallyParams;
                fromAmino(object: _117.TallyParamsAmino): _117.TallyParams;
                toAmino(message: _117.TallyParams): _117.TallyParamsAmino;
                fromAminoMsg(object: _117.TallyParamsAminoMsg): _117.TallyParams;
                toAminoMsg(message: _117.TallyParams): _117.TallyParamsAminoMsg;
                fromProtoMsg(message: _117.TallyParamsProtoMsg): _117.TallyParams;
                toProto(message: _117.TallyParams): Uint8Array;
                toProtoMsg(message: _117.TallyParams): _117.TallyParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _116.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _116.GenesisState;
                fromPartial(object: Partial<_116.GenesisState>): _116.GenesisState;
                fromAmino(object: _116.GenesisStateAmino): _116.GenesisState;
                toAmino(message: _116.GenesisState): _116.GenesisStateAmino;
                fromAminoMsg(object: _116.GenesisStateAminoMsg): _116.GenesisState;
                toAminoMsg(message: _116.GenesisState): _116.GenesisStateAminoMsg;
                fromProtoMsg(message: _116.GenesisStateProtoMsg): _116.GenesisState;
                toProto(message: _116.GenesisState): Uint8Array;
                toProtoMsg(message: _116.GenesisState): _116.GenesisStateProtoMsg;
            };
        };
    }
    namespace group {
        const v1: {
            MsgClientImpl: typeof _448.MsgClientImpl;
            QueryClientImpl: typeof _436.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                groupInfo(request: _122.QueryGroupInfoRequest): Promise<_122.QueryGroupInfoResponse>;
                groupPolicyInfo(request: _122.QueryGroupPolicyInfoRequest): Promise<_122.QueryGroupPolicyInfoResponse>;
                groupMembers(request: _122.QueryGroupMembersRequest): Promise<_122.QueryGroupMembersResponse>;
                groupsByAdmin(request: _122.QueryGroupsByAdminRequest): Promise<_122.QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: _122.QueryGroupPoliciesByGroupRequest): Promise<_122.QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: _122.QueryGroupPoliciesByAdminRequest): Promise<_122.QueryGroupPoliciesByAdminResponse>;
                proposal(request: _122.QueryProposalRequest): Promise<_122.QueryProposalResponse>;
                proposalsByGroupPolicy(request: _122.QueryProposalsByGroupPolicyRequest): Promise<_122.QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: _122.QueryVoteByProposalVoterRequest): Promise<_122.QueryVoteByProposalVoterResponse>;
                votesByProposal(request: _122.QueryVotesByProposalRequest): Promise<_122.QueryVotesByProposalResponse>;
                votesByVoter(request: _122.QueryVotesByVoterRequest): Promise<_122.QueryVotesByVoterResponse>;
                groupsByMember(request: _122.QueryGroupsByMemberRequest): Promise<_122.QueryGroupsByMemberResponse>;
                tallyResult(request: _122.QueryTallyResultRequest): Promise<_122.QueryTallyResultResponse>;
            };
            registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _123.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _123.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _123.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _123.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupPolicy(value: _123.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupWithPolicy(value: _123.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyAdmin(value: _123.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyDecisionPolicy(value: _123.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyMetadata(value: _123.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitProposal(value: _123.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawProposal(value: _123.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _123.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _123.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leaveGroup(value: _123.MsgLeaveGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _123.MsgCreateGroup): {
                        typeUrl: string;
                        value: _123.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _123.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _123.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _123.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _123.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _123.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _123.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _123.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _123.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _123.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _123.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _123.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _123.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _123.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _123.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _123.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _123.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _123.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _123.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _123.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _123.MsgWithdrawProposal;
                    };
                    vote(value: _123.MsgVote): {
                        typeUrl: string;
                        value: _123.MsgVote;
                    };
                    exec(value: _123.MsgExec): {
                        typeUrl: string;
                        value: _123.MsgExec;
                    };
                    leaveGroup(value: _123.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _123.MsgLeaveGroup;
                    };
                };
                fromPartial: {
                    createGroup(value: _123.MsgCreateGroup): {
                        typeUrl: string;
                        value: _123.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _123.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _123.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _123.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _123.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _123.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _123.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _123.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _123.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _123.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _123.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _123.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _123.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _123.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _123.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _123.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _123.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _123.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _123.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _123.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _123.MsgWithdrawProposal;
                    };
                    vote(value: _123.MsgVote): {
                        typeUrl: string;
                        value: _123.MsgVote;
                    };
                    exec(value: _123.MsgExec): {
                        typeUrl: string;
                        value: _123.MsgExec;
                    };
                    leaveGroup(value: _123.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _123.MsgLeaveGroup;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: (message: _123.MsgCreateGroup) => _123.MsgCreateGroupAmino;
                    fromAmino: (object: _123.MsgCreateGroupAmino) => _123.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: (message: _123.MsgUpdateGroupMembers) => _123.MsgUpdateGroupMembersAmino;
                    fromAmino: (object: _123.MsgUpdateGroupMembersAmino) => _123.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: (message: _123.MsgUpdateGroupAdmin) => _123.MsgUpdateGroupAdminAmino;
                    fromAmino: (object: _123.MsgUpdateGroupAdminAmino) => _123.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: (message: _123.MsgUpdateGroupMetadata) => _123.MsgUpdateGroupMetadataAmino;
                    fromAmino: (object: _123.MsgUpdateGroupMetadataAmino) => _123.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: (message: _123.MsgCreateGroupPolicy) => _123.MsgCreateGroupPolicyAmino;
                    fromAmino: (object: _123.MsgCreateGroupPolicyAmino) => _123.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: (message: _123.MsgCreateGroupWithPolicy) => _123.MsgCreateGroupWithPolicyAmino;
                    fromAmino: (object: _123.MsgCreateGroupWithPolicyAmino) => _123.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: (message: _123.MsgUpdateGroupPolicyAdmin) => _123.MsgUpdateGroupPolicyAdminAmino;
                    fromAmino: (object: _123.MsgUpdateGroupPolicyAdminAmino) => _123.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: (message: _123.MsgUpdateGroupPolicyDecisionPolicy) => _123.MsgUpdateGroupPolicyDecisionPolicyAmino;
                    fromAmino: (object: _123.MsgUpdateGroupPolicyDecisionPolicyAmino) => _123.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: (message: _123.MsgUpdateGroupPolicyMetadata) => _123.MsgUpdateGroupPolicyMetadataAmino;
                    fromAmino: (object: _123.MsgUpdateGroupPolicyMetadataAmino) => _123.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _123.MsgSubmitProposal) => _123.MsgSubmitProposalAmino;
                    fromAmino: (object: _123.MsgSubmitProposalAmino) => _123.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: (message: _123.MsgWithdrawProposal) => _123.MsgWithdrawProposalAmino;
                    fromAmino: (object: _123.MsgWithdrawProposalAmino) => _123.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _123.MsgVote) => _123.MsgVoteAmino;
                    fromAmino: (object: _123.MsgVoteAmino) => _123.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _123.MsgExec) => _123.MsgExecAmino;
                    fromAmino: (object: _123.MsgExecAmino) => _123.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: (message: _123.MsgLeaveGroup) => _123.MsgLeaveGroupAmino;
                    fromAmino: (object: _123.MsgLeaveGroupAmino) => _123.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _124.VoteOption;
            voteOptionToJSON(object: _124.VoteOption): string;
            proposalStatusFromJSON(object: any): _124.ProposalStatus;
            proposalStatusToJSON(object: _124.ProposalStatus): string;
            proposalResultFromJSON(object: any): _124.ProposalResult;
            proposalResultToJSON(object: _124.ProposalResult): string;
            proposalExecutorResultFromJSON(object: any): _124.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _124.ProposalExecutorResult): string;
            VoteOption: typeof _124.VoteOption;
            VoteOptionSDKType: typeof _124.VoteOption;
            VoteOptionAmino: typeof _124.VoteOption;
            ProposalStatus: typeof _124.ProposalStatus;
            ProposalStatusSDKType: typeof _124.ProposalStatus;
            ProposalStatusAmino: typeof _124.ProposalStatus;
            ProposalResult: typeof _124.ProposalResult;
            ProposalResultSDKType: typeof _124.ProposalResult;
            ProposalResultAmino: typeof _124.ProposalResult;
            ProposalExecutorResult: typeof _124.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _124.ProposalExecutorResult;
            ProposalExecutorResultAmino: typeof _124.ProposalExecutorResult;
            Member: {
                typeUrl: string;
                encode(message: _124.Member, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _124.Member;
                fromPartial(object: Partial<_124.Member>): _124.Member;
                fromAmino(object: _124.MemberAmino): _124.Member;
                toAmino(message: _124.Member): _124.MemberAmino;
                fromAminoMsg(object: _124.MemberAminoMsg): _124.Member;
                toAminoMsg(message: _124.Member): _124.MemberAminoMsg;
                fromProtoMsg(message: _124.MemberProtoMsg): _124.Member;
                toProto(message: _124.Member): Uint8Array;
                toProtoMsg(message: _124.Member): _124.MemberProtoMsg;
            };
            Members: {
                typeUrl: string;
                encode(message: _124.Members, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _124.Members;
                fromPartial(object: Partial<_124.Members>): _124.Members;
                fromAmino(object: _124.MembersAmino): _124.Members;
                toAmino(message: _124.Members): _124.MembersAmino;
                fromAminoMsg(object: _124.MembersAminoMsg): _124.Members;
                toAminoMsg(message: _124.Members): _124.MembersAminoMsg;
                fromProtoMsg(message: _124.MembersProtoMsg): _124.Members;
                toProto(message: _124.Members): Uint8Array;
                toProtoMsg(message: _124.Members): _124.MembersProtoMsg;
            };
            ThresholdDecisionPolicy: {
                typeUrl: string;
                encode(message: _124.ThresholdDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _124.ThresholdDecisionPolicy;
                fromPartial(object: Partial<_124.ThresholdDecisionPolicy>): _124.ThresholdDecisionPolicy;
                fromAmino(object: _124.ThresholdDecisionPolicyAmino): _124.ThresholdDecisionPolicy;
                toAmino(message: _124.ThresholdDecisionPolicy): _124.ThresholdDecisionPolicyAmino;
                fromAminoMsg(object: _124.ThresholdDecisionPolicyAminoMsg): _124.ThresholdDecisionPolicy;
                toAminoMsg(message: _124.ThresholdDecisionPolicy): _124.ThresholdDecisionPolicyAminoMsg;
                fromProtoMsg(message: _124.ThresholdDecisionPolicyProtoMsg): _124.ThresholdDecisionPolicy;
                toProto(message: _124.ThresholdDecisionPolicy): Uint8Array;
                toProtoMsg(message: _124.ThresholdDecisionPolicy): _124.ThresholdDecisionPolicyProtoMsg;
            };
            PercentageDecisionPolicy: {
                typeUrl: string;
                encode(message: _124.PercentageDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _124.PercentageDecisionPolicy;
                fromPartial(object: Partial<_124.PercentageDecisionPolicy>): _124.PercentageDecisionPolicy;
                fromAmino(object: _124.PercentageDecisionPolicyAmino): _124.PercentageDecisionPolicy;
                toAmino(message: _124.PercentageDecisionPolicy): _124.PercentageDecisionPolicyAmino;
                fromAminoMsg(object: _124.PercentageDecisionPolicyAminoMsg): _124.PercentageDecisionPolicy;
                toAminoMsg(message: _124.PercentageDecisionPolicy): _124.PercentageDecisionPolicyAminoMsg;
                fromProtoMsg(message: _124.PercentageDecisionPolicyProtoMsg): _124.PercentageDecisionPolicy;
                toProto(message: _124.PercentageDecisionPolicy): Uint8Array;
                toProtoMsg(message: _124.PercentageDecisionPolicy): _124.PercentageDecisionPolicyProtoMsg;
            };
            DecisionPolicyWindows: {
                typeUrl: string;
                encode(message: _124.DecisionPolicyWindows, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _124.DecisionPolicyWindows;
                fromPartial(object: Partial<_124.DecisionPolicyWindows>): _124.DecisionPolicyWindows;
                fromAmino(object: _124.DecisionPolicyWindowsAmino): _124.DecisionPolicyWindows;
                toAmino(message: _124.DecisionPolicyWindows): _124.DecisionPolicyWindowsAmino;
                fromAminoMsg(object: _124.DecisionPolicyWindowsAminoMsg): _124.DecisionPolicyWindows;
                toAminoMsg(message: _124.DecisionPolicyWindows): _124.DecisionPolicyWindowsAminoMsg;
                fromProtoMsg(message: _124.DecisionPolicyWindowsProtoMsg): _124.DecisionPolicyWindows;
                toProto(message: _124.DecisionPolicyWindows): Uint8Array;
                toProtoMsg(message: _124.DecisionPolicyWindows): _124.DecisionPolicyWindowsProtoMsg;
            };
            GroupInfo: {
                typeUrl: string;
                encode(message: _124.GroupInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _124.GroupInfo;
                fromPartial(object: Partial<_124.GroupInfo>): _124.GroupInfo;
                fromAmino(object: _124.GroupInfoAmino): _124.GroupInfo;
                toAmino(message: _124.GroupInfo): _124.GroupInfoAmino;
                fromAminoMsg(object: _124.GroupInfoAminoMsg): _124.GroupInfo;
                toAminoMsg(message: _124.GroupInfo): _124.GroupInfoAminoMsg;
                fromProtoMsg(message: _124.GroupInfoProtoMsg): _124.GroupInfo;
                toProto(message: _124.GroupInfo): Uint8Array;
                toProtoMsg(message: _124.GroupInfo): _124.GroupInfoProtoMsg;
            };
            GroupMember: {
                typeUrl: string;
                encode(message: _124.GroupMember, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _124.GroupMember;
                fromPartial(object: Partial<_124.GroupMember>): _124.GroupMember;
                fromAmino(object: _124.GroupMemberAmino): _124.GroupMember;
                toAmino(message: _124.GroupMember): _124.GroupMemberAmino;
                fromAminoMsg(object: _124.GroupMemberAminoMsg): _124.GroupMember;
                toAminoMsg(message: _124.GroupMember): _124.GroupMemberAminoMsg;
                fromProtoMsg(message: _124.GroupMemberProtoMsg): _124.GroupMember;
                toProto(message: _124.GroupMember): Uint8Array;
                toProtoMsg(message: _124.GroupMember): _124.GroupMemberProtoMsg;
            };
            GroupPolicyInfo: {
                typeUrl: string;
                encode(message: _124.GroupPolicyInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _124.GroupPolicyInfo;
                fromPartial(object: Partial<_124.GroupPolicyInfo>): _124.GroupPolicyInfo;
                fromAmino(object: _124.GroupPolicyInfoAmino): _124.GroupPolicyInfo;
                toAmino(message: _124.GroupPolicyInfo): _124.GroupPolicyInfoAmino;
                fromAminoMsg(object: _124.GroupPolicyInfoAminoMsg): _124.GroupPolicyInfo;
                toAminoMsg(message: _124.GroupPolicyInfo): _124.GroupPolicyInfoAminoMsg;
                fromProtoMsg(message: _124.GroupPolicyInfoProtoMsg): _124.GroupPolicyInfo;
                toProto(message: _124.GroupPolicyInfo): Uint8Array;
                toProtoMsg(message: _124.GroupPolicyInfo): _124.GroupPolicyInfoProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _124.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _124.Proposal;
                fromPartial(object: Partial<_124.Proposal>): _124.Proposal;
                fromAmino(object: _124.ProposalAmino): _124.Proposal;
                toAmino(message: _124.Proposal): _124.ProposalAmino;
                fromAminoMsg(object: _124.ProposalAminoMsg): _124.Proposal;
                toAminoMsg(message: _124.Proposal): _124.ProposalAminoMsg;
                fromProtoMsg(message: _124.ProposalProtoMsg): _124.Proposal;
                toProto(message: _124.Proposal): Uint8Array;
                toProtoMsg(message: _124.Proposal): _124.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _124.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _124.TallyResult;
                fromPartial(object: Partial<_124.TallyResult>): _124.TallyResult;
                fromAmino(object: _124.TallyResultAmino): _124.TallyResult;
                toAmino(message: _124.TallyResult): _124.TallyResultAmino;
                fromAminoMsg(object: _124.TallyResultAminoMsg): _124.TallyResult;
                toAminoMsg(message: _124.TallyResult): _124.TallyResultAminoMsg;
                fromProtoMsg(message: _124.TallyResultProtoMsg): _124.TallyResult;
                toProto(message: _124.TallyResult): Uint8Array;
                toProtoMsg(message: _124.TallyResult): _124.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _124.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _124.Vote;
                fromPartial(object: Partial<_124.Vote>): _124.Vote;
                fromAmino(object: _124.VoteAmino): _124.Vote;
                toAmino(message: _124.Vote): _124.VoteAmino;
                fromAminoMsg(object: _124.VoteAminoMsg): _124.Vote;
                toAminoMsg(message: _124.Vote): _124.VoteAminoMsg;
                fromProtoMsg(message: _124.VoteProtoMsg): _124.Vote;
                toProto(message: _124.Vote): Uint8Array;
                toProtoMsg(message: _124.Vote): _124.VoteProtoMsg;
            };
            Cosmos_groupDecisionPolicy_InterfaceDecoder: (input: import("..").BinaryReader | Uint8Array) => _124.ThresholdDecisionPolicy | _124.PercentageDecisionPolicy | import("../google/protobuf/any").Any;
            Cosmos_groupDecisionPolicy_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_groupDecisionPolicy_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            execFromJSON(object: any): _123.Exec;
            execToJSON(object: _123.Exec): string;
            Exec: typeof _123.Exec;
            ExecSDKType: typeof _123.Exec;
            ExecAmino: typeof _123.Exec;
            MsgCreateGroup: {
                typeUrl: string;
                encode(message: _123.MsgCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _123.MsgCreateGroup;
                fromPartial(object: Partial<_123.MsgCreateGroup>): _123.MsgCreateGroup;
                fromAmino(object: _123.MsgCreateGroupAmino): _123.MsgCreateGroup;
                toAmino(message: _123.MsgCreateGroup): _123.MsgCreateGroupAmino;
                fromAminoMsg(object: _123.MsgCreateGroupAminoMsg): _123.MsgCreateGroup;
                toAminoMsg(message: _123.MsgCreateGroup): _123.MsgCreateGroupAminoMsg;
                fromProtoMsg(message: _123.MsgCreateGroupProtoMsg): _123.MsgCreateGroup;
                toProto(message: _123.MsgCreateGroup): Uint8Array;
                toProtoMsg(message: _123.MsgCreateGroup): _123.MsgCreateGroupProtoMsg;
            };
            MsgCreateGroupResponse: {
                typeUrl: string;
                encode(message: _123.MsgCreateGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _123.MsgCreateGroupResponse;
                fromPartial(object: Partial<_123.MsgCreateGroupResponse>): _123.MsgCreateGroupResponse;
                fromAmino(object: _123.MsgCreateGroupResponseAmino): _123.MsgCreateGroupResponse;
                toAmino(message: _123.MsgCreateGroupResponse): _123.MsgCreateGroupResponseAmino;
                fromAminoMsg(object: _123.MsgCreateGroupResponseAminoMsg): _123.MsgCreateGroupResponse;
                toAminoMsg(message: _123.MsgCreateGroupResponse): _123.MsgCreateGroupResponseAminoMsg;
                fromProtoMsg(message: _123.MsgCreateGroupResponseProtoMsg): _123.MsgCreateGroupResponse;
                toProto(message: _123.MsgCreateGroupResponse): Uint8Array;
                toProtoMsg(message: _123.MsgCreateGroupResponse): _123.MsgCreateGroupResponseProtoMsg;
            };
            MsgUpdateGroupMembers: {
                typeUrl: string;
                encode(message: _123.MsgUpdateGroupMembers, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _123.MsgUpdateGroupMembers;
                fromPartial(object: Partial<_123.MsgUpdateGroupMembers>): _123.MsgUpdateGroupMembers;
                fromAmino(object: _123.MsgUpdateGroupMembersAmino): _123.MsgUpdateGroupMembers;
                toAmino(message: _123.MsgUpdateGroupMembers): _123.MsgUpdateGroupMembersAmino;
                fromAminoMsg(object: _123.MsgUpdateGroupMembersAminoMsg): _123.MsgUpdateGroupMembers;
                toAminoMsg(message: _123.MsgUpdateGroupMembers): _123.MsgUpdateGroupMembersAminoMsg;
                fromProtoMsg(message: _123.MsgUpdateGroupMembersProtoMsg): _123.MsgUpdateGroupMembers;
                toProto(message: _123.MsgUpdateGroupMembers): Uint8Array;
                toProtoMsg(message: _123.MsgUpdateGroupMembers): _123.MsgUpdateGroupMembersProtoMsg;
            };
            MsgUpdateGroupMembersResponse: {
                typeUrl: string;
                encode(_: _123.MsgUpdateGroupMembersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _123.MsgUpdateGroupMembersResponse;
                fromPartial(_: Partial<_123.MsgUpdateGroupMembersResponse>): _123.MsgUpdateGroupMembersResponse;
                fromAmino(_: _123.MsgUpdateGroupMembersResponseAmino): _123.MsgUpdateGroupMembersResponse;
                toAmino(_: _123.MsgUpdateGroupMembersResponse): _123.MsgUpdateGroupMembersResponseAmino;
                fromAminoMsg(object: _123.MsgUpdateGroupMembersResponseAminoMsg): _123.MsgUpdateGroupMembersResponse;
                toAminoMsg(message: _123.MsgUpdateGroupMembersResponse): _123.MsgUpdateGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _123.MsgUpdateGroupMembersResponseProtoMsg): _123.MsgUpdateGroupMembersResponse;
                toProto(message: _123.MsgUpdateGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _123.MsgUpdateGroupMembersResponse): _123.MsgUpdateGroupMembersResponseProtoMsg;
            };
            MsgUpdateGroupAdmin: {
                typeUrl: string;
                encode(message: _123.MsgUpdateGroupAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _123.MsgUpdateGroupAdmin;
                fromPartial(object: Partial<_123.MsgUpdateGroupAdmin>): _123.MsgUpdateGroupAdmin;
                fromAmino(object: _123.MsgUpdateGroupAdminAmino): _123.MsgUpdateGroupAdmin;
                toAmino(message: _123.MsgUpdateGroupAdmin): _123.MsgUpdateGroupAdminAmino;
                fromAminoMsg(object: _123.MsgUpdateGroupAdminAminoMsg): _123.MsgUpdateGroupAdmin;
                toAminoMsg(message: _123.MsgUpdateGroupAdmin): _123.MsgUpdateGroupAdminAminoMsg;
                fromProtoMsg(message: _123.MsgUpdateGroupAdminProtoMsg): _123.MsgUpdateGroupAdmin;
                toProto(message: _123.MsgUpdateGroupAdmin): Uint8Array;
                toProtoMsg(message: _123.MsgUpdateGroupAdmin): _123.MsgUpdateGroupAdminProtoMsg;
            };
            MsgUpdateGroupAdminResponse: {
                typeUrl: string;
                encode(_: _123.MsgUpdateGroupAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _123.MsgUpdateGroupAdminResponse;
                fromPartial(_: Partial<_123.MsgUpdateGroupAdminResponse>): _123.MsgUpdateGroupAdminResponse;
                fromAmino(_: _123.MsgUpdateGroupAdminResponseAmino): _123.MsgUpdateGroupAdminResponse;
                toAmino(_: _123.MsgUpdateGroupAdminResponse): _123.MsgUpdateGroupAdminResponseAmino;
                fromAminoMsg(object: _123.MsgUpdateGroupAdminResponseAminoMsg): _123.MsgUpdateGroupAdminResponse;
                toAminoMsg(message: _123.MsgUpdateGroupAdminResponse): _123.MsgUpdateGroupAdminResponseAminoMsg;
                fromProtoMsg(message: _123.MsgUpdateGroupAdminResponseProtoMsg): _123.MsgUpdateGroupAdminResponse;
                toProto(message: _123.MsgUpdateGroupAdminResponse): Uint8Array;
                toProtoMsg(message: _123.MsgUpdateGroupAdminResponse): _123.MsgUpdateGroupAdminResponseProtoMsg;
            };
            MsgUpdateGroupMetadata: {
                typeUrl: string;
                encode(message: _123.MsgUpdateGroupMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _123.MsgUpdateGroupMetadata;
                fromPartial(object: Partial<_123.MsgUpdateGroupMetadata>): _123.MsgUpdateGroupMetadata;
                fromAmino(object: _123.MsgUpdateGroupMetadataAmino): _123.MsgUpdateGroupMetadata;
                toAmino(message: _123.MsgUpdateGroupMetadata): _123.MsgUpdateGroupMetadataAmino;
                fromAminoMsg(object: _123.MsgUpdateGroupMetadataAminoMsg): _123.MsgUpdateGroupMetadata;
                toAminoMsg(message: _123.MsgUpdateGroupMetadata): _123.MsgUpdateGroupMetadataAminoMsg;
                fromProtoMsg(message: _123.MsgUpdateGroupMetadataProtoMsg): _123.MsgUpdateGroupMetadata;
                toProto(message: _123.MsgUpdateGroupMetadata): Uint8Array;
                toProtoMsg(message: _123.MsgUpdateGroupMetadata): _123.MsgUpdateGroupMetadataProtoMsg;
            };
            MsgUpdateGroupMetadataResponse: {
                typeUrl: string;
                encode(_: _123.MsgUpdateGroupMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _123.MsgUpdateGroupMetadataResponse;
                fromPartial(_: Partial<_123.MsgUpdateGroupMetadataResponse>): _123.MsgUpdateGroupMetadataResponse;
                fromAmino(_: _123.MsgUpdateGroupMetadataResponseAmino): _123.MsgUpdateGroupMetadataResponse;
                toAmino(_: _123.MsgUpdateGroupMetadataResponse): _123.MsgUpdateGroupMetadataResponseAmino;
                fromAminoMsg(object: _123.MsgUpdateGroupMetadataResponseAminoMsg): _123.MsgUpdateGroupMetadataResponse;
                toAminoMsg(message: _123.MsgUpdateGroupMetadataResponse): _123.MsgUpdateGroupMetadataResponseAminoMsg;
                fromProtoMsg(message: _123.MsgUpdateGroupMetadataResponseProtoMsg): _123.MsgUpdateGroupMetadataResponse;
                toProto(message: _123.MsgUpdateGroupMetadataResponse): Uint8Array;
                toProtoMsg(message: _123.MsgUpdateGroupMetadataResponse): _123.MsgUpdateGroupMetadataResponseProtoMsg;
            };
            MsgCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _123.MsgCreateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _123.MsgCreateGroupPolicy;
                fromPartial(object: Partial<_123.MsgCreateGroupPolicy>): _123.MsgCreateGroupPolicy;
                fromAmino(object: _123.MsgCreateGroupPolicyAmino): _123.MsgCreateGroupPolicy;
                toAmino(message: _123.MsgCreateGroupPolicy): _123.MsgCreateGroupPolicyAmino;
                fromAminoMsg(object: _123.MsgCreateGroupPolicyAminoMsg): _123.MsgCreateGroupPolicy;
                toAminoMsg(message: _123.MsgCreateGroupPolicy): _123.MsgCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _123.MsgCreateGroupPolicyProtoMsg): _123.MsgCreateGroupPolicy;
                toProto(message: _123.MsgCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _123.MsgCreateGroupPolicy): _123.MsgCreateGroupPolicyProtoMsg;
            };
            MsgCreateGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _123.MsgCreateGroupPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _123.MsgCreateGroupPolicyResponse;
                fromPartial(object: Partial<_123.MsgCreateGroupPolicyResponse>): _123.MsgCreateGroupPolicyResponse;
                fromAmino(object: _123.MsgCreateGroupPolicyResponseAmino): _123.MsgCreateGroupPolicyResponse;
                toAmino(message: _123.MsgCreateGroupPolicyResponse): _123.MsgCreateGroupPolicyResponseAmino;
                fromAminoMsg(object: _123.MsgCreateGroupPolicyResponseAminoMsg): _123.MsgCreateGroupPolicyResponse;
                toAminoMsg(message: _123.MsgCreateGroupPolicyResponse): _123.MsgCreateGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _123.MsgCreateGroupPolicyResponseProtoMsg): _123.MsgCreateGroupPolicyResponse;
                toProto(message: _123.MsgCreateGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _123.MsgCreateGroupPolicyResponse): _123.MsgCreateGroupPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyAdmin: {
                typeUrl: string;
                encode(message: _123.MsgUpdateGroupPolicyAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _123.MsgUpdateGroupPolicyAdmin;
                fromPartial(object: Partial<_123.MsgUpdateGroupPolicyAdmin>): _123.MsgUpdateGroupPolicyAdmin;
                fromAmino(object: _123.MsgUpdateGroupPolicyAdminAmino): _123.MsgUpdateGroupPolicyAdmin;
                toAmino(message: _123.MsgUpdateGroupPolicyAdmin): _123.MsgUpdateGroupPolicyAdminAmino;
                fromAminoMsg(object: _123.MsgUpdateGroupPolicyAdminAminoMsg): _123.MsgUpdateGroupPolicyAdmin;
                toAminoMsg(message: _123.MsgUpdateGroupPolicyAdmin): _123.MsgUpdateGroupPolicyAdminAminoMsg;
                fromProtoMsg(message: _123.MsgUpdateGroupPolicyAdminProtoMsg): _123.MsgUpdateGroupPolicyAdmin;
                toProto(message: _123.MsgUpdateGroupPolicyAdmin): Uint8Array;
                toProtoMsg(message: _123.MsgUpdateGroupPolicyAdmin): _123.MsgUpdateGroupPolicyAdminProtoMsg;
            };
            MsgCreateGroupWithPolicy: {
                typeUrl: string;
                encode(message: _123.MsgCreateGroupWithPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _123.MsgCreateGroupWithPolicy;
                fromPartial(object: Partial<_123.MsgCreateGroupWithPolicy>): _123.MsgCreateGroupWithPolicy;
                fromAmino(object: _123.MsgCreateGroupWithPolicyAmino): _123.MsgCreateGroupWithPolicy;
                toAmino(message: _123.MsgCreateGroupWithPolicy): _123.MsgCreateGroupWithPolicyAmino;
                fromAminoMsg(object: _123.MsgCreateGroupWithPolicyAminoMsg): _123.MsgCreateGroupWithPolicy;
                toAminoMsg(message: _123.MsgCreateGroupWithPolicy): _123.MsgCreateGroupWithPolicyAminoMsg;
                fromProtoMsg(message: _123.MsgCreateGroupWithPolicyProtoMsg): _123.MsgCreateGroupWithPolicy;
                toProto(message: _123.MsgCreateGroupWithPolicy): Uint8Array;
                toProtoMsg(message: _123.MsgCreateGroupWithPolicy): _123.MsgCreateGroupWithPolicyProtoMsg;
            };
            MsgCreateGroupWithPolicyResponse: {
                typeUrl: string;
                encode(message: _123.MsgCreateGroupWithPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _123.MsgCreateGroupWithPolicyResponse;
                fromPartial(object: Partial<_123.MsgCreateGroupWithPolicyResponse>): _123.MsgCreateGroupWithPolicyResponse;
                fromAmino(object: _123.MsgCreateGroupWithPolicyResponseAmino): _123.MsgCreateGroupWithPolicyResponse;
                toAmino(message: _123.MsgCreateGroupWithPolicyResponse): _123.MsgCreateGroupWithPolicyResponseAmino;
                fromAminoMsg(object: _123.MsgCreateGroupWithPolicyResponseAminoMsg): _123.MsgCreateGroupWithPolicyResponse;
                toAminoMsg(message: _123.MsgCreateGroupWithPolicyResponse): _123.MsgCreateGroupWithPolicyResponseAminoMsg;
                fromProtoMsg(message: _123.MsgCreateGroupWithPolicyResponseProtoMsg): _123.MsgCreateGroupWithPolicyResponse;
                toProto(message: _123.MsgCreateGroupWithPolicyResponse): Uint8Array;
                toProtoMsg(message: _123.MsgCreateGroupWithPolicyResponse): _123.MsgCreateGroupWithPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                typeUrl: string;
                encode(_: _123.MsgUpdateGroupPolicyAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _123.MsgUpdateGroupPolicyAdminResponse;
                fromPartial(_: Partial<_123.MsgUpdateGroupPolicyAdminResponse>): _123.MsgUpdateGroupPolicyAdminResponse;
                fromAmino(_: _123.MsgUpdateGroupPolicyAdminResponseAmino): _123.MsgUpdateGroupPolicyAdminResponse;
                toAmino(_: _123.MsgUpdateGroupPolicyAdminResponse): _123.MsgUpdateGroupPolicyAdminResponseAmino;
                fromAminoMsg(object: _123.MsgUpdateGroupPolicyAdminResponseAminoMsg): _123.MsgUpdateGroupPolicyAdminResponse;
                toAminoMsg(message: _123.MsgUpdateGroupPolicyAdminResponse): _123.MsgUpdateGroupPolicyAdminResponseAminoMsg;
                fromProtoMsg(message: _123.MsgUpdateGroupPolicyAdminResponseProtoMsg): _123.MsgUpdateGroupPolicyAdminResponse;
                toProto(message: _123.MsgUpdateGroupPolicyAdminResponse): Uint8Array;
                toProtoMsg(message: _123.MsgUpdateGroupPolicyAdminResponse): _123.MsgUpdateGroupPolicyAdminResponseProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                typeUrl: string;
                encode(message: _123.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _123.MsgUpdateGroupPolicyDecisionPolicy;
                fromPartial(object: Partial<_123.MsgUpdateGroupPolicyDecisionPolicy>): _123.MsgUpdateGroupPolicyDecisionPolicy;
                fromAmino(object: _123.MsgUpdateGroupPolicyDecisionPolicyAmino): _123.MsgUpdateGroupPolicyDecisionPolicy;
                toAmino(message: _123.MsgUpdateGroupPolicyDecisionPolicy): _123.MsgUpdateGroupPolicyDecisionPolicyAmino;
                fromAminoMsg(object: _123.MsgUpdateGroupPolicyDecisionPolicyAminoMsg): _123.MsgUpdateGroupPolicyDecisionPolicy;
                toAminoMsg(message: _123.MsgUpdateGroupPolicyDecisionPolicy): _123.MsgUpdateGroupPolicyDecisionPolicyAminoMsg;
                fromProtoMsg(message: _123.MsgUpdateGroupPolicyDecisionPolicyProtoMsg): _123.MsgUpdateGroupPolicyDecisionPolicy;
                toProto(message: _123.MsgUpdateGroupPolicyDecisionPolicy): Uint8Array;
                toProtoMsg(message: _123.MsgUpdateGroupPolicyDecisionPolicy): _123.MsgUpdateGroupPolicyDecisionPolicyProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                typeUrl: string;
                encode(_: _123.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _123.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromPartial(_: Partial<_123.MsgUpdateGroupPolicyDecisionPolicyResponse>): _123.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromAmino(_: _123.MsgUpdateGroupPolicyDecisionPolicyResponseAmino): _123.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAmino(_: _123.MsgUpdateGroupPolicyDecisionPolicyResponse): _123.MsgUpdateGroupPolicyDecisionPolicyResponseAmino;
                fromAminoMsg(object: _123.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg): _123.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAminoMsg(message: _123.MsgUpdateGroupPolicyDecisionPolicyResponse): _123.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg;
                fromProtoMsg(message: _123.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg): _123.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toProto(message: _123.MsgUpdateGroupPolicyDecisionPolicyResponse): Uint8Array;
                toProtoMsg(message: _123.MsgUpdateGroupPolicyDecisionPolicyResponse): _123.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyMetadata: {
                typeUrl: string;
                encode(message: _123.MsgUpdateGroupPolicyMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _123.MsgUpdateGroupPolicyMetadata;
                fromPartial(object: Partial<_123.MsgUpdateGroupPolicyMetadata>): _123.MsgUpdateGroupPolicyMetadata;
                fromAmino(object: _123.MsgUpdateGroupPolicyMetadataAmino): _123.MsgUpdateGroupPolicyMetadata;
                toAmino(message: _123.MsgUpdateGroupPolicyMetadata): _123.MsgUpdateGroupPolicyMetadataAmino;
                fromAminoMsg(object: _123.MsgUpdateGroupPolicyMetadataAminoMsg): _123.MsgUpdateGroupPolicyMetadata;
                toAminoMsg(message: _123.MsgUpdateGroupPolicyMetadata): _123.MsgUpdateGroupPolicyMetadataAminoMsg;
                fromProtoMsg(message: _123.MsgUpdateGroupPolicyMetadataProtoMsg): _123.MsgUpdateGroupPolicyMetadata;
                toProto(message: _123.MsgUpdateGroupPolicyMetadata): Uint8Array;
                toProtoMsg(message: _123.MsgUpdateGroupPolicyMetadata): _123.MsgUpdateGroupPolicyMetadataProtoMsg;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                typeUrl: string;
                encode(_: _123.MsgUpdateGroupPolicyMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _123.MsgUpdateGroupPolicyMetadataResponse;
                fromPartial(_: Partial<_123.MsgUpdateGroupPolicyMetadataResponse>): _123.MsgUpdateGroupPolicyMetadataResponse;
                fromAmino(_: _123.MsgUpdateGroupPolicyMetadataResponseAmino): _123.MsgUpdateGroupPolicyMetadataResponse;
                toAmino(_: _123.MsgUpdateGroupPolicyMetadataResponse): _123.MsgUpdateGroupPolicyMetadataResponseAmino;
                fromAminoMsg(object: _123.MsgUpdateGroupPolicyMetadataResponseAminoMsg): _123.MsgUpdateGroupPolicyMetadataResponse;
                toAminoMsg(message: _123.MsgUpdateGroupPolicyMetadataResponse): _123.MsgUpdateGroupPolicyMetadataResponseAminoMsg;
                fromProtoMsg(message: _123.MsgUpdateGroupPolicyMetadataResponseProtoMsg): _123.MsgUpdateGroupPolicyMetadataResponse;
                toProto(message: _123.MsgUpdateGroupPolicyMetadataResponse): Uint8Array;
                toProtoMsg(message: _123.MsgUpdateGroupPolicyMetadataResponse): _123.MsgUpdateGroupPolicyMetadataResponseProtoMsg;
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _123.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _123.MsgSubmitProposal;
                fromPartial(object: Partial<_123.MsgSubmitProposal>): _123.MsgSubmitProposal;
                fromAmino(object: _123.MsgSubmitProposalAmino): _123.MsgSubmitProposal;
                toAmino(message: _123.MsgSubmitProposal): _123.MsgSubmitProposalAmino;
                fromAminoMsg(object: _123.MsgSubmitProposalAminoMsg): _123.MsgSubmitProposal;
                toAminoMsg(message: _123.MsgSubmitProposal): _123.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _123.MsgSubmitProposalProtoMsg): _123.MsgSubmitProposal;
                toProto(message: _123.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _123.MsgSubmitProposal): _123.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _123.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _123.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_123.MsgSubmitProposalResponse>): _123.MsgSubmitProposalResponse;
                fromAmino(object: _123.MsgSubmitProposalResponseAmino): _123.MsgSubmitProposalResponse;
                toAmino(message: _123.MsgSubmitProposalResponse): _123.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _123.MsgSubmitProposalResponseAminoMsg): _123.MsgSubmitProposalResponse;
                toAminoMsg(message: _123.MsgSubmitProposalResponse): _123.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _123.MsgSubmitProposalResponseProtoMsg): _123.MsgSubmitProposalResponse;
                toProto(message: _123.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _123.MsgSubmitProposalResponse): _123.MsgSubmitProposalResponseProtoMsg;
            };
            MsgWithdrawProposal: {
                typeUrl: string;
                encode(message: _123.MsgWithdrawProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _123.MsgWithdrawProposal;
                fromPartial(object: Partial<_123.MsgWithdrawProposal>): _123.MsgWithdrawProposal;
                fromAmino(object: _123.MsgWithdrawProposalAmino): _123.MsgWithdrawProposal;
                toAmino(message: _123.MsgWithdrawProposal): _123.MsgWithdrawProposalAmino;
                fromAminoMsg(object: _123.MsgWithdrawProposalAminoMsg): _123.MsgWithdrawProposal;
                toAminoMsg(message: _123.MsgWithdrawProposal): _123.MsgWithdrawProposalAminoMsg;
                fromProtoMsg(message: _123.MsgWithdrawProposalProtoMsg): _123.MsgWithdrawProposal;
                toProto(message: _123.MsgWithdrawProposal): Uint8Array;
                toProtoMsg(message: _123.MsgWithdrawProposal): _123.MsgWithdrawProposalProtoMsg;
            };
            MsgWithdrawProposalResponse: {
                typeUrl: string;
                encode(_: _123.MsgWithdrawProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _123.MsgWithdrawProposalResponse;
                fromPartial(_: Partial<_123.MsgWithdrawProposalResponse>): _123.MsgWithdrawProposalResponse;
                fromAmino(_: _123.MsgWithdrawProposalResponseAmino): _123.MsgWithdrawProposalResponse;
                toAmino(_: _123.MsgWithdrawProposalResponse): _123.MsgWithdrawProposalResponseAmino;
                fromAminoMsg(object: _123.MsgWithdrawProposalResponseAminoMsg): _123.MsgWithdrawProposalResponse;
                toAminoMsg(message: _123.MsgWithdrawProposalResponse): _123.MsgWithdrawProposalResponseAminoMsg;
                fromProtoMsg(message: _123.MsgWithdrawProposalResponseProtoMsg): _123.MsgWithdrawProposalResponse;
                toProto(message: _123.MsgWithdrawProposalResponse): Uint8Array;
                toProtoMsg(message: _123.MsgWithdrawProposalResponse): _123.MsgWithdrawProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _123.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _123.MsgVote;
                fromPartial(object: Partial<_123.MsgVote>): _123.MsgVote;
                fromAmino(object: _123.MsgVoteAmino): _123.MsgVote;
                toAmino(message: _123.MsgVote): _123.MsgVoteAmino;
                fromAminoMsg(object: _123.MsgVoteAminoMsg): _123.MsgVote;
                toAminoMsg(message: _123.MsgVote): _123.MsgVoteAminoMsg;
                fromProtoMsg(message: _123.MsgVoteProtoMsg): _123.MsgVote;
                toProto(message: _123.MsgVote): Uint8Array;
                toProtoMsg(message: _123.MsgVote): _123.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _123.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _123.MsgVoteResponse;
                fromPartial(_: Partial<_123.MsgVoteResponse>): _123.MsgVoteResponse;
                fromAmino(_: _123.MsgVoteResponseAmino): _123.MsgVoteResponse;
                toAmino(_: _123.MsgVoteResponse): _123.MsgVoteResponseAmino;
                fromAminoMsg(object: _123.MsgVoteResponseAminoMsg): _123.MsgVoteResponse;
                toAminoMsg(message: _123.MsgVoteResponse): _123.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _123.MsgVoteResponseProtoMsg): _123.MsgVoteResponse;
                toProto(message: _123.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _123.MsgVoteResponse): _123.MsgVoteResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _123.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _123.MsgExec;
                fromPartial(object: Partial<_123.MsgExec>): _123.MsgExec;
                fromAmino(object: _123.MsgExecAmino): _123.MsgExec;
                toAmino(message: _123.MsgExec): _123.MsgExecAmino;
                fromAminoMsg(object: _123.MsgExecAminoMsg): _123.MsgExec;
                toAminoMsg(message: _123.MsgExec): _123.MsgExecAminoMsg;
                fromProtoMsg(message: _123.MsgExecProtoMsg): _123.MsgExec;
                toProto(message: _123.MsgExec): Uint8Array;
                toProtoMsg(message: _123.MsgExec): _123.MsgExecProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(_: _123.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _123.MsgExecResponse;
                fromPartial(_: Partial<_123.MsgExecResponse>): _123.MsgExecResponse;
                fromAmino(_: _123.MsgExecResponseAmino): _123.MsgExecResponse;
                toAmino(_: _123.MsgExecResponse): _123.MsgExecResponseAmino;
                fromAminoMsg(object: _123.MsgExecResponseAminoMsg): _123.MsgExecResponse;
                toAminoMsg(message: _123.MsgExecResponse): _123.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _123.MsgExecResponseProtoMsg): _123.MsgExecResponse;
                toProto(message: _123.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _123.MsgExecResponse): _123.MsgExecResponseProtoMsg;
            };
            MsgLeaveGroup: {
                typeUrl: string;
                encode(message: _123.MsgLeaveGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _123.MsgLeaveGroup;
                fromPartial(object: Partial<_123.MsgLeaveGroup>): _123.MsgLeaveGroup;
                fromAmino(object: _123.MsgLeaveGroupAmino): _123.MsgLeaveGroup;
                toAmino(message: _123.MsgLeaveGroup): _123.MsgLeaveGroupAmino;
                fromAminoMsg(object: _123.MsgLeaveGroupAminoMsg): _123.MsgLeaveGroup;
                toAminoMsg(message: _123.MsgLeaveGroup): _123.MsgLeaveGroupAminoMsg;
                fromProtoMsg(message: _123.MsgLeaveGroupProtoMsg): _123.MsgLeaveGroup;
                toProto(message: _123.MsgLeaveGroup): Uint8Array;
                toProtoMsg(message: _123.MsgLeaveGroup): _123.MsgLeaveGroupProtoMsg;
            };
            MsgLeaveGroupResponse: {
                typeUrl: string;
                encode(_: _123.MsgLeaveGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _123.MsgLeaveGroupResponse;
                fromPartial(_: Partial<_123.MsgLeaveGroupResponse>): _123.MsgLeaveGroupResponse;
                fromAmino(_: _123.MsgLeaveGroupResponseAmino): _123.MsgLeaveGroupResponse;
                toAmino(_: _123.MsgLeaveGroupResponse): _123.MsgLeaveGroupResponseAmino;
                fromAminoMsg(object: _123.MsgLeaveGroupResponseAminoMsg): _123.MsgLeaveGroupResponse;
                toAminoMsg(message: _123.MsgLeaveGroupResponse): _123.MsgLeaveGroupResponseAminoMsg;
                fromProtoMsg(message: _123.MsgLeaveGroupResponseProtoMsg): _123.MsgLeaveGroupResponse;
                toProto(message: _123.MsgLeaveGroupResponse): Uint8Array;
                toProtoMsg(message: _123.MsgLeaveGroupResponse): _123.MsgLeaveGroupResponseProtoMsg;
            };
            QueryGroupInfoRequest: {
                typeUrl: string;
                encode(message: _122.QueryGroupInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _122.QueryGroupInfoRequest;
                fromPartial(object: Partial<_122.QueryGroupInfoRequest>): _122.QueryGroupInfoRequest;
                fromAmino(object: _122.QueryGroupInfoRequestAmino): _122.QueryGroupInfoRequest;
                toAmino(message: _122.QueryGroupInfoRequest): _122.QueryGroupInfoRequestAmino;
                fromAminoMsg(object: _122.QueryGroupInfoRequestAminoMsg): _122.QueryGroupInfoRequest;
                toAminoMsg(message: _122.QueryGroupInfoRequest): _122.QueryGroupInfoRequestAminoMsg;
                fromProtoMsg(message: _122.QueryGroupInfoRequestProtoMsg): _122.QueryGroupInfoRequest;
                toProto(message: _122.QueryGroupInfoRequest): Uint8Array;
                toProtoMsg(message: _122.QueryGroupInfoRequest): _122.QueryGroupInfoRequestProtoMsg;
            };
            QueryGroupInfoResponse: {
                typeUrl: string;
                encode(message: _122.QueryGroupInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _122.QueryGroupInfoResponse;
                fromPartial(object: Partial<_122.QueryGroupInfoResponse>): _122.QueryGroupInfoResponse;
                fromAmino(object: _122.QueryGroupInfoResponseAmino): _122.QueryGroupInfoResponse;
                toAmino(message: _122.QueryGroupInfoResponse): _122.QueryGroupInfoResponseAmino;
                fromAminoMsg(object: _122.QueryGroupInfoResponseAminoMsg): _122.QueryGroupInfoResponse;
                toAminoMsg(message: _122.QueryGroupInfoResponse): _122.QueryGroupInfoResponseAminoMsg;
                fromProtoMsg(message: _122.QueryGroupInfoResponseProtoMsg): _122.QueryGroupInfoResponse;
                toProto(message: _122.QueryGroupInfoResponse): Uint8Array;
                toProtoMsg(message: _122.QueryGroupInfoResponse): _122.QueryGroupInfoResponseProtoMsg;
            };
            QueryGroupPolicyInfoRequest: {
                typeUrl: string;
                encode(message: _122.QueryGroupPolicyInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _122.QueryGroupPolicyInfoRequest;
                fromPartial(object: Partial<_122.QueryGroupPolicyInfoRequest>): _122.QueryGroupPolicyInfoRequest;
                fromAmino(object: _122.QueryGroupPolicyInfoRequestAmino): _122.QueryGroupPolicyInfoRequest;
                toAmino(message: _122.QueryGroupPolicyInfoRequest): _122.QueryGroupPolicyInfoRequestAmino;
                fromAminoMsg(object: _122.QueryGroupPolicyInfoRequestAminoMsg): _122.QueryGroupPolicyInfoRequest;
                toAminoMsg(message: _122.QueryGroupPolicyInfoRequest): _122.QueryGroupPolicyInfoRequestAminoMsg;
                fromProtoMsg(message: _122.QueryGroupPolicyInfoRequestProtoMsg): _122.QueryGroupPolicyInfoRequest;
                toProto(message: _122.QueryGroupPolicyInfoRequest): Uint8Array;
                toProtoMsg(message: _122.QueryGroupPolicyInfoRequest): _122.QueryGroupPolicyInfoRequestProtoMsg;
            };
            QueryGroupPolicyInfoResponse: {
                typeUrl: string;
                encode(message: _122.QueryGroupPolicyInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _122.QueryGroupPolicyInfoResponse;
                fromPartial(object: Partial<_122.QueryGroupPolicyInfoResponse>): _122.QueryGroupPolicyInfoResponse;
                fromAmino(object: _122.QueryGroupPolicyInfoResponseAmino): _122.QueryGroupPolicyInfoResponse;
                toAmino(message: _122.QueryGroupPolicyInfoResponse): _122.QueryGroupPolicyInfoResponseAmino;
                fromAminoMsg(object: _122.QueryGroupPolicyInfoResponseAminoMsg): _122.QueryGroupPolicyInfoResponse;
                toAminoMsg(message: _122.QueryGroupPolicyInfoResponse): _122.QueryGroupPolicyInfoResponseAminoMsg;
                fromProtoMsg(message: _122.QueryGroupPolicyInfoResponseProtoMsg): _122.QueryGroupPolicyInfoResponse;
                toProto(message: _122.QueryGroupPolicyInfoResponse): Uint8Array;
                toProtoMsg(message: _122.QueryGroupPolicyInfoResponse): _122.QueryGroupPolicyInfoResponseProtoMsg;
            };
            QueryGroupMembersRequest: {
                typeUrl: string;
                encode(message: _122.QueryGroupMembersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _122.QueryGroupMembersRequest;
                fromPartial(object: Partial<_122.QueryGroupMembersRequest>): _122.QueryGroupMembersRequest;
                fromAmino(object: _122.QueryGroupMembersRequestAmino): _122.QueryGroupMembersRequest;
                toAmino(message: _122.QueryGroupMembersRequest): _122.QueryGroupMembersRequestAmino;
                fromAminoMsg(object: _122.QueryGroupMembersRequestAminoMsg): _122.QueryGroupMembersRequest;
                toAminoMsg(message: _122.QueryGroupMembersRequest): _122.QueryGroupMembersRequestAminoMsg;
                fromProtoMsg(message: _122.QueryGroupMembersRequestProtoMsg): _122.QueryGroupMembersRequest;
                toProto(message: _122.QueryGroupMembersRequest): Uint8Array;
                toProtoMsg(message: _122.QueryGroupMembersRequest): _122.QueryGroupMembersRequestProtoMsg;
            };
            QueryGroupMembersResponse: {
                typeUrl: string;
                encode(message: _122.QueryGroupMembersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _122.QueryGroupMembersResponse;
                fromPartial(object: Partial<_122.QueryGroupMembersResponse>): _122.QueryGroupMembersResponse;
                fromAmino(object: _122.QueryGroupMembersResponseAmino): _122.QueryGroupMembersResponse;
                toAmino(message: _122.QueryGroupMembersResponse): _122.QueryGroupMembersResponseAmino;
                fromAminoMsg(object: _122.QueryGroupMembersResponseAminoMsg): _122.QueryGroupMembersResponse;
                toAminoMsg(message: _122.QueryGroupMembersResponse): _122.QueryGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _122.QueryGroupMembersResponseProtoMsg): _122.QueryGroupMembersResponse;
                toProto(message: _122.QueryGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _122.QueryGroupMembersResponse): _122.QueryGroupMembersResponseProtoMsg;
            };
            QueryGroupsByAdminRequest: {
                typeUrl: string;
                encode(message: _122.QueryGroupsByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _122.QueryGroupsByAdminRequest;
                fromPartial(object: Partial<_122.QueryGroupsByAdminRequest>): _122.QueryGroupsByAdminRequest;
                fromAmino(object: _122.QueryGroupsByAdminRequestAmino): _122.QueryGroupsByAdminRequest;
                toAmino(message: _122.QueryGroupsByAdminRequest): _122.QueryGroupsByAdminRequestAmino;
                fromAminoMsg(object: _122.QueryGroupsByAdminRequestAminoMsg): _122.QueryGroupsByAdminRequest;
                toAminoMsg(message: _122.QueryGroupsByAdminRequest): _122.QueryGroupsByAdminRequestAminoMsg;
                fromProtoMsg(message: _122.QueryGroupsByAdminRequestProtoMsg): _122.QueryGroupsByAdminRequest;
                toProto(message: _122.QueryGroupsByAdminRequest): Uint8Array;
                toProtoMsg(message: _122.QueryGroupsByAdminRequest): _122.QueryGroupsByAdminRequestProtoMsg;
            };
            QueryGroupsByAdminResponse: {
                typeUrl: string;
                encode(message: _122.QueryGroupsByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _122.QueryGroupsByAdminResponse;
                fromPartial(object: Partial<_122.QueryGroupsByAdminResponse>): _122.QueryGroupsByAdminResponse;
                fromAmino(object: _122.QueryGroupsByAdminResponseAmino): _122.QueryGroupsByAdminResponse;
                toAmino(message: _122.QueryGroupsByAdminResponse): _122.QueryGroupsByAdminResponseAmino;
                fromAminoMsg(object: _122.QueryGroupsByAdminResponseAminoMsg): _122.QueryGroupsByAdminResponse;
                toAminoMsg(message: _122.QueryGroupsByAdminResponse): _122.QueryGroupsByAdminResponseAminoMsg;
                fromProtoMsg(message: _122.QueryGroupsByAdminResponseProtoMsg): _122.QueryGroupsByAdminResponse;
                toProto(message: _122.QueryGroupsByAdminResponse): Uint8Array;
                toProtoMsg(message: _122.QueryGroupsByAdminResponse): _122.QueryGroupsByAdminResponseProtoMsg;
            };
            QueryGroupPoliciesByGroupRequest: {
                typeUrl: string;
                encode(message: _122.QueryGroupPoliciesByGroupRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _122.QueryGroupPoliciesByGroupRequest;
                fromPartial(object: Partial<_122.QueryGroupPoliciesByGroupRequest>): _122.QueryGroupPoliciesByGroupRequest;
                fromAmino(object: _122.QueryGroupPoliciesByGroupRequestAmino): _122.QueryGroupPoliciesByGroupRequest;
                toAmino(message: _122.QueryGroupPoliciesByGroupRequest): _122.QueryGroupPoliciesByGroupRequestAmino;
                fromAminoMsg(object: _122.QueryGroupPoliciesByGroupRequestAminoMsg): _122.QueryGroupPoliciesByGroupRequest;
                toAminoMsg(message: _122.QueryGroupPoliciesByGroupRequest): _122.QueryGroupPoliciesByGroupRequestAminoMsg;
                fromProtoMsg(message: _122.QueryGroupPoliciesByGroupRequestProtoMsg): _122.QueryGroupPoliciesByGroupRequest;
                toProto(message: _122.QueryGroupPoliciesByGroupRequest): Uint8Array;
                toProtoMsg(message: _122.QueryGroupPoliciesByGroupRequest): _122.QueryGroupPoliciesByGroupRequestProtoMsg;
            };
            QueryGroupPoliciesByGroupResponse: {
                typeUrl: string;
                encode(message: _122.QueryGroupPoliciesByGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _122.QueryGroupPoliciesByGroupResponse;
                fromPartial(object: Partial<_122.QueryGroupPoliciesByGroupResponse>): _122.QueryGroupPoliciesByGroupResponse;
                fromAmino(object: _122.QueryGroupPoliciesByGroupResponseAmino): _122.QueryGroupPoliciesByGroupResponse;
                toAmino(message: _122.QueryGroupPoliciesByGroupResponse): _122.QueryGroupPoliciesByGroupResponseAmino;
                fromAminoMsg(object: _122.QueryGroupPoliciesByGroupResponseAminoMsg): _122.QueryGroupPoliciesByGroupResponse;
                toAminoMsg(message: _122.QueryGroupPoliciesByGroupResponse): _122.QueryGroupPoliciesByGroupResponseAminoMsg;
                fromProtoMsg(message: _122.QueryGroupPoliciesByGroupResponseProtoMsg): _122.QueryGroupPoliciesByGroupResponse;
                toProto(message: _122.QueryGroupPoliciesByGroupResponse): Uint8Array;
                toProtoMsg(message: _122.QueryGroupPoliciesByGroupResponse): _122.QueryGroupPoliciesByGroupResponseProtoMsg;
            };
            QueryGroupPoliciesByAdminRequest: {
                typeUrl: string;
                encode(message: _122.QueryGroupPoliciesByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _122.QueryGroupPoliciesByAdminRequest;
                fromPartial(object: Partial<_122.QueryGroupPoliciesByAdminRequest>): _122.QueryGroupPoliciesByAdminRequest;
                fromAmino(object: _122.QueryGroupPoliciesByAdminRequestAmino): _122.QueryGroupPoliciesByAdminRequest;
                toAmino(message: _122.QueryGroupPoliciesByAdminRequest): _122.QueryGroupPoliciesByAdminRequestAmino;
                fromAminoMsg(object: _122.QueryGroupPoliciesByAdminRequestAminoMsg): _122.QueryGroupPoliciesByAdminRequest;
                toAminoMsg(message: _122.QueryGroupPoliciesByAdminRequest): _122.QueryGroupPoliciesByAdminRequestAminoMsg;
                fromProtoMsg(message: _122.QueryGroupPoliciesByAdminRequestProtoMsg): _122.QueryGroupPoliciesByAdminRequest;
                toProto(message: _122.QueryGroupPoliciesByAdminRequest): Uint8Array;
                toProtoMsg(message: _122.QueryGroupPoliciesByAdminRequest): _122.QueryGroupPoliciesByAdminRequestProtoMsg;
            };
            QueryGroupPoliciesByAdminResponse: {
                typeUrl: string;
                encode(message: _122.QueryGroupPoliciesByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _122.QueryGroupPoliciesByAdminResponse;
                fromPartial(object: Partial<_122.QueryGroupPoliciesByAdminResponse>): _122.QueryGroupPoliciesByAdminResponse;
                fromAmino(object: _122.QueryGroupPoliciesByAdminResponseAmino): _122.QueryGroupPoliciesByAdminResponse;
                toAmino(message: _122.QueryGroupPoliciesByAdminResponse): _122.QueryGroupPoliciesByAdminResponseAmino;
                fromAminoMsg(object: _122.QueryGroupPoliciesByAdminResponseAminoMsg): _122.QueryGroupPoliciesByAdminResponse;
                toAminoMsg(message: _122.QueryGroupPoliciesByAdminResponse): _122.QueryGroupPoliciesByAdminResponseAminoMsg;
                fromProtoMsg(message: _122.QueryGroupPoliciesByAdminResponseProtoMsg): _122.QueryGroupPoliciesByAdminResponse;
                toProto(message: _122.QueryGroupPoliciesByAdminResponse): Uint8Array;
                toProtoMsg(message: _122.QueryGroupPoliciesByAdminResponse): _122.QueryGroupPoliciesByAdminResponseProtoMsg;
            };
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _122.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _122.QueryProposalRequest;
                fromPartial(object: Partial<_122.QueryProposalRequest>): _122.QueryProposalRequest;
                fromAmino(object: _122.QueryProposalRequestAmino): _122.QueryProposalRequest;
                toAmino(message: _122.QueryProposalRequest): _122.QueryProposalRequestAmino;
                fromAminoMsg(object: _122.QueryProposalRequestAminoMsg): _122.QueryProposalRequest;
                toAminoMsg(message: _122.QueryProposalRequest): _122.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _122.QueryProposalRequestProtoMsg): _122.QueryProposalRequest;
                toProto(message: _122.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _122.QueryProposalRequest): _122.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _122.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _122.QueryProposalResponse;
                fromPartial(object: Partial<_122.QueryProposalResponse>): _122.QueryProposalResponse;
                fromAmino(object: _122.QueryProposalResponseAmino): _122.QueryProposalResponse;
                toAmino(message: _122.QueryProposalResponse): _122.QueryProposalResponseAmino;
                fromAminoMsg(object: _122.QueryProposalResponseAminoMsg): _122.QueryProposalResponse;
                toAminoMsg(message: _122.QueryProposalResponse): _122.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _122.QueryProposalResponseProtoMsg): _122.QueryProposalResponse;
                toProto(message: _122.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _122.QueryProposalResponse): _122.QueryProposalResponseProtoMsg;
            };
            QueryProposalsByGroupPolicyRequest: {
                typeUrl: string;
                encode(message: _122.QueryProposalsByGroupPolicyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _122.QueryProposalsByGroupPolicyRequest;
                fromPartial(object: Partial<_122.QueryProposalsByGroupPolicyRequest>): _122.QueryProposalsByGroupPolicyRequest;
                fromAmino(object: _122.QueryProposalsByGroupPolicyRequestAmino): _122.QueryProposalsByGroupPolicyRequest;
                toAmino(message: _122.QueryProposalsByGroupPolicyRequest): _122.QueryProposalsByGroupPolicyRequestAmino;
                fromAminoMsg(object: _122.QueryProposalsByGroupPolicyRequestAminoMsg): _122.QueryProposalsByGroupPolicyRequest;
                toAminoMsg(message: _122.QueryProposalsByGroupPolicyRequest): _122.QueryProposalsByGroupPolicyRequestAminoMsg;
                fromProtoMsg(message: _122.QueryProposalsByGroupPolicyRequestProtoMsg): _122.QueryProposalsByGroupPolicyRequest;
                toProto(message: _122.QueryProposalsByGroupPolicyRequest): Uint8Array;
                toProtoMsg(message: _122.QueryProposalsByGroupPolicyRequest): _122.QueryProposalsByGroupPolicyRequestProtoMsg;
            };
            QueryProposalsByGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _122.QueryProposalsByGroupPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _122.QueryProposalsByGroupPolicyResponse;
                fromPartial(object: Partial<_122.QueryProposalsByGroupPolicyResponse>): _122.QueryProposalsByGroupPolicyResponse;
                fromAmino(object: _122.QueryProposalsByGroupPolicyResponseAmino): _122.QueryProposalsByGroupPolicyResponse;
                toAmino(message: _122.QueryProposalsByGroupPolicyResponse): _122.QueryProposalsByGroupPolicyResponseAmino;
                fromAminoMsg(object: _122.QueryProposalsByGroupPolicyResponseAminoMsg): _122.QueryProposalsByGroupPolicyResponse;
                toAminoMsg(message: _122.QueryProposalsByGroupPolicyResponse): _122.QueryProposalsByGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _122.QueryProposalsByGroupPolicyResponseProtoMsg): _122.QueryProposalsByGroupPolicyResponse;
                toProto(message: _122.QueryProposalsByGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _122.QueryProposalsByGroupPolicyResponse): _122.QueryProposalsByGroupPolicyResponseProtoMsg;
            };
            QueryVoteByProposalVoterRequest: {
                typeUrl: string;
                encode(message: _122.QueryVoteByProposalVoterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _122.QueryVoteByProposalVoterRequest;
                fromPartial(object: Partial<_122.QueryVoteByProposalVoterRequest>): _122.QueryVoteByProposalVoterRequest;
                fromAmino(object: _122.QueryVoteByProposalVoterRequestAmino): _122.QueryVoteByProposalVoterRequest;
                toAmino(message: _122.QueryVoteByProposalVoterRequest): _122.QueryVoteByProposalVoterRequestAmino;
                fromAminoMsg(object: _122.QueryVoteByProposalVoterRequestAminoMsg): _122.QueryVoteByProposalVoterRequest;
                toAminoMsg(message: _122.QueryVoteByProposalVoterRequest): _122.QueryVoteByProposalVoterRequestAminoMsg;
                fromProtoMsg(message: _122.QueryVoteByProposalVoterRequestProtoMsg): _122.QueryVoteByProposalVoterRequest;
                toProto(message: _122.QueryVoteByProposalVoterRequest): Uint8Array;
                toProtoMsg(message: _122.QueryVoteByProposalVoterRequest): _122.QueryVoteByProposalVoterRequestProtoMsg;
            };
            QueryVoteByProposalVoterResponse: {
                typeUrl: string;
                encode(message: _122.QueryVoteByProposalVoterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _122.QueryVoteByProposalVoterResponse;
                fromPartial(object: Partial<_122.QueryVoteByProposalVoterResponse>): _122.QueryVoteByProposalVoterResponse;
                fromAmino(object: _122.QueryVoteByProposalVoterResponseAmino): _122.QueryVoteByProposalVoterResponse;
                toAmino(message: _122.QueryVoteByProposalVoterResponse): _122.QueryVoteByProposalVoterResponseAmino;
                fromAminoMsg(object: _122.QueryVoteByProposalVoterResponseAminoMsg): _122.QueryVoteByProposalVoterResponse;
                toAminoMsg(message: _122.QueryVoteByProposalVoterResponse): _122.QueryVoteByProposalVoterResponseAminoMsg;
                fromProtoMsg(message: _122.QueryVoteByProposalVoterResponseProtoMsg): _122.QueryVoteByProposalVoterResponse;
                toProto(message: _122.QueryVoteByProposalVoterResponse): Uint8Array;
                toProtoMsg(message: _122.QueryVoteByProposalVoterResponse): _122.QueryVoteByProposalVoterResponseProtoMsg;
            };
            QueryVotesByProposalRequest: {
                typeUrl: string;
                encode(message: _122.QueryVotesByProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _122.QueryVotesByProposalRequest;
                fromPartial(object: Partial<_122.QueryVotesByProposalRequest>): _122.QueryVotesByProposalRequest;
                fromAmino(object: _122.QueryVotesByProposalRequestAmino): _122.QueryVotesByProposalRequest;
                toAmino(message: _122.QueryVotesByProposalRequest): _122.QueryVotesByProposalRequestAmino;
                fromAminoMsg(object: _122.QueryVotesByProposalRequestAminoMsg): _122.QueryVotesByProposalRequest;
                toAminoMsg(message: _122.QueryVotesByProposalRequest): _122.QueryVotesByProposalRequestAminoMsg;
                fromProtoMsg(message: _122.QueryVotesByProposalRequestProtoMsg): _122.QueryVotesByProposalRequest;
                toProto(message: _122.QueryVotesByProposalRequest): Uint8Array;
                toProtoMsg(message: _122.QueryVotesByProposalRequest): _122.QueryVotesByProposalRequestProtoMsg;
            };
            QueryVotesByProposalResponse: {
                typeUrl: string;
                encode(message: _122.QueryVotesByProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _122.QueryVotesByProposalResponse;
                fromPartial(object: Partial<_122.QueryVotesByProposalResponse>): _122.QueryVotesByProposalResponse;
                fromAmino(object: _122.QueryVotesByProposalResponseAmino): _122.QueryVotesByProposalResponse;
                toAmino(message: _122.QueryVotesByProposalResponse): _122.QueryVotesByProposalResponseAmino;
                fromAminoMsg(object: _122.QueryVotesByProposalResponseAminoMsg): _122.QueryVotesByProposalResponse;
                toAminoMsg(message: _122.QueryVotesByProposalResponse): _122.QueryVotesByProposalResponseAminoMsg;
                fromProtoMsg(message: _122.QueryVotesByProposalResponseProtoMsg): _122.QueryVotesByProposalResponse;
                toProto(message: _122.QueryVotesByProposalResponse): Uint8Array;
                toProtoMsg(message: _122.QueryVotesByProposalResponse): _122.QueryVotesByProposalResponseProtoMsg;
            };
            QueryVotesByVoterRequest: {
                typeUrl: string;
                encode(message: _122.QueryVotesByVoterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _122.QueryVotesByVoterRequest;
                fromPartial(object: Partial<_122.QueryVotesByVoterRequest>): _122.QueryVotesByVoterRequest;
                fromAmino(object: _122.QueryVotesByVoterRequestAmino): _122.QueryVotesByVoterRequest;
                toAmino(message: _122.QueryVotesByVoterRequest): _122.QueryVotesByVoterRequestAmino;
                fromAminoMsg(object: _122.QueryVotesByVoterRequestAminoMsg): _122.QueryVotesByVoterRequest;
                toAminoMsg(message: _122.QueryVotesByVoterRequest): _122.QueryVotesByVoterRequestAminoMsg;
                fromProtoMsg(message: _122.QueryVotesByVoterRequestProtoMsg): _122.QueryVotesByVoterRequest;
                toProto(message: _122.QueryVotesByVoterRequest): Uint8Array;
                toProtoMsg(message: _122.QueryVotesByVoterRequest): _122.QueryVotesByVoterRequestProtoMsg;
            };
            QueryVotesByVoterResponse: {
                typeUrl: string;
                encode(message: _122.QueryVotesByVoterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _122.QueryVotesByVoterResponse;
                fromPartial(object: Partial<_122.QueryVotesByVoterResponse>): _122.QueryVotesByVoterResponse;
                fromAmino(object: _122.QueryVotesByVoterResponseAmino): _122.QueryVotesByVoterResponse;
                toAmino(message: _122.QueryVotesByVoterResponse): _122.QueryVotesByVoterResponseAmino;
                fromAminoMsg(object: _122.QueryVotesByVoterResponseAminoMsg): _122.QueryVotesByVoterResponse;
                toAminoMsg(message: _122.QueryVotesByVoterResponse): _122.QueryVotesByVoterResponseAminoMsg;
                fromProtoMsg(message: _122.QueryVotesByVoterResponseProtoMsg): _122.QueryVotesByVoterResponse;
                toProto(message: _122.QueryVotesByVoterResponse): Uint8Array;
                toProtoMsg(message: _122.QueryVotesByVoterResponse): _122.QueryVotesByVoterResponseProtoMsg;
            };
            QueryGroupsByMemberRequest: {
                typeUrl: string;
                encode(message: _122.QueryGroupsByMemberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _122.QueryGroupsByMemberRequest;
                fromPartial(object: Partial<_122.QueryGroupsByMemberRequest>): _122.QueryGroupsByMemberRequest;
                fromAmino(object: _122.QueryGroupsByMemberRequestAmino): _122.QueryGroupsByMemberRequest;
                toAmino(message: _122.QueryGroupsByMemberRequest): _122.QueryGroupsByMemberRequestAmino;
                fromAminoMsg(object: _122.QueryGroupsByMemberRequestAminoMsg): _122.QueryGroupsByMemberRequest;
                toAminoMsg(message: _122.QueryGroupsByMemberRequest): _122.QueryGroupsByMemberRequestAminoMsg;
                fromProtoMsg(message: _122.QueryGroupsByMemberRequestProtoMsg): _122.QueryGroupsByMemberRequest;
                toProto(message: _122.QueryGroupsByMemberRequest): Uint8Array;
                toProtoMsg(message: _122.QueryGroupsByMemberRequest): _122.QueryGroupsByMemberRequestProtoMsg;
            };
            QueryGroupsByMemberResponse: {
                typeUrl: string;
                encode(message: _122.QueryGroupsByMemberResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _122.QueryGroupsByMemberResponse;
                fromPartial(object: Partial<_122.QueryGroupsByMemberResponse>): _122.QueryGroupsByMemberResponse;
                fromAmino(object: _122.QueryGroupsByMemberResponseAmino): _122.QueryGroupsByMemberResponse;
                toAmino(message: _122.QueryGroupsByMemberResponse): _122.QueryGroupsByMemberResponseAmino;
                fromAminoMsg(object: _122.QueryGroupsByMemberResponseAminoMsg): _122.QueryGroupsByMemberResponse;
                toAminoMsg(message: _122.QueryGroupsByMemberResponse): _122.QueryGroupsByMemberResponseAminoMsg;
                fromProtoMsg(message: _122.QueryGroupsByMemberResponseProtoMsg): _122.QueryGroupsByMemberResponse;
                toProto(message: _122.QueryGroupsByMemberResponse): Uint8Array;
                toProtoMsg(message: _122.QueryGroupsByMemberResponse): _122.QueryGroupsByMemberResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _122.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _122.QueryTallyResultRequest;
                fromPartial(object: Partial<_122.QueryTallyResultRequest>): _122.QueryTallyResultRequest;
                fromAmino(object: _122.QueryTallyResultRequestAmino): _122.QueryTallyResultRequest;
                toAmino(message: _122.QueryTallyResultRequest): _122.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _122.QueryTallyResultRequestAminoMsg): _122.QueryTallyResultRequest;
                toAminoMsg(message: _122.QueryTallyResultRequest): _122.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _122.QueryTallyResultRequestProtoMsg): _122.QueryTallyResultRequest;
                toProto(message: _122.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _122.QueryTallyResultRequest): _122.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _122.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _122.QueryTallyResultResponse;
                fromPartial(object: Partial<_122.QueryTallyResultResponse>): _122.QueryTallyResultResponse;
                fromAmino(object: _122.QueryTallyResultResponseAmino): _122.QueryTallyResultResponse;
                toAmino(message: _122.QueryTallyResultResponse): _122.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _122.QueryTallyResultResponseAminoMsg): _122.QueryTallyResultResponse;
                toAminoMsg(message: _122.QueryTallyResultResponse): _122.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _122.QueryTallyResultResponseProtoMsg): _122.QueryTallyResultResponse;
                toProto(message: _122.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _122.QueryTallyResultResponse): _122.QueryTallyResultResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _121.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _121.GenesisState;
                fromPartial(object: Partial<_121.GenesisState>): _121.GenesisState;
                fromAmino(object: _121.GenesisStateAmino): _121.GenesisState;
                toAmino(message: _121.GenesisState): _121.GenesisStateAmino;
                fromAminoMsg(object: _121.GenesisStateAminoMsg): _121.GenesisState;
                toAminoMsg(message: _121.GenesisState): _121.GenesisStateAminoMsg;
                fromProtoMsg(message: _121.GenesisStateProtoMsg): _121.GenesisState;
                toProto(message: _121.GenesisState): Uint8Array;
                toProtoMsg(message: _121.GenesisState): _121.GenesisStateProtoMsg;
            };
            EventCreateGroup: {
                typeUrl: string;
                encode(message: _120.EventCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _120.EventCreateGroup;
                fromPartial(object: Partial<_120.EventCreateGroup>): _120.EventCreateGroup;
                fromAmino(object: _120.EventCreateGroupAmino): _120.EventCreateGroup;
                toAmino(message: _120.EventCreateGroup): _120.EventCreateGroupAmino;
                fromAminoMsg(object: _120.EventCreateGroupAminoMsg): _120.EventCreateGroup;
                toAminoMsg(message: _120.EventCreateGroup): _120.EventCreateGroupAminoMsg;
                fromProtoMsg(message: _120.EventCreateGroupProtoMsg): _120.EventCreateGroup;
                toProto(message: _120.EventCreateGroup): Uint8Array;
                toProtoMsg(message: _120.EventCreateGroup): _120.EventCreateGroupProtoMsg;
            };
            EventUpdateGroup: {
                typeUrl: string;
                encode(message: _120.EventUpdateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _120.EventUpdateGroup;
                fromPartial(object: Partial<_120.EventUpdateGroup>): _120.EventUpdateGroup;
                fromAmino(object: _120.EventUpdateGroupAmino): _120.EventUpdateGroup;
                toAmino(message: _120.EventUpdateGroup): _120.EventUpdateGroupAmino;
                fromAminoMsg(object: _120.EventUpdateGroupAminoMsg): _120.EventUpdateGroup;
                toAminoMsg(message: _120.EventUpdateGroup): _120.EventUpdateGroupAminoMsg;
                fromProtoMsg(message: _120.EventUpdateGroupProtoMsg): _120.EventUpdateGroup;
                toProto(message: _120.EventUpdateGroup): Uint8Array;
                toProtoMsg(message: _120.EventUpdateGroup): _120.EventUpdateGroupProtoMsg;
            };
            EventCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _120.EventCreateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _120.EventCreateGroupPolicy;
                fromPartial(object: Partial<_120.EventCreateGroupPolicy>): _120.EventCreateGroupPolicy;
                fromAmino(object: _120.EventCreateGroupPolicyAmino): _120.EventCreateGroupPolicy;
                toAmino(message: _120.EventCreateGroupPolicy): _120.EventCreateGroupPolicyAmino;
                fromAminoMsg(object: _120.EventCreateGroupPolicyAminoMsg): _120.EventCreateGroupPolicy;
                toAminoMsg(message: _120.EventCreateGroupPolicy): _120.EventCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _120.EventCreateGroupPolicyProtoMsg): _120.EventCreateGroupPolicy;
                toProto(message: _120.EventCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _120.EventCreateGroupPolicy): _120.EventCreateGroupPolicyProtoMsg;
            };
            EventUpdateGroupPolicy: {
                typeUrl: string;
                encode(message: _120.EventUpdateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _120.EventUpdateGroupPolicy;
                fromPartial(object: Partial<_120.EventUpdateGroupPolicy>): _120.EventUpdateGroupPolicy;
                fromAmino(object: _120.EventUpdateGroupPolicyAmino): _120.EventUpdateGroupPolicy;
                toAmino(message: _120.EventUpdateGroupPolicy): _120.EventUpdateGroupPolicyAmino;
                fromAminoMsg(object: _120.EventUpdateGroupPolicyAminoMsg): _120.EventUpdateGroupPolicy;
                toAminoMsg(message: _120.EventUpdateGroupPolicy): _120.EventUpdateGroupPolicyAminoMsg;
                fromProtoMsg(message: _120.EventUpdateGroupPolicyProtoMsg): _120.EventUpdateGroupPolicy;
                toProto(message: _120.EventUpdateGroupPolicy): Uint8Array;
                toProtoMsg(message: _120.EventUpdateGroupPolicy): _120.EventUpdateGroupPolicyProtoMsg;
            };
            EventSubmitProposal: {
                typeUrl: string;
                encode(message: _120.EventSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _120.EventSubmitProposal;
                fromPartial(object: Partial<_120.EventSubmitProposal>): _120.EventSubmitProposal;
                fromAmino(object: _120.EventSubmitProposalAmino): _120.EventSubmitProposal;
                toAmino(message: _120.EventSubmitProposal): _120.EventSubmitProposalAmino;
                fromAminoMsg(object: _120.EventSubmitProposalAminoMsg): _120.EventSubmitProposal;
                toAminoMsg(message: _120.EventSubmitProposal): _120.EventSubmitProposalAminoMsg;
                fromProtoMsg(message: _120.EventSubmitProposalProtoMsg): _120.EventSubmitProposal;
                toProto(message: _120.EventSubmitProposal): Uint8Array;
                toProtoMsg(message: _120.EventSubmitProposal): _120.EventSubmitProposalProtoMsg;
            };
            EventWithdrawProposal: {
                typeUrl: string;
                encode(message: _120.EventWithdrawProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _120.EventWithdrawProposal;
                fromPartial(object: Partial<_120.EventWithdrawProposal>): _120.EventWithdrawProposal;
                fromAmino(object: _120.EventWithdrawProposalAmino): _120.EventWithdrawProposal;
                toAmino(message: _120.EventWithdrawProposal): _120.EventWithdrawProposalAmino;
                fromAminoMsg(object: _120.EventWithdrawProposalAminoMsg): _120.EventWithdrawProposal;
                toAminoMsg(message: _120.EventWithdrawProposal): _120.EventWithdrawProposalAminoMsg;
                fromProtoMsg(message: _120.EventWithdrawProposalProtoMsg): _120.EventWithdrawProposal;
                toProto(message: _120.EventWithdrawProposal): Uint8Array;
                toProtoMsg(message: _120.EventWithdrawProposal): _120.EventWithdrawProposalProtoMsg;
            };
            EventVote: {
                typeUrl: string;
                encode(message: _120.EventVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _120.EventVote;
                fromPartial(object: Partial<_120.EventVote>): _120.EventVote;
                fromAmino(object: _120.EventVoteAmino): _120.EventVote;
                toAmino(message: _120.EventVote): _120.EventVoteAmino;
                fromAminoMsg(object: _120.EventVoteAminoMsg): _120.EventVote;
                toAminoMsg(message: _120.EventVote): _120.EventVoteAminoMsg;
                fromProtoMsg(message: _120.EventVoteProtoMsg): _120.EventVote;
                toProto(message: _120.EventVote): Uint8Array;
                toProtoMsg(message: _120.EventVote): _120.EventVoteProtoMsg;
            };
            EventExec: {
                typeUrl: string;
                encode(message: _120.EventExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _120.EventExec;
                fromPartial(object: Partial<_120.EventExec>): _120.EventExec;
                fromAmino(object: _120.EventExecAmino): _120.EventExec;
                toAmino(message: _120.EventExec): _120.EventExecAmino;
                fromAminoMsg(object: _120.EventExecAminoMsg): _120.EventExec;
                toAminoMsg(message: _120.EventExec): _120.EventExecAminoMsg;
                fromProtoMsg(message: _120.EventExecProtoMsg): _120.EventExec;
                toProto(message: _120.EventExec): Uint8Array;
                toProtoMsg(message: _120.EventExec): _120.EventExecProtoMsg;
            };
            EventLeaveGroup: {
                typeUrl: string;
                encode(message: _120.EventLeaveGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _120.EventLeaveGroup;
                fromPartial(object: Partial<_120.EventLeaveGroup>): _120.EventLeaveGroup;
                fromAmino(object: _120.EventLeaveGroupAmino): _120.EventLeaveGroup;
                toAmino(message: _120.EventLeaveGroup): _120.EventLeaveGroupAmino;
                fromAminoMsg(object: _120.EventLeaveGroupAminoMsg): _120.EventLeaveGroup;
                toAminoMsg(message: _120.EventLeaveGroup): _120.EventLeaveGroupAminoMsg;
                fromProtoMsg(message: _120.EventLeaveGroupProtoMsg): _120.EventLeaveGroup;
                toProto(message: _120.EventLeaveGroup): Uint8Array;
                toProtoMsg(message: _120.EventLeaveGroup): _120.EventLeaveGroupProtoMsg;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _437.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _127.QueryParamsRequest): Promise<_127.QueryParamsResponse>;
                inflation(request?: _127.QueryInflationRequest): Promise<_127.QueryInflationResponse>;
                annualProvisions(request?: _127.QueryAnnualProvisionsRequest): Promise<_127.QueryAnnualProvisionsResponse>;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _127.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _127.QueryParamsRequest;
                fromPartial(_: Partial<_127.QueryParamsRequest>): _127.QueryParamsRequest;
                fromAmino(_: _127.QueryParamsRequestAmino): _127.QueryParamsRequest;
                toAmino(_: _127.QueryParamsRequest): _127.QueryParamsRequestAmino;
                fromAminoMsg(object: _127.QueryParamsRequestAminoMsg): _127.QueryParamsRequest;
                toAminoMsg(message: _127.QueryParamsRequest): _127.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _127.QueryParamsRequestProtoMsg): _127.QueryParamsRequest;
                toProto(message: _127.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _127.QueryParamsRequest): _127.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _127.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _127.QueryParamsResponse;
                fromPartial(object: Partial<_127.QueryParamsResponse>): _127.QueryParamsResponse;
                fromAmino(object: _127.QueryParamsResponseAmino): _127.QueryParamsResponse;
                toAmino(message: _127.QueryParamsResponse): _127.QueryParamsResponseAmino;
                fromAminoMsg(object: _127.QueryParamsResponseAminoMsg): _127.QueryParamsResponse;
                toAminoMsg(message: _127.QueryParamsResponse): _127.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _127.QueryParamsResponseProtoMsg): _127.QueryParamsResponse;
                toProto(message: _127.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _127.QueryParamsResponse): _127.QueryParamsResponseProtoMsg;
            };
            QueryInflationRequest: {
                typeUrl: string;
                encode(_: _127.QueryInflationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _127.QueryInflationRequest;
                fromPartial(_: Partial<_127.QueryInflationRequest>): _127.QueryInflationRequest;
                fromAmino(_: _127.QueryInflationRequestAmino): _127.QueryInflationRequest;
                toAmino(_: _127.QueryInflationRequest): _127.QueryInflationRequestAmino;
                fromAminoMsg(object: _127.QueryInflationRequestAminoMsg): _127.QueryInflationRequest;
                toAminoMsg(message: _127.QueryInflationRequest): _127.QueryInflationRequestAminoMsg;
                fromProtoMsg(message: _127.QueryInflationRequestProtoMsg): _127.QueryInflationRequest;
                toProto(message: _127.QueryInflationRequest): Uint8Array;
                toProtoMsg(message: _127.QueryInflationRequest): _127.QueryInflationRequestProtoMsg;
            };
            QueryInflationResponse: {
                typeUrl: string;
                encode(message: _127.QueryInflationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _127.QueryInflationResponse;
                fromPartial(object: Partial<_127.QueryInflationResponse>): _127.QueryInflationResponse;
                fromAmino(object: _127.QueryInflationResponseAmino): _127.QueryInflationResponse;
                toAmino(message: _127.QueryInflationResponse): _127.QueryInflationResponseAmino;
                fromAminoMsg(object: _127.QueryInflationResponseAminoMsg): _127.QueryInflationResponse;
                toAminoMsg(message: _127.QueryInflationResponse): _127.QueryInflationResponseAminoMsg;
                fromProtoMsg(message: _127.QueryInflationResponseProtoMsg): _127.QueryInflationResponse;
                toProto(message: _127.QueryInflationResponse): Uint8Array;
                toProtoMsg(message: _127.QueryInflationResponse): _127.QueryInflationResponseProtoMsg;
            };
            QueryAnnualProvisionsRequest: {
                typeUrl: string;
                encode(_: _127.QueryAnnualProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _127.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_127.QueryAnnualProvisionsRequest>): _127.QueryAnnualProvisionsRequest;
                fromAmino(_: _127.QueryAnnualProvisionsRequestAmino): _127.QueryAnnualProvisionsRequest;
                toAmino(_: _127.QueryAnnualProvisionsRequest): _127.QueryAnnualProvisionsRequestAmino;
                fromAminoMsg(object: _127.QueryAnnualProvisionsRequestAminoMsg): _127.QueryAnnualProvisionsRequest;
                toAminoMsg(message: _127.QueryAnnualProvisionsRequest): _127.QueryAnnualProvisionsRequestAminoMsg;
                fromProtoMsg(message: _127.QueryAnnualProvisionsRequestProtoMsg): _127.QueryAnnualProvisionsRequest;
                toProto(message: _127.QueryAnnualProvisionsRequest): Uint8Array;
                toProtoMsg(message: _127.QueryAnnualProvisionsRequest): _127.QueryAnnualProvisionsRequestProtoMsg;
            };
            QueryAnnualProvisionsResponse: {
                typeUrl: string;
                encode(message: _127.QueryAnnualProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _127.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_127.QueryAnnualProvisionsResponse>): _127.QueryAnnualProvisionsResponse;
                fromAmino(object: _127.QueryAnnualProvisionsResponseAmino): _127.QueryAnnualProvisionsResponse;
                toAmino(message: _127.QueryAnnualProvisionsResponse): _127.QueryAnnualProvisionsResponseAmino;
                fromAminoMsg(object: _127.QueryAnnualProvisionsResponseAminoMsg): _127.QueryAnnualProvisionsResponse;
                toAminoMsg(message: _127.QueryAnnualProvisionsResponse): _127.QueryAnnualProvisionsResponseAminoMsg;
                fromProtoMsg(message: _127.QueryAnnualProvisionsResponseProtoMsg): _127.QueryAnnualProvisionsResponse;
                toProto(message: _127.QueryAnnualProvisionsResponse): Uint8Array;
                toProtoMsg(message: _127.QueryAnnualProvisionsResponse): _127.QueryAnnualProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _126.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _126.Minter;
                fromPartial(object: Partial<_126.Minter>): _126.Minter;
                fromAmino(object: _126.MinterAmino): _126.Minter;
                toAmino(message: _126.Minter): _126.MinterAmino;
                fromAminoMsg(object: _126.MinterAminoMsg): _126.Minter;
                toAminoMsg(message: _126.Minter): _126.MinterAminoMsg;
                fromProtoMsg(message: _126.MinterProtoMsg): _126.Minter;
                toProto(message: _126.Minter): Uint8Array;
                toProtoMsg(message: _126.Minter): _126.MinterProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _126.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _126.Params;
                fromPartial(object: Partial<_126.Params>): _126.Params;
                fromAmino(object: _126.ParamsAmino): _126.Params;
                toAmino(message: _126.Params): _126.ParamsAmino;
                fromAminoMsg(object: _126.ParamsAminoMsg): _126.Params;
                toAminoMsg(message: _126.Params): _126.ParamsAminoMsg;
                fromProtoMsg(message: _126.ParamsProtoMsg): _126.Params;
                toProto(message: _126.Params): Uint8Array;
                toProtoMsg(message: _126.Params): _126.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _125.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _125.GenesisState;
                fromPartial(object: Partial<_125.GenesisState>): _125.GenesisState;
                fromAmino(object: _125.GenesisStateAmino): _125.GenesisState;
                toAmino(message: _125.GenesisState): _125.GenesisStateAmino;
                fromAminoMsg(object: _125.GenesisStateAminoMsg): _125.GenesisState;
                toAminoMsg(message: _125.GenesisState): _125.GenesisStateAminoMsg;
                fromProtoMsg(message: _125.GenesisStateProtoMsg): _125.GenesisState;
                toProto(message: _125.GenesisState): Uint8Array;
                toProtoMsg(message: _125.GenesisState): _125.GenesisStateProtoMsg;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _438.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _129.QueryParamsRequest): Promise<_129.QueryParamsResponse>;
                subspaces(request?: _129.QuerySubspacesRequest): Promise<_129.QuerySubspacesResponse>;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _129.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _129.QueryParamsRequest;
                fromPartial(object: Partial<_129.QueryParamsRequest>): _129.QueryParamsRequest;
                fromAmino(object: _129.QueryParamsRequestAmino): _129.QueryParamsRequest;
                toAmino(message: _129.QueryParamsRequest): _129.QueryParamsRequestAmino;
                fromAminoMsg(object: _129.QueryParamsRequestAminoMsg): _129.QueryParamsRequest;
                toAminoMsg(message: _129.QueryParamsRequest): _129.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _129.QueryParamsRequestProtoMsg): _129.QueryParamsRequest;
                toProto(message: _129.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _129.QueryParamsRequest): _129.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _129.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _129.QueryParamsResponse;
                fromPartial(object: Partial<_129.QueryParamsResponse>): _129.QueryParamsResponse;
                fromAmino(object: _129.QueryParamsResponseAmino): _129.QueryParamsResponse;
                toAmino(message: _129.QueryParamsResponse): _129.QueryParamsResponseAmino;
                fromAminoMsg(object: _129.QueryParamsResponseAminoMsg): _129.QueryParamsResponse;
                toAminoMsg(message: _129.QueryParamsResponse): _129.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _129.QueryParamsResponseProtoMsg): _129.QueryParamsResponse;
                toProto(message: _129.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _129.QueryParamsResponse): _129.QueryParamsResponseProtoMsg;
            };
            QuerySubspacesRequest: {
                typeUrl: string;
                encode(_: _129.QuerySubspacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _129.QuerySubspacesRequest;
                fromPartial(_: Partial<_129.QuerySubspacesRequest>): _129.QuerySubspacesRequest;
                fromAmino(_: _129.QuerySubspacesRequestAmino): _129.QuerySubspacesRequest;
                toAmino(_: _129.QuerySubspacesRequest): _129.QuerySubspacesRequestAmino;
                fromAminoMsg(object: _129.QuerySubspacesRequestAminoMsg): _129.QuerySubspacesRequest;
                toAminoMsg(message: _129.QuerySubspacesRequest): _129.QuerySubspacesRequestAminoMsg;
                fromProtoMsg(message: _129.QuerySubspacesRequestProtoMsg): _129.QuerySubspacesRequest;
                toProto(message: _129.QuerySubspacesRequest): Uint8Array;
                toProtoMsg(message: _129.QuerySubspacesRequest): _129.QuerySubspacesRequestProtoMsg;
            };
            QuerySubspacesResponse: {
                typeUrl: string;
                encode(message: _129.QuerySubspacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _129.QuerySubspacesResponse;
                fromPartial(object: Partial<_129.QuerySubspacesResponse>): _129.QuerySubspacesResponse;
                fromAmino(object: _129.QuerySubspacesResponseAmino): _129.QuerySubspacesResponse;
                toAmino(message: _129.QuerySubspacesResponse): _129.QuerySubspacesResponseAmino;
                fromAminoMsg(object: _129.QuerySubspacesResponseAminoMsg): _129.QuerySubspacesResponse;
                toAminoMsg(message: _129.QuerySubspacesResponse): _129.QuerySubspacesResponseAminoMsg;
                fromProtoMsg(message: _129.QuerySubspacesResponseProtoMsg): _129.QuerySubspacesResponse;
                toProto(message: _129.QuerySubspacesResponse): Uint8Array;
                toProtoMsg(message: _129.QuerySubspacesResponse): _129.QuerySubspacesResponseProtoMsg;
            };
            Subspace: {
                typeUrl: string;
                encode(message: _129.Subspace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _129.Subspace;
                fromPartial(object: Partial<_129.Subspace>): _129.Subspace;
                fromAmino(object: _129.SubspaceAmino): _129.Subspace;
                toAmino(message: _129.Subspace): _129.SubspaceAmino;
                fromAminoMsg(object: _129.SubspaceAminoMsg): _129.Subspace;
                toAminoMsg(message: _129.Subspace): _129.SubspaceAminoMsg;
                fromProtoMsg(message: _129.SubspaceProtoMsg): _129.Subspace;
                toProto(message: _129.Subspace): Uint8Array;
                toProtoMsg(message: _129.Subspace): _129.SubspaceProtoMsg;
            };
            ParameterChangeProposal: {
                typeUrl: string;
                encode(message: _128.ParameterChangeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _128.ParameterChangeProposal;
                fromPartial(object: Partial<_128.ParameterChangeProposal>): _128.ParameterChangeProposal;
                fromAmino(object: _128.ParameterChangeProposalAmino): _128.ParameterChangeProposal;
                toAmino(message: _128.ParameterChangeProposal): _128.ParameterChangeProposalAmino;
                fromAminoMsg(object: _128.ParameterChangeProposalAminoMsg): _128.ParameterChangeProposal;
                toAminoMsg(message: _128.ParameterChangeProposal): _128.ParameterChangeProposalAminoMsg;
                fromProtoMsg(message: _128.ParameterChangeProposalProtoMsg): _128.ParameterChangeProposal;
                toProto(message: _128.ParameterChangeProposal): Uint8Array;
                toProtoMsg(message: _128.ParameterChangeProposal): _128.ParameterChangeProposalProtoMsg;
            };
            ParamChange: {
                typeUrl: string;
                encode(message: _128.ParamChange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _128.ParamChange;
                fromPartial(object: Partial<_128.ParamChange>): _128.ParamChange;
                fromAmino(object: _128.ParamChangeAmino): _128.ParamChange;
                toAmino(message: _128.ParamChange): _128.ParamChangeAmino;
                fromAminoMsg(object: _128.ParamChangeAminoMsg): _128.ParamChange;
                toAminoMsg(message: _128.ParamChange): _128.ParamChangeAminoMsg;
                fromProtoMsg(message: _128.ParamChangeProtoMsg): _128.ParamChange;
                toProto(message: _128.ParamChange): Uint8Array;
                toProtoMsg(message: _128.ParamChange): _128.ParamChangeProtoMsg;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _449.MsgClientImpl;
            QueryClientImpl: typeof _439.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _132.QueryValidatorsRequest): Promise<_132.QueryValidatorsResponse>;
                validator(request: _132.QueryValidatorRequest): Promise<_132.QueryValidatorResponse>;
                validatorDelegations(request: _132.QueryValidatorDelegationsRequest): Promise<_132.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _132.QueryValidatorUnbondingDelegationsRequest): Promise<_132.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _132.QueryDelegationRequest): Promise<_132.QueryDelegationResponse>;
                unbondingDelegation(request: _132.QueryUnbondingDelegationRequest): Promise<_132.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _132.QueryDelegatorDelegationsRequest): Promise<_132.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _132.QueryDelegatorUnbondingDelegationsRequest): Promise<_132.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _132.QueryRedelegationsRequest): Promise<_132.QueryRedelegationsResponse>;
                delegatorValidators(request: _132.QueryDelegatorValidatorsRequest): Promise<_132.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _132.QueryDelegatorValidatorRequest): Promise<_132.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _132.QueryHistoricalInfoRequest): Promise<_132.QueryHistoricalInfoResponse>;
                pool(request?: _132.QueryPoolRequest): Promise<_132.QueryPoolResponse>;
                params(request?: _132.QueryParamsRequest): Promise<_132.QueryParamsResponse>;
            };
            registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _134.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _134.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _134.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _134.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _134.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _134.MsgCreateValidator): {
                        typeUrl: string;
                        value: _134.MsgCreateValidator;
                    };
                    editValidator(value: _134.MsgEditValidator): {
                        typeUrl: string;
                        value: _134.MsgEditValidator;
                    };
                    delegate(value: _134.MsgDelegate): {
                        typeUrl: string;
                        value: _134.MsgDelegate;
                    };
                    beginRedelegate(value: _134.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _134.MsgBeginRedelegate;
                    };
                    undelegate(value: _134.MsgUndelegate): {
                        typeUrl: string;
                        value: _134.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _134.MsgCreateValidator): {
                        typeUrl: string;
                        value: _134.MsgCreateValidator;
                    };
                    editValidator(value: _134.MsgEditValidator): {
                        typeUrl: string;
                        value: _134.MsgEditValidator;
                    };
                    delegate(value: _134.MsgDelegate): {
                        typeUrl: string;
                        value: _134.MsgDelegate;
                    };
                    beginRedelegate(value: _134.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _134.MsgBeginRedelegate;
                    };
                    undelegate(value: _134.MsgUndelegate): {
                        typeUrl: string;
                        value: _134.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _134.MsgCreateValidator) => _134.MsgCreateValidatorAmino;
                    fromAmino: (object: _134.MsgCreateValidatorAmino) => _134.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _134.MsgEditValidator) => _134.MsgEditValidatorAmino;
                    fromAmino: (object: _134.MsgEditValidatorAmino) => _134.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _134.MsgDelegate) => _134.MsgDelegateAmino;
                    fromAmino: (object: _134.MsgDelegateAmino) => _134.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _134.MsgBeginRedelegate) => _134.MsgBeginRedelegateAmino;
                    fromAmino: (object: _134.MsgBeginRedelegateAmino) => _134.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _134.MsgUndelegate) => _134.MsgUndelegateAmino;
                    fromAmino: (object: _134.MsgUndelegateAmino) => _134.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                typeUrl: string;
                encode(message: _134.MsgCreateValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _134.MsgCreateValidator;
                fromPartial(object: Partial<_134.MsgCreateValidator>): _134.MsgCreateValidator;
                fromAmino(object: _134.MsgCreateValidatorAmino): _134.MsgCreateValidator;
                toAmino(message: _134.MsgCreateValidator): _134.MsgCreateValidatorAmino;
                fromAminoMsg(object: _134.MsgCreateValidatorAminoMsg): _134.MsgCreateValidator;
                toAminoMsg(message: _134.MsgCreateValidator): _134.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _134.MsgCreateValidatorProtoMsg): _134.MsgCreateValidator;
                toProto(message: _134.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _134.MsgCreateValidator): _134.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                typeUrl: string;
                encode(_: _134.MsgCreateValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _134.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_134.MsgCreateValidatorResponse>): _134.MsgCreateValidatorResponse;
                fromAmino(_: _134.MsgCreateValidatorResponseAmino): _134.MsgCreateValidatorResponse;
                toAmino(_: _134.MsgCreateValidatorResponse): _134.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _134.MsgCreateValidatorResponseAminoMsg): _134.MsgCreateValidatorResponse;
                toAminoMsg(message: _134.MsgCreateValidatorResponse): _134.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _134.MsgCreateValidatorResponseProtoMsg): _134.MsgCreateValidatorResponse;
                toProto(message: _134.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _134.MsgCreateValidatorResponse): _134.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                typeUrl: string;
                encode(message: _134.MsgEditValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _134.MsgEditValidator;
                fromPartial(object: Partial<_134.MsgEditValidator>): _134.MsgEditValidator;
                fromAmino(object: _134.MsgEditValidatorAmino): _134.MsgEditValidator;
                toAmino(message: _134.MsgEditValidator): _134.MsgEditValidatorAmino;
                fromAminoMsg(object: _134.MsgEditValidatorAminoMsg): _134.MsgEditValidator;
                toAminoMsg(message: _134.MsgEditValidator): _134.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _134.MsgEditValidatorProtoMsg): _134.MsgEditValidator;
                toProto(message: _134.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _134.MsgEditValidator): _134.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                typeUrl: string;
                encode(_: _134.MsgEditValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _134.MsgEditValidatorResponse;
                fromPartial(_: Partial<_134.MsgEditValidatorResponse>): _134.MsgEditValidatorResponse;
                fromAmino(_: _134.MsgEditValidatorResponseAmino): _134.MsgEditValidatorResponse;
                toAmino(_: _134.MsgEditValidatorResponse): _134.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _134.MsgEditValidatorResponseAminoMsg): _134.MsgEditValidatorResponse;
                toAminoMsg(message: _134.MsgEditValidatorResponse): _134.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _134.MsgEditValidatorResponseProtoMsg): _134.MsgEditValidatorResponse;
                toProto(message: _134.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _134.MsgEditValidatorResponse): _134.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                typeUrl: string;
                encode(message: _134.MsgDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _134.MsgDelegate;
                fromPartial(object: Partial<_134.MsgDelegate>): _134.MsgDelegate;
                fromAmino(object: _134.MsgDelegateAmino): _134.MsgDelegate;
                toAmino(message: _134.MsgDelegate): _134.MsgDelegateAmino;
                fromAminoMsg(object: _134.MsgDelegateAminoMsg): _134.MsgDelegate;
                toAminoMsg(message: _134.MsgDelegate): _134.MsgDelegateAminoMsg;
                fromProtoMsg(message: _134.MsgDelegateProtoMsg): _134.MsgDelegate;
                toProto(message: _134.MsgDelegate): Uint8Array;
                toProtoMsg(message: _134.MsgDelegate): _134.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                typeUrl: string;
                encode(_: _134.MsgDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _134.MsgDelegateResponse;
                fromPartial(_: Partial<_134.MsgDelegateResponse>): _134.MsgDelegateResponse;
                fromAmino(_: _134.MsgDelegateResponseAmino): _134.MsgDelegateResponse;
                toAmino(_: _134.MsgDelegateResponse): _134.MsgDelegateResponseAmino;
                fromAminoMsg(object: _134.MsgDelegateResponseAminoMsg): _134.MsgDelegateResponse;
                toAminoMsg(message: _134.MsgDelegateResponse): _134.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _134.MsgDelegateResponseProtoMsg): _134.MsgDelegateResponse;
                toProto(message: _134.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _134.MsgDelegateResponse): _134.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                typeUrl: string;
                encode(message: _134.MsgBeginRedelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _134.MsgBeginRedelegate;
                fromPartial(object: Partial<_134.MsgBeginRedelegate>): _134.MsgBeginRedelegate;
                fromAmino(object: _134.MsgBeginRedelegateAmino): _134.MsgBeginRedelegate;
                toAmino(message: _134.MsgBeginRedelegate): _134.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _134.MsgBeginRedelegateAminoMsg): _134.MsgBeginRedelegate;
                toAminoMsg(message: _134.MsgBeginRedelegate): _134.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _134.MsgBeginRedelegateProtoMsg): _134.MsgBeginRedelegate;
                toProto(message: _134.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _134.MsgBeginRedelegate): _134.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                typeUrl: string;
                encode(message: _134.MsgBeginRedelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _134.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_134.MsgBeginRedelegateResponse>): _134.MsgBeginRedelegateResponse;
                fromAmino(object: _134.MsgBeginRedelegateResponseAmino): _134.MsgBeginRedelegateResponse;
                toAmino(message: _134.MsgBeginRedelegateResponse): _134.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _134.MsgBeginRedelegateResponseAminoMsg): _134.MsgBeginRedelegateResponse;
                toAminoMsg(message: _134.MsgBeginRedelegateResponse): _134.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _134.MsgBeginRedelegateResponseProtoMsg): _134.MsgBeginRedelegateResponse;
                toProto(message: _134.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _134.MsgBeginRedelegateResponse): _134.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                typeUrl: string;
                encode(message: _134.MsgUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _134.MsgUndelegate;
                fromPartial(object: Partial<_134.MsgUndelegate>): _134.MsgUndelegate;
                fromAmino(object: _134.MsgUndelegateAmino): _134.MsgUndelegate;
                toAmino(message: _134.MsgUndelegate): _134.MsgUndelegateAmino;
                fromAminoMsg(object: _134.MsgUndelegateAminoMsg): _134.MsgUndelegate;
                toAminoMsg(message: _134.MsgUndelegate): _134.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _134.MsgUndelegateProtoMsg): _134.MsgUndelegate;
                toProto(message: _134.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _134.MsgUndelegate): _134.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                typeUrl: string;
                encode(message: _134.MsgUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _134.MsgUndelegateResponse;
                fromPartial(object: Partial<_134.MsgUndelegateResponse>): _134.MsgUndelegateResponse;
                fromAmino(object: _134.MsgUndelegateResponseAmino): _134.MsgUndelegateResponse;
                toAmino(message: _134.MsgUndelegateResponse): _134.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _134.MsgUndelegateResponseAminoMsg): _134.MsgUndelegateResponse;
                toAminoMsg(message: _134.MsgUndelegateResponse): _134.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _134.MsgUndelegateResponseProtoMsg): _134.MsgUndelegateResponse;
                toProto(message: _134.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _134.MsgUndelegateResponse): _134.MsgUndelegateResponseProtoMsg;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: import("..").BinaryReader | Uint8Array) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_ToAmino: (content: import("../google/protobuf/any").Any) => import("@cosmjs/amino").Pubkey | null;
            bondStatusFromJSON(object: any): _133.BondStatus;
            bondStatusToJSON(object: _133.BondStatus): string;
            BondStatus: typeof _133.BondStatus;
            BondStatusSDKType: typeof _133.BondStatus;
            BondStatusAmino: typeof _133.BondStatus;
            HistoricalInfo: {
                typeUrl: string;
                encode(message: _133.HistoricalInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _133.HistoricalInfo;
                fromPartial(object: Partial<_133.HistoricalInfo>): _133.HistoricalInfo;
                fromAmino(object: _133.HistoricalInfoAmino): _133.HistoricalInfo;
                toAmino(message: _133.HistoricalInfo): _133.HistoricalInfoAmino;
                fromAminoMsg(object: _133.HistoricalInfoAminoMsg): _133.HistoricalInfo;
                toAminoMsg(message: _133.HistoricalInfo): _133.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _133.HistoricalInfoProtoMsg): _133.HistoricalInfo;
                toProto(message: _133.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _133.HistoricalInfo): _133.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                typeUrl: string;
                encode(message: _133.CommissionRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _133.CommissionRates;
                fromPartial(object: Partial<_133.CommissionRates>): _133.CommissionRates;
                fromAmino(object: _133.CommissionRatesAmino): _133.CommissionRates;
                toAmino(message: _133.CommissionRates): _133.CommissionRatesAmino;
                fromAminoMsg(object: _133.CommissionRatesAminoMsg): _133.CommissionRates;
                toAminoMsg(message: _133.CommissionRates): _133.CommissionRatesAminoMsg;
                fromProtoMsg(message: _133.CommissionRatesProtoMsg): _133.CommissionRates;
                toProto(message: _133.CommissionRates): Uint8Array;
                toProtoMsg(message: _133.CommissionRates): _133.CommissionRatesProtoMsg;
            };
            Commission: {
                typeUrl: string;
                encode(message: _133.Commission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _133.Commission;
                fromPartial(object: Partial<_133.Commission>): _133.Commission;
                fromAmino(object: _133.CommissionAmino): _133.Commission;
                toAmino(message: _133.Commission): _133.CommissionAmino;
                fromAminoMsg(object: _133.CommissionAminoMsg): _133.Commission;
                toAminoMsg(message: _133.Commission): _133.CommissionAminoMsg;
                fromProtoMsg(message: _133.CommissionProtoMsg): _133.Commission;
                toProto(message: _133.Commission): Uint8Array;
                toProtoMsg(message: _133.Commission): _133.CommissionProtoMsg;
            };
            Description: {
                typeUrl: string;
                encode(message: _133.Description, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _133.Description;
                fromPartial(object: Partial<_133.Description>): _133.Description;
                fromAmino(object: _133.DescriptionAmino): _133.Description;
                toAmino(message: _133.Description): _133.DescriptionAmino;
                fromAminoMsg(object: _133.DescriptionAminoMsg): _133.Description;
                toAminoMsg(message: _133.Description): _133.DescriptionAminoMsg;
                fromProtoMsg(message: _133.DescriptionProtoMsg): _133.Description;
                toProto(message: _133.Description): Uint8Array;
                toProtoMsg(message: _133.Description): _133.DescriptionProtoMsg;
            };
            Validator: {
                typeUrl: string;
                encode(message: _133.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _133.Validator;
                fromPartial(object: Partial<_133.Validator>): _133.Validator;
                fromAmino(object: _133.ValidatorAmino): _133.Validator;
                toAmino(message: _133.Validator): _133.ValidatorAmino;
                fromAminoMsg(object: _133.ValidatorAminoMsg): _133.Validator;
                toAminoMsg(message: _133.Validator): _133.ValidatorAminoMsg;
                fromProtoMsg(message: _133.ValidatorProtoMsg): _133.Validator;
                toProto(message: _133.Validator): Uint8Array;
                toProtoMsg(message: _133.Validator): _133.ValidatorProtoMsg;
            };
            ValAddresses: {
                typeUrl: string;
                encode(message: _133.ValAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _133.ValAddresses;
                fromPartial(object: Partial<_133.ValAddresses>): _133.ValAddresses;
                fromAmino(object: _133.ValAddressesAmino): _133.ValAddresses;
                toAmino(message: _133.ValAddresses): _133.ValAddressesAmino;
                fromAminoMsg(object: _133.ValAddressesAminoMsg): _133.ValAddresses;
                toAminoMsg(message: _133.ValAddresses): _133.ValAddressesAminoMsg;
                fromProtoMsg(message: _133.ValAddressesProtoMsg): _133.ValAddresses;
                toProto(message: _133.ValAddresses): Uint8Array;
                toProtoMsg(message: _133.ValAddresses): _133.ValAddressesProtoMsg;
            };
            DVPair: {
                typeUrl: string;
                encode(message: _133.DVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _133.DVPair;
                fromPartial(object: Partial<_133.DVPair>): _133.DVPair;
                fromAmino(object: _133.DVPairAmino): _133.DVPair;
                toAmino(message: _133.DVPair): _133.DVPairAmino;
                fromAminoMsg(object: _133.DVPairAminoMsg): _133.DVPair;
                toAminoMsg(message: _133.DVPair): _133.DVPairAminoMsg;
                fromProtoMsg(message: _133.DVPairProtoMsg): _133.DVPair;
                toProto(message: _133.DVPair): Uint8Array;
                toProtoMsg(message: _133.DVPair): _133.DVPairProtoMsg;
            };
            DVPairs: {
                typeUrl: string;
                encode(message: _133.DVPairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _133.DVPairs;
                fromPartial(object: Partial<_133.DVPairs>): _133.DVPairs;
                fromAmino(object: _133.DVPairsAmino): _133.DVPairs;
                toAmino(message: _133.DVPairs): _133.DVPairsAmino;
                fromAminoMsg(object: _133.DVPairsAminoMsg): _133.DVPairs;
                toAminoMsg(message: _133.DVPairs): _133.DVPairsAminoMsg;
                fromProtoMsg(message: _133.DVPairsProtoMsg): _133.DVPairs;
                toProto(message: _133.DVPairs): Uint8Array;
                toProtoMsg(message: _133.DVPairs): _133.DVPairsProtoMsg;
            };
            DVVTriplet: {
                typeUrl: string;
                encode(message: _133.DVVTriplet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _133.DVVTriplet;
                fromPartial(object: Partial<_133.DVVTriplet>): _133.DVVTriplet;
                fromAmino(object: _133.DVVTripletAmino): _133.DVVTriplet;
                toAmino(message: _133.DVVTriplet): _133.DVVTripletAmino;
                fromAminoMsg(object: _133.DVVTripletAminoMsg): _133.DVVTriplet;
                toAminoMsg(message: _133.DVVTriplet): _133.DVVTripletAminoMsg;
                fromProtoMsg(message: _133.DVVTripletProtoMsg): _133.DVVTriplet;
                toProto(message: _133.DVVTriplet): Uint8Array;
                toProtoMsg(message: _133.DVVTriplet): _133.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                typeUrl: string;
                encode(message: _133.DVVTriplets, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _133.DVVTriplets;
                fromPartial(object: Partial<_133.DVVTriplets>): _133.DVVTriplets;
                fromAmino(object: _133.DVVTripletsAmino): _133.DVVTriplets;
                toAmino(message: _133.DVVTriplets): _133.DVVTripletsAmino;
                fromAminoMsg(object: _133.DVVTripletsAminoMsg): _133.DVVTriplets;
                toAminoMsg(message: _133.DVVTriplets): _133.DVVTripletsAminoMsg;
                fromProtoMsg(message: _133.DVVTripletsProtoMsg): _133.DVVTriplets;
                toProto(message: _133.DVVTriplets): Uint8Array;
                toProtoMsg(message: _133.DVVTriplets): _133.DVVTripletsProtoMsg;
            };
            Delegation: {
                typeUrl: string;
                encode(message: _133.Delegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _133.Delegation;
                fromPartial(object: Partial<_133.Delegation>): _133.Delegation;
                fromAmino(object: _133.DelegationAmino): _133.Delegation;
                toAmino(message: _133.Delegation): _133.DelegationAmino;
                fromAminoMsg(object: _133.DelegationAminoMsg): _133.Delegation;
                toAminoMsg(message: _133.Delegation): _133.DelegationAminoMsg;
                fromProtoMsg(message: _133.DelegationProtoMsg): _133.Delegation;
                toProto(message: _133.Delegation): Uint8Array;
                toProtoMsg(message: _133.Delegation): _133.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                typeUrl: string;
                encode(message: _133.UnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _133.UnbondingDelegation;
                fromPartial(object: Partial<_133.UnbondingDelegation>): _133.UnbondingDelegation;
                fromAmino(object: _133.UnbondingDelegationAmino): _133.UnbondingDelegation;
                toAmino(message: _133.UnbondingDelegation): _133.UnbondingDelegationAmino;
                fromAminoMsg(object: _133.UnbondingDelegationAminoMsg): _133.UnbondingDelegation;
                toAminoMsg(message: _133.UnbondingDelegation): _133.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _133.UnbondingDelegationProtoMsg): _133.UnbondingDelegation;
                toProto(message: _133.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _133.UnbondingDelegation): _133.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                typeUrl: string;
                encode(message: _133.UnbondingDelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _133.UnbondingDelegationEntry;
                fromPartial(object: Partial<_133.UnbondingDelegationEntry>): _133.UnbondingDelegationEntry;
                fromAmino(object: _133.UnbondingDelegationEntryAmino): _133.UnbondingDelegationEntry;
                toAmino(message: _133.UnbondingDelegationEntry): _133.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _133.UnbondingDelegationEntryAminoMsg): _133.UnbondingDelegationEntry;
                toAminoMsg(message: _133.UnbondingDelegationEntry): _133.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _133.UnbondingDelegationEntryProtoMsg): _133.UnbondingDelegationEntry;
                toProto(message: _133.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _133.UnbondingDelegationEntry): _133.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                typeUrl: string;
                encode(message: _133.RedelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _133.RedelegationEntry;
                fromPartial(object: Partial<_133.RedelegationEntry>): _133.RedelegationEntry;
                fromAmino(object: _133.RedelegationEntryAmino): _133.RedelegationEntry;
                toAmino(message: _133.RedelegationEntry): _133.RedelegationEntryAmino;
                fromAminoMsg(object: _133.RedelegationEntryAminoMsg): _133.RedelegationEntry;
                toAminoMsg(message: _133.RedelegationEntry): _133.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _133.RedelegationEntryProtoMsg): _133.RedelegationEntry;
                toProto(message: _133.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _133.RedelegationEntry): _133.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                typeUrl: string;
                encode(message: _133.Redelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _133.Redelegation;
                fromPartial(object: Partial<_133.Redelegation>): _133.Redelegation;
                fromAmino(object: _133.RedelegationAmino): _133.Redelegation;
                toAmino(message: _133.Redelegation): _133.RedelegationAmino;
                fromAminoMsg(object: _133.RedelegationAminoMsg): _133.Redelegation;
                toAminoMsg(message: _133.Redelegation): _133.RedelegationAminoMsg;
                fromProtoMsg(message: _133.RedelegationProtoMsg): _133.Redelegation;
                toProto(message: _133.Redelegation): Uint8Array;
                toProtoMsg(message: _133.Redelegation): _133.RedelegationProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _133.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _133.Params;
                fromPartial(object: Partial<_133.Params>): _133.Params;
                fromAmino(object: _133.ParamsAmino): _133.Params;
                toAmino(message: _133.Params): _133.ParamsAmino;
                fromAminoMsg(object: _133.ParamsAminoMsg): _133.Params;
                toAminoMsg(message: _133.Params): _133.ParamsAminoMsg;
                fromProtoMsg(message: _133.ParamsProtoMsg): _133.Params;
                toProto(message: _133.Params): Uint8Array;
                toProtoMsg(message: _133.Params): _133.ParamsProtoMsg;
            };
            DelegationResponse: {
                typeUrl: string;
                encode(message: _133.DelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _133.DelegationResponse;
                fromPartial(object: Partial<_133.DelegationResponse>): _133.DelegationResponse;
                fromAmino(object: _133.DelegationResponseAmino): _133.DelegationResponse;
                toAmino(message: _133.DelegationResponse): _133.DelegationResponseAmino;
                fromAminoMsg(object: _133.DelegationResponseAminoMsg): _133.DelegationResponse;
                toAminoMsg(message: _133.DelegationResponse): _133.DelegationResponseAminoMsg;
                fromProtoMsg(message: _133.DelegationResponseProtoMsg): _133.DelegationResponse;
                toProto(message: _133.DelegationResponse): Uint8Array;
                toProtoMsg(message: _133.DelegationResponse): _133.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                typeUrl: string;
                encode(message: _133.RedelegationEntryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _133.RedelegationEntryResponse;
                fromPartial(object: Partial<_133.RedelegationEntryResponse>): _133.RedelegationEntryResponse;
                fromAmino(object: _133.RedelegationEntryResponseAmino): _133.RedelegationEntryResponse;
                toAmino(message: _133.RedelegationEntryResponse): _133.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _133.RedelegationEntryResponseAminoMsg): _133.RedelegationEntryResponse;
                toAminoMsg(message: _133.RedelegationEntryResponse): _133.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _133.RedelegationEntryResponseProtoMsg): _133.RedelegationEntryResponse;
                toProto(message: _133.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _133.RedelegationEntryResponse): _133.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                typeUrl: string;
                encode(message: _133.RedelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _133.RedelegationResponse;
                fromPartial(object: Partial<_133.RedelegationResponse>): _133.RedelegationResponse;
                fromAmino(object: _133.RedelegationResponseAmino): _133.RedelegationResponse;
                toAmino(message: _133.RedelegationResponse): _133.RedelegationResponseAmino;
                fromAminoMsg(object: _133.RedelegationResponseAminoMsg): _133.RedelegationResponse;
                toAminoMsg(message: _133.RedelegationResponse): _133.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _133.RedelegationResponseProtoMsg): _133.RedelegationResponse;
                toProto(message: _133.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _133.RedelegationResponse): _133.RedelegationResponseProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _133.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _133.Pool;
                fromPartial(object: Partial<_133.Pool>): _133.Pool;
                fromAmino(object: _133.PoolAmino): _133.Pool;
                toAmino(message: _133.Pool): _133.PoolAmino;
                fromAminoMsg(object: _133.PoolAminoMsg): _133.Pool;
                toAminoMsg(message: _133.Pool): _133.PoolAminoMsg;
                fromProtoMsg(message: _133.PoolProtoMsg): _133.Pool;
                toProto(message: _133.Pool): Uint8Array;
                toProtoMsg(message: _133.Pool): _133.PoolProtoMsg;
            };
            QueryValidatorsRequest: {
                typeUrl: string;
                encode(message: _132.QueryValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _132.QueryValidatorsRequest;
                fromPartial(object: Partial<_132.QueryValidatorsRequest>): _132.QueryValidatorsRequest;
                fromAmino(object: _132.QueryValidatorsRequestAmino): _132.QueryValidatorsRequest;
                toAmino(message: _132.QueryValidatorsRequest): _132.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _132.QueryValidatorsRequestAminoMsg): _132.QueryValidatorsRequest;
                toAminoMsg(message: _132.QueryValidatorsRequest): _132.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _132.QueryValidatorsRequestProtoMsg): _132.QueryValidatorsRequest;
                toProto(message: _132.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _132.QueryValidatorsRequest): _132.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                typeUrl: string;
                encode(message: _132.QueryValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _132.QueryValidatorsResponse;
                fromPartial(object: Partial<_132.QueryValidatorsResponse>): _132.QueryValidatorsResponse;
                fromAmino(object: _132.QueryValidatorsResponseAmino): _132.QueryValidatorsResponse;
                toAmino(message: _132.QueryValidatorsResponse): _132.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _132.QueryValidatorsResponseAminoMsg): _132.QueryValidatorsResponse;
                toAminoMsg(message: _132.QueryValidatorsResponse): _132.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _132.QueryValidatorsResponseProtoMsg): _132.QueryValidatorsResponse;
                toProto(message: _132.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _132.QueryValidatorsResponse): _132.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                typeUrl: string;
                encode(message: _132.QueryValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _132.QueryValidatorRequest;
                fromPartial(object: Partial<_132.QueryValidatorRequest>): _132.QueryValidatorRequest;
                fromAmino(object: _132.QueryValidatorRequestAmino): _132.QueryValidatorRequest;
                toAmino(message: _132.QueryValidatorRequest): _132.QueryValidatorRequestAmino;
                fromAminoMsg(object: _132.QueryValidatorRequestAminoMsg): _132.QueryValidatorRequest;
                toAminoMsg(message: _132.QueryValidatorRequest): _132.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _132.QueryValidatorRequestProtoMsg): _132.QueryValidatorRequest;
                toProto(message: _132.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _132.QueryValidatorRequest): _132.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                typeUrl: string;
                encode(message: _132.QueryValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _132.QueryValidatorResponse;
                fromPartial(object: Partial<_132.QueryValidatorResponse>): _132.QueryValidatorResponse;
                fromAmino(object: _132.QueryValidatorResponseAmino): _132.QueryValidatorResponse;
                toAmino(message: _132.QueryValidatorResponse): _132.QueryValidatorResponseAmino;
                fromAminoMsg(object: _132.QueryValidatorResponseAminoMsg): _132.QueryValidatorResponse;
                toAminoMsg(message: _132.QueryValidatorResponse): _132.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _132.QueryValidatorResponseProtoMsg): _132.QueryValidatorResponse;
                toProto(message: _132.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _132.QueryValidatorResponse): _132.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _132.QueryValidatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _132.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_132.QueryValidatorDelegationsRequest>): _132.QueryValidatorDelegationsRequest;
                fromAmino(object: _132.QueryValidatorDelegationsRequestAmino): _132.QueryValidatorDelegationsRequest;
                toAmino(message: _132.QueryValidatorDelegationsRequest): _132.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _132.QueryValidatorDelegationsRequestAminoMsg): _132.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _132.QueryValidatorDelegationsRequest): _132.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _132.QueryValidatorDelegationsRequestProtoMsg): _132.QueryValidatorDelegationsRequest;
                toProto(message: _132.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _132.QueryValidatorDelegationsRequest): _132.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _132.QueryValidatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _132.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_132.QueryValidatorDelegationsResponse>): _132.QueryValidatorDelegationsResponse;
                fromAmino(object: _132.QueryValidatorDelegationsResponseAmino): _132.QueryValidatorDelegationsResponse;
                toAmino(message: _132.QueryValidatorDelegationsResponse): _132.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _132.QueryValidatorDelegationsResponseAminoMsg): _132.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _132.QueryValidatorDelegationsResponse): _132.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _132.QueryValidatorDelegationsResponseProtoMsg): _132.QueryValidatorDelegationsResponse;
                toProto(message: _132.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _132.QueryValidatorDelegationsResponse): _132.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _132.QueryValidatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _132.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_132.QueryValidatorUnbondingDelegationsRequest>): _132.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _132.QueryValidatorUnbondingDelegationsRequestAmino): _132.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _132.QueryValidatorUnbondingDelegationsRequest): _132.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _132.QueryValidatorUnbondingDelegationsRequestAminoMsg): _132.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _132.QueryValidatorUnbondingDelegationsRequest): _132.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _132.QueryValidatorUnbondingDelegationsRequestProtoMsg): _132.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _132.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _132.QueryValidatorUnbondingDelegationsRequest): _132.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _132.QueryValidatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _132.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_132.QueryValidatorUnbondingDelegationsResponse>): _132.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _132.QueryValidatorUnbondingDelegationsResponseAmino): _132.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _132.QueryValidatorUnbondingDelegationsResponse): _132.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _132.QueryValidatorUnbondingDelegationsResponseAminoMsg): _132.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _132.QueryValidatorUnbondingDelegationsResponse): _132.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _132.QueryValidatorUnbondingDelegationsResponseProtoMsg): _132.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _132.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _132.QueryValidatorUnbondingDelegationsResponse): _132.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                typeUrl: string;
                encode(message: _132.QueryDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _132.QueryDelegationRequest;
                fromPartial(object: Partial<_132.QueryDelegationRequest>): _132.QueryDelegationRequest;
                fromAmino(object: _132.QueryDelegationRequestAmino): _132.QueryDelegationRequest;
                toAmino(message: _132.QueryDelegationRequest): _132.QueryDelegationRequestAmino;
                fromAminoMsg(object: _132.QueryDelegationRequestAminoMsg): _132.QueryDelegationRequest;
                toAminoMsg(message: _132.QueryDelegationRequest): _132.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _132.QueryDelegationRequestProtoMsg): _132.QueryDelegationRequest;
                toProto(message: _132.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _132.QueryDelegationRequest): _132.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                typeUrl: string;
                encode(message: _132.QueryDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _132.QueryDelegationResponse;
                fromPartial(object: Partial<_132.QueryDelegationResponse>): _132.QueryDelegationResponse;
                fromAmino(object: _132.QueryDelegationResponseAmino): _132.QueryDelegationResponse;
                toAmino(message: _132.QueryDelegationResponse): _132.QueryDelegationResponseAmino;
                fromAminoMsg(object: _132.QueryDelegationResponseAminoMsg): _132.QueryDelegationResponse;
                toAminoMsg(message: _132.QueryDelegationResponse): _132.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _132.QueryDelegationResponseProtoMsg): _132.QueryDelegationResponse;
                toProto(message: _132.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _132.QueryDelegationResponse): _132.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                typeUrl: string;
                encode(message: _132.QueryUnbondingDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _132.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_132.QueryUnbondingDelegationRequest>): _132.QueryUnbondingDelegationRequest;
                fromAmino(object: _132.QueryUnbondingDelegationRequestAmino): _132.QueryUnbondingDelegationRequest;
                toAmino(message: _132.QueryUnbondingDelegationRequest): _132.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _132.QueryUnbondingDelegationRequestAminoMsg): _132.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _132.QueryUnbondingDelegationRequest): _132.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _132.QueryUnbondingDelegationRequestProtoMsg): _132.QueryUnbondingDelegationRequest;
                toProto(message: _132.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _132.QueryUnbondingDelegationRequest): _132.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                typeUrl: string;
                encode(message: _132.QueryUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _132.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_132.QueryUnbondingDelegationResponse>): _132.QueryUnbondingDelegationResponse;
                fromAmino(object: _132.QueryUnbondingDelegationResponseAmino): _132.QueryUnbondingDelegationResponse;
                toAmino(message: _132.QueryUnbondingDelegationResponse): _132.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _132.QueryUnbondingDelegationResponseAminoMsg): _132.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _132.QueryUnbondingDelegationResponse): _132.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _132.QueryUnbondingDelegationResponseProtoMsg): _132.QueryUnbondingDelegationResponse;
                toProto(message: _132.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _132.QueryUnbondingDelegationResponse): _132.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _132.QueryDelegatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _132.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_132.QueryDelegatorDelegationsRequest>): _132.QueryDelegatorDelegationsRequest;
                fromAmino(object: _132.QueryDelegatorDelegationsRequestAmino): _132.QueryDelegatorDelegationsRequest;
                toAmino(message: _132.QueryDelegatorDelegationsRequest): _132.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _132.QueryDelegatorDelegationsRequestAminoMsg): _132.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _132.QueryDelegatorDelegationsRequest): _132.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _132.QueryDelegatorDelegationsRequestProtoMsg): _132.QueryDelegatorDelegationsRequest;
                toProto(message: _132.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _132.QueryDelegatorDelegationsRequest): _132.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _132.QueryDelegatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _132.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_132.QueryDelegatorDelegationsResponse>): _132.QueryDelegatorDelegationsResponse;
                fromAmino(object: _132.QueryDelegatorDelegationsResponseAmino): _132.QueryDelegatorDelegationsResponse;
                toAmino(message: _132.QueryDelegatorDelegationsResponse): _132.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _132.QueryDelegatorDelegationsResponseAminoMsg): _132.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _132.QueryDelegatorDelegationsResponse): _132.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _132.QueryDelegatorDelegationsResponseProtoMsg): _132.QueryDelegatorDelegationsResponse;
                toProto(message: _132.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _132.QueryDelegatorDelegationsResponse): _132.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _132.QueryDelegatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _132.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_132.QueryDelegatorUnbondingDelegationsRequest>): _132.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _132.QueryDelegatorUnbondingDelegationsRequestAmino): _132.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _132.QueryDelegatorUnbondingDelegationsRequest): _132.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _132.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _132.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _132.QueryDelegatorUnbondingDelegationsRequest): _132.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _132.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _132.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _132.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _132.QueryDelegatorUnbondingDelegationsRequest): _132.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _132.QueryDelegatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _132.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_132.QueryDelegatorUnbondingDelegationsResponse>): _132.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _132.QueryDelegatorUnbondingDelegationsResponseAmino): _132.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _132.QueryDelegatorUnbondingDelegationsResponse): _132.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _132.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _132.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _132.QueryDelegatorUnbondingDelegationsResponse): _132.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _132.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _132.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _132.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _132.QueryDelegatorUnbondingDelegationsResponse): _132.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                typeUrl: string;
                encode(message: _132.QueryRedelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _132.QueryRedelegationsRequest;
                fromPartial(object: Partial<_132.QueryRedelegationsRequest>): _132.QueryRedelegationsRequest;
                fromAmino(object: _132.QueryRedelegationsRequestAmino): _132.QueryRedelegationsRequest;
                toAmino(message: _132.QueryRedelegationsRequest): _132.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _132.QueryRedelegationsRequestAminoMsg): _132.QueryRedelegationsRequest;
                toAminoMsg(message: _132.QueryRedelegationsRequest): _132.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _132.QueryRedelegationsRequestProtoMsg): _132.QueryRedelegationsRequest;
                toProto(message: _132.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _132.QueryRedelegationsRequest): _132.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                typeUrl: string;
                encode(message: _132.QueryRedelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _132.QueryRedelegationsResponse;
                fromPartial(object: Partial<_132.QueryRedelegationsResponse>): _132.QueryRedelegationsResponse;
                fromAmino(object: _132.QueryRedelegationsResponseAmino): _132.QueryRedelegationsResponse;
                toAmino(message: _132.QueryRedelegationsResponse): _132.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _132.QueryRedelegationsResponseAminoMsg): _132.QueryRedelegationsResponse;
                toAminoMsg(message: _132.QueryRedelegationsResponse): _132.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _132.QueryRedelegationsResponseProtoMsg): _132.QueryRedelegationsResponse;
                toProto(message: _132.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _132.QueryRedelegationsResponse): _132.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _132.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _132.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_132.QueryDelegatorValidatorsRequest>): _132.QueryDelegatorValidatorsRequest;
                fromAmino(object: _132.QueryDelegatorValidatorsRequestAmino): _132.QueryDelegatorValidatorsRequest;
                toAmino(message: _132.QueryDelegatorValidatorsRequest): _132.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _132.QueryDelegatorValidatorsRequestAminoMsg): _132.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _132.QueryDelegatorValidatorsRequest): _132.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _132.QueryDelegatorValidatorsRequestProtoMsg): _132.QueryDelegatorValidatorsRequest;
                toProto(message: _132.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _132.QueryDelegatorValidatorsRequest): _132.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _132.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _132.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_132.QueryDelegatorValidatorsResponse>): _132.QueryDelegatorValidatorsResponse;
                fromAmino(object: _132.QueryDelegatorValidatorsResponseAmino): _132.QueryDelegatorValidatorsResponse;
                toAmino(message: _132.QueryDelegatorValidatorsResponse): _132.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _132.QueryDelegatorValidatorsResponseAminoMsg): _132.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _132.QueryDelegatorValidatorsResponse): _132.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _132.QueryDelegatorValidatorsResponseProtoMsg): _132.QueryDelegatorValidatorsResponse;
                toProto(message: _132.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _132.QueryDelegatorValidatorsResponse): _132.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                typeUrl: string;
                encode(message: _132.QueryDelegatorValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _132.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_132.QueryDelegatorValidatorRequest>): _132.QueryDelegatorValidatorRequest;
                fromAmino(object: _132.QueryDelegatorValidatorRequestAmino): _132.QueryDelegatorValidatorRequest;
                toAmino(message: _132.QueryDelegatorValidatorRequest): _132.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _132.QueryDelegatorValidatorRequestAminoMsg): _132.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _132.QueryDelegatorValidatorRequest): _132.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _132.QueryDelegatorValidatorRequestProtoMsg): _132.QueryDelegatorValidatorRequest;
                toProto(message: _132.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _132.QueryDelegatorValidatorRequest): _132.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                typeUrl: string;
                encode(message: _132.QueryDelegatorValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _132.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_132.QueryDelegatorValidatorResponse>): _132.QueryDelegatorValidatorResponse;
                fromAmino(object: _132.QueryDelegatorValidatorResponseAmino): _132.QueryDelegatorValidatorResponse;
                toAmino(message: _132.QueryDelegatorValidatorResponse): _132.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _132.QueryDelegatorValidatorResponseAminoMsg): _132.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _132.QueryDelegatorValidatorResponse): _132.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _132.QueryDelegatorValidatorResponseProtoMsg): _132.QueryDelegatorValidatorResponse;
                toProto(message: _132.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _132.QueryDelegatorValidatorResponse): _132.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                typeUrl: string;
                encode(message: _132.QueryHistoricalInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _132.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_132.QueryHistoricalInfoRequest>): _132.QueryHistoricalInfoRequest;
                fromAmino(object: _132.QueryHistoricalInfoRequestAmino): _132.QueryHistoricalInfoRequest;
                toAmino(message: _132.QueryHistoricalInfoRequest): _132.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _132.QueryHistoricalInfoRequestAminoMsg): _132.QueryHistoricalInfoRequest;
                toAminoMsg(message: _132.QueryHistoricalInfoRequest): _132.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _132.QueryHistoricalInfoRequestProtoMsg): _132.QueryHistoricalInfoRequest;
                toProto(message: _132.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _132.QueryHistoricalInfoRequest): _132.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                typeUrl: string;
                encode(message: _132.QueryHistoricalInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _132.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_132.QueryHistoricalInfoResponse>): _132.QueryHistoricalInfoResponse;
                fromAmino(object: _132.QueryHistoricalInfoResponseAmino): _132.QueryHistoricalInfoResponse;
                toAmino(message: _132.QueryHistoricalInfoResponse): _132.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _132.QueryHistoricalInfoResponseAminoMsg): _132.QueryHistoricalInfoResponse;
                toAminoMsg(message: _132.QueryHistoricalInfoResponse): _132.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _132.QueryHistoricalInfoResponseProtoMsg): _132.QueryHistoricalInfoResponse;
                toProto(message: _132.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _132.QueryHistoricalInfoResponse): _132.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(_: _132.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _132.QueryPoolRequest;
                fromPartial(_: Partial<_132.QueryPoolRequest>): _132.QueryPoolRequest;
                fromAmino(_: _132.QueryPoolRequestAmino): _132.QueryPoolRequest;
                toAmino(_: _132.QueryPoolRequest): _132.QueryPoolRequestAmino;
                fromAminoMsg(object: _132.QueryPoolRequestAminoMsg): _132.QueryPoolRequest;
                toAminoMsg(message: _132.QueryPoolRequest): _132.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _132.QueryPoolRequestProtoMsg): _132.QueryPoolRequest;
                toProto(message: _132.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _132.QueryPoolRequest): _132.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _132.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _132.QueryPoolResponse;
                fromPartial(object: Partial<_132.QueryPoolResponse>): _132.QueryPoolResponse;
                fromAmino(object: _132.QueryPoolResponseAmino): _132.QueryPoolResponse;
                toAmino(message: _132.QueryPoolResponse): _132.QueryPoolResponseAmino;
                fromAminoMsg(object: _132.QueryPoolResponseAminoMsg): _132.QueryPoolResponse;
                toAminoMsg(message: _132.QueryPoolResponse): _132.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _132.QueryPoolResponseProtoMsg): _132.QueryPoolResponse;
                toProto(message: _132.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _132.QueryPoolResponse): _132.QueryPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _132.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _132.QueryParamsRequest;
                fromPartial(_: Partial<_132.QueryParamsRequest>): _132.QueryParamsRequest;
                fromAmino(_: _132.QueryParamsRequestAmino): _132.QueryParamsRequest;
                toAmino(_: _132.QueryParamsRequest): _132.QueryParamsRequestAmino;
                fromAminoMsg(object: _132.QueryParamsRequestAminoMsg): _132.QueryParamsRequest;
                toAminoMsg(message: _132.QueryParamsRequest): _132.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _132.QueryParamsRequestProtoMsg): _132.QueryParamsRequest;
                toProto(message: _132.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _132.QueryParamsRequest): _132.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _132.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _132.QueryParamsResponse;
                fromPartial(object: Partial<_132.QueryParamsResponse>): _132.QueryParamsResponse;
                fromAmino(object: _132.QueryParamsResponseAmino): _132.QueryParamsResponse;
                toAmino(message: _132.QueryParamsResponse): _132.QueryParamsResponseAmino;
                fromAminoMsg(object: _132.QueryParamsResponseAminoMsg): _132.QueryParamsResponse;
                toAminoMsg(message: _132.QueryParamsResponse): _132.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _132.QueryParamsResponseProtoMsg): _132.QueryParamsResponse;
                toProto(message: _132.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _132.QueryParamsResponse): _132.QueryParamsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _131.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _131.GenesisState;
                fromPartial(object: Partial<_131.GenesisState>): _131.GenesisState;
                fromAmino(object: _131.GenesisStateAmino): _131.GenesisState;
                toAmino(message: _131.GenesisState): _131.GenesisStateAmino;
                fromAminoMsg(object: _131.GenesisStateAminoMsg): _131.GenesisState;
                toAminoMsg(message: _131.GenesisState): _131.GenesisStateAminoMsg;
                fromProtoMsg(message: _131.GenesisStateProtoMsg): _131.GenesisState;
                toProto(message: _131.GenesisState): Uint8Array;
                toProtoMsg(message: _131.GenesisState): _131.GenesisStateProtoMsg;
            };
            LastValidatorPower: {
                typeUrl: string;
                encode(message: _131.LastValidatorPower, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _131.LastValidatorPower;
                fromPartial(object: Partial<_131.LastValidatorPower>): _131.LastValidatorPower;
                fromAmino(object: _131.LastValidatorPowerAmino): _131.LastValidatorPower;
                toAmino(message: _131.LastValidatorPower): _131.LastValidatorPowerAmino;
                fromAminoMsg(object: _131.LastValidatorPowerAminoMsg): _131.LastValidatorPower;
                toAminoMsg(message: _131.LastValidatorPower): _131.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _131.LastValidatorPowerProtoMsg): _131.LastValidatorPower;
                toProto(message: _131.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _131.LastValidatorPower): _131.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _130.AuthorizationType;
            authorizationTypeToJSON(object: _130.AuthorizationType): string;
            AuthorizationType: typeof _130.AuthorizationType;
            AuthorizationTypeSDKType: typeof _130.AuthorizationType;
            AuthorizationTypeAmino: typeof _130.AuthorizationType;
            StakeAuthorization: {
                typeUrl: string;
                encode(message: _130.StakeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _130.StakeAuthorization;
                fromPartial(object: Partial<_130.StakeAuthorization>): _130.StakeAuthorization;
                fromAmino(object: _130.StakeAuthorizationAmino): _130.StakeAuthorization;
                toAmino(message: _130.StakeAuthorization): _130.StakeAuthorizationAmino;
                fromAminoMsg(object: _130.StakeAuthorizationAminoMsg): _130.StakeAuthorization;
                toAminoMsg(message: _130.StakeAuthorization): _130.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _130.StakeAuthorizationProtoMsg): _130.StakeAuthorization;
                toProto(message: _130.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _130.StakeAuthorization): _130.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                typeUrl: string;
                encode(message: _130.StakeAuthorization_Validators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _130.StakeAuthorization_Validators;
                fromPartial(object: Partial<_130.StakeAuthorization_Validators>): _130.StakeAuthorization_Validators;
                fromAmino(object: _130.StakeAuthorization_ValidatorsAmino): _130.StakeAuthorization_Validators;
                toAmino(message: _130.StakeAuthorization_Validators): _130.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _130.StakeAuthorization_ValidatorsAminoMsg): _130.StakeAuthorization_Validators;
                toAminoMsg(message: _130.StakeAuthorization_Validators): _130.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _130.StakeAuthorization_ValidatorsProtoMsg): _130.StakeAuthorization_Validators;
                toProto(message: _130.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _130.StakeAuthorization_Validators): _130.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _135.SignMode;
                signModeToJSON(object: _135.SignMode): string;
                SignMode: typeof _135.SignMode;
                SignModeSDKType: typeof _135.SignMode;
                SignModeAmino: typeof _135.SignMode;
                SignatureDescriptors: {
                    typeUrl: string;
                    encode(message: _135.SignatureDescriptors, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _135.SignatureDescriptors;
                    fromPartial(object: Partial<_135.SignatureDescriptors>): _135.SignatureDescriptors;
                    fromAmino(object: _135.SignatureDescriptorsAmino): _135.SignatureDescriptors;
                    toAmino(message: _135.SignatureDescriptors): _135.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _135.SignatureDescriptorsAminoMsg): _135.SignatureDescriptors;
                    toAminoMsg(message: _135.SignatureDescriptors): _135.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _135.SignatureDescriptorsProtoMsg): _135.SignatureDescriptors;
                    toProto(message: _135.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _135.SignatureDescriptors): _135.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    typeUrl: string;
                    encode(message: _135.SignatureDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _135.SignatureDescriptor;
                    fromPartial(object: Partial<_135.SignatureDescriptor>): _135.SignatureDescriptor;
                    fromAmino(object: _135.SignatureDescriptorAmino): _135.SignatureDescriptor;
                    toAmino(message: _135.SignatureDescriptor): _135.SignatureDescriptorAmino;
                    fromAminoMsg(object: _135.SignatureDescriptorAminoMsg): _135.SignatureDescriptor;
                    toAminoMsg(message: _135.SignatureDescriptor): _135.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _135.SignatureDescriptorProtoMsg): _135.SignatureDescriptor;
                    toProto(message: _135.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _135.SignatureDescriptor): _135.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    typeUrl: string;
                    encode(message: _135.SignatureDescriptor_Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _135.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_135.SignatureDescriptor_Data>): _135.SignatureDescriptor_Data;
                    fromAmino(object: _135.SignatureDescriptor_DataAmino): _135.SignatureDescriptor_Data;
                    toAmino(message: _135.SignatureDescriptor_Data): _135.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _135.SignatureDescriptor_DataAminoMsg): _135.SignatureDescriptor_Data;
                    toAminoMsg(message: _135.SignatureDescriptor_Data): _135.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _135.SignatureDescriptor_DataProtoMsg): _135.SignatureDescriptor_Data;
                    toProto(message: _135.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _135.SignatureDescriptor_Data): _135.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    typeUrl: string;
                    encode(message: _135.SignatureDescriptor_Data_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _135.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_135.SignatureDescriptor_Data_Single>): _135.SignatureDescriptor_Data_Single;
                    fromAmino(object: _135.SignatureDescriptor_Data_SingleAmino): _135.SignatureDescriptor_Data_Single;
                    toAmino(message: _135.SignatureDescriptor_Data_Single): _135.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _135.SignatureDescriptor_Data_SingleAminoMsg): _135.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _135.SignatureDescriptor_Data_Single): _135.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _135.SignatureDescriptor_Data_SingleProtoMsg): _135.SignatureDescriptor_Data_Single;
                    toProto(message: _135.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _135.SignatureDescriptor_Data_Single): _135.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    typeUrl: string;
                    encode(message: _135.SignatureDescriptor_Data_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _135.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_135.SignatureDescriptor_Data_Multi>): _135.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _135.SignatureDescriptor_Data_MultiAmino): _135.SignatureDescriptor_Data_Multi;
                    toAmino(message: _135.SignatureDescriptor_Data_Multi): _135.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _135.SignatureDescriptor_Data_MultiAminoMsg): _135.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _135.SignatureDescriptor_Data_Multi): _135.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _135.SignatureDescriptor_Data_MultiProtoMsg): _135.SignatureDescriptor_Data_Multi;
                    toProto(message: _135.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _135.SignatureDescriptor_Data_Multi): _135.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _440.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _136.SimulateRequest): Promise<_136.SimulateResponse>;
                getTx(request: _136.GetTxRequest): Promise<_136.GetTxResponse>;
                broadcastTx(request: _136.BroadcastTxRequest): Promise<_136.BroadcastTxResponse>;
                getTxsEvent(request: _136.GetTxsEventRequest): Promise<_136.GetTxsEventResponse>;
                getBlockWithTxs(request: _136.GetBlockWithTxsRequest): Promise<_136.GetBlockWithTxsResponse>;
            };
            Tx: {
                typeUrl: string;
                encode(message: _137.Tx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _137.Tx;
                fromPartial(object: Partial<_137.Tx>): _137.Tx;
                fromAmino(object: _137.TxAmino): _137.Tx;
                toAmino(message: _137.Tx): _137.TxAmino;
                fromAminoMsg(object: _137.TxAminoMsg): _137.Tx;
                toAminoMsg(message: _137.Tx): _137.TxAminoMsg;
                fromProtoMsg(message: _137.TxProtoMsg): _137.Tx;
                toProto(message: _137.Tx): Uint8Array;
                toProtoMsg(message: _137.Tx): _137.TxProtoMsg;
            };
            TxRaw: {
                typeUrl: string;
                encode(message: _137.TxRaw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _137.TxRaw;
                fromPartial(object: Partial<_137.TxRaw>): _137.TxRaw;
                fromAmino(object: _137.TxRawAmino): _137.TxRaw;
                toAmino(message: _137.TxRaw): _137.TxRawAmino;
                fromAminoMsg(object: _137.TxRawAminoMsg): _137.TxRaw;
                toAminoMsg(message: _137.TxRaw): _137.TxRawAminoMsg;
                fromProtoMsg(message: _137.TxRawProtoMsg): _137.TxRaw;
                toProto(message: _137.TxRaw): Uint8Array;
                toProtoMsg(message: _137.TxRaw): _137.TxRawProtoMsg;
            };
            SignDoc: {
                typeUrl: string;
                encode(message: _137.SignDoc, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _137.SignDoc;
                fromPartial(object: Partial<_137.SignDoc>): _137.SignDoc;
                fromAmino(object: _137.SignDocAmino): _137.SignDoc;
                toAmino(message: _137.SignDoc): _137.SignDocAmino;
                fromAminoMsg(object: _137.SignDocAminoMsg): _137.SignDoc;
                toAminoMsg(message: _137.SignDoc): _137.SignDocAminoMsg;
                fromProtoMsg(message: _137.SignDocProtoMsg): _137.SignDoc;
                toProto(message: _137.SignDoc): Uint8Array;
                toProtoMsg(message: _137.SignDoc): _137.SignDocProtoMsg;
            };
            SignDocDirectAux: {
                typeUrl: string;
                encode(message: _137.SignDocDirectAux, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _137.SignDocDirectAux;
                fromPartial(object: Partial<_137.SignDocDirectAux>): _137.SignDocDirectAux;
                fromAmino(object: _137.SignDocDirectAuxAmino): _137.SignDocDirectAux;
                toAmino(message: _137.SignDocDirectAux): _137.SignDocDirectAuxAmino;
                fromAminoMsg(object: _137.SignDocDirectAuxAminoMsg): _137.SignDocDirectAux;
                toAminoMsg(message: _137.SignDocDirectAux): _137.SignDocDirectAuxAminoMsg;
                fromProtoMsg(message: _137.SignDocDirectAuxProtoMsg): _137.SignDocDirectAux;
                toProto(message: _137.SignDocDirectAux): Uint8Array;
                toProtoMsg(message: _137.SignDocDirectAux): _137.SignDocDirectAuxProtoMsg;
            };
            TxBody: {
                typeUrl: string;
                encode(message: _137.TxBody, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _137.TxBody;
                fromPartial(object: Partial<_137.TxBody>): _137.TxBody;
                fromAmino(object: _137.TxBodyAmino): _137.TxBody;
                toAmino(message: _137.TxBody): _137.TxBodyAmino;
                fromAminoMsg(object: _137.TxBodyAminoMsg): _137.TxBody;
                toAminoMsg(message: _137.TxBody): _137.TxBodyAminoMsg;
                fromProtoMsg(message: _137.TxBodyProtoMsg): _137.TxBody;
                toProto(message: _137.TxBody): Uint8Array;
                toProtoMsg(message: _137.TxBody): _137.TxBodyProtoMsg;
            };
            AuthInfo: {
                typeUrl: string;
                encode(message: _137.AuthInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _137.AuthInfo;
                fromPartial(object: Partial<_137.AuthInfo>): _137.AuthInfo;
                fromAmino(object: _137.AuthInfoAmino): _137.AuthInfo;
                toAmino(message: _137.AuthInfo): _137.AuthInfoAmino;
                fromAminoMsg(object: _137.AuthInfoAminoMsg): _137.AuthInfo;
                toAminoMsg(message: _137.AuthInfo): _137.AuthInfoAminoMsg;
                fromProtoMsg(message: _137.AuthInfoProtoMsg): _137.AuthInfo;
                toProto(message: _137.AuthInfo): Uint8Array;
                toProtoMsg(message: _137.AuthInfo): _137.AuthInfoProtoMsg;
            };
            SignerInfo: {
                typeUrl: string;
                encode(message: _137.SignerInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _137.SignerInfo;
                fromPartial(object: Partial<_137.SignerInfo>): _137.SignerInfo;
                fromAmino(object: _137.SignerInfoAmino): _137.SignerInfo;
                toAmino(message: _137.SignerInfo): _137.SignerInfoAmino;
                fromAminoMsg(object: _137.SignerInfoAminoMsg): _137.SignerInfo;
                toAminoMsg(message: _137.SignerInfo): _137.SignerInfoAminoMsg;
                fromProtoMsg(message: _137.SignerInfoProtoMsg): _137.SignerInfo;
                toProto(message: _137.SignerInfo): Uint8Array;
                toProtoMsg(message: _137.SignerInfo): _137.SignerInfoProtoMsg;
            };
            ModeInfo: {
                typeUrl: string;
                encode(message: _137.ModeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _137.ModeInfo;
                fromPartial(object: Partial<_137.ModeInfo>): _137.ModeInfo;
                fromAmino(object: _137.ModeInfoAmino): _137.ModeInfo;
                toAmino(message: _137.ModeInfo): _137.ModeInfoAmino;
                fromAminoMsg(object: _137.ModeInfoAminoMsg): _137.ModeInfo;
                toAminoMsg(message: _137.ModeInfo): _137.ModeInfoAminoMsg;
                fromProtoMsg(message: _137.ModeInfoProtoMsg): _137.ModeInfo;
                toProto(message: _137.ModeInfo): Uint8Array;
                toProtoMsg(message: _137.ModeInfo): _137.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                typeUrl: string;
                encode(message: _137.ModeInfo_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _137.ModeInfo_Single;
                fromPartial(object: Partial<_137.ModeInfo_Single>): _137.ModeInfo_Single;
                fromAmino(object: _137.ModeInfo_SingleAmino): _137.ModeInfo_Single;
                toAmino(message: _137.ModeInfo_Single): _137.ModeInfo_SingleAmino;
                fromAminoMsg(object: _137.ModeInfo_SingleAminoMsg): _137.ModeInfo_Single;
                toAminoMsg(message: _137.ModeInfo_Single): _137.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _137.ModeInfo_SingleProtoMsg): _137.ModeInfo_Single;
                toProto(message: _137.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _137.ModeInfo_Single): _137.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                typeUrl: string;
                encode(message: _137.ModeInfo_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _137.ModeInfo_Multi;
                fromPartial(object: Partial<_137.ModeInfo_Multi>): _137.ModeInfo_Multi;
                fromAmino(object: _137.ModeInfo_MultiAmino): _137.ModeInfo_Multi;
                toAmino(message: _137.ModeInfo_Multi): _137.ModeInfo_MultiAmino;
                fromAminoMsg(object: _137.ModeInfo_MultiAminoMsg): _137.ModeInfo_Multi;
                toAminoMsg(message: _137.ModeInfo_Multi): _137.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _137.ModeInfo_MultiProtoMsg): _137.ModeInfo_Multi;
                toProto(message: _137.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _137.ModeInfo_Multi): _137.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                typeUrl: string;
                encode(message: _137.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _137.Fee;
                fromPartial(object: Partial<_137.Fee>): _137.Fee;
                fromAmino(object: _137.FeeAmino): _137.Fee;
                toAmino(message: _137.Fee): _137.FeeAmino;
                fromAminoMsg(object: _137.FeeAminoMsg): _137.Fee;
                toAminoMsg(message: _137.Fee): _137.FeeAminoMsg;
                fromProtoMsg(message: _137.FeeProtoMsg): _137.Fee;
                toProto(message: _137.Fee): Uint8Array;
                toProtoMsg(message: _137.Fee): _137.FeeProtoMsg;
            };
            Tip: {
                typeUrl: string;
                encode(message: _137.Tip, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _137.Tip;
                fromPartial(object: Partial<_137.Tip>): _137.Tip;
                fromAmino(object: _137.TipAmino): _137.Tip;
                toAmino(message: _137.Tip): _137.TipAmino;
                fromAminoMsg(object: _137.TipAminoMsg): _137.Tip;
                toAminoMsg(message: _137.Tip): _137.TipAminoMsg;
                fromProtoMsg(message: _137.TipProtoMsg): _137.Tip;
                toProto(message: _137.Tip): Uint8Array;
                toProtoMsg(message: _137.Tip): _137.TipProtoMsg;
            };
            AuxSignerData: {
                typeUrl: string;
                encode(message: _137.AuxSignerData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _137.AuxSignerData;
                fromPartial(object: Partial<_137.AuxSignerData>): _137.AuxSignerData;
                fromAmino(object: _137.AuxSignerDataAmino): _137.AuxSignerData;
                toAmino(message: _137.AuxSignerData): _137.AuxSignerDataAmino;
                fromAminoMsg(object: _137.AuxSignerDataAminoMsg): _137.AuxSignerData;
                toAminoMsg(message: _137.AuxSignerData): _137.AuxSignerDataAminoMsg;
                fromProtoMsg(message: _137.AuxSignerDataProtoMsg): _137.AuxSignerData;
                toProto(message: _137.AuxSignerData): Uint8Array;
                toProtoMsg(message: _137.AuxSignerData): _137.AuxSignerDataProtoMsg;
            };
            orderByFromJSON(object: any): _136.OrderBy;
            orderByToJSON(object: _136.OrderBy): string;
            broadcastModeFromJSON(object: any): _136.BroadcastMode;
            broadcastModeToJSON(object: _136.BroadcastMode): string;
            OrderBy: typeof _136.OrderBy;
            OrderBySDKType: typeof _136.OrderBy;
            OrderByAmino: typeof _136.OrderBy;
            BroadcastMode: typeof _136.BroadcastMode;
            BroadcastModeSDKType: typeof _136.BroadcastMode;
            BroadcastModeAmino: typeof _136.BroadcastMode;
            GetTxsEventRequest: {
                typeUrl: string;
                encode(message: _136.GetTxsEventRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _136.GetTxsEventRequest;
                fromPartial(object: Partial<_136.GetTxsEventRequest>): _136.GetTxsEventRequest;
                fromAmino(object: _136.GetTxsEventRequestAmino): _136.GetTxsEventRequest;
                toAmino(message: _136.GetTxsEventRequest): _136.GetTxsEventRequestAmino;
                fromAminoMsg(object: _136.GetTxsEventRequestAminoMsg): _136.GetTxsEventRequest;
                toAminoMsg(message: _136.GetTxsEventRequest): _136.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _136.GetTxsEventRequestProtoMsg): _136.GetTxsEventRequest;
                toProto(message: _136.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _136.GetTxsEventRequest): _136.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                typeUrl: string;
                encode(message: _136.GetTxsEventResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _136.GetTxsEventResponse;
                fromPartial(object: Partial<_136.GetTxsEventResponse>): _136.GetTxsEventResponse;
                fromAmino(object: _136.GetTxsEventResponseAmino): _136.GetTxsEventResponse;
                toAmino(message: _136.GetTxsEventResponse): _136.GetTxsEventResponseAmino;
                fromAminoMsg(object: _136.GetTxsEventResponseAminoMsg): _136.GetTxsEventResponse;
                toAminoMsg(message: _136.GetTxsEventResponse): _136.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _136.GetTxsEventResponseProtoMsg): _136.GetTxsEventResponse;
                toProto(message: _136.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _136.GetTxsEventResponse): _136.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                typeUrl: string;
                encode(message: _136.BroadcastTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _136.BroadcastTxRequest;
                fromPartial(object: Partial<_136.BroadcastTxRequest>): _136.BroadcastTxRequest;
                fromAmino(object: _136.BroadcastTxRequestAmino): _136.BroadcastTxRequest;
                toAmino(message: _136.BroadcastTxRequest): _136.BroadcastTxRequestAmino;
                fromAminoMsg(object: _136.BroadcastTxRequestAminoMsg): _136.BroadcastTxRequest;
                toAminoMsg(message: _136.BroadcastTxRequest): _136.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _136.BroadcastTxRequestProtoMsg): _136.BroadcastTxRequest;
                toProto(message: _136.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _136.BroadcastTxRequest): _136.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                typeUrl: string;
                encode(message: _136.BroadcastTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _136.BroadcastTxResponse;
                fromPartial(object: Partial<_136.BroadcastTxResponse>): _136.BroadcastTxResponse;
                fromAmino(object: _136.BroadcastTxResponseAmino): _136.BroadcastTxResponse;
                toAmino(message: _136.BroadcastTxResponse): _136.BroadcastTxResponseAmino;
                fromAminoMsg(object: _136.BroadcastTxResponseAminoMsg): _136.BroadcastTxResponse;
                toAminoMsg(message: _136.BroadcastTxResponse): _136.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _136.BroadcastTxResponseProtoMsg): _136.BroadcastTxResponse;
                toProto(message: _136.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _136.BroadcastTxResponse): _136.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                typeUrl: string;
                encode(message: _136.SimulateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _136.SimulateRequest;
                fromPartial(object: Partial<_136.SimulateRequest>): _136.SimulateRequest;
                fromAmino(object: _136.SimulateRequestAmino): _136.SimulateRequest;
                toAmino(message: _136.SimulateRequest): _136.SimulateRequestAmino;
                fromAminoMsg(object: _136.SimulateRequestAminoMsg): _136.SimulateRequest;
                toAminoMsg(message: _136.SimulateRequest): _136.SimulateRequestAminoMsg;
                fromProtoMsg(message: _136.SimulateRequestProtoMsg): _136.SimulateRequest;
                toProto(message: _136.SimulateRequest): Uint8Array;
                toProtoMsg(message: _136.SimulateRequest): _136.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                typeUrl: string;
                encode(message: _136.SimulateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _136.SimulateResponse;
                fromPartial(object: Partial<_136.SimulateResponse>): _136.SimulateResponse;
                fromAmino(object: _136.SimulateResponseAmino): _136.SimulateResponse;
                toAmino(message: _136.SimulateResponse): _136.SimulateResponseAmino;
                fromAminoMsg(object: _136.SimulateResponseAminoMsg): _136.SimulateResponse;
                toAminoMsg(message: _136.SimulateResponse): _136.SimulateResponseAminoMsg;
                fromProtoMsg(message: _136.SimulateResponseProtoMsg): _136.SimulateResponse;
                toProto(message: _136.SimulateResponse): Uint8Array;
                toProtoMsg(message: _136.SimulateResponse): _136.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                typeUrl: string;
                encode(message: _136.GetTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _136.GetTxRequest;
                fromPartial(object: Partial<_136.GetTxRequest>): _136.GetTxRequest;
                fromAmino(object: _136.GetTxRequestAmino): _136.GetTxRequest;
                toAmino(message: _136.GetTxRequest): _136.GetTxRequestAmino;
                fromAminoMsg(object: _136.GetTxRequestAminoMsg): _136.GetTxRequest;
                toAminoMsg(message: _136.GetTxRequest): _136.GetTxRequestAminoMsg;
                fromProtoMsg(message: _136.GetTxRequestProtoMsg): _136.GetTxRequest;
                toProto(message: _136.GetTxRequest): Uint8Array;
                toProtoMsg(message: _136.GetTxRequest): _136.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                typeUrl: string;
                encode(message: _136.GetTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _136.GetTxResponse;
                fromPartial(object: Partial<_136.GetTxResponse>): _136.GetTxResponse;
                fromAmino(object: _136.GetTxResponseAmino): _136.GetTxResponse;
                toAmino(message: _136.GetTxResponse): _136.GetTxResponseAmino;
                fromAminoMsg(object: _136.GetTxResponseAminoMsg): _136.GetTxResponse;
                toAminoMsg(message: _136.GetTxResponse): _136.GetTxResponseAminoMsg;
                fromProtoMsg(message: _136.GetTxResponseProtoMsg): _136.GetTxResponse;
                toProto(message: _136.GetTxResponse): Uint8Array;
                toProtoMsg(message: _136.GetTxResponse): _136.GetTxResponseProtoMsg;
            };
            GetBlockWithTxsRequest: {
                typeUrl: string;
                encode(message: _136.GetBlockWithTxsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _136.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_136.GetBlockWithTxsRequest>): _136.GetBlockWithTxsRequest;
                fromAmino(object: _136.GetBlockWithTxsRequestAmino): _136.GetBlockWithTxsRequest;
                toAmino(message: _136.GetBlockWithTxsRequest): _136.GetBlockWithTxsRequestAmino;
                fromAminoMsg(object: _136.GetBlockWithTxsRequestAminoMsg): _136.GetBlockWithTxsRequest;
                toAminoMsg(message: _136.GetBlockWithTxsRequest): _136.GetBlockWithTxsRequestAminoMsg;
                fromProtoMsg(message: _136.GetBlockWithTxsRequestProtoMsg): _136.GetBlockWithTxsRequest;
                toProto(message: _136.GetBlockWithTxsRequest): Uint8Array;
                toProtoMsg(message: _136.GetBlockWithTxsRequest): _136.GetBlockWithTxsRequestProtoMsg;
            };
            GetBlockWithTxsResponse: {
                typeUrl: string;
                encode(message: _136.GetBlockWithTxsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _136.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_136.GetBlockWithTxsResponse>): _136.GetBlockWithTxsResponse;
                fromAmino(object: _136.GetBlockWithTxsResponseAmino): _136.GetBlockWithTxsResponse;
                toAmino(message: _136.GetBlockWithTxsResponse): _136.GetBlockWithTxsResponseAmino;
                fromAminoMsg(object: _136.GetBlockWithTxsResponseAminoMsg): _136.GetBlockWithTxsResponse;
                toAminoMsg(message: _136.GetBlockWithTxsResponse): _136.GetBlockWithTxsResponseAminoMsg;
                fromProtoMsg(message: _136.GetBlockWithTxsResponseProtoMsg): _136.GetBlockWithTxsResponse;
                toProto(message: _136.GetBlockWithTxsResponse): Uint8Array;
                toProtoMsg(message: _136.GetBlockWithTxsResponse): _136.GetBlockWithTxsResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            MsgClientImpl: typeof _450.MsgClientImpl;
            QueryClientImpl: typeof _441.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _138.QueryCurrentPlanRequest): Promise<_138.QueryCurrentPlanResponse>;
                appliedPlan(request: _138.QueryAppliedPlanRequest): Promise<_138.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _138.QueryUpgradedConsensusStateRequest): Promise<_138.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _138.QueryModuleVersionsRequest): Promise<_138.QueryModuleVersionsResponse>;
                authority(request?: _138.QueryAuthorityRequest): Promise<_138.QueryAuthorityResponse>;
            };
            registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _139.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _139.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _139.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _139.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _139.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _139.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _139.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _139.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _139.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _139.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: (message: _139.MsgSoftwareUpgrade) => _139.MsgSoftwareUpgradeAmino;
                    fromAmino: (object: _139.MsgSoftwareUpgradeAmino) => _139.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: (message: _139.MsgCancelUpgrade) => _139.MsgCancelUpgradeAmino;
                    fromAmino: (object: _139.MsgCancelUpgradeAmino) => _139.MsgCancelUpgrade;
                };
            };
            Plan: {
                typeUrl: string;
                encode(message: _140.Plan, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _140.Plan;
                fromPartial(object: Partial<_140.Plan>): _140.Plan;
                fromAmino(object: _140.PlanAmino): _140.Plan;
                toAmino(message: _140.Plan): _140.PlanAmino;
                fromAminoMsg(object: _140.PlanAminoMsg): _140.Plan;
                toAminoMsg(message: _140.Plan): _140.PlanAminoMsg;
                fromProtoMsg(message: _140.PlanProtoMsg): _140.Plan;
                toProto(message: _140.Plan): Uint8Array;
                toProtoMsg(message: _140.Plan): _140.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _140.SoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _140.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_140.SoftwareUpgradeProposal>): _140.SoftwareUpgradeProposal;
                fromAmino(object: _140.SoftwareUpgradeProposalAmino): _140.SoftwareUpgradeProposal;
                toAmino(message: _140.SoftwareUpgradeProposal): _140.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _140.SoftwareUpgradeProposalAminoMsg): _140.SoftwareUpgradeProposal;
                toAminoMsg(message: _140.SoftwareUpgradeProposal): _140.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _140.SoftwareUpgradeProposalProtoMsg): _140.SoftwareUpgradeProposal;
                toProto(message: _140.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _140.SoftwareUpgradeProposal): _140.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _140.CancelSoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _140.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_140.CancelSoftwareUpgradeProposal>): _140.CancelSoftwareUpgradeProposal;
                fromAmino(object: _140.CancelSoftwareUpgradeProposalAmino): _140.CancelSoftwareUpgradeProposal;
                toAmino(message: _140.CancelSoftwareUpgradeProposal): _140.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _140.CancelSoftwareUpgradeProposalAminoMsg): _140.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _140.CancelSoftwareUpgradeProposal): _140.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _140.CancelSoftwareUpgradeProposalProtoMsg): _140.CancelSoftwareUpgradeProposal;
                toProto(message: _140.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _140.CancelSoftwareUpgradeProposal): _140.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                typeUrl: string;
                encode(message: _140.ModuleVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _140.ModuleVersion;
                fromPartial(object: Partial<_140.ModuleVersion>): _140.ModuleVersion;
                fromAmino(object: _140.ModuleVersionAmino): _140.ModuleVersion;
                toAmino(message: _140.ModuleVersion): _140.ModuleVersionAmino;
                fromAminoMsg(object: _140.ModuleVersionAminoMsg): _140.ModuleVersion;
                toAminoMsg(message: _140.ModuleVersion): _140.ModuleVersionAminoMsg;
                fromProtoMsg(message: _140.ModuleVersionProtoMsg): _140.ModuleVersion;
                toProto(message: _140.ModuleVersion): Uint8Array;
                toProtoMsg(message: _140.ModuleVersion): _140.ModuleVersionProtoMsg;
            };
            MsgSoftwareUpgrade: {
                typeUrl: string;
                encode(message: _139.MsgSoftwareUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _139.MsgSoftwareUpgrade;
                fromPartial(object: Partial<_139.MsgSoftwareUpgrade>): _139.MsgSoftwareUpgrade;
                fromAmino(object: _139.MsgSoftwareUpgradeAmino): _139.MsgSoftwareUpgrade;
                toAmino(message: _139.MsgSoftwareUpgrade): _139.MsgSoftwareUpgradeAmino;
                fromAminoMsg(object: _139.MsgSoftwareUpgradeAminoMsg): _139.MsgSoftwareUpgrade;
                toAminoMsg(message: _139.MsgSoftwareUpgrade): _139.MsgSoftwareUpgradeAminoMsg;
                fromProtoMsg(message: _139.MsgSoftwareUpgradeProtoMsg): _139.MsgSoftwareUpgrade;
                toProto(message: _139.MsgSoftwareUpgrade): Uint8Array;
                toProtoMsg(message: _139.MsgSoftwareUpgrade): _139.MsgSoftwareUpgradeProtoMsg;
            };
            MsgSoftwareUpgradeResponse: {
                typeUrl: string;
                encode(_: _139.MsgSoftwareUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _139.MsgSoftwareUpgradeResponse;
                fromPartial(_: Partial<_139.MsgSoftwareUpgradeResponse>): _139.MsgSoftwareUpgradeResponse;
                fromAmino(_: _139.MsgSoftwareUpgradeResponseAmino): _139.MsgSoftwareUpgradeResponse;
                toAmino(_: _139.MsgSoftwareUpgradeResponse): _139.MsgSoftwareUpgradeResponseAmino;
                fromAminoMsg(object: _139.MsgSoftwareUpgradeResponseAminoMsg): _139.MsgSoftwareUpgradeResponse;
                toAminoMsg(message: _139.MsgSoftwareUpgradeResponse): _139.MsgSoftwareUpgradeResponseAminoMsg;
                fromProtoMsg(message: _139.MsgSoftwareUpgradeResponseProtoMsg): _139.MsgSoftwareUpgradeResponse;
                toProto(message: _139.MsgSoftwareUpgradeResponse): Uint8Array;
                toProtoMsg(message: _139.MsgSoftwareUpgradeResponse): _139.MsgSoftwareUpgradeResponseProtoMsg;
            };
            MsgCancelUpgrade: {
                typeUrl: string;
                encode(message: _139.MsgCancelUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _139.MsgCancelUpgrade;
                fromPartial(object: Partial<_139.MsgCancelUpgrade>): _139.MsgCancelUpgrade;
                fromAmino(object: _139.MsgCancelUpgradeAmino): _139.MsgCancelUpgrade;
                toAmino(message: _139.MsgCancelUpgrade): _139.MsgCancelUpgradeAmino;
                fromAminoMsg(object: _139.MsgCancelUpgradeAminoMsg): _139.MsgCancelUpgrade;
                toAminoMsg(message: _139.MsgCancelUpgrade): _139.MsgCancelUpgradeAminoMsg;
                fromProtoMsg(message: _139.MsgCancelUpgradeProtoMsg): _139.MsgCancelUpgrade;
                toProto(message: _139.MsgCancelUpgrade): Uint8Array;
                toProtoMsg(message: _139.MsgCancelUpgrade): _139.MsgCancelUpgradeProtoMsg;
            };
            MsgCancelUpgradeResponse: {
                typeUrl: string;
                encode(_: _139.MsgCancelUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _139.MsgCancelUpgradeResponse;
                fromPartial(_: Partial<_139.MsgCancelUpgradeResponse>): _139.MsgCancelUpgradeResponse;
                fromAmino(_: _139.MsgCancelUpgradeResponseAmino): _139.MsgCancelUpgradeResponse;
                toAmino(_: _139.MsgCancelUpgradeResponse): _139.MsgCancelUpgradeResponseAmino;
                fromAminoMsg(object: _139.MsgCancelUpgradeResponseAminoMsg): _139.MsgCancelUpgradeResponse;
                toAminoMsg(message: _139.MsgCancelUpgradeResponse): _139.MsgCancelUpgradeResponseAminoMsg;
                fromProtoMsg(message: _139.MsgCancelUpgradeResponseProtoMsg): _139.MsgCancelUpgradeResponse;
                toProto(message: _139.MsgCancelUpgradeResponse): Uint8Array;
                toProtoMsg(message: _139.MsgCancelUpgradeResponse): _139.MsgCancelUpgradeResponseProtoMsg;
            };
            QueryCurrentPlanRequest: {
                typeUrl: string;
                encode(_: _138.QueryCurrentPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _138.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_138.QueryCurrentPlanRequest>): _138.QueryCurrentPlanRequest;
                fromAmino(_: _138.QueryCurrentPlanRequestAmino): _138.QueryCurrentPlanRequest;
                toAmino(_: _138.QueryCurrentPlanRequest): _138.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _138.QueryCurrentPlanRequestAminoMsg): _138.QueryCurrentPlanRequest;
                toAminoMsg(message: _138.QueryCurrentPlanRequest): _138.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _138.QueryCurrentPlanRequestProtoMsg): _138.QueryCurrentPlanRequest;
                toProto(message: _138.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _138.QueryCurrentPlanRequest): _138.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                typeUrl: string;
                encode(message: _138.QueryCurrentPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _138.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_138.QueryCurrentPlanResponse>): _138.QueryCurrentPlanResponse;
                fromAmino(object: _138.QueryCurrentPlanResponseAmino): _138.QueryCurrentPlanResponse;
                toAmino(message: _138.QueryCurrentPlanResponse): _138.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _138.QueryCurrentPlanResponseAminoMsg): _138.QueryCurrentPlanResponse;
                toAminoMsg(message: _138.QueryCurrentPlanResponse): _138.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _138.QueryCurrentPlanResponseProtoMsg): _138.QueryCurrentPlanResponse;
                toProto(message: _138.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _138.QueryCurrentPlanResponse): _138.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                typeUrl: string;
                encode(message: _138.QueryAppliedPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _138.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_138.QueryAppliedPlanRequest>): _138.QueryAppliedPlanRequest;
                fromAmino(object: _138.QueryAppliedPlanRequestAmino): _138.QueryAppliedPlanRequest;
                toAmino(message: _138.QueryAppliedPlanRequest): _138.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _138.QueryAppliedPlanRequestAminoMsg): _138.QueryAppliedPlanRequest;
                toAminoMsg(message: _138.QueryAppliedPlanRequest): _138.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _138.QueryAppliedPlanRequestProtoMsg): _138.QueryAppliedPlanRequest;
                toProto(message: _138.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _138.QueryAppliedPlanRequest): _138.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                typeUrl: string;
                encode(message: _138.QueryAppliedPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _138.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_138.QueryAppliedPlanResponse>): _138.QueryAppliedPlanResponse;
                fromAmino(object: _138.QueryAppliedPlanResponseAmino): _138.QueryAppliedPlanResponse;
                toAmino(message: _138.QueryAppliedPlanResponse): _138.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _138.QueryAppliedPlanResponseAminoMsg): _138.QueryAppliedPlanResponse;
                toAminoMsg(message: _138.QueryAppliedPlanResponse): _138.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _138.QueryAppliedPlanResponseProtoMsg): _138.QueryAppliedPlanResponse;
                toProto(message: _138.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _138.QueryAppliedPlanResponse): _138.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                typeUrl: string;
                encode(message: _138.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _138.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_138.QueryUpgradedConsensusStateRequest>): _138.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _138.QueryUpgradedConsensusStateRequestAmino): _138.QueryUpgradedConsensusStateRequest;
                toAmino(message: _138.QueryUpgradedConsensusStateRequest): _138.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _138.QueryUpgradedConsensusStateRequestAminoMsg): _138.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _138.QueryUpgradedConsensusStateRequest): _138.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _138.QueryUpgradedConsensusStateRequestProtoMsg): _138.QueryUpgradedConsensusStateRequest;
                toProto(message: _138.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _138.QueryUpgradedConsensusStateRequest): _138.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                typeUrl: string;
                encode(message: _138.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _138.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_138.QueryUpgradedConsensusStateResponse>): _138.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _138.QueryUpgradedConsensusStateResponseAmino): _138.QueryUpgradedConsensusStateResponse;
                toAmino(message: _138.QueryUpgradedConsensusStateResponse): _138.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _138.QueryUpgradedConsensusStateResponseAminoMsg): _138.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _138.QueryUpgradedConsensusStateResponse): _138.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _138.QueryUpgradedConsensusStateResponseProtoMsg): _138.QueryUpgradedConsensusStateResponse;
                toProto(message: _138.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _138.QueryUpgradedConsensusStateResponse): _138.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                typeUrl: string;
                encode(message: _138.QueryModuleVersionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _138.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_138.QueryModuleVersionsRequest>): _138.QueryModuleVersionsRequest;
                fromAmino(object: _138.QueryModuleVersionsRequestAmino): _138.QueryModuleVersionsRequest;
                toAmino(message: _138.QueryModuleVersionsRequest): _138.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _138.QueryModuleVersionsRequestAminoMsg): _138.QueryModuleVersionsRequest;
                toAminoMsg(message: _138.QueryModuleVersionsRequest): _138.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _138.QueryModuleVersionsRequestProtoMsg): _138.QueryModuleVersionsRequest;
                toProto(message: _138.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _138.QueryModuleVersionsRequest): _138.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                typeUrl: string;
                encode(message: _138.QueryModuleVersionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _138.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_138.QueryModuleVersionsResponse>): _138.QueryModuleVersionsResponse;
                fromAmino(object: _138.QueryModuleVersionsResponseAmino): _138.QueryModuleVersionsResponse;
                toAmino(message: _138.QueryModuleVersionsResponse): _138.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _138.QueryModuleVersionsResponseAminoMsg): _138.QueryModuleVersionsResponse;
                toAminoMsg(message: _138.QueryModuleVersionsResponse): _138.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _138.QueryModuleVersionsResponseProtoMsg): _138.QueryModuleVersionsResponse;
                toProto(message: _138.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _138.QueryModuleVersionsResponse): _138.QueryModuleVersionsResponseProtoMsg;
            };
            QueryAuthorityRequest: {
                typeUrl: string;
                encode(_: _138.QueryAuthorityRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _138.QueryAuthorityRequest;
                fromPartial(_: Partial<_138.QueryAuthorityRequest>): _138.QueryAuthorityRequest;
                fromAmino(_: _138.QueryAuthorityRequestAmino): _138.QueryAuthorityRequest;
                toAmino(_: _138.QueryAuthorityRequest): _138.QueryAuthorityRequestAmino;
                fromAminoMsg(object: _138.QueryAuthorityRequestAminoMsg): _138.QueryAuthorityRequest;
                toAminoMsg(message: _138.QueryAuthorityRequest): _138.QueryAuthorityRequestAminoMsg;
                fromProtoMsg(message: _138.QueryAuthorityRequestProtoMsg): _138.QueryAuthorityRequest;
                toProto(message: _138.QueryAuthorityRequest): Uint8Array;
                toProtoMsg(message: _138.QueryAuthorityRequest): _138.QueryAuthorityRequestProtoMsg;
            };
            QueryAuthorityResponse: {
                typeUrl: string;
                encode(message: _138.QueryAuthorityResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _138.QueryAuthorityResponse;
                fromPartial(object: Partial<_138.QueryAuthorityResponse>): _138.QueryAuthorityResponse;
                fromAmino(object: _138.QueryAuthorityResponseAmino): _138.QueryAuthorityResponse;
                toAmino(message: _138.QueryAuthorityResponse): _138.QueryAuthorityResponseAmino;
                fromAminoMsg(object: _138.QueryAuthorityResponseAminoMsg): _138.QueryAuthorityResponse;
                toAminoMsg(message: _138.QueryAuthorityResponse): _138.QueryAuthorityResponseAminoMsg;
                fromProtoMsg(message: _138.QueryAuthorityResponseProtoMsg): _138.QueryAuthorityResponse;
                toProto(message: _138.QueryAuthorityResponse): Uint8Array;
                toProtoMsg(message: _138.QueryAuthorityResponse): _138.QueryAuthorityResponseProtoMsg;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _451.MsgClientImpl;
            registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _141.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPermanentLockedAccount(value: _141.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _141.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _141.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _141.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _141.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _141.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _141.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _141.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _141.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _141.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _141.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _141.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _141.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _141.MsgCreatePeriodicVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _141.MsgCreateVestingAccount) => _141.MsgCreateVestingAccountAmino;
                    fromAmino: (object: _141.MsgCreateVestingAccountAmino) => _141.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: (message: _141.MsgCreatePermanentLockedAccount) => _141.MsgCreatePermanentLockedAccountAmino;
                    fromAmino: (object: _141.MsgCreatePermanentLockedAccountAmino) => _141.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _141.MsgCreatePeriodicVestingAccount) => _141.MsgCreatePeriodicVestingAccountAmino;
                    fromAmino: (object: _141.MsgCreatePeriodicVestingAccountAmino) => _141.MsgCreatePeriodicVestingAccount;
                };
            };
            BaseVestingAccount: {
                typeUrl: string;
                encode(message: _142.BaseVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _142.BaseVestingAccount;
                fromPartial(object: Partial<_142.BaseVestingAccount>): _142.BaseVestingAccount;
                fromAmino(object: _142.BaseVestingAccountAmino): _142.BaseVestingAccount;
                toAmino(message: _142.BaseVestingAccount): _142.BaseVestingAccountAmino;
                fromAminoMsg(object: _142.BaseVestingAccountAminoMsg): _142.BaseVestingAccount;
                toAminoMsg(message: _142.BaseVestingAccount): _142.BaseVestingAccountAminoMsg;
                fromProtoMsg(message: _142.BaseVestingAccountProtoMsg): _142.BaseVestingAccount;
                toProto(message: _142.BaseVestingAccount): Uint8Array;
                toProtoMsg(message: _142.BaseVestingAccount): _142.BaseVestingAccountProtoMsg;
            };
            ContinuousVestingAccount: {
                typeUrl: string;
                encode(message: _142.ContinuousVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _142.ContinuousVestingAccount;
                fromPartial(object: Partial<_142.ContinuousVestingAccount>): _142.ContinuousVestingAccount;
                fromAmino(object: _142.ContinuousVestingAccountAmino): _142.ContinuousVestingAccount;
                toAmino(message: _142.ContinuousVestingAccount): _142.ContinuousVestingAccountAmino;
                fromAminoMsg(object: _142.ContinuousVestingAccountAminoMsg): _142.ContinuousVestingAccount;
                toAminoMsg(message: _142.ContinuousVestingAccount): _142.ContinuousVestingAccountAminoMsg;
                fromProtoMsg(message: _142.ContinuousVestingAccountProtoMsg): _142.ContinuousVestingAccount;
                toProto(message: _142.ContinuousVestingAccount): Uint8Array;
                toProtoMsg(message: _142.ContinuousVestingAccount): _142.ContinuousVestingAccountProtoMsg;
            };
            DelayedVestingAccount: {
                typeUrl: string;
                encode(message: _142.DelayedVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _142.DelayedVestingAccount;
                fromPartial(object: Partial<_142.DelayedVestingAccount>): _142.DelayedVestingAccount;
                fromAmino(object: _142.DelayedVestingAccountAmino): _142.DelayedVestingAccount;
                toAmino(message: _142.DelayedVestingAccount): _142.DelayedVestingAccountAmino;
                fromAminoMsg(object: _142.DelayedVestingAccountAminoMsg): _142.DelayedVestingAccount;
                toAminoMsg(message: _142.DelayedVestingAccount): _142.DelayedVestingAccountAminoMsg;
                fromProtoMsg(message: _142.DelayedVestingAccountProtoMsg): _142.DelayedVestingAccount;
                toProto(message: _142.DelayedVestingAccount): Uint8Array;
                toProtoMsg(message: _142.DelayedVestingAccount): _142.DelayedVestingAccountProtoMsg;
            };
            Period: {
                typeUrl: string;
                encode(message: _142.Period, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _142.Period;
                fromPartial(object: Partial<_142.Period>): _142.Period;
                fromAmino(object: _142.PeriodAmino): _142.Period;
                toAmino(message: _142.Period): _142.PeriodAmino;
                fromAminoMsg(object: _142.PeriodAminoMsg): _142.Period;
                toAminoMsg(message: _142.Period): _142.PeriodAminoMsg;
                fromProtoMsg(message: _142.PeriodProtoMsg): _142.Period;
                toProto(message: _142.Period): Uint8Array;
                toProtoMsg(message: _142.Period): _142.PeriodProtoMsg;
            };
            PeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _142.PeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _142.PeriodicVestingAccount;
                fromPartial(object: Partial<_142.PeriodicVestingAccount>): _142.PeriodicVestingAccount;
                fromAmino(object: _142.PeriodicVestingAccountAmino): _142.PeriodicVestingAccount;
                toAmino(message: _142.PeriodicVestingAccount): _142.PeriodicVestingAccountAmino;
                fromAminoMsg(object: _142.PeriodicVestingAccountAminoMsg): _142.PeriodicVestingAccount;
                toAminoMsg(message: _142.PeriodicVestingAccount): _142.PeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _142.PeriodicVestingAccountProtoMsg): _142.PeriodicVestingAccount;
                toProto(message: _142.PeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _142.PeriodicVestingAccount): _142.PeriodicVestingAccountProtoMsg;
            };
            PermanentLockedAccount: {
                typeUrl: string;
                encode(message: _142.PermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _142.PermanentLockedAccount;
                fromPartial(object: Partial<_142.PermanentLockedAccount>): _142.PermanentLockedAccount;
                fromAmino(object: _142.PermanentLockedAccountAmino): _142.PermanentLockedAccount;
                toAmino(message: _142.PermanentLockedAccount): _142.PermanentLockedAccountAmino;
                fromAminoMsg(object: _142.PermanentLockedAccountAminoMsg): _142.PermanentLockedAccount;
                toAminoMsg(message: _142.PermanentLockedAccount): _142.PermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _142.PermanentLockedAccountProtoMsg): _142.PermanentLockedAccount;
                toProto(message: _142.PermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _142.PermanentLockedAccount): _142.PermanentLockedAccountProtoMsg;
            };
            MsgCreateVestingAccount: {
                typeUrl: string;
                encode(message: _141.MsgCreateVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _141.MsgCreateVestingAccount;
                fromPartial(object: Partial<_141.MsgCreateVestingAccount>): _141.MsgCreateVestingAccount;
                fromAmino(object: _141.MsgCreateVestingAccountAmino): _141.MsgCreateVestingAccount;
                toAmino(message: _141.MsgCreateVestingAccount): _141.MsgCreateVestingAccountAmino;
                fromAminoMsg(object: _141.MsgCreateVestingAccountAminoMsg): _141.MsgCreateVestingAccount;
                toAminoMsg(message: _141.MsgCreateVestingAccount): _141.MsgCreateVestingAccountAminoMsg;
                fromProtoMsg(message: _141.MsgCreateVestingAccountProtoMsg): _141.MsgCreateVestingAccount;
                toProto(message: _141.MsgCreateVestingAccount): Uint8Array;
                toProtoMsg(message: _141.MsgCreateVestingAccount): _141.MsgCreateVestingAccountProtoMsg;
            };
            MsgCreateVestingAccountResponse: {
                typeUrl: string;
                encode(_: _141.MsgCreateVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _141.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_141.MsgCreateVestingAccountResponse>): _141.MsgCreateVestingAccountResponse;
                fromAmino(_: _141.MsgCreateVestingAccountResponseAmino): _141.MsgCreateVestingAccountResponse;
                toAmino(_: _141.MsgCreateVestingAccountResponse): _141.MsgCreateVestingAccountResponseAmino;
                fromAminoMsg(object: _141.MsgCreateVestingAccountResponseAminoMsg): _141.MsgCreateVestingAccountResponse;
                toAminoMsg(message: _141.MsgCreateVestingAccountResponse): _141.MsgCreateVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _141.MsgCreateVestingAccountResponseProtoMsg): _141.MsgCreateVestingAccountResponse;
                toProto(message: _141.MsgCreateVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _141.MsgCreateVestingAccountResponse): _141.MsgCreateVestingAccountResponseProtoMsg;
            };
            MsgCreatePermanentLockedAccount: {
                typeUrl: string;
                encode(message: _141.MsgCreatePermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _141.MsgCreatePermanentLockedAccount;
                fromPartial(object: Partial<_141.MsgCreatePermanentLockedAccount>): _141.MsgCreatePermanentLockedAccount;
                fromAmino(object: _141.MsgCreatePermanentLockedAccountAmino): _141.MsgCreatePermanentLockedAccount;
                toAmino(message: _141.MsgCreatePermanentLockedAccount): _141.MsgCreatePermanentLockedAccountAmino;
                fromAminoMsg(object: _141.MsgCreatePermanentLockedAccountAminoMsg): _141.MsgCreatePermanentLockedAccount;
                toAminoMsg(message: _141.MsgCreatePermanentLockedAccount): _141.MsgCreatePermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _141.MsgCreatePermanentLockedAccountProtoMsg): _141.MsgCreatePermanentLockedAccount;
                toProto(message: _141.MsgCreatePermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _141.MsgCreatePermanentLockedAccount): _141.MsgCreatePermanentLockedAccountProtoMsg;
            };
            MsgCreatePermanentLockedAccountResponse: {
                typeUrl: string;
                encode(_: _141.MsgCreatePermanentLockedAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _141.MsgCreatePermanentLockedAccountResponse;
                fromPartial(_: Partial<_141.MsgCreatePermanentLockedAccountResponse>): _141.MsgCreatePermanentLockedAccountResponse;
                fromAmino(_: _141.MsgCreatePermanentLockedAccountResponseAmino): _141.MsgCreatePermanentLockedAccountResponse;
                toAmino(_: _141.MsgCreatePermanentLockedAccountResponse): _141.MsgCreatePermanentLockedAccountResponseAmino;
                fromAminoMsg(object: _141.MsgCreatePermanentLockedAccountResponseAminoMsg): _141.MsgCreatePermanentLockedAccountResponse;
                toAminoMsg(message: _141.MsgCreatePermanentLockedAccountResponse): _141.MsgCreatePermanentLockedAccountResponseAminoMsg;
                fromProtoMsg(message: _141.MsgCreatePermanentLockedAccountResponseProtoMsg): _141.MsgCreatePermanentLockedAccountResponse;
                toProto(message: _141.MsgCreatePermanentLockedAccountResponse): Uint8Array;
                toProtoMsg(message: _141.MsgCreatePermanentLockedAccountResponse): _141.MsgCreatePermanentLockedAccountResponseProtoMsg;
            };
            MsgCreatePeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _141.MsgCreatePeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _141.MsgCreatePeriodicVestingAccount;
                fromPartial(object: Partial<_141.MsgCreatePeriodicVestingAccount>): _141.MsgCreatePeriodicVestingAccount;
                fromAmino(object: _141.MsgCreatePeriodicVestingAccountAmino): _141.MsgCreatePeriodicVestingAccount;
                toAmino(message: _141.MsgCreatePeriodicVestingAccount): _141.MsgCreatePeriodicVestingAccountAmino;
                fromAminoMsg(object: _141.MsgCreatePeriodicVestingAccountAminoMsg): _141.MsgCreatePeriodicVestingAccount;
                toAminoMsg(message: _141.MsgCreatePeriodicVestingAccount): _141.MsgCreatePeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _141.MsgCreatePeriodicVestingAccountProtoMsg): _141.MsgCreatePeriodicVestingAccount;
                toProto(message: _141.MsgCreatePeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _141.MsgCreatePeriodicVestingAccount): _141.MsgCreatePeriodicVestingAccountProtoMsg;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                typeUrl: string;
                encode(_: _141.MsgCreatePeriodicVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _141.MsgCreatePeriodicVestingAccountResponse;
                fromPartial(_: Partial<_141.MsgCreatePeriodicVestingAccountResponse>): _141.MsgCreatePeriodicVestingAccountResponse;
                fromAmino(_: _141.MsgCreatePeriodicVestingAccountResponseAmino): _141.MsgCreatePeriodicVestingAccountResponse;
                toAmino(_: _141.MsgCreatePeriodicVestingAccountResponse): _141.MsgCreatePeriodicVestingAccountResponseAmino;
                fromAminoMsg(object: _141.MsgCreatePeriodicVestingAccountResponseAminoMsg): _141.MsgCreatePeriodicVestingAccountResponse;
                toAminoMsg(message: _141.MsgCreatePeriodicVestingAccountResponse): _141.MsgCreatePeriodicVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _141.MsgCreatePeriodicVestingAccountResponseProtoMsg): _141.MsgCreatePeriodicVestingAccountResponse;
                toProto(message: _141.MsgCreatePeriodicVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _141.MsgCreatePeriodicVestingAccountResponse): _141.MsgCreatePeriodicVestingAccountResponseProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _442.MsgClientImpl;
                };
                bank: {
                    v1beta1: _443.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _444.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _445.MsgClientImpl;
                };
                gov: {
                    v1: _446.MsgClientImpl;
                    v1beta1: _447.MsgClientImpl;
                };
                group: {
                    v1: _448.MsgClientImpl;
                };
                staking: {
                    v1beta1: _449.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _450.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _451.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: _83.QueryAccountsRequest): Promise<_83.QueryAccountsResponse>;
                        account(request: _83.QueryAccountRequest): Promise<_83.QueryAccountResponse>;
                        params(request?: _83.QueryParamsRequest): Promise<_83.QueryParamsResponse>;
                        moduleAccounts(request?: _83.QueryModuleAccountsRequest): Promise<_83.QueryModuleAccountsResponse>;
                        bech32Prefix(request?: _83.Bech32PrefixRequest): Promise<_83.Bech32PrefixResponse>;
                        addressBytesToString(request: _83.AddressBytesToStringRequest): Promise<_83.AddressBytesToStringResponse>;
                        addressStringToBytes(request: _83.AddressStringToBytesRequest): Promise<_83.AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _87.QueryGrantsRequest): Promise<_87.QueryGrantsResponse>;
                        granterGrants(request: _87.QueryGranterGrantsRequest): Promise<_87.QueryGranterGrantsResponse>;
                        granteeGrants(request: _87.QueryGranteeGrantsRequest): Promise<_87.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _92.QueryBalanceRequest): Promise<_92.QueryBalanceResponse>;
                        allBalances(request: _92.QueryAllBalancesRequest): Promise<_92.QueryAllBalancesResponse>;
                        spendableBalances(request: _92.QuerySpendableBalancesRequest): Promise<_92.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _92.QueryTotalSupplyRequest): Promise<_92.QueryTotalSupplyResponse>;
                        supplyOf(request: _92.QuerySupplyOfRequest): Promise<_92.QuerySupplyOfResponse>;
                        params(request?: _92.QueryParamsRequest): Promise<_92.QueryParamsResponse>;
                        denomMetadata(request: _92.QueryDenomMetadataRequest): Promise<_92.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _92.QueryDenomsMetadataRequest): Promise<_92.QueryDenomsMetadataResponse>;
                        denomOwners(request: _92.QueryDenomOwnersRequest): Promise<_92.QueryDenomOwnersResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _106.QueryParamsRequest): Promise<_106.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _106.QueryValidatorOutstandingRewardsRequest): Promise<_106.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _106.QueryValidatorCommissionRequest): Promise<_106.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _106.QueryValidatorSlashesRequest): Promise<_106.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _106.QueryDelegationRewardsRequest): Promise<_106.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _106.QueryDelegationTotalRewardsRequest): Promise<_106.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _106.QueryDelegatorValidatorsRequest): Promise<_106.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _106.QueryDelegatorWithdrawAddressRequest): Promise<_106.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _106.QueryCommunityPoolRequest): Promise<_106.QueryCommunityPoolResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _110.QueryAllowanceRequest): Promise<_110.QueryAllowanceResponse>;
                        allowances(request: _110.QueryAllowancesRequest): Promise<_110.QueryAllowancesResponse>;
                        allowancesByGranter(request: _110.QueryAllowancesByGranterRequest): Promise<_110.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: _114.QueryProposalRequest): Promise<_114.QueryProposalResponse>;
                        proposals(request: _114.QueryProposalsRequest): Promise<_114.QueryProposalsResponse>;
                        vote(request: _114.QueryVoteRequest): Promise<_114.QueryVoteResponse>;
                        votes(request: _114.QueryVotesRequest): Promise<_114.QueryVotesResponse>;
                        params(request: _114.QueryParamsRequest): Promise<_114.QueryParamsResponse>;
                        deposit(request: _114.QueryDepositRequest): Promise<_114.QueryDepositResponse>;
                        deposits(request: _114.QueryDepositsRequest): Promise<_114.QueryDepositsResponse>;
                        tallyResult(request: _114.QueryTallyResultRequest): Promise<_114.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _118.QueryProposalRequest): Promise<_118.QueryProposalResponse>;
                        proposals(request: _118.QueryProposalsRequest): Promise<_118.QueryProposalsResponse>;
                        vote(request: _118.QueryVoteRequest): Promise<_118.QueryVoteResponse>;
                        votes(request: _118.QueryVotesRequest): Promise<_118.QueryVotesResponse>;
                        params(request: _118.QueryParamsRequest): Promise<_118.QueryParamsResponse>;
                        deposit(request: _118.QueryDepositRequest): Promise<_118.QueryDepositResponse>;
                        deposits(request: _118.QueryDepositsRequest): Promise<_118.QueryDepositsResponse>;
                        tallyResult(request: _118.QueryTallyResultRequest): Promise<_118.QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: _122.QueryGroupInfoRequest): Promise<_122.QueryGroupInfoResponse>;
                        groupPolicyInfo(request: _122.QueryGroupPolicyInfoRequest): Promise<_122.QueryGroupPolicyInfoResponse>;
                        groupMembers(request: _122.QueryGroupMembersRequest): Promise<_122.QueryGroupMembersResponse>;
                        groupsByAdmin(request: _122.QueryGroupsByAdminRequest): Promise<_122.QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: _122.QueryGroupPoliciesByGroupRequest): Promise<_122.QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: _122.QueryGroupPoliciesByAdminRequest): Promise<_122.QueryGroupPoliciesByAdminResponse>;
                        proposal(request: _122.QueryProposalRequest): Promise<_122.QueryProposalResponse>;
                        proposalsByGroupPolicy(request: _122.QueryProposalsByGroupPolicyRequest): Promise<_122.QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: _122.QueryVoteByProposalVoterRequest): Promise<_122.QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: _122.QueryVotesByProposalRequest): Promise<_122.QueryVotesByProposalResponse>;
                        votesByVoter(request: _122.QueryVotesByVoterRequest): Promise<_122.QueryVotesByVoterResponse>;
                        groupsByMember(request: _122.QueryGroupsByMemberRequest): Promise<_122.QueryGroupsByMemberResponse>;
                        tallyResult(request: _122.QueryTallyResultRequest): Promise<_122.QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _127.QueryParamsRequest): Promise<_127.QueryParamsResponse>;
                        inflation(request?: _127.QueryInflationRequest): Promise<_127.QueryInflationResponse>;
                        annualProvisions(request?: _127.QueryAnnualProvisionsRequest): Promise<_127.QueryAnnualProvisionsResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _129.QueryParamsRequest): Promise<_129.QueryParamsResponse>;
                        subspaces(request?: _129.QuerySubspacesRequest): Promise<_129.QuerySubspacesResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _132.QueryValidatorsRequest): Promise<_132.QueryValidatorsResponse>;
                        validator(request: _132.QueryValidatorRequest): Promise<_132.QueryValidatorResponse>;
                        validatorDelegations(request: _132.QueryValidatorDelegationsRequest): Promise<_132.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _132.QueryValidatorUnbondingDelegationsRequest): Promise<_132.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _132.QueryDelegationRequest): Promise<_132.QueryDelegationResponse>;
                        unbondingDelegation(request: _132.QueryUnbondingDelegationRequest): Promise<_132.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _132.QueryDelegatorDelegationsRequest): Promise<_132.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _132.QueryDelegatorUnbondingDelegationsRequest): Promise<_132.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _132.QueryRedelegationsRequest): Promise<_132.QueryRedelegationsResponse>;
                        delegatorValidators(request: _132.QueryDelegatorValidatorsRequest): Promise<_132.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _132.QueryDelegatorValidatorRequest): Promise<_132.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _132.QueryHistoricalInfoRequest): Promise<_132.QueryHistoricalInfoResponse>;
                        pool(request?: _132.QueryPoolRequest): Promise<_132.QueryPoolResponse>;
                        params(request?: _132.QueryParamsRequest): Promise<_132.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _136.SimulateRequest): Promise<_136.SimulateResponse>;
                        getTx(request: _136.GetTxRequest): Promise<_136.GetTxResponse>;
                        broadcastTx(request: _136.BroadcastTxRequest): Promise<_136.BroadcastTxResponse>;
                        getTxsEvent(request: _136.GetTxsEventRequest): Promise<_136.GetTxsEventResponse>;
                        getBlockWithTxs(request: _136.GetBlockWithTxsRequest): Promise<_136.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _138.QueryCurrentPlanRequest): Promise<_138.QueryCurrentPlanResponse>;
                        appliedPlan(request: _138.QueryAppliedPlanRequest): Promise<_138.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _138.QueryUpgradedConsensusStateRequest): Promise<_138.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _138.QueryModuleVersionsRequest): Promise<_138.QueryModuleVersionsResponse>;
                        authority(request?: _138.QueryAuthorityRequest): Promise<_138.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
    };
}
