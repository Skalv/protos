import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Bitcannaid, BitcannaidAmino, BitcannaidSDKType } from "./bitcannaid";
import { Supplychain, SupplychainAmino, SupplychainSDKType } from "./supplychain";
import { BinaryReader, BinaryWriter } from "../binary";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/BitCannaGlobal.bcna.bcna.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/BitCannaGlobal.bcna.bcna.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/BitCannaGlobal.bcna.bcna.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
    /** params holds all the parameters of this module. */
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/BitCannaGlobal.bcna.bcna.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
export interface QueryGetBitcannaidRequest {
    id: bigint;
}
export interface QueryGetBitcannaidRequestProtoMsg {
    typeUrl: "/BitCannaGlobal.bcna.bcna.QueryGetBitcannaidRequest";
    value: Uint8Array;
}
export interface QueryGetBitcannaidRequestAmino {
    id?: string;
}
export interface QueryGetBitcannaidRequestAminoMsg {
    type: "/BitCannaGlobal.bcna.bcna.QueryGetBitcannaidRequest";
    value: QueryGetBitcannaidRequestAmino;
}
export interface QueryGetBitcannaidRequestSDKType {
    id: bigint;
}
export interface QueryGetBitcannaidResponse {
    bitcannaid: Bitcannaid;
}
export interface QueryGetBitcannaidResponseProtoMsg {
    typeUrl: "/BitCannaGlobal.bcna.bcna.QueryGetBitcannaidResponse";
    value: Uint8Array;
}
export interface QueryGetBitcannaidResponseAmino {
    Bitcannaid?: BitcannaidAmino;
}
export interface QueryGetBitcannaidResponseAminoMsg {
    type: "/BitCannaGlobal.bcna.bcna.QueryGetBitcannaidResponse";
    value: QueryGetBitcannaidResponseAmino;
}
export interface QueryGetBitcannaidResponseSDKType {
    Bitcannaid: BitcannaidSDKType;
}
export interface QueryAllBitcannaidRequest {
    pagination?: PageRequest;
}
export interface QueryAllBitcannaidRequestProtoMsg {
    typeUrl: "/BitCannaGlobal.bcna.bcna.QueryAllBitcannaidRequest";
    value: Uint8Array;
}
export interface QueryAllBitcannaidRequestAmino {
    pagination?: PageRequestAmino;
}
export interface QueryAllBitcannaidRequestAminoMsg {
    type: "/BitCannaGlobal.bcna.bcna.QueryAllBitcannaidRequest";
    value: QueryAllBitcannaidRequestAmino;
}
export interface QueryAllBitcannaidRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryAllBitcannaidResponse {
    bitcannaid: Bitcannaid[];
    pagination?: PageResponse;
}
export interface QueryAllBitcannaidResponseProtoMsg {
    typeUrl: "/BitCannaGlobal.bcna.bcna.QueryAllBitcannaidResponse";
    value: Uint8Array;
}
export interface QueryAllBitcannaidResponseAmino {
    Bitcannaid?: BitcannaidAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryAllBitcannaidResponseAminoMsg {
    type: "/BitCannaGlobal.bcna.bcna.QueryAllBitcannaidResponse";
    value: QueryAllBitcannaidResponseAmino;
}
export interface QueryAllBitcannaidResponseSDKType {
    Bitcannaid: BitcannaidSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryGetSupplychainRequest {
    id: bigint;
}
export interface QueryGetSupplychainRequestProtoMsg {
    typeUrl: "/BitCannaGlobal.bcna.bcna.QueryGetSupplychainRequest";
    value: Uint8Array;
}
export interface QueryGetSupplychainRequestAmino {
    id?: string;
}
export interface QueryGetSupplychainRequestAminoMsg {
    type: "/BitCannaGlobal.bcna.bcna.QueryGetSupplychainRequest";
    value: QueryGetSupplychainRequestAmino;
}
export interface QueryGetSupplychainRequestSDKType {
    id: bigint;
}
export interface QueryGetSupplychainResponse {
    supplychain: Supplychain;
}
export interface QueryGetSupplychainResponseProtoMsg {
    typeUrl: "/BitCannaGlobal.bcna.bcna.QueryGetSupplychainResponse";
    value: Uint8Array;
}
export interface QueryGetSupplychainResponseAmino {
    Supplychain?: SupplychainAmino;
}
export interface QueryGetSupplychainResponseAminoMsg {
    type: "/BitCannaGlobal.bcna.bcna.QueryGetSupplychainResponse";
    value: QueryGetSupplychainResponseAmino;
}
export interface QueryGetSupplychainResponseSDKType {
    Supplychain: SupplychainSDKType;
}
export interface QueryAllSupplychainRequest {
    pagination?: PageRequest;
}
export interface QueryAllSupplychainRequestProtoMsg {
    typeUrl: "/BitCannaGlobal.bcna.bcna.QueryAllSupplychainRequest";
    value: Uint8Array;
}
export interface QueryAllSupplychainRequestAmino {
    pagination?: PageRequestAmino;
}
export interface QueryAllSupplychainRequestAminoMsg {
    type: "/BitCannaGlobal.bcna.bcna.QueryAllSupplychainRequest";
    value: QueryAllSupplychainRequestAmino;
}
export interface QueryAllSupplychainRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryAllSupplychainResponse {
    supplychain: Supplychain[];
    pagination?: PageResponse;
}
export interface QueryAllSupplychainResponseProtoMsg {
    typeUrl: "/BitCannaGlobal.bcna.bcna.QueryAllSupplychainResponse";
    value: Uint8Array;
}
export interface QueryAllSupplychainResponseAmino {
    Supplychain?: SupplychainAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryAllSupplychainResponseAminoMsg {
    type: "/BitCannaGlobal.bcna.bcna.QueryAllSupplychainResponse";
    value: QueryAllSupplychainResponseAmino;
}
export interface QueryAllSupplychainResponseSDKType {
    Supplychain: SupplychainSDKType[];
    pagination?: PageResponseSDKType;
}
export declare const QueryParamsRequest: {
    typeUrl: string;
    encode(_: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest;
    toProto(message: QueryParamsRequest): Uint8Array;
    toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
export declare const QueryGetBitcannaidRequest: {
    typeUrl: string;
    encode(message: QueryGetBitcannaidRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetBitcannaidRequest;
    fromPartial(object: Partial<QueryGetBitcannaidRequest>): QueryGetBitcannaidRequest;
    fromAmino(object: QueryGetBitcannaidRequestAmino): QueryGetBitcannaidRequest;
    toAmino(message: QueryGetBitcannaidRequest): QueryGetBitcannaidRequestAmino;
    fromAminoMsg(object: QueryGetBitcannaidRequestAminoMsg): QueryGetBitcannaidRequest;
    fromProtoMsg(message: QueryGetBitcannaidRequestProtoMsg): QueryGetBitcannaidRequest;
    toProto(message: QueryGetBitcannaidRequest): Uint8Array;
    toProtoMsg(message: QueryGetBitcannaidRequest): QueryGetBitcannaidRequestProtoMsg;
};
export declare const QueryGetBitcannaidResponse: {
    typeUrl: string;
    encode(message: QueryGetBitcannaidResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetBitcannaidResponse;
    fromPartial(object: Partial<QueryGetBitcannaidResponse>): QueryGetBitcannaidResponse;
    fromAmino(object: QueryGetBitcannaidResponseAmino): QueryGetBitcannaidResponse;
    toAmino(message: QueryGetBitcannaidResponse): QueryGetBitcannaidResponseAmino;
    fromAminoMsg(object: QueryGetBitcannaidResponseAminoMsg): QueryGetBitcannaidResponse;
    fromProtoMsg(message: QueryGetBitcannaidResponseProtoMsg): QueryGetBitcannaidResponse;
    toProto(message: QueryGetBitcannaidResponse): Uint8Array;
    toProtoMsg(message: QueryGetBitcannaidResponse): QueryGetBitcannaidResponseProtoMsg;
};
export declare const QueryAllBitcannaidRequest: {
    typeUrl: string;
    encode(message: QueryAllBitcannaidRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllBitcannaidRequest;
    fromPartial(object: Partial<QueryAllBitcannaidRequest>): QueryAllBitcannaidRequest;
    fromAmino(object: QueryAllBitcannaidRequestAmino): QueryAllBitcannaidRequest;
    toAmino(message: QueryAllBitcannaidRequest): QueryAllBitcannaidRequestAmino;
    fromAminoMsg(object: QueryAllBitcannaidRequestAminoMsg): QueryAllBitcannaidRequest;
    fromProtoMsg(message: QueryAllBitcannaidRequestProtoMsg): QueryAllBitcannaidRequest;
    toProto(message: QueryAllBitcannaidRequest): Uint8Array;
    toProtoMsg(message: QueryAllBitcannaidRequest): QueryAllBitcannaidRequestProtoMsg;
};
export declare const QueryAllBitcannaidResponse: {
    typeUrl: string;
    encode(message: QueryAllBitcannaidResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllBitcannaidResponse;
    fromPartial(object: Partial<QueryAllBitcannaidResponse>): QueryAllBitcannaidResponse;
    fromAmino(object: QueryAllBitcannaidResponseAmino): QueryAllBitcannaidResponse;
    toAmino(message: QueryAllBitcannaidResponse): QueryAllBitcannaidResponseAmino;
    fromAminoMsg(object: QueryAllBitcannaidResponseAminoMsg): QueryAllBitcannaidResponse;
    fromProtoMsg(message: QueryAllBitcannaidResponseProtoMsg): QueryAllBitcannaidResponse;
    toProto(message: QueryAllBitcannaidResponse): Uint8Array;
    toProtoMsg(message: QueryAllBitcannaidResponse): QueryAllBitcannaidResponseProtoMsg;
};
export declare const QueryGetSupplychainRequest: {
    typeUrl: string;
    encode(message: QueryGetSupplychainRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetSupplychainRequest;
    fromPartial(object: Partial<QueryGetSupplychainRequest>): QueryGetSupplychainRequest;
    fromAmino(object: QueryGetSupplychainRequestAmino): QueryGetSupplychainRequest;
    toAmino(message: QueryGetSupplychainRequest): QueryGetSupplychainRequestAmino;
    fromAminoMsg(object: QueryGetSupplychainRequestAminoMsg): QueryGetSupplychainRequest;
    fromProtoMsg(message: QueryGetSupplychainRequestProtoMsg): QueryGetSupplychainRequest;
    toProto(message: QueryGetSupplychainRequest): Uint8Array;
    toProtoMsg(message: QueryGetSupplychainRequest): QueryGetSupplychainRequestProtoMsg;
};
export declare const QueryGetSupplychainResponse: {
    typeUrl: string;
    encode(message: QueryGetSupplychainResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetSupplychainResponse;
    fromPartial(object: Partial<QueryGetSupplychainResponse>): QueryGetSupplychainResponse;
    fromAmino(object: QueryGetSupplychainResponseAmino): QueryGetSupplychainResponse;
    toAmino(message: QueryGetSupplychainResponse): QueryGetSupplychainResponseAmino;
    fromAminoMsg(object: QueryGetSupplychainResponseAminoMsg): QueryGetSupplychainResponse;
    fromProtoMsg(message: QueryGetSupplychainResponseProtoMsg): QueryGetSupplychainResponse;
    toProto(message: QueryGetSupplychainResponse): Uint8Array;
    toProtoMsg(message: QueryGetSupplychainResponse): QueryGetSupplychainResponseProtoMsg;
};
export declare const QueryAllSupplychainRequest: {
    typeUrl: string;
    encode(message: QueryAllSupplychainRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllSupplychainRequest;
    fromPartial(object: Partial<QueryAllSupplychainRequest>): QueryAllSupplychainRequest;
    fromAmino(object: QueryAllSupplychainRequestAmino): QueryAllSupplychainRequest;
    toAmino(message: QueryAllSupplychainRequest): QueryAllSupplychainRequestAmino;
    fromAminoMsg(object: QueryAllSupplychainRequestAminoMsg): QueryAllSupplychainRequest;
    fromProtoMsg(message: QueryAllSupplychainRequestProtoMsg): QueryAllSupplychainRequest;
    toProto(message: QueryAllSupplychainRequest): Uint8Array;
    toProtoMsg(message: QueryAllSupplychainRequest): QueryAllSupplychainRequestProtoMsg;
};
export declare const QueryAllSupplychainResponse: {
    typeUrl: string;
    encode(message: QueryAllSupplychainResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllSupplychainResponse;
    fromPartial(object: Partial<QueryAllSupplychainResponse>): QueryAllSupplychainResponse;
    fromAmino(object: QueryAllSupplychainResponseAmino): QueryAllSupplychainResponse;
    toAmino(message: QueryAllSupplychainResponse): QueryAllSupplychainResponseAmino;
    fromAminoMsg(object: QueryAllSupplychainResponseAminoMsg): QueryAllSupplychainResponse;
    fromProtoMsg(message: QueryAllSupplychainResponseProtoMsg): QueryAllSupplychainResponse;
    toProto(message: QueryAllSupplychainResponse): Uint8Array;
    toProtoMsg(message: QueryAllSupplychainResponse): QueryAllSupplychainResponseProtoMsg;
};
