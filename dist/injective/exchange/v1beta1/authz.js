"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatchUpdateOrdersAuthz = exports.BatchCancelDerivativeOrdersAuthz = exports.CancelDerivativeOrderAuthz = exports.BatchCreateDerivativeLimitOrdersAuthz = exports.CreateDerivativeMarketOrderAuthz = exports.CreateDerivativeLimitOrderAuthz = exports.BatchCancelSpotOrdersAuthz = exports.CancelSpotOrderAuthz = exports.BatchCreateSpotLimitOrdersAuthz = exports.CreateSpotMarketOrderAuthz = exports.CreateSpotLimitOrderAuthz = void 0;
//@ts-nocheck
const binary_1 = require("../../../binary");
function createBaseCreateSpotLimitOrderAuthz() {
    return {
        $typeUrl: "/injective.exchange.v1beta1.CreateSpotLimitOrderAuthz",
        subaccountId: "",
        marketIds: []
    };
}
exports.CreateSpotLimitOrderAuthz = {
    typeUrl: "/injective.exchange.v1beta1.CreateSpotLimitOrderAuthz",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        for (const v of message.marketIds) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateSpotLimitOrderAuthz();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subaccountId = reader.string();
                    break;
                case 2:
                    message.marketIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCreateSpotLimitOrderAuthz();
        message.subaccountId = object.subaccountId ?? "";
        message.marketIds = object.marketIds?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseCreateSpotLimitOrderAuthz();
        if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
            message.subaccountId = object.subaccount_id;
        }
        message.marketIds = object.market_ids?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
        if (message.marketIds) {
            obj.market_ids = message.marketIds.map(e => e);
        }
        else {
            obj.market_ids = message.marketIds;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CreateSpotLimitOrderAuthz.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.CreateSpotLimitOrderAuthz.decode(message.value);
    },
    toProto(message) {
        return exports.CreateSpotLimitOrderAuthz.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.CreateSpotLimitOrderAuthz",
            value: exports.CreateSpotLimitOrderAuthz.encode(message).finish()
        };
    }
};
function createBaseCreateSpotMarketOrderAuthz() {
    return {
        $typeUrl: "/injective.exchange.v1beta1.CreateSpotMarketOrderAuthz",
        subaccountId: "",
        marketIds: []
    };
}
exports.CreateSpotMarketOrderAuthz = {
    typeUrl: "/injective.exchange.v1beta1.CreateSpotMarketOrderAuthz",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        for (const v of message.marketIds) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateSpotMarketOrderAuthz();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subaccountId = reader.string();
                    break;
                case 2:
                    message.marketIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCreateSpotMarketOrderAuthz();
        message.subaccountId = object.subaccountId ?? "";
        message.marketIds = object.marketIds?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseCreateSpotMarketOrderAuthz();
        if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
            message.subaccountId = object.subaccount_id;
        }
        message.marketIds = object.market_ids?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
        if (message.marketIds) {
            obj.market_ids = message.marketIds.map(e => e);
        }
        else {
            obj.market_ids = message.marketIds;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CreateSpotMarketOrderAuthz.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.CreateSpotMarketOrderAuthz.decode(message.value);
    },
    toProto(message) {
        return exports.CreateSpotMarketOrderAuthz.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.CreateSpotMarketOrderAuthz",
            value: exports.CreateSpotMarketOrderAuthz.encode(message).finish()
        };
    }
};
function createBaseBatchCreateSpotLimitOrdersAuthz() {
    return {
        $typeUrl: "/injective.exchange.v1beta1.BatchCreateSpotLimitOrdersAuthz",
        subaccountId: "",
        marketIds: []
    };
}
exports.BatchCreateSpotLimitOrdersAuthz = {
    typeUrl: "/injective.exchange.v1beta1.BatchCreateSpotLimitOrdersAuthz",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        for (const v of message.marketIds) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBatchCreateSpotLimitOrdersAuthz();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subaccountId = reader.string();
                    break;
                case 2:
                    message.marketIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBatchCreateSpotLimitOrdersAuthz();
        message.subaccountId = object.subaccountId ?? "";
        message.marketIds = object.marketIds?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseBatchCreateSpotLimitOrdersAuthz();
        if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
            message.subaccountId = object.subaccount_id;
        }
        message.marketIds = object.market_ids?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
        if (message.marketIds) {
            obj.market_ids = message.marketIds.map(e => e);
        }
        else {
            obj.market_ids = message.marketIds;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.BatchCreateSpotLimitOrdersAuthz.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.BatchCreateSpotLimitOrdersAuthz.decode(message.value);
    },
    toProto(message) {
        return exports.BatchCreateSpotLimitOrdersAuthz.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.BatchCreateSpotLimitOrdersAuthz",
            value: exports.BatchCreateSpotLimitOrdersAuthz.encode(message).finish()
        };
    }
};
function createBaseCancelSpotOrderAuthz() {
    return {
        $typeUrl: "/injective.exchange.v1beta1.CancelSpotOrderAuthz",
        subaccountId: "",
        marketIds: []
    };
}
exports.CancelSpotOrderAuthz = {
    typeUrl: "/injective.exchange.v1beta1.CancelSpotOrderAuthz",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        for (const v of message.marketIds) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCancelSpotOrderAuthz();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subaccountId = reader.string();
                    break;
                case 2:
                    message.marketIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCancelSpotOrderAuthz();
        message.subaccountId = object.subaccountId ?? "";
        message.marketIds = object.marketIds?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseCancelSpotOrderAuthz();
        if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
            message.subaccountId = object.subaccount_id;
        }
        message.marketIds = object.market_ids?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
        if (message.marketIds) {
            obj.market_ids = message.marketIds.map(e => e);
        }
        else {
            obj.market_ids = message.marketIds;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CancelSpotOrderAuthz.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.CancelSpotOrderAuthz.decode(message.value);
    },
    toProto(message) {
        return exports.CancelSpotOrderAuthz.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.CancelSpotOrderAuthz",
            value: exports.CancelSpotOrderAuthz.encode(message).finish()
        };
    }
};
function createBaseBatchCancelSpotOrdersAuthz() {
    return {
        $typeUrl: "/injective.exchange.v1beta1.BatchCancelSpotOrdersAuthz",
        subaccountId: "",
        marketIds: []
    };
}
exports.BatchCancelSpotOrdersAuthz = {
    typeUrl: "/injective.exchange.v1beta1.BatchCancelSpotOrdersAuthz",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        for (const v of message.marketIds) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBatchCancelSpotOrdersAuthz();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subaccountId = reader.string();
                    break;
                case 2:
                    message.marketIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBatchCancelSpotOrdersAuthz();
        message.subaccountId = object.subaccountId ?? "";
        message.marketIds = object.marketIds?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseBatchCancelSpotOrdersAuthz();
        if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
            message.subaccountId = object.subaccount_id;
        }
        message.marketIds = object.market_ids?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
        if (message.marketIds) {
            obj.market_ids = message.marketIds.map(e => e);
        }
        else {
            obj.market_ids = message.marketIds;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.BatchCancelSpotOrdersAuthz.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.BatchCancelSpotOrdersAuthz.decode(message.value);
    },
    toProto(message) {
        return exports.BatchCancelSpotOrdersAuthz.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.BatchCancelSpotOrdersAuthz",
            value: exports.BatchCancelSpotOrdersAuthz.encode(message).finish()
        };
    }
};
function createBaseCreateDerivativeLimitOrderAuthz() {
    return {
        $typeUrl: "/injective.exchange.v1beta1.CreateDerivativeLimitOrderAuthz",
        subaccountId: "",
        marketIds: []
    };
}
exports.CreateDerivativeLimitOrderAuthz = {
    typeUrl: "/injective.exchange.v1beta1.CreateDerivativeLimitOrderAuthz",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        for (const v of message.marketIds) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateDerivativeLimitOrderAuthz();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subaccountId = reader.string();
                    break;
                case 2:
                    message.marketIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCreateDerivativeLimitOrderAuthz();
        message.subaccountId = object.subaccountId ?? "";
        message.marketIds = object.marketIds?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseCreateDerivativeLimitOrderAuthz();
        if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
            message.subaccountId = object.subaccount_id;
        }
        message.marketIds = object.market_ids?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
        if (message.marketIds) {
            obj.market_ids = message.marketIds.map(e => e);
        }
        else {
            obj.market_ids = message.marketIds;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CreateDerivativeLimitOrderAuthz.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.CreateDerivativeLimitOrderAuthz.decode(message.value);
    },
    toProto(message) {
        return exports.CreateDerivativeLimitOrderAuthz.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.CreateDerivativeLimitOrderAuthz",
            value: exports.CreateDerivativeLimitOrderAuthz.encode(message).finish()
        };
    }
};
function createBaseCreateDerivativeMarketOrderAuthz() {
    return {
        $typeUrl: "/injective.exchange.v1beta1.CreateDerivativeMarketOrderAuthz",
        subaccountId: "",
        marketIds: []
    };
}
exports.CreateDerivativeMarketOrderAuthz = {
    typeUrl: "/injective.exchange.v1beta1.CreateDerivativeMarketOrderAuthz",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        for (const v of message.marketIds) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateDerivativeMarketOrderAuthz();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subaccountId = reader.string();
                    break;
                case 2:
                    message.marketIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCreateDerivativeMarketOrderAuthz();
        message.subaccountId = object.subaccountId ?? "";
        message.marketIds = object.marketIds?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseCreateDerivativeMarketOrderAuthz();
        if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
            message.subaccountId = object.subaccount_id;
        }
        message.marketIds = object.market_ids?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
        if (message.marketIds) {
            obj.market_ids = message.marketIds.map(e => e);
        }
        else {
            obj.market_ids = message.marketIds;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CreateDerivativeMarketOrderAuthz.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.CreateDerivativeMarketOrderAuthz.decode(message.value);
    },
    toProto(message) {
        return exports.CreateDerivativeMarketOrderAuthz.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.CreateDerivativeMarketOrderAuthz",
            value: exports.CreateDerivativeMarketOrderAuthz.encode(message).finish()
        };
    }
};
function createBaseBatchCreateDerivativeLimitOrdersAuthz() {
    return {
        $typeUrl: "/injective.exchange.v1beta1.BatchCreateDerivativeLimitOrdersAuthz",
        subaccountId: "",
        marketIds: []
    };
}
exports.BatchCreateDerivativeLimitOrdersAuthz = {
    typeUrl: "/injective.exchange.v1beta1.BatchCreateDerivativeLimitOrdersAuthz",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        for (const v of message.marketIds) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBatchCreateDerivativeLimitOrdersAuthz();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subaccountId = reader.string();
                    break;
                case 2:
                    message.marketIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBatchCreateDerivativeLimitOrdersAuthz();
        message.subaccountId = object.subaccountId ?? "";
        message.marketIds = object.marketIds?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseBatchCreateDerivativeLimitOrdersAuthz();
        if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
            message.subaccountId = object.subaccount_id;
        }
        message.marketIds = object.market_ids?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
        if (message.marketIds) {
            obj.market_ids = message.marketIds.map(e => e);
        }
        else {
            obj.market_ids = message.marketIds;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.BatchCreateDerivativeLimitOrdersAuthz.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.BatchCreateDerivativeLimitOrdersAuthz.decode(message.value);
    },
    toProto(message) {
        return exports.BatchCreateDerivativeLimitOrdersAuthz.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.BatchCreateDerivativeLimitOrdersAuthz",
            value: exports.BatchCreateDerivativeLimitOrdersAuthz.encode(message).finish()
        };
    }
};
function createBaseCancelDerivativeOrderAuthz() {
    return {
        $typeUrl: "/injective.exchange.v1beta1.CancelDerivativeOrderAuthz",
        subaccountId: "",
        marketIds: []
    };
}
exports.CancelDerivativeOrderAuthz = {
    typeUrl: "/injective.exchange.v1beta1.CancelDerivativeOrderAuthz",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        for (const v of message.marketIds) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCancelDerivativeOrderAuthz();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subaccountId = reader.string();
                    break;
                case 2:
                    message.marketIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCancelDerivativeOrderAuthz();
        message.subaccountId = object.subaccountId ?? "";
        message.marketIds = object.marketIds?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseCancelDerivativeOrderAuthz();
        if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
            message.subaccountId = object.subaccount_id;
        }
        message.marketIds = object.market_ids?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
        if (message.marketIds) {
            obj.market_ids = message.marketIds.map(e => e);
        }
        else {
            obj.market_ids = message.marketIds;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CancelDerivativeOrderAuthz.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.CancelDerivativeOrderAuthz.decode(message.value);
    },
    toProto(message) {
        return exports.CancelDerivativeOrderAuthz.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.CancelDerivativeOrderAuthz",
            value: exports.CancelDerivativeOrderAuthz.encode(message).finish()
        };
    }
};
function createBaseBatchCancelDerivativeOrdersAuthz() {
    return {
        $typeUrl: "/injective.exchange.v1beta1.BatchCancelDerivativeOrdersAuthz",
        subaccountId: "",
        marketIds: []
    };
}
exports.BatchCancelDerivativeOrdersAuthz = {
    typeUrl: "/injective.exchange.v1beta1.BatchCancelDerivativeOrdersAuthz",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        for (const v of message.marketIds) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBatchCancelDerivativeOrdersAuthz();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subaccountId = reader.string();
                    break;
                case 2:
                    message.marketIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBatchCancelDerivativeOrdersAuthz();
        message.subaccountId = object.subaccountId ?? "";
        message.marketIds = object.marketIds?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseBatchCancelDerivativeOrdersAuthz();
        if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
            message.subaccountId = object.subaccount_id;
        }
        message.marketIds = object.market_ids?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
        if (message.marketIds) {
            obj.market_ids = message.marketIds.map(e => e);
        }
        else {
            obj.market_ids = message.marketIds;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.BatchCancelDerivativeOrdersAuthz.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.BatchCancelDerivativeOrdersAuthz.decode(message.value);
    },
    toProto(message) {
        return exports.BatchCancelDerivativeOrdersAuthz.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.BatchCancelDerivativeOrdersAuthz",
            value: exports.BatchCancelDerivativeOrdersAuthz.encode(message).finish()
        };
    }
};
function createBaseBatchUpdateOrdersAuthz() {
    return {
        $typeUrl: "/injective.exchange.v1beta1.BatchUpdateOrdersAuthz",
        subaccountId: "",
        spotMarkets: [],
        derivativeMarkets: []
    };
}
exports.BatchUpdateOrdersAuthz = {
    typeUrl: "/injective.exchange.v1beta1.BatchUpdateOrdersAuthz",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        for (const v of message.spotMarkets) {
            writer.uint32(18).string(v);
        }
        for (const v of message.derivativeMarkets) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBatchUpdateOrdersAuthz();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subaccountId = reader.string();
                    break;
                case 2:
                    message.spotMarkets.push(reader.string());
                    break;
                case 3:
                    message.derivativeMarkets.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBatchUpdateOrdersAuthz();
        message.subaccountId = object.subaccountId ?? "";
        message.spotMarkets = object.spotMarkets?.map(e => e) || [];
        message.derivativeMarkets = object.derivativeMarkets?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseBatchUpdateOrdersAuthz();
        if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
            message.subaccountId = object.subaccount_id;
        }
        message.spotMarkets = object.spot_markets?.map(e => e) || [];
        message.derivativeMarkets = object.derivative_markets?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
        if (message.spotMarkets) {
            obj.spot_markets = message.spotMarkets.map(e => e);
        }
        else {
            obj.spot_markets = message.spotMarkets;
        }
        if (message.derivativeMarkets) {
            obj.derivative_markets = message.derivativeMarkets.map(e => e);
        }
        else {
            obj.derivative_markets = message.derivativeMarkets;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.BatchUpdateOrdersAuthz.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.BatchUpdateOrdersAuthz.decode(message.value);
    },
    toProto(message) {
        return exports.BatchUpdateOrdersAuthz.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.BatchUpdateOrdersAuthz",
            value: exports.BatchUpdateOrdersAuthz.encode(message).finish()
        };
    }
};
