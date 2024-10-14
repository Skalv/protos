//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
export interface MsgAddAssetRequest {
  from: string;
  name: string;
  denom: string;
  decimals: bigint;
}
export interface MsgAddAssetRequestProtoMsg {
  typeUrl: "/comdex.asset.v1beta1.MsgAddAssetRequest";
  value: Uint8Array;
}
export interface MsgAddAssetRequestAmino {
  from?: string;
  name?: string;
  denom?: string;
  decimals?: string;
}
export interface MsgAddAssetRequestAminoMsg {
  type: "/comdex.asset.v1beta1.MsgAddAssetRequest";
  value: MsgAddAssetRequestAmino;
}
export interface MsgAddAssetRequestSDKType {
  from: string;
  name: string;
  denom: string;
  decimals: bigint;
}
export interface MsgAddAssetResponse {}
export interface MsgAddAssetResponseProtoMsg {
  typeUrl: "/comdex.asset.v1beta1.MsgAddAssetResponse";
  value: Uint8Array;
}
export interface MsgAddAssetResponseAmino {}
export interface MsgAddAssetResponseAminoMsg {
  type: "/comdex.asset.v1beta1.MsgAddAssetResponse";
  value: MsgAddAssetResponseAmino;
}
export interface MsgAddAssetResponseSDKType {}
export interface MsgUpdateAssetRequest {
  from: string;
  id: bigint;
  name: string;
  denom: string;
  decimals: bigint;
}
export interface MsgUpdateAssetRequestProtoMsg {
  typeUrl: "/comdex.asset.v1beta1.MsgUpdateAssetRequest";
  value: Uint8Array;
}
export interface MsgUpdateAssetRequestAmino {
  from?: string;
  id?: string;
  name?: string;
  denom?: string;
  decimals?: string;
}
export interface MsgUpdateAssetRequestAminoMsg {
  type: "/comdex.asset.v1beta1.MsgUpdateAssetRequest";
  value: MsgUpdateAssetRequestAmino;
}
export interface MsgUpdateAssetRequestSDKType {
  from: string;
  id: bigint;
  name: string;
  denom: string;
  decimals: bigint;
}
export interface MsgUpdateAssetResponse {}
export interface MsgUpdateAssetResponseProtoMsg {
  typeUrl: "/comdex.asset.v1beta1.MsgUpdateAssetResponse";
  value: Uint8Array;
}
export interface MsgUpdateAssetResponseAmino {}
export interface MsgUpdateAssetResponseAminoMsg {
  type: "/comdex.asset.v1beta1.MsgUpdateAssetResponse";
  value: MsgUpdateAssetResponseAmino;
}
export interface MsgUpdateAssetResponseSDKType {}
export interface MsgAddPairRequest {
  from: string;
  assetIn: bigint;
  assetOut: bigint;
  liquidationRatio: string;
}
export interface MsgAddPairRequestProtoMsg {
  typeUrl: "/comdex.asset.v1beta1.MsgAddPairRequest";
  value: Uint8Array;
}
export interface MsgAddPairRequestAmino {
  from?: string;
  asset_in?: string;
  asset_out?: string;
  liquidation_ratio?: string;
}
export interface MsgAddPairRequestAminoMsg {
  type: "/comdex.asset.v1beta1.MsgAddPairRequest";
  value: MsgAddPairRequestAmino;
}
export interface MsgAddPairRequestSDKType {
  from: string;
  asset_in: bigint;
  asset_out: bigint;
  liquidation_ratio: string;
}
export interface MsgAddPairResponse {}
export interface MsgAddPairResponseProtoMsg {
  typeUrl: "/comdex.asset.v1beta1.MsgAddPairResponse";
  value: Uint8Array;
}
export interface MsgAddPairResponseAmino {}
export interface MsgAddPairResponseAminoMsg {
  type: "/comdex.asset.v1beta1.MsgAddPairResponse";
  value: MsgAddPairResponseAmino;
}
export interface MsgAddPairResponseSDKType {}
export interface MsgUpdatePairRequest {
  from: string;
  id: bigint;
  liquidationRatio: string;
}
export interface MsgUpdatePairRequestProtoMsg {
  typeUrl: "/comdex.asset.v1beta1.MsgUpdatePairRequest";
  value: Uint8Array;
}
export interface MsgUpdatePairRequestAmino {
  from?: string;
  id?: string;
  liquidation_ratio?: string;
}
export interface MsgUpdatePairRequestAminoMsg {
  type: "/comdex.asset.v1beta1.MsgUpdatePairRequest";
  value: MsgUpdatePairRequestAmino;
}
export interface MsgUpdatePairRequestSDKType {
  from: string;
  id: bigint;
  liquidation_ratio: string;
}
export interface MsgUpdatePairResponse {}
export interface MsgUpdatePairResponseProtoMsg {
  typeUrl: "/comdex.asset.v1beta1.MsgUpdatePairResponse";
  value: Uint8Array;
}
export interface MsgUpdatePairResponseAmino {}
export interface MsgUpdatePairResponseAminoMsg {
  type: "/comdex.asset.v1beta1.MsgUpdatePairResponse";
  value: MsgUpdatePairResponseAmino;
}
export interface MsgUpdatePairResponseSDKType {}
function createBaseMsgAddAssetRequest(): MsgAddAssetRequest {
  return {
    from: "",
    name: "",
    denom: "",
    decimals: BigInt(0)
  };
}
export const MsgAddAssetRequest = {
  typeUrl: "/comdex.asset.v1beta1.MsgAddAssetRequest",
  encode(message: MsgAddAssetRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (message.decimals !== BigInt(0)) {
      writer.uint32(32).int64(message.decimals);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddAssetRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddAssetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.denom = reader.string();
          break;
        case 4:
          message.decimals = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgAddAssetRequest>): MsgAddAssetRequest {
    const message = createBaseMsgAddAssetRequest();
    message.from = object.from ?? "";
    message.name = object.name ?? "";
    message.denom = object.denom ?? "";
    message.decimals = object.decimals !== undefined && object.decimals !== null ? BigInt(object.decimals.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgAddAssetRequestAmino): MsgAddAssetRequest {
    const message = createBaseMsgAddAssetRequest();
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.decimals !== undefined && object.decimals !== null) {
      message.decimals = BigInt(object.decimals);
    }
    return message;
  },
  toAmino(message: MsgAddAssetRequest): MsgAddAssetRequestAmino {
    const obj: any = {};
    obj.from = message.from === "" ? undefined : message.from;
    obj.name = message.name === "" ? undefined : message.name;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.decimals = message.decimals !== BigInt(0) ? (message.decimals?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgAddAssetRequestAminoMsg): MsgAddAssetRequest {
    return MsgAddAssetRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddAssetRequestProtoMsg): MsgAddAssetRequest {
    return MsgAddAssetRequest.decode(message.value);
  },
  toProto(message: MsgAddAssetRequest): Uint8Array {
    return MsgAddAssetRequest.encode(message).finish();
  },
  toProtoMsg(message: MsgAddAssetRequest): MsgAddAssetRequestProtoMsg {
    return {
      typeUrl: "/comdex.asset.v1beta1.MsgAddAssetRequest",
      value: MsgAddAssetRequest.encode(message).finish()
    };
  }
};
function createBaseMsgAddAssetResponse(): MsgAddAssetResponse {
  return {};
}
export const MsgAddAssetResponse = {
  typeUrl: "/comdex.asset.v1beta1.MsgAddAssetResponse",
  encode(_: MsgAddAssetResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddAssetResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddAssetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgAddAssetResponse>): MsgAddAssetResponse {
    const message = createBaseMsgAddAssetResponse();
    return message;
  },
  fromAmino(_: MsgAddAssetResponseAmino): MsgAddAssetResponse {
    const message = createBaseMsgAddAssetResponse();
    return message;
  },
  toAmino(_: MsgAddAssetResponse): MsgAddAssetResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAddAssetResponseAminoMsg): MsgAddAssetResponse {
    return MsgAddAssetResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddAssetResponseProtoMsg): MsgAddAssetResponse {
    return MsgAddAssetResponse.decode(message.value);
  },
  toProto(message: MsgAddAssetResponse): Uint8Array {
    return MsgAddAssetResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAddAssetResponse): MsgAddAssetResponseProtoMsg {
    return {
      typeUrl: "/comdex.asset.v1beta1.MsgAddAssetResponse",
      value: MsgAddAssetResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateAssetRequest(): MsgUpdateAssetRequest {
  return {
    from: "",
    id: BigInt(0),
    name: "",
    denom: "",
    decimals: BigInt(0)
  };
}
export const MsgUpdateAssetRequest = {
  typeUrl: "/comdex.asset.v1beta1.MsgUpdateAssetRequest",
  encode(message: MsgUpdateAssetRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.denom !== "") {
      writer.uint32(34).string(message.denom);
    }
    if (message.decimals !== BigInt(0)) {
      writer.uint32(40).int64(message.decimals);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateAssetRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAssetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;
        case 2:
          message.id = reader.uint64();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.denom = reader.string();
          break;
        case 5:
          message.decimals = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateAssetRequest>): MsgUpdateAssetRequest {
    const message = createBaseMsgUpdateAssetRequest();
    message.from = object.from ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.name = object.name ?? "";
    message.denom = object.denom ?? "";
    message.decimals = object.decimals !== undefined && object.decimals !== null ? BigInt(object.decimals.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgUpdateAssetRequestAmino): MsgUpdateAssetRequest {
    const message = createBaseMsgUpdateAssetRequest();
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.decimals !== undefined && object.decimals !== null) {
      message.decimals = BigInt(object.decimals);
    }
    return message;
  },
  toAmino(message: MsgUpdateAssetRequest): MsgUpdateAssetRequestAmino {
    const obj: any = {};
    obj.from = message.from === "" ? undefined : message.from;
    obj.id = message.id !== BigInt(0) ? (message.id?.toString)() : undefined;
    obj.name = message.name === "" ? undefined : message.name;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.decimals = message.decimals !== BigInt(0) ? (message.decimals?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateAssetRequestAminoMsg): MsgUpdateAssetRequest {
    return MsgUpdateAssetRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateAssetRequestProtoMsg): MsgUpdateAssetRequest {
    return MsgUpdateAssetRequest.decode(message.value);
  },
  toProto(message: MsgUpdateAssetRequest): Uint8Array {
    return MsgUpdateAssetRequest.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateAssetRequest): MsgUpdateAssetRequestProtoMsg {
    return {
      typeUrl: "/comdex.asset.v1beta1.MsgUpdateAssetRequest",
      value: MsgUpdateAssetRequest.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateAssetResponse(): MsgUpdateAssetResponse {
  return {};
}
export const MsgUpdateAssetResponse = {
  typeUrl: "/comdex.asset.v1beta1.MsgUpdateAssetResponse",
  encode(_: MsgUpdateAssetResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateAssetResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAssetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgUpdateAssetResponse>): MsgUpdateAssetResponse {
    const message = createBaseMsgUpdateAssetResponse();
    return message;
  },
  fromAmino(_: MsgUpdateAssetResponseAmino): MsgUpdateAssetResponse {
    const message = createBaseMsgUpdateAssetResponse();
    return message;
  },
  toAmino(_: MsgUpdateAssetResponse): MsgUpdateAssetResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateAssetResponseAminoMsg): MsgUpdateAssetResponse {
    return MsgUpdateAssetResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateAssetResponseProtoMsg): MsgUpdateAssetResponse {
    return MsgUpdateAssetResponse.decode(message.value);
  },
  toProto(message: MsgUpdateAssetResponse): Uint8Array {
    return MsgUpdateAssetResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateAssetResponse): MsgUpdateAssetResponseProtoMsg {
    return {
      typeUrl: "/comdex.asset.v1beta1.MsgUpdateAssetResponse",
      value: MsgUpdateAssetResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAddPairRequest(): MsgAddPairRequest {
  return {
    from: "",
    assetIn: BigInt(0),
    assetOut: BigInt(0),
    liquidationRatio: ""
  };
}
export const MsgAddPairRequest = {
  typeUrl: "/comdex.asset.v1beta1.MsgAddPairRequest",
  encode(message: MsgAddPairRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.assetIn !== BigInt(0)) {
      writer.uint32(16).uint64(message.assetIn);
    }
    if (message.assetOut !== BigInt(0)) {
      writer.uint32(24).uint64(message.assetOut);
    }
    if (message.liquidationRatio !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.liquidationRatio, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddPairRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddPairRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;
        case 2:
          message.assetIn = reader.uint64();
          break;
        case 3:
          message.assetOut = reader.uint64();
          break;
        case 4:
          message.liquidationRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgAddPairRequest>): MsgAddPairRequest {
    const message = createBaseMsgAddPairRequest();
    message.from = object.from ?? "";
    message.assetIn = object.assetIn !== undefined && object.assetIn !== null ? BigInt(object.assetIn.toString()) : BigInt(0);
    message.assetOut = object.assetOut !== undefined && object.assetOut !== null ? BigInt(object.assetOut.toString()) : BigInt(0);
    message.liquidationRatio = object.liquidationRatio ?? "";
    return message;
  },
  fromAmino(object: MsgAddPairRequestAmino): MsgAddPairRequest {
    const message = createBaseMsgAddPairRequest();
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    }
    if (object.asset_in !== undefined && object.asset_in !== null) {
      message.assetIn = BigInt(object.asset_in);
    }
    if (object.asset_out !== undefined && object.asset_out !== null) {
      message.assetOut = BigInt(object.asset_out);
    }
    if (object.liquidation_ratio !== undefined && object.liquidation_ratio !== null) {
      message.liquidationRatio = object.liquidation_ratio;
    }
    return message;
  },
  toAmino(message: MsgAddPairRequest): MsgAddPairRequestAmino {
    const obj: any = {};
    obj.from = message.from === "" ? undefined : message.from;
    obj.asset_in = message.assetIn !== BigInt(0) ? (message.assetIn?.toString)() : undefined;
    obj.asset_out = message.assetOut !== BigInt(0) ? (message.assetOut?.toString)() : undefined;
    obj.liquidation_ratio = message.liquidationRatio === "" ? undefined : message.liquidationRatio;
    return obj;
  },
  fromAminoMsg(object: MsgAddPairRequestAminoMsg): MsgAddPairRequest {
    return MsgAddPairRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddPairRequestProtoMsg): MsgAddPairRequest {
    return MsgAddPairRequest.decode(message.value);
  },
  toProto(message: MsgAddPairRequest): Uint8Array {
    return MsgAddPairRequest.encode(message).finish();
  },
  toProtoMsg(message: MsgAddPairRequest): MsgAddPairRequestProtoMsg {
    return {
      typeUrl: "/comdex.asset.v1beta1.MsgAddPairRequest",
      value: MsgAddPairRequest.encode(message).finish()
    };
  }
};
function createBaseMsgAddPairResponse(): MsgAddPairResponse {
  return {};
}
export const MsgAddPairResponse = {
  typeUrl: "/comdex.asset.v1beta1.MsgAddPairResponse",
  encode(_: MsgAddPairResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddPairResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddPairResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgAddPairResponse>): MsgAddPairResponse {
    const message = createBaseMsgAddPairResponse();
    return message;
  },
  fromAmino(_: MsgAddPairResponseAmino): MsgAddPairResponse {
    const message = createBaseMsgAddPairResponse();
    return message;
  },
  toAmino(_: MsgAddPairResponse): MsgAddPairResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAddPairResponseAminoMsg): MsgAddPairResponse {
    return MsgAddPairResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddPairResponseProtoMsg): MsgAddPairResponse {
    return MsgAddPairResponse.decode(message.value);
  },
  toProto(message: MsgAddPairResponse): Uint8Array {
    return MsgAddPairResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAddPairResponse): MsgAddPairResponseProtoMsg {
    return {
      typeUrl: "/comdex.asset.v1beta1.MsgAddPairResponse",
      value: MsgAddPairResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdatePairRequest(): MsgUpdatePairRequest {
  return {
    from: "",
    id: BigInt(0),
    liquidationRatio: ""
  };
}
export const MsgUpdatePairRequest = {
  typeUrl: "/comdex.asset.v1beta1.MsgUpdatePairRequest",
  encode(message: MsgUpdatePairRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.liquidationRatio !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.liquidationRatio, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdatePairRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdatePairRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;
        case 2:
          message.id = reader.uint64();
          break;
        case 3:
          message.liquidationRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdatePairRequest>): MsgUpdatePairRequest {
    const message = createBaseMsgUpdatePairRequest();
    message.from = object.from ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.liquidationRatio = object.liquidationRatio ?? "";
    return message;
  },
  fromAmino(object: MsgUpdatePairRequestAmino): MsgUpdatePairRequest {
    const message = createBaseMsgUpdatePairRequest();
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.liquidation_ratio !== undefined && object.liquidation_ratio !== null) {
      message.liquidationRatio = object.liquidation_ratio;
    }
    return message;
  },
  toAmino(message: MsgUpdatePairRequest): MsgUpdatePairRequestAmino {
    const obj: any = {};
    obj.from = message.from === "" ? undefined : message.from;
    obj.id = message.id !== BigInt(0) ? (message.id?.toString)() : undefined;
    obj.liquidation_ratio = message.liquidationRatio === "" ? undefined : message.liquidationRatio;
    return obj;
  },
  fromAminoMsg(object: MsgUpdatePairRequestAminoMsg): MsgUpdatePairRequest {
    return MsgUpdatePairRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdatePairRequestProtoMsg): MsgUpdatePairRequest {
    return MsgUpdatePairRequest.decode(message.value);
  },
  toProto(message: MsgUpdatePairRequest): Uint8Array {
    return MsgUpdatePairRequest.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdatePairRequest): MsgUpdatePairRequestProtoMsg {
    return {
      typeUrl: "/comdex.asset.v1beta1.MsgUpdatePairRequest",
      value: MsgUpdatePairRequest.encode(message).finish()
    };
  }
};
function createBaseMsgUpdatePairResponse(): MsgUpdatePairResponse {
  return {};
}
export const MsgUpdatePairResponse = {
  typeUrl: "/comdex.asset.v1beta1.MsgUpdatePairResponse",
  encode(_: MsgUpdatePairResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdatePairResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdatePairResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgUpdatePairResponse>): MsgUpdatePairResponse {
    const message = createBaseMsgUpdatePairResponse();
    return message;
  },
  fromAmino(_: MsgUpdatePairResponseAmino): MsgUpdatePairResponse {
    const message = createBaseMsgUpdatePairResponse();
    return message;
  },
  toAmino(_: MsgUpdatePairResponse): MsgUpdatePairResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdatePairResponseAminoMsg): MsgUpdatePairResponse {
    return MsgUpdatePairResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdatePairResponseProtoMsg): MsgUpdatePairResponse {
    return MsgUpdatePairResponse.decode(message.value);
  },
  toProto(message: MsgUpdatePairResponse): Uint8Array {
    return MsgUpdatePairResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdatePairResponse): MsgUpdatePairResponseProtoMsg {
    return {
      typeUrl: "/comdex.asset.v1beta1.MsgUpdatePairResponse",
      value: MsgUpdatePairResponse.encode(message).finish()
    };
  }
};