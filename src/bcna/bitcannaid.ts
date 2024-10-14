//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../binary";
export interface Bitcannaid {
  id: bigint;
  bcnaid: string;
  address: string;
  creator: string;
}
export interface BitcannaidProtoMsg {
  typeUrl: "/BitCannaGlobal.bcna.bcna.Bitcannaid";
  value: Uint8Array;
}
export interface BitcannaidAmino {
  id?: string;
  bcnaid?: string;
  address?: string;
  creator?: string;
}
export interface BitcannaidAminoMsg {
  type: "/BitCannaGlobal.bcna.bcna.Bitcannaid";
  value: BitcannaidAmino;
}
export interface BitcannaidSDKType {
  id: bigint;
  bcnaid: string;
  address: string;
  creator: string;
}
function createBaseBitcannaid(): Bitcannaid {
  return {
    id: BigInt(0),
    bcnaid: "",
    address: "",
    creator: ""
  };
}
export const Bitcannaid = {
  typeUrl: "/BitCannaGlobal.bcna.bcna.Bitcannaid",
  encode(message: Bitcannaid, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.bcnaid !== "") {
      writer.uint32(18).string(message.bcnaid);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    if (message.creator !== "") {
      writer.uint32(34).string(message.creator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Bitcannaid {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBitcannaid();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.bcnaid = reader.string();
          break;
        case 3:
          message.address = reader.string();
          break;
        case 4:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Bitcannaid>): Bitcannaid {
    const message = createBaseBitcannaid();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.bcnaid = object.bcnaid ?? "";
    message.address = object.address ?? "";
    message.creator = object.creator ?? "";
    return message;
  },
  fromAmino(object: BitcannaidAmino): Bitcannaid {
    const message = createBaseBitcannaid();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.bcnaid !== undefined && object.bcnaid !== null) {
      message.bcnaid = object.bcnaid;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    return message;
  },
  toAmino(message: Bitcannaid): BitcannaidAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? (message.id?.toString)() : undefined;
    obj.bcnaid = message.bcnaid === "" ? undefined : message.bcnaid;
    obj.address = message.address === "" ? undefined : message.address;
    obj.creator = message.creator === "" ? undefined : message.creator;
    return obj;
  },
  fromAminoMsg(object: BitcannaidAminoMsg): Bitcannaid {
    return Bitcannaid.fromAmino(object.value);
  },
  fromProtoMsg(message: BitcannaidProtoMsg): Bitcannaid {
    return Bitcannaid.decode(message.value);
  },
  toProto(message: Bitcannaid): Uint8Array {
    return Bitcannaid.encode(message).finish();
  },
  toProtoMsg(message: Bitcannaid): BitcannaidProtoMsg {
    return {
      typeUrl: "/BitCannaGlobal.bcna.bcna.Bitcannaid",
      value: Bitcannaid.encode(message).finish()
    };
  }
};