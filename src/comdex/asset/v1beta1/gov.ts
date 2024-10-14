//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
export interface UpdateAdminProposal {
  title: string;
  description: string;
  address: string;
}
export interface UpdateAdminProposalProtoMsg {
  typeUrl: "/comdex.asset.v1beta1.UpdateAdminProposal";
  value: Uint8Array;
}
export interface UpdateAdminProposalAmino {
  title?: string;
  description?: string;
  address?: string;
}
export interface UpdateAdminProposalAminoMsg {
  type: "/comdex.asset.v1beta1.UpdateAdminProposal";
  value: UpdateAdminProposalAmino;
}
export interface UpdateAdminProposalSDKType {
  title: string;
  description: string;
  address: string;
}
function createBaseUpdateAdminProposal(): UpdateAdminProposal {
  return {
    title: "",
    description: "",
    address: ""
  };
}
export const UpdateAdminProposal = {
  typeUrl: "/comdex.asset.v1beta1.UpdateAdminProposal",
  encode(message: UpdateAdminProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UpdateAdminProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateAdminProposal();
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
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<UpdateAdminProposal>): UpdateAdminProposal {
    const message = createBaseUpdateAdminProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: UpdateAdminProposalAmino): UpdateAdminProposal {
    const message = createBaseUpdateAdminProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: UpdateAdminProposal): UpdateAdminProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: UpdateAdminProposalAminoMsg): UpdateAdminProposal {
    return UpdateAdminProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: UpdateAdminProposalProtoMsg): UpdateAdminProposal {
    return UpdateAdminProposal.decode(message.value);
  },
  toProto(message: UpdateAdminProposal): Uint8Array {
    return UpdateAdminProposal.encode(message).finish();
  },
  toProtoMsg(message: UpdateAdminProposal): UpdateAdminProposalProtoMsg {
    return {
      typeUrl: "/comdex.asset.v1beta1.UpdateAdminProposal",
      value: UpdateAdminProposal.encode(message).finish()
    };
  }
};