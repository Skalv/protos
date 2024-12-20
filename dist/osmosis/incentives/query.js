"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryLockableDurationsResponse = exports.QueryLockableDurationsRequest = exports.RewardsEstResponse = exports.RewardsEstRequest = exports.UpcomingGaugesPerDenomResponse = exports.UpcomingGaugesPerDenomRequest = exports.UpcomingGaugesResponse = exports.UpcomingGaugesRequest = exports.ActiveGaugesPerDenomResponse = exports.ActiveGaugesPerDenomRequest = exports.ActiveGaugesResponse = exports.ActiveGaugesRequest = exports.GaugesResponse = exports.GaugesRequest = exports.GaugeByIDResponse = exports.GaugeByIDRequest = exports.ModuleToDistributeCoinsResponse = exports.ModuleToDistributeCoinsRequest = void 0;
//@ts-nocheck
const pagination_1 = require("../../cosmos/base/query/v1beta1/pagination");
const coin_1 = require("../../cosmos/base/v1beta1/coin");
const gauge_1 = require("./gauge");
const duration_1 = require("../../google/protobuf/duration");
const binary_1 = require("../../binary");
function createBaseModuleToDistributeCoinsRequest() {
    return {};
}
exports.ModuleToDistributeCoinsRequest = {
    typeUrl: "/osmosis.incentives.ModuleToDistributeCoinsRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModuleToDistributeCoinsRequest();
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
        const message = createBaseModuleToDistributeCoinsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseModuleToDistributeCoinsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ModuleToDistributeCoinsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/incentives/module-to-distribute-coins-request",
            value: exports.ModuleToDistributeCoinsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ModuleToDistributeCoinsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.ModuleToDistributeCoinsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.incentives.ModuleToDistributeCoinsRequest",
            value: exports.ModuleToDistributeCoinsRequest.encode(message).finish()
        };
    }
};
function createBaseModuleToDistributeCoinsResponse() {
    return {
        coins: []
    };
}
exports.ModuleToDistributeCoinsResponse = {
    typeUrl: "/osmosis.incentives.ModuleToDistributeCoinsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.coins) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModuleToDistributeCoinsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.coins.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseModuleToDistributeCoinsResponse();
        message.coins = object.coins?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseModuleToDistributeCoinsResponse();
        message.coins = object.coins?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.coins = message.coins;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ModuleToDistributeCoinsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/incentives/module-to-distribute-coins-response",
            value: exports.ModuleToDistributeCoinsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ModuleToDistributeCoinsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.ModuleToDistributeCoinsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.incentives.ModuleToDistributeCoinsResponse",
            value: exports.ModuleToDistributeCoinsResponse.encode(message).finish()
        };
    }
};
function createBaseGaugeByIDRequest() {
    return {
        id: BigInt(0)
    };
}
exports.GaugeByIDRequest = {
    typeUrl: "/osmosis.incentives.GaugeByIDRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGaugeByIDRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGaugeByIDRequest();
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseGaugeByIDRequest();
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id !== BigInt(0) ? (message.id?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GaugeByIDRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/incentives/gauge-by-id-request",
            value: exports.GaugeByIDRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GaugeByIDRequest.decode(message.value);
    },
    toProto(message) {
        return exports.GaugeByIDRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.incentives.GaugeByIDRequest",
            value: exports.GaugeByIDRequest.encode(message).finish()
        };
    }
};
function createBaseGaugeByIDResponse() {
    return {
        gauge: undefined
    };
}
exports.GaugeByIDResponse = {
    typeUrl: "/osmosis.incentives.GaugeByIDResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.gauge !== undefined) {
            gauge_1.Gauge.encode(message.gauge, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGaugeByIDResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gauge = gauge_1.Gauge.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGaugeByIDResponse();
        message.gauge = object.gauge !== undefined && object.gauge !== null ? gauge_1.Gauge.fromPartial(object.gauge) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGaugeByIDResponse();
        if (object.gauge !== undefined && object.gauge !== null) {
            message.gauge = gauge_1.Gauge.fromAmino(object.gauge);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.gauge = message.gauge ? gauge_1.Gauge.toAmino(message.gauge) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GaugeByIDResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/incentives/gauge-by-id-response",
            value: exports.GaugeByIDResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GaugeByIDResponse.decode(message.value);
    },
    toProto(message) {
        return exports.GaugeByIDResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.incentives.GaugeByIDResponse",
            value: exports.GaugeByIDResponse.encode(message).finish()
        };
    }
};
function createBaseGaugesRequest() {
    return {
        pagination: undefined
    };
}
exports.GaugesRequest = {
    typeUrl: "/osmosis.incentives.GaugesRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGaugesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGaugesRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGaugesRequest();
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GaugesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/incentives/gauges-request",
            value: exports.GaugesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GaugesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.GaugesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.incentives.GaugesRequest",
            value: exports.GaugesRequest.encode(message).finish()
        };
    }
};
function createBaseGaugesResponse() {
    return {
        data: [],
        pagination: undefined
    };
}
exports.GaugesResponse = {
    typeUrl: "/osmosis.incentives.GaugesResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.data) {
            gauge_1.Gauge.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGaugesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data.push(gauge_1.Gauge.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGaugesResponse();
        message.data = object.data?.map(e => gauge_1.Gauge.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGaugesResponse();
        message.data = object.data?.map(e => gauge_1.Gauge.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
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
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GaugesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/incentives/gauges-response",
            value: exports.GaugesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GaugesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.GaugesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.incentives.GaugesResponse",
            value: exports.GaugesResponse.encode(message).finish()
        };
    }
};
function createBaseActiveGaugesRequest() {
    return {
        pagination: undefined
    };
}
exports.ActiveGaugesRequest = {
    typeUrl: "/osmosis.incentives.ActiveGaugesRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseActiveGaugesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseActiveGaugesRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseActiveGaugesRequest();
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ActiveGaugesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/incentives/active-gauges-request",
            value: exports.ActiveGaugesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ActiveGaugesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.ActiveGaugesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.incentives.ActiveGaugesRequest",
            value: exports.ActiveGaugesRequest.encode(message).finish()
        };
    }
};
function createBaseActiveGaugesResponse() {
    return {
        data: [],
        pagination: undefined
    };
}
exports.ActiveGaugesResponse = {
    typeUrl: "/osmosis.incentives.ActiveGaugesResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.data) {
            gauge_1.Gauge.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseActiveGaugesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data.push(gauge_1.Gauge.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseActiveGaugesResponse();
        message.data = object.data?.map(e => gauge_1.Gauge.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseActiveGaugesResponse();
        message.data = object.data?.map(e => gauge_1.Gauge.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
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
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ActiveGaugesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/incentives/active-gauges-response",
            value: exports.ActiveGaugesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ActiveGaugesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.ActiveGaugesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.incentives.ActiveGaugesResponse",
            value: exports.ActiveGaugesResponse.encode(message).finish()
        };
    }
};
function createBaseActiveGaugesPerDenomRequest() {
    return {
        denom: "",
        pagination: undefined
    };
}
exports.ActiveGaugesPerDenomRequest = {
    typeUrl: "/osmosis.incentives.ActiveGaugesPerDenomRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseActiveGaugesPerDenomRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseActiveGaugesPerDenomRequest();
        message.denom = object.denom ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseActiveGaugesPerDenomRequest();
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom === "" ? undefined : message.denom;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ActiveGaugesPerDenomRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/incentives/active-gauges-per-denom-request",
            value: exports.ActiveGaugesPerDenomRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ActiveGaugesPerDenomRequest.decode(message.value);
    },
    toProto(message) {
        return exports.ActiveGaugesPerDenomRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.incentives.ActiveGaugesPerDenomRequest",
            value: exports.ActiveGaugesPerDenomRequest.encode(message).finish()
        };
    }
};
function createBaseActiveGaugesPerDenomResponse() {
    return {
        data: [],
        pagination: undefined
    };
}
exports.ActiveGaugesPerDenomResponse = {
    typeUrl: "/osmosis.incentives.ActiveGaugesPerDenomResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.data) {
            gauge_1.Gauge.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseActiveGaugesPerDenomResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data.push(gauge_1.Gauge.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseActiveGaugesPerDenomResponse();
        message.data = object.data?.map(e => gauge_1.Gauge.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseActiveGaugesPerDenomResponse();
        message.data = object.data?.map(e => gauge_1.Gauge.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
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
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ActiveGaugesPerDenomResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/incentives/active-gauges-per-denom-response",
            value: exports.ActiveGaugesPerDenomResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ActiveGaugesPerDenomResponse.decode(message.value);
    },
    toProto(message) {
        return exports.ActiveGaugesPerDenomResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.incentives.ActiveGaugesPerDenomResponse",
            value: exports.ActiveGaugesPerDenomResponse.encode(message).finish()
        };
    }
};
function createBaseUpcomingGaugesRequest() {
    return {
        pagination: undefined
    };
}
exports.UpcomingGaugesRequest = {
    typeUrl: "/osmosis.incentives.UpcomingGaugesRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpcomingGaugesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseUpcomingGaugesRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseUpcomingGaugesRequest();
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.UpcomingGaugesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/incentives/upcoming-gauges-request",
            value: exports.UpcomingGaugesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.UpcomingGaugesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.UpcomingGaugesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.incentives.UpcomingGaugesRequest",
            value: exports.UpcomingGaugesRequest.encode(message).finish()
        };
    }
};
function createBaseUpcomingGaugesResponse() {
    return {
        data: [],
        pagination: undefined
    };
}
exports.UpcomingGaugesResponse = {
    typeUrl: "/osmosis.incentives.UpcomingGaugesResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.data) {
            gauge_1.Gauge.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpcomingGaugesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data.push(gauge_1.Gauge.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseUpcomingGaugesResponse();
        message.data = object.data?.map(e => gauge_1.Gauge.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseUpcomingGaugesResponse();
        message.data = object.data?.map(e => gauge_1.Gauge.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
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
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.UpcomingGaugesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/incentives/upcoming-gauges-response",
            value: exports.UpcomingGaugesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.UpcomingGaugesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.UpcomingGaugesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.incentives.UpcomingGaugesResponse",
            value: exports.UpcomingGaugesResponse.encode(message).finish()
        };
    }
};
function createBaseUpcomingGaugesPerDenomRequest() {
    return {
        denom: "",
        pagination: undefined
    };
}
exports.UpcomingGaugesPerDenomRequest = {
    typeUrl: "/osmosis.incentives.UpcomingGaugesPerDenomRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpcomingGaugesPerDenomRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseUpcomingGaugesPerDenomRequest();
        message.denom = object.denom ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseUpcomingGaugesPerDenomRequest();
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom === "" ? undefined : message.denom;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.UpcomingGaugesPerDenomRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/incentives/upcoming-gauges-per-denom-request",
            value: exports.UpcomingGaugesPerDenomRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.UpcomingGaugesPerDenomRequest.decode(message.value);
    },
    toProto(message) {
        return exports.UpcomingGaugesPerDenomRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.incentives.UpcomingGaugesPerDenomRequest",
            value: exports.UpcomingGaugesPerDenomRequest.encode(message).finish()
        };
    }
};
function createBaseUpcomingGaugesPerDenomResponse() {
    return {
        upcomingGauges: [],
        pagination: undefined
    };
}
exports.UpcomingGaugesPerDenomResponse = {
    typeUrl: "/osmosis.incentives.UpcomingGaugesPerDenomResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.upcomingGauges) {
            gauge_1.Gauge.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpcomingGaugesPerDenomResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.upcomingGauges.push(gauge_1.Gauge.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseUpcomingGaugesPerDenomResponse();
        message.upcomingGauges = object.upcomingGauges?.map(e => gauge_1.Gauge.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseUpcomingGaugesPerDenomResponse();
        message.upcomingGauges = object.upcoming_gauges?.map(e => gauge_1.Gauge.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.upcomingGauges) {
            obj.upcoming_gauges = message.upcomingGauges.map(e => e ? gauge_1.Gauge.toAmino(e) : undefined);
        }
        else {
            obj.upcoming_gauges = message.upcomingGauges;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.UpcomingGaugesPerDenomResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/incentives/upcoming-gauges-per-denom-response",
            value: exports.UpcomingGaugesPerDenomResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.UpcomingGaugesPerDenomResponse.decode(message.value);
    },
    toProto(message) {
        return exports.UpcomingGaugesPerDenomResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.incentives.UpcomingGaugesPerDenomResponse",
            value: exports.UpcomingGaugesPerDenomResponse.encode(message).finish()
        };
    }
};
function createBaseRewardsEstRequest() {
    return {
        owner: "",
        lockIds: [],
        endEpoch: BigInt(0)
    };
}
exports.RewardsEstRequest = {
    typeUrl: "/osmosis.incentives.RewardsEstRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        writer.uint32(18).fork();
        for (const v of message.lockIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.endEpoch !== BigInt(0)) {
            writer.uint32(24).int64(message.endEpoch);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRewardsEstRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.lockIds.push(reader.uint64());
                        }
                    }
                    else {
                        message.lockIds.push(reader.uint64());
                    }
                    break;
                case 3:
                    message.endEpoch = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseRewardsEstRequest();
        message.owner = object.owner ?? "";
        message.lockIds = object.lockIds?.map(e => BigInt(e.toString())) || [];
        message.endEpoch = object.endEpoch !== undefined && object.endEpoch !== null ? BigInt(object.endEpoch.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseRewardsEstRequest();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        message.lockIds = object.lock_ids?.map(e => BigInt(e)) || [];
        if (object.end_epoch !== undefined && object.end_epoch !== null) {
            message.endEpoch = BigInt(object.end_epoch);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner === "" ? undefined : message.owner;
        if (message.lockIds) {
            obj.lock_ids = message.lockIds.map(e => e.toString());
        }
        else {
            obj.lock_ids = message.lockIds;
        }
        obj.end_epoch = message.endEpoch !== BigInt(0) ? (message.endEpoch?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RewardsEstRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/incentives/rewards-est-request",
            value: exports.RewardsEstRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.RewardsEstRequest.decode(message.value);
    },
    toProto(message) {
        return exports.RewardsEstRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.incentives.RewardsEstRequest",
            value: exports.RewardsEstRequest.encode(message).finish()
        };
    }
};
function createBaseRewardsEstResponse() {
    return {
        coins: []
    };
}
exports.RewardsEstResponse = {
    typeUrl: "/osmosis.incentives.RewardsEstResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.coins) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRewardsEstResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.coins.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseRewardsEstResponse();
        message.coins = object.coins?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseRewardsEstResponse();
        message.coins = object.coins?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.coins = message.coins;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RewardsEstResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/incentives/rewards-est-response",
            value: exports.RewardsEstResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.RewardsEstResponse.decode(message.value);
    },
    toProto(message) {
        return exports.RewardsEstResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.incentives.RewardsEstResponse",
            value: exports.RewardsEstResponse.encode(message).finish()
        };
    }
};
function createBaseQueryLockableDurationsRequest() {
    return {};
}
exports.QueryLockableDurationsRequest = {
    typeUrl: "/osmosis.incentives.QueryLockableDurationsRequest",
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
            type: "osmosis/incentives/query-lockable-durations-request",
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
            typeUrl: "/osmosis.incentives.QueryLockableDurationsRequest",
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
    typeUrl: "/osmosis.incentives.QueryLockableDurationsResponse",
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
            type: "osmosis/incentives/query-lockable-durations-response",
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
            typeUrl: "/osmosis.incentives.QueryLockableDurationsResponse",
            value: exports.QueryLockableDurationsResponse.encode(message).finish()
        };
    }
};
