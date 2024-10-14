//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
/** Params holds parameters for the halving module. */
export interface Params {
  /** periodic height at which inflation decreases */
  blockHeight: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/persistence.halving.v1beta1.Params";
  value: Uint8Array;
}
/** Params holds parameters for the halving module. */
export interface ParamsAmino {
  /** periodic height at which inflation decreases */
  blockHeight?: string;
}
export interface ParamsAminoMsg {
  type: "/persistence.halving.v1beta1.Params";
  value: ParamsAmino;
}
/** Params holds parameters for the halving module. */
export interface ParamsSDKType {
  blockHeight: bigint;
}
function createBaseParams(): Params {
  return {
    blockHeight: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/persistence.halving.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(8).uint64(message.blockHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockHeight = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = BigInt(object.blockHeight);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.blockHeight = message.blockHeight !== BigInt(0) ? (message.blockHeight?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/persistence.halving.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};