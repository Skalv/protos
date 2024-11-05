//@ts-nocheck
import { Member, ThresholdDecisionPolicy } from "./types";
import { Any } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../helpers";
/** Exec defines modes of execution of a proposal on creation or on new vote. */
export var Exec;
(function (Exec) {
    /**
     * EXEC_UNSPECIFIED - An empty value means that there should be a separate
     * MsgExec request for the proposal to execute.
     */
    Exec[Exec["EXEC_UNSPECIFIED"] = 0] = "EXEC_UNSPECIFIED";
    /**
     * EXEC_TRY - Try to execute the proposal immediately.
     * If the proposal is not allowed per the DecisionPolicy,
     * the proposal will still be open and could
     * be executed at a later point.
     */
    Exec[Exec["EXEC_TRY"] = 1] = "EXEC_TRY";
    Exec[Exec["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Exec || (Exec = {}));
export const ExecSDKType = Exec;
export const ExecAmino = Exec;
export function execFromJSON(object) {
    switch (object) {
        case 0:
        case "EXEC_UNSPECIFIED":
            return Exec.EXEC_UNSPECIFIED;
        case 1:
        case "EXEC_TRY":
            return Exec.EXEC_TRY;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Exec.UNRECOGNIZED;
    }
}
export function execToJSON(object) {
    switch (object) {
        case Exec.EXEC_UNSPECIFIED:
            return "EXEC_UNSPECIFIED";
        case Exec.EXEC_TRY:
            return "EXEC_TRY";
        case Exec.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseMsgCreateGroup() {
    return {
        admin: "",
        members: [],
        metadata: new Uint8Array()
    };
}
export const MsgCreateGroup = {
    typeUrl: "/regen.group.v1alpha1.MsgCreateGroup",
    encode(message, writer = BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        for (const v of message.members) {
            Member.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.metadata.length !== 0) {
            writer.uint32(26).bytes(message.metadata);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateGroup();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.members.push(Member.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.metadata = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateGroup();
        message.admin = object.admin ?? "";
        message.members = object.members?.map(e => Member.fromPartial(e)) || [];
        message.metadata = object.metadata ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateGroup();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        message.members = object.members?.map(e => Member.fromAmino(e)) || [];
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = bytesFromBase64(object.metadata);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin === "" ? undefined : message.admin;
        if (message.members) {
            obj.members = message.members.map(e => e ? Member.toAmino(e) : undefined);
        }
        else {
            obj.members = message.members;
        }
        obj.metadata = message.metadata ? base64FromBytes(message.metadata) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateGroup.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCreateGroup.decode(message.value);
    },
    toProto(message) {
        return MsgCreateGroup.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.MsgCreateGroup",
            value: MsgCreateGroup.encode(message).finish()
        };
    }
};
function createBaseMsgCreateGroupResponse() {
    return {
        groupId: BigInt(0)
    };
}
export const MsgCreateGroupResponse = {
    typeUrl: "/regen.group.v1alpha1.MsgCreateGroupResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.groupId !== BigInt(0)) {
            writer.uint32(8).uint64(message.groupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateGroupResponse();
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
        const message = createBaseMsgCreateGroupResponse();
        message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateGroupResponse();
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
        return MsgCreateGroupResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCreateGroupResponse.decode(message.value);
    },
    toProto(message) {
        return MsgCreateGroupResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.MsgCreateGroupResponse",
            value: MsgCreateGroupResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateGroupMembers() {
    return {
        admin: "",
        groupId: BigInt(0),
        memberUpdates: []
    };
}
export const MsgUpdateGroupMembers = {
    typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupMembers",
    encode(message, writer = BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.groupId !== BigInt(0)) {
            writer.uint32(16).uint64(message.groupId);
        }
        for (const v of message.memberUpdates) {
            Member.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupMembers();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.groupId = reader.uint64();
                    break;
                case 3:
                    message.memberUpdates.push(Member.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateGroupMembers();
        message.admin = object.admin ?? "";
        message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
        message.memberUpdates = object.memberUpdates?.map(e => Member.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateGroupMembers();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.group_id !== undefined && object.group_id !== null) {
            message.groupId = BigInt(object.group_id);
        }
        message.memberUpdates = object.member_updates?.map(e => Member.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin === "" ? undefined : message.admin;
        obj.group_id = message.groupId !== BigInt(0) ? (message.groupId?.toString)() : undefined;
        if (message.memberUpdates) {
            obj.member_updates = message.memberUpdates.map(e => e ? Member.toAmino(e) : undefined);
        }
        else {
            obj.member_updates = message.memberUpdates;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateGroupMembers.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgUpdateGroupMembers.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateGroupMembers.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupMembers",
            value: MsgUpdateGroupMembers.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateGroupMembersResponse() {
    return {};
}
export const MsgUpdateGroupMembersResponse = {
    typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupMembersResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupMembersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateGroupMembersResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUpdateGroupMembersResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateGroupMembersResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgUpdateGroupMembersResponse.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateGroupMembersResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupMembersResponse",
            value: MsgUpdateGroupMembersResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateGroupAdmin() {
    return {
        admin: "",
        groupId: BigInt(0),
        newAdmin: ""
    };
}
export const MsgUpdateGroupAdmin = {
    typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupAdmin",
    encode(message, writer = BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.groupId !== BigInt(0)) {
            writer.uint32(16).uint64(message.groupId);
        }
        if (message.newAdmin !== "") {
            writer.uint32(26).string(message.newAdmin);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupAdmin();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.groupId = reader.uint64();
                    break;
                case 3:
                    message.newAdmin = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateGroupAdmin();
        message.admin = object.admin ?? "";
        message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
        message.newAdmin = object.newAdmin ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateGroupAdmin();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.group_id !== undefined && object.group_id !== null) {
            message.groupId = BigInt(object.group_id);
        }
        if (object.new_admin !== undefined && object.new_admin !== null) {
            message.newAdmin = object.new_admin;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin === "" ? undefined : message.admin;
        obj.group_id = message.groupId !== BigInt(0) ? (message.groupId?.toString)() : undefined;
        obj.new_admin = message.newAdmin === "" ? undefined : message.newAdmin;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateGroupAdmin.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgUpdateGroupAdmin.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateGroupAdmin.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupAdmin",
            value: MsgUpdateGroupAdmin.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateGroupAdminResponse() {
    return {};
}
export const MsgUpdateGroupAdminResponse = {
    typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupAdminResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupAdminResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateGroupAdminResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUpdateGroupAdminResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateGroupAdminResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgUpdateGroupAdminResponse.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateGroupAdminResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupAdminResponse",
            value: MsgUpdateGroupAdminResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateGroupMetadata() {
    return {
        admin: "",
        groupId: BigInt(0),
        metadata: new Uint8Array()
    };
}
export const MsgUpdateGroupMetadata = {
    typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupMetadata",
    encode(message, writer = BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.groupId !== BigInt(0)) {
            writer.uint32(16).uint64(message.groupId);
        }
        if (message.metadata.length !== 0) {
            writer.uint32(26).bytes(message.metadata);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.groupId = reader.uint64();
                    break;
                case 3:
                    message.metadata = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateGroupMetadata();
        message.admin = object.admin ?? "";
        message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
        message.metadata = object.metadata ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateGroupMetadata();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.group_id !== undefined && object.group_id !== null) {
            message.groupId = BigInt(object.group_id);
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = bytesFromBase64(object.metadata);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin === "" ? undefined : message.admin;
        obj.group_id = message.groupId !== BigInt(0) ? (message.groupId?.toString)() : undefined;
        obj.metadata = message.metadata ? base64FromBytes(message.metadata) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateGroupMetadata.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgUpdateGroupMetadata.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateGroupMetadata.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupMetadata",
            value: MsgUpdateGroupMetadata.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateGroupMetadataResponse() {
    return {};
}
export const MsgUpdateGroupMetadataResponse = {
    typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupMetadataResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupMetadataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateGroupMetadataResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUpdateGroupMetadataResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateGroupMetadataResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgUpdateGroupMetadataResponse.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateGroupMetadataResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupMetadataResponse",
            value: MsgUpdateGroupMetadataResponse.encode(message).finish()
        };
    }
};
function createBaseMsgCreateGroupAccount() {
    return {
        admin: "",
        groupId: BigInt(0),
        metadata: new Uint8Array(),
        decisionPolicy: undefined
    };
}
export const MsgCreateGroupAccount = {
    typeUrl: "/regen.group.v1alpha1.MsgCreateGroupAccount",
    encode(message, writer = BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.groupId !== BigInt(0)) {
            writer.uint32(16).uint64(message.groupId);
        }
        if (message.metadata.length !== 0) {
            writer.uint32(26).bytes(message.metadata);
        }
        if (message.decisionPolicy !== undefined) {
            Any.encode(message.decisionPolicy, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateGroupAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.groupId = reader.uint64();
                    break;
                case 3:
                    message.metadata = reader.bytes();
                    break;
                case 4:
                    message.decisionPolicy = DecisionPolicy_InterfaceDecoder(reader);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateGroupAccount();
        message.admin = object.admin ?? "";
        message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
        message.metadata = object.metadata ?? new Uint8Array();
        message.decisionPolicy = object.decisionPolicy !== undefined && object.decisionPolicy !== null ? Any.fromPartial(object.decisionPolicy) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateGroupAccount();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.group_id !== undefined && object.group_id !== null) {
            message.groupId = BigInt(object.group_id);
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = bytesFromBase64(object.metadata);
        }
        if (object.decision_policy !== undefined && object.decision_policy !== null) {
            message.decisionPolicy = DecisionPolicy_FromAmino(object.decision_policy);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin === "" ? undefined : message.admin;
        obj.group_id = message.groupId !== BigInt(0) ? (message.groupId?.toString)() : undefined;
        obj.metadata = message.metadata ? base64FromBytes(message.metadata) : undefined;
        obj.decision_policy = message.decisionPolicy ? DecisionPolicy_ToAmino(message.decisionPolicy) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateGroupAccount.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCreateGroupAccount.decode(message.value);
    },
    toProto(message) {
        return MsgCreateGroupAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.MsgCreateGroupAccount",
            value: MsgCreateGroupAccount.encode(message).finish()
        };
    }
};
function createBaseMsgCreateGroupAccountResponse() {
    return {
        address: ""
    };
}
export const MsgCreateGroupAccountResponse = {
    typeUrl: "/regen.group.v1alpha1.MsgCreateGroupAccountResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateGroupAccountResponse();
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
        const message = createBaseMsgCreateGroupAccountResponse();
        message.address = object.address ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateGroupAccountResponse();
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
        return MsgCreateGroupAccountResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCreateGroupAccountResponse.decode(message.value);
    },
    toProto(message) {
        return MsgCreateGroupAccountResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.MsgCreateGroupAccountResponse",
            value: MsgCreateGroupAccountResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateGroupAccountAdmin() {
    return {
        admin: "",
        address: "",
        newAdmin: ""
    };
}
export const MsgUpdateGroupAccountAdmin = {
    typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupAccountAdmin",
    encode(message, writer = BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        if (message.newAdmin !== "") {
            writer.uint32(26).string(message.newAdmin);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupAccountAdmin();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.address = reader.string();
                    break;
                case 3:
                    message.newAdmin = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateGroupAccountAdmin();
        message.admin = object.admin ?? "";
        message.address = object.address ?? "";
        message.newAdmin = object.newAdmin ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateGroupAccountAdmin();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.new_admin !== undefined && object.new_admin !== null) {
            message.newAdmin = object.new_admin;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin === "" ? undefined : message.admin;
        obj.address = message.address === "" ? undefined : message.address;
        obj.new_admin = message.newAdmin === "" ? undefined : message.newAdmin;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateGroupAccountAdmin.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgUpdateGroupAccountAdmin.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateGroupAccountAdmin.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupAccountAdmin",
            value: MsgUpdateGroupAccountAdmin.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateGroupAccountAdminResponse() {
    return {};
}
export const MsgUpdateGroupAccountAdminResponse = {
    typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupAccountAdminResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupAccountAdminResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateGroupAccountAdminResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUpdateGroupAccountAdminResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateGroupAccountAdminResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgUpdateGroupAccountAdminResponse.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateGroupAccountAdminResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupAccountAdminResponse",
            value: MsgUpdateGroupAccountAdminResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateGroupAccountDecisionPolicy() {
    return {
        admin: "",
        address: "",
        decisionPolicy: undefined
    };
}
export const MsgUpdateGroupAccountDecisionPolicy = {
    typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupAccountDecisionPolicy",
    encode(message, writer = BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        if (message.decisionPolicy !== undefined) {
            Any.encode(message.decisionPolicy, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupAccountDecisionPolicy();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.address = reader.string();
                    break;
                case 3:
                    message.decisionPolicy = DecisionPolicy_InterfaceDecoder(reader);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateGroupAccountDecisionPolicy();
        message.admin = object.admin ?? "";
        message.address = object.address ?? "";
        message.decisionPolicy = object.decisionPolicy !== undefined && object.decisionPolicy !== null ? Any.fromPartial(object.decisionPolicy) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateGroupAccountDecisionPolicy();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.decision_policy !== undefined && object.decision_policy !== null) {
            message.decisionPolicy = DecisionPolicy_FromAmino(object.decision_policy);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin === "" ? undefined : message.admin;
        obj.address = message.address === "" ? undefined : message.address;
        obj.decision_policy = message.decisionPolicy ? DecisionPolicy_ToAmino(message.decisionPolicy) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateGroupAccountDecisionPolicy.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgUpdateGroupAccountDecisionPolicy.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateGroupAccountDecisionPolicy.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupAccountDecisionPolicy",
            value: MsgUpdateGroupAccountDecisionPolicy.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateGroupAccountDecisionPolicyResponse() {
    return {};
}
export const MsgUpdateGroupAccountDecisionPolicyResponse = {
    typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupAccountDecisionPolicyResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupAccountDecisionPolicyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateGroupAccountDecisionPolicyResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUpdateGroupAccountDecisionPolicyResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateGroupAccountDecisionPolicyResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgUpdateGroupAccountDecisionPolicyResponse.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateGroupAccountDecisionPolicyResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupAccountDecisionPolicyResponse",
            value: MsgUpdateGroupAccountDecisionPolicyResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateGroupAccountMetadata() {
    return {
        admin: "",
        address: "",
        metadata: new Uint8Array()
    };
}
export const MsgUpdateGroupAccountMetadata = {
    typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupAccountMetadata",
    encode(message, writer = BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        if (message.metadata.length !== 0) {
            writer.uint32(26).bytes(message.metadata);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupAccountMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.address = reader.string();
                    break;
                case 3:
                    message.metadata = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateGroupAccountMetadata();
        message.admin = object.admin ?? "";
        message.address = object.address ?? "";
        message.metadata = object.metadata ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateGroupAccountMetadata();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = bytesFromBase64(object.metadata);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin === "" ? undefined : message.admin;
        obj.address = message.address === "" ? undefined : message.address;
        obj.metadata = message.metadata ? base64FromBytes(message.metadata) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateGroupAccountMetadata.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgUpdateGroupAccountMetadata.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateGroupAccountMetadata.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupAccountMetadata",
            value: MsgUpdateGroupAccountMetadata.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateGroupAccountMetadataResponse() {
    return {};
}
export const MsgUpdateGroupAccountMetadataResponse = {
    typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupAccountMetadataResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupAccountMetadataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateGroupAccountMetadataResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUpdateGroupAccountMetadataResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateGroupAccountMetadataResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgUpdateGroupAccountMetadataResponse.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateGroupAccountMetadataResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupAccountMetadataResponse",
            value: MsgUpdateGroupAccountMetadataResponse.encode(message).finish()
        };
    }
};
function createBaseMsgCreateProposal() {
    return {
        address: "",
        proposers: [],
        metadata: new Uint8Array(),
        msgs: [],
        exec: 0
    };
}
export const MsgCreateProposal = {
    typeUrl: "/regen.group.v1alpha1.MsgCreateProposal",
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        for (const v of message.proposers) {
            writer.uint32(18).string(v);
        }
        if (message.metadata.length !== 0) {
            writer.uint32(26).bytes(message.metadata);
        }
        for (const v of message.msgs) {
            Any.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.exec !== 0) {
            writer.uint32(40).int32(message.exec);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.proposers.push(reader.string());
                    break;
                case 3:
                    message.metadata = reader.bytes();
                    break;
                case 4:
                    message.msgs.push(Any.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.exec = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateProposal();
        message.address = object.address ?? "";
        message.proposers = object.proposers?.map(e => e) || [];
        message.metadata = object.metadata ?? new Uint8Array();
        message.msgs = object.msgs?.map(e => Any.fromPartial(e)) || [];
        message.exec = object.exec ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateProposal();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        message.proposers = object.proposers?.map(e => e) || [];
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = bytesFromBase64(object.metadata);
        }
        message.msgs = object.msgs?.map(e => Any.fromAmino(e)) || [];
        if (object.exec !== undefined && object.exec !== null) {
            message.exec = object.exec;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        if (message.proposers) {
            obj.proposers = message.proposers.map(e => e);
        }
        else {
            obj.proposers = message.proposers;
        }
        obj.metadata = message.metadata ? base64FromBytes(message.metadata) : undefined;
        if (message.msgs) {
            obj.msgs = message.msgs.map(e => e ? Any.toAmino(e) : undefined);
        }
        else {
            obj.msgs = message.msgs;
        }
        obj.exec = message.exec === 0 ? undefined : message.exec;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCreateProposal.decode(message.value);
    },
    toProto(message) {
        return MsgCreateProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.MsgCreateProposal",
            value: MsgCreateProposal.encode(message).finish()
        };
    }
};
function createBaseMsgCreateProposalResponse() {
    return {
        proposalId: BigInt(0)
    };
}
export const MsgCreateProposalResponse = {
    typeUrl: "/regen.group.v1alpha1.MsgCreateProposalResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.proposalId !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposalId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateProposalResponse();
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
        const message = createBaseMsgCreateProposalResponse();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateProposalResponse();
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
        return MsgCreateProposalResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCreateProposalResponse.decode(message.value);
    },
    toProto(message) {
        return MsgCreateProposalResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.MsgCreateProposalResponse",
            value: MsgCreateProposalResponse.encode(message).finish()
        };
    }
};
function createBaseMsgVote() {
    return {
        proposalId: BigInt(0),
        voter: "",
        choice: 0,
        metadata: new Uint8Array(),
        exec: 0
    };
}
export const MsgVote = {
    typeUrl: "/regen.group.v1alpha1.MsgVote",
    encode(message, writer = BinaryWriter.create()) {
        if (message.proposalId !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.voter !== "") {
            writer.uint32(18).string(message.voter);
        }
        if (message.choice !== 0) {
            writer.uint32(24).int32(message.choice);
        }
        if (message.metadata.length !== 0) {
            writer.uint32(34).bytes(message.metadata);
        }
        if (message.exec !== 0) {
            writer.uint32(40).int32(message.exec);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgVote();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
                    break;
                case 2:
                    message.voter = reader.string();
                    break;
                case 3:
                    message.choice = reader.int32();
                    break;
                case 4:
                    message.metadata = reader.bytes();
                    break;
                case 5:
                    message.exec = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgVote();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
        message.voter = object.voter ?? "";
        message.choice = object.choice ?? 0;
        message.metadata = object.metadata ?? new Uint8Array();
        message.exec = object.exec ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgVote();
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposalId = BigInt(object.proposal_id);
        }
        if (object.voter !== undefined && object.voter !== null) {
            message.voter = object.voter;
        }
        if (object.choice !== undefined && object.choice !== null) {
            message.choice = object.choice;
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = bytesFromBase64(object.metadata);
        }
        if (object.exec !== undefined && object.exec !== null) {
            message.exec = object.exec;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposalId !== BigInt(0) ? (message.proposalId?.toString)() : undefined;
        obj.voter = message.voter === "" ? undefined : message.voter;
        obj.choice = message.choice === 0 ? undefined : message.choice;
        obj.metadata = message.metadata ? base64FromBytes(message.metadata) : undefined;
        obj.exec = message.exec === 0 ? undefined : message.exec;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgVote.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgVote.decode(message.value);
    },
    toProto(message) {
        return MsgVote.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.MsgVote",
            value: MsgVote.encode(message).finish()
        };
    }
};
function createBaseMsgVoteResponse() {
    return {};
}
export const MsgVoteResponse = {
    typeUrl: "/regen.group.v1alpha1.MsgVoteResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgVoteResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgVoteResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgVoteResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgVoteResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgVoteResponse.decode(message.value);
    },
    toProto(message) {
        return MsgVoteResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.MsgVoteResponse",
            value: MsgVoteResponse.encode(message).finish()
        };
    }
};
function createBaseMsgExec() {
    return {
        proposalId: BigInt(0),
        signer: ""
    };
}
export const MsgExec = {
    typeUrl: "/regen.group.v1alpha1.MsgExec",
    encode(message, writer = BinaryWriter.create()) {
        if (message.proposalId !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.signer !== "") {
            writer.uint32(18).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExec();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
                    break;
                case 2:
                    message.signer = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgExec();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgExec();
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposalId = BigInt(object.proposal_id);
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposalId !== BigInt(0) ? (message.proposalId?.toString)() : undefined;
        obj.signer = message.signer === "" ? undefined : message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgExec.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgExec.decode(message.value);
    },
    toProto(message) {
        return MsgExec.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.MsgExec",
            value: MsgExec.encode(message).finish()
        };
    }
};
function createBaseMsgExecResponse() {
    return {};
}
export const MsgExecResponse = {
    typeUrl: "/regen.group.v1alpha1.MsgExecResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExecResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgExecResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgExecResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgExecResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgExecResponse.decode(message.value);
    },
    toProto(message) {
        return MsgExecResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.MsgExecResponse",
            value: MsgExecResponse.encode(message).finish()
        };
    }
};
export const DecisionPolicy_InterfaceDecoder = (input) => {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const data = Any.decode(reader, reader.uint32());
    switch (data.typeUrl) {
        case "/regen.group.v1alpha1.ThresholdDecisionPolicy":
            return ThresholdDecisionPolicy.decode(data.value);
        default:
            return data;
    }
};
export const DecisionPolicy_FromAmino = (content) => {
    switch (content.type) {
        case "/regen.group.v1alpha1.ThresholdDecisionPolicy":
            return Any.fromPartial({
                typeUrl: "/regen.group.v1alpha1.ThresholdDecisionPolicy",
                value: ThresholdDecisionPolicy.encode(ThresholdDecisionPolicy.fromPartial(ThresholdDecisionPolicy.fromAmino(content.value))).finish()
            });
        default:
            return Any.fromAmino(content);
    }
};
export const DecisionPolicy_ToAmino = (content) => {
    switch (content.typeUrl) {
        case "/regen.group.v1alpha1.ThresholdDecisionPolicy":
            return {
                type: "/regen.group.v1alpha1.ThresholdDecisionPolicy",
                value: ThresholdDecisionPolicy.toAmino(ThresholdDecisionPolicy.decode(content.value, undefined))
            };
        default:
            return Any.toAmino(content);
    }
};
