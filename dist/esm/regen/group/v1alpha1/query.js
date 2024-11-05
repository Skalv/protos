//@ts-nocheck
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { GroupInfo, GroupAccountInfo, GroupMember, Proposal, Vote } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseQueryGroupInfoRequest() {
    return {
        groupId: BigInt(0)
    };
}
export const QueryGroupInfoRequest = {
    typeUrl: "/regen.group.v1alpha1.QueryGroupInfoRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.groupId !== BigInt(0)) {
            writer.uint32(8).uint64(message.groupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryGroupInfoRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryGroupInfoRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGroupInfoRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.QueryGroupInfoRequest",
            value: QueryGroupInfoRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGroupInfoResponse() {
    return {
        info: undefined
    };
}
export const QueryGroupInfoResponse = {
    typeUrl: "/regen.group.v1alpha1.QueryGroupInfoResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.info !== undefined) {
            GroupInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.info = GroupInfo.decode(reader, reader.uint32());
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
        message.info = object.info !== undefined && object.info !== null ? GroupInfo.fromPartial(object.info) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGroupInfoResponse();
        if (object.info !== undefined && object.info !== null) {
            message.info = GroupInfo.fromAmino(object.info);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.info = message.info ? GroupInfo.toAmino(message.info) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGroupInfoResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryGroupInfoResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGroupInfoResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.QueryGroupInfoResponse",
            value: QueryGroupInfoResponse.encode(message).finish()
        };
    }
};
function createBaseQueryGroupAccountInfoRequest() {
    return {
        address: ""
    };
}
export const QueryGroupAccountInfoRequest = {
    typeUrl: "/regen.group.v1alpha1.QueryGroupAccountInfoRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryGroupAccountInfoRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryGroupAccountInfoRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGroupAccountInfoRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.QueryGroupAccountInfoRequest",
            value: QueryGroupAccountInfoRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGroupAccountInfoResponse() {
    return {
        info: undefined
    };
}
export const QueryGroupAccountInfoResponse = {
    typeUrl: "/regen.group.v1alpha1.QueryGroupAccountInfoResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.info !== undefined) {
            GroupAccountInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupAccountInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.info = GroupAccountInfo.decode(reader, reader.uint32());
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
        message.info = object.info !== undefined && object.info !== null ? GroupAccountInfo.fromPartial(object.info) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGroupAccountInfoResponse();
        if (object.info !== undefined && object.info !== null) {
            message.info = GroupAccountInfo.fromAmino(object.info);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.info = message.info ? GroupAccountInfo.toAmino(message.info) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGroupAccountInfoResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryGroupAccountInfoResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGroupAccountInfoResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.QueryGroupAccountInfoResponse",
            value: QueryGroupAccountInfoResponse.encode(message).finish()
        };
    }
};
function createBaseQueryGroupMembersRequest() {
    return {
        groupId: BigInt(0),
        pagination: undefined
    };
}
export const QueryGroupMembersRequest = {
    typeUrl: "/regen.group.v1alpha1.QueryGroupMembersRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.groupId !== BigInt(0)) {
            writer.uint32(8).uint64(message.groupId);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupMembersRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupId = reader.uint64();
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGroupMembersRequest();
        if (object.group_id !== undefined && object.group_id !== null) {
            message.groupId = BigInt(object.group_id);
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.group_id = message.groupId !== BigInt(0) ? (message.groupId?.toString)() : undefined;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGroupMembersRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryGroupMembersRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGroupMembersRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.QueryGroupMembersRequest",
            value: QueryGroupMembersRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGroupMembersResponse() {
    return {
        members: [],
        pagination: undefined
    };
}
export const QueryGroupMembersResponse = {
    typeUrl: "/regen.group.v1alpha1.QueryGroupMembersResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.members) {
            GroupMember.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupMembersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.members.push(GroupMember.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
        message.members = object.members?.map(e => GroupMember.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGroupMembersResponse();
        message.members = object.members?.map(e => GroupMember.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.members) {
            obj.members = message.members.map(e => e ? GroupMember.toAmino(e) : undefined);
        }
        else {
            obj.members = message.members;
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGroupMembersResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryGroupMembersResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGroupMembersResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.QueryGroupMembersResponse",
            value: QueryGroupMembersResponse.encode(message).finish()
        };
    }
};
function createBaseQueryGroupsByAdminRequest() {
    return {
        admin: "",
        pagination: undefined
    };
}
export const QueryGroupsByAdminRequest = {
    typeUrl: "/regen.group.v1alpha1.QueryGroupsByAdminRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupsByAdminRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGroupsByAdminRequest();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin === "" ? undefined : message.admin;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGroupsByAdminRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryGroupsByAdminRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGroupsByAdminRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.QueryGroupsByAdminRequest",
            value: QueryGroupsByAdminRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGroupsByAdminResponse() {
    return {
        groups: [],
        pagination: undefined
    };
}
export const QueryGroupsByAdminResponse = {
    typeUrl: "/regen.group.v1alpha1.QueryGroupsByAdminResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.groups) {
            GroupInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupsByAdminResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groups.push(GroupInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
        message.groups = object.groups?.map(e => GroupInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGroupsByAdminResponse();
        message.groups = object.groups?.map(e => GroupInfo.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.groups) {
            obj.groups = message.groups.map(e => e ? GroupInfo.toAmino(e) : undefined);
        }
        else {
            obj.groups = message.groups;
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGroupsByAdminResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryGroupsByAdminResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGroupsByAdminResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.QueryGroupsByAdminResponse",
            value: QueryGroupsByAdminResponse.encode(message).finish()
        };
    }
};
function createBaseQueryGroupAccountsByGroupRequest() {
    return {
        groupId: BigInt(0),
        pagination: undefined
    };
}
export const QueryGroupAccountsByGroupRequest = {
    typeUrl: "/regen.group.v1alpha1.QueryGroupAccountsByGroupRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.groupId !== BigInt(0)) {
            writer.uint32(8).uint64(message.groupId);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupAccountsByGroupRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupId = reader.uint64();
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGroupAccountsByGroupRequest();
        if (object.group_id !== undefined && object.group_id !== null) {
            message.groupId = BigInt(object.group_id);
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.group_id = message.groupId !== BigInt(0) ? (message.groupId?.toString)() : undefined;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGroupAccountsByGroupRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryGroupAccountsByGroupRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGroupAccountsByGroupRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.QueryGroupAccountsByGroupRequest",
            value: QueryGroupAccountsByGroupRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGroupAccountsByGroupResponse() {
    return {
        groupAccounts: [],
        pagination: undefined
    };
}
export const QueryGroupAccountsByGroupResponse = {
    typeUrl: "/regen.group.v1alpha1.QueryGroupAccountsByGroupResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.groupAccounts) {
            GroupAccountInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupAccountsByGroupResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupAccounts.push(GroupAccountInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
        message.groupAccounts = object.groupAccounts?.map(e => GroupAccountInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGroupAccountsByGroupResponse();
        message.groupAccounts = object.group_accounts?.map(e => GroupAccountInfo.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.groupAccounts) {
            obj.group_accounts = message.groupAccounts.map(e => e ? GroupAccountInfo.toAmino(e) : undefined);
        }
        else {
            obj.group_accounts = message.groupAccounts;
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGroupAccountsByGroupResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryGroupAccountsByGroupResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGroupAccountsByGroupResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.QueryGroupAccountsByGroupResponse",
            value: QueryGroupAccountsByGroupResponse.encode(message).finish()
        };
    }
};
function createBaseQueryGroupAccountsByAdminRequest() {
    return {
        admin: "",
        pagination: undefined
    };
}
export const QueryGroupAccountsByAdminRequest = {
    typeUrl: "/regen.group.v1alpha1.QueryGroupAccountsByAdminRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupAccountsByAdminRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGroupAccountsByAdminRequest();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin === "" ? undefined : message.admin;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGroupAccountsByAdminRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryGroupAccountsByAdminRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGroupAccountsByAdminRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.QueryGroupAccountsByAdminRequest",
            value: QueryGroupAccountsByAdminRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGroupAccountsByAdminResponse() {
    return {
        groupAccounts: [],
        pagination: undefined
    };
}
export const QueryGroupAccountsByAdminResponse = {
    typeUrl: "/regen.group.v1alpha1.QueryGroupAccountsByAdminResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.groupAccounts) {
            GroupAccountInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupAccountsByAdminResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupAccounts.push(GroupAccountInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
        message.groupAccounts = object.groupAccounts?.map(e => GroupAccountInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGroupAccountsByAdminResponse();
        message.groupAccounts = object.group_accounts?.map(e => GroupAccountInfo.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.groupAccounts) {
            obj.group_accounts = message.groupAccounts.map(e => e ? GroupAccountInfo.toAmino(e) : undefined);
        }
        else {
            obj.group_accounts = message.groupAccounts;
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGroupAccountsByAdminResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryGroupAccountsByAdminResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGroupAccountsByAdminResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.QueryGroupAccountsByAdminResponse",
            value: QueryGroupAccountsByAdminResponse.encode(message).finish()
        };
    }
};
function createBaseQueryProposalRequest() {
    return {
        proposalId: BigInt(0)
    };
}
export const QueryProposalRequest = {
    typeUrl: "/regen.group.v1alpha1.QueryProposalRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.proposalId !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposalId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryProposalRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryProposalRequest.decode(message.value);
    },
    toProto(message) {
        return QueryProposalRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.QueryProposalRequest",
            value: QueryProposalRequest.encode(message).finish()
        };
    }
};
function createBaseQueryProposalResponse() {
    return {
        proposal: undefined
    };
}
export const QueryProposalResponse = {
    typeUrl: "/regen.group.v1alpha1.QueryProposalResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.proposal !== undefined) {
            Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProposalResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal = Proposal.decode(reader, reader.uint32());
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
        message.proposal = object.proposal !== undefined && object.proposal !== null ? Proposal.fromPartial(object.proposal) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryProposalResponse();
        if (object.proposal !== undefined && object.proposal !== null) {
            message.proposal = Proposal.fromAmino(object.proposal);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal = message.proposal ? Proposal.toAmino(message.proposal) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryProposalResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryProposalResponse.decode(message.value);
    },
    toProto(message) {
        return QueryProposalResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.QueryProposalResponse",
            value: QueryProposalResponse.encode(message).finish()
        };
    }
};
function createBaseQueryProposalsByGroupAccountRequest() {
    return {
        address: "",
        pagination: undefined
    };
}
export const QueryProposalsByGroupAccountRequest = {
    typeUrl: "/regen.group.v1alpha1.QueryProposalsByGroupAccountRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProposalsByGroupAccountRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryProposalsByGroupAccountRequest();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryProposalsByGroupAccountRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryProposalsByGroupAccountRequest.decode(message.value);
    },
    toProto(message) {
        return QueryProposalsByGroupAccountRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.QueryProposalsByGroupAccountRequest",
            value: QueryProposalsByGroupAccountRequest.encode(message).finish()
        };
    }
};
function createBaseQueryProposalsByGroupAccountResponse() {
    return {
        proposals: [],
        pagination: undefined
    };
}
export const QueryProposalsByGroupAccountResponse = {
    typeUrl: "/regen.group.v1alpha1.QueryProposalsByGroupAccountResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.proposals) {
            Proposal.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProposalsByGroupAccountResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposals.push(Proposal.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
        message.proposals = object.proposals?.map(e => Proposal.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryProposalsByGroupAccountResponse();
        message.proposals = object.proposals?.map(e => Proposal.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.proposals) {
            obj.proposals = message.proposals.map(e => e ? Proposal.toAmino(e) : undefined);
        }
        else {
            obj.proposals = message.proposals;
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryProposalsByGroupAccountResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryProposalsByGroupAccountResponse.decode(message.value);
    },
    toProto(message) {
        return QueryProposalsByGroupAccountResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.QueryProposalsByGroupAccountResponse",
            value: QueryProposalsByGroupAccountResponse.encode(message).finish()
        };
    }
};
function createBaseQueryVoteByProposalVoterRequest() {
    return {
        proposalId: BigInt(0),
        voter: ""
    };
}
export const QueryVoteByProposalVoterRequest = {
    typeUrl: "/regen.group.v1alpha1.QueryVoteByProposalVoterRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.proposalId !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.voter !== "") {
            writer.uint32(18).string(message.voter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryVoteByProposalVoterRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryVoteByProposalVoterRequest.decode(message.value);
    },
    toProto(message) {
        return QueryVoteByProposalVoterRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.QueryVoteByProposalVoterRequest",
            value: QueryVoteByProposalVoterRequest.encode(message).finish()
        };
    }
};
function createBaseQueryVoteByProposalVoterResponse() {
    return {
        vote: undefined
    };
}
export const QueryVoteByProposalVoterResponse = {
    typeUrl: "/regen.group.v1alpha1.QueryVoteByProposalVoterResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.vote !== undefined) {
            Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVoteByProposalVoterResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vote = Vote.decode(reader, reader.uint32());
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
        message.vote = object.vote !== undefined && object.vote !== null ? Vote.fromPartial(object.vote) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryVoteByProposalVoterResponse();
        if (object.vote !== undefined && object.vote !== null) {
            message.vote = Vote.fromAmino(object.vote);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.vote = message.vote ? Vote.toAmino(message.vote) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryVoteByProposalVoterResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryVoteByProposalVoterResponse.decode(message.value);
    },
    toProto(message) {
        return QueryVoteByProposalVoterResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.QueryVoteByProposalVoterResponse",
            value: QueryVoteByProposalVoterResponse.encode(message).finish()
        };
    }
};
function createBaseQueryVotesByProposalRequest() {
    return {
        proposalId: BigInt(0),
        pagination: undefined
    };
}
export const QueryVotesByProposalRequest = {
    typeUrl: "/regen.group.v1alpha1.QueryVotesByProposalRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.proposalId !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVotesByProposalRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryVotesByProposalRequest();
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposalId = BigInt(object.proposal_id);
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposalId !== BigInt(0) ? (message.proposalId?.toString)() : undefined;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryVotesByProposalRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryVotesByProposalRequest.decode(message.value);
    },
    toProto(message) {
        return QueryVotesByProposalRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.QueryVotesByProposalRequest",
            value: QueryVotesByProposalRequest.encode(message).finish()
        };
    }
};
function createBaseQueryVotesByProposalResponse() {
    return {
        votes: [],
        pagination: undefined
    };
}
export const QueryVotesByProposalResponse = {
    typeUrl: "/regen.group.v1alpha1.QueryVotesByProposalResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.votes) {
            Vote.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVotesByProposalResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.votes.push(Vote.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
        message.votes = object.votes?.map(e => Vote.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryVotesByProposalResponse();
        message.votes = object.votes?.map(e => Vote.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.votes) {
            obj.votes = message.votes.map(e => e ? Vote.toAmino(e) : undefined);
        }
        else {
            obj.votes = message.votes;
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryVotesByProposalResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryVotesByProposalResponse.decode(message.value);
    },
    toProto(message) {
        return QueryVotesByProposalResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.QueryVotesByProposalResponse",
            value: QueryVotesByProposalResponse.encode(message).finish()
        };
    }
};
function createBaseQueryVotesByVoterRequest() {
    return {
        voter: "",
        pagination: undefined
    };
}
export const QueryVotesByVoterRequest = {
    typeUrl: "/regen.group.v1alpha1.QueryVotesByVoterRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.voter !== "") {
            writer.uint32(10).string(message.voter);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVotesByVoterRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.voter = reader.string();
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryVotesByVoterRequest();
        if (object.voter !== undefined && object.voter !== null) {
            message.voter = object.voter;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.voter = message.voter === "" ? undefined : message.voter;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryVotesByVoterRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryVotesByVoterRequest.decode(message.value);
    },
    toProto(message) {
        return QueryVotesByVoterRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.QueryVotesByVoterRequest",
            value: QueryVotesByVoterRequest.encode(message).finish()
        };
    }
};
function createBaseQueryVotesByVoterResponse() {
    return {
        votes: [],
        pagination: undefined
    };
}
export const QueryVotesByVoterResponse = {
    typeUrl: "/regen.group.v1alpha1.QueryVotesByVoterResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.votes) {
            Vote.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVotesByVoterResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.votes.push(Vote.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
        message.votes = object.votes?.map(e => Vote.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryVotesByVoterResponse();
        message.votes = object.votes?.map(e => Vote.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.votes) {
            obj.votes = message.votes.map(e => e ? Vote.toAmino(e) : undefined);
        }
        else {
            obj.votes = message.votes;
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryVotesByVoterResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryVotesByVoterResponse.decode(message.value);
    },
    toProto(message) {
        return QueryVotesByVoterResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.QueryVotesByVoterResponse",
            value: QueryVotesByVoterResponse.encode(message).finish()
        };
    }
};
