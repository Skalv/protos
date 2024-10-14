//@ts-nocheck
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
export interface MsgUpdateBitcannaidResponse {}
export interface MsgUpdateBitcannaidResponseProtoMsg {
  typeUrl: "/BitCannaGlobal.bcna.bcna.MsgUpdateBitcannaidResponse";
  value: Uint8Array;
}
export interface MsgUpdateBitcannaidResponseAmino {}
export interface MsgUpdateBitcannaidResponseAminoMsg {
  type: "/BitCannaGlobal.bcna.bcna.MsgUpdateBitcannaidResponse";
  value: MsgUpdateBitcannaidResponseAmino;
}
export interface MsgUpdateBitcannaidResponseSDKType {}
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
export interface MsgDeleteBitcannaidResponse {}
export interface MsgDeleteBitcannaidResponseProtoMsg {
  typeUrl: "/BitCannaGlobal.bcna.bcna.MsgDeleteBitcannaidResponse";
  value: Uint8Array;
}
export interface MsgDeleteBitcannaidResponseAmino {}
export interface MsgDeleteBitcannaidResponseAminoMsg {
  type: "/BitCannaGlobal.bcna.bcna.MsgDeleteBitcannaidResponse";
  value: MsgDeleteBitcannaidResponseAmino;
}
export interface MsgDeleteBitcannaidResponseSDKType {}
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
export interface MsgUpdateSupplychainResponse {}
export interface MsgUpdateSupplychainResponseProtoMsg {
  typeUrl: "/BitCannaGlobal.bcna.bcna.MsgUpdateSupplychainResponse";
  value: Uint8Array;
}
export interface MsgUpdateSupplychainResponseAmino {}
export interface MsgUpdateSupplychainResponseAminoMsg {
  type: "/BitCannaGlobal.bcna.bcna.MsgUpdateSupplychainResponse";
  value: MsgUpdateSupplychainResponseAmino;
}
export interface MsgUpdateSupplychainResponseSDKType {}
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
export interface MsgDeleteSupplychainResponse {}
export interface MsgDeleteSupplychainResponseProtoMsg {
  typeUrl: "/BitCannaGlobal.bcna.bcna.MsgDeleteSupplychainResponse";
  value: Uint8Array;
}
export interface MsgDeleteSupplychainResponseAmino {}
export interface MsgDeleteSupplychainResponseAminoMsg {
  type: "/BitCannaGlobal.bcna.bcna.MsgDeleteSupplychainResponse";
  value: MsgDeleteSupplychainResponseAmino;
}
export interface MsgDeleteSupplychainResponseSDKType {}
function createBaseMsgCreateBitcannaid(): MsgCreateBitcannaid {
  return {
    creator: "",
    bcnaid: "",
    address: ""
  };
}
export const MsgCreateBitcannaid = {
  typeUrl: "/BitCannaGlobal.bcna.bcna.MsgCreateBitcannaid",
  encode(message: MsgCreateBitcannaid, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.bcnaid !== "") {
      writer.uint32(18).string(message.bcnaid);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateBitcannaid {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBitcannaid();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.bcnaid = reader.string();
          break;
        case 3:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateBitcannaid>): MsgCreateBitcannaid {
    const message = createBaseMsgCreateBitcannaid();
    message.creator = object.creator ?? "";
    message.bcnaid = object.bcnaid ?? "";
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: MsgCreateBitcannaidAmino): MsgCreateBitcannaid {
    const message = createBaseMsgCreateBitcannaid();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.bcnaid !== undefined && object.bcnaid !== null) {
      message.bcnaid = object.bcnaid;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: MsgCreateBitcannaid): MsgCreateBitcannaidAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.bcnaid = message.bcnaid === "" ? undefined : message.bcnaid;
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: MsgCreateBitcannaidAminoMsg): MsgCreateBitcannaid {
    return MsgCreateBitcannaid.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateBitcannaidProtoMsg): MsgCreateBitcannaid {
    return MsgCreateBitcannaid.decode(message.value);
  },
  toProto(message: MsgCreateBitcannaid): Uint8Array {
    return MsgCreateBitcannaid.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateBitcannaid): MsgCreateBitcannaidProtoMsg {
    return {
      typeUrl: "/BitCannaGlobal.bcna.bcna.MsgCreateBitcannaid",
      value: MsgCreateBitcannaid.encode(message).finish()
    };
  }
};
function createBaseMsgCreateBitcannaidResponse(): MsgCreateBitcannaidResponse {
  return {
    id: BigInt(0)
  };
}
export const MsgCreateBitcannaidResponse = {
  typeUrl: "/BitCannaGlobal.bcna.bcna.MsgCreateBitcannaidResponse",
  encode(message: MsgCreateBitcannaidResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateBitcannaidResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBitcannaidResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateBitcannaidResponse>): MsgCreateBitcannaidResponse {
    const message = createBaseMsgCreateBitcannaidResponse();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCreateBitcannaidResponseAmino): MsgCreateBitcannaidResponse {
    const message = createBaseMsgCreateBitcannaidResponse();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: MsgCreateBitcannaidResponse): MsgCreateBitcannaidResponseAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? (message.id?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateBitcannaidResponseAminoMsg): MsgCreateBitcannaidResponse {
    return MsgCreateBitcannaidResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateBitcannaidResponseProtoMsg): MsgCreateBitcannaidResponse {
    return MsgCreateBitcannaidResponse.decode(message.value);
  },
  toProto(message: MsgCreateBitcannaidResponse): Uint8Array {
    return MsgCreateBitcannaidResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateBitcannaidResponse): MsgCreateBitcannaidResponseProtoMsg {
    return {
      typeUrl: "/BitCannaGlobal.bcna.bcna.MsgCreateBitcannaidResponse",
      value: MsgCreateBitcannaidResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateBitcannaid(): MsgUpdateBitcannaid {
  return {
    creator: "",
    id: BigInt(0),
    bcnaid: "",
    address: ""
  };
}
export const MsgUpdateBitcannaid = {
  typeUrl: "/BitCannaGlobal.bcna.bcna.MsgUpdateBitcannaid",
  encode(message: MsgUpdateBitcannaid, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.bcnaid !== "") {
      writer.uint32(26).string(message.bcnaid);
    }
    if (message.address !== "") {
      writer.uint32(34).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateBitcannaid {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateBitcannaid();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = reader.uint64();
          break;
        case 3:
          message.bcnaid = reader.string();
          break;
        case 4:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateBitcannaid>): MsgUpdateBitcannaid {
    const message = createBaseMsgUpdateBitcannaid();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.bcnaid = object.bcnaid ?? "";
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateBitcannaidAmino): MsgUpdateBitcannaid {
    const message = createBaseMsgUpdateBitcannaid();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.bcnaid !== undefined && object.bcnaid !== null) {
      message.bcnaid = object.bcnaid;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: MsgUpdateBitcannaid): MsgUpdateBitcannaidAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.id = message.id !== BigInt(0) ? (message.id?.toString)() : undefined;
    obj.bcnaid = message.bcnaid === "" ? undefined : message.bcnaid;
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateBitcannaidAminoMsg): MsgUpdateBitcannaid {
    return MsgUpdateBitcannaid.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateBitcannaidProtoMsg): MsgUpdateBitcannaid {
    return MsgUpdateBitcannaid.decode(message.value);
  },
  toProto(message: MsgUpdateBitcannaid): Uint8Array {
    return MsgUpdateBitcannaid.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateBitcannaid): MsgUpdateBitcannaidProtoMsg {
    return {
      typeUrl: "/BitCannaGlobal.bcna.bcna.MsgUpdateBitcannaid",
      value: MsgUpdateBitcannaid.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateBitcannaidResponse(): MsgUpdateBitcannaidResponse {
  return {};
}
export const MsgUpdateBitcannaidResponse = {
  typeUrl: "/BitCannaGlobal.bcna.bcna.MsgUpdateBitcannaidResponse",
  encode(_: MsgUpdateBitcannaidResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateBitcannaidResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateBitcannaidResponse();
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
  fromPartial(_: Partial<MsgUpdateBitcannaidResponse>): MsgUpdateBitcannaidResponse {
    const message = createBaseMsgUpdateBitcannaidResponse();
    return message;
  },
  fromAmino(_: MsgUpdateBitcannaidResponseAmino): MsgUpdateBitcannaidResponse {
    const message = createBaseMsgUpdateBitcannaidResponse();
    return message;
  },
  toAmino(_: MsgUpdateBitcannaidResponse): MsgUpdateBitcannaidResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateBitcannaidResponseAminoMsg): MsgUpdateBitcannaidResponse {
    return MsgUpdateBitcannaidResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateBitcannaidResponseProtoMsg): MsgUpdateBitcannaidResponse {
    return MsgUpdateBitcannaidResponse.decode(message.value);
  },
  toProto(message: MsgUpdateBitcannaidResponse): Uint8Array {
    return MsgUpdateBitcannaidResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateBitcannaidResponse): MsgUpdateBitcannaidResponseProtoMsg {
    return {
      typeUrl: "/BitCannaGlobal.bcna.bcna.MsgUpdateBitcannaidResponse",
      value: MsgUpdateBitcannaidResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteBitcannaid(): MsgDeleteBitcannaid {
  return {
    creator: "",
    id: BigInt(0)
  };
}
export const MsgDeleteBitcannaid = {
  typeUrl: "/BitCannaGlobal.bcna.bcna.MsgDeleteBitcannaid",
  encode(message: MsgDeleteBitcannaid, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteBitcannaid {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteBitcannaid();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgDeleteBitcannaid>): MsgDeleteBitcannaid {
    const message = createBaseMsgDeleteBitcannaid();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgDeleteBitcannaidAmino): MsgDeleteBitcannaid {
    const message = createBaseMsgDeleteBitcannaid();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: MsgDeleteBitcannaid): MsgDeleteBitcannaidAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.id = message.id !== BigInt(0) ? (message.id?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteBitcannaidAminoMsg): MsgDeleteBitcannaid {
    return MsgDeleteBitcannaid.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteBitcannaidProtoMsg): MsgDeleteBitcannaid {
    return MsgDeleteBitcannaid.decode(message.value);
  },
  toProto(message: MsgDeleteBitcannaid): Uint8Array {
    return MsgDeleteBitcannaid.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteBitcannaid): MsgDeleteBitcannaidProtoMsg {
    return {
      typeUrl: "/BitCannaGlobal.bcna.bcna.MsgDeleteBitcannaid",
      value: MsgDeleteBitcannaid.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteBitcannaidResponse(): MsgDeleteBitcannaidResponse {
  return {};
}
export const MsgDeleteBitcannaidResponse = {
  typeUrl: "/BitCannaGlobal.bcna.bcna.MsgDeleteBitcannaidResponse",
  encode(_: MsgDeleteBitcannaidResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteBitcannaidResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteBitcannaidResponse();
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
  fromPartial(_: Partial<MsgDeleteBitcannaidResponse>): MsgDeleteBitcannaidResponse {
    const message = createBaseMsgDeleteBitcannaidResponse();
    return message;
  },
  fromAmino(_: MsgDeleteBitcannaidResponseAmino): MsgDeleteBitcannaidResponse {
    const message = createBaseMsgDeleteBitcannaidResponse();
    return message;
  },
  toAmino(_: MsgDeleteBitcannaidResponse): MsgDeleteBitcannaidResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeleteBitcannaidResponseAminoMsg): MsgDeleteBitcannaidResponse {
    return MsgDeleteBitcannaidResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteBitcannaidResponseProtoMsg): MsgDeleteBitcannaidResponse {
    return MsgDeleteBitcannaidResponse.decode(message.value);
  },
  toProto(message: MsgDeleteBitcannaidResponse): Uint8Array {
    return MsgDeleteBitcannaidResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteBitcannaidResponse): MsgDeleteBitcannaidResponseProtoMsg {
    return {
      typeUrl: "/BitCannaGlobal.bcna.bcna.MsgDeleteBitcannaidResponse",
      value: MsgDeleteBitcannaidResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateSupplychain(): MsgCreateSupplychain {
  return {
    creator: "",
    product: "",
    info: "",
    supplyinfo: ""
  };
}
export const MsgCreateSupplychain = {
  typeUrl: "/BitCannaGlobal.bcna.bcna.MsgCreateSupplychain",
  encode(message: MsgCreateSupplychain, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.product !== "") {
      writer.uint32(18).string(message.product);
    }
    if (message.info !== "") {
      writer.uint32(26).string(message.info);
    }
    if (message.supplyinfo !== "") {
      writer.uint32(34).string(message.supplyinfo);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateSupplychain {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateSupplychain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.product = reader.string();
          break;
        case 3:
          message.info = reader.string();
          break;
        case 4:
          message.supplyinfo = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateSupplychain>): MsgCreateSupplychain {
    const message = createBaseMsgCreateSupplychain();
    message.creator = object.creator ?? "";
    message.product = object.product ?? "";
    message.info = object.info ?? "";
    message.supplyinfo = object.supplyinfo ?? "";
    return message;
  },
  fromAmino(object: MsgCreateSupplychainAmino): MsgCreateSupplychain {
    const message = createBaseMsgCreateSupplychain();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.product !== undefined && object.product !== null) {
      message.product = object.product;
    }
    if (object.info !== undefined && object.info !== null) {
      message.info = object.info;
    }
    if (object.supplyinfo !== undefined && object.supplyinfo !== null) {
      message.supplyinfo = object.supplyinfo;
    }
    return message;
  },
  toAmino(message: MsgCreateSupplychain): MsgCreateSupplychainAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.product = message.product === "" ? undefined : message.product;
    obj.info = message.info === "" ? undefined : message.info;
    obj.supplyinfo = message.supplyinfo === "" ? undefined : message.supplyinfo;
    return obj;
  },
  fromAminoMsg(object: MsgCreateSupplychainAminoMsg): MsgCreateSupplychain {
    return MsgCreateSupplychain.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateSupplychainProtoMsg): MsgCreateSupplychain {
    return MsgCreateSupplychain.decode(message.value);
  },
  toProto(message: MsgCreateSupplychain): Uint8Array {
    return MsgCreateSupplychain.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateSupplychain): MsgCreateSupplychainProtoMsg {
    return {
      typeUrl: "/BitCannaGlobal.bcna.bcna.MsgCreateSupplychain",
      value: MsgCreateSupplychain.encode(message).finish()
    };
  }
};
function createBaseMsgCreateSupplychainResponse(): MsgCreateSupplychainResponse {
  return {
    id: BigInt(0)
  };
}
export const MsgCreateSupplychainResponse = {
  typeUrl: "/BitCannaGlobal.bcna.bcna.MsgCreateSupplychainResponse",
  encode(message: MsgCreateSupplychainResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateSupplychainResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateSupplychainResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateSupplychainResponse>): MsgCreateSupplychainResponse {
    const message = createBaseMsgCreateSupplychainResponse();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCreateSupplychainResponseAmino): MsgCreateSupplychainResponse {
    const message = createBaseMsgCreateSupplychainResponse();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: MsgCreateSupplychainResponse): MsgCreateSupplychainResponseAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? (message.id?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateSupplychainResponseAminoMsg): MsgCreateSupplychainResponse {
    return MsgCreateSupplychainResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateSupplychainResponseProtoMsg): MsgCreateSupplychainResponse {
    return MsgCreateSupplychainResponse.decode(message.value);
  },
  toProto(message: MsgCreateSupplychainResponse): Uint8Array {
    return MsgCreateSupplychainResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateSupplychainResponse): MsgCreateSupplychainResponseProtoMsg {
    return {
      typeUrl: "/BitCannaGlobal.bcna.bcna.MsgCreateSupplychainResponse",
      value: MsgCreateSupplychainResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateSupplychain(): MsgUpdateSupplychain {
  return {
    creator: "",
    id: BigInt(0),
    product: "",
    info: "",
    supplyinfo: ""
  };
}
export const MsgUpdateSupplychain = {
  typeUrl: "/BitCannaGlobal.bcna.bcna.MsgUpdateSupplychain",
  encode(message: MsgUpdateSupplychain, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.product !== "") {
      writer.uint32(26).string(message.product);
    }
    if (message.info !== "") {
      writer.uint32(34).string(message.info);
    }
    if (message.supplyinfo !== "") {
      writer.uint32(42).string(message.supplyinfo);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateSupplychain {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateSupplychain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = reader.uint64();
          break;
        case 3:
          message.product = reader.string();
          break;
        case 4:
          message.info = reader.string();
          break;
        case 5:
          message.supplyinfo = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateSupplychain>): MsgUpdateSupplychain {
    const message = createBaseMsgUpdateSupplychain();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.product = object.product ?? "";
    message.info = object.info ?? "";
    message.supplyinfo = object.supplyinfo ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateSupplychainAmino): MsgUpdateSupplychain {
    const message = createBaseMsgUpdateSupplychain();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.product !== undefined && object.product !== null) {
      message.product = object.product;
    }
    if (object.info !== undefined && object.info !== null) {
      message.info = object.info;
    }
    if (object.supplyinfo !== undefined && object.supplyinfo !== null) {
      message.supplyinfo = object.supplyinfo;
    }
    return message;
  },
  toAmino(message: MsgUpdateSupplychain): MsgUpdateSupplychainAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.id = message.id !== BigInt(0) ? (message.id?.toString)() : undefined;
    obj.product = message.product === "" ? undefined : message.product;
    obj.info = message.info === "" ? undefined : message.info;
    obj.supplyinfo = message.supplyinfo === "" ? undefined : message.supplyinfo;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateSupplychainAminoMsg): MsgUpdateSupplychain {
    return MsgUpdateSupplychain.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateSupplychainProtoMsg): MsgUpdateSupplychain {
    return MsgUpdateSupplychain.decode(message.value);
  },
  toProto(message: MsgUpdateSupplychain): Uint8Array {
    return MsgUpdateSupplychain.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateSupplychain): MsgUpdateSupplychainProtoMsg {
    return {
      typeUrl: "/BitCannaGlobal.bcna.bcna.MsgUpdateSupplychain",
      value: MsgUpdateSupplychain.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateSupplychainResponse(): MsgUpdateSupplychainResponse {
  return {};
}
export const MsgUpdateSupplychainResponse = {
  typeUrl: "/BitCannaGlobal.bcna.bcna.MsgUpdateSupplychainResponse",
  encode(_: MsgUpdateSupplychainResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateSupplychainResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateSupplychainResponse();
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
  fromPartial(_: Partial<MsgUpdateSupplychainResponse>): MsgUpdateSupplychainResponse {
    const message = createBaseMsgUpdateSupplychainResponse();
    return message;
  },
  fromAmino(_: MsgUpdateSupplychainResponseAmino): MsgUpdateSupplychainResponse {
    const message = createBaseMsgUpdateSupplychainResponse();
    return message;
  },
  toAmino(_: MsgUpdateSupplychainResponse): MsgUpdateSupplychainResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateSupplychainResponseAminoMsg): MsgUpdateSupplychainResponse {
    return MsgUpdateSupplychainResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateSupplychainResponseProtoMsg): MsgUpdateSupplychainResponse {
    return MsgUpdateSupplychainResponse.decode(message.value);
  },
  toProto(message: MsgUpdateSupplychainResponse): Uint8Array {
    return MsgUpdateSupplychainResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateSupplychainResponse): MsgUpdateSupplychainResponseProtoMsg {
    return {
      typeUrl: "/BitCannaGlobal.bcna.bcna.MsgUpdateSupplychainResponse",
      value: MsgUpdateSupplychainResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteSupplychain(): MsgDeleteSupplychain {
  return {
    creator: "",
    id: BigInt(0)
  };
}
export const MsgDeleteSupplychain = {
  typeUrl: "/BitCannaGlobal.bcna.bcna.MsgDeleteSupplychain",
  encode(message: MsgDeleteSupplychain, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteSupplychain {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteSupplychain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgDeleteSupplychain>): MsgDeleteSupplychain {
    const message = createBaseMsgDeleteSupplychain();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgDeleteSupplychainAmino): MsgDeleteSupplychain {
    const message = createBaseMsgDeleteSupplychain();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: MsgDeleteSupplychain): MsgDeleteSupplychainAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.id = message.id !== BigInt(0) ? (message.id?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteSupplychainAminoMsg): MsgDeleteSupplychain {
    return MsgDeleteSupplychain.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteSupplychainProtoMsg): MsgDeleteSupplychain {
    return MsgDeleteSupplychain.decode(message.value);
  },
  toProto(message: MsgDeleteSupplychain): Uint8Array {
    return MsgDeleteSupplychain.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteSupplychain): MsgDeleteSupplychainProtoMsg {
    return {
      typeUrl: "/BitCannaGlobal.bcna.bcna.MsgDeleteSupplychain",
      value: MsgDeleteSupplychain.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteSupplychainResponse(): MsgDeleteSupplychainResponse {
  return {};
}
export const MsgDeleteSupplychainResponse = {
  typeUrl: "/BitCannaGlobal.bcna.bcna.MsgDeleteSupplychainResponse",
  encode(_: MsgDeleteSupplychainResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteSupplychainResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteSupplychainResponse();
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
  fromPartial(_: Partial<MsgDeleteSupplychainResponse>): MsgDeleteSupplychainResponse {
    const message = createBaseMsgDeleteSupplychainResponse();
    return message;
  },
  fromAmino(_: MsgDeleteSupplychainResponseAmino): MsgDeleteSupplychainResponse {
    const message = createBaseMsgDeleteSupplychainResponse();
    return message;
  },
  toAmino(_: MsgDeleteSupplychainResponse): MsgDeleteSupplychainResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeleteSupplychainResponseAminoMsg): MsgDeleteSupplychainResponse {
    return MsgDeleteSupplychainResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteSupplychainResponseProtoMsg): MsgDeleteSupplychainResponse {
    return MsgDeleteSupplychainResponse.decode(message.value);
  },
  toProto(message: MsgDeleteSupplychainResponse): Uint8Array {
    return MsgDeleteSupplychainResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteSupplychainResponse): MsgDeleteSupplychainResponseProtoMsg {
    return {
      typeUrl: "/BitCannaGlobal.bcna.bcna.MsgDeleteSupplychainResponse",
      value: MsgDeleteSupplychainResponse.encode(message).finish()
    };
  }
};