//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
/** EventCreateGroup is an event emitted when a group is created. */
export interface EventCreateGroup {
  /** group_id is the unique ID of the group. */
  groupId: bigint;
}
export interface EventCreateGroupProtoMsg {
  typeUrl: "/regen.group.v1alpha1.EventCreateGroup";
  value: Uint8Array;
}
/** EventCreateGroup is an event emitted when a group is created. */
export interface EventCreateGroupAmino {
  /** group_id is the unique ID of the group. */
  group_id?: string;
}
export interface EventCreateGroupAminoMsg {
  type: "/regen.group.v1alpha1.EventCreateGroup";
  value: EventCreateGroupAmino;
}
/** EventCreateGroup is an event emitted when a group is created. */
export interface EventCreateGroupSDKType {
  group_id: bigint;
}
/** EventUpdateGroup is an event emitted when a group is updated. */
export interface EventUpdateGroup {
  /** group_id is the unique ID of the group. */
  groupId: bigint;
}
export interface EventUpdateGroupProtoMsg {
  typeUrl: "/regen.group.v1alpha1.EventUpdateGroup";
  value: Uint8Array;
}
/** EventUpdateGroup is an event emitted when a group is updated. */
export interface EventUpdateGroupAmino {
  /** group_id is the unique ID of the group. */
  group_id?: string;
}
export interface EventUpdateGroupAminoMsg {
  type: "/regen.group.v1alpha1.EventUpdateGroup";
  value: EventUpdateGroupAmino;
}
/** EventUpdateGroup is an event emitted when a group is updated. */
export interface EventUpdateGroupSDKType {
  group_id: bigint;
}
/** EventCreateGroupAccount is an event emitted when a group account is created. */
export interface EventCreateGroupAccount {
  /** address is the address of the group account. */
  address: string;
}
export interface EventCreateGroupAccountProtoMsg {
  typeUrl: "/regen.group.v1alpha1.EventCreateGroupAccount";
  value: Uint8Array;
}
/** EventCreateGroupAccount is an event emitted when a group account is created. */
export interface EventCreateGroupAccountAmino {
  /** address is the address of the group account. */
  address?: string;
}
export interface EventCreateGroupAccountAminoMsg {
  type: "/regen.group.v1alpha1.EventCreateGroupAccount";
  value: EventCreateGroupAccountAmino;
}
/** EventCreateGroupAccount is an event emitted when a group account is created. */
export interface EventCreateGroupAccountSDKType {
  address: string;
}
/** EventUpdateGroupAccount is an event emitted when a group account is updated. */
export interface EventUpdateGroupAccount {
  /** address is the address of the group account. */
  address: string;
}
export interface EventUpdateGroupAccountProtoMsg {
  typeUrl: "/regen.group.v1alpha1.EventUpdateGroupAccount";
  value: Uint8Array;
}
/** EventUpdateGroupAccount is an event emitted when a group account is updated. */
export interface EventUpdateGroupAccountAmino {
  /** address is the address of the group account. */
  address?: string;
}
export interface EventUpdateGroupAccountAminoMsg {
  type: "/regen.group.v1alpha1.EventUpdateGroupAccount";
  value: EventUpdateGroupAccountAmino;
}
/** EventUpdateGroupAccount is an event emitted when a group account is updated. */
export interface EventUpdateGroupAccountSDKType {
  address: string;
}
/** EventCreateProposal is an event emitted when a proposal is created. */
export interface EventCreateProposal {
  /** proposal_id is the unique ID of the proposal. */
  proposalId: bigint;
}
export interface EventCreateProposalProtoMsg {
  typeUrl: "/regen.group.v1alpha1.EventCreateProposal";
  value: Uint8Array;
}
/** EventCreateProposal is an event emitted when a proposal is created. */
export interface EventCreateProposalAmino {
  /** proposal_id is the unique ID of the proposal. */
  proposal_id?: string;
}
export interface EventCreateProposalAminoMsg {
  type: "/regen.group.v1alpha1.EventCreateProposal";
  value: EventCreateProposalAmino;
}
/** EventCreateProposal is an event emitted when a proposal is created. */
export interface EventCreateProposalSDKType {
  proposal_id: bigint;
}
/** EventVote is an event emitted when a voter votes on a proposal. */
export interface EventVote {
  /** proposal_id is the unique ID of the proposal. */
  proposalId: bigint;
}
export interface EventVoteProtoMsg {
  typeUrl: "/regen.group.v1alpha1.EventVote";
  value: Uint8Array;
}
/** EventVote is an event emitted when a voter votes on a proposal. */
export interface EventVoteAmino {
  /** proposal_id is the unique ID of the proposal. */
  proposal_id?: string;
}
export interface EventVoteAminoMsg {
  type: "/regen.group.v1alpha1.EventVote";
  value: EventVoteAmino;
}
/** EventVote is an event emitted when a voter votes on a proposal. */
export interface EventVoteSDKType {
  proposal_id: bigint;
}
/** EventExec is an event emitted when a proposal is executed. */
export interface EventExec {
  /** proposal_id is the unique ID of the proposal. */
  proposalId: bigint;
}
export interface EventExecProtoMsg {
  typeUrl: "/regen.group.v1alpha1.EventExec";
  value: Uint8Array;
}
/** EventExec is an event emitted when a proposal is executed. */
export interface EventExecAmino {
  /** proposal_id is the unique ID of the proposal. */
  proposal_id?: string;
}
export interface EventExecAminoMsg {
  type: "/regen.group.v1alpha1.EventExec";
  value: EventExecAmino;
}
/** EventExec is an event emitted when a proposal is executed. */
export interface EventExecSDKType {
  proposal_id: bigint;
}
function createBaseEventCreateGroup(): EventCreateGroup {
  return {
    groupId: BigInt(0)
  };
}
export const EventCreateGroup = {
  typeUrl: "/regen.group.v1alpha1.EventCreateGroup",
  encode(message: EventCreateGroup, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.groupId !== BigInt(0)) {
      writer.uint32(8).uint64(message.groupId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventCreateGroup {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventCreateGroup>): EventCreateGroup {
    const message = createBaseEventCreateGroup();
    message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventCreateGroupAmino): EventCreateGroup {
    const message = createBaseEventCreateGroup();
    if (object.group_id !== undefined && object.group_id !== null) {
      message.groupId = BigInt(object.group_id);
    }
    return message;
  },
  toAmino(message: EventCreateGroup): EventCreateGroupAmino {
    const obj: any = {};
    obj.group_id = message.groupId !== BigInt(0) ? (message.groupId?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventCreateGroupAminoMsg): EventCreateGroup {
    return EventCreateGroup.fromAmino(object.value);
  },
  fromProtoMsg(message: EventCreateGroupProtoMsg): EventCreateGroup {
    return EventCreateGroup.decode(message.value);
  },
  toProto(message: EventCreateGroup): Uint8Array {
    return EventCreateGroup.encode(message).finish();
  },
  toProtoMsg(message: EventCreateGroup): EventCreateGroupProtoMsg {
    return {
      typeUrl: "/regen.group.v1alpha1.EventCreateGroup",
      value: EventCreateGroup.encode(message).finish()
    };
  }
};
function createBaseEventUpdateGroup(): EventUpdateGroup {
  return {
    groupId: BigInt(0)
  };
}
export const EventUpdateGroup = {
  typeUrl: "/regen.group.v1alpha1.EventUpdateGroup",
  encode(message: EventUpdateGroup, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.groupId !== BigInt(0)) {
      writer.uint32(8).uint64(message.groupId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventUpdateGroup {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventUpdateGroup>): EventUpdateGroup {
    const message = createBaseEventUpdateGroup();
    message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventUpdateGroupAmino): EventUpdateGroup {
    const message = createBaseEventUpdateGroup();
    if (object.group_id !== undefined && object.group_id !== null) {
      message.groupId = BigInt(object.group_id);
    }
    return message;
  },
  toAmino(message: EventUpdateGroup): EventUpdateGroupAmino {
    const obj: any = {};
    obj.group_id = message.groupId !== BigInt(0) ? (message.groupId?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventUpdateGroupAminoMsg): EventUpdateGroup {
    return EventUpdateGroup.fromAmino(object.value);
  },
  fromProtoMsg(message: EventUpdateGroupProtoMsg): EventUpdateGroup {
    return EventUpdateGroup.decode(message.value);
  },
  toProto(message: EventUpdateGroup): Uint8Array {
    return EventUpdateGroup.encode(message).finish();
  },
  toProtoMsg(message: EventUpdateGroup): EventUpdateGroupProtoMsg {
    return {
      typeUrl: "/regen.group.v1alpha1.EventUpdateGroup",
      value: EventUpdateGroup.encode(message).finish()
    };
  }
};
function createBaseEventCreateGroupAccount(): EventCreateGroupAccount {
  return {
    address: ""
  };
}
export const EventCreateGroupAccount = {
  typeUrl: "/regen.group.v1alpha1.EventCreateGroupAccount",
  encode(message: EventCreateGroupAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventCreateGroupAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateGroupAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventCreateGroupAccount>): EventCreateGroupAccount {
    const message = createBaseEventCreateGroupAccount();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: EventCreateGroupAccountAmino): EventCreateGroupAccount {
    const message = createBaseEventCreateGroupAccount();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: EventCreateGroupAccount): EventCreateGroupAccountAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: EventCreateGroupAccountAminoMsg): EventCreateGroupAccount {
    return EventCreateGroupAccount.fromAmino(object.value);
  },
  fromProtoMsg(message: EventCreateGroupAccountProtoMsg): EventCreateGroupAccount {
    return EventCreateGroupAccount.decode(message.value);
  },
  toProto(message: EventCreateGroupAccount): Uint8Array {
    return EventCreateGroupAccount.encode(message).finish();
  },
  toProtoMsg(message: EventCreateGroupAccount): EventCreateGroupAccountProtoMsg {
    return {
      typeUrl: "/regen.group.v1alpha1.EventCreateGroupAccount",
      value: EventCreateGroupAccount.encode(message).finish()
    };
  }
};
function createBaseEventUpdateGroupAccount(): EventUpdateGroupAccount {
  return {
    address: ""
  };
}
export const EventUpdateGroupAccount = {
  typeUrl: "/regen.group.v1alpha1.EventUpdateGroupAccount",
  encode(message: EventUpdateGroupAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventUpdateGroupAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateGroupAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventUpdateGroupAccount>): EventUpdateGroupAccount {
    const message = createBaseEventUpdateGroupAccount();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: EventUpdateGroupAccountAmino): EventUpdateGroupAccount {
    const message = createBaseEventUpdateGroupAccount();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: EventUpdateGroupAccount): EventUpdateGroupAccountAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: EventUpdateGroupAccountAminoMsg): EventUpdateGroupAccount {
    return EventUpdateGroupAccount.fromAmino(object.value);
  },
  fromProtoMsg(message: EventUpdateGroupAccountProtoMsg): EventUpdateGroupAccount {
    return EventUpdateGroupAccount.decode(message.value);
  },
  toProto(message: EventUpdateGroupAccount): Uint8Array {
    return EventUpdateGroupAccount.encode(message).finish();
  },
  toProtoMsg(message: EventUpdateGroupAccount): EventUpdateGroupAccountProtoMsg {
    return {
      typeUrl: "/regen.group.v1alpha1.EventUpdateGroupAccount",
      value: EventUpdateGroupAccount.encode(message).finish()
    };
  }
};
function createBaseEventCreateProposal(): EventCreateProposal {
  return {
    proposalId: BigInt(0)
  };
}
export const EventCreateProposal = {
  typeUrl: "/regen.group.v1alpha1.EventCreateProposal",
  encode(message: EventCreateProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventCreateProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventCreateProposal>): EventCreateProposal {
    const message = createBaseEventCreateProposal();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventCreateProposalAmino): EventCreateProposal {
    const message = createBaseEventCreateProposal();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    return message;
  },
  toAmino(message: EventCreateProposal): EventCreateProposalAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? (message.proposalId?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventCreateProposalAminoMsg): EventCreateProposal {
    return EventCreateProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: EventCreateProposalProtoMsg): EventCreateProposal {
    return EventCreateProposal.decode(message.value);
  },
  toProto(message: EventCreateProposal): Uint8Array {
    return EventCreateProposal.encode(message).finish();
  },
  toProtoMsg(message: EventCreateProposal): EventCreateProposalProtoMsg {
    return {
      typeUrl: "/regen.group.v1alpha1.EventCreateProposal",
      value: EventCreateProposal.encode(message).finish()
    };
  }
};
function createBaseEventVote(): EventVote {
  return {
    proposalId: BigInt(0)
  };
}
export const EventVote = {
  typeUrl: "/regen.group.v1alpha1.EventVote",
  encode(message: EventVote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventVote {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventVote>): EventVote {
    const message = createBaseEventVote();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventVoteAmino): EventVote {
    const message = createBaseEventVote();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    return message;
  },
  toAmino(message: EventVote): EventVoteAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? (message.proposalId?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventVoteAminoMsg): EventVote {
    return EventVote.fromAmino(object.value);
  },
  fromProtoMsg(message: EventVoteProtoMsg): EventVote {
    return EventVote.decode(message.value);
  },
  toProto(message: EventVote): Uint8Array {
    return EventVote.encode(message).finish();
  },
  toProtoMsg(message: EventVote): EventVoteProtoMsg {
    return {
      typeUrl: "/regen.group.v1alpha1.EventVote",
      value: EventVote.encode(message).finish()
    };
  }
};
function createBaseEventExec(): EventExec {
  return {
    proposalId: BigInt(0)
  };
}
export const EventExec = {
  typeUrl: "/regen.group.v1alpha1.EventExec",
  encode(message: EventExec, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventExec {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventExec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventExec>): EventExec {
    const message = createBaseEventExec();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventExecAmino): EventExec {
    const message = createBaseEventExec();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    return message;
  },
  toAmino(message: EventExec): EventExecAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? (message.proposalId?.toString)() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventExecAminoMsg): EventExec {
    return EventExec.fromAmino(object.value);
  },
  fromProtoMsg(message: EventExecProtoMsg): EventExec {
    return EventExec.decode(message.value);
  },
  toProto(message: EventExec): Uint8Array {
    return EventExec.encode(message).finish();
  },
  toProtoMsg(message: EventExec): EventExecProtoMsg {
    return {
      typeUrl: "/regen.group.v1alpha1.EventExec",
      value: EventExec.encode(message).finish()
    };
  }
};