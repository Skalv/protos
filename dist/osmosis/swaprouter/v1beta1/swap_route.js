"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwapAmountOutRoute = exports.SwapAmountInRoute = void 0;
//@ts-nocheck
const binary_1 = require("../../../binary");
function createBaseSwapAmountInRoute() {
    return {
        poolId: BigInt(0),
        tokenOutDenom: ""
    };
}
exports.SwapAmountInRoute = {
    typeUrl: "/osmosis.swaprouter.v1beta1.SwapAmountInRoute",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.tokenOutDenom !== "") {
            writer.uint32(18).string(message.tokenOutDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSwapAmountInRoute();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.tokenOutDenom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSwapAmountInRoute();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
        message.tokenOutDenom = object.tokenOutDenom ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseSwapAmountInRoute();
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        if (object.token_out_denom !== undefined && object.token_out_denom !== null) {
            message.tokenOutDenom = object.token_out_denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId !== BigInt(0) ? (message.poolId?.toString)() : undefined;
        obj.token_out_denom = message.tokenOutDenom === "" ? undefined : message.tokenOutDenom;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SwapAmountInRoute.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/swaprouter/swap-amount-in-route",
            value: exports.SwapAmountInRoute.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SwapAmountInRoute.decode(message.value);
    },
    toProto(message) {
        return exports.SwapAmountInRoute.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.swaprouter.v1beta1.SwapAmountInRoute",
            value: exports.SwapAmountInRoute.encode(message).finish()
        };
    }
};
function createBaseSwapAmountOutRoute() {
    return {
        poolId: BigInt(0),
        tokenInDenom: ""
    };
}
exports.SwapAmountOutRoute = {
    typeUrl: "/osmosis.swaprouter.v1beta1.SwapAmountOutRoute",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.tokenInDenom !== "") {
            writer.uint32(18).string(message.tokenInDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSwapAmountOutRoute();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.tokenInDenom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSwapAmountOutRoute();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
        message.tokenInDenom = object.tokenInDenom ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseSwapAmountOutRoute();
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        if (object.token_in_denom !== undefined && object.token_in_denom !== null) {
            message.tokenInDenom = object.token_in_denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId !== BigInt(0) ? (message.poolId?.toString)() : undefined;
        obj.token_in_denom = message.tokenInDenom === "" ? undefined : message.tokenInDenom;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SwapAmountOutRoute.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/swaprouter/swap-amount-out-route",
            value: exports.SwapAmountOutRoute.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SwapAmountOutRoute.decode(message.value);
    },
    toProto(message) {
        return exports.SwapAmountOutRoute.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.swaprouter.v1beta1.SwapAmountOutRoute",
            value: exports.SwapAmountOutRoute.encode(message).finish()
        };
    }
};
