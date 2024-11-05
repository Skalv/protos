//@ts-nocheck
import { PlacementRequirements } from "../../base/v1beta1/attribute";
import { ResourceUnits } from "../../base/v1beta1/resource";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** State is an enum which refers to state of group */
export var Group_State;
(function (Group_State) {
    /** invalid - Prefix should start with 0 in enum. So declaring dummy state */
    Group_State[Group_State["invalid"] = 0] = "invalid";
    /** open - GroupOpen denotes state for group open */
    Group_State[Group_State["open"] = 1] = "open";
    /** paused - GroupOrdered denotes state for group ordered */
    Group_State[Group_State["paused"] = 2] = "paused";
    /** insufficient_funds - GroupInsufficientFunds denotes state for group insufficient_funds */
    Group_State[Group_State["insufficient_funds"] = 3] = "insufficient_funds";
    /** closed - GroupClosed denotes state for group closed */
    Group_State[Group_State["closed"] = 4] = "closed";
    Group_State[Group_State["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Group_State || (Group_State = {}));
export const Group_StateSDKType = Group_State;
export const Group_StateAmino = Group_State;
export function group_StateFromJSON(object) {
    switch (object) {
        case 0:
        case "invalid":
            return Group_State.invalid;
        case 1:
        case "open":
            return Group_State.open;
        case 2:
        case "paused":
            return Group_State.paused;
        case 3:
        case "insufficient_funds":
            return Group_State.insufficient_funds;
        case 4:
        case "closed":
            return Group_State.closed;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Group_State.UNRECOGNIZED;
    }
}
export function group_StateToJSON(object) {
    switch (object) {
        case Group_State.invalid:
            return "invalid";
        case Group_State.open:
            return "open";
        case Group_State.paused:
            return "paused";
        case Group_State.insufficient_funds:
            return "insufficient_funds";
        case Group_State.closed:
            return "closed";
        case Group_State.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseMsgCloseGroup() {
    return {
        id: GroupID.fromPartial({})
    };
}
export const MsgCloseGroup = {
    typeUrl: "/akash.deployment.v1beta1.MsgCloseGroup",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== undefined) {
            GroupID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCloseGroup();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = GroupID.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCloseGroup();
        message.id = object.id !== undefined && object.id !== null ? GroupID.fromPartial(object.id) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCloseGroup();
        if (object.id !== undefined && object.id !== null) {
            message.id = GroupID.fromAmino(object.id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id ? GroupID.toAmino(message.id) : GroupID.toAmino(GroupID.fromPartial({}));
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCloseGroup.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCloseGroup.decode(message.value);
    },
    toProto(message) {
        return MsgCloseGroup.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.deployment.v1beta1.MsgCloseGroup",
            value: MsgCloseGroup.encode(message).finish()
        };
    }
};
function createBaseMsgCloseGroupResponse() {
    return {};
}
export const MsgCloseGroupResponse = {
    typeUrl: "/akash.deployment.v1beta1.MsgCloseGroupResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCloseGroupResponse();
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
        const message = createBaseMsgCloseGroupResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgCloseGroupResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCloseGroupResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCloseGroupResponse.decode(message.value);
    },
    toProto(message) {
        return MsgCloseGroupResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.deployment.v1beta1.MsgCloseGroupResponse",
            value: MsgCloseGroupResponse.encode(message).finish()
        };
    }
};
function createBaseMsgPauseGroup() {
    return {
        id: GroupID.fromPartial({})
    };
}
export const MsgPauseGroup = {
    typeUrl: "/akash.deployment.v1beta1.MsgPauseGroup",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== undefined) {
            GroupID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgPauseGroup();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = GroupID.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgPauseGroup();
        message.id = object.id !== undefined && object.id !== null ? GroupID.fromPartial(object.id) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgPauseGroup();
        if (object.id !== undefined && object.id !== null) {
            message.id = GroupID.fromAmino(object.id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id ? GroupID.toAmino(message.id) : GroupID.toAmino(GroupID.fromPartial({}));
        return obj;
    },
    fromAminoMsg(object) {
        return MsgPauseGroup.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgPauseGroup.decode(message.value);
    },
    toProto(message) {
        return MsgPauseGroup.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.deployment.v1beta1.MsgPauseGroup",
            value: MsgPauseGroup.encode(message).finish()
        };
    }
};
function createBaseMsgPauseGroupResponse() {
    return {};
}
export const MsgPauseGroupResponse = {
    typeUrl: "/akash.deployment.v1beta1.MsgPauseGroupResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgPauseGroupResponse();
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
        const message = createBaseMsgPauseGroupResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgPauseGroupResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgPauseGroupResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgPauseGroupResponse.decode(message.value);
    },
    toProto(message) {
        return MsgPauseGroupResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.deployment.v1beta1.MsgPauseGroupResponse",
            value: MsgPauseGroupResponse.encode(message).finish()
        };
    }
};
function createBaseMsgStartGroup() {
    return {
        id: GroupID.fromPartial({})
    };
}
export const MsgStartGroup = {
    typeUrl: "/akash.deployment.v1beta1.MsgStartGroup",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== undefined) {
            GroupID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgStartGroup();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = GroupID.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgStartGroup();
        message.id = object.id !== undefined && object.id !== null ? GroupID.fromPartial(object.id) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgStartGroup();
        if (object.id !== undefined && object.id !== null) {
            message.id = GroupID.fromAmino(object.id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id ? GroupID.toAmino(message.id) : GroupID.toAmino(GroupID.fromPartial({}));
        return obj;
    },
    fromAminoMsg(object) {
        return MsgStartGroup.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgStartGroup.decode(message.value);
    },
    toProto(message) {
        return MsgStartGroup.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.deployment.v1beta1.MsgStartGroup",
            value: MsgStartGroup.encode(message).finish()
        };
    }
};
function createBaseMsgStartGroupResponse() {
    return {};
}
export const MsgStartGroupResponse = {
    typeUrl: "/akash.deployment.v1beta1.MsgStartGroupResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgStartGroupResponse();
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
        const message = createBaseMsgStartGroupResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgStartGroupResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgStartGroupResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgStartGroupResponse.decode(message.value);
    },
    toProto(message) {
        return MsgStartGroupResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.deployment.v1beta1.MsgStartGroupResponse",
            value: MsgStartGroupResponse.encode(message).finish()
        };
    }
};
function createBaseGroupID() {
    return {
        owner: "",
        dseq: BigInt(0),
        gseq: 0
    };
}
export const GroupID = {
    typeUrl: "/akash.deployment.v1beta1.GroupID",
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.dseq !== BigInt(0)) {
            writer.uint32(16).uint64(message.dseq);
        }
        if (message.gseq !== 0) {
            writer.uint32(24).uint32(message.gseq);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGroupID();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.dseq = reader.uint64();
                    break;
                case 3:
                    message.gseq = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGroupID();
        message.owner = object.owner ?? "";
        message.dseq = object.dseq !== undefined && object.dseq !== null ? BigInt(object.dseq.toString()) : BigInt(0);
        message.gseq = object.gseq ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGroupID();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.dseq !== undefined && object.dseq !== null) {
            message.dseq = BigInt(object.dseq);
        }
        if (object.gseq !== undefined && object.gseq !== null) {
            message.gseq = object.gseq;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner ?? "";
        obj.dseq = message.dseq ? (message.dseq?.toString)() : "0";
        obj.gseq = message.gseq ?? 0;
        return obj;
    },
    fromAminoMsg(object) {
        return GroupID.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return GroupID.decode(message.value);
    },
    toProto(message) {
        return GroupID.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.deployment.v1beta1.GroupID",
            value: GroupID.encode(message).finish()
        };
    }
};
function createBaseGroupSpec() {
    return {
        name: "",
        requirements: PlacementRequirements.fromPartial({}),
        resources: []
    };
}
export const GroupSpec = {
    typeUrl: "/akash.deployment.v1beta1.GroupSpec",
    encode(message, writer = BinaryWriter.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.requirements !== undefined) {
            PlacementRequirements.encode(message.requirements, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.resources) {
            Resource.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGroupSpec();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.requirements = PlacementRequirements.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.resources.push(Resource.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGroupSpec();
        message.name = object.name ?? "";
        message.requirements = object.requirements !== undefined && object.requirements !== null ? PlacementRequirements.fromPartial(object.requirements) : undefined;
        message.resources = object.resources?.map(e => Resource.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGroupSpec();
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.requirements !== undefined && object.requirements !== null) {
            message.requirements = PlacementRequirements.fromAmino(object.requirements);
        }
        message.resources = object.resources?.map(e => Resource.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name ?? "";
        obj.requirements = message.requirements ? PlacementRequirements.toAmino(message.requirements) : PlacementRequirements.toAmino(PlacementRequirements.fromPartial({}));
        if (message.resources) {
            obj.resources = message.resources.map(e => e ? Resource.toAmino(e) : undefined);
        }
        else {
            obj.resources = message.resources;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return GroupSpec.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return GroupSpec.decode(message.value);
    },
    toProto(message) {
        return GroupSpec.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.deployment.v1beta1.GroupSpec",
            value: GroupSpec.encode(message).finish()
        };
    }
};
function createBaseGroup() {
    return {
        groupId: GroupID.fromPartial({}),
        state: 0,
        groupSpec: GroupSpec.fromPartial({}),
        createdAt: BigInt(0)
    };
}
export const Group = {
    typeUrl: "/akash.deployment.v1beta1.Group",
    encode(message, writer = BinaryWriter.create()) {
        if (message.groupId !== undefined) {
            GroupID.encode(message.groupId, writer.uint32(10).fork()).ldelim();
        }
        if (message.state !== 0) {
            writer.uint32(16).int32(message.state);
        }
        if (message.groupSpec !== undefined) {
            GroupSpec.encode(message.groupSpec, writer.uint32(26).fork()).ldelim();
        }
        if (message.createdAt !== BigInt(0)) {
            writer.uint32(32).int64(message.createdAt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGroup();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupId = GroupID.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.state = reader.int32();
                    break;
                case 3:
                    message.groupSpec = GroupSpec.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.createdAt = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGroup();
        message.groupId = object.groupId !== undefined && object.groupId !== null ? GroupID.fromPartial(object.groupId) : undefined;
        message.state = object.state ?? 0;
        message.groupSpec = object.groupSpec !== undefined && object.groupSpec !== null ? GroupSpec.fromPartial(object.groupSpec) : undefined;
        message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? BigInt(object.createdAt.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseGroup();
        if (object.group_id !== undefined && object.group_id !== null) {
            message.groupId = GroupID.fromAmino(object.group_id);
        }
        if (object.state !== undefined && object.state !== null) {
            message.state = object.state;
        }
        if (object.group_spec !== undefined && object.group_spec !== null) {
            message.groupSpec = GroupSpec.fromAmino(object.group_spec);
        }
        if (object.created_at !== undefined && object.created_at !== null) {
            message.createdAt = BigInt(object.created_at);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.group_id = message.groupId ? GroupID.toAmino(message.groupId) : GroupID.toAmino(GroupID.fromPartial({}));
        obj.state = message.state ?? 0;
        obj.group_spec = message.groupSpec ? GroupSpec.toAmino(message.groupSpec) : GroupSpec.toAmino(GroupSpec.fromPartial({}));
        obj.created_at = message.createdAt !== BigInt(0) ? (message.createdAt?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Group.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Group.decode(message.value);
    },
    toProto(message) {
        return Group.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.deployment.v1beta1.Group",
            value: Group.encode(message).finish()
        };
    }
};
function createBaseResource() {
    return {
        resources: ResourceUnits.fromPartial({}),
        count: 0,
        price: Coin.fromPartial({})
    };
}
export const Resource = {
    typeUrl: "/akash.deployment.v1beta1.Resource",
    encode(message, writer = BinaryWriter.create()) {
        if (message.resources !== undefined) {
            ResourceUnits.encode(message.resources, writer.uint32(10).fork()).ldelim();
        }
        if (message.count !== 0) {
            writer.uint32(16).uint32(message.count);
        }
        if (message.price !== undefined) {
            Coin.encode(message.price, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResource();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resources = ResourceUnits.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.count = reader.uint32();
                    break;
                case 3:
                    message.price = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseResource();
        message.resources = object.resources !== undefined && object.resources !== null ? ResourceUnits.fromPartial(object.resources) : undefined;
        message.count = object.count ?? 0;
        message.price = object.price !== undefined && object.price !== null ? Coin.fromPartial(object.price) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseResource();
        if (object.resources !== undefined && object.resources !== null) {
            message.resources = ResourceUnits.fromAmino(object.resources);
        }
        if (object.count !== undefined && object.count !== null) {
            message.count = object.count;
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = Coin.fromAmino(object.price);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.resources = message.resources ? ResourceUnits.toAmino(message.resources) : ResourceUnits.toAmino(ResourceUnits.fromPartial({}));
        obj.count = message.count ?? 0;
        obj.price = message.price ? Coin.toAmino(message.price) : Coin.toAmino(Coin.fromPartial({}));
        return obj;
    },
    fromAminoMsg(object) {
        return Resource.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Resource.decode(message.value);
    },
    toProto(message) {
        return Resource.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.deployment.v1beta1.Resource",
            value: Resource.encode(message).finish()
        };
    }
};
