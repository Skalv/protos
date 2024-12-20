//@ts-nocheck
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Gauge } from "./gauge";
import { Duration } from "../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../binary";
function createBaseModuleToDistributeCoinsRequest() {
    return {};
}
export const ModuleToDistributeCoinsRequest = {
    typeUrl: "/osmosis.incentives.ModuleToDistributeCoinsRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return ModuleToDistributeCoinsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/incentives/module-to-distribute-coins-request",
            value: ModuleToDistributeCoinsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ModuleToDistributeCoinsRequest.decode(message.value);
    },
    toProto(message) {
        return ModuleToDistributeCoinsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.incentives.ModuleToDistributeCoinsRequest",
            value: ModuleToDistributeCoinsRequest.encode(message).finish()
        };
    }
};
function createBaseModuleToDistributeCoinsResponse() {
    return {
        coins: []
    };
}
export const ModuleToDistributeCoinsResponse = {
    typeUrl: "/osmosis.incentives.ModuleToDistributeCoinsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.coins) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModuleToDistributeCoinsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.coins.push(Coin.decode(reader, reader.uint32()));
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
        message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseModuleToDistributeCoinsResponse();
        message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.coins = message.coins;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ModuleToDistributeCoinsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/incentives/module-to-distribute-coins-response",
            value: ModuleToDistributeCoinsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ModuleToDistributeCoinsResponse.decode(message.value);
    },
    toProto(message) {
        return ModuleToDistributeCoinsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.incentives.ModuleToDistributeCoinsResponse",
            value: ModuleToDistributeCoinsResponse.encode(message).finish()
        };
    }
};
function createBaseGaugeByIDRequest() {
    return {
        id: BigInt(0)
    };
}
export const GaugeByIDRequest = {
    typeUrl: "/osmosis.incentives.GaugeByIDRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return GaugeByIDRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/incentives/gauge-by-id-request",
            value: GaugeByIDRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GaugeByIDRequest.decode(message.value);
    },
    toProto(message) {
        return GaugeByIDRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.incentives.GaugeByIDRequest",
            value: GaugeByIDRequest.encode(message).finish()
        };
    }
};
function createBaseGaugeByIDResponse() {
    return {
        gauge: undefined
    };
}
export const GaugeByIDResponse = {
    typeUrl: "/osmosis.incentives.GaugeByIDResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.gauge !== undefined) {
            Gauge.encode(message.gauge, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGaugeByIDResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gauge = Gauge.decode(reader, reader.uint32());
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
        message.gauge = object.gauge !== undefined && object.gauge !== null ? Gauge.fromPartial(object.gauge) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGaugeByIDResponse();
        if (object.gauge !== undefined && object.gauge !== null) {
            message.gauge = Gauge.fromAmino(object.gauge);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.gauge = message.gauge ? Gauge.toAmino(message.gauge) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GaugeByIDResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/incentives/gauge-by-id-response",
            value: GaugeByIDResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GaugeByIDResponse.decode(message.value);
    },
    toProto(message) {
        return GaugeByIDResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.incentives.GaugeByIDResponse",
            value: GaugeByIDResponse.encode(message).finish()
        };
    }
};
function createBaseGaugesRequest() {
    return {
        pagination: undefined
    };
}
export const GaugesRequest = {
    typeUrl: "/osmosis.incentives.GaugesRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGaugesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGaugesRequest();
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GaugesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/incentives/gauges-request",
            value: GaugesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GaugesRequest.decode(message.value);
    },
    toProto(message) {
        return GaugesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.incentives.GaugesRequest",
            value: GaugesRequest.encode(message).finish()
        };
    }
};
function createBaseGaugesResponse() {
    return {
        data: [],
        pagination: undefined
    };
}
export const GaugesResponse = {
    typeUrl: "/osmosis.incentives.GaugesResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.data) {
            Gauge.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGaugesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data.push(Gauge.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
        message.data = object.data?.map(e => Gauge.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGaugesResponse();
        message.data = object.data?.map(e => Gauge.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
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
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GaugesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/incentives/gauges-response",
            value: GaugesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GaugesResponse.decode(message.value);
    },
    toProto(message) {
        return GaugesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.incentives.GaugesResponse",
            value: GaugesResponse.encode(message).finish()
        };
    }
};
function createBaseActiveGaugesRequest() {
    return {
        pagination: undefined
    };
}
export const ActiveGaugesRequest = {
    typeUrl: "/osmosis.incentives.ActiveGaugesRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseActiveGaugesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseActiveGaugesRequest();
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ActiveGaugesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/incentives/active-gauges-request",
            value: ActiveGaugesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ActiveGaugesRequest.decode(message.value);
    },
    toProto(message) {
        return ActiveGaugesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.incentives.ActiveGaugesRequest",
            value: ActiveGaugesRequest.encode(message).finish()
        };
    }
};
function createBaseActiveGaugesResponse() {
    return {
        data: [],
        pagination: undefined
    };
}
export const ActiveGaugesResponse = {
    typeUrl: "/osmosis.incentives.ActiveGaugesResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.data) {
            Gauge.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseActiveGaugesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data.push(Gauge.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
        message.data = object.data?.map(e => Gauge.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseActiveGaugesResponse();
        message.data = object.data?.map(e => Gauge.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
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
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ActiveGaugesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/incentives/active-gauges-response",
            value: ActiveGaugesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ActiveGaugesResponse.decode(message.value);
    },
    toProto(message) {
        return ActiveGaugesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.incentives.ActiveGaugesResponse",
            value: ActiveGaugesResponse.encode(message).finish()
        };
    }
};
function createBaseActiveGaugesPerDenomRequest() {
    return {
        denom: "",
        pagination: undefined
    };
}
export const ActiveGaugesPerDenomRequest = {
    typeUrl: "/osmosis.incentives.ActiveGaugesPerDenomRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseActiveGaugesPerDenomRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseActiveGaugesPerDenomRequest();
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom === "" ? undefined : message.denom;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ActiveGaugesPerDenomRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/incentives/active-gauges-per-denom-request",
            value: ActiveGaugesPerDenomRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ActiveGaugesPerDenomRequest.decode(message.value);
    },
    toProto(message) {
        return ActiveGaugesPerDenomRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.incentives.ActiveGaugesPerDenomRequest",
            value: ActiveGaugesPerDenomRequest.encode(message).finish()
        };
    }
};
function createBaseActiveGaugesPerDenomResponse() {
    return {
        data: [],
        pagination: undefined
    };
}
export const ActiveGaugesPerDenomResponse = {
    typeUrl: "/osmosis.incentives.ActiveGaugesPerDenomResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.data) {
            Gauge.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseActiveGaugesPerDenomResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data.push(Gauge.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
        message.data = object.data?.map(e => Gauge.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseActiveGaugesPerDenomResponse();
        message.data = object.data?.map(e => Gauge.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
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
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ActiveGaugesPerDenomResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/incentives/active-gauges-per-denom-response",
            value: ActiveGaugesPerDenomResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ActiveGaugesPerDenomResponse.decode(message.value);
    },
    toProto(message) {
        return ActiveGaugesPerDenomResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.incentives.ActiveGaugesPerDenomResponse",
            value: ActiveGaugesPerDenomResponse.encode(message).finish()
        };
    }
};
function createBaseUpcomingGaugesRequest() {
    return {
        pagination: undefined
    };
}
export const UpcomingGaugesRequest = {
    typeUrl: "/osmosis.incentives.UpcomingGaugesRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpcomingGaugesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseUpcomingGaugesRequest();
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return UpcomingGaugesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/incentives/upcoming-gauges-request",
            value: UpcomingGaugesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return UpcomingGaugesRequest.decode(message.value);
    },
    toProto(message) {
        return UpcomingGaugesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.incentives.UpcomingGaugesRequest",
            value: UpcomingGaugesRequest.encode(message).finish()
        };
    }
};
function createBaseUpcomingGaugesResponse() {
    return {
        data: [],
        pagination: undefined
    };
}
export const UpcomingGaugesResponse = {
    typeUrl: "/osmosis.incentives.UpcomingGaugesResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.data) {
            Gauge.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpcomingGaugesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data.push(Gauge.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
        message.data = object.data?.map(e => Gauge.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseUpcomingGaugesResponse();
        message.data = object.data?.map(e => Gauge.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
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
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return UpcomingGaugesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/incentives/upcoming-gauges-response",
            value: UpcomingGaugesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return UpcomingGaugesResponse.decode(message.value);
    },
    toProto(message) {
        return UpcomingGaugesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.incentives.UpcomingGaugesResponse",
            value: UpcomingGaugesResponse.encode(message).finish()
        };
    }
};
function createBaseUpcomingGaugesPerDenomRequest() {
    return {
        denom: "",
        pagination: undefined
    };
}
export const UpcomingGaugesPerDenomRequest = {
    typeUrl: "/osmosis.incentives.UpcomingGaugesPerDenomRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpcomingGaugesPerDenomRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseUpcomingGaugesPerDenomRequest();
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom === "" ? undefined : message.denom;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return UpcomingGaugesPerDenomRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/incentives/upcoming-gauges-per-denom-request",
            value: UpcomingGaugesPerDenomRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return UpcomingGaugesPerDenomRequest.decode(message.value);
    },
    toProto(message) {
        return UpcomingGaugesPerDenomRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.incentives.UpcomingGaugesPerDenomRequest",
            value: UpcomingGaugesPerDenomRequest.encode(message).finish()
        };
    }
};
function createBaseUpcomingGaugesPerDenomResponse() {
    return {
        upcomingGauges: [],
        pagination: undefined
    };
}
export const UpcomingGaugesPerDenomResponse = {
    typeUrl: "/osmosis.incentives.UpcomingGaugesPerDenomResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.upcomingGauges) {
            Gauge.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpcomingGaugesPerDenomResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.upcomingGauges.push(Gauge.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
        message.upcomingGauges = object.upcomingGauges?.map(e => Gauge.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseUpcomingGaugesPerDenomResponse();
        message.upcomingGauges = object.upcoming_gauges?.map(e => Gauge.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.upcomingGauges) {
            obj.upcoming_gauges = message.upcomingGauges.map(e => e ? Gauge.toAmino(e) : undefined);
        }
        else {
            obj.upcoming_gauges = message.upcomingGauges;
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return UpcomingGaugesPerDenomResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/incentives/upcoming-gauges-per-denom-response",
            value: UpcomingGaugesPerDenomResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return UpcomingGaugesPerDenomResponse.decode(message.value);
    },
    toProto(message) {
        return UpcomingGaugesPerDenomResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.incentives.UpcomingGaugesPerDenomResponse",
            value: UpcomingGaugesPerDenomResponse.encode(message).finish()
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
export const RewardsEstRequest = {
    typeUrl: "/osmosis.incentives.RewardsEstRequest",
    encode(message, writer = BinaryWriter.create()) {
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return RewardsEstRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/incentives/rewards-est-request",
            value: RewardsEstRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return RewardsEstRequest.decode(message.value);
    },
    toProto(message) {
        return RewardsEstRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.incentives.RewardsEstRequest",
            value: RewardsEstRequest.encode(message).finish()
        };
    }
};
function createBaseRewardsEstResponse() {
    return {
        coins: []
    };
}
export const RewardsEstResponse = {
    typeUrl: "/osmosis.incentives.RewardsEstResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.coins) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRewardsEstResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.coins.push(Coin.decode(reader, reader.uint32()));
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
        message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseRewardsEstResponse();
        message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.coins = message.coins;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return RewardsEstResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/incentives/rewards-est-response",
            value: RewardsEstResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return RewardsEstResponse.decode(message.value);
    },
    toProto(message) {
        return RewardsEstResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.incentives.RewardsEstResponse",
            value: RewardsEstResponse.encode(message).finish()
        };
    }
};
function createBaseQueryLockableDurationsRequest() {
    return {};
}
export const QueryLockableDurationsRequest = {
    typeUrl: "/osmosis.incentives.QueryLockableDurationsRequest",
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
            type: "osmosis/incentives/query-lockable-durations-request",
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
            typeUrl: "/osmosis.incentives.QueryLockableDurationsRequest",
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
    typeUrl: "/osmosis.incentives.QueryLockableDurationsResponse",
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
            type: "osmosis/incentives/query-lockable-durations-response",
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
            typeUrl: "/osmosis.incentives.QueryLockableDurationsResponse",
            value: QueryLockableDurationsResponse.encode(message).finish()
        };
    }
};
