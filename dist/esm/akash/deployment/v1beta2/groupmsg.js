//@ts-nocheck
import { GroupID } from "./groupid";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseMsgCloseGroup() {
    return {
        id: GroupID.fromPartial({})
    };
}
export const MsgCloseGroup = {
    typeUrl: "/akash.deployment.v1beta2.MsgCloseGroup",
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
            typeUrl: "/akash.deployment.v1beta2.MsgCloseGroup",
            value: MsgCloseGroup.encode(message).finish()
        };
    }
};
function createBaseMsgCloseGroupResponse() {
    return {};
}
export const MsgCloseGroupResponse = {
    typeUrl: "/akash.deployment.v1beta2.MsgCloseGroupResponse",
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
            typeUrl: "/akash.deployment.v1beta2.MsgCloseGroupResponse",
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
    typeUrl: "/akash.deployment.v1beta2.MsgPauseGroup",
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
            typeUrl: "/akash.deployment.v1beta2.MsgPauseGroup",
            value: MsgPauseGroup.encode(message).finish()
        };
    }
};
function createBaseMsgPauseGroupResponse() {
    return {};
}
export const MsgPauseGroupResponse = {
    typeUrl: "/akash.deployment.v1beta2.MsgPauseGroupResponse",
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
            typeUrl: "/akash.deployment.v1beta2.MsgPauseGroupResponse",
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
    typeUrl: "/akash.deployment.v1beta2.MsgStartGroup",
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
            typeUrl: "/akash.deployment.v1beta2.MsgStartGroup",
            value: MsgStartGroup.encode(message).finish()
        };
    }
};
function createBaseMsgStartGroupResponse() {
    return {};
}
export const MsgStartGroupResponse = {
    typeUrl: "/akash.deployment.v1beta2.MsgStartGroupResponse",
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
            typeUrl: "/akash.deployment.v1beta2.MsgStartGroupResponse",
            value: MsgStartGroupResponse.encode(message).finish()
        };
    }
};
