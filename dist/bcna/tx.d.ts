import { BinaryReader, BinaryWriter } from "../binary";
export interface MsgCreateBitcannaid {
    creator: string;
    bcnaid: string;
    address: string;
}
export interface MsgCreateBitcannaidProtoMsg {
    typeUrl: "/BitCannaGlobal.bcna.bcna.MsgCreateBitcannaid";
    value: Uint8Array;
}
export interface MsgCreateBitcannaidAmino {
    creator?: string;
    bcnaid?: string;
    address?: string;
}
export interface MsgCreateBitcannaidAminoMsg {
    type: "/BitCannaGlobal.bcna.bcna.MsgCreateBitcannaid";
    value: MsgCreateBitcannaidAmino;
}
export interface MsgCreateBitcannaidSDKType {
    creator: string;
    bcnaid: string;
    address: string;
}
export interface MsgCreateBitcannaidResponse {
    id: bigint;
}
export interface MsgCreateBitcannaidResponseProtoMsg {
    typeUrl: "/BitCannaGlobal.bcna.bcna.MsgCreateBitcannaidResponse";
    value: Uint8Array;
}
export interface MsgCreateBitcannaidResponseAmino {
    id?: string;
}
export interface MsgCreateBitcannaidResponseAminoMsg {
    type: "/BitCannaGlobal.bcna.bcna.MsgCreateBitcannaidResponse";
    value: MsgCreateBitcannaidResponseAmino;
}
export interface MsgCreateBitcannaidResponseSDKType {
    id: bigint;
}
export interface MsgUpdateBitcannaid {
    creator: string;
    id: bigint;
    bcnaid: string;
    address: string;
}
export interface MsgUpdateBitcannaidProtoMsg {
    typeUrl: "/BitCannaGlobal.bcna.bcna.MsgUpdateBitcannaid";
    value: Uint8Array;
}
export interface MsgUpdateBitcannaidAmino {
    creator?: string;
    id?: string;
    bcnaid?: string;
    address?: string;
}
export interface MsgUpdateBitcannaidAminoMsg {
    type: "/BitCannaGlobal.bcna.bcna.MsgUpdateBitcannaid";
    value: MsgUpdateBitcannaidAmino;
}
export interface MsgUpdateBitcannaidSDKType {
    creator: string;
    id: bigint;
    bcnaid: string;
    address: string;
}
export interface MsgUpdateBitcannaidResponse {
}
export interface MsgUpdateBitcannaidResponseProtoMsg {
    typeUrl: "/BitCannaGlobal.bcna.bcna.MsgUpdateBitcannaidResponse";
    value: Uint8Array;
}
export interface MsgUpdateBitcannaidResponseAmino {
}
export interface MsgUpdateBitcannaidResponseAminoMsg {
    type: "/BitCannaGlobal.bcna.bcna.MsgUpdateBitcannaidResponse";
    value: MsgUpdateBitcannaidResponseAmino;
}
export interface MsgUpdateBitcannaidResponseSDKType {
}
export interface MsgDeleteBitcannaid {
    creator: string;
    id: bigint;
}
export interface MsgDeleteBitcannaidProtoMsg {
    typeUrl: "/BitCannaGlobal.bcna.bcna.MsgDeleteBitcannaid";
    value: Uint8Array;
}
export interface MsgDeleteBitcannaidAmino {
    creator?: string;
    id?: string;
}
export interface MsgDeleteBitcannaidAminoMsg {
    type: "/BitCannaGlobal.bcna.bcna.MsgDeleteBitcannaid";
    value: MsgDeleteBitcannaidAmino;
}
export interface MsgDeleteBitcannaidSDKType {
    creator: string;
    id: bigint;
}
export interface MsgDeleteBitcannaidResponse {
}
export interface MsgDeleteBitcannaidResponseProtoMsg {
    typeUrl: "/BitCannaGlobal.bcna.bcna.MsgDeleteBitcannaidResponse";
    value: Uint8Array;
}
export interface MsgDeleteBitcannaidResponseAmino {
}
export interface MsgDeleteBitcannaidResponseAminoMsg {
    type: "/BitCannaGlobal.bcna.bcna.MsgDeleteBitcannaidResponse";
    value: MsgDeleteBitcannaidResponseAmino;
}
export interface MsgDeleteBitcannaidResponseSDKType {
}
export interface MsgCreateSupplychain {
    creator: string;
    product: string;
    info: string;
    supplyinfo: string;
}
export interface MsgCreateSupplychainProtoMsg {
    typeUrl: "/BitCannaGlobal.bcna.bcna.MsgCreateSupplychain";
    value: Uint8Array;
}
export interface MsgCreateSupplychainAmino {
    creator?: string;
    product?: string;
    info?: string;
    supplyinfo?: string;
}
export interface MsgCreateSupplychainAminoMsg {
    type: "/BitCannaGlobal.bcna.bcna.MsgCreateSupplychain";
    value: MsgCreateSupplychainAmino;
}
export interface MsgCreateSupplychainSDKType {
    creator: string;
    product: string;
    info: string;
    supplyinfo: string;
}
export interface MsgCreateSupplychainResponse {
    id: bigint;
}
export interface MsgCreateSupplychainResponseProtoMsg {
    typeUrl: "/BitCannaGlobal.bcna.bcna.MsgCreateSupplychainResponse";
    value: Uint8Array;
}
export interface MsgCreateSupplychainResponseAmino {
    id?: string;
}
export interface MsgCreateSupplychainResponseAminoMsg {
    type: "/BitCannaGlobal.bcna.bcna.MsgCreateSupplychainResponse";
    value: MsgCreateSupplychainResponseAmino;
}
export interface MsgCreateSupplychainResponseSDKType {
    id: bigint;
}
export interface MsgUpdateSupplychain {
    creator: string;
    id: bigint;
    product: string;
    info: string;
    supplyinfo: string;
}
export interface MsgUpdateSupplychainProtoMsg {
    typeUrl: "/BitCannaGlobal.bcna.bcna.MsgUpdateSupplychain";
    value: Uint8Array;
}
export interface MsgUpdateSupplychainAmino {
    creator?: string;
    id?: string;
    product?: string;
    info?: string;
    supplyinfo?: string;
}
export interface MsgUpdateSupplychainAminoMsg {
    type: "/BitCannaGlobal.bcna.bcna.MsgUpdateSupplychain";
    value: MsgUpdateSupplychainAmino;
}
export interface MsgUpdateSupplychainSDKType {
    creator: string;
    id: bigint;
    product: string;
    info: string;
    supplyinfo: string;
}
export interface MsgUpdateSupplychainResponse {
}
export interface MsgUpdateSupplychainResponseProtoMsg {
    typeUrl: "/BitCannaGlobal.bcna.bcna.MsgUpdateSupplychainResponse";
    value: Uint8Array;
}
export interface MsgUpdateSupplychainResponseAmino {
}
export interface MsgUpdateSupplychainResponseAminoMsg {
    type: "/BitCannaGlobal.bcna.bcna.MsgUpdateSupplychainResponse";
    value: MsgUpdateSupplychainResponseAmino;
}
export interface MsgUpdateSupplychainResponseSDKType {
}
export interface MsgDeleteSupplychain {
    creator: string;
    id: bigint;
}
export interface MsgDeleteSupplychainProtoMsg {
    typeUrl: "/BitCannaGlobal.bcna.bcna.MsgDeleteSupplychain";
    value: Uint8Array;
}
export interface MsgDeleteSupplychainAmino {
    creator?: string;
    id?: string;
}
export interface MsgDeleteSupplychainAminoMsg {
    type: "/BitCannaGlobal.bcna.bcna.MsgDeleteSupplychain";
    value: MsgDeleteSupplychainAmino;
}
export interface MsgDeleteSupplychainSDKType {
    creator: string;
    id: bigint;
}
export interface MsgDeleteSupplychainResponse {
}
export interface MsgDeleteSupplychainResponseProtoMsg {
    typeUrl: "/BitCannaGlobal.bcna.bcna.MsgDeleteSupplychainResponse";
    value: Uint8Array;
}
export interface MsgDeleteSupplychainResponseAmino {
}
export interface MsgDeleteSupplychainResponseAminoMsg {
    type: "/BitCannaGlobal.bcna.bcna.MsgDeleteSupplychainResponse";
    value: MsgDeleteSupplychainResponseAmino;
}
export interface MsgDeleteSupplychainResponseSDKType {
}
export declare const MsgCreateBitcannaid: {
    typeUrl: string;
    encode(message: MsgCreateBitcannaid, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateBitcannaid;
    fromPartial(object: Partial<MsgCreateBitcannaid>): MsgCreateBitcannaid;
    fromAmino(object: MsgCreateBitcannaidAmino): MsgCreateBitcannaid;
    toAmino(message: MsgCreateBitcannaid): MsgCreateBitcannaidAmino;
    fromAminoMsg(object: MsgCreateBitcannaidAminoMsg): MsgCreateBitcannaid;
    fromProtoMsg(message: MsgCreateBitcannaidProtoMsg): MsgCreateBitcannaid;
    toProto(message: MsgCreateBitcannaid): Uint8Array;
    toProtoMsg(message: MsgCreateBitcannaid): MsgCreateBitcannaidProtoMsg;
};
export declare const MsgCreateBitcannaidResponse: {
    typeUrl: string;
    encode(message: MsgCreateBitcannaidResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateBitcannaidResponse;
    fromPartial(object: Partial<MsgCreateBitcannaidResponse>): MsgCreateBitcannaidResponse;
    fromAmino(object: MsgCreateBitcannaidResponseAmino): MsgCreateBitcannaidResponse;
    toAmino(message: MsgCreateBitcannaidResponse): MsgCreateBitcannaidResponseAmino;
    fromAminoMsg(object: MsgCreateBitcannaidResponseAminoMsg): MsgCreateBitcannaidResponse;
    fromProtoMsg(message: MsgCreateBitcannaidResponseProtoMsg): MsgCreateBitcannaidResponse;
    toProto(message: MsgCreateBitcannaidResponse): Uint8Array;
    toProtoMsg(message: MsgCreateBitcannaidResponse): MsgCreateBitcannaidResponseProtoMsg;
};
export declare const MsgUpdateBitcannaid: {
    typeUrl: string;
    encode(message: MsgUpdateBitcannaid, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateBitcannaid;
    fromPartial(object: Partial<MsgUpdateBitcannaid>): MsgUpdateBitcannaid;
    fromAmino(object: MsgUpdateBitcannaidAmino): MsgUpdateBitcannaid;
    toAmino(message: MsgUpdateBitcannaid): MsgUpdateBitcannaidAmino;
    fromAminoMsg(object: MsgUpdateBitcannaidAminoMsg): MsgUpdateBitcannaid;
    fromProtoMsg(message: MsgUpdateBitcannaidProtoMsg): MsgUpdateBitcannaid;
    toProto(message: MsgUpdateBitcannaid): Uint8Array;
    toProtoMsg(message: MsgUpdateBitcannaid): MsgUpdateBitcannaidProtoMsg;
};
export declare const MsgUpdateBitcannaidResponse: {
    typeUrl: string;
    encode(_: MsgUpdateBitcannaidResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateBitcannaidResponse;
    fromPartial(_: Partial<MsgUpdateBitcannaidResponse>): MsgUpdateBitcannaidResponse;
    fromAmino(_: MsgUpdateBitcannaidResponseAmino): MsgUpdateBitcannaidResponse;
    toAmino(_: MsgUpdateBitcannaidResponse): MsgUpdateBitcannaidResponseAmino;
    fromAminoMsg(object: MsgUpdateBitcannaidResponseAminoMsg): MsgUpdateBitcannaidResponse;
    fromProtoMsg(message: MsgUpdateBitcannaidResponseProtoMsg): MsgUpdateBitcannaidResponse;
    toProto(message: MsgUpdateBitcannaidResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateBitcannaidResponse): MsgUpdateBitcannaidResponseProtoMsg;
};
export declare const MsgDeleteBitcannaid: {
    typeUrl: string;
    encode(message: MsgDeleteBitcannaid, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteBitcannaid;
    fromPartial(object: Partial<MsgDeleteBitcannaid>): MsgDeleteBitcannaid;
    fromAmino(object: MsgDeleteBitcannaidAmino): MsgDeleteBitcannaid;
    toAmino(message: MsgDeleteBitcannaid): MsgDeleteBitcannaidAmino;
    fromAminoMsg(object: MsgDeleteBitcannaidAminoMsg): MsgDeleteBitcannaid;
    fromProtoMsg(message: MsgDeleteBitcannaidProtoMsg): MsgDeleteBitcannaid;
    toProto(message: MsgDeleteBitcannaid): Uint8Array;
    toProtoMsg(message: MsgDeleteBitcannaid): MsgDeleteBitcannaidProtoMsg;
};
export declare const MsgDeleteBitcannaidResponse: {
    typeUrl: string;
    encode(_: MsgDeleteBitcannaidResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteBitcannaidResponse;
    fromPartial(_: Partial<MsgDeleteBitcannaidResponse>): MsgDeleteBitcannaidResponse;
    fromAmino(_: MsgDeleteBitcannaidResponseAmino): MsgDeleteBitcannaidResponse;
    toAmino(_: MsgDeleteBitcannaidResponse): MsgDeleteBitcannaidResponseAmino;
    fromAminoMsg(object: MsgDeleteBitcannaidResponseAminoMsg): MsgDeleteBitcannaidResponse;
    fromProtoMsg(message: MsgDeleteBitcannaidResponseProtoMsg): MsgDeleteBitcannaidResponse;
    toProto(message: MsgDeleteBitcannaidResponse): Uint8Array;
    toProtoMsg(message: MsgDeleteBitcannaidResponse): MsgDeleteBitcannaidResponseProtoMsg;
};
export declare const MsgCreateSupplychain: {
    typeUrl: string;
    encode(message: MsgCreateSupplychain, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateSupplychain;
    fromPartial(object: Partial<MsgCreateSupplychain>): MsgCreateSupplychain;
    fromAmino(object: MsgCreateSupplychainAmino): MsgCreateSupplychain;
    toAmino(message: MsgCreateSupplychain): MsgCreateSupplychainAmino;
    fromAminoMsg(object: MsgCreateSupplychainAminoMsg): MsgCreateSupplychain;
    fromProtoMsg(message: MsgCreateSupplychainProtoMsg): MsgCreateSupplychain;
    toProto(message: MsgCreateSupplychain): Uint8Array;
    toProtoMsg(message: MsgCreateSupplychain): MsgCreateSupplychainProtoMsg;
};
export declare const MsgCreateSupplychainResponse: {
    typeUrl: string;
    encode(message: MsgCreateSupplychainResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateSupplychainResponse;
    fromPartial(object: Partial<MsgCreateSupplychainResponse>): MsgCreateSupplychainResponse;
    fromAmino(object: MsgCreateSupplychainResponseAmino): MsgCreateSupplychainResponse;
    toAmino(message: MsgCreateSupplychainResponse): MsgCreateSupplychainResponseAmino;
    fromAminoMsg(object: MsgCreateSupplychainResponseAminoMsg): MsgCreateSupplychainResponse;
    fromProtoMsg(message: MsgCreateSupplychainResponseProtoMsg): MsgCreateSupplychainResponse;
    toProto(message: MsgCreateSupplychainResponse): Uint8Array;
    toProtoMsg(message: MsgCreateSupplychainResponse): MsgCreateSupplychainResponseProtoMsg;
};
export declare const MsgUpdateSupplychain: {
    typeUrl: string;
    encode(message: MsgUpdateSupplychain, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateSupplychain;
    fromPartial(object: Partial<MsgUpdateSupplychain>): MsgUpdateSupplychain;
    fromAmino(object: MsgUpdateSupplychainAmino): MsgUpdateSupplychain;
    toAmino(message: MsgUpdateSupplychain): MsgUpdateSupplychainAmino;
    fromAminoMsg(object: MsgUpdateSupplychainAminoMsg): MsgUpdateSupplychain;
    fromProtoMsg(message: MsgUpdateSupplychainProtoMsg): MsgUpdateSupplychain;
    toProto(message: MsgUpdateSupplychain): Uint8Array;
    toProtoMsg(message: MsgUpdateSupplychain): MsgUpdateSupplychainProtoMsg;
};
export declare const MsgUpdateSupplychainResponse: {
    typeUrl: string;
    encode(_: MsgUpdateSupplychainResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateSupplychainResponse;
    fromPartial(_: Partial<MsgUpdateSupplychainResponse>): MsgUpdateSupplychainResponse;
    fromAmino(_: MsgUpdateSupplychainResponseAmino): MsgUpdateSupplychainResponse;
    toAmino(_: MsgUpdateSupplychainResponse): MsgUpdateSupplychainResponseAmino;
    fromAminoMsg(object: MsgUpdateSupplychainResponseAminoMsg): MsgUpdateSupplychainResponse;
    fromProtoMsg(message: MsgUpdateSupplychainResponseProtoMsg): MsgUpdateSupplychainResponse;
    toProto(message: MsgUpdateSupplychainResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateSupplychainResponse): MsgUpdateSupplychainResponseProtoMsg;
};
export declare const MsgDeleteSupplychain: {
    typeUrl: string;
    encode(message: MsgDeleteSupplychain, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteSupplychain;
    fromPartial(object: Partial<MsgDeleteSupplychain>): MsgDeleteSupplychain;
    fromAmino(object: MsgDeleteSupplychainAmino): MsgDeleteSupplychain;
    toAmino(message: MsgDeleteSupplychain): MsgDeleteSupplychainAmino;
    fromAminoMsg(object: MsgDeleteSupplychainAminoMsg): MsgDeleteSupplychain;
    fromProtoMsg(message: MsgDeleteSupplychainProtoMsg): MsgDeleteSupplychain;
    toProto(message: MsgDeleteSupplychain): Uint8Array;
    toProtoMsg(message: MsgDeleteSupplychain): MsgDeleteSupplychainProtoMsg;
};
export declare const MsgDeleteSupplychainResponse: {
    typeUrl: string;
    encode(_: MsgDeleteSupplychainResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteSupplychainResponse;
    fromPartial(_: Partial<MsgDeleteSupplychainResponse>): MsgDeleteSupplychainResponse;
    fromAmino(_: MsgDeleteSupplychainResponseAmino): MsgDeleteSupplychainResponse;
    toAmino(_: MsgDeleteSupplychainResponse): MsgDeleteSupplychainResponseAmino;
    fromAminoMsg(object: MsgDeleteSupplychainResponseAminoMsg): MsgDeleteSupplychainResponse;
    fromProtoMsg(message: MsgDeleteSupplychainResponseProtoMsg): MsgDeleteSupplychainResponse;
    toProto(message: MsgDeleteSupplychainResponse): Uint8Array;
    toProtoMsg(message: MsgDeleteSupplychainResponse): MsgDeleteSupplychainResponseProtoMsg;
};
