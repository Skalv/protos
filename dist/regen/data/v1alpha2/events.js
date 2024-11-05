"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventStoreRawData = exports.EventSignData = exports.EventAnchorData = void 0;
//@ts-nocheck
const binary_1 = require("../../../binary");
function createBaseEventAnchorData() {
    return {
        iri: ""
    };
}
exports.EventAnchorData = {
    typeUrl: "/regen.data.v1alpha2.EventAnchorData",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.iri !== "") {
            writer.uint32(10).string(message.iri);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.EventAnchorData.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventAnchorData.decode(message.value);
    },
    toProto(message) {
        return exports.EventAnchorData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1alpha2.EventAnchorData",
            value: exports.EventAnchorData.encode(message).finish()
        };
    }
};
function createBaseEventSignData() {
    return {
        iri: "",
        signers: []
    };
}
exports.EventSignData = {
    typeUrl: "/regen.data.v1alpha2.EventSignData",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.iri !== "") {
            writer.uint32(10).string(message.iri);
        }
        for (const v of message.signers) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.EventSignData.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventSignData.decode(message.value);
    },
    toProto(message) {
        return exports.EventSignData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1alpha2.EventSignData",
            value: exports.EventSignData.encode(message).finish()
        };
    }
};
function createBaseEventStoreRawData() {
    return {
        iri: ""
    };
}
exports.EventStoreRawData = {
    typeUrl: "/regen.data.v1alpha2.EventStoreRawData",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.iri !== "") {
            writer.uint32(10).string(message.iri);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.EventStoreRawData.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventStoreRawData.decode(message.value);
    },
    toProto(message) {
        return exports.EventStoreRawData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1alpha2.EventStoreRawData",
            value: exports.EventStoreRawData.encode(message).finish()
        };
    }
};
