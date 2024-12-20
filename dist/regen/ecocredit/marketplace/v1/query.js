"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SellOrderInfo = exports.QueryAllowedDenomsResponse = exports.QueryAllowedDenomsRequest = exports.QuerySellOrdersByAddressResponse = exports.QuerySellOrdersByAddressRequest = exports.QuerySellOrdersByBatchDenomResponse = exports.QuerySellOrdersByBatchDenomRequest = exports.QuerySellOrdersResponse = exports.QuerySellOrdersRequest = exports.QuerySellOrderResponse = exports.QuerySellOrderRequest = void 0;
//@ts-nocheck
const pagination_1 = require("../../../../cosmos/base/query/v1beta1/pagination");
const state_1 = require("./state");
const timestamp_1 = require("../../../../google/protobuf/timestamp");
const binary_1 = require("../../../../binary");
const helpers_1 = require("../../../../helpers");
function createBaseQuerySellOrderRequest() {
    return {
        sellOrderId: BigInt(0)
    };
}
exports.QuerySellOrderRequest = {
    typeUrl: "/regen.ecocredit.marketplace.v1.QuerySellOrderRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sellOrderId !== BigInt(0)) {
            writer.uint32(8).uint64(message.sellOrderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySellOrderRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sellOrderId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQuerySellOrderRequest();
        message.sellOrderId = object.sellOrderId !== undefined && object.sellOrderId !== null ? BigInt(object.sellOrderId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySellOrderRequest();
        if (object.sell_order_id !== undefined && object.sell_order_id !== null) {
            message.sellOrderId = BigInt(object.sell_order_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sell_order_id = message.sellOrderId !== BigInt(0) ? (message.sellOrderId?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QuerySellOrderRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QuerySellOrderRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySellOrderRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.marketplace.v1.QuerySellOrderRequest",
            value: exports.QuerySellOrderRequest.encode(message).finish()
        };
    }
};
function createBaseQuerySellOrderResponse() {
    return {
        sellOrder: undefined
    };
}
exports.QuerySellOrderResponse = {
    typeUrl: "/regen.ecocredit.marketplace.v1.QuerySellOrderResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sellOrder !== undefined) {
            exports.SellOrderInfo.encode(message.sellOrder, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySellOrderResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sellOrder = exports.SellOrderInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQuerySellOrderResponse();
        message.sellOrder = object.sellOrder !== undefined && object.sellOrder !== null ? exports.SellOrderInfo.fromPartial(object.sellOrder) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySellOrderResponse();
        if (object.sell_order !== undefined && object.sell_order !== null) {
            message.sellOrder = exports.SellOrderInfo.fromAmino(object.sell_order);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sell_order = message.sellOrder ? exports.SellOrderInfo.toAmino(message.sellOrder) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QuerySellOrderResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QuerySellOrderResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySellOrderResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.marketplace.v1.QuerySellOrderResponse",
            value: exports.QuerySellOrderResponse.encode(message).finish()
        };
    }
};
function createBaseQuerySellOrdersRequest() {
    return {
        pagination: undefined
    };
}
exports.QuerySellOrdersRequest = {
    typeUrl: "/regen.ecocredit.marketplace.v1.QuerySellOrdersRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySellOrdersRequest();
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
        const message = createBaseQuerySellOrdersRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySellOrdersRequest();
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
        return exports.QuerySellOrdersRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QuerySellOrdersRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySellOrdersRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.marketplace.v1.QuerySellOrdersRequest",
            value: exports.QuerySellOrdersRequest.encode(message).finish()
        };
    }
};
function createBaseQuerySellOrdersResponse() {
    return {
        sellOrders: [],
        pagination: undefined
    };
}
exports.QuerySellOrdersResponse = {
    typeUrl: "/regen.ecocredit.marketplace.v1.QuerySellOrdersResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.sellOrders) {
            exports.SellOrderInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySellOrdersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sellOrders.push(exports.SellOrderInfo.decode(reader, reader.uint32()));
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
        const message = createBaseQuerySellOrdersResponse();
        message.sellOrders = object.sellOrders?.map(e => exports.SellOrderInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySellOrdersResponse();
        message.sellOrders = object.sell_orders?.map(e => exports.SellOrderInfo.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.sellOrders) {
            obj.sell_orders = message.sellOrders.map(e => e ? exports.SellOrderInfo.toAmino(e) : undefined);
        }
        else {
            obj.sell_orders = message.sellOrders;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QuerySellOrdersResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QuerySellOrdersResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySellOrdersResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.marketplace.v1.QuerySellOrdersResponse",
            value: exports.QuerySellOrdersResponse.encode(message).finish()
        };
    }
};
function createBaseQuerySellOrdersByBatchDenomRequest() {
    return {
        batchDenom: "",
        pagination: undefined
    };
}
exports.QuerySellOrdersByBatchDenomRequest = {
    typeUrl: "/regen.ecocredit.marketplace.v1.QuerySellOrdersByBatchDenomRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.batchDenom !== "") {
            writer.uint32(10).string(message.batchDenom);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySellOrdersByBatchDenomRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.batchDenom = reader.string();
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
        const message = createBaseQuerySellOrdersByBatchDenomRequest();
        message.batchDenom = object.batchDenom ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySellOrdersByBatchDenomRequest();
        if (object.batch_denom !== undefined && object.batch_denom !== null) {
            message.batchDenom = object.batch_denom;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QuerySellOrdersByBatchDenomRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QuerySellOrdersByBatchDenomRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySellOrdersByBatchDenomRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.marketplace.v1.QuerySellOrdersByBatchDenomRequest",
            value: exports.QuerySellOrdersByBatchDenomRequest.encode(message).finish()
        };
    }
};
function createBaseQuerySellOrdersByBatchDenomResponse() {
    return {
        sellOrders: [],
        pagination: undefined
    };
}
exports.QuerySellOrdersByBatchDenomResponse = {
    typeUrl: "/regen.ecocredit.marketplace.v1.QuerySellOrdersByBatchDenomResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.sellOrders) {
            exports.SellOrderInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySellOrdersByBatchDenomResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sellOrders.push(exports.SellOrderInfo.decode(reader, reader.uint32()));
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
        const message = createBaseQuerySellOrdersByBatchDenomResponse();
        message.sellOrders = object.sellOrders?.map(e => exports.SellOrderInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySellOrdersByBatchDenomResponse();
        message.sellOrders = object.sell_orders?.map(e => exports.SellOrderInfo.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.sellOrders) {
            obj.sell_orders = message.sellOrders.map(e => e ? exports.SellOrderInfo.toAmino(e) : undefined);
        }
        else {
            obj.sell_orders = message.sellOrders;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QuerySellOrdersByBatchDenomResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QuerySellOrdersByBatchDenomResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySellOrdersByBatchDenomResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.marketplace.v1.QuerySellOrdersByBatchDenomResponse",
            value: exports.QuerySellOrdersByBatchDenomResponse.encode(message).finish()
        };
    }
};
function createBaseQuerySellOrdersByAddressRequest() {
    return {
        address: "",
        pagination: undefined
    };
}
exports.QuerySellOrdersByAddressRequest = {
    typeUrl: "/regen.ecocredit.marketplace.v1.QuerySellOrdersByAddressRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySellOrdersByAddressRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
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
        const message = createBaseQuerySellOrdersByAddressRequest();
        message.address = object.address ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySellOrdersByAddressRequest();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QuerySellOrdersByAddressRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QuerySellOrdersByAddressRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySellOrdersByAddressRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.marketplace.v1.QuerySellOrdersByAddressRequest",
            value: exports.QuerySellOrdersByAddressRequest.encode(message).finish()
        };
    }
};
function createBaseQuerySellOrdersByAddressResponse() {
    return {
        sellOrders: [],
        pagination: undefined
    };
}
exports.QuerySellOrdersByAddressResponse = {
    typeUrl: "/regen.ecocredit.marketplace.v1.QuerySellOrdersByAddressResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.sellOrders) {
            exports.SellOrderInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySellOrdersByAddressResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sellOrders.push(exports.SellOrderInfo.decode(reader, reader.uint32()));
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
        const message = createBaseQuerySellOrdersByAddressResponse();
        message.sellOrders = object.sellOrders?.map(e => exports.SellOrderInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySellOrdersByAddressResponse();
        message.sellOrders = object.sell_orders?.map(e => exports.SellOrderInfo.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.sellOrders) {
            obj.sell_orders = message.sellOrders.map(e => e ? exports.SellOrderInfo.toAmino(e) : undefined);
        }
        else {
            obj.sell_orders = message.sellOrders;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QuerySellOrdersByAddressResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QuerySellOrdersByAddressResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySellOrdersByAddressResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.marketplace.v1.QuerySellOrdersByAddressResponse",
            value: exports.QuerySellOrdersByAddressResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAllowedDenomsRequest() {
    return {
        pagination: undefined
    };
}
exports.QueryAllowedDenomsRequest = {
    typeUrl: "/regen.ecocredit.marketplace.v1.QueryAllowedDenomsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllowedDenomsRequest();
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
        const message = createBaseQueryAllowedDenomsRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAllowedDenomsRequest();
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
        return exports.QueryAllowedDenomsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAllowedDenomsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAllowedDenomsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.marketplace.v1.QueryAllowedDenomsRequest",
            value: exports.QueryAllowedDenomsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAllowedDenomsResponse() {
    return {
        allowedDenoms: [],
        pagination: undefined
    };
}
exports.QueryAllowedDenomsResponse = {
    typeUrl: "/regen.ecocredit.marketplace.v1.QueryAllowedDenomsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.allowedDenoms) {
            state_1.AllowedDenom.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllowedDenomsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.allowedDenoms.push(state_1.AllowedDenom.decode(reader, reader.uint32()));
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
        const message = createBaseQueryAllowedDenomsResponse();
        message.allowedDenoms = object.allowedDenoms?.map(e => state_1.AllowedDenom.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAllowedDenomsResponse();
        message.allowedDenoms = object.allowed_denoms?.map(e => state_1.AllowedDenom.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.allowedDenoms) {
            obj.allowed_denoms = message.allowedDenoms.map(e => e ? state_1.AllowedDenom.toAmino(e) : undefined);
        }
        else {
            obj.allowed_denoms = message.allowedDenoms;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAllowedDenomsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAllowedDenomsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAllowedDenomsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.marketplace.v1.QueryAllowedDenomsResponse",
            value: exports.QueryAllowedDenomsResponse.encode(message).finish()
        };
    }
};
function createBaseSellOrderInfo() {
    return {
        id: BigInt(0),
        seller: "",
        batchDenom: "",
        quantity: "",
        askDenom: "",
        askPrice: "",
        disableAutoRetire: false,
        expiration: undefined
    };
}
exports.SellOrderInfo = {
    typeUrl: "/regen.ecocredit.marketplace.v1.SellOrderInfo",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.seller !== "") {
            writer.uint32(18).string(message.seller);
        }
        if (message.batchDenom !== "") {
            writer.uint32(26).string(message.batchDenom);
        }
        if (message.quantity !== "") {
            writer.uint32(34).string(message.quantity);
        }
        if (message.askDenom !== "") {
            writer.uint32(42).string(message.askDenom);
        }
        if (message.askPrice !== "") {
            writer.uint32(50).string(message.askPrice);
        }
        if (message.disableAutoRetire === true) {
            writer.uint32(56).bool(message.disableAutoRetire);
        }
        if (message.expiration !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.expiration), writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSellOrderInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.seller = reader.string();
                    break;
                case 3:
                    message.batchDenom = reader.string();
                    break;
                case 4:
                    message.quantity = reader.string();
                    break;
                case 5:
                    message.askDenom = reader.string();
                    break;
                case 6:
                    message.askPrice = reader.string();
                    break;
                case 7:
                    message.disableAutoRetire = reader.bool();
                    break;
                case 9:
                    message.expiration = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSellOrderInfo();
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        message.seller = object.seller ?? "";
        message.batchDenom = object.batchDenom ?? "";
        message.quantity = object.quantity ?? "";
        message.askDenom = object.askDenom ?? "";
        message.askPrice = object.askPrice ?? "";
        message.disableAutoRetire = object.disableAutoRetire ?? false;
        message.expiration = object.expiration ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseSellOrderInfo();
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id);
        }
        if (object.seller !== undefined && object.seller !== null) {
            message.seller = object.seller;
        }
        if (object.batch_denom !== undefined && object.batch_denom !== null) {
            message.batchDenom = object.batch_denom;
        }
        if (object.quantity !== undefined && object.quantity !== null) {
            message.quantity = object.quantity;
        }
        if (object.ask_denom !== undefined && object.ask_denom !== null) {
            message.askDenom = object.ask_denom;
        }
        if (object.ask_price !== undefined && object.ask_price !== null) {
            message.askPrice = object.ask_price;
        }
        if (object.disable_auto_retire !== undefined && object.disable_auto_retire !== null) {
            message.disableAutoRetire = object.disable_auto_retire;
        }
        if (object.expiration !== undefined && object.expiration !== null) {
            message.expiration = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.expiration));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id !== BigInt(0) ? (message.id?.toString)() : undefined;
        obj.seller = message.seller === "" ? undefined : message.seller;
        obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
        obj.quantity = message.quantity === "" ? undefined : message.quantity;
        obj.ask_denom = message.askDenom === "" ? undefined : message.askDenom;
        obj.ask_price = message.askPrice === "" ? undefined : message.askPrice;
        obj.disable_auto_retire = message.disableAutoRetire === false ? undefined : message.disableAutoRetire;
        obj.expiration = message.expiration ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.expiration)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SellOrderInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.SellOrderInfo.decode(message.value);
    },
    toProto(message) {
        return exports.SellOrderInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.marketplace.v1.SellOrderInfo",
            value: exports.SellOrderInfo.encode(message).finish()
        };
    }
};
