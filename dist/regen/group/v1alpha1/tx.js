"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecisionPolicy_ToAmino = exports.DecisionPolicy_FromAmino = exports.DecisionPolicy_InterfaceDecoder = exports.MsgExecResponse = exports.MsgExec = exports.MsgVoteResponse = exports.MsgVote = exports.MsgCreateProposalResponse = exports.MsgCreateProposal = exports.MsgUpdateGroupAccountMetadataResponse = exports.MsgUpdateGroupAccountMetadata = exports.MsgUpdateGroupAccountDecisionPolicyResponse = exports.MsgUpdateGroupAccountDecisionPolicy = exports.MsgUpdateGroupAccountAdminResponse = exports.MsgUpdateGroupAccountAdmin = exports.MsgCreateGroupAccountResponse = exports.MsgCreateGroupAccount = exports.MsgUpdateGroupMetadataResponse = exports.MsgUpdateGroupMetadata = exports.MsgUpdateGroupAdminResponse = exports.MsgUpdateGroupAdmin = exports.MsgUpdateGroupMembersResponse = exports.MsgUpdateGroupMembers = exports.MsgCreateGroupResponse = exports.MsgCreateGroup = exports.ExecAmino = exports.ExecSDKType = exports.Exec = void 0;
exports.execFromJSON = execFromJSON;
exports.execToJSON = execToJSON;
//@ts-nocheck
const types_1 = require("./types");
const any_1 = require("../../../google/protobuf/any");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
/** Exec defines modes of execution of a proposal on creation or on new vote. */
var Exec;
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
})(Exec || (exports.Exec = Exec = {}));
exports.ExecSDKType = Exec;
exports.ExecAmino = Exec;
function execFromJSON(object) {
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
function execToJSON(object) {
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
exports.MsgCreateGroup = {
    typeUrl: "/regen.group.v1alpha1.MsgCreateGroup",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        for (const v of message.members) {
            types_1.Member.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.metadata.length !== 0) {
            writer.uint32(26).bytes(message.metadata);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateGroup();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.members.push(types_1.Member.decode(reader, reader.uint32()));
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
        message.members = object.members?.map(e => types_1.Member.fromPartial(e)) || [];
        message.metadata = object.metadata ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateGroup();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        message.members = object.members?.map(e => types_1.Member.fromAmino(e)) || [];
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = (0, helpers_1.bytesFromBase64)(object.metadata);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin === "" ? undefined : message.admin;
        if (message.members) {
            obj.members = message.members.map(e => e ? types_1.Member.toAmino(e) : undefined);
        }
        else {
            obj.members = message.members;
        }
        obj.metadata = message.metadata ? (0, helpers_1.base64FromBytes)(message.metadata) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateGroup.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCreateGroup.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateGroup.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.MsgCreateGroup",
            value: exports.MsgCreateGroup.encode(message).finish()
        };
    }
};
function createBaseMsgCreateGroupResponse() {
    return {
        groupId: BigInt(0)
    };
}
exports.MsgCreateGroupResponse = {
    typeUrl: "/regen.group.v1alpha1.MsgCreateGroupResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.groupId !== BigInt(0)) {
            writer.uint32(8).uint64(message.groupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgCreateGroupResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCreateGroupResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateGroupResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.MsgCreateGroupResponse",
            value: exports.MsgCreateGroupResponse.encode(message).finish()
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
exports.MsgUpdateGroupMembers = {
    typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupMembers",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.groupId !== BigInt(0)) {
            writer.uint32(16).uint64(message.groupId);
        }
        for (const v of message.memberUpdates) {
            types_1.Member.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.memberUpdates.push(types_1.Member.decode(reader, reader.uint32()));
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
        message.memberUpdates = object.memberUpdates?.map(e => types_1.Member.fromPartial(e)) || [];
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
        message.memberUpdates = object.member_updates?.map(e => types_1.Member.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin === "" ? undefined : message.admin;
        obj.group_id = message.groupId !== BigInt(0) ? (message.groupId?.toString)() : undefined;
        if (message.memberUpdates) {
            obj.member_updates = message.memberUpdates.map(e => e ? types_1.Member.toAmino(e) : undefined);
        }
        else {
            obj.member_updates = message.memberUpdates;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateGroupMembers.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateGroupMembers.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateGroupMembers.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupMembers",
            value: exports.MsgUpdateGroupMembers.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateGroupMembersResponse() {
    return {};
}
exports.MsgUpdateGroupMembersResponse = {
    typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupMembersResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgUpdateGroupMembersResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateGroupMembersResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateGroupMembersResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupMembersResponse",
            value: exports.MsgUpdateGroupMembersResponse.encode(message).finish()
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
exports.MsgUpdateGroupAdmin = {
    typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupAdmin",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgUpdateGroupAdmin.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateGroupAdmin.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateGroupAdmin.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupAdmin",
            value: exports.MsgUpdateGroupAdmin.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateGroupAdminResponse() {
    return {};
}
exports.MsgUpdateGroupAdminResponse = {
    typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupAdminResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgUpdateGroupAdminResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateGroupAdminResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateGroupAdminResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupAdminResponse",
            value: exports.MsgUpdateGroupAdminResponse.encode(message).finish()
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
exports.MsgUpdateGroupMetadata = {
    typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupMetadata",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            message.metadata = (0, helpers_1.bytesFromBase64)(object.metadata);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin === "" ? undefined : message.admin;
        obj.group_id = message.groupId !== BigInt(0) ? (message.groupId?.toString)() : undefined;
        obj.metadata = message.metadata ? (0, helpers_1.base64FromBytes)(message.metadata) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateGroupMetadata.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateGroupMetadata.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateGroupMetadata.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupMetadata",
            value: exports.MsgUpdateGroupMetadata.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateGroupMetadataResponse() {
    return {};
}
exports.MsgUpdateGroupMetadataResponse = {
    typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupMetadataResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgUpdateGroupMetadataResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateGroupMetadataResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateGroupMetadataResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupMetadataResponse",
            value: exports.MsgUpdateGroupMetadataResponse.encode(message).finish()
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
exports.MsgCreateGroupAccount = {
    typeUrl: "/regen.group.v1alpha1.MsgCreateGroupAccount",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
            any_1.Any.encode(message.decisionPolicy, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.decisionPolicy = (0, exports.DecisionPolicy_InterfaceDecoder)(reader);
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
        message.decisionPolicy = object.decisionPolicy !== undefined && object.decisionPolicy !== null ? any_1.Any.fromPartial(object.decisionPolicy) : undefined;
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
            message.metadata = (0, helpers_1.bytesFromBase64)(object.metadata);
        }
        if (object.decision_policy !== undefined && object.decision_policy !== null) {
            message.decisionPolicy = (0, exports.DecisionPolicy_FromAmino)(object.decision_policy);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin === "" ? undefined : message.admin;
        obj.group_id = message.groupId !== BigInt(0) ? (message.groupId?.toString)() : undefined;
        obj.metadata = message.metadata ? (0, helpers_1.base64FromBytes)(message.metadata) : undefined;
        obj.decision_policy = message.decisionPolicy ? (0, exports.DecisionPolicy_ToAmino)(message.decisionPolicy) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateGroupAccount.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCreateGroupAccount.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateGroupAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.MsgCreateGroupAccount",
            value: exports.MsgCreateGroupAccount.encode(message).finish()
        };
    }
};
function createBaseMsgCreateGroupAccountResponse() {
    return {
        address: ""
    };
}
exports.MsgCreateGroupAccountResponse = {
    typeUrl: "/regen.group.v1alpha1.MsgCreateGroupAccountResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgCreateGroupAccountResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCreateGroupAccountResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateGroupAccountResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.MsgCreateGroupAccountResponse",
            value: exports.MsgCreateGroupAccountResponse.encode(message).finish()
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
exports.MsgUpdateGroupAccountAdmin = {
    typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupAccountAdmin",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgUpdateGroupAccountAdmin.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateGroupAccountAdmin.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateGroupAccountAdmin.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupAccountAdmin",
            value: exports.MsgUpdateGroupAccountAdmin.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateGroupAccountAdminResponse() {
    return {};
}
exports.MsgUpdateGroupAccountAdminResponse = {
    typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupAccountAdminResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgUpdateGroupAccountAdminResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateGroupAccountAdminResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateGroupAccountAdminResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupAccountAdminResponse",
            value: exports.MsgUpdateGroupAccountAdminResponse.encode(message).finish()
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
exports.MsgUpdateGroupAccountDecisionPolicy = {
    typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupAccountDecisionPolicy",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        if (message.decisionPolicy !== undefined) {
            any_1.Any.encode(message.decisionPolicy, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.decisionPolicy = (0, exports.DecisionPolicy_InterfaceDecoder)(reader);
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
        message.decisionPolicy = object.decisionPolicy !== undefined && object.decisionPolicy !== null ? any_1.Any.fromPartial(object.decisionPolicy) : undefined;
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
            message.decisionPolicy = (0, exports.DecisionPolicy_FromAmino)(object.decision_policy);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin === "" ? undefined : message.admin;
        obj.address = message.address === "" ? undefined : message.address;
        obj.decision_policy = message.decisionPolicy ? (0, exports.DecisionPolicy_ToAmino)(message.decisionPolicy) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateGroupAccountDecisionPolicy.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateGroupAccountDecisionPolicy.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateGroupAccountDecisionPolicy.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupAccountDecisionPolicy",
            value: exports.MsgUpdateGroupAccountDecisionPolicy.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateGroupAccountDecisionPolicyResponse() {
    return {};
}
exports.MsgUpdateGroupAccountDecisionPolicyResponse = {
    typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupAccountDecisionPolicyResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgUpdateGroupAccountDecisionPolicyResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateGroupAccountDecisionPolicyResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateGroupAccountDecisionPolicyResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupAccountDecisionPolicyResponse",
            value: exports.MsgUpdateGroupAccountDecisionPolicyResponse.encode(message).finish()
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
exports.MsgUpdateGroupAccountMetadata = {
    typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupAccountMetadata",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            message.metadata = (0, helpers_1.bytesFromBase64)(object.metadata);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin === "" ? undefined : message.admin;
        obj.address = message.address === "" ? undefined : message.address;
        obj.metadata = message.metadata ? (0, helpers_1.base64FromBytes)(message.metadata) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateGroupAccountMetadata.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateGroupAccountMetadata.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateGroupAccountMetadata.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupAccountMetadata",
            value: exports.MsgUpdateGroupAccountMetadata.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateGroupAccountMetadataResponse() {
    return {};
}
exports.MsgUpdateGroupAccountMetadataResponse = {
    typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupAccountMetadataResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgUpdateGroupAccountMetadataResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateGroupAccountMetadataResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateGroupAccountMetadataResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupAccountMetadataResponse",
            value: exports.MsgUpdateGroupAccountMetadataResponse.encode(message).finish()
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
exports.MsgCreateProposal = {
    typeUrl: "/regen.group.v1alpha1.MsgCreateProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
            any_1.Any.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.exec !== 0) {
            writer.uint32(40).int32(message.exec);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.msgs.push(any_1.Any.decode(reader, reader.uint32()));
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
        message.msgs = object.msgs?.map(e => any_1.Any.fromPartial(e)) || [];
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
            message.metadata = (0, helpers_1.bytesFromBase64)(object.metadata);
        }
        message.msgs = object.msgs?.map(e => any_1.Any.fromAmino(e)) || [];
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
        obj.metadata = message.metadata ? (0, helpers_1.base64FromBytes)(message.metadata) : undefined;
        if (message.msgs) {
            obj.msgs = message.msgs.map(e => e ? any_1.Any.toAmino(e) : undefined);
        }
        else {
            obj.msgs = message.msgs;
        }
        obj.exec = message.exec === 0 ? undefined : message.exec;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCreateProposal.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.MsgCreateProposal",
            value: exports.MsgCreateProposal.encode(message).finish()
        };
    }
};
function createBaseMsgCreateProposalResponse() {
    return {
        proposalId: BigInt(0)
    };
}
exports.MsgCreateProposalResponse = {
    typeUrl: "/regen.group.v1alpha1.MsgCreateProposalResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.proposalId !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposalId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgCreateProposalResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCreateProposalResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateProposalResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.MsgCreateProposalResponse",
            value: exports.MsgCreateProposalResponse.encode(message).finish()
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
exports.MsgVote = {
    typeUrl: "/regen.group.v1alpha1.MsgVote",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            message.metadata = (0, helpers_1.bytesFromBase64)(object.metadata);
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
        obj.metadata = message.metadata ? (0, helpers_1.base64FromBytes)(message.metadata) : undefined;
        obj.exec = message.exec === 0 ? undefined : message.exec;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgVote.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgVote.decode(message.value);
    },
    toProto(message) {
        return exports.MsgVote.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.MsgVote",
            value: exports.MsgVote.encode(message).finish()
        };
    }
};
function createBaseMsgVoteResponse() {
    return {};
}
exports.MsgVoteResponse = {
    typeUrl: "/regen.group.v1alpha1.MsgVoteResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgVoteResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgVoteResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgVoteResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.MsgVoteResponse",
            value: exports.MsgVoteResponse.encode(message).finish()
        };
    }
};
function createBaseMsgExec() {
    return {
        proposalId: BigInt(0),
        signer: ""
    };
}
exports.MsgExec = {
    typeUrl: "/regen.group.v1alpha1.MsgExec",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.proposalId !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.signer !== "") {
            writer.uint32(18).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgExec.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgExec.decode(message.value);
    },
    toProto(message) {
        return exports.MsgExec.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.MsgExec",
            value: exports.MsgExec.encode(message).finish()
        };
    }
};
function createBaseMsgExecResponse() {
    return {};
}
exports.MsgExecResponse = {
    typeUrl: "/regen.group.v1alpha1.MsgExecResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgExecResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgExecResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgExecResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.MsgExecResponse",
            value: exports.MsgExecResponse.encode(message).finish()
        };
    }
};
const DecisionPolicy_InterfaceDecoder = (input) => {
    const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
    const data = any_1.Any.decode(reader, reader.uint32());
    switch (data.typeUrl) {
        case "/regen.group.v1alpha1.ThresholdDecisionPolicy":
            return types_1.ThresholdDecisionPolicy.decode(data.value);
        default:
            return data;
    }
};
exports.DecisionPolicy_InterfaceDecoder = DecisionPolicy_InterfaceDecoder;
const DecisionPolicy_FromAmino = (content) => {
    switch (content.type) {
        case "/regen.group.v1alpha1.ThresholdDecisionPolicy":
            return any_1.Any.fromPartial({
                typeUrl: "/regen.group.v1alpha1.ThresholdDecisionPolicy",
                value: types_1.ThresholdDecisionPolicy.encode(types_1.ThresholdDecisionPolicy.fromPartial(types_1.ThresholdDecisionPolicy.fromAmino(content.value))).finish()
            });
        default:
            return any_1.Any.fromAmino(content);
    }
};
exports.DecisionPolicy_FromAmino = DecisionPolicy_FromAmino;
const DecisionPolicy_ToAmino = (content) => {
    switch (content.typeUrl) {
        case "/regen.group.v1alpha1.ThresholdDecisionPolicy":
            return {
                type: "/regen.group.v1alpha1.ThresholdDecisionPolicy",
                value: types_1.ThresholdDecisionPolicy.toAmino(types_1.ThresholdDecisionPolicy.decode(content.value, undefined))
            };
        default:
            return any_1.Any.toAmino(content);
    }
};
exports.DecisionPolicy_ToAmino = DecisionPolicy_ToAmino;
