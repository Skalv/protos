"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatchFees = exports.IDSet = void 0;
//@ts-nocheck
const binary_1 = require("../../../binary");
function createBaseIDSet() {
    return {
        ids: []
    };
}
exports.IDSet = {
    typeUrl: "/injective.peggy.v1.IDSet",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        writer.uint32(10).fork();
        for (const v of message.ids) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIDSet();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.ids.push(reader.uint64());
                        }
                    }
                    else {
                        message.ids.push(reader.uint64());
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseIDSet();
        message.ids = object.ids?.map(e => BigInt(e.toString())) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseIDSet();
        message.ids = object.ids?.map(e => BigInt(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.ids) {
            obj.ids = message.ids.map(e => e.toString());
        }
        else {
            obj.ids = message.ids;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.IDSet.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.IDSet.decode(message.value);
    },
    toProto(message) {
        return exports.IDSet.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.IDSet",
            value: exports.IDSet.encode(message).finish()
        };
    }
};
function createBaseBatchFees() {
    return {
        token: "",
        totalFees: ""
    };
}
exports.BatchFees = {
    typeUrl: "/injective.peggy.v1.BatchFees",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.token !== "") {
            writer.uint32(10).string(message.token);
        }
        if (message.totalFees !== "") {
            writer.uint32(18).string(message.totalFees);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBatchFees();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.token = reader.string();
                    break;
                case 2:
                    message.totalFees = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBatchFees();
        message.token = object.token ?? "";
        message.totalFees = object.totalFees ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseBatchFees();
        if (object.token !== undefined && object.token !== null) {
            message.token = object.token;
        }
        if (object.total_fees !== undefined && object.total_fees !== null) {
            message.totalFees = object.total_fees;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.token = message.token === "" ? undefined : message.token;
        obj.total_fees = message.totalFees === "" ? undefined : message.totalFees;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.BatchFees.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.BatchFees.decode(message.value);
    },
    toProto(message) {
        return exports.BatchFees.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.peggy.v1.BatchFees",
            value: exports.BatchFees.encode(message).finish()
        };
    }
};
