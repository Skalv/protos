//@ts-nocheck
import { Asset, AssetAmino, AssetSDKType } from "./asset";
import { Pair, PairAmino, PairSDKType } from "./pair";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
export interface GenesisState {
  assets: Asset[];
  pairs: Pair[];
  params: Params;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/comdex.asset.v1beta1.GenesisState";
  value: Uint8Array;
}
export interface GenesisStateAmino {
  assets?: AssetAmino[];
  pairs?: PairAmino[];
  params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
  type: "/comdex.asset.v1beta1.GenesisState";
  value: GenesisStateAmino;
}
export interface GenesisStateSDKType {
  assets: AssetSDKType[];
  pairs: PairSDKType[];
  params: ParamsSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    assets: [],
    pairs: [],
    params: Params.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: "/comdex.asset.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.assets) {
      Asset.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.pairs) {
      Pair.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assets.push(Asset.decode(reader, reader.uint32()));
          break;
        case 3:
          message.pairs.push(Pair.decode(reader, reader.uint32()));
          break;
        case 4:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.assets = object.assets?.map(e => Asset.fromPartial(e)) || [];
    message.pairs = object.pairs?.map(e => Pair.fromPartial(e)) || [];
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.assets = object.assets?.map(e => Asset.fromAmino(e)) || [];
    message.pairs = object.pairs?.map(e => Pair.fromAmino(e)) || [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.assets) {
      obj.assets = message.assets.map(e => e ? Asset.toAmino(e) : undefined);
    } else {
      obj.assets = message.assets;
    }
    if (message.pairs) {
      obj.pairs = message.pairs.map(e => e ? Pair.toAmino(e) : undefined);
    } else {
      obj.pairs = message.pairs;
    }
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/comdex.asset.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};