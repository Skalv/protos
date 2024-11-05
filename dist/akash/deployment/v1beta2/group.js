"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Group = exports.Group_StateAmino = exports.Group_StateSDKType = exports.Group_State = void 0;
exports.group_StateFromJSON = group_StateFromJSON;
exports.group_StateToJSON = group_StateToJSON;
//@ts-nocheck
const groupid_1 = require("./groupid");
const groupspec_1 = require("./groupspec");
const binary_1 = require("../../../binary");
/** State is an enum which refers to state of group */
var Group_State;
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
})(Group_State || (exports.Group_State = Group_State = {}));
exports.Group_StateSDKType = Group_State;
exports.Group_StateAmino = Group_State;
function group_StateFromJSON(object) {
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
function group_StateToJSON(object) {
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
        groupId: groupid_1.GroupID.fromPartial({}),
        state: 0,
        groupSpec: groupspec_1.GroupSpec.fromPartial({}),
        createdAt: BigInt(0)
    };
}
exports.Group = {
    typeUrl: "/akash.deployment.v1beta2.Group",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.groupId !== undefined) {
            groupid_1.GroupID.encode(message.groupId, writer.uint32(10).fork()).ldelim();
        }
        if (message.state !== 0) {
            writer.uint32(16).int32(message.state);
        }
        if (message.groupSpec !== undefined) {
            groupspec_1.GroupSpec.encode(message.groupSpec, writer.uint32(26).fork()).ldelim();
        }
        if (message.createdAt !== BigInt(0)) {
            writer.uint32(32).int64(message.createdAt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGroup();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupId = groupid_1.GroupID.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.state = reader.int32();
                    break;
                case 3:
                    message.groupSpec = groupspec_1.GroupSpec.decode(reader, reader.uint32());
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
        message.groupId = object.groupId !== undefined && object.groupId !== null ? groupid_1.GroupID.fromPartial(object.groupId) : undefined;
        message.state = object.state ?? 0;
        message.groupSpec = object.groupSpec !== undefined && object.groupSpec !== null ? groupspec_1.GroupSpec.fromPartial(object.groupSpec) : undefined;
        message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? BigInt(object.createdAt.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseGroup();
        if (object.group_id !== undefined && object.group_id !== null) {
            message.groupId = groupid_1.GroupID.fromAmino(object.group_id);
        }
        if (object.state !== undefined && object.state !== null) {
            message.state = object.state;
        }
        if (object.group_spec !== undefined && object.group_spec !== null) {
            message.groupSpec = groupspec_1.GroupSpec.fromAmino(object.group_spec);
        }
        if (object.created_at !== undefined && object.created_at !== null) {
            message.createdAt = BigInt(object.created_at);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.group_id = message.groupId ? groupid_1.GroupID.toAmino(message.groupId) : groupid_1.GroupID.toAmino(groupid_1.GroupID.fromPartial({}));
        obj.state = message.state ?? 0;
        obj.group_spec = message.groupSpec ? groupspec_1.GroupSpec.toAmino(message.groupSpec) : groupspec_1.GroupSpec.toAmino(groupspec_1.GroupSpec.fromPartial({}));
        obj.created_at = message.createdAt !== BigInt(0) ? (message.createdAt?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Group.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Group.decode(message.value);
    },
    toProto(message) {
        return exports.Group.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.deployment.v1beta2.Group",
            value: exports.Group.encode(message).finish()
        };
    }
};
