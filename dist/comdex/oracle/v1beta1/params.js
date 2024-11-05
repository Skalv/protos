"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.OracleParams = exports.IBCParams = void 0;
//@ts-nocheck
const binary_1 = require("../../../binary");
function createBaseIBCParams() {
    return {
        port: "",
        version: ""
    };
}
exports.IBCParams = {
    typeUrl: "/comdex.oracle.v1beta1.IBCParams",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.port !== "") {
            writer.uint32(10).string(message.port);
        }
        if (message.version !== "") {
            writer.uint32(18).string(message.version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIBCParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.port = reader.string();
                    break;
                case 2:
                    message.version = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseIBCParams();
        message.port = object.port ?? "";
        message.version = object.version ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseIBCParams();
        if (object.port !== undefined && object.port !== null) {
            message.port = object.port;
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.port = message.port === "" ? undefined : message.port;
        obj.version = message.version === "" ? undefined : message.version;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.IBCParams.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.IBCParams.decode(message.value);
    },
    toProto(message) {
        return exports.IBCParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.oracle.v1beta1.IBCParams",
            value: exports.IBCParams.encode(message).finish()
        };
    }
};
function createBaseOracleParams() {
    return {
        askCount: BigInt(0),
        minCount: BigInt(0),
        multiplier: BigInt(0)
    };
}
exports.OracleParams = {
    typeUrl: "/comdex.oracle.v1beta1.OracleParams",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.askCount !== BigInt(0)) {
            writer.uint32(8).uint64(message.askCount);
        }
        if (message.minCount !== BigInt(0)) {
            writer.uint32(16).uint64(message.minCount);
        }
        if (message.multiplier !== BigInt(0)) {
            writer.uint32(24).uint64(message.multiplier);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOracleParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.askCount = reader.uint64();
                    break;
                case 2:
                    message.minCount = reader.uint64();
                    break;
                case 3:
                    message.multiplier = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseOracleParams();
        message.askCount = object.askCount !== undefined && object.askCount !== null ? BigInt(object.askCount.toString()) : BigInt(0);
        message.minCount = object.minCount !== undefined && object.minCount !== null ? BigInt(object.minCount.toString()) : BigInt(0);
        message.multiplier = object.multiplier !== undefined && object.multiplier !== null ? BigInt(object.multiplier.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseOracleParams();
        if (object.ask_count !== undefined && object.ask_count !== null) {
            message.askCount = BigInt(object.ask_count);
        }
        if (object.min_count !== undefined && object.min_count !== null) {
            message.minCount = BigInt(object.min_count);
        }
        if (object.multiplier !== undefined && object.multiplier !== null) {
            message.multiplier = BigInt(object.multiplier);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.ask_count = message.askCount !== BigInt(0) ? (message.askCount?.toString)() : undefined;
        obj.min_count = message.minCount !== BigInt(0) ? (message.minCount?.toString)() : undefined;
        obj.multiplier = message.multiplier !== BigInt(0) ? (message.multiplier?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.OracleParams.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.OracleParams.decode(message.value);
    },
    toProto(message) {
        return exports.OracleParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.oracle.v1beta1.OracleParams",
            value: exports.OracleParams.encode(message).finish()
        };
    }
};
function createBaseParams() {
    return {
        ibc: exports.IBCParams.fromPartial({}),
        oracle: exports.OracleParams.fromPartial({})
    };
}
exports.Params = {
    typeUrl: "/comdex.oracle.v1beta1.Params",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.ibc !== undefined) {
            exports.IBCParams.encode(message.ibc, writer.uint32(10).fork()).ldelim();
        }
        if (message.oracle !== undefined) {
            exports.OracleParams.encode(message.oracle, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ibc = exports.IBCParams.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.oracle = exports.OracleParams.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.ibc = object.ibc !== undefined && object.ibc !== null ? exports.IBCParams.fromPartial(object.ibc) : undefined;
        message.oracle = object.oracle !== undefined && object.oracle !== null ? exports.OracleParams.fromPartial(object.oracle) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.ibc !== undefined && object.ibc !== null) {
            message.ibc = exports.IBCParams.fromAmino(object.ibc);
        }
        if (object.oracle !== undefined && object.oracle !== null) {
            message.oracle = exports.OracleParams.fromAmino(object.oracle);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.ibc = message.ibc ? exports.IBCParams.toAmino(message.ibc) : undefined;
        obj.oracle = message.oracle ? exports.OracleParams.toAmino(message.oracle) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Params.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Params.decode(message.value);
    },
    toProto(message) {
        return exports.Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.oracle.v1beta1.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
