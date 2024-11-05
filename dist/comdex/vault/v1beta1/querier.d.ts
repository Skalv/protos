import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { BinaryReader, BinaryWriter } from "../../../binary";
export interface VaultInfo {
    id: bigint;
    pairId: bigint;
    owner: string;
    collateral: Coin;
    debt: Coin;
    collateralizationRatio: string;
}
export interface VaultInfoProtoMsg {
    typeUrl: "/comdex.vault.v1beta1.VaultInfo";
    value: Uint8Array;
}
export interface VaultInfoAmino {
    id?: string;
    pair_id?: string;
    owner?: string;
    collateral?: CoinAmino;
    debt?: CoinAmino;
    collateralization_ratio?: string;
}
export interface VaultInfoAminoMsg {
    type: "/comdex.vault.v1beta1.VaultInfo";
    value: VaultInfoAmino;
}
export interface VaultInfoSDKType {
    id: bigint;
    pair_id: bigint;
    owner: string;
    collateral: CoinSDKType;
    debt: CoinSDKType;
    collateralization_ratio: string;
}
export interface QueryVaultRequest {
    id: bigint;
}
export interface QueryVaultRequestProtoMsg {
    typeUrl: "/comdex.vault.v1beta1.QueryVaultRequest";
    value: Uint8Array;
}
export interface QueryVaultRequestAmino {
    id?: string;
}
export interface QueryVaultRequestAminoMsg {
    type: "/comdex.vault.v1beta1.QueryVaultRequest";
    value: QueryVaultRequestAmino;
}
export interface QueryVaultRequestSDKType {
    id: bigint;
}
export interface QueryVaultResponse {
    vaultInfo: VaultInfo;
}
export interface QueryVaultResponseProtoMsg {
    typeUrl: "/comdex.vault.v1beta1.QueryVaultResponse";
    value: Uint8Array;
}
export interface QueryVaultResponseAmino {
    vaultInfo?: VaultInfoAmino;
}
export interface QueryVaultResponseAminoMsg {
    type: "/comdex.vault.v1beta1.QueryVaultResponse";
    value: QueryVaultResponseAmino;
}
export interface QueryVaultResponseSDKType {
    vaultInfo: VaultInfoSDKType;
}
export interface QueryVaultsRequest {
    owner: string;
    pagination?: PageRequest;
}
export interface QueryVaultsRequestProtoMsg {
    typeUrl: "/comdex.vault.v1beta1.QueryVaultsRequest";
    value: Uint8Array;
}
export interface QueryVaultsRequestAmino {
    owner?: string;
    pagination?: PageRequestAmino;
}
export interface QueryVaultsRequestAminoMsg {
    type: "/comdex.vault.v1beta1.QueryVaultsRequest";
    value: QueryVaultsRequestAmino;
}
export interface QueryVaultsRequestSDKType {
    owner: string;
    pagination?: PageRequestSDKType;
}
export interface QueryVaultsResponse {
    vaultsInfo: VaultInfo[];
    pagination?: PageResponse;
}
export interface QueryVaultsResponseProtoMsg {
    typeUrl: "/comdex.vault.v1beta1.QueryVaultsResponse";
    value: Uint8Array;
}
export interface QueryVaultsResponseAmino {
    vaultsInfo?: VaultInfoAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryVaultsResponseAminoMsg {
    type: "/comdex.vault.v1beta1.QueryVaultsResponse";
    value: QueryVaultsResponseAmino;
}
export interface QueryVaultsResponseSDKType {
    vaultsInfo: VaultInfoSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryAllVaultsRequest {
    pagination?: PageRequest;
}
export interface QueryAllVaultsRequestProtoMsg {
    typeUrl: "/comdex.vault.v1beta1.QueryAllVaultsRequest";
    value: Uint8Array;
}
export interface QueryAllVaultsRequestAmino {
    pagination?: PageRequestAmino;
}
export interface QueryAllVaultsRequestAminoMsg {
    type: "/comdex.vault.v1beta1.QueryAllVaultsRequest";
    value: QueryAllVaultsRequestAmino;
}
export interface QueryAllVaultsRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryAllVaultsResponse {
    vaultsInfo: VaultInfo[];
    pagination?: PageResponse;
}
export interface QueryAllVaultsResponseProtoMsg {
    typeUrl: "/comdex.vault.v1beta1.QueryAllVaultsResponse";
    value: Uint8Array;
}
export interface QueryAllVaultsResponseAmino {
    vaultsInfo?: VaultInfoAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryAllVaultsResponseAminoMsg {
    type: "/comdex.vault.v1beta1.QueryAllVaultsResponse";
    value: QueryAllVaultsResponseAmino;
}
export interface QueryAllVaultsResponseSDKType {
    vaultsInfo: VaultInfoSDKType[];
    pagination?: PageResponseSDKType;
}
export declare const VaultInfo: {
    typeUrl: string;
    encode(message: VaultInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): VaultInfo;
    fromPartial(object: Partial<VaultInfo>): VaultInfo;
    fromAmino(object: VaultInfoAmino): VaultInfo;
    toAmino(message: VaultInfo): VaultInfoAmino;
    fromAminoMsg(object: VaultInfoAminoMsg): VaultInfo;
    fromProtoMsg(message: VaultInfoProtoMsg): VaultInfo;
    toProto(message: VaultInfo): Uint8Array;
    toProtoMsg(message: VaultInfo): VaultInfoProtoMsg;
};
export declare const QueryVaultRequest: {
    typeUrl: string;
    encode(message: QueryVaultRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryVaultRequest;
    fromPartial(object: Partial<QueryVaultRequest>): QueryVaultRequest;
    fromAmino(object: QueryVaultRequestAmino): QueryVaultRequest;
    toAmino(message: QueryVaultRequest): QueryVaultRequestAmino;
    fromAminoMsg(object: QueryVaultRequestAminoMsg): QueryVaultRequest;
    fromProtoMsg(message: QueryVaultRequestProtoMsg): QueryVaultRequest;
    toProto(message: QueryVaultRequest): Uint8Array;
    toProtoMsg(message: QueryVaultRequest): QueryVaultRequestProtoMsg;
};
export declare const QueryVaultResponse: {
    typeUrl: string;
    encode(message: QueryVaultResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryVaultResponse;
    fromPartial(object: Partial<QueryVaultResponse>): QueryVaultResponse;
    fromAmino(object: QueryVaultResponseAmino): QueryVaultResponse;
    toAmino(message: QueryVaultResponse): QueryVaultResponseAmino;
    fromAminoMsg(object: QueryVaultResponseAminoMsg): QueryVaultResponse;
    fromProtoMsg(message: QueryVaultResponseProtoMsg): QueryVaultResponse;
    toProto(message: QueryVaultResponse): Uint8Array;
    toProtoMsg(message: QueryVaultResponse): QueryVaultResponseProtoMsg;
};
export declare const QueryVaultsRequest: {
    typeUrl: string;
    encode(message: QueryVaultsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryVaultsRequest;
    fromPartial(object: Partial<QueryVaultsRequest>): QueryVaultsRequest;
    fromAmino(object: QueryVaultsRequestAmino): QueryVaultsRequest;
    toAmino(message: QueryVaultsRequest): QueryVaultsRequestAmino;
    fromAminoMsg(object: QueryVaultsRequestAminoMsg): QueryVaultsRequest;
    fromProtoMsg(message: QueryVaultsRequestProtoMsg): QueryVaultsRequest;
    toProto(message: QueryVaultsRequest): Uint8Array;
    toProtoMsg(message: QueryVaultsRequest): QueryVaultsRequestProtoMsg;
};
export declare const QueryVaultsResponse: {
    typeUrl: string;
    encode(message: QueryVaultsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryVaultsResponse;
    fromPartial(object: Partial<QueryVaultsResponse>): QueryVaultsResponse;
    fromAmino(object: QueryVaultsResponseAmino): QueryVaultsResponse;
    toAmino(message: QueryVaultsResponse): QueryVaultsResponseAmino;
    fromAminoMsg(object: QueryVaultsResponseAminoMsg): QueryVaultsResponse;
    fromProtoMsg(message: QueryVaultsResponseProtoMsg): QueryVaultsResponse;
    toProto(message: QueryVaultsResponse): Uint8Array;
    toProtoMsg(message: QueryVaultsResponse): QueryVaultsResponseProtoMsg;
};
export declare const QueryAllVaultsRequest: {
    typeUrl: string;
    encode(message: QueryAllVaultsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllVaultsRequest;
    fromPartial(object: Partial<QueryAllVaultsRequest>): QueryAllVaultsRequest;
    fromAmino(object: QueryAllVaultsRequestAmino): QueryAllVaultsRequest;
    toAmino(message: QueryAllVaultsRequest): QueryAllVaultsRequestAmino;
    fromAminoMsg(object: QueryAllVaultsRequestAminoMsg): QueryAllVaultsRequest;
    fromProtoMsg(message: QueryAllVaultsRequestProtoMsg): QueryAllVaultsRequest;
    toProto(message: QueryAllVaultsRequest): Uint8Array;
    toProtoMsg(message: QueryAllVaultsRequest): QueryAllVaultsRequestProtoMsg;
};
export declare const QueryAllVaultsResponse: {
    typeUrl: string;
    encode(message: QueryAllVaultsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllVaultsResponse;
    fromPartial(object: Partial<QueryAllVaultsResponse>): QueryAllVaultsResponse;
    fromAmino(object: QueryAllVaultsResponseAmino): QueryAllVaultsResponse;
    toAmino(message: QueryAllVaultsResponse): QueryAllVaultsResponseAmino;
    fromAminoMsg(object: QueryAllVaultsResponseAminoMsg): QueryAllVaultsResponse;
    fromProtoMsg(message: QueryAllVaultsResponseProtoMsg): QueryAllVaultsResponse;
    toProto(message: QueryAllVaultsResponse): Uint8Array;
    toProtoMsg(message: QueryAllVaultsResponse): QueryAllVaultsResponseProtoMsg;
};
