"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisContentEntry = exports.GenesisState = void 0;
//@ts-nocheck
const types_1 = require("./types");
const timestamp_1 = require("../../../google/protobuf/timestamp");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
function createBaseGenesisState() {
    return {
        entries: []
    };
}
exports.GenesisState = {
    typeUrl: "/regen.data.v1alpha2.GenesisState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.entries) {
            exports.GenesisContentEntry.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.entries.push(exports.GenesisContentEntry.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.entries = object.entries?.map(e => exports.GenesisContentEntry.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        message.entries = object.entries?.map(e => exports.GenesisContentEntry.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.entries) {
            obj.entries = message.entries.map(e => e ? exports.GenesisContentEntry.toAmino(e) : undefined);
        }
        else {
            obj.entries = message.entries;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.GenesisState.decode(message.value);
    },
    toProto(message) {
        return exports.GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1alpha2.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
function createBaseGenesisContentEntry() {
    return {
        hash: undefined,
        timestamp: undefined,
        signers: [],
        content: undefined
    };
}
exports.GenesisContentEntry = {
    typeUrl: "/regen.data.v1alpha2.GenesisContentEntry",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.hash !== undefined) {
            types_1.ContentHash.encode(message.hash, writer.uint32(10).fork()).ldelim();
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.timestamp), writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.signers) {
            types_1.SignerEntry.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.content !== undefined) {
            types_1.Content.encode(message.content, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisContentEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = types_1.ContentHash.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.timestamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.signers.push(types_1.SignerEntry.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.content = types_1.Content.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGenesisContentEntry();
        message.hash = object.hash !== undefined && object.hash !== null ? types_1.ContentHash.fromPartial(object.hash) : undefined;
        message.timestamp = object.timestamp ?? undefined;
        message.signers = object.signers?.map(e => types_1.SignerEntry.fromPartial(e)) || [];
        message.content = object.content !== undefined && object.content !== null ? types_1.Content.fromPartial(object.content) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisContentEntry();
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = types_1.ContentHash.fromAmino(object.hash);
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.timestamp));
        }
        message.signers = object.signers?.map(e => types_1.SignerEntry.fromAmino(e)) || [];
        if (object.content !== undefined && object.content !== null) {
            message.content = types_1.Content.fromAmino(object.content);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.hash = message.hash ? types_1.ContentHash.toAmino(message.hash) : undefined;
        obj.timestamp = message.timestamp ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.timestamp)) : undefined;
        if (message.signers) {
            obj.signers = message.signers.map(e => e ? types_1.SignerEntry.toAmino(e) : undefined);
        }
        else {
            obj.signers = message.signers;
        }
        obj.content = message.content ? types_1.Content.toAmino(message.content) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisContentEntry.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.GenesisContentEntry.decode(message.value);
    },
    toProto(message) {
        return exports.GenesisContentEntry.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1alpha2.GenesisContentEntry",
            value: exports.GenesisContentEntry.encode(message).finish()
        };
    }
};
