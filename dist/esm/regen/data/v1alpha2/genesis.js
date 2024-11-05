//@ts-nocheck
import { ContentHash, SignerEntry, Content } from "./types";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp } from "../../../helpers";
function createBaseGenesisState() {
    return {
        entries: []
    };
}
export const GenesisState = {
    typeUrl: "/regen.data.v1alpha2.GenesisState",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.entries) {
            GenesisContentEntry.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.entries.push(GenesisContentEntry.decode(reader, reader.uint32()));
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
        message.entries = object.entries?.map(e => GenesisContentEntry.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        message.entries = object.entries?.map(e => GenesisContentEntry.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.entries) {
            obj.entries = message.entries.map(e => e ? GenesisContentEntry.toAmino(e) : undefined);
        }
        else {
            obj.entries = message.entries;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return GenesisState.decode(message.value);
    },
    toProto(message) {
        return GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1alpha2.GenesisState",
            value: GenesisState.encode(message).finish()
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
export const GenesisContentEntry = {
    typeUrl: "/regen.data.v1alpha2.GenesisContentEntry",
    encode(message, writer = BinaryWriter.create()) {
        if (message.hash !== undefined) {
            ContentHash.encode(message.hash, writer.uint32(10).fork()).ldelim();
        }
        if (message.timestamp !== undefined) {
            Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.signers) {
            SignerEntry.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.content !== undefined) {
            Content.encode(message.content, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisContentEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = ContentHash.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.signers.push(SignerEntry.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.content = Content.decode(reader, reader.uint32());
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
        message.hash = object.hash !== undefined && object.hash !== null ? ContentHash.fromPartial(object.hash) : undefined;
        message.timestamp = object.timestamp ?? undefined;
        message.signers = object.signers?.map(e => SignerEntry.fromPartial(e)) || [];
        message.content = object.content !== undefined && object.content !== null ? Content.fromPartial(object.content) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisContentEntry();
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = ContentHash.fromAmino(object.hash);
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = fromTimestamp(Timestamp.fromAmino(object.timestamp));
        }
        message.signers = object.signers?.map(e => SignerEntry.fromAmino(e)) || [];
        if (object.content !== undefined && object.content !== null) {
            message.content = Content.fromAmino(object.content);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.hash = message.hash ? ContentHash.toAmino(message.hash) : undefined;
        obj.timestamp = message.timestamp ? Timestamp.toAmino(toTimestamp(message.timestamp)) : undefined;
        if (message.signers) {
            obj.signers = message.signers.map(e => e ? SignerEntry.toAmino(e) : undefined);
        }
        else {
            obj.signers = message.signers;
        }
        obj.content = message.content ? Content.toAmino(message.content) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisContentEntry.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return GenesisContentEntry.decode(message.value);
    },
    toProto(message) {
        return GenesisContentEntry.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1alpha2.GenesisContentEntry",
            value: GenesisContentEntry.encode(message).finish()
        };
    }
};
