"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PeerAddressInfo = exports.PeerInfo = exports.NodeInfoOther = exports.NodeInfo = exports.ProtocolVersion = void 0;
//@ts-nocheck
const timestamp_1 = require("../../google/protobuf/timestamp");
const binary_1 = require("../../binary");
const helpers_1 = require("../../helpers");
function createBaseProtocolVersion() {
    return {
        p2p: BigInt(0),
        block: BigInt(0),
        app: BigInt(0)
    };
}
exports.ProtocolVersion = {
    typeUrl: "/tendermint.p2p.ProtocolVersion",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.p2p !== BigInt(0)) {
            writer.uint32(8).uint64(message.p2p);
        }
        if (message.block !== BigInt(0)) {
            writer.uint32(16).uint64(message.block);
        }
        if (message.app !== BigInt(0)) {
            writer.uint32(24).uint64(message.app);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProtocolVersion();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.p2p = reader.uint64();
                    break;
                case 2:
                    message.block = reader.uint64();
                    break;
                case 3:
                    message.app = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseProtocolVersion();
        message.p2p = object.p2p !== undefined && object.p2p !== null ? BigInt(object.p2p.toString()) : BigInt(0);
        message.block = object.block !== undefined && object.block !== null ? BigInt(object.block.toString()) : BigInt(0);
        message.app = object.app !== undefined && object.app !== null ? BigInt(object.app.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseProtocolVersion();
        if (object.p2p !== undefined && object.p2p !== null) {
            message.p2p = BigInt(object.p2p);
        }
        if (object.block !== undefined && object.block !== null) {
            message.block = BigInt(object.block);
        }
        if (object.app !== undefined && object.app !== null) {
            message.app = BigInt(object.app);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.p2p = message.p2p !== BigInt(0) ? (message.p2p?.toString)() : undefined;
        obj.block = message.block !== BigInt(0) ? (message.block?.toString)() : undefined;
        obj.app = message.app !== BigInt(0) ? (message.app?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ProtocolVersion.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ProtocolVersion.decode(message.value);
    },
    toProto(message) {
        return exports.ProtocolVersion.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.p2p.ProtocolVersion",
            value: exports.ProtocolVersion.encode(message).finish()
        };
    }
};
function createBaseNodeInfo() {
    return {
        protocolVersion: exports.ProtocolVersion.fromPartial({}),
        nodeId: "",
        listenAddr: "",
        network: "",
        version: "",
        channels: new Uint8Array(),
        moniker: "",
        other: exports.NodeInfoOther.fromPartial({})
    };
}
exports.NodeInfo = {
    typeUrl: "/tendermint.p2p.NodeInfo",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.protocolVersion !== undefined) {
            exports.ProtocolVersion.encode(message.protocolVersion, writer.uint32(10).fork()).ldelim();
        }
        if (message.nodeId !== "") {
            writer.uint32(18).string(message.nodeId);
        }
        if (message.listenAddr !== "") {
            writer.uint32(26).string(message.listenAddr);
        }
        if (message.network !== "") {
            writer.uint32(34).string(message.network);
        }
        if (message.version !== "") {
            writer.uint32(42).string(message.version);
        }
        if (message.channels.length !== 0) {
            writer.uint32(50).bytes(message.channels);
        }
        if (message.moniker !== "") {
            writer.uint32(58).string(message.moniker);
        }
        if (message.other !== undefined) {
            exports.NodeInfoOther.encode(message.other, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNodeInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.protocolVersion = exports.ProtocolVersion.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.nodeId = reader.string();
                    break;
                case 3:
                    message.listenAddr = reader.string();
                    break;
                case 4:
                    message.network = reader.string();
                    break;
                case 5:
                    message.version = reader.string();
                    break;
                case 6:
                    message.channels = reader.bytes();
                    break;
                case 7:
                    message.moniker = reader.string();
                    break;
                case 8:
                    message.other = exports.NodeInfoOther.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseNodeInfo();
        message.protocolVersion = object.protocolVersion !== undefined && object.protocolVersion !== null ? exports.ProtocolVersion.fromPartial(object.protocolVersion) : undefined;
        message.nodeId = object.nodeId ?? "";
        message.listenAddr = object.listenAddr ?? "";
        message.network = object.network ?? "";
        message.version = object.version ?? "";
        message.channels = object.channels ?? new Uint8Array();
        message.moniker = object.moniker ?? "";
        message.other = object.other !== undefined && object.other !== null ? exports.NodeInfoOther.fromPartial(object.other) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseNodeInfo();
        if (object.protocol_version !== undefined && object.protocol_version !== null) {
            message.protocolVersion = exports.ProtocolVersion.fromAmino(object.protocol_version);
        }
        if (object.node_id !== undefined && object.node_id !== null) {
            message.nodeId = object.node_id;
        }
        if (object.listen_addr !== undefined && object.listen_addr !== null) {
            message.listenAddr = object.listen_addr;
        }
        if (object.network !== undefined && object.network !== null) {
            message.network = object.network;
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        if (object.channels !== undefined && object.channels !== null) {
            message.channels = (0, helpers_1.bytesFromBase64)(object.channels);
        }
        if (object.moniker !== undefined && object.moniker !== null) {
            message.moniker = object.moniker;
        }
        if (object.other !== undefined && object.other !== null) {
            message.other = exports.NodeInfoOther.fromAmino(object.other);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.protocol_version = message.protocolVersion ? exports.ProtocolVersion.toAmino(message.protocolVersion) : undefined;
        obj.node_id = message.nodeId === "" ? undefined : message.nodeId;
        obj.listen_addr = message.listenAddr === "" ? undefined : message.listenAddr;
        obj.network = message.network === "" ? undefined : message.network;
        obj.version = message.version === "" ? undefined : message.version;
        obj.channels = message.channels ? (0, helpers_1.base64FromBytes)(message.channels) : undefined;
        obj.moniker = message.moniker === "" ? undefined : message.moniker;
        obj.other = message.other ? exports.NodeInfoOther.toAmino(message.other) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.NodeInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.NodeInfo.decode(message.value);
    },
    toProto(message) {
        return exports.NodeInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.p2p.NodeInfo",
            value: exports.NodeInfo.encode(message).finish()
        };
    }
};
function createBaseNodeInfoOther() {
    return {
        txIndex: "",
        rpcAddress: ""
    };
}
exports.NodeInfoOther = {
    typeUrl: "/tendermint.p2p.NodeInfoOther",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.txIndex !== "") {
            writer.uint32(10).string(message.txIndex);
        }
        if (message.rpcAddress !== "") {
            writer.uint32(18).string(message.rpcAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNodeInfoOther();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.txIndex = reader.string();
                    break;
                case 2:
                    message.rpcAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseNodeInfoOther();
        message.txIndex = object.txIndex ?? "";
        message.rpcAddress = object.rpcAddress ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseNodeInfoOther();
        if (object.tx_index !== undefined && object.tx_index !== null) {
            message.txIndex = object.tx_index;
        }
        if (object.rpc_address !== undefined && object.rpc_address !== null) {
            message.rpcAddress = object.rpc_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.tx_index = message.txIndex === "" ? undefined : message.txIndex;
        obj.rpc_address = message.rpcAddress === "" ? undefined : message.rpcAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.NodeInfoOther.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.NodeInfoOther.decode(message.value);
    },
    toProto(message) {
        return exports.NodeInfoOther.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.p2p.NodeInfoOther",
            value: exports.NodeInfoOther.encode(message).finish()
        };
    }
};
function createBasePeerInfo() {
    return {
        id: "",
        addressInfo: [],
        lastConnected: undefined
    };
}
exports.PeerInfo = {
    typeUrl: "/tendermint.p2p.PeerInfo",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        for (const v of message.addressInfo) {
            exports.PeerAddressInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.lastConnected !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.lastConnected), writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePeerInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.addressInfo.push(exports.PeerAddressInfo.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.lastConnected = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePeerInfo();
        message.id = object.id ?? "";
        message.addressInfo = object.addressInfo?.map(e => exports.PeerAddressInfo.fromPartial(e)) || [];
        message.lastConnected = object.lastConnected ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBasePeerInfo();
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        message.addressInfo = object.address_info?.map(e => exports.PeerAddressInfo.fromAmino(e)) || [];
        if (object.last_connected !== undefined && object.last_connected !== null) {
            message.lastConnected = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.last_connected));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id === "" ? undefined : message.id;
        if (message.addressInfo) {
            obj.address_info = message.addressInfo.map(e => e ? exports.PeerAddressInfo.toAmino(e) : undefined);
        }
        else {
            obj.address_info = message.addressInfo;
        }
        obj.last_connected = message.lastConnected ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.lastConnected)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PeerInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.PeerInfo.decode(message.value);
    },
    toProto(message) {
        return exports.PeerInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.p2p.PeerInfo",
            value: exports.PeerInfo.encode(message).finish()
        };
    }
};
function createBasePeerAddressInfo() {
    return {
        address: "",
        lastDialSuccess: undefined,
        lastDialFailure: undefined,
        dialFailures: 0
    };
}
exports.PeerAddressInfo = {
    typeUrl: "/tendermint.p2p.PeerAddressInfo",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.lastDialSuccess !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.lastDialSuccess), writer.uint32(18).fork()).ldelim();
        }
        if (message.lastDialFailure !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.lastDialFailure), writer.uint32(26).fork()).ldelim();
        }
        if (message.dialFailures !== 0) {
            writer.uint32(32).uint32(message.dialFailures);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePeerAddressInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.lastDialSuccess = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.lastDialFailure = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.dialFailures = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePeerAddressInfo();
        message.address = object.address ?? "";
        message.lastDialSuccess = object.lastDialSuccess ?? undefined;
        message.lastDialFailure = object.lastDialFailure ?? undefined;
        message.dialFailures = object.dialFailures ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBasePeerAddressInfo();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.last_dial_success !== undefined && object.last_dial_success !== null) {
            message.lastDialSuccess = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.last_dial_success));
        }
        if (object.last_dial_failure !== undefined && object.last_dial_failure !== null) {
            message.lastDialFailure = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.last_dial_failure));
        }
        if (object.dial_failures !== undefined && object.dial_failures !== null) {
            message.dialFailures = object.dial_failures;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        obj.last_dial_success = message.lastDialSuccess ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.lastDialSuccess)) : undefined;
        obj.last_dial_failure = message.lastDialFailure ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.lastDialFailure)) : undefined;
        obj.dial_failures = message.dialFailures === 0 ? undefined : message.dialFailures;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PeerAddressInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.PeerAddressInfo.decode(message.value);
    },
    toProto(message) {
        return exports.PeerAddressInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.p2p.PeerAddressInfo",
            value: exports.PeerAddressInfo.encode(message).finish()
        };
    }
};
