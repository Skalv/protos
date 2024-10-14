//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
export interface Params {
  admin: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/comdex.asset.v1beta1.Params";
  value: Uint8Array;
}
export interface ParamsAmino {
  admin?: string;
}
export interface ParamsAminoMsg {
  type: "/comdex.asset.v1beta1.Params";
  value: ParamsAmino;
}
export interface ParamsSDKType {
  admin: string;
}
function createBaseParams(): Params {
  return {
    admin: ""
  };
}
export const Params = {
  typeUrl: "/comdex.asset.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
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
          message.admin = reader.string();
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
    message.admin = object.admin ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.admin = message.admin === "" ? undefined : message.admin;
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
      typeUrl: "/comdex.asset.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};