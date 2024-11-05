import { BinaryReader, BinaryWriter } from "../../../binary";
export interface MsgCreateRequest {
    from: string;
    pairId: bigint;
    amountIn: string;
    amountOut: string;
}
export interface MsgCreateRequestProtoMsg {
    typeUrl: "/comdex.vault.v1beta1.MsgCreateRequest";
    value: Uint8Array;
}
export interface MsgCreateRequestAmino {
    from?: string;
    pair_id?: string;
    amount_in?: string;
    amount_out?: string;
}
export interface MsgCreateRequestAminoMsg {
    type: "/comdex.vault.v1beta1.MsgCreateRequest";
    value: MsgCreateRequestAmino;
}
export interface MsgCreateRequestSDKType {
    from: string;
    pair_id: bigint;
    amount_in: string;
    amount_out: string;
}
export interface MsgCreateResponse {
}
export interface MsgCreateResponseProtoMsg {
    typeUrl: "/comdex.vault.v1beta1.MsgCreateResponse";
    value: Uint8Array;
}
export interface MsgCreateResponseAmino {
}
export interface MsgCreateResponseAminoMsg {
    type: "/comdex.vault.v1beta1.MsgCreateResponse";
    value: MsgCreateResponseAmino;
}
export interface MsgCreateResponseSDKType {
}
export interface MsgDepositRequest {
    from: string;
    id: bigint;
    amount: string;
}
export interface MsgDepositRequestProtoMsg {
    typeUrl: "/comdex.vault.v1beta1.MsgDepositRequest";
    value: Uint8Array;
}
export interface MsgDepositRequestAmino {
    from?: string;
    id?: string;
    amount?: string;
}
export interface MsgDepositRequestAminoMsg {
    type: "/comdex.vault.v1beta1.MsgDepositRequest";
    value: MsgDepositRequestAmino;
}
export interface MsgDepositRequestSDKType {
    from: string;
    id: bigint;
    amount: string;
}
export interface MsgDepositResponse {
}
export interface MsgDepositResponseProtoMsg {
    typeUrl: "/comdex.vault.v1beta1.MsgDepositResponse";
    value: Uint8Array;
}
export interface MsgDepositResponseAmino {
}
export interface MsgDepositResponseAminoMsg {
    type: "/comdex.vault.v1beta1.MsgDepositResponse";
    value: MsgDepositResponseAmino;
}
export interface MsgDepositResponseSDKType {
}
export interface MsgWithdrawRequest {
    from: string;
    id: bigint;
    amount: string;
}
export interface MsgWithdrawRequestProtoMsg {
    typeUrl: "/comdex.vault.v1beta1.MsgWithdrawRequest";
    value: Uint8Array;
}
export interface MsgWithdrawRequestAmino {
    from?: string;
    id?: string;
    amount?: string;
}
export interface MsgWithdrawRequestAminoMsg {
    type: "/comdex.vault.v1beta1.MsgWithdrawRequest";
    value: MsgWithdrawRequestAmino;
}
export interface MsgWithdrawRequestSDKType {
    from: string;
    id: bigint;
    amount: string;
}
export interface MsgWithdrawResponse {
}
export interface MsgWithdrawResponseProtoMsg {
    typeUrl: "/comdex.vault.v1beta1.MsgWithdrawResponse";
    value: Uint8Array;
}
export interface MsgWithdrawResponseAmino {
}
export interface MsgWithdrawResponseAminoMsg {
    type: "/comdex.vault.v1beta1.MsgWithdrawResponse";
    value: MsgWithdrawResponseAmino;
}
export interface MsgWithdrawResponseSDKType {
}
export interface MsgDrawRequest {
    from: string;
    id: bigint;
    amount: string;
}
export interface MsgDrawRequestProtoMsg {
    typeUrl: "/comdex.vault.v1beta1.MsgDrawRequest";
    value: Uint8Array;
}
export interface MsgDrawRequestAmino {
    from?: string;
    id?: string;
    amount?: string;
}
export interface MsgDrawRequestAminoMsg {
    type: "/comdex.vault.v1beta1.MsgDrawRequest";
    value: MsgDrawRequestAmino;
}
export interface MsgDrawRequestSDKType {
    from: string;
    id: bigint;
    amount: string;
}
export interface MsgDrawResponse {
}
export interface MsgDrawResponseProtoMsg {
    typeUrl: "/comdex.vault.v1beta1.MsgDrawResponse";
    value: Uint8Array;
}
export interface MsgDrawResponseAmino {
}
export interface MsgDrawResponseAminoMsg {
    type: "/comdex.vault.v1beta1.MsgDrawResponse";
    value: MsgDrawResponseAmino;
}
export interface MsgDrawResponseSDKType {
}
export interface MsgRepayRequest {
    from: string;
    id: bigint;
    amount: string;
}
export interface MsgRepayRequestProtoMsg {
    typeUrl: "/comdex.vault.v1beta1.MsgRepayRequest";
    value: Uint8Array;
}
export interface MsgRepayRequestAmino {
    from?: string;
    id?: string;
    amount?: string;
}
export interface MsgRepayRequestAminoMsg {
    type: "/comdex.vault.v1beta1.MsgRepayRequest";
    value: MsgRepayRequestAmino;
}
export interface MsgRepayRequestSDKType {
    from: string;
    id: bigint;
    amount: string;
}
export interface MsgRepayResponse {
}
export interface MsgRepayResponseProtoMsg {
    typeUrl: "/comdex.vault.v1beta1.MsgRepayResponse";
    value: Uint8Array;
}
export interface MsgRepayResponseAmino {
}
export interface MsgRepayResponseAminoMsg {
    type: "/comdex.vault.v1beta1.MsgRepayResponse";
    value: MsgRepayResponseAmino;
}
export interface MsgRepayResponseSDKType {
}
export interface MsgCloseRequest {
    from: string;
    id: bigint;
}
export interface MsgCloseRequestProtoMsg {
    typeUrl: "/comdex.vault.v1beta1.MsgCloseRequest";
    value: Uint8Array;
}
export interface MsgCloseRequestAmino {
    from?: string;
    id?: string;
}
export interface MsgCloseRequestAminoMsg {
    type: "/comdex.vault.v1beta1.MsgCloseRequest";
    value: MsgCloseRequestAmino;
}
export interface MsgCloseRequestSDKType {
    from: string;
    id: bigint;
}
export interface MsgCloseResponse {
}
export interface MsgCloseResponseProtoMsg {
    typeUrl: "/comdex.vault.v1beta1.MsgCloseResponse";
    value: Uint8Array;
}
export interface MsgCloseResponseAmino {
}
export interface MsgCloseResponseAminoMsg {
    type: "/comdex.vault.v1beta1.MsgCloseResponse";
    value: MsgCloseResponseAmino;
}
export interface MsgCloseResponseSDKType {
}
export declare const MsgCreateRequest: {
    typeUrl: string;
    encode(message: MsgCreateRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateRequest;
    fromPartial(object: Partial<MsgCreateRequest>): MsgCreateRequest;
    fromAmino(object: MsgCreateRequestAmino): MsgCreateRequest;
    toAmino(message: MsgCreateRequest): MsgCreateRequestAmino;
    fromAminoMsg(object: MsgCreateRequestAminoMsg): MsgCreateRequest;
    fromProtoMsg(message: MsgCreateRequestProtoMsg): MsgCreateRequest;
    toProto(message: MsgCreateRequest): Uint8Array;
    toProtoMsg(message: MsgCreateRequest): MsgCreateRequestProtoMsg;
};
export declare const MsgCreateResponse: {
    typeUrl: string;
    encode(_: MsgCreateResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateResponse;
    fromPartial(_: Partial<MsgCreateResponse>): MsgCreateResponse;
    fromAmino(_: MsgCreateResponseAmino): MsgCreateResponse;
    toAmino(_: MsgCreateResponse): MsgCreateResponseAmino;
    fromAminoMsg(object: MsgCreateResponseAminoMsg): MsgCreateResponse;
    fromProtoMsg(message: MsgCreateResponseProtoMsg): MsgCreateResponse;
    toProto(message: MsgCreateResponse): Uint8Array;
    toProtoMsg(message: MsgCreateResponse): MsgCreateResponseProtoMsg;
};
export declare const MsgDepositRequest: {
    typeUrl: string;
    encode(message: MsgDepositRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDepositRequest;
    fromPartial(object: Partial<MsgDepositRequest>): MsgDepositRequest;
    fromAmino(object: MsgDepositRequestAmino): MsgDepositRequest;
    toAmino(message: MsgDepositRequest): MsgDepositRequestAmino;
    fromAminoMsg(object: MsgDepositRequestAminoMsg): MsgDepositRequest;
    fromProtoMsg(message: MsgDepositRequestProtoMsg): MsgDepositRequest;
    toProto(message: MsgDepositRequest): Uint8Array;
    toProtoMsg(message: MsgDepositRequest): MsgDepositRequestProtoMsg;
};
export declare const MsgDepositResponse: {
    typeUrl: string;
    encode(_: MsgDepositResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDepositResponse;
    fromPartial(_: Partial<MsgDepositResponse>): MsgDepositResponse;
    fromAmino(_: MsgDepositResponseAmino): MsgDepositResponse;
    toAmino(_: MsgDepositResponse): MsgDepositResponseAmino;
    fromAminoMsg(object: MsgDepositResponseAminoMsg): MsgDepositResponse;
    fromProtoMsg(message: MsgDepositResponseProtoMsg): MsgDepositResponse;
    toProto(message: MsgDepositResponse): Uint8Array;
    toProtoMsg(message: MsgDepositResponse): MsgDepositResponseProtoMsg;
};
export declare const MsgWithdrawRequest: {
    typeUrl: string;
    encode(message: MsgWithdrawRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawRequest;
    fromPartial(object: Partial<MsgWithdrawRequest>): MsgWithdrawRequest;
    fromAmino(object: MsgWithdrawRequestAmino): MsgWithdrawRequest;
    toAmino(message: MsgWithdrawRequest): MsgWithdrawRequestAmino;
    fromAminoMsg(object: MsgWithdrawRequestAminoMsg): MsgWithdrawRequest;
    fromProtoMsg(message: MsgWithdrawRequestProtoMsg): MsgWithdrawRequest;
    toProto(message: MsgWithdrawRequest): Uint8Array;
    toProtoMsg(message: MsgWithdrawRequest): MsgWithdrawRequestProtoMsg;
};
export declare const MsgWithdrawResponse: {
    typeUrl: string;
    encode(_: MsgWithdrawResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawResponse;
    fromPartial(_: Partial<MsgWithdrawResponse>): MsgWithdrawResponse;
    fromAmino(_: MsgWithdrawResponseAmino): MsgWithdrawResponse;
    toAmino(_: MsgWithdrawResponse): MsgWithdrawResponseAmino;
    fromAminoMsg(object: MsgWithdrawResponseAminoMsg): MsgWithdrawResponse;
    fromProtoMsg(message: MsgWithdrawResponseProtoMsg): MsgWithdrawResponse;
    toProto(message: MsgWithdrawResponse): Uint8Array;
    toProtoMsg(message: MsgWithdrawResponse): MsgWithdrawResponseProtoMsg;
};
export declare const MsgDrawRequest: {
    typeUrl: string;
    encode(message: MsgDrawRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDrawRequest;
    fromPartial(object: Partial<MsgDrawRequest>): MsgDrawRequest;
    fromAmino(object: MsgDrawRequestAmino): MsgDrawRequest;
    toAmino(message: MsgDrawRequest): MsgDrawRequestAmino;
    fromAminoMsg(object: MsgDrawRequestAminoMsg): MsgDrawRequest;
    fromProtoMsg(message: MsgDrawRequestProtoMsg): MsgDrawRequest;
    toProto(message: MsgDrawRequest): Uint8Array;
    toProtoMsg(message: MsgDrawRequest): MsgDrawRequestProtoMsg;
};
export declare const MsgDrawResponse: {
    typeUrl: string;
    encode(_: MsgDrawResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDrawResponse;
    fromPartial(_: Partial<MsgDrawResponse>): MsgDrawResponse;
    fromAmino(_: MsgDrawResponseAmino): MsgDrawResponse;
    toAmino(_: MsgDrawResponse): MsgDrawResponseAmino;
    fromAminoMsg(object: MsgDrawResponseAminoMsg): MsgDrawResponse;
    fromProtoMsg(message: MsgDrawResponseProtoMsg): MsgDrawResponse;
    toProto(message: MsgDrawResponse): Uint8Array;
    toProtoMsg(message: MsgDrawResponse): MsgDrawResponseProtoMsg;
};
export declare const MsgRepayRequest: {
    typeUrl: string;
    encode(message: MsgRepayRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRepayRequest;
    fromPartial(object: Partial<MsgRepayRequest>): MsgRepayRequest;
    fromAmino(object: MsgRepayRequestAmino): MsgRepayRequest;
    toAmino(message: MsgRepayRequest): MsgRepayRequestAmino;
    fromAminoMsg(object: MsgRepayRequestAminoMsg): MsgRepayRequest;
    fromProtoMsg(message: MsgRepayRequestProtoMsg): MsgRepayRequest;
    toProto(message: MsgRepayRequest): Uint8Array;
    toProtoMsg(message: MsgRepayRequest): MsgRepayRequestProtoMsg;
};
export declare const MsgRepayResponse: {
    typeUrl: string;
    encode(_: MsgRepayResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRepayResponse;
    fromPartial(_: Partial<MsgRepayResponse>): MsgRepayResponse;
    fromAmino(_: MsgRepayResponseAmino): MsgRepayResponse;
    toAmino(_: MsgRepayResponse): MsgRepayResponseAmino;
    fromAminoMsg(object: MsgRepayResponseAminoMsg): MsgRepayResponse;
    fromProtoMsg(message: MsgRepayResponseProtoMsg): MsgRepayResponse;
    toProto(message: MsgRepayResponse): Uint8Array;
    toProtoMsg(message: MsgRepayResponse): MsgRepayResponseProtoMsg;
};
export declare const MsgCloseRequest: {
    typeUrl: string;
    encode(message: MsgCloseRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCloseRequest;
    fromPartial(object: Partial<MsgCloseRequest>): MsgCloseRequest;
    fromAmino(object: MsgCloseRequestAmino): MsgCloseRequest;
    toAmino(message: MsgCloseRequest): MsgCloseRequestAmino;
    fromAminoMsg(object: MsgCloseRequestAminoMsg): MsgCloseRequest;
    fromProtoMsg(message: MsgCloseRequestProtoMsg): MsgCloseRequest;
    toProto(message: MsgCloseRequest): Uint8Array;
    toProtoMsg(message: MsgCloseRequest): MsgCloseRequestProtoMsg;
};
export declare const MsgCloseResponse: {
    typeUrl: string;
    encode(_: MsgCloseResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCloseResponse;
    fromPartial(_: Partial<MsgCloseResponse>): MsgCloseResponse;
    fromAmino(_: MsgCloseResponseAmino): MsgCloseResponse;
    toAmino(_: MsgCloseResponse): MsgCloseResponseAmino;
    fromAminoMsg(object: MsgCloseResponseAminoMsg): MsgCloseResponse;
    fromProtoMsg(message: MsgCloseResponseProtoMsg): MsgCloseResponse;
    toProto(message: MsgCloseResponse): Uint8Array;
    toProtoMsg(message: MsgCloseResponse): MsgCloseResponseProtoMsg;
};
