//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseEventCreateGroup() {
    return {
        groupId: BigInt(0)
    };
}
export const EventCreateGroup = {
    typeUrl: "/regen.group.v1alpha1.EventCreateGroup",
    encode(message, writer = BinaryWriter.create()) {
        if (message.groupId !== BigInt(0)) {
            writer.uint32(8).uint64(message.groupId);
        }
        return writer;
    },
    decode(input, length) {
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
    fromPartial(object) {
        const message = createBaseEventCreateGroup();
        message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventCreateGroup();
        if (object.group_id !== undefined && object.group_id !== null) {
            message.groupId = BigInt(object.group_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.group_id = message.groupId !== BigInt(0) ? (message.groupId?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return EventCreateGroup.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventCreateGroup.decode(message.value);
    },
    toProto(message) {
        return EventCreateGroup.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.EventCreateGroup",
            value: EventCreateGroup.encode(message).finish()
        };
    }
};
function createBaseEventUpdateGroup() {
    return {
        groupId: BigInt(0)
    };
}
export const EventUpdateGroup = {
    typeUrl: "/regen.group.v1alpha1.EventUpdateGroup",
    encode(message, writer = BinaryWriter.create()) {
        if (message.groupId !== BigInt(0)) {
            writer.uint32(8).uint64(message.groupId);
        }
        return writer;
    },
    decode(input, length) {
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
    fromPartial(object) {
        const message = createBaseEventUpdateGroup();
        message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventUpdateGroup();
        if (object.group_id !== undefined && object.group_id !== null) {
            message.groupId = BigInt(object.group_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.group_id = message.groupId !== BigInt(0) ? (message.groupId?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return EventUpdateGroup.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventUpdateGroup.decode(message.value);
    },
    toProto(message) {
        return EventUpdateGroup.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.EventUpdateGroup",
            value: EventUpdateGroup.encode(message).finish()
        };
    }
};
function createBaseEventCreateGroupAccount() {
    return {
        address: ""
    };
}
export const EventCreateGroupAccount = {
    typeUrl: "/regen.group.v1alpha1.EventCreateGroupAccount",
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
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
    fromPartial(object) {
        const message = createBaseEventCreateGroupAccount();
        message.address = object.address ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventCreateGroupAccount();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return EventCreateGroupAccount.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventCreateGroupAccount.decode(message.value);
    },
    toProto(message) {
        return EventCreateGroupAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.EventCreateGroupAccount",
            value: EventCreateGroupAccount.encode(message).finish()
        };
    }
};
function createBaseEventUpdateGroupAccount() {
    return {
        address: ""
    };
}
export const EventUpdateGroupAccount = {
    typeUrl: "/regen.group.v1alpha1.EventUpdateGroupAccount",
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
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
    fromPartial(object) {
        const message = createBaseEventUpdateGroupAccount();
        message.address = object.address ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventUpdateGroupAccount();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return EventUpdateGroupAccount.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventUpdateGroupAccount.decode(message.value);
    },
    toProto(message) {
        return EventUpdateGroupAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.EventUpdateGroupAccount",
            value: EventUpdateGroupAccount.encode(message).finish()
        };
    }
};
function createBaseEventCreateProposal() {
    return {
        proposalId: BigInt(0)
    };
}
export const EventCreateProposal = {
    typeUrl: "/regen.group.v1alpha1.EventCreateProposal",
    encode(message, writer = BinaryWriter.create()) {
        if (message.proposalId !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposalId);
        }
        return writer;
    },
    decode(input, length) {
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
    fromPartial(object) {
        const message = createBaseEventCreateProposal();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventCreateProposal();
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposalId = BigInt(object.proposal_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposalId !== BigInt(0) ? (message.proposalId?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return EventCreateProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventCreateProposal.decode(message.value);
    },
    toProto(message) {
        return EventCreateProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.EventCreateProposal",
            value: EventCreateProposal.encode(message).finish()
        };
    }
};
function createBaseEventVote() {
    return {
        proposalId: BigInt(0)
    };
}
export const EventVote = {
    typeUrl: "/regen.group.v1alpha1.EventVote",
    encode(message, writer = BinaryWriter.create()) {
        if (message.proposalId !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposalId);
        }
        return writer;
    },
    decode(input, length) {
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
    fromPartial(object) {
        const message = createBaseEventVote();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventVote();
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposalId = BigInt(object.proposal_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposalId !== BigInt(0) ? (message.proposalId?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return EventVote.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventVote.decode(message.value);
    },
    toProto(message) {
        return EventVote.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.EventVote",
            value: EventVote.encode(message).finish()
        };
    }
};
function createBaseEventExec() {
    return {
        proposalId: BigInt(0)
    };
}
export const EventExec = {
    typeUrl: "/regen.group.v1alpha1.EventExec",
    encode(message, writer = BinaryWriter.create()) {
        if (message.proposalId !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposalId);
        }
        return writer;
    },
    decode(input, length) {
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
    fromPartial(object) {
        const message = createBaseEventExec();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventExec();
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposalId = BigInt(object.proposal_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposalId !== BigInt(0) ? (message.proposalId?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return EventExec.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventExec.decode(message.value);
    },
    toProto(message) {
        return EventExec.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.EventExec",
            value: EventExec.encode(message).finish()
        };
    }
};
