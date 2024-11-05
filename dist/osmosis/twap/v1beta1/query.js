"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParamsResponse = exports.ParamsRequest = exports.ArithmeticTwapToNowResponse = exports.ArithmeticTwapToNowRequest = exports.ArithmeticTwapResponse = exports.ArithmeticTwapRequest = void 0;
//@ts-nocheck
const timestamp_1 = require("../../../google/protobuf/timestamp");
const genesis_1 = require("./genesis");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const math_1 = require("@cosmjs/math");
function createBaseArithmeticTwapRequest() {
    return {
        poolId: BigInt(0),
        baseAsset: "",
        quoteAsset: "",
        startTime: new Date(),
        endTime: undefined
    };
}
exports.ArithmeticTwapRequest = {
    typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.baseAsset !== "") {
            writer.uint32(18).string(message.baseAsset);
        }
        if (message.quoteAsset !== "") {
            writer.uint32(26).string(message.quoteAsset);
        }
        if (message.startTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.startTime), writer.uint32(34).fork()).ldelim();
        }
        if (message.endTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.endTime), writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseArithmeticTwapRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.baseAsset = reader.string();
                    break;
                case 3:
                    message.quoteAsset = reader.string();
                    break;
                case 4:
                    message.startTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.endTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseArithmeticTwapRequest();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
        message.baseAsset = object.baseAsset ?? "";
        message.quoteAsset = object.quoteAsset ?? "";
        message.startTime = object.startTime ?? undefined;
        message.endTime = object.endTime ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseArithmeticTwapRequest();
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        if (object.base_asset !== undefined && object.base_asset !== null) {
            message.baseAsset = object.base_asset;
        }
        if (object.quote_asset !== undefined && object.quote_asset !== null) {
            message.quoteAsset = object.quote_asset;
        }
        if (object.start_time !== undefined && object.start_time !== null) {
            message.startTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.start_time));
        }
        if (object.end_time !== undefined && object.end_time !== null) {
            message.endTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.end_time));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId !== BigInt(0) ? (message.poolId?.toString)() : undefined;
        obj.base_asset = message.baseAsset === "" ? undefined : message.baseAsset;
        obj.quote_asset = message.quoteAsset === "" ? undefined : message.quoteAsset;
        obj.start_time = message.startTime ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.startTime)) : undefined;
        obj.end_time = message.endTime ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.endTime)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ArithmeticTwapRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/twap/arithmetic-twap-request",
            value: exports.ArithmeticTwapRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ArithmeticTwapRequest.decode(message.value);
    },
    toProto(message) {
        return exports.ArithmeticTwapRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapRequest",
            value: exports.ArithmeticTwapRequest.encode(message).finish()
        };
    }
};
function createBaseArithmeticTwapResponse() {
    return {
        arithmeticTwap: ""
    };
}
exports.ArithmeticTwapResponse = {
    typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.arithmeticTwap !== "") {
            writer.uint32(10).string(math_1.Decimal.fromUserInput(message.arithmeticTwap, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseArithmeticTwapResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.arithmeticTwap = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseArithmeticTwapResponse();
        message.arithmeticTwap = object.arithmeticTwap ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseArithmeticTwapResponse();
        if (object.arithmetic_twap !== undefined && object.arithmetic_twap !== null) {
            message.arithmeticTwap = object.arithmetic_twap;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.arithmetic_twap = message.arithmeticTwap === "" ? undefined : message.arithmeticTwap;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ArithmeticTwapResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/twap/arithmetic-twap-response",
            value: exports.ArithmeticTwapResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ArithmeticTwapResponse.decode(message.value);
    },
    toProto(message) {
        return exports.ArithmeticTwapResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapResponse",
            value: exports.ArithmeticTwapResponse.encode(message).finish()
        };
    }
};
function createBaseArithmeticTwapToNowRequest() {
    return {
        poolId: BigInt(0),
        baseAsset: "",
        quoteAsset: "",
        startTime: new Date()
    };
}
exports.ArithmeticTwapToNowRequest = {
    typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapToNowRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.baseAsset !== "") {
            writer.uint32(18).string(message.baseAsset);
        }
        if (message.quoteAsset !== "") {
            writer.uint32(26).string(message.quoteAsset);
        }
        if (message.startTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.startTime), writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseArithmeticTwapToNowRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.baseAsset = reader.string();
                    break;
                case 3:
                    message.quoteAsset = reader.string();
                    break;
                case 4:
                    message.startTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseArithmeticTwapToNowRequest();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
        message.baseAsset = object.baseAsset ?? "";
        message.quoteAsset = object.quoteAsset ?? "";
        message.startTime = object.startTime ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseArithmeticTwapToNowRequest();
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        if (object.base_asset !== undefined && object.base_asset !== null) {
            message.baseAsset = object.base_asset;
        }
        if (object.quote_asset !== undefined && object.quote_asset !== null) {
            message.quoteAsset = object.quote_asset;
        }
        if (object.start_time !== undefined && object.start_time !== null) {
            message.startTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.start_time));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId !== BigInt(0) ? (message.poolId?.toString)() : undefined;
        obj.base_asset = message.baseAsset === "" ? undefined : message.baseAsset;
        obj.quote_asset = message.quoteAsset === "" ? undefined : message.quoteAsset;
        obj.start_time = message.startTime ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.startTime)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ArithmeticTwapToNowRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/twap/arithmetic-twap-to-now-request",
            value: exports.ArithmeticTwapToNowRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ArithmeticTwapToNowRequest.decode(message.value);
    },
    toProto(message) {
        return exports.ArithmeticTwapToNowRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapToNowRequest",
            value: exports.ArithmeticTwapToNowRequest.encode(message).finish()
        };
    }
};
function createBaseArithmeticTwapToNowResponse() {
    return {
        arithmeticTwap: ""
    };
}
exports.ArithmeticTwapToNowResponse = {
    typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapToNowResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.arithmeticTwap !== "") {
            writer.uint32(10).string(math_1.Decimal.fromUserInput(message.arithmeticTwap, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseArithmeticTwapToNowResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.arithmeticTwap = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseArithmeticTwapToNowResponse();
        message.arithmeticTwap = object.arithmeticTwap ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseArithmeticTwapToNowResponse();
        if (object.arithmetic_twap !== undefined && object.arithmetic_twap !== null) {
            message.arithmeticTwap = object.arithmetic_twap;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.arithmetic_twap = message.arithmeticTwap === "" ? undefined : message.arithmeticTwap;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ArithmeticTwapToNowResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/twap/arithmetic-twap-to-now-response",
            value: exports.ArithmeticTwapToNowResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ArithmeticTwapToNowResponse.decode(message.value);
    },
    toProto(message) {
        return exports.ArithmeticTwapToNowResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapToNowResponse",
            value: exports.ArithmeticTwapToNowResponse.encode(message).finish()
        };
    }
};
function createBaseParamsRequest() {
    return {};
}
exports.ParamsRequest = {
    typeUrl: "/osmosis.twap.v1beta1.ParamsRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParamsRequest();
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
        const message = createBaseParamsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseParamsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ParamsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/twap/params-request",
            value: exports.ParamsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ParamsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.ParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.twap.v1beta1.ParamsRequest",
            value: exports.ParamsRequest.encode(message).finish()
        };
    }
};
function createBaseParamsResponse() {
    return {
        params: genesis_1.Params.fromPartial({})
    };
}
exports.ParamsResponse = {
    typeUrl: "/osmosis.twap.v1beta1.ParamsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            genesis_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = genesis_1.Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? genesis_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = genesis_1.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? genesis_1.Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/twap/params-response",
            value: exports.ParamsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ParamsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.ParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.twap.v1beta1.ParamsResponse",
            value: exports.ParamsResponse.encode(message).finish()
        };
    }
};
