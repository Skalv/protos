"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventAllowDenom = exports.EventUpdateSellOrder = exports.EventSell = void 0;
//@ts-nocheck
const binary_1 = require("../../../../binary");
function createBaseEventSell() {
    return {
        orderId: BigInt(0)
    };
}
exports.EventSell = {
    typeUrl: "/regen.ecocredit.marketplace.v1.EventSell",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.orderId !== BigInt(0)) {
            writer.uint32(8).uint64(message.orderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventSell();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orderId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventSell();
        message.orderId = object.orderId !== undefined && object.orderId !== null ? BigInt(object.orderId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventSell();
        if (object.order_id !== undefined && object.order_id !== null) {
            message.orderId = BigInt(object.order_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.order_id = message.orderId !== BigInt(0) ? (message.orderId?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventSell.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventSell.decode(message.value);
    },
    toProto(message) {
        return exports.EventSell.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.marketplace.v1.EventSell",
            value: exports.EventSell.encode(message).finish()
        };
    }
};
function createBaseEventUpdateSellOrder() {
    return {
        orderId: BigInt(0)
    };
}
exports.EventUpdateSellOrder = {
    typeUrl: "/regen.ecocredit.marketplace.v1.EventUpdateSellOrder",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.orderId !== BigInt(0)) {
            writer.uint32(8).uint64(message.orderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventUpdateSellOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orderId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventUpdateSellOrder();
        message.orderId = object.orderId !== undefined && object.orderId !== null ? BigInt(object.orderId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventUpdateSellOrder();
        if (object.order_id !== undefined && object.order_id !== null) {
            message.orderId = BigInt(object.order_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.order_id = message.orderId !== BigInt(0) ? (message.orderId?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventUpdateSellOrder.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventUpdateSellOrder.decode(message.value);
    },
    toProto(message) {
        return exports.EventUpdateSellOrder.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.marketplace.v1.EventUpdateSellOrder",
            value: exports.EventUpdateSellOrder.encode(message).finish()
        };
    }
};
function createBaseEventAllowDenom() {
    return {
        denom: ""
    };
}
exports.EventAllowDenom = {
    typeUrl: "/regen.ecocredit.marketplace.v1.EventAllowDenom",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventAllowDenom();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventAllowDenom();
        message.denom = object.denom ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventAllowDenom();
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom === "" ? undefined : message.denom;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventAllowDenom.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventAllowDenom.decode(message.value);
    },
    toProto(message) {
        return exports.EventAllowDenom.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.marketplace.v1.EventAllowDenom",
            value: exports.EventAllowDenom.encode(message).finish()
        };
    }
};
