//@ts-nocheck
import { Duration } from "../../../google/protobuf/duration";
import { DistrInfo, Params } from "./incentives";
import { Gauge } from "../../incentives/gauge";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseQueryGaugeIdsRequest() {
    return {
        poolId: BigInt(0)
    };
}
export const QueryGaugeIdsRequest = {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryGaugeIdsRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryGaugeIdsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/query-gauge-ids-request",
            value: QueryGaugeIdsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryGaugeIdsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGaugeIdsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.QueryGaugeIdsRequest",
            value: QueryGaugeIdsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGaugeIdsResponse() {
    return {
        gaugeIdsWithDuration: []
    };
}
export const QueryGaugeIdsResponse = {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryGaugeIdsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.gaugeIdsWithDuration) {
            QueryGaugeIdsResponse_GaugeIdWithDuration.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGaugeIdsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gaugeIdsWithDuration.push(QueryGaugeIdsResponse_GaugeIdWithDuration.decode(reader, reader.uint32()));
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
        message.gaugeIdsWithDuration = object.gaugeIdsWithDuration?.map(e => QueryGaugeIdsResponse_GaugeIdWithDuration.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGaugeIdsResponse();
        message.gaugeIdsWithDuration = object.gauge_ids_with_duration?.map(e => QueryGaugeIdsResponse_GaugeIdWithDuration.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.gaugeIdsWithDuration) {
            obj.gauge_ids_with_duration = message.gaugeIdsWithDuration.map(e => e ? QueryGaugeIdsResponse_GaugeIdWithDuration.toAmino(e) : undefined);
        }
        else {
            obj.gauge_ids_with_duration = message.gaugeIdsWithDuration;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGaugeIdsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/query-gauge-ids-response",
            value: QueryGaugeIdsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryGaugeIdsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGaugeIdsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.QueryGaugeIdsResponse",
            value: QueryGaugeIdsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryGaugeIdsResponse_GaugeIdWithDuration() {
    return {
        gaugeId: BigInt(0),
        duration: Duration.fromPartial({}),
        gaugeIncentivePercentage: ""
    };
}
export const QueryGaugeIdsResponse_GaugeIdWithDuration = {
    typeUrl: "/osmosis.poolincentives.v1beta1.GaugeIdWithDuration",
    encode(message, writer = BinaryWriter.create()) {
        if (message.gaugeId !== BigInt(0)) {
            writer.uint32(8).uint64(message.gaugeId);
        }
        if (message.duration !== undefined) {
            Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
        }
        if (message.gaugeIncentivePercentage !== "") {
            writer.uint32(26).string(message.gaugeIncentivePercentage);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGaugeIdsResponse_GaugeIdWithDuration();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gaugeId = reader.uint64();
                    break;
                case 2:
                    message.duration = Duration.decode(reader, reader.uint32());
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
        message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
        message.gaugeIncentivePercentage = object.gaugeIncentivePercentage ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGaugeIdsResponse_GaugeIdWithDuration();
        if (object.gauge_id !== undefined && object.gauge_id !== null) {
            message.gaugeId = BigInt(object.gauge_id);
        }
        if (object.duration !== undefined && object.duration !== null) {
            message.duration = Duration.fromAmino(object.duration);
        }
        if (object.gauge_incentive_percentage !== undefined && object.gauge_incentive_percentage !== null) {
            message.gaugeIncentivePercentage = object.gauge_incentive_percentage;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.gauge_id = message.gaugeId !== BigInt(0) ? (message.gaugeId?.toString)() : undefined;
        obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined;
        obj.gauge_incentive_percentage = message.gaugeIncentivePercentage === "" ? undefined : message.gaugeIncentivePercentage;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGaugeIdsResponse_GaugeIdWithDuration.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/gauge-id-with-duration",
            value: QueryGaugeIdsResponse_GaugeIdWithDuration.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryGaugeIdsResponse_GaugeIdWithDuration.decode(message.value);
    },
    toProto(message) {
        return QueryGaugeIdsResponse_GaugeIdWithDuration.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.GaugeIdWithDuration",
            value: QueryGaugeIdsResponse_GaugeIdWithDuration.encode(message).finish()
        };
    }
};
function createBaseQueryDistrInfoRequest() {
    return {};
}
export const QueryDistrInfoRequest = {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryDistrInfoRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryDistrInfoRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/query-distr-info-request",
            value: QueryDistrInfoRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryDistrInfoRequest.decode(message.value);
    },
    toProto(message) {
        return QueryDistrInfoRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.QueryDistrInfoRequest",
            value: QueryDistrInfoRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDistrInfoResponse() {
    return {
        distrInfo: DistrInfo.fromPartial({})
    };
}
export const QueryDistrInfoResponse = {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryDistrInfoResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.distrInfo !== undefined) {
            DistrInfo.encode(message.distrInfo, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDistrInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.distrInfo = DistrInfo.decode(reader, reader.uint32());
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
        message.distrInfo = object.distrInfo !== undefined && object.distrInfo !== null ? DistrInfo.fromPartial(object.distrInfo) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryDistrInfoResponse();
        if (object.distr_info !== undefined && object.distr_info !== null) {
            message.distrInfo = DistrInfo.fromAmino(object.distr_info);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.distr_info = message.distrInfo ? DistrInfo.toAmino(message.distrInfo) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDistrInfoResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/query-distr-info-response",
            value: QueryDistrInfoResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryDistrInfoResponse.decode(message.value);
    },
    toProto(message) {
        return QueryDistrInfoResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.QueryDistrInfoResponse",
            value: QueryDistrInfoResponse.encode(message).finish()
        };
    }
};
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryParamsRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryParamsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/query-params-request",
            value: QueryParamsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.QueryParamsRequest",
            value: QueryParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: Params.fromPartial({})
    };
}
export const QueryParamsResponse = {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryParamsResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
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
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/query-params-response",
            value: QueryParamsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.QueryParamsResponse",
            value: QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryLockableDurationsRequest() {
    return {};
}
export const QueryLockableDurationsRequest = {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryLockableDurationsRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryLockableDurationsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/query-lockable-durations-request",
            value: QueryLockableDurationsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryLockableDurationsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryLockableDurationsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.QueryLockableDurationsRequest",
            value: QueryLockableDurationsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryLockableDurationsResponse() {
    return {
        lockableDurations: []
    };
}
export const QueryLockableDurationsResponse = {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryLockableDurationsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.lockableDurations) {
            Duration.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLockableDurationsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lockableDurations.push(Duration.decode(reader, reader.uint32()));
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
        message.lockableDurations = object.lockableDurations?.map(e => Duration.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryLockableDurationsResponse();
        message.lockableDurations = object.lockable_durations?.map(e => Duration.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.lockableDurations) {
            obj.lockable_durations = message.lockableDurations.map(e => e ? Duration.toAmino(e) : undefined);
        }
        else {
            obj.lockable_durations = message.lockableDurations;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryLockableDurationsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/query-lockable-durations-response",
            value: QueryLockableDurationsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryLockableDurationsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryLockableDurationsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.QueryLockableDurationsResponse",
            value: QueryLockableDurationsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryIncentivizedPoolsRequest() {
    return {};
}
export const QueryIncentivizedPoolsRequest = {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryIncentivizedPoolsRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryIncentivizedPoolsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/query-incentivized-pools-request",
            value: QueryIncentivizedPoolsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryIncentivizedPoolsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryIncentivizedPoolsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.QueryIncentivizedPoolsRequest",
            value: QueryIncentivizedPoolsRequest.encode(message).finish()
        };
    }
};
function createBaseIncentivizedPool() {
    return {
        poolId: BigInt(0),
        lockableDuration: Duration.fromPartial({}),
        gaugeId: BigInt(0)
    };
}
export const IncentivizedPool = {
    typeUrl: "/osmosis.poolincentives.v1beta1.IncentivizedPool",
    encode(message, writer = BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.lockableDuration !== undefined) {
            Duration.encode(message.lockableDuration, writer.uint32(18).fork()).ldelim();
        }
        if (message.gaugeId !== BigInt(0)) {
            writer.uint32(24).uint64(message.gaugeId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIncentivizedPool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.lockableDuration = Duration.decode(reader, reader.uint32());
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
        message.lockableDuration = object.lockableDuration !== undefined && object.lockableDuration !== null ? Duration.fromPartial(object.lockableDuration) : undefined;
        message.gaugeId = object.gaugeId !== undefined && object.gaugeId !== null ? BigInt(object.gaugeId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseIncentivizedPool();
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        if (object.lockable_duration !== undefined && object.lockable_duration !== null) {
            message.lockableDuration = Duration.fromAmino(object.lockable_duration);
        }
        if (object.gauge_id !== undefined && object.gauge_id !== null) {
            message.gaugeId = BigInt(object.gauge_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId !== BigInt(0) ? (message.poolId?.toString)() : undefined;
        obj.lockable_duration = message.lockableDuration ? Duration.toAmino(message.lockableDuration) : undefined;
        obj.gauge_id = message.gaugeId !== BigInt(0) ? (message.gaugeId?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return IncentivizedPool.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/incentivized-pool",
            value: IncentivizedPool.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return IncentivizedPool.decode(message.value);
    },
    toProto(message) {
        return IncentivizedPool.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.IncentivizedPool",
            value: IncentivizedPool.encode(message).finish()
        };
    }
};
function createBaseQueryIncentivizedPoolsResponse() {
    return {
        incentivizedPools: []
    };
}
export const QueryIncentivizedPoolsResponse = {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryIncentivizedPoolsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.incentivizedPools) {
            IncentivizedPool.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryIncentivizedPoolsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.incentivizedPools.push(IncentivizedPool.decode(reader, reader.uint32()));
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
        message.incentivizedPools = object.incentivizedPools?.map(e => IncentivizedPool.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryIncentivizedPoolsResponse();
        message.incentivizedPools = object.incentivized_pools?.map(e => IncentivizedPool.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.incentivizedPools) {
            obj.incentivized_pools = message.incentivizedPools.map(e => e ? IncentivizedPool.toAmino(e) : undefined);
        }
        else {
            obj.incentivized_pools = message.incentivizedPools;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryIncentivizedPoolsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/query-incentivized-pools-response",
            value: QueryIncentivizedPoolsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryIncentivizedPoolsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryIncentivizedPoolsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.QueryIncentivizedPoolsResponse",
            value: QueryIncentivizedPoolsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryExternalIncentiveGaugesRequest() {
    return {};
}
export const QueryExternalIncentiveGaugesRequest = {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryExternalIncentiveGaugesRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryExternalIncentiveGaugesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/query-external-incentive-gauges-request",
            value: QueryExternalIncentiveGaugesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryExternalIncentiveGaugesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryExternalIncentiveGaugesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.QueryExternalIncentiveGaugesRequest",
            value: QueryExternalIncentiveGaugesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryExternalIncentiveGaugesResponse() {
    return {
        data: []
    };
}
export const QueryExternalIncentiveGaugesResponse = {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryExternalIncentiveGaugesResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.data) {
            Gauge.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryExternalIncentiveGaugesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data.push(Gauge.decode(reader, reader.uint32()));
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
        message.data = object.data?.map(e => Gauge.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryExternalIncentiveGaugesResponse();
        message.data = object.data?.map(e => Gauge.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.data) {
            obj.data = message.data.map(e => e ? Gauge.toAmino(e) : undefined);
        }
        else {
            obj.data = message.data;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryExternalIncentiveGaugesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/query-external-incentive-gauges-response",
            value: QueryExternalIncentiveGaugesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryExternalIncentiveGaugesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryExternalIncentiveGaugesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.QueryExternalIncentiveGaugesResponse",
            value: QueryExternalIncentiveGaugesResponse.encode(message).finish()
        };
    }
};
