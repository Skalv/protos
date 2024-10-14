//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
export interface Pair {
  id: bigint;
  assetIn: bigint;
  assetOut: bigint;
  liquidationRatio: string;
}
export interface PairProtoMsg {
  typeUrl: "/comdex.asset.v1beta1.Pair";
  value: Uint8Array;
}
export interface PairAmino {
  id?: string;
  asset_in?: string;
  asset_out?: string;
  liquidation_ratio?: string;
}
export interface PairAminoMsg {
  type: "/comdex.asset.v1beta1.Pair";
  value: PairAmino;
}
export interface PairSDKType {
  id: bigint;
  asset_in: bigint;
  asset_out: bigint;
  liquidation_ratio: string;
}
function createBasePair(): Pair {
  return {
    id: BigInt(0),
    assetIn: BigInt(0),
    assetOut: BigInt(0),
    liquidationRatio: ""
  };
}
export const Pair = {
  typeUrl: "/comdex.asset.v1beta1.Pair",
  encode(message: Pair, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
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
  decode(input: BinaryReader | Uint8Array, length?: number): Pair {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
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
  fromPartial(object: Partial<Pair>): Pair {
    const message = createBasePair();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.assetIn = object.assetIn !== undefined && object.assetIn !== null ? BigInt(object.assetIn.toString()) : BigInt(0);
    message.assetOut = object.assetOut !== undefined && object.assetOut !== null ? BigInt(object.assetOut.toString()) : BigInt(0);
    message.liquidationRatio = object.liquidationRatio ?? "";
    return message;
  },
  fromAmino(object: PairAmino): Pair {
    const message = createBasePair();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
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
  toAmino(message: Pair): PairAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? (message.id?.toString)() : undefined;
    obj.asset_in = message.assetIn !== BigInt(0) ? (message.assetIn?.toString)() : undefined;
    obj.asset_out = message.assetOut !== BigInt(0) ? (message.assetOut?.toString)() : undefined;
    obj.liquidation_ratio = message.liquidationRatio === "" ? undefined : message.liquidationRatio;
    return obj;
  },
  fromAminoMsg(object: PairAminoMsg): Pair {
    return Pair.fromAmino(object.value);
  },
  fromProtoMsg(message: PairProtoMsg): Pair {
    return Pair.decode(message.value);
  },
  toProto(message: Pair): Uint8Array {
    return Pair.encode(message).finish();
  },
  toProtoMsg(message: Pair): PairProtoMsg {
    return {
      typeUrl: "/comdex.asset.v1beta1.Pair",
      value: Pair.encode(message).finish()
    };
  }
};