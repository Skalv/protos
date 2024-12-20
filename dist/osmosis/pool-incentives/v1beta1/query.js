"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryExternalIncentiveGaugesResponse = exports.QueryExternalIncentiveGaugesRequest = exports.QueryIncentivizedPoolsResponse = exports.IncentivizedPool = exports.QueryIncentivizedPoolsRequest = exports.QueryLockableDurationsResponse = exports.QueryLockableDurationsRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryDistrInfoResponse = exports.QueryDistrInfoRequest = exports.QueryGaugeIdsResponse_GaugeIdWithDuration = exports.QueryGaugeIdsResponse = exports.QueryGaugeIdsRequest = void 0;
//@ts-nocheck
const duration_1 = require("../../../google/protobuf/duration");
const incentives_1 = require("./incentives");
const gauge_1 = require("../../incentives/gauge");
const binary_1 = require("../../../binary");
function createBaseQueryGaugeIdsRequest() {
    return {
        poolId: BigInt(0)
    };
}
exports.QueryGaugeIdsRequest = {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryGaugeIdsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGaugeIdsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryGaugeIdsRequest();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGaugeIdsRequest();
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId !== BigInt(0) ? (message.poolId?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGaugeIdsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/query-gauge-ids-request",
            value: exports.QueryGaugeIdsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGaugeIdsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGaugeIdsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.QueryGaugeIdsRequest",
            value: exports.QueryGaugeIdsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGaugeIdsResponse() {
    return {
        gaugeIdsWithDuration: []
    };
}
exports.QueryGaugeIdsResponse = {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryGaugeIdsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.gaugeIdsWithDuration) {
            exports.QueryGaugeIdsResponse_GaugeIdWithDuration.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGaugeIdsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gaugeIdsWithDuration.push(exports.QueryGaugeIdsResponse_GaugeIdWithDuration.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryGaugeIdsResponse();
        message.gaugeIdsWithDuration = object.gaugeIdsWithDuration?.map(e => exports.QueryGaugeIdsResponse_GaugeIdWithDuration.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGaugeIdsResponse();
        message.gaugeIdsWithDuration = object.gauge_ids_with_duration?.map(e => exports.QueryGaugeIdsResponse_GaugeIdWithDuration.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.gaugeIdsWithDuration) {
            obj.gauge_ids_with_duration = message.gaugeIdsWithDuration.map(e => e ? exports.QueryGaugeIdsResponse_GaugeIdWithDuration.toAmino(e) : undefined);
        }
        else {
            obj.gauge_ids_with_duration = message.gaugeIdsWithDuration;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGaugeIdsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/query-gauge-ids-response",
            value: exports.QueryGaugeIdsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGaugeIdsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGaugeIdsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.QueryGaugeIdsResponse",
            value: exports.QueryGaugeIdsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryGaugeIdsResponse_GaugeIdWithDuration() {
    return {
        gaugeId: BigInt(0),
        duration: duration_1.Duration.fromPartial({}),
        gaugeIncentivePercentage: ""
    };
}
exports.QueryGaugeIdsResponse_GaugeIdWithDuration = {
    typeUrl: "/osmosis.poolincentives.v1beta1.GaugeIdWithDuration",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.gaugeId !== BigInt(0)) {
            writer.uint32(8).uint64(message.gaugeId);
        }
        if (message.duration !== undefined) {
            duration_1.Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
        }
        if (message.gaugeIncentivePercentage !== "") {
            writer.uint32(26).string(message.gaugeIncentivePercentage);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGaugeIdsResponse_GaugeIdWithDuration();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gaugeId = reader.uint64();
                    break;
                case 2:
                    message.duration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.gaugeIncentivePercentage = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryGaugeIdsResponse_GaugeIdWithDuration();
        message.gaugeId = object.gaugeId !== undefined && object.gaugeId !== null ? BigInt(object.gaugeId.toString()) : BigInt(0);
        message.duration = object.duration !== undefined && object.duration !== null ? duration_1.Duration.fromPartial(object.duration) : undefined;
        message.gaugeIncentivePercentage = object.gaugeIncentivePercentage ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGaugeIdsResponse_GaugeIdWithDuration();
        if (object.gauge_id !== undefined && object.gauge_id !== null) {
            message.gaugeId = BigInt(object.gauge_id);
        }
        if (object.duration !== undefined && object.duration !== null) {
            message.duration = duration_1.Duration.fromAmino(object.duration);
        }
        if (object.gauge_incentive_percentage !== undefined && object.gauge_incentive_percentage !== null) {
            message.gaugeIncentivePercentage = object.gauge_incentive_percentage;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.gauge_id = message.gaugeId !== BigInt(0) ? (message.gaugeId?.toString)() : undefined;
        obj.duration = message.duration ? duration_1.Duration.toAmino(message.duration) : undefined;
        obj.gauge_incentive_percentage = message.gaugeIncentivePercentage === "" ? undefined : message.gaugeIncentivePercentage;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGaugeIdsResponse_GaugeIdWithDuration.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/gauge-id-with-duration",
            value: exports.QueryGaugeIdsResponse_GaugeIdWithDuration.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGaugeIdsResponse_GaugeIdWithDuration.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGaugeIdsResponse_GaugeIdWithDuration.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.GaugeIdWithDuration",
            value: exports.QueryGaugeIdsResponse_GaugeIdWithDuration.encode(message).finish()
        };
    }
};
function createBaseQueryDistrInfoRequest() {
    return {};
}
exports.QueryDistrInfoRequest = {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryDistrInfoRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDistrInfoRequest();
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
        const message = createBaseQueryDistrInfoRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryDistrInfoRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDistrInfoRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/query-distr-info-request",
            value: exports.QueryDistrInfoRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryDistrInfoRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDistrInfoRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.QueryDistrInfoRequest",
            value: exports.QueryDistrInfoRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDistrInfoResponse() {
    return {
        distrInfo: incentives_1.DistrInfo.fromPartial({})
    };
}
exports.QueryDistrInfoResponse = {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryDistrInfoResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.distrInfo !== undefined) {
            incentives_1.DistrInfo.encode(message.distrInfo, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDistrInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.distrInfo = incentives_1.DistrInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDistrInfoResponse();
        message.distrInfo = object.distrInfo !== undefined && object.distrInfo !== null ? incentives_1.DistrInfo.fromPartial(object.distrInfo) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryDistrInfoResponse();
        if (object.distr_info !== undefined && object.distr_info !== null) {
            message.distrInfo = incentives_1.DistrInfo.fromAmino(object.distr_info);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.distr_info = message.distrInfo ? incentives_1.DistrInfo.toAmino(message.distrInfo) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDistrInfoResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/query-distr-info-response",
            value: exports.QueryDistrInfoResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryDistrInfoResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDistrInfoResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.QueryDistrInfoResponse",
            value: exports.QueryDistrInfoResponse.encode(message).finish()
        };
    }
};
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryParamsRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
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
        const message = createBaseQueryParamsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryParamsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/query-params-request",
            value: exports.QueryParamsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.QueryParamsRequest",
            value: exports.QueryParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: incentives_1.Params.fromPartial({})
    };
}
exports.QueryParamsResponse = {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryParamsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            incentives_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = incentives_1.Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? incentives_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = incentives_1.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? incentives_1.Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/query-params-response",
            value: exports.QueryParamsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.QueryParamsResponse",
            value: exports.QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryLockableDurationsRequest() {
    return {};
}
exports.QueryLockableDurationsRequest = {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryLockableDurationsRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLockableDurationsRequest();
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
        const message = createBaseQueryLockableDurationsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryLockableDurationsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryLockableDurationsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/query-lockable-durations-request",
            value: exports.QueryLockableDurationsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryLockableDurationsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryLockableDurationsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.QueryLockableDurationsRequest",
            value: exports.QueryLockableDurationsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryLockableDurationsResponse() {
    return {
        lockableDurations: []
    };
}
exports.QueryLockableDurationsResponse = {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryLockableDurationsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.lockableDurations) {
            duration_1.Duration.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLockableDurationsResponse();
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
        const message = createBaseQueryLockableDurationsResponse();
        message.lockableDurations = object.lockableDurations?.map(e => duration_1.Duration.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryLockableDurationsResponse();
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
        return exports.QueryLockableDurationsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/query-lockable-durations-response",
            value: exports.QueryLockableDurationsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryLockableDurationsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryLockableDurationsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.QueryLockableDurationsResponse",
            value: exports.QueryLockableDurationsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryIncentivizedPoolsRequest() {
    return {};
}
exports.QueryIncentivizedPoolsRequest = {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryIncentivizedPoolsRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryIncentivizedPoolsRequest();
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
        const message = createBaseQueryIncentivizedPoolsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryIncentivizedPoolsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryIncentivizedPoolsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/query-incentivized-pools-request",
            value: exports.QueryIncentivizedPoolsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryIncentivizedPoolsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryIncentivizedPoolsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.QueryIncentivizedPoolsRequest",
            value: exports.QueryIncentivizedPoolsRequest.encode(message).finish()
        };
    }
};
function createBaseIncentivizedPool() {
    return {
        poolId: BigInt(0),
        lockableDuration: duration_1.Duration.fromPartial({}),
        gaugeId: BigInt(0)
    };
}
exports.IncentivizedPool = {
    typeUrl: "/osmosis.poolincentives.v1beta1.IncentivizedPool",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.lockableDuration !== undefined) {
            duration_1.Duration.encode(message.lockableDuration, writer.uint32(18).fork()).ldelim();
        }
        if (message.gaugeId !== BigInt(0)) {
            writer.uint32(24).uint64(message.gaugeId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIncentivizedPool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.lockableDuration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.gaugeId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseIncentivizedPool();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
        message.lockableDuration = object.lockableDuration !== undefined && object.lockableDuration !== null ? duration_1.Duration.fromPartial(object.lockableDuration) : undefined;
        message.gaugeId = object.gaugeId !== undefined && object.gaugeId !== null ? BigInt(object.gaugeId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseIncentivizedPool();
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        if (object.lockable_duration !== undefined && object.lockable_duration !== null) {
            message.lockableDuration = duration_1.Duration.fromAmino(object.lockable_duration);
        }
        if (object.gauge_id !== undefined && object.gauge_id !== null) {
            message.gaugeId = BigInt(object.gauge_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId !== BigInt(0) ? (message.poolId?.toString)() : undefined;
        obj.lockable_duration = message.lockableDuration ? duration_1.Duration.toAmino(message.lockableDuration) : undefined;
        obj.gauge_id = message.gaugeId !== BigInt(0) ? (message.gaugeId?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.IncentivizedPool.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/incentivized-pool",
            value: exports.IncentivizedPool.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.IncentivizedPool.decode(message.value);
    },
    toProto(message) {
        return exports.IncentivizedPool.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.IncentivizedPool",
            value: exports.IncentivizedPool.encode(message).finish()
        };
    }
};
function createBaseQueryIncentivizedPoolsResponse() {
    return {
        incentivizedPools: []
    };
}
exports.QueryIncentivizedPoolsResponse = {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryIncentivizedPoolsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.incentivizedPools) {
            exports.IncentivizedPool.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryIncentivizedPoolsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.incentivizedPools.push(exports.IncentivizedPool.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryIncentivizedPoolsResponse();
        message.incentivizedPools = object.incentivizedPools?.map(e => exports.IncentivizedPool.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryIncentivizedPoolsResponse();
        message.incentivizedPools = object.incentivized_pools?.map(e => exports.IncentivizedPool.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.incentivizedPools) {
            obj.incentivized_pools = message.incentivizedPools.map(e => e ? exports.IncentivizedPool.toAmino(e) : undefined);
        }
        else {
            obj.incentivized_pools = message.incentivizedPools;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryIncentivizedPoolsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/query-incentivized-pools-response",
            value: exports.QueryIncentivizedPoolsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryIncentivizedPoolsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryIncentivizedPoolsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.QueryIncentivizedPoolsResponse",
            value: exports.QueryIncentivizedPoolsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryExternalIncentiveGaugesRequest() {
    return {};
}
exports.QueryExternalIncentiveGaugesRequest = {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryExternalIncentiveGaugesRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryExternalIncentiveGaugesRequest();
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
        const message = createBaseQueryExternalIncentiveGaugesRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryExternalIncentiveGaugesRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryExternalIncentiveGaugesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/query-external-incentive-gauges-request",
            value: exports.QueryExternalIncentiveGaugesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryExternalIncentiveGaugesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryExternalIncentiveGaugesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.QueryExternalIncentiveGaugesRequest",
            value: exports.QueryExternalIncentiveGaugesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryExternalIncentiveGaugesResponse() {
    return {
        data: []
    };
}
exports.QueryExternalIncentiveGaugesResponse = {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryExternalIncentiveGaugesResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.data) {
            gauge_1.Gauge.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryExternalIncentiveGaugesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data.push(gauge_1.Gauge.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryExternalIncentiveGaugesResponse();
        message.data = object.data?.map(e => gauge_1.Gauge.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryExternalIncentiveGaugesResponse();
        message.data = object.data?.map(e => gauge_1.Gauge.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.data) {
            obj.data = message.data.map(e => e ? gauge_1.Gauge.toAmino(e) : undefined);
        }
        else {
            obj.data = message.data;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryExternalIncentiveGaugesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/query-external-incentive-gauges-response",
            value: exports.QueryExternalIncentiveGaugesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryExternalIncentiveGaugesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryExternalIncentiveGaugesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.QueryExternalIncentiveGaugesResponse",
            value: exports.QueryExternalIncentiveGaugesResponse.encode(message).finish()
        };
    }
};
