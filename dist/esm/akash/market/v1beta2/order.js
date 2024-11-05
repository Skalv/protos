//@ts-nocheck
import { GroupSpec } from "../../deployment/v1beta2/groupspec";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** State is an enum which refers to state of order */
export var Order_State;
(function (Order_State) {
    /** invalid - Prefix should start with 0 in enum. So declaring dummy state */
    Order_State[Order_State["invalid"] = 0] = "invalid";
    /** open - OrderOpen denotes state for order open */
    Order_State[Order_State["open"] = 1] = "open";
    /** active - OrderMatched denotes state for order matched */
    Order_State[Order_State["active"] = 2] = "active";
    /** closed - OrderClosed denotes state for order lost */
    Order_State[Order_State["closed"] = 3] = "closed";
    Order_State[Order_State["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Order_State || (Order_State = {}));
export const Order_StateSDKType = Order_State;
export const Order_StateAmino = Order_State;
export function order_StateFromJSON(object) {
    switch (object) {
        case 0:
        case "invalid":
            return Order_State.invalid;
        case 1:
        case "open":
            return Order_State.open;
        case 2:
        case "active":
            return Order_State.active;
        case 3:
        case "closed":
            return Order_State.closed;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Order_State.UNRECOGNIZED;
    }
}
export function order_StateToJSON(object) {
    switch (object) {
        case Order_State.invalid:
            return "invalid";
        case Order_State.open:
            return "open";
        case Order_State.active:
            return "active";
        case Order_State.closed:
            return "closed";
        case Order_State.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseOrderID() {
    return {
        owner: "",
        dseq: BigInt(0),
        gseq: 0,
        oseq: 0
    };
}
export const OrderID = {
    typeUrl: "/akash.market.v1beta2.OrderID",
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.dseq !== BigInt(0)) {
            writer.uint32(16).uint64(message.dseq);
        }
        if (message.gseq !== 0) {
            writer.uint32(24).uint32(message.gseq);
        }
        if (message.oseq !== 0) {
            writer.uint32(32).uint32(message.oseq);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrderID();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.dseq = reader.uint64();
                    break;
                case 3:
                    message.gseq = reader.uint32();
                    break;
                case 4:
                    message.oseq = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseOrderID();
        message.owner = object.owner ?? "";
        message.dseq = object.dseq !== undefined && object.dseq !== null ? BigInt(object.dseq.toString()) : BigInt(0);
        message.gseq = object.gseq ?? 0;
        message.oseq = object.oseq ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseOrderID();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.dseq !== undefined && object.dseq !== null) {
            message.dseq = BigInt(object.dseq);
        }
        if (object.gseq !== undefined && object.gseq !== null) {
            message.gseq = object.gseq;
        }
        if (object.oseq !== undefined && object.oseq !== null) {
            message.oseq = object.oseq;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner ?? "";
        obj.dseq = message.dseq ? (message.dseq?.toString)() : "0";
        obj.gseq = message.gseq ?? 0;
        obj.oseq = message.oseq ?? 0;
        return obj;
    },
    fromAminoMsg(object) {
        return OrderID.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return OrderID.decode(message.value);
    },
    toProto(message) {
        return OrderID.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.market.v1beta2.OrderID",
            value: OrderID.encode(message).finish()
        };
    }
};
function createBaseOrder() {
    return {
        orderId: OrderID.fromPartial({}),
        state: 0,
        spec: GroupSpec.fromPartial({}),
        createdAt: BigInt(0)
    };
}
export const Order = {
    typeUrl: "/akash.market.v1beta2.Order",
    encode(message, writer = BinaryWriter.create()) {
        if (message.orderId !== undefined) {
            OrderID.encode(message.orderId, writer.uint32(10).fork()).ldelim();
        }
        if (message.state !== 0) {
            writer.uint32(16).int32(message.state);
        }
        if (message.spec !== undefined) {
            GroupSpec.encode(message.spec, writer.uint32(26).fork()).ldelim();
        }
        if (message.createdAt !== BigInt(0)) {
            writer.uint32(32).int64(message.createdAt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orderId = OrderID.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.state = reader.int32();
                    break;
                case 3:
                    message.spec = GroupSpec.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.createdAt = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseOrder();
        message.orderId = object.orderId !== undefined && object.orderId !== null ? OrderID.fromPartial(object.orderId) : undefined;
        message.state = object.state ?? 0;
        message.spec = object.spec !== undefined && object.spec !== null ? GroupSpec.fromPartial(object.spec) : undefined;
        message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? BigInt(object.createdAt.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseOrder();
        if (object.order_id !== undefined && object.order_id !== null) {
            message.orderId = OrderID.fromAmino(object.order_id);
        }
        if (object.state !== undefined && object.state !== null) {
            message.state = object.state;
        }
        if (object.spec !== undefined && object.spec !== null) {
            message.spec = GroupSpec.fromAmino(object.spec);
        }
        if (object.created_at !== undefined && object.created_at !== null) {
            message.createdAt = BigInt(object.created_at);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.order_id = message.orderId ? OrderID.toAmino(message.orderId) : OrderID.toAmino(OrderID.fromPartial({}));
        obj.state = message.state ?? 0;
        obj.spec = message.spec ? GroupSpec.toAmino(message.spec) : GroupSpec.toAmino(GroupSpec.fromPartial({}));
        obj.created_at = message.createdAt !== BigInt(0) ? (message.createdAt?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Order.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Order.decode(message.value);
    },
    toProto(message) {
        return Order.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.market.v1beta2.Order",
            value: Order.encode(message).finish()
        };
    }
};
function createBaseOrderFilters() {
    return {
        owner: "",
        dseq: BigInt(0),
        gseq: 0,
        oseq: 0,
        state: ""
    };
}
export const OrderFilters = {
    typeUrl: "/akash.market.v1beta2.OrderFilters",
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.dseq !== BigInt(0)) {
            writer.uint32(16).uint64(message.dseq);
        }
        if (message.gseq !== 0) {
            writer.uint32(24).uint32(message.gseq);
        }
        if (message.oseq !== 0) {
            writer.uint32(32).uint32(message.oseq);
        }
        if (message.state !== "") {
            writer.uint32(42).string(message.state);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrderFilters();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.dseq = reader.uint64();
                    break;
                case 3:
                    message.gseq = reader.uint32();
                    break;
                case 4:
                    message.oseq = reader.uint32();
                    break;
                case 5:
                    message.state = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseOrderFilters();
        message.owner = object.owner ?? "";
        message.dseq = object.dseq !== undefined && object.dseq !== null ? BigInt(object.dseq.toString()) : BigInt(0);
        message.gseq = object.gseq ?? 0;
        message.oseq = object.oseq ?? 0;
        message.state = object.state ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseOrderFilters();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.dseq !== undefined && object.dseq !== null) {
            message.dseq = BigInt(object.dseq);
        }
        if (object.gseq !== undefined && object.gseq !== null) {
            message.gseq = object.gseq;
        }
        if (object.oseq !== undefined && object.oseq !== null) {
            message.oseq = object.oseq;
        }
        if (object.state !== undefined && object.state !== null) {
            message.state = object.state;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner ?? "";
        obj.dseq = message.dseq ? (message.dseq?.toString)() : "0";
        obj.gseq = message.gseq ?? 0;
        obj.oseq = message.oseq ?? 0;
        obj.state = message.state ?? "";
        return obj;
    },
    fromAminoMsg(object) {
        return OrderFilters.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return OrderFilters.decode(message.value);
    },
    toProto(message) {
        return OrderFilters.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/akash.market.v1beta2.OrderFilters",
            value: OrderFilters.encode(message).finish()
        };
    }
};
