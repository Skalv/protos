"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwapRecord = void 0;
//@ts-nocheck
const timestamp_1 = require("../../../google/protobuf/timestamp");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const math_1 = require("@cosmjs/math");
function createBaseTwapRecord() {
    return {
        poolId: BigInt(0),
        asset0Denom: "",
        asset1Denom: "",
        height: BigInt(0),
        time: new Date(),
        p0LastSpotPrice: "",
        p1LastSpotPrice: "",
        p0ArithmeticTwapAccumulator: "",
        p1ArithmeticTwapAccumulator: "",
        geometricTwapAccumulator: "",
        lastErrorTime: new Date()
    };
}
exports.TwapRecord = {
    typeUrl: "/osmosis.twap.v1beta1.TwapRecord",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.asset0Denom !== "") {
            writer.uint32(18).string(message.asset0Denom);
        }
        if (message.asset1Denom !== "") {
            writer.uint32(26).string(message.asset1Denom);
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(32).int64(message.height);
        }
        if (message.time !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.time), writer.uint32(42).fork()).ldelim();
        }
        if (message.p0LastSpotPrice !== "") {
            writer.uint32(50).string(math_1.Decimal.fromUserInput(message.p0LastSpotPrice, 18).atomics);
        }
        if (message.p1LastSpotPrice !== "") {
            writer.uint32(58).string(math_1.Decimal.fromUserInput(message.p1LastSpotPrice, 18).atomics);
        }
        if (message.p0ArithmeticTwapAccumulator !== "") {
            writer.uint32(66).string(math_1.Decimal.fromUserInput(message.p0ArithmeticTwapAccumulator, 18).atomics);
        }
        if (message.p1ArithmeticTwapAccumulator !== "") {
            writer.uint32(74).string(math_1.Decimal.fromUserInput(message.p1ArithmeticTwapAccumulator, 18).atomics);
        }
        if (message.geometricTwapAccumulator !== "") {
            writer.uint32(82).string(math_1.Decimal.fromUserInput(message.geometricTwapAccumulator, 18).atomics);
        }
        if (message.lastErrorTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.lastErrorTime), writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTwapRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.asset0Denom = reader.string();
                    break;
                case 3:
                    message.asset1Denom = reader.string();
                    break;
                case 4:
                    message.height = reader.int64();
                    break;
                case 5:
                    message.time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.p0LastSpotPrice = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 7:
                    message.p1LastSpotPrice = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 8:
                    message.p0ArithmeticTwapAccumulator = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 9:
                    message.p1ArithmeticTwapAccumulator = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 10:
                    message.geometricTwapAccumulator = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 11:
                    message.lastErrorTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseTwapRecord();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
        message.asset0Denom = object.asset0Denom ?? "";
        message.asset1Denom = object.asset1Denom ?? "";
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.time = object.time ?? undefined;
        message.p0LastSpotPrice = object.p0LastSpotPrice ?? "";
        message.p1LastSpotPrice = object.p1LastSpotPrice ?? "";
        message.p0ArithmeticTwapAccumulator = object.p0ArithmeticTwapAccumulator ?? "";
        message.p1ArithmeticTwapAccumulator = object.p1ArithmeticTwapAccumulator ?? "";
        message.geometricTwapAccumulator = object.geometricTwapAccumulator ?? "";
        message.lastErrorTime = object.lastErrorTime ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseTwapRecord();
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        if (object.asset0_denom !== undefined && object.asset0_denom !== null) {
            message.asset0Denom = object.asset0_denom;
        }
        if (object.asset1_denom !== undefined && object.asset1_denom !== null) {
            message.asset1Denom = object.asset1_denom;
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        if (object.time !== undefined && object.time !== null) {
            message.time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.time));
        }
        if (object.p0_last_spot_price !== undefined && object.p0_last_spot_price !== null) {
            message.p0LastSpotPrice = object.p0_last_spot_price;
        }
        if (object.p1_last_spot_price !== undefined && object.p1_last_spot_price !== null) {
            message.p1LastSpotPrice = object.p1_last_spot_price;
        }
        if (object.p0_arithmetic_twap_accumulator !== undefined && object.p0_arithmetic_twap_accumulator !== null) {
            message.p0ArithmeticTwapAccumulator = object.p0_arithmetic_twap_accumulator;
        }
        if (object.p1_arithmetic_twap_accumulator !== undefined && object.p1_arithmetic_twap_accumulator !== null) {
            message.p1ArithmeticTwapAccumulator = object.p1_arithmetic_twap_accumulator;
        }
        if (object.geometric_twap_accumulator !== undefined && object.geometric_twap_accumulator !== null) {
            message.geometricTwapAccumulator = object.geometric_twap_accumulator;
        }
        if (object.last_error_time !== undefined && object.last_error_time !== null) {
            message.lastErrorTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.last_error_time));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId !== BigInt(0) ? (message.poolId?.toString)() : undefined;
        obj.asset0_denom = message.asset0Denom === "" ? undefined : message.asset0Denom;
        obj.asset1_denom = message.asset1Denom === "" ? undefined : message.asset1Denom;
        obj.height = message.height ? (message.height?.toString)() : "0";
        obj.time = message.time ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.time)) : undefined;
        obj.p0_last_spot_price = message.p0LastSpotPrice === "" ? undefined : message.p0LastSpotPrice;
        obj.p1_last_spot_price = message.p1LastSpotPrice === "" ? undefined : message.p1LastSpotPrice;
        obj.p0_arithmetic_twap_accumulator = message.p0ArithmeticTwapAccumulator === "" ? undefined : message.p0ArithmeticTwapAccumulator;
        obj.p1_arithmetic_twap_accumulator = message.p1ArithmeticTwapAccumulator === "" ? undefined : message.p1ArithmeticTwapAccumulator;
        obj.geometric_twap_accumulator = message.geometricTwapAccumulator === "" ? undefined : message.geometricTwapAccumulator;
        obj.last_error_time = message.lastErrorTime ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.lastErrorTime)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.TwapRecord.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/twap/twap-record",
            value: exports.TwapRecord.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.TwapRecord.decode(message.value);
    },
    toProto(message) {
        return exports.TwapRecord.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.twap.v1beta1.TwapRecord",
            value: exports.TwapRecord.encode(message).finish()
        };
    }
};
