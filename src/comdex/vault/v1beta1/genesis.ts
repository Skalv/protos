//@ts-nocheck
import { Vault, VaultAmino, VaultSDKType } from "./vault";
import { BinaryReader, BinaryWriter } from "../../../binary";
export interface GenesisState {
  vaults: Vault[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/comdex.vault.v1beta1.GenesisState";
  value: Uint8Array;
}
export interface GenesisStateAmino {
  vaults?: VaultAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/comdex.vault.v1beta1.GenesisState";
  value: GenesisStateAmino;
}
export interface GenesisStateSDKType {
  vaults: VaultSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    vaults: []
  };
}
export const GenesisState = {
  typeUrl: "/comdex.vault.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.vaults) {
      Vault.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.vaults.push(Vault.decode(reader, reader.uint32()));
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
    message.vaults = object.vaults?.map(e => Vault.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.vaults = object.vaults?.map(e => Vault.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.vaults) {
      obj.vaults = message.vaults.map(e => e ? Vault.toAmino(e) : undefined);
    } else {
      obj.vaults = message.vaults;
    }
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
      typeUrl: "/comdex.vault.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};