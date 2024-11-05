//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseEventAnchorData() {
    return {
        iri: ""
    };
}
export const EventAnchorData = {
    typeUrl: "/regen.data.v1alpha2.EventAnchorData",
    encode(message, writer = BinaryWriter.create()) {
        if (message.iri !== "") {
            writer.uint32(10).string(message.iri);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventAnchorData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.iri = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventAnchorData();
        message.iri = object.iri ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventAnchorData();
        if (object.iri !== undefined && object.iri !== null) {
            message.iri = object.iri;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.iri = message.iri === "" ? undefined : message.iri;
        return obj;
    },
    fromAminoMsg(object) {
        return EventAnchorData.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventAnchorData.decode(message.value);
    },
    toProto(message) {
        return EventAnchorData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1alpha2.EventAnchorData",
            value: EventAnchorData.encode(message).finish()
        };
    }
};
function createBaseEventSignData() {
    return {
        iri: "",
        signers: []
    };
}
export const EventSignData = {
    typeUrl: "/regen.data.v1alpha2.EventSignData",
    encode(message, writer = BinaryWriter.create()) {
        if (message.iri !== "") {
            writer.uint32(10).string(message.iri);
        }
        for (const v of message.signers) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventSignData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.iri = reader.string();
                    break;
                case 2:
                    message.signers.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventSignData();
        message.iri = object.iri ?? "";
        message.signers = object.signers?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventSignData();
        if (object.iri !== undefined && object.iri !== null) {
            message.iri = object.iri;
        }
        message.signers = object.signers?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.iri = message.iri === "" ? undefined : message.iri;
        if (message.signers) {
            obj.signers = message.signers.map(e => e);
        }
        else {
            obj.signers = message.signers;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return EventSignData.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventSignData.decode(message.value);
    },
    toProto(message) {
        return EventSignData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1alpha2.EventSignData",
            value: EventSignData.encode(message).finish()
        };
    }
};
function createBaseEventStoreRawData() {
    return {
        iri: ""
    };
}
export const EventStoreRawData = {
    typeUrl: "/regen.data.v1alpha2.EventStoreRawData",
    encode(message, writer = BinaryWriter.create()) {
        if (message.iri !== "") {
            writer.uint32(10).string(message.iri);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventStoreRawData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.iri = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventStoreRawData();
        message.iri = object.iri ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventStoreRawData();
        if (object.iri !== undefined && object.iri !== null) {
            message.iri = object.iri;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.iri = message.iri === "" ? undefined : message.iri;
        return obj;
    },
    fromAminoMsg(object) {
        return EventStoreRawData.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventStoreRawData.decode(message.value);
    },
    toProto(message) {
        return EventStoreRawData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1alpha2.EventStoreRawData",
            value: EventStoreRawData.encode(message).finish()
        };
    }
};
