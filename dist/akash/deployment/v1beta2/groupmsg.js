"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgStartGroupResponse = exports.MsgStartGroup = exports.MsgPauseGroupResponse = exports.MsgPauseGroup = exports.MsgCloseGroupResponse = exports.MsgCloseGroup = void 0;
//@ts-nocheck
const groupid_1 = require("./groupid");
const binary_1 = require("../../../binary");
function createBaseMsgCloseGroup() {
    return {
        id: groupid_1.GroupID.fromPartial({})
    };
}
exports.MsgCloseGroup = {
    typeUrl: "/akash.deployment.v1beta2.MsgCloseGroup",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.id !== undefined) {
            groupid_1.GroupID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCloseGroup();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = groupid_1.GroupID.decode(reader, reader.uint32());
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
        message.id = object.id !== undefined && object.id !== null ? groupid_1.GroupID.fromPartial(object.id) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCloseGroup();
        if (object.id !== undefined && object.id !== null) {
            message.id = groupid_1.GroupID.fromAmino(object.id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id ? groupid_1.GroupID.toAmino(message.id) : groupid_1.GroupID.toAmino(groupid_1.GroupID.fromPartial({}));
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCloseGroup.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCloseGroup.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCloseGroup.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.deployment.v1beta2.MsgCloseGroup",
            value: exports.MsgCloseGroup.encode(message).finish()
        };
    }
};
function createBaseMsgCloseGroupResponse() {
    return {};
}
exports.MsgCloseGroupResponse = {
    typeUrl: "/akash.deployment.v1beta2.MsgCloseGroupResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgCloseGroupResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCloseGroupResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCloseGroupResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.deployment.v1beta2.MsgCloseGroupResponse",
            value: exports.MsgCloseGroupResponse.encode(message).finish()
        };
    }
};
function createBaseMsgPauseGroup() {
    return {
        id: groupid_1.GroupID.fromPartial({})
    };
}
exports.MsgPauseGroup = {
    typeUrl: "/akash.deployment.v1beta2.MsgPauseGroup",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.id !== undefined) {
            groupid_1.GroupID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgPauseGroup();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = groupid_1.GroupID.decode(reader, reader.uint32());
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
        message.id = object.id !== undefined && object.id !== null ? groupid_1.GroupID.fromPartial(object.id) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgPauseGroup();
        if (object.id !== undefined && object.id !== null) {
            message.id = groupid_1.GroupID.fromAmino(object.id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id ? groupid_1.GroupID.toAmino(message.id) : groupid_1.GroupID.toAmino(groupid_1.GroupID.fromPartial({}));
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgPauseGroup.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgPauseGroup.decode(message.value);
    },
    toProto(message) {
        return exports.MsgPauseGroup.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.deployment.v1beta2.MsgPauseGroup",
            value: exports.MsgPauseGroup.encode(message).finish()
        };
    }
};
function createBaseMsgPauseGroupResponse() {
    return {};
}
exports.MsgPauseGroupResponse = {
    typeUrl: "/akash.deployment.v1beta2.MsgPauseGroupResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgPauseGroupResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgPauseGroupResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgPauseGroupResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.deployment.v1beta2.MsgPauseGroupResponse",
            value: exports.MsgPauseGroupResponse.encode(message).finish()
        };
    }
};
function createBaseMsgStartGroup() {
    return {
        id: groupid_1.GroupID.fromPartial({})
    };
}
exports.MsgStartGroup = {
    typeUrl: "/akash.deployment.v1beta2.MsgStartGroup",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.id !== undefined) {
            groupid_1.GroupID.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgStartGroup();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = groupid_1.GroupID.decode(reader, reader.uint32());
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
        message.id = object.id !== undefined && object.id !== null ? groupid_1.GroupID.fromPartial(object.id) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgStartGroup();
        if (object.id !== undefined && object.id !== null) {
            message.id = groupid_1.GroupID.fromAmino(object.id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id ? groupid_1.GroupID.toAmino(message.id) : groupid_1.GroupID.toAmino(groupid_1.GroupID.fromPartial({}));
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgStartGroup.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgStartGroup.decode(message.value);
    },
    toProto(message) {
        return exports.MsgStartGroup.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.deployment.v1beta2.MsgStartGroup",
            value: exports.MsgStartGroup.encode(message).finish()
        };
    }
};
function createBaseMsgStartGroupResponse() {
    return {};
}
exports.MsgStartGroupResponse = {
    typeUrl: "/akash.deployment.v1beta2.MsgStartGroupResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgStartGroupResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgStartGroupResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgStartGroupResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.deployment.v1beta2.MsgStartGroupResponse",
            value: exports.MsgStartGroupResponse.encode(message).finish()
        };
    }
};
