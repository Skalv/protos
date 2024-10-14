//@ts-nocheck
import { Token, TokenAmino, TokenSDKType } from "./leverage";
import { BinaryReader, BinaryWriter } from "../../../binary";
/**
 * UpdateRegistryProposal defines a governance proposal type where the token
 * registry can be updated in the Umee capital facility. Note, the registry
 * defined in the proposal replaces the current registry in its entirety.
 */
export interface UpdateRegistryProposal {
  title: string;
  description: string;
  registry: Token[];
}
export interface UpdateRegistryProposalProtoMsg {
  typeUrl: "/umee.leverage.v1.UpdateRegistryProposal";
  value: Uint8Array;
}
/**
 * UpdateRegistryProposal defines a governance proposal type where the token
 * registry can be updated in the Umee capital facility. Note, the registry
 * defined in the proposal replaces the current registry in its entirety.
 */
export interface UpdateRegistryProposalAmino {
  title?: string;
  description?: string;
  registry?: TokenAmino[];
}
export interface UpdateRegistryProposalAminoMsg {
  type: "/umee.leverage.v1.UpdateRegistryProposal";
  value: UpdateRegistryProposalAmino;
}
/**
 * UpdateRegistryProposal defines a governance proposal type where the token
 * registry can be updated in the Umee capital facility. Note, the registry
 * defined in the proposal replaces the current registry in its entirety.
 */
export interface UpdateRegistryProposalSDKType {
  title: string;
  description: string;
  registry: TokenSDKType[];
}
function createBaseUpdateRegistryProposal(): UpdateRegistryProposal {
  return {
    title: "",
    description: "",
    registry: []
  };
}
export const UpdateRegistryProposal = {
  typeUrl: "/umee.leverage.v1.UpdateRegistryProposal",
  encode(message: UpdateRegistryProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.registry) {
      Token.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UpdateRegistryProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateRegistryProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.registry.push(Token.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<UpdateRegistryProposal>): UpdateRegistryProposal {
    const message = createBaseUpdateRegistryProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.registry = object.registry?.map(e => Token.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: UpdateRegistryProposalAmino): UpdateRegistryProposal {
    const message = createBaseUpdateRegistryProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    message.registry = object.registry?.map(e => Token.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: UpdateRegistryProposal): UpdateRegistryProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    if (message.registry) {
      obj.registry = message.registry.map(e => e ? Token.toAmino(e) : undefined);
    } else {
      obj.registry = message.registry;
    }
    return obj;
  },
  fromAminoMsg(object: UpdateRegistryProposalAminoMsg): UpdateRegistryProposal {
    return UpdateRegistryProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: UpdateRegistryProposalProtoMsg): UpdateRegistryProposal {
    return UpdateRegistryProposal.decode(message.value);
  },
  toProto(message: UpdateRegistryProposal): Uint8Array {
    return UpdateRegistryProposal.encode(message).finish();
  },
  toProtoMsg(message: UpdateRegistryProposal): UpdateRegistryProposalProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.UpdateRegistryProposal",
      value: UpdateRegistryProposal.encode(message).finish()
    };
  }
};