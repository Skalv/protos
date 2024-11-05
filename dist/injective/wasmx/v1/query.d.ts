import { Params, ParamsAmino, ParamsSDKType } from "./wasmx";
import { GenesisState, GenesisStateAmino, GenesisStateSDKType } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** QueryWasmxParamsRequest is the request type for the Query/WasmxParams RPC method. */
export interface QueryWasmxParamsRequest {
}
export interface QueryWasmxParamsRequestProtoMsg {
    typeUrl: "/injective.wasmx.v1.QueryWasmxParamsRequest";
    value: Uint8Array;
}
/** QueryWasmxParamsRequest is the request type for the Query/WasmxParams RPC method. */
export interface QueryWasmxParamsRequestAmino {
}
export interface QueryWasmxParamsRequestAminoMsg {
    type: "/injective.wasmx.v1.QueryWasmxParamsRequest";
    value: QueryWasmxParamsRequestAmino;
}
/** QueryWasmxParamsRequest is the request type for the Query/WasmxParams RPC method. */
export interface QueryWasmxParamsRequestSDKType {
}
/** QueryWasmxParamsRequest is the response type for the Query/WasmxParams RPC method. */
export interface QueryWasmxParamsResponse {
    params: Params;
}
export interface QueryWasmxParamsResponseProtoMsg {
    typeUrl: "/injective.wasmx.v1.QueryWasmxParamsResponse";
    value: Uint8Array;
}
/** QueryWasmxParamsRequest is the response type for the Query/WasmxParams RPC method. */
export interface QueryWasmxParamsResponseAmino {
    params?: ParamsAmino;
}
export interface QueryWasmxParamsResponseAminoMsg {
    type: "/injective.wasmx.v1.QueryWasmxParamsResponse";
    value: QueryWasmxParamsResponseAmino;
}
/** QueryWasmxParamsRequest is the response type for the Query/WasmxParams RPC method. */
export interface QueryWasmxParamsResponseSDKType {
    params: ParamsSDKType;
}
/** QueryModuleStateRequest is the request type for the Query/WasmxModuleState RPC method. */
export interface QueryModuleStateRequest {
}
export interface QueryModuleStateRequestProtoMsg {
    typeUrl: "/injective.wasmx.v1.QueryModuleStateRequest";
    value: Uint8Array;
}
/** QueryModuleStateRequest is the request type for the Query/WasmxModuleState RPC method. */
export interface QueryModuleStateRequestAmino {
}
export interface QueryModuleStateRequestAminoMsg {
    type: "/injective.wasmx.v1.QueryModuleStateRequest";
    value: QueryModuleStateRequestAmino;
}
/** QueryModuleStateRequest is the request type for the Query/WasmxModuleState RPC method. */
export interface QueryModuleStateRequestSDKType {
}
/** QueryModuleStateResponse is the response type for the Query/WasmxModuleState RPC method. */
export interface QueryModuleStateResponse {
    state?: GenesisState;
}
export interface QueryModuleStateResponseProtoMsg {
    typeUrl: "/injective.wasmx.v1.QueryModuleStateResponse";
    value: Uint8Array;
}
/** QueryModuleStateResponse is the response type for the Query/WasmxModuleState RPC method. */
export interface QueryModuleStateResponseAmino {
    state?: GenesisStateAmino;
}
export interface QueryModuleStateResponseAminoMsg {
    type: "/injective.wasmx.v1.QueryModuleStateResponse";
    value: QueryModuleStateResponseAmino;
}
/** QueryModuleStateResponse is the response type for the Query/WasmxModuleState RPC method. */
export interface QueryModuleStateResponseSDKType {
    state?: GenesisStateSDKType;
}
export declare const QueryWasmxParamsRequest: {
    typeUrl: string;
    encode(_: QueryWasmxParamsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryWasmxParamsRequest;
    fromPartial(_: Partial<QueryWasmxParamsRequest>): QueryWasmxParamsRequest;
    fromAmino(_: QueryWasmxParamsRequestAmino): QueryWasmxParamsRequest;
    toAmino(_: QueryWasmxParamsRequest): QueryWasmxParamsRequestAmino;
    fromAminoMsg(object: QueryWasmxParamsRequestAminoMsg): QueryWasmxParamsRequest;
    fromProtoMsg(message: QueryWasmxParamsRequestProtoMsg): QueryWasmxParamsRequest;
    toProto(message: QueryWasmxParamsRequest): Uint8Array;
    toProtoMsg(message: QueryWasmxParamsRequest): QueryWasmxParamsRequestProtoMsg;
};
export declare const QueryWasmxParamsResponse: {
    typeUrl: string;
    encode(message: QueryWasmxParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryWasmxParamsResponse;
    fromPartial(object: Partial<QueryWasmxParamsResponse>): QueryWasmxParamsResponse;
    fromAmino(object: QueryWasmxParamsResponseAmino): QueryWasmxParamsResponse;
    toAmino(message: QueryWasmxParamsResponse): QueryWasmxParamsResponseAmino;
    fromAminoMsg(object: QueryWasmxParamsResponseAminoMsg): QueryWasmxParamsResponse;
    fromProtoMsg(message: QueryWasmxParamsResponseProtoMsg): QueryWasmxParamsResponse;
    toProto(message: QueryWasmxParamsResponse): Uint8Array;
    toProtoMsg(message: QueryWasmxParamsResponse): QueryWasmxParamsResponseProtoMsg;
};
export declare const QueryModuleStateRequest: {
    typeUrl: string;
    encode(_: QueryModuleStateRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryModuleStateRequest;
    fromPartial(_: Partial<QueryModuleStateRequest>): QueryModuleStateRequest;
    fromAmino(_: QueryModuleStateRequestAmino): QueryModuleStateRequest;
    toAmino(_: QueryModuleStateRequest): QueryModuleStateRequestAmino;
    fromAminoMsg(object: QueryModuleStateRequestAminoMsg): QueryModuleStateRequest;
    fromProtoMsg(message: QueryModuleStateRequestProtoMsg): QueryModuleStateRequest;
    toProto(message: QueryModuleStateRequest): Uint8Array;
    toProtoMsg(message: QueryModuleStateRequest): QueryModuleStateRequestProtoMsg;
};
export declare const QueryModuleStateResponse: {
    typeUrl: string;
    encode(message: QueryModuleStateResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryModuleStateResponse;
    fromPartial(object: Partial<QueryModuleStateResponse>): QueryModuleStateResponse;
    fromAmino(object: QueryModuleStateResponseAmino): QueryModuleStateResponse;
    toAmino(message: QueryModuleStateResponse): QueryModuleStateResponseAmino;
    fromAminoMsg(object: QueryModuleStateResponseAminoMsg): QueryModuleStateResponse;
    fromProtoMsg(message: QueryModuleStateResponseProtoMsg): QueryModuleStateResponse;
    toProto(message: QueryModuleStateResponse): Uint8Array;
    toProtoMsg(message: QueryModuleStateResponse): QueryModuleStateResponseProtoMsg;
};
