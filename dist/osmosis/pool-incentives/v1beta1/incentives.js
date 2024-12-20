"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoolToGauges = exports.PoolToGauge = exports.DistrRecord = exports.DistrInfo = exports.LockableDurationsInfo = exports.Params = void 0;
//@ts-nocheck
const duration_1 = require("../../../google/protobuf/duration");
const binary_1 = require("../../../binary");
function createBaseParams() {
    return {
        mintedDenom: ""
    };
}
exports.Params = {
    typeUrl: "/osmosis.poolincentives.v1beta1.Params",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.mintedDenom !== "") {
            writer.uint32(10).string(message.mintedDenom);
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
                    message.mintedDenom = reader.string();
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
        message.mintedDenom = object.mintedDenom ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.minted_denom !== undefined && object.minted_denom !== null) {
            message.mintedDenom = object.minted_denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.minted_denom = message.mintedDenom === "" ? undefined : message.mintedDenom;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/params",
            value: exports.Params.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Params.decode(message.value);
    },
    toProto(message) {
        return exports.Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
function createBaseLockableDurationsInfo() {
    return {
        lockableDurations: []
    };
}
exports.LockableDurationsInfo = {
    typeUrl: "/osmosis.poolincentives.v1beta1.LockableDurationsInfo",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.lockableDurations) {
            duration_1.Duration.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLockableDurationsInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lockableDurations.push(duration_1.Duration.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseLockableDurationsInfo();
        message.lockableDurations = object.lockableDurations?.map(e => duration_1.Duration.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseLockableDurationsInfo();
        message.lockableDurations = object.lockable_durations?.map(e => duration_1.Duration.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.lockableDurations) {
            obj.lockable_durations = message.lockableDurations.map(e => e ? duration_1.Duration.toAmino(e) : undefined);
        }
        else {
            obj.lockable_durations = message.lockableDurations;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.LockableDurationsInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/lockable-durations-info",
            value: exports.LockableDurationsInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.LockableDurationsInfo.decode(message.value);
    },
    toProto(message) {
        return exports.LockableDurationsInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.LockableDurationsInfo",
            value: exports.LockableDurationsInfo.encode(message).finish()
        };
    }
};
function createBaseDistrInfo() {
    return {
        totalWeight: "",
        records: []
    };
}
exports.DistrInfo = {
    typeUrl: "/osmosis.poolincentives.v1beta1.DistrInfo",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.totalWeight !== "") {
            writer.uint32(10).string(message.totalWeight);
        }
        for (const v of message.records) {
            exports.DistrRecord.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDistrInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.totalWeight = reader.string();
                    break;
                case 2:
                    message.records.push(exports.DistrRecord.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDistrInfo();
        message.totalWeight = object.totalWeight ?? "";
        message.records = object.records?.map(e => exports.DistrRecord.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseDistrInfo();
        if (object.total_weight !== undefined && object.total_weight !== null) {
            message.totalWeight = object.total_weight;
        }
        message.records = object.records?.map(e => exports.DistrRecord.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.total_weight = message.totalWeight === "" ? undefined : message.totalWeight;
        if (message.records) {
            obj.records = message.records.map(e => e ? exports.DistrRecord.toAmino(e) : undefined);
        }
        else {
            obj.records = message.records;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DistrInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/distr-info",
            value: exports.DistrInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.DistrInfo.decode(message.value);
    },
    toProto(message) {
        return exports.DistrInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.DistrInfo",
            value: exports.DistrInfo.encode(message).finish()
        };
    }
};
function createBaseDistrRecord() {
    return {
        gaugeId: BigInt(0),
        weight: ""
    };
}
exports.DistrRecord = {
    typeUrl: "/osmosis.poolincentives.v1beta1.DistrRecord",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.gaugeId !== BigInt(0)) {
            writer.uint32(8).uint64(message.gaugeId);
        }
        if (message.weight !== "") {
            writer.uint32(18).string(message.weight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDistrRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gaugeId = reader.uint64();
                    break;
                case 2:
                    message.weight = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDistrRecord();
        message.gaugeId = object.gaugeId !== undefined && object.gaugeId !== null ? BigInt(object.gaugeId.toString()) : BigInt(0);
        message.weight = object.weight ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseDistrRecord();
        if (object.gauge_id !== undefined && object.gauge_id !== null) {
            message.gaugeId = BigInt(object.gauge_id);
        }
        if (object.weight !== undefined && object.weight !== null) {
            message.weight = object.weight;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.gauge_id = message.gaugeId !== BigInt(0) ? (message.gaugeId?.toString)() : undefined;
        obj.weight = message.weight === "" ? undefined : message.weight;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DistrRecord.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/distr-record",
            value: exports.DistrRecord.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.DistrRecord.decode(message.value);
    },
    toProto(message) {
        return exports.DistrRecord.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.DistrRecord",
            value: exports.DistrRecord.encode(message).finish()
        };
    }
};
function createBasePoolToGauge() {
    return {
        poolId: BigInt(0),
        gaugeId: BigInt(0),
        duration: duration_1.Duration.fromPartial({})
    };
}
exports.PoolToGauge = {
    typeUrl: "/osmosis.poolincentives.v1beta1.PoolToGauge",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.gaugeId !== BigInt(0)) {
            writer.uint32(16).uint64(message.gaugeId);
        }
        if (message.duration !== undefined) {
            duration_1.Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePoolToGauge();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.gaugeId = reader.uint64();
                    break;
                case 3:
                    message.duration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePoolToGauge();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
        message.gaugeId = object.gaugeId !== undefined && object.gaugeId !== null ? BigInt(object.gaugeId.toString()) : BigInt(0);
        message.duration = object.duration !== undefined && object.duration !== null ? duration_1.Duration.fromPartial(object.duration) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBasePoolToGauge();
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        if (object.gauge_id !== undefined && object.gauge_id !== null) {
            message.gaugeId = BigInt(object.gauge_id);
        }
        if (object.duration !== undefined && object.duration !== null) {
            message.duration = duration_1.Duration.fromAmino(object.duration);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId !== BigInt(0) ? (message.poolId?.toString)() : undefined;
        obj.gauge_id = message.gaugeId !== BigInt(0) ? (message.gaugeId?.toString)() : undefined;
        obj.duration = message.duration ? duration_1.Duration.toAmino(message.duration) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PoolToGauge.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/pool-to-gauge",
            value: exports.PoolToGauge.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.PoolToGauge.decode(message.value);
    },
    toProto(message) {
        return exports.PoolToGauge.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.PoolToGauge",
            value: exports.PoolToGauge.encode(message).finish()
        };
    }
};
function createBasePoolToGauges() {
    return {
        poolToGauge: []
    };
}
exports.PoolToGauges = {
    typeUrl: "/osmosis.poolincentives.v1beta1.PoolToGauges",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.poolToGauge) {
            exports.PoolToGauge.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePoolToGauges();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.poolToGauge.push(exports.PoolToGauge.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePoolToGauges();
        message.poolToGauge = object.poolToGauge?.map(e => exports.PoolToGauge.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBasePoolToGauges();
        message.poolToGauge = object.pool_to_gauge?.map(e => exports.PoolToGauge.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.poolToGauge) {
            obj.pool_to_gauge = message.poolToGauge.map(e => e ? exports.PoolToGauge.toAmino(e) : undefined);
        }
        else {
            obj.pool_to_gauge = message.poolToGauge;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PoolToGauges.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/pool-to-gauges",
            value: exports.PoolToGauges.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.PoolToGauges.decode(message.value);
    },
    toProto(message) {
        return exports.PoolToGauges.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.PoolToGauges",
            value: exports.PoolToGauges.encode(message).finish()
        };
    }
};
