"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgSwapExactAmountOutResponse = exports.MsgSwapExactAmountOut = exports.MsgSwapExactAmountInResponse = exports.MsgSwapExactAmountIn = void 0;
//@ts-nocheck
const swap_route_1 = require("./swap_route");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../binary");
function createBaseMsgSwapExactAmountIn() {
    return {
        sender: "",
        routes: [],
        tokenIn: coin_1.Coin.fromPartial({}),
        tokenOutMinAmount: ""
    };
}
exports.MsgSwapExactAmountIn = {
    typeUrl: "/osmosis.swaprouter.v1beta1.MsgSwapExactAmountIn",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        for (const v of message.routes) {
            swap_route_1.SwapAmountInRoute.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.tokenIn !== undefined) {
            coin_1.Coin.encode(message.tokenIn, writer.uint32(26).fork()).ldelim();
        }
        if (message.tokenOutMinAmount !== "") {
            writer.uint32(34).string(message.tokenOutMinAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSwapExactAmountIn();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.routes.push(swap_route_1.SwapAmountInRoute.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.tokenIn = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.tokenOutMinAmount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSwapExactAmountIn();
        message.sender = object.sender ?? "";
        message.routes = object.routes?.map(e => swap_route_1.SwapAmountInRoute.fromPartial(e)) || [];
        message.tokenIn = object.tokenIn !== undefined && object.tokenIn !== null ? coin_1.Coin.fromPartial(object.tokenIn) : undefined;
        message.tokenOutMinAmount = object.tokenOutMinAmount ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSwapExactAmountIn();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        message.routes = object.routes?.map(e => swap_route_1.SwapAmountInRoute.fromAmino(e)) || [];
        if (object.token_in !== undefined && object.token_in !== null) {
            message.tokenIn = coin_1.Coin.fromAmino(object.token_in);
        }
        if (object.token_out_min_amount !== undefined && object.token_out_min_amount !== null) {
            message.tokenOutMinAmount = object.token_out_min_amount;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        if (message.routes) {
            obj.routes = message.routes.map(e => e ? swap_route_1.SwapAmountInRoute.toAmino(e) : undefined);
        }
        else {
            obj.routes = message.routes;
        }
        obj.token_in = message.tokenIn ? coin_1.Coin.toAmino(message.tokenIn) : undefined;
        obj.token_out_min_amount = message.tokenOutMinAmount === "" ? undefined : message.tokenOutMinAmount;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSwapExactAmountIn.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/swaprouter/swap-exact-amount-in",
            value: exports.MsgSwapExactAmountIn.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSwapExactAmountIn.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSwapExactAmountIn.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.swaprouter.v1beta1.MsgSwapExactAmountIn",
            value: exports.MsgSwapExactAmountIn.encode(message).finish()
        };
    }
};
function createBaseMsgSwapExactAmountInResponse() {
    return {
        tokenOutAmount: ""
    };
}
exports.MsgSwapExactAmountInResponse = {
    typeUrl: "/osmosis.swaprouter.v1beta1.MsgSwapExactAmountInResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.tokenOutAmount !== "") {
            writer.uint32(10).string(message.tokenOutAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSwapExactAmountInResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tokenOutAmount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSwapExactAmountInResponse();
        message.tokenOutAmount = object.tokenOutAmount ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSwapExactAmountInResponse();
        if (object.token_out_amount !== undefined && object.token_out_amount !== null) {
            message.tokenOutAmount = object.token_out_amount;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.token_out_amount = message.tokenOutAmount === "" ? undefined : message.tokenOutAmount;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSwapExactAmountInResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/swaprouter/swap-exact-amount-in-response",
            value: exports.MsgSwapExactAmountInResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSwapExactAmountInResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSwapExactAmountInResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.swaprouter.v1beta1.MsgSwapExactAmountInResponse",
            value: exports.MsgSwapExactAmountInResponse.encode(message).finish()
        };
    }
};
function createBaseMsgSwapExactAmountOut() {
    return {
        sender: "",
        routes: [],
        tokenInMaxAmount: "",
        tokenOut: coin_1.Coin.fromPartial({})
    };
}
exports.MsgSwapExactAmountOut = {
    typeUrl: "/osmosis.swaprouter.v1beta1.MsgSwapExactAmountOut",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        for (const v of message.routes) {
            swap_route_1.SwapAmountOutRoute.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.tokenInMaxAmount !== "") {
            writer.uint32(26).string(message.tokenInMaxAmount);
        }
        if (message.tokenOut !== undefined) {
            coin_1.Coin.encode(message.tokenOut, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSwapExactAmountOut();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.routes.push(swap_route_1.SwapAmountOutRoute.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.tokenInMaxAmount = reader.string();
                    break;
                case 4:
                    message.tokenOut = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSwapExactAmountOut();
        message.sender = object.sender ?? "";
        message.routes = object.routes?.map(e => swap_route_1.SwapAmountOutRoute.fromPartial(e)) || [];
        message.tokenInMaxAmount = object.tokenInMaxAmount ?? "";
        message.tokenOut = object.tokenOut !== undefined && object.tokenOut !== null ? coin_1.Coin.fromPartial(object.tokenOut) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSwapExactAmountOut();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        message.routes = object.routes?.map(e => swap_route_1.SwapAmountOutRoute.fromAmino(e)) || [];
        if (object.token_in_max_amount !== undefined && object.token_in_max_amount !== null) {
            message.tokenInMaxAmount = object.token_in_max_amount;
        }
        if (object.token_out !== undefined && object.token_out !== null) {
            message.tokenOut = coin_1.Coin.fromAmino(object.token_out);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        if (message.routes) {
            obj.routes = message.routes.map(e => e ? swap_route_1.SwapAmountOutRoute.toAmino(e) : undefined);
        }
        else {
            obj.routes = message.routes;
        }
        obj.token_in_max_amount = message.tokenInMaxAmount === "" ? undefined : message.tokenInMaxAmount;
        obj.token_out = message.tokenOut ? coin_1.Coin.toAmino(message.tokenOut) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSwapExactAmountOut.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/swaprouter/swap-exact-amount-out",
            value: exports.MsgSwapExactAmountOut.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSwapExactAmountOut.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSwapExactAmountOut.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.swaprouter.v1beta1.MsgSwapExactAmountOut",
            value: exports.MsgSwapExactAmountOut.encode(message).finish()
        };
    }
};
function createBaseMsgSwapExactAmountOutResponse() {
    return {
        tokenInAmount: ""
    };
}
exports.MsgSwapExactAmountOutResponse = {
    typeUrl: "/osmosis.swaprouter.v1beta1.MsgSwapExactAmountOutResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.tokenInAmount !== "") {
            writer.uint32(10).string(message.tokenInAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSwapExactAmountOutResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tokenInAmount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSwapExactAmountOutResponse();
        message.tokenInAmount = object.tokenInAmount ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSwapExactAmountOutResponse();
        if (object.token_in_amount !== undefined && object.token_in_amount !== null) {
            message.tokenInAmount = object.token_in_amount;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.token_in_amount = message.tokenInAmount === "" ? undefined : message.tokenInAmount;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSwapExactAmountOutResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/swaprouter/swap-exact-amount-out-response",
            value: exports.MsgSwapExactAmountOutResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSwapExactAmountOutResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSwapExactAmountOutResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.swaprouter.v1beta1.MsgSwapExactAmountOutResponse",
            value: exports.MsgSwapExactAmountOutResponse.encode(message).finish()
        };
    }
};
