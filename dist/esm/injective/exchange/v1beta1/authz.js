//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseCreateSpotLimitOrderAuthz() {
    return {
        $typeUrl: "/injective.exchange.v1beta1.CreateSpotLimitOrderAuthz",
        subaccountId: "",
        marketIds: []
    };
}
export const CreateSpotLimitOrderAuthz = {
    typeUrl: "/injective.exchange.v1beta1.CreateSpotLimitOrderAuthz",
    encode(message, writer = BinaryWriter.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        for (const v of message.marketIds) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return CreateSpotLimitOrderAuthz.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return CreateSpotLimitOrderAuthz.decode(message.value);
    },
    toProto(message) {
        return CreateSpotLimitOrderAuthz.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.CreateSpotLimitOrderAuthz",
            value: CreateSpotLimitOrderAuthz.encode(message).finish()
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
export const CreateSpotMarketOrderAuthz = {
    typeUrl: "/injective.exchange.v1beta1.CreateSpotMarketOrderAuthz",
    encode(message, writer = BinaryWriter.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        for (const v of message.marketIds) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return CreateSpotMarketOrderAuthz.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return CreateSpotMarketOrderAuthz.decode(message.value);
    },
    toProto(message) {
        return CreateSpotMarketOrderAuthz.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.CreateSpotMarketOrderAuthz",
            value: CreateSpotMarketOrderAuthz.encode(message).finish()
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
export const BatchCreateSpotLimitOrdersAuthz = {
    typeUrl: "/injective.exchange.v1beta1.BatchCreateSpotLimitOrdersAuthz",
    encode(message, writer = BinaryWriter.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        for (const v of message.marketIds) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return BatchCreateSpotLimitOrdersAuthz.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return BatchCreateSpotLimitOrdersAuthz.decode(message.value);
    },
    toProto(message) {
        return BatchCreateSpotLimitOrdersAuthz.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.BatchCreateSpotLimitOrdersAuthz",
            value: BatchCreateSpotLimitOrdersAuthz.encode(message).finish()
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
export const CancelSpotOrderAuthz = {
    typeUrl: "/injective.exchange.v1beta1.CancelSpotOrderAuthz",
    encode(message, writer = BinaryWriter.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        for (const v of message.marketIds) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return CancelSpotOrderAuthz.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return CancelSpotOrderAuthz.decode(message.value);
    },
    toProto(message) {
        return CancelSpotOrderAuthz.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.CancelSpotOrderAuthz",
            value: CancelSpotOrderAuthz.encode(message).finish()
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
export const BatchCancelSpotOrdersAuthz = {
    typeUrl: "/injective.exchange.v1beta1.BatchCancelSpotOrdersAuthz",
    encode(message, writer = BinaryWriter.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        for (const v of message.marketIds) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return BatchCancelSpotOrdersAuthz.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return BatchCancelSpotOrdersAuthz.decode(message.value);
    },
    toProto(message) {
        return BatchCancelSpotOrdersAuthz.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.BatchCancelSpotOrdersAuthz",
            value: BatchCancelSpotOrdersAuthz.encode(message).finish()
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
export const CreateDerivativeLimitOrderAuthz = {
    typeUrl: "/injective.exchange.v1beta1.CreateDerivativeLimitOrderAuthz",
    encode(message, writer = BinaryWriter.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        for (const v of message.marketIds) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return CreateDerivativeLimitOrderAuthz.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return CreateDerivativeLimitOrderAuthz.decode(message.value);
    },
    toProto(message) {
        return CreateDerivativeLimitOrderAuthz.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.CreateDerivativeLimitOrderAuthz",
            value: CreateDerivativeLimitOrderAuthz.encode(message).finish()
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
export const CreateDerivativeMarketOrderAuthz = {
    typeUrl: "/injective.exchange.v1beta1.CreateDerivativeMarketOrderAuthz",
    encode(message, writer = BinaryWriter.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        for (const v of message.marketIds) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return CreateDerivativeMarketOrderAuthz.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return CreateDerivativeMarketOrderAuthz.decode(message.value);
    },
    toProto(message) {
        return CreateDerivativeMarketOrderAuthz.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.CreateDerivativeMarketOrderAuthz",
            value: CreateDerivativeMarketOrderAuthz.encode(message).finish()
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
export const BatchCreateDerivativeLimitOrdersAuthz = {
    typeUrl: "/injective.exchange.v1beta1.BatchCreateDerivativeLimitOrdersAuthz",
    encode(message, writer = BinaryWriter.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        for (const v of message.marketIds) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return BatchCreateDerivativeLimitOrdersAuthz.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return BatchCreateDerivativeLimitOrdersAuthz.decode(message.value);
    },
    toProto(message) {
        return BatchCreateDerivativeLimitOrdersAuthz.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.BatchCreateDerivativeLimitOrdersAuthz",
            value: BatchCreateDerivativeLimitOrdersAuthz.encode(message).finish()
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
export const CancelDerivativeOrderAuthz = {
    typeUrl: "/injective.exchange.v1beta1.CancelDerivativeOrderAuthz",
    encode(message, writer = BinaryWriter.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        for (const v of message.marketIds) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return CancelDerivativeOrderAuthz.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return CancelDerivativeOrderAuthz.decode(message.value);
    },
    toProto(message) {
        return CancelDerivativeOrderAuthz.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.CancelDerivativeOrderAuthz",
            value: CancelDerivativeOrderAuthz.encode(message).finish()
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
export const BatchCancelDerivativeOrdersAuthz = {
    typeUrl: "/injective.exchange.v1beta1.BatchCancelDerivativeOrdersAuthz",
    encode(message, writer = BinaryWriter.create()) {
        if (message.subaccountId !== "") {
            writer.uint32(10).string(message.subaccountId);
        }
        for (const v of message.marketIds) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return BatchCancelDerivativeOrdersAuthz.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return BatchCancelDerivativeOrdersAuthz.decode(message.value);
    },
    toProto(message) {
        return BatchCancelDerivativeOrdersAuthz.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.BatchCancelDerivativeOrdersAuthz",
            value: BatchCancelDerivativeOrdersAuthz.encode(message).finish()
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
export const BatchUpdateOrdersAuthz = {
    typeUrl: "/injective.exchange.v1beta1.BatchUpdateOrdersAuthz",
    encode(message, writer = BinaryWriter.create()) {
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return BatchUpdateOrdersAuthz.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return BatchUpdateOrdersAuthz.decode(message.value);
    },
    toProto(message) {
        return BatchUpdateOrdersAuthz.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.exchange.v1beta1.BatchUpdateOrdersAuthz",
            value: BatchUpdateOrdersAuthz.encode(message).finish()
        };
    }
};
