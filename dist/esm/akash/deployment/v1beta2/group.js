//@ts-nocheck
import { GroupID } from "./groupid";
import { GroupSpec } from "./groupspec";
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
function createBaseGroup() {
    return {
        groupId: GroupID.fromPartial({}),
        state: 0,
        groupSpec: GroupSpec.fromPartial({}),
        createdAt: BigInt(0)
    };
}
export const Group = {
    typeUrl: "/akash.deployment.v1beta2.Group",
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
            typeUrl: "/akash.deployment.v1beta2.Group",
            value: Group.encode(message).finish()
        };
    }
};
