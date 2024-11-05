"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryVotesByVoterResponse = exports.QueryVotesByVoterRequest = exports.QueryVotesByProposalResponse = exports.QueryVotesByProposalRequest = exports.QueryVoteByProposalVoterResponse = exports.QueryVoteByProposalVoterRequest = exports.QueryProposalsByGroupAccountResponse = exports.QueryProposalsByGroupAccountRequest = exports.QueryProposalResponse = exports.QueryProposalRequest = exports.QueryGroupAccountsByAdminResponse = exports.QueryGroupAccountsByAdminRequest = exports.QueryGroupAccountsByGroupResponse = exports.QueryGroupAccountsByGroupRequest = exports.QueryGroupsByAdminResponse = exports.QueryGroupsByAdminRequest = exports.QueryGroupMembersResponse = exports.QueryGroupMembersRequest = exports.QueryGroupAccountInfoResponse = exports.QueryGroupAccountInfoRequest = exports.QueryGroupInfoResponse = exports.QueryGroupInfoRequest = void 0;
//@ts-nocheck
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
const types_1 = require("./types");
const binary_1 = require("../../../binary");
function createBaseQueryGroupInfoRequest() {
    return {
        groupId: BigInt(0)
    };
}
exports.QueryGroupInfoRequest = {
    typeUrl: "/regen.group.v1alpha1.QueryGroupInfoRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.groupId !== BigInt(0)) {
            writer.uint32(8).uint64(message.groupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupInfoRequest();
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
        const message = createBaseQueryGroupInfoRequest();
        message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGroupInfoRequest();
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
        return exports.QueryGroupInfoRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryGroupInfoRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGroupInfoRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.QueryGroupInfoRequest",
            value: exports.QueryGroupInfoRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGroupInfoResponse() {
    return {
        info: undefined
    };
}
exports.QueryGroupInfoResponse = {
    typeUrl: "/regen.group.v1alpha1.QueryGroupInfoResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.info !== undefined) {
            types_1.GroupInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.info = types_1.GroupInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryGroupInfoResponse();
        message.info = object.info !== undefined && object.info !== null ? types_1.GroupInfo.fromPartial(object.info) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGroupInfoResponse();
        if (object.info !== undefined && object.info !== null) {
            message.info = types_1.GroupInfo.fromAmino(object.info);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.info = message.info ? types_1.GroupInfo.toAmino(message.info) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGroupInfoResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryGroupInfoResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGroupInfoResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.QueryGroupInfoResponse",
            value: exports.QueryGroupInfoResponse.encode(message).finish()
        };
    }
};
function createBaseQueryGroupAccountInfoRequest() {
    return {
        address: ""
    };
}
exports.QueryGroupAccountInfoRequest = {
    typeUrl: "/regen.group.v1alpha1.QueryGroupAccountInfoRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupAccountInfoRequest();
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
        const message = createBaseQueryGroupAccountInfoRequest();
        message.address = object.address ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGroupAccountInfoRequest();
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
        return exports.QueryGroupAccountInfoRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryGroupAccountInfoRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGroupAccountInfoRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.QueryGroupAccountInfoRequest",
            value: exports.QueryGroupAccountInfoRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGroupAccountInfoResponse() {
    return {
        info: undefined
    };
}
exports.QueryGroupAccountInfoResponse = {
    typeUrl: "/regen.group.v1alpha1.QueryGroupAccountInfoResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.info !== undefined) {
            types_1.GroupAccountInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupAccountInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.info = types_1.GroupAccountInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryGroupAccountInfoResponse();
        message.info = object.info !== undefined && object.info !== null ? types_1.GroupAccountInfo.fromPartial(object.info) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGroupAccountInfoResponse();
        if (object.info !== undefined && object.info !== null) {
            message.info = types_1.GroupAccountInfo.fromAmino(object.info);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.info = message.info ? types_1.GroupAccountInfo.toAmino(message.info) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGroupAccountInfoResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryGroupAccountInfoResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGroupAccountInfoResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.QueryGroupAccountInfoResponse",
            value: exports.QueryGroupAccountInfoResponse.encode(message).finish()
        };
    }
};
function createBaseQueryGroupMembersRequest() {
    return {
        groupId: BigInt(0),
        pagination: undefined
    };
}
exports.QueryGroupMembersRequest = {
    typeUrl: "/regen.group.v1alpha1.QueryGroupMembersRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.groupId !== BigInt(0)) {
            writer.uint32(8).uint64(message.groupId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupMembersRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupId = reader.uint64();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryGroupMembersRequest();
        message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGroupMembersRequest();
        if (object.group_id !== undefined && object.group_id !== null) {
            message.groupId = BigInt(object.group_id);
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.group_id = message.groupId !== BigInt(0) ? (message.groupId?.toString)() : undefined;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGroupMembersRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryGroupMembersRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGroupMembersRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.QueryGroupMembersRequest",
            value: exports.QueryGroupMembersRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGroupMembersResponse() {
    return {
        members: [],
        pagination: undefined
    };
}
exports.QueryGroupMembersResponse = {
    typeUrl: "/regen.group.v1alpha1.QueryGroupMembersResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.members) {
            types_1.GroupMember.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupMembersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.members.push(types_1.GroupMember.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryGroupMembersResponse();
        message.members = object.members?.map(e => types_1.GroupMember.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGroupMembersResponse();
        message.members = object.members?.map(e => types_1.GroupMember.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.members) {
            obj.members = message.members.map(e => e ? types_1.GroupMember.toAmino(e) : undefined);
        }
        else {
            obj.members = message.members;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGroupMembersResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryGroupMembersResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGroupMembersResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.QueryGroupMembersResponse",
            value: exports.QueryGroupMembersResponse.encode(message).finish()
        };
    }
};
function createBaseQueryGroupsByAdminRequest() {
    return {
        admin: "",
        pagination: undefined
    };
}
exports.QueryGroupsByAdminRequest = {
    typeUrl: "/regen.group.v1alpha1.QueryGroupsByAdminRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupsByAdminRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryGroupsByAdminRequest();
        message.admin = object.admin ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGroupsByAdminRequest();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin === "" ? undefined : message.admin;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGroupsByAdminRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryGroupsByAdminRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGroupsByAdminRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.QueryGroupsByAdminRequest",
            value: exports.QueryGroupsByAdminRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGroupsByAdminResponse() {
    return {
        groups: [],
        pagination: undefined
    };
}
exports.QueryGroupsByAdminResponse = {
    typeUrl: "/regen.group.v1alpha1.QueryGroupsByAdminResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.groups) {
            types_1.GroupInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupsByAdminResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groups.push(types_1.GroupInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryGroupsByAdminResponse();
        message.groups = object.groups?.map(e => types_1.GroupInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGroupsByAdminResponse();
        message.groups = object.groups?.map(e => types_1.GroupInfo.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.groups) {
            obj.groups = message.groups.map(e => e ? types_1.GroupInfo.toAmino(e) : undefined);
        }
        else {
            obj.groups = message.groups;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGroupsByAdminResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryGroupsByAdminResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGroupsByAdminResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.QueryGroupsByAdminResponse",
            value: exports.QueryGroupsByAdminResponse.encode(message).finish()
        };
    }
};
function createBaseQueryGroupAccountsByGroupRequest() {
    return {
        groupId: BigInt(0),
        pagination: undefined
    };
}
exports.QueryGroupAccountsByGroupRequest = {
    typeUrl: "/regen.group.v1alpha1.QueryGroupAccountsByGroupRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.groupId !== BigInt(0)) {
            writer.uint32(8).uint64(message.groupId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupAccountsByGroupRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupId = reader.uint64();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryGroupAccountsByGroupRequest();
        message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGroupAccountsByGroupRequest();
        if (object.group_id !== undefined && object.group_id !== null) {
            message.groupId = BigInt(object.group_id);
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.group_id = message.groupId !== BigInt(0) ? (message.groupId?.toString)() : undefined;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGroupAccountsByGroupRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryGroupAccountsByGroupRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGroupAccountsByGroupRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.QueryGroupAccountsByGroupRequest",
            value: exports.QueryGroupAccountsByGroupRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGroupAccountsByGroupResponse() {
    return {
        groupAccounts: [],
        pagination: undefined
    };
}
exports.QueryGroupAccountsByGroupResponse = {
    typeUrl: "/regen.group.v1alpha1.QueryGroupAccountsByGroupResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.groupAccounts) {
            types_1.GroupAccountInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupAccountsByGroupResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupAccounts.push(types_1.GroupAccountInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryGroupAccountsByGroupResponse();
        message.groupAccounts = object.groupAccounts?.map(e => types_1.GroupAccountInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGroupAccountsByGroupResponse();
        message.groupAccounts = object.group_accounts?.map(e => types_1.GroupAccountInfo.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.groupAccounts) {
            obj.group_accounts = message.groupAccounts.map(e => e ? types_1.GroupAccountInfo.toAmino(e) : undefined);
        }
        else {
            obj.group_accounts = message.groupAccounts;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGroupAccountsByGroupResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryGroupAccountsByGroupResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGroupAccountsByGroupResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.QueryGroupAccountsByGroupResponse",
            value: exports.QueryGroupAccountsByGroupResponse.encode(message).finish()
        };
    }
};
function createBaseQueryGroupAccountsByAdminRequest() {
    return {
        admin: "",
        pagination: undefined
    };
}
exports.QueryGroupAccountsByAdminRequest = {
    typeUrl: "/regen.group.v1alpha1.QueryGroupAccountsByAdminRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupAccountsByAdminRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryGroupAccountsByAdminRequest();
        message.admin = object.admin ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGroupAccountsByAdminRequest();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin === "" ? undefined : message.admin;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGroupAccountsByAdminRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryGroupAccountsByAdminRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGroupAccountsByAdminRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.QueryGroupAccountsByAdminRequest",
            value: exports.QueryGroupAccountsByAdminRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGroupAccountsByAdminResponse() {
    return {
        groupAccounts: [],
        pagination: undefined
    };
}
exports.QueryGroupAccountsByAdminResponse = {
    typeUrl: "/regen.group.v1alpha1.QueryGroupAccountsByAdminResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.groupAccounts) {
            types_1.GroupAccountInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupAccountsByAdminResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupAccounts.push(types_1.GroupAccountInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryGroupAccountsByAdminResponse();
        message.groupAccounts = object.groupAccounts?.map(e => types_1.GroupAccountInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGroupAccountsByAdminResponse();
        message.groupAccounts = object.group_accounts?.map(e => types_1.GroupAccountInfo.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.groupAccounts) {
            obj.group_accounts = message.groupAccounts.map(e => e ? types_1.GroupAccountInfo.toAmino(e) : undefined);
        }
        else {
            obj.group_accounts = message.groupAccounts;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGroupAccountsByAdminResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryGroupAccountsByAdminResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGroupAccountsByAdminResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.QueryGroupAccountsByAdminResponse",
            value: exports.QueryGroupAccountsByAdminResponse.encode(message).finish()
        };
    }
};
function createBaseQueryProposalRequest() {
    return {
        proposalId: BigInt(0)
    };
}
exports.QueryProposalRequest = {
    typeUrl: "/regen.group.v1alpha1.QueryProposalRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.proposalId !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposalId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProposalRequest();
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
        const message = createBaseQueryProposalRequest();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryProposalRequest();
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
        return exports.QueryProposalRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryProposalRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryProposalRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.QueryProposalRequest",
            value: exports.QueryProposalRequest.encode(message).finish()
        };
    }
};
function createBaseQueryProposalResponse() {
    return {
        proposal: undefined
    };
}
exports.QueryProposalResponse = {
    typeUrl: "/regen.group.v1alpha1.QueryProposalResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.proposal !== undefined) {
            types_1.Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProposalResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal = types_1.Proposal.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryProposalResponse();
        message.proposal = object.proposal !== undefined && object.proposal !== null ? types_1.Proposal.fromPartial(object.proposal) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryProposalResponse();
        if (object.proposal !== undefined && object.proposal !== null) {
            message.proposal = types_1.Proposal.fromAmino(object.proposal);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal = message.proposal ? types_1.Proposal.toAmino(message.proposal) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryProposalResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryProposalResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryProposalResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.QueryProposalResponse",
            value: exports.QueryProposalResponse.encode(message).finish()
        };
    }
};
function createBaseQueryProposalsByGroupAccountRequest() {
    return {
        address: "",
        pagination: undefined
    };
}
exports.QueryProposalsByGroupAccountRequest = {
    typeUrl: "/regen.group.v1alpha1.QueryProposalsByGroupAccountRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProposalsByGroupAccountRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryProposalsByGroupAccountRequest();
        message.address = object.address ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryProposalsByGroupAccountRequest();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryProposalsByGroupAccountRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryProposalsByGroupAccountRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryProposalsByGroupAccountRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.QueryProposalsByGroupAccountRequest",
            value: exports.QueryProposalsByGroupAccountRequest.encode(message).finish()
        };
    }
};
function createBaseQueryProposalsByGroupAccountResponse() {
    return {
        proposals: [],
        pagination: undefined
    };
}
exports.QueryProposalsByGroupAccountResponse = {
    typeUrl: "/regen.group.v1alpha1.QueryProposalsByGroupAccountResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.proposals) {
            types_1.Proposal.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProposalsByGroupAccountResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposals.push(types_1.Proposal.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryProposalsByGroupAccountResponse();
        message.proposals = object.proposals?.map(e => types_1.Proposal.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryProposalsByGroupAccountResponse();
        message.proposals = object.proposals?.map(e => types_1.Proposal.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.proposals) {
            obj.proposals = message.proposals.map(e => e ? types_1.Proposal.toAmino(e) : undefined);
        }
        else {
            obj.proposals = message.proposals;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryProposalsByGroupAccountResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryProposalsByGroupAccountResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryProposalsByGroupAccountResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.QueryProposalsByGroupAccountResponse",
            value: exports.QueryProposalsByGroupAccountResponse.encode(message).finish()
        };
    }
};
function createBaseQueryVoteByProposalVoterRequest() {
    return {
        proposalId: BigInt(0),
        voter: ""
    };
}
exports.QueryVoteByProposalVoterRequest = {
    typeUrl: "/regen.group.v1alpha1.QueryVoteByProposalVoterRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.proposalId !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.voter !== "") {
            writer.uint32(18).string(message.voter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVoteByProposalVoterRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
                    break;
                case 2:
                    message.voter = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryVoteByProposalVoterRequest();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
        message.voter = object.voter ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryVoteByProposalVoterRequest();
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposalId = BigInt(object.proposal_id);
        }
        if (object.voter !== undefined && object.voter !== null) {
            message.voter = object.voter;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposalId !== BigInt(0) ? (message.proposalId?.toString)() : undefined;
        obj.voter = message.voter === "" ? undefined : message.voter;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryVoteByProposalVoterRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryVoteByProposalVoterRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryVoteByProposalVoterRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.QueryVoteByProposalVoterRequest",
            value: exports.QueryVoteByProposalVoterRequest.encode(message).finish()
        };
    }
};
function createBaseQueryVoteByProposalVoterResponse() {
    return {
        vote: undefined
    };
}
exports.QueryVoteByProposalVoterResponse = {
    typeUrl: "/regen.group.v1alpha1.QueryVoteByProposalVoterResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.vote !== undefined) {
            types_1.Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVoteByProposalVoterResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vote = types_1.Vote.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryVoteByProposalVoterResponse();
        message.vote = object.vote !== undefined && object.vote !== null ? types_1.Vote.fromPartial(object.vote) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryVoteByProposalVoterResponse();
        if (object.vote !== undefined && object.vote !== null) {
            message.vote = types_1.Vote.fromAmino(object.vote);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.vote = message.vote ? types_1.Vote.toAmino(message.vote) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryVoteByProposalVoterResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryVoteByProposalVoterResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryVoteByProposalVoterResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.QueryVoteByProposalVoterResponse",
            value: exports.QueryVoteByProposalVoterResponse.encode(message).finish()
        };
    }
};
function createBaseQueryVotesByProposalRequest() {
    return {
        proposalId: BigInt(0),
        pagination: undefined
    };
}
exports.QueryVotesByProposalRequest = {
    typeUrl: "/regen.group.v1alpha1.QueryVotesByProposalRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.proposalId !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVotesByProposalRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryVotesByProposalRequest();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryVotesByProposalRequest();
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposalId = BigInt(object.proposal_id);
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposalId !== BigInt(0) ? (message.proposalId?.toString)() : undefined;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryVotesByProposalRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryVotesByProposalRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryVotesByProposalRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.QueryVotesByProposalRequest",
            value: exports.QueryVotesByProposalRequest.encode(message).finish()
        };
    }
};
function createBaseQueryVotesByProposalResponse() {
    return {
        votes: [],
        pagination: undefined
    };
}
exports.QueryVotesByProposalResponse = {
    typeUrl: "/regen.group.v1alpha1.QueryVotesByProposalResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.votes) {
            types_1.Vote.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVotesByProposalResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.votes.push(types_1.Vote.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryVotesByProposalResponse();
        message.votes = object.votes?.map(e => types_1.Vote.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryVotesByProposalResponse();
        message.votes = object.votes?.map(e => types_1.Vote.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.votes) {
            obj.votes = message.votes.map(e => e ? types_1.Vote.toAmino(e) : undefined);
        }
        else {
            obj.votes = message.votes;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryVotesByProposalResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryVotesByProposalResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryVotesByProposalResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.QueryVotesByProposalResponse",
            value: exports.QueryVotesByProposalResponse.encode(message).finish()
        };
    }
};
function createBaseQueryVotesByVoterRequest() {
    return {
        voter: "",
        pagination: undefined
    };
}
exports.QueryVotesByVoterRequest = {
    typeUrl: "/regen.group.v1alpha1.QueryVotesByVoterRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.voter !== "") {
            writer.uint32(10).string(message.voter);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVotesByVoterRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.voter = reader.string();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryVotesByVoterRequest();
        message.voter = object.voter ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryVotesByVoterRequest();
        if (object.voter !== undefined && object.voter !== null) {
            message.voter = object.voter;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.voter = message.voter === "" ? undefined : message.voter;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryVotesByVoterRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryVotesByVoterRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryVotesByVoterRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.QueryVotesByVoterRequest",
            value: exports.QueryVotesByVoterRequest.encode(message).finish()
        };
    }
};
function createBaseQueryVotesByVoterResponse() {
    return {
        votes: [],
        pagination: undefined
    };
}
exports.QueryVotesByVoterResponse = {
    typeUrl: "/regen.group.v1alpha1.QueryVotesByVoterResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.votes) {
            types_1.Vote.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVotesByVoterResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.votes.push(types_1.Vote.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryVotesByVoterResponse();
        message.votes = object.votes?.map(e => types_1.Vote.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryVotesByVoterResponse();
        message.votes = object.votes?.map(e => types_1.Vote.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.votes) {
            obj.votes = message.votes.map(e => e ? types_1.Vote.toAmino(e) : undefined);
        }
        else {
            obj.votes = message.votes;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryVotesByVoterResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryVotesByVoterResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryVotesByVoterResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.QueryVotesByVoterResponse",
            value: exports.QueryVotesByVoterResponse.encode(message).finish()
        };
    }
};
