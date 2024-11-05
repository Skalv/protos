"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgAcknowledgementResponse = exports.MsgAcknowledgement = exports.MsgTimeoutOnCloseResponse = exports.MsgTimeoutOnClose = exports.MsgTimeoutResponse = exports.MsgTimeout = exports.MsgRecvPacketResponse = exports.MsgRecvPacket = exports.MsgChannelCloseConfirmResponse = exports.MsgChannelCloseConfirm = exports.MsgChannelCloseInitResponse = exports.MsgChannelCloseInit = exports.MsgChannelOpenConfirmResponse = exports.MsgChannelOpenConfirm = exports.MsgChannelOpenAckResponse = exports.MsgChannelOpenAck = exports.MsgChannelOpenTryResponse = exports.MsgChannelOpenTry = exports.MsgChannelOpenInitResponse = exports.MsgChannelOpenInit = void 0;
//@ts-nocheck
const channel_1 = require("./channel");
const client_1 = require("../../client/v1/client");
const binary_1 = require("../../../../binary");
const helpers_1 = require("../../../../helpers");
function createBaseMsgChannelOpenInit() {
    return {
        portId: "",
        channel: channel_1.Channel.fromPartial({}),
        signer: ""
    };
}
exports.MsgChannelOpenInit = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInit",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channel !== undefined) {
            channel_1.Channel.encode(message.channel, writer.uint32(18).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(26).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelOpenInit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.portId = reader.string();
                    break;
                case 2:
                    message.channel = channel_1.Channel.decode(reader, reader.uint32());
                    break;
                case 3:
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
        const message = createBaseMsgChannelOpenInit();
        message.portId = object.portId ?? "";
        message.channel = object.channel !== undefined && object.channel !== null ? channel_1.Channel.fromPartial(object.channel) : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgChannelOpenInit();
        if (object.port_id !== undefined && object.port_id !== null) {
            message.portId = object.port_id;
        }
        if (object.channel !== undefined && object.channel !== null) {
            message.channel = channel_1.Channel.fromAmino(object.channel);
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.portId === "" ? undefined : message.portId;
        obj.channel = message.channel ? channel_1.Channel.toAmino(message.channel) : undefined;
        obj.signer = message.signer === "" ? undefined : message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgChannelOpenInit.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelOpenInit",
            value: exports.MsgChannelOpenInit.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgChannelOpenInit.decode(message.value);
    },
    toProto(message) {
        return exports.MsgChannelOpenInit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInit",
            value: exports.MsgChannelOpenInit.encode(message).finish()
        };
    }
};
function createBaseMsgChannelOpenInitResponse() {
    return {};
}
exports.MsgChannelOpenInitResponse = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInitResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelOpenInitResponse();
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
        const message = createBaseMsgChannelOpenInitResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgChannelOpenInitResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgChannelOpenInitResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelOpenInitResponse",
            value: exports.MsgChannelOpenInitResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgChannelOpenInitResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgChannelOpenInitResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInitResponse",
            value: exports.MsgChannelOpenInitResponse.encode(message).finish()
        };
    }
};
function createBaseMsgChannelOpenTry() {
    return {
        portId: "",
        previousChannelId: "",
        channel: channel_1.Channel.fromPartial({}),
        counterpartyVersion: "",
        proofInit: new Uint8Array(),
        proofHeight: client_1.Height.fromPartial({}),
        signer: ""
    };
}
exports.MsgChannelOpenTry = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTry",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.previousChannelId !== "") {
            writer.uint32(18).string(message.previousChannelId);
        }
        if (message.channel !== undefined) {
            channel_1.Channel.encode(message.channel, writer.uint32(26).fork()).ldelim();
        }
        if (message.counterpartyVersion !== "") {
            writer.uint32(34).string(message.counterpartyVersion);
        }
        if (message.proofInit.length !== 0) {
            writer.uint32(42).bytes(message.proofInit);
        }
        if (message.proofHeight !== undefined) {
            client_1.Height.encode(message.proofHeight, writer.uint32(50).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(58).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelOpenTry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.portId = reader.string();
                    break;
                case 2:
                    message.previousChannelId = reader.string();
                    break;
                case 3:
                    message.channel = channel_1.Channel.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.counterpartyVersion = reader.string();
                    break;
                case 5:
                    message.proofInit = reader.bytes();
                    break;
                case 6:
                    message.proofHeight = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 7:
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
        const message = createBaseMsgChannelOpenTry();
        message.portId = object.portId ?? "";
        message.previousChannelId = object.previousChannelId ?? "";
        message.channel = object.channel !== undefined && object.channel !== null ? channel_1.Channel.fromPartial(object.channel) : undefined;
        message.counterpartyVersion = object.counterpartyVersion ?? "";
        message.proofInit = object.proofInit ?? new Uint8Array();
        message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? client_1.Height.fromPartial(object.proofHeight) : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgChannelOpenTry();
        if (object.port_id !== undefined && object.port_id !== null) {
            message.portId = object.port_id;
        }
        if (object.previous_channel_id !== undefined && object.previous_channel_id !== null) {
            message.previousChannelId = object.previous_channel_id;
        }
        if (object.channel !== undefined && object.channel !== null) {
            message.channel = channel_1.Channel.fromAmino(object.channel);
        }
        if (object.counterparty_version !== undefined && object.counterparty_version !== null) {
            message.counterpartyVersion = object.counterparty_version;
        }
        if (object.proof_init !== undefined && object.proof_init !== null) {
            message.proofInit = (0, helpers_1.bytesFromBase64)(object.proof_init);
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proofHeight = client_1.Height.fromAmino(object.proof_height);
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.portId === "" ? undefined : message.portId;
        obj.previous_channel_id = message.previousChannelId === "" ? undefined : message.previousChannelId;
        obj.channel = message.channel ? channel_1.Channel.toAmino(message.channel) : undefined;
        obj.counterparty_version = message.counterpartyVersion === "" ? undefined : message.counterpartyVersion;
        obj.proof_init = message.proofInit ? (0, helpers_1.base64FromBytes)(message.proofInit) : undefined;
        obj.proof_height = message.proofHeight ? client_1.Height.toAmino(message.proofHeight) : {};
        obj.signer = message.signer === "" ? undefined : message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgChannelOpenTry.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelOpenTry",
            value: exports.MsgChannelOpenTry.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgChannelOpenTry.decode(message.value);
    },
    toProto(message) {
        return exports.MsgChannelOpenTry.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTry",
            value: exports.MsgChannelOpenTry.encode(message).finish()
        };
    }
};
function createBaseMsgChannelOpenTryResponse() {
    return {};
}
exports.MsgChannelOpenTryResponse = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTryResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelOpenTryResponse();
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
        const message = createBaseMsgChannelOpenTryResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgChannelOpenTryResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgChannelOpenTryResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelOpenTryResponse",
            value: exports.MsgChannelOpenTryResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgChannelOpenTryResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgChannelOpenTryResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTryResponse",
            value: exports.MsgChannelOpenTryResponse.encode(message).finish()
        };
    }
};
function createBaseMsgChannelOpenAck() {
    return {
        portId: "",
        channelId: "",
        counterpartyChannelId: "",
        counterpartyVersion: "",
        proofTry: new Uint8Array(),
        proofHeight: client_1.Height.fromPartial({}),
        signer: ""
    };
}
exports.MsgChannelOpenAck = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAck",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.counterpartyChannelId !== "") {
            writer.uint32(26).string(message.counterpartyChannelId);
        }
        if (message.counterpartyVersion !== "") {
            writer.uint32(34).string(message.counterpartyVersion);
        }
        if (message.proofTry.length !== 0) {
            writer.uint32(42).bytes(message.proofTry);
        }
        if (message.proofHeight !== undefined) {
            client_1.Height.encode(message.proofHeight, writer.uint32(50).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(58).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelOpenAck();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.portId = reader.string();
                    break;
                case 2:
                    message.channelId = reader.string();
                    break;
                case 3:
                    message.counterpartyChannelId = reader.string();
                    break;
                case 4:
                    message.counterpartyVersion = reader.string();
                    break;
                case 5:
                    message.proofTry = reader.bytes();
                    break;
                case 6:
                    message.proofHeight = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 7:
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
        const message = createBaseMsgChannelOpenAck();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.counterpartyChannelId = object.counterpartyChannelId ?? "";
        message.counterpartyVersion = object.counterpartyVersion ?? "";
        message.proofTry = object.proofTry ?? new Uint8Array();
        message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? client_1.Height.fromPartial(object.proofHeight) : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgChannelOpenAck();
        if (object.port_id !== undefined && object.port_id !== null) {
            message.portId = object.port_id;
        }
        if (object.channel_id !== undefined && object.channel_id !== null) {
            message.channelId = object.channel_id;
        }
        if (object.counterparty_channel_id !== undefined && object.counterparty_channel_id !== null) {
            message.counterpartyChannelId = object.counterparty_channel_id;
        }
        if (object.counterparty_version !== undefined && object.counterparty_version !== null) {
            message.counterpartyVersion = object.counterparty_version;
        }
        if (object.proof_try !== undefined && object.proof_try !== null) {
            message.proofTry = (0, helpers_1.bytesFromBase64)(object.proof_try);
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proofHeight = client_1.Height.fromAmino(object.proof_height);
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.portId === "" ? undefined : message.portId;
        obj.channel_id = message.channelId === "" ? undefined : message.channelId;
        obj.counterparty_channel_id = message.counterpartyChannelId === "" ? undefined : message.counterpartyChannelId;
        obj.counterparty_version = message.counterpartyVersion === "" ? undefined : message.counterpartyVersion;
        obj.proof_try = message.proofTry ? (0, helpers_1.base64FromBytes)(message.proofTry) : undefined;
        obj.proof_height = message.proofHeight ? client_1.Height.toAmino(message.proofHeight) : {};
        obj.signer = message.signer === "" ? undefined : message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgChannelOpenAck.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelOpenAck",
            value: exports.MsgChannelOpenAck.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgChannelOpenAck.decode(message.value);
    },
    toProto(message) {
        return exports.MsgChannelOpenAck.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAck",
            value: exports.MsgChannelOpenAck.encode(message).finish()
        };
    }
};
function createBaseMsgChannelOpenAckResponse() {
    return {};
}
exports.MsgChannelOpenAckResponse = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAckResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelOpenAckResponse();
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
        const message = createBaseMsgChannelOpenAckResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgChannelOpenAckResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgChannelOpenAckResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelOpenAckResponse",
            value: exports.MsgChannelOpenAckResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgChannelOpenAckResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgChannelOpenAckResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAckResponse",
            value: exports.MsgChannelOpenAckResponse.encode(message).finish()
        };
    }
};
function createBaseMsgChannelOpenConfirm() {
    return {
        portId: "",
        channelId: "",
        proofAck: new Uint8Array(),
        proofHeight: client_1.Height.fromPartial({}),
        signer: ""
    };
}
exports.MsgChannelOpenConfirm = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirm",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.proofAck.length !== 0) {
            writer.uint32(26).bytes(message.proofAck);
        }
        if (message.proofHeight !== undefined) {
            client_1.Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(42).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelOpenConfirm();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.portId = reader.string();
                    break;
                case 2:
                    message.channelId = reader.string();
                    break;
                case 3:
                    message.proofAck = reader.bytes();
                    break;
                case 4:
                    message.proofHeight = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 5:
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
        const message = createBaseMsgChannelOpenConfirm();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.proofAck = object.proofAck ?? new Uint8Array();
        message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? client_1.Height.fromPartial(object.proofHeight) : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgChannelOpenConfirm();
        if (object.port_id !== undefined && object.port_id !== null) {
            message.portId = object.port_id;
        }
        if (object.channel_id !== undefined && object.channel_id !== null) {
            message.channelId = object.channel_id;
        }
        if (object.proof_ack !== undefined && object.proof_ack !== null) {
            message.proofAck = (0, helpers_1.bytesFromBase64)(object.proof_ack);
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proofHeight = client_1.Height.fromAmino(object.proof_height);
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.portId === "" ? undefined : message.portId;
        obj.channel_id = message.channelId === "" ? undefined : message.channelId;
        obj.proof_ack = message.proofAck ? (0, helpers_1.base64FromBytes)(message.proofAck) : undefined;
        obj.proof_height = message.proofHeight ? client_1.Height.toAmino(message.proofHeight) : {};
        obj.signer = message.signer === "" ? undefined : message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgChannelOpenConfirm.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelOpenConfirm",
            value: exports.MsgChannelOpenConfirm.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgChannelOpenConfirm.decode(message.value);
    },
    toProto(message) {
        return exports.MsgChannelOpenConfirm.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirm",
            value: exports.MsgChannelOpenConfirm.encode(message).finish()
        };
    }
};
function createBaseMsgChannelOpenConfirmResponse() {
    return {};
}
exports.MsgChannelOpenConfirmResponse = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirmResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelOpenConfirmResponse();
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
        const message = createBaseMsgChannelOpenConfirmResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgChannelOpenConfirmResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgChannelOpenConfirmResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelOpenConfirmResponse",
            value: exports.MsgChannelOpenConfirmResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgChannelOpenConfirmResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgChannelOpenConfirmResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirmResponse",
            value: exports.MsgChannelOpenConfirmResponse.encode(message).finish()
        };
    }
};
function createBaseMsgChannelCloseInit() {
    return {
        portId: "",
        channelId: "",
        signer: ""
    };
}
exports.MsgChannelCloseInit = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInit",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.signer !== "") {
            writer.uint32(26).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelCloseInit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.portId = reader.string();
                    break;
                case 2:
                    message.channelId = reader.string();
                    break;
                case 3:
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
        const message = createBaseMsgChannelCloseInit();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgChannelCloseInit();
        if (object.port_id !== undefined && object.port_id !== null) {
            message.portId = object.port_id;
        }
        if (object.channel_id !== undefined && object.channel_id !== null) {
            message.channelId = object.channel_id;
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.portId === "" ? undefined : message.portId;
        obj.channel_id = message.channelId === "" ? undefined : message.channelId;
        obj.signer = message.signer === "" ? undefined : message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgChannelCloseInit.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelCloseInit",
            value: exports.MsgChannelCloseInit.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgChannelCloseInit.decode(message.value);
    },
    toProto(message) {
        return exports.MsgChannelCloseInit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInit",
            value: exports.MsgChannelCloseInit.encode(message).finish()
        };
    }
};
function createBaseMsgChannelCloseInitResponse() {
    return {};
}
exports.MsgChannelCloseInitResponse = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInitResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelCloseInitResponse();
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
        const message = createBaseMsgChannelCloseInitResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgChannelCloseInitResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgChannelCloseInitResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelCloseInitResponse",
            value: exports.MsgChannelCloseInitResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgChannelCloseInitResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgChannelCloseInitResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInitResponse",
            value: exports.MsgChannelCloseInitResponse.encode(message).finish()
        };
    }
};
function createBaseMsgChannelCloseConfirm() {
    return {
        portId: "",
        channelId: "",
        proofInit: new Uint8Array(),
        proofHeight: client_1.Height.fromPartial({}),
        signer: ""
    };
}
exports.MsgChannelCloseConfirm = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirm",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.proofInit.length !== 0) {
            writer.uint32(26).bytes(message.proofInit);
        }
        if (message.proofHeight !== undefined) {
            client_1.Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(42).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelCloseConfirm();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.portId = reader.string();
                    break;
                case 2:
                    message.channelId = reader.string();
                    break;
                case 3:
                    message.proofInit = reader.bytes();
                    break;
                case 4:
                    message.proofHeight = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 5:
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
        const message = createBaseMsgChannelCloseConfirm();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.proofInit = object.proofInit ?? new Uint8Array();
        message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? client_1.Height.fromPartial(object.proofHeight) : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgChannelCloseConfirm();
        if (object.port_id !== undefined && object.port_id !== null) {
            message.portId = object.port_id;
        }
        if (object.channel_id !== undefined && object.channel_id !== null) {
            message.channelId = object.channel_id;
        }
        if (object.proof_init !== undefined && object.proof_init !== null) {
            message.proofInit = (0, helpers_1.bytesFromBase64)(object.proof_init);
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proofHeight = client_1.Height.fromAmino(object.proof_height);
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.portId === "" ? undefined : message.portId;
        obj.channel_id = message.channelId === "" ? undefined : message.channelId;
        obj.proof_init = message.proofInit ? (0, helpers_1.base64FromBytes)(message.proofInit) : undefined;
        obj.proof_height = message.proofHeight ? client_1.Height.toAmino(message.proofHeight) : {};
        obj.signer = message.signer === "" ? undefined : message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgChannelCloseConfirm.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelCloseConfirm",
            value: exports.MsgChannelCloseConfirm.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgChannelCloseConfirm.decode(message.value);
    },
    toProto(message) {
        return exports.MsgChannelCloseConfirm.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirm",
            value: exports.MsgChannelCloseConfirm.encode(message).finish()
        };
    }
};
function createBaseMsgChannelCloseConfirmResponse() {
    return {};
}
exports.MsgChannelCloseConfirmResponse = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirmResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelCloseConfirmResponse();
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
        const message = createBaseMsgChannelCloseConfirmResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgChannelCloseConfirmResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgChannelCloseConfirmResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelCloseConfirmResponse",
            value: exports.MsgChannelCloseConfirmResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgChannelCloseConfirmResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgChannelCloseConfirmResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirmResponse",
            value: exports.MsgChannelCloseConfirmResponse.encode(message).finish()
        };
    }
};
function createBaseMsgRecvPacket() {
    return {
        packet: channel_1.Packet.fromPartial({}),
        proofCommitment: new Uint8Array(),
        proofHeight: client_1.Height.fromPartial({}),
        signer: ""
    };
}
exports.MsgRecvPacket = {
    typeUrl: "/ibc.core.channel.v1.MsgRecvPacket",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.packet !== undefined) {
            channel_1.Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
        }
        if (message.proofCommitment.length !== 0) {
            writer.uint32(18).bytes(message.proofCommitment);
        }
        if (message.proofHeight !== undefined) {
            client_1.Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(34).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRecvPacket();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.packet = channel_1.Packet.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.proofCommitment = reader.bytes();
                    break;
                case 3:
                    message.proofHeight = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 4:
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
        const message = createBaseMsgRecvPacket();
        message.packet = object.packet !== undefined && object.packet !== null ? channel_1.Packet.fromPartial(object.packet) : undefined;
        message.proofCommitment = object.proofCommitment ?? new Uint8Array();
        message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? client_1.Height.fromPartial(object.proofHeight) : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgRecvPacket();
        if (object.packet !== undefined && object.packet !== null) {
            message.packet = channel_1.Packet.fromAmino(object.packet);
        }
        if (object.proof_commitment !== undefined && object.proof_commitment !== null) {
            message.proofCommitment = (0, helpers_1.bytesFromBase64)(object.proof_commitment);
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proofHeight = client_1.Height.fromAmino(object.proof_height);
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.packet = message.packet ? channel_1.Packet.toAmino(message.packet) : undefined;
        obj.proof_commitment = message.proofCommitment ? (0, helpers_1.base64FromBytes)(message.proofCommitment) : undefined;
        obj.proof_height = message.proofHeight ? client_1.Height.toAmino(message.proofHeight) : {};
        obj.signer = message.signer === "" ? undefined : message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgRecvPacket.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgRecvPacket",
            value: exports.MsgRecvPacket.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgRecvPacket.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRecvPacket.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgRecvPacket",
            value: exports.MsgRecvPacket.encode(message).finish()
        };
    }
};
function createBaseMsgRecvPacketResponse() {
    return {};
}
exports.MsgRecvPacketResponse = {
    typeUrl: "/ibc.core.channel.v1.MsgRecvPacketResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRecvPacketResponse();
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
        const message = createBaseMsgRecvPacketResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgRecvPacketResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgRecvPacketResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgRecvPacketResponse",
            value: exports.MsgRecvPacketResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgRecvPacketResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRecvPacketResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgRecvPacketResponse",
            value: exports.MsgRecvPacketResponse.encode(message).finish()
        };
    }
};
function createBaseMsgTimeout() {
    return {
        packet: channel_1.Packet.fromPartial({}),
        proofUnreceived: new Uint8Array(),
        proofHeight: client_1.Height.fromPartial({}),
        nextSequenceRecv: BigInt(0),
        signer: ""
    };
}
exports.MsgTimeout = {
    typeUrl: "/ibc.core.channel.v1.MsgTimeout",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.packet !== undefined) {
            channel_1.Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
        }
        if (message.proofUnreceived.length !== 0) {
            writer.uint32(18).bytes(message.proofUnreceived);
        }
        if (message.proofHeight !== undefined) {
            client_1.Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
        }
        if (message.nextSequenceRecv !== BigInt(0)) {
            writer.uint32(32).uint64(message.nextSequenceRecv);
        }
        if (message.signer !== "") {
            writer.uint32(42).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTimeout();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.packet = channel_1.Packet.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.proofUnreceived = reader.bytes();
                    break;
                case 3:
                    message.proofHeight = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.nextSequenceRecv = reader.uint64();
                    break;
                case 5:
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
        const message = createBaseMsgTimeout();
        message.packet = object.packet !== undefined && object.packet !== null ? channel_1.Packet.fromPartial(object.packet) : undefined;
        message.proofUnreceived = object.proofUnreceived ?? new Uint8Array();
        message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? client_1.Height.fromPartial(object.proofHeight) : undefined;
        message.nextSequenceRecv = object.nextSequenceRecv !== undefined && object.nextSequenceRecv !== null ? BigInt(object.nextSequenceRecv.toString()) : BigInt(0);
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgTimeout();
        if (object.packet !== undefined && object.packet !== null) {
            message.packet = channel_1.Packet.fromAmino(object.packet);
        }
        if (object.proof_unreceived !== undefined && object.proof_unreceived !== null) {
            message.proofUnreceived = (0, helpers_1.bytesFromBase64)(object.proof_unreceived);
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proofHeight = client_1.Height.fromAmino(object.proof_height);
        }
        if (object.next_sequence_recv !== undefined && object.next_sequence_recv !== null) {
            message.nextSequenceRecv = BigInt(object.next_sequence_recv);
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.packet = message.packet ? channel_1.Packet.toAmino(message.packet) : undefined;
        obj.proof_unreceived = message.proofUnreceived ? (0, helpers_1.base64FromBytes)(message.proofUnreceived) : undefined;
        obj.proof_height = message.proofHeight ? client_1.Height.toAmino(message.proofHeight) : {};
        obj.next_sequence_recv = message.nextSequenceRecv !== BigInt(0) ? (message.nextSequenceRecv?.toString)() : undefined;
        obj.signer = message.signer === "" ? undefined : message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgTimeout.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgTimeout",
            value: exports.MsgTimeout.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgTimeout.decode(message.value);
    },
    toProto(message) {
        return exports.MsgTimeout.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgTimeout",
            value: exports.MsgTimeout.encode(message).finish()
        };
    }
};
function createBaseMsgTimeoutResponse() {
    return {};
}
exports.MsgTimeoutResponse = {
    typeUrl: "/ibc.core.channel.v1.MsgTimeoutResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTimeoutResponse();
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
        const message = createBaseMsgTimeoutResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgTimeoutResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgTimeoutResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgTimeoutResponse",
            value: exports.MsgTimeoutResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgTimeoutResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgTimeoutResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgTimeoutResponse",
            value: exports.MsgTimeoutResponse.encode(message).finish()
        };
    }
};
function createBaseMsgTimeoutOnClose() {
    return {
        packet: channel_1.Packet.fromPartial({}),
        proofUnreceived: new Uint8Array(),
        proofClose: new Uint8Array(),
        proofHeight: client_1.Height.fromPartial({}),
        nextSequenceRecv: BigInt(0),
        signer: ""
    };
}
exports.MsgTimeoutOnClose = {
    typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnClose",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.packet !== undefined) {
            channel_1.Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
        }
        if (message.proofUnreceived.length !== 0) {
            writer.uint32(18).bytes(message.proofUnreceived);
        }
        if (message.proofClose.length !== 0) {
            writer.uint32(26).bytes(message.proofClose);
        }
        if (message.proofHeight !== undefined) {
            client_1.Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
        }
        if (message.nextSequenceRecv !== BigInt(0)) {
            writer.uint32(40).uint64(message.nextSequenceRecv);
        }
        if (message.signer !== "") {
            writer.uint32(50).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTimeoutOnClose();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.packet = channel_1.Packet.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.proofUnreceived = reader.bytes();
                    break;
                case 3:
                    message.proofClose = reader.bytes();
                    break;
                case 4:
                    message.proofHeight = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.nextSequenceRecv = reader.uint64();
                    break;
                case 6:
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
        const message = createBaseMsgTimeoutOnClose();
        message.packet = object.packet !== undefined && object.packet !== null ? channel_1.Packet.fromPartial(object.packet) : undefined;
        message.proofUnreceived = object.proofUnreceived ?? new Uint8Array();
        message.proofClose = object.proofClose ?? new Uint8Array();
        message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? client_1.Height.fromPartial(object.proofHeight) : undefined;
        message.nextSequenceRecv = object.nextSequenceRecv !== undefined && object.nextSequenceRecv !== null ? BigInt(object.nextSequenceRecv.toString()) : BigInt(0);
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgTimeoutOnClose();
        if (object.packet !== undefined && object.packet !== null) {
            message.packet = channel_1.Packet.fromAmino(object.packet);
        }
        if (object.proof_unreceived !== undefined && object.proof_unreceived !== null) {
            message.proofUnreceived = (0, helpers_1.bytesFromBase64)(object.proof_unreceived);
        }
        if (object.proof_close !== undefined && object.proof_close !== null) {
            message.proofClose = (0, helpers_1.bytesFromBase64)(object.proof_close);
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proofHeight = client_1.Height.fromAmino(object.proof_height);
        }
        if (object.next_sequence_recv !== undefined && object.next_sequence_recv !== null) {
            message.nextSequenceRecv = BigInt(object.next_sequence_recv);
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.packet = message.packet ? channel_1.Packet.toAmino(message.packet) : undefined;
        obj.proof_unreceived = message.proofUnreceived ? (0, helpers_1.base64FromBytes)(message.proofUnreceived) : undefined;
        obj.proof_close = message.proofClose ? (0, helpers_1.base64FromBytes)(message.proofClose) : undefined;
        obj.proof_height = message.proofHeight ? client_1.Height.toAmino(message.proofHeight) : {};
        obj.next_sequence_recv = message.nextSequenceRecv !== BigInt(0) ? (message.nextSequenceRecv?.toString)() : undefined;
        obj.signer = message.signer === "" ? undefined : message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgTimeoutOnClose.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgTimeoutOnClose",
            value: exports.MsgTimeoutOnClose.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgTimeoutOnClose.decode(message.value);
    },
    toProto(message) {
        return exports.MsgTimeoutOnClose.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnClose",
            value: exports.MsgTimeoutOnClose.encode(message).finish()
        };
    }
};
function createBaseMsgTimeoutOnCloseResponse() {
    return {};
}
exports.MsgTimeoutOnCloseResponse = {
    typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnCloseResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTimeoutOnCloseResponse();
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
        const message = createBaseMsgTimeoutOnCloseResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgTimeoutOnCloseResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgTimeoutOnCloseResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgTimeoutOnCloseResponse",
            value: exports.MsgTimeoutOnCloseResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgTimeoutOnCloseResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgTimeoutOnCloseResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnCloseResponse",
            value: exports.MsgTimeoutOnCloseResponse.encode(message).finish()
        };
    }
};
function createBaseMsgAcknowledgement() {
    return {
        packet: channel_1.Packet.fromPartial({}),
        acknowledgement: new Uint8Array(),
        proofAcked: new Uint8Array(),
        proofHeight: client_1.Height.fromPartial({}),
        signer: ""
    };
}
exports.MsgAcknowledgement = {
    typeUrl: "/ibc.core.channel.v1.MsgAcknowledgement",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.packet !== undefined) {
            channel_1.Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
        }
        if (message.acknowledgement.length !== 0) {
            writer.uint32(18).bytes(message.acknowledgement);
        }
        if (message.proofAcked.length !== 0) {
            writer.uint32(26).bytes(message.proofAcked);
        }
        if (message.proofHeight !== undefined) {
            client_1.Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(42).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAcknowledgement();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.packet = channel_1.Packet.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.acknowledgement = reader.bytes();
                    break;
                case 3:
                    message.proofAcked = reader.bytes();
                    break;
                case 4:
                    message.proofHeight = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 5:
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
        const message = createBaseMsgAcknowledgement();
        message.packet = object.packet !== undefined && object.packet !== null ? channel_1.Packet.fromPartial(object.packet) : undefined;
        message.acknowledgement = object.acknowledgement ?? new Uint8Array();
        message.proofAcked = object.proofAcked ?? new Uint8Array();
        message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? client_1.Height.fromPartial(object.proofHeight) : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgAcknowledgement();
        if (object.packet !== undefined && object.packet !== null) {
            message.packet = channel_1.Packet.fromAmino(object.packet);
        }
        if (object.acknowledgement !== undefined && object.acknowledgement !== null) {
            message.acknowledgement = (0, helpers_1.bytesFromBase64)(object.acknowledgement);
        }
        if (object.proof_acked !== undefined && object.proof_acked !== null) {
            message.proofAcked = (0, helpers_1.bytesFromBase64)(object.proof_acked);
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proofHeight = client_1.Height.fromAmino(object.proof_height);
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.packet = message.packet ? channel_1.Packet.toAmino(message.packet) : undefined;
        obj.acknowledgement = message.acknowledgement ? (0, helpers_1.base64FromBytes)(message.acknowledgement) : undefined;
        obj.proof_acked = message.proofAcked ? (0, helpers_1.base64FromBytes)(message.proofAcked) : undefined;
        obj.proof_height = message.proofHeight ? client_1.Height.toAmino(message.proofHeight) : {};
        obj.signer = message.signer === "" ? undefined : message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgAcknowledgement.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgAcknowledgement",
            value: exports.MsgAcknowledgement.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgAcknowledgement.decode(message.value);
    },
    toProto(message) {
        return exports.MsgAcknowledgement.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgAcknowledgement",
            value: exports.MsgAcknowledgement.encode(message).finish()
        };
    }
};
function createBaseMsgAcknowledgementResponse() {
    return {};
}
exports.MsgAcknowledgementResponse = {
    typeUrl: "/ibc.core.channel.v1.MsgAcknowledgementResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAcknowledgementResponse();
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
        const message = createBaseMsgAcknowledgementResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgAcknowledgementResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgAcknowledgementResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgAcknowledgementResponse",
            value: exports.MsgAcknowledgementResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgAcknowledgementResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgAcknowledgementResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgAcknowledgementResponse",
            value: exports.MsgAcknowledgementResponse.encode(message).finish()
        };
    }
};
