"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgExitSwapExternAmountOutResponse = exports.MsgExitSwapExternAmountOut = exports.MsgExitSwapShareAmountInResponse = exports.MsgExitSwapShareAmountIn = exports.MsgJoinSwapShareAmountOutResponse = exports.MsgJoinSwapShareAmountOut = exports.MsgJoinSwapExternAmountInResponse = exports.MsgJoinSwapExternAmountIn = exports.MsgSwapExactAmountOutResponse = exports.MsgSwapExactAmountOut = exports.SwapAmountOutRoute = exports.MsgSwapExactAmountInResponse = exports.MsgSwapExactAmountIn = exports.SwapAmountInRoute = exports.MsgExitPoolResponse = exports.MsgExitPool = exports.MsgJoinPoolResponse = exports.MsgJoinPool = void 0;
//@ts-nocheck
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../binary");
function createBaseMsgJoinPool() {
    return {
        sender: "",
        poolId: BigInt(0),
        shareOutAmount: "",
        tokenInMaxs: []
    };
}
exports.MsgJoinPool = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgJoinPool",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.poolId !== BigInt(0)) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.shareOutAmount !== "") {
            writer.uint32(26).string(message.shareOutAmount);
        }
        for (const v of message.tokenInMaxs) {
            coin_1.Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgJoinPool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.poolId = reader.uint64();
                    break;
                case 3:
                    message.shareOutAmount = reader.string();
                    break;
                case 4:
                    message.tokenInMaxs.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgJoinPool();
        message.sender = object.sender ?? "";
        message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
        message.shareOutAmount = object.shareOutAmount ?? "";
        message.tokenInMaxs = object.tokenInMaxs?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgJoinPool();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        if (object.share_out_amount !== undefined && object.share_out_amount !== null) {
            message.shareOutAmount = object.share_out_amount;
        }
        message.tokenInMaxs = object.token_in_maxs?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.pool_id = message.poolId !== BigInt(0) ? (message.poolId?.toString)() : undefined;
        obj.share_out_amount = message.shareOutAmount === "" ? undefined : message.shareOutAmount;
        if (message.tokenInMaxs) {
            obj.token_in_maxs = message.tokenInMaxs.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.token_in_maxs = message.tokenInMaxs;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgJoinPool.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/join-pool",
            value: exports.MsgJoinPool.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgJoinPool.decode(message.value);
    },
    toProto(message) {
        return exports.MsgJoinPool.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.MsgJoinPool",
            value: exports.MsgJoinPool.encode(message).finish()
        };
    }
};
function createBaseMsgJoinPoolResponse() {
    return {
        shareOutAmount: "",
        tokenIn: []
    };
}
exports.MsgJoinPoolResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgJoinPoolResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.shareOutAmount !== "") {
            writer.uint32(10).string(message.shareOutAmount);
        }
        for (const v of message.tokenIn) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgJoinPoolResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.shareOutAmount = reader.string();
                    break;
                case 2:
                    message.tokenIn.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgJoinPoolResponse();
        message.shareOutAmount = object.shareOutAmount ?? "";
        message.tokenIn = object.tokenIn?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgJoinPoolResponse();
        if (object.share_out_amount !== undefined && object.share_out_amount !== null) {
            message.shareOutAmount = object.share_out_amount;
        }
        message.tokenIn = object.token_in?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.share_out_amount = message.shareOutAmount === "" ? undefined : message.shareOutAmount;
        if (message.tokenIn) {
            obj.token_in = message.tokenIn.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.token_in = message.tokenIn;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgJoinPoolResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/join-pool-response",
            value: exports.MsgJoinPoolResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgJoinPoolResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgJoinPoolResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.MsgJoinPoolResponse",
            value: exports.MsgJoinPoolResponse.encode(message).finish()
        };
    }
};
function createBaseMsgExitPool() {
    return {
        sender: "",
        poolId: BigInt(0),
        shareInAmount: "",
        tokenOutMins: []
    };
}
exports.MsgExitPool = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgExitPool",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.poolId !== BigInt(0)) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.shareInAmount !== "") {
            writer.uint32(26).string(message.shareInAmount);
        }
        for (const v of message.tokenOutMins) {
            coin_1.Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExitPool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.poolId = reader.uint64();
                    break;
                case 3:
                    message.shareInAmount = reader.string();
                    break;
                case 4:
                    message.tokenOutMins.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgExitPool();
        message.sender = object.sender ?? "";
        message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
        message.shareInAmount = object.shareInAmount ?? "";
        message.tokenOutMins = object.tokenOutMins?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgExitPool();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        if (object.share_in_amount !== undefined && object.share_in_amount !== null) {
            message.shareInAmount = object.share_in_amount;
        }
        message.tokenOutMins = object.token_out_mins?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.pool_id = message.poolId !== BigInt(0) ? (message.poolId?.toString)() : undefined;
        obj.share_in_amount = message.shareInAmount === "" ? undefined : message.shareInAmount;
        if (message.tokenOutMins) {
            obj.token_out_mins = message.tokenOutMins.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.token_out_mins = message.tokenOutMins;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgExitPool.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/exit-pool",
            value: exports.MsgExitPool.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgExitPool.decode(message.value);
    },
    toProto(message) {
        return exports.MsgExitPool.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.MsgExitPool",
            value: exports.MsgExitPool.encode(message).finish()
        };
    }
};
function createBaseMsgExitPoolResponse() {
    return {
        tokenOut: []
    };
}
exports.MsgExitPoolResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgExitPoolResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.tokenOut) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExitPoolResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tokenOut.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgExitPoolResponse();
        message.tokenOut = object.tokenOut?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgExitPoolResponse();
        message.tokenOut = object.token_out?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.tokenOut) {
            obj.token_out = message.tokenOut.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.token_out = message.tokenOut;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgExitPoolResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/exit-pool-response",
            value: exports.MsgExitPoolResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgExitPoolResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgExitPoolResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.MsgExitPoolResponse",
            value: exports.MsgExitPoolResponse.encode(message).finish()
        };
    }
};
function createBaseSwapAmountInRoute() {
    return {
        poolId: BigInt(0),
        tokenOutDenom: ""
    };
}
exports.SwapAmountInRoute = {
    typeUrl: "/osmosis.gamm.v1beta1.SwapAmountInRoute",
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
            type: "osmosis/gamm/swap-amount-in-route",
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
            typeUrl: "/osmosis.gamm.v1beta1.SwapAmountInRoute",
            value: exports.SwapAmountInRoute.encode(message).finish()
        };
    }
};
function createBaseMsgSwapExactAmountIn() {
    return {
        sender: "",
        routes: [],
        tokenIn: coin_1.Coin.fromPartial({}),
        tokenOutMinAmount: ""
    };
}
exports.MsgSwapExactAmountIn = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        for (const v of message.routes) {
            exports.SwapAmountInRoute.encode(v, writer.uint32(18).fork()).ldelim();
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
                    message.routes.push(exports.SwapAmountInRoute.decode(reader, reader.uint32()));
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
        message.routes = object.routes?.map(e => exports.SwapAmountInRoute.fromPartial(e)) || [];
        message.tokenIn = object.tokenIn !== undefined && object.tokenIn !== null ? coin_1.Coin.fromPartial(object.tokenIn) : undefined;
        message.tokenOutMinAmount = object.tokenOutMinAmount ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSwapExactAmountIn();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        message.routes = object.routes?.map(e => exports.SwapAmountInRoute.fromAmino(e)) || [];
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
            obj.routes = message.routes.map(e => e ? exports.SwapAmountInRoute.toAmino(e) : undefined);
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
            type: "osmosis/gamm/swap-exact-amount-in",
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
            typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn",
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
    typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountInResponse",
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
            type: "osmosis/gamm/swap-exact-amount-in-response",
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
            typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountInResponse",
            value: exports.MsgSwapExactAmountInResponse.encode(message).finish()
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
    typeUrl: "/osmosis.gamm.v1beta1.SwapAmountOutRoute",
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
            type: "osmosis/gamm/swap-amount-out-route",
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
            typeUrl: "/osmosis.gamm.v1beta1.SwapAmountOutRoute",
            value: exports.SwapAmountOutRoute.encode(message).finish()
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
    typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        for (const v of message.routes) {
            exports.SwapAmountOutRoute.encode(v, writer.uint32(18).fork()).ldelim();
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
                    message.routes.push(exports.SwapAmountOutRoute.decode(reader, reader.uint32()));
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
        message.routes = object.routes?.map(e => exports.SwapAmountOutRoute.fromPartial(e)) || [];
        message.tokenInMaxAmount = object.tokenInMaxAmount ?? "";
        message.tokenOut = object.tokenOut !== undefined && object.tokenOut !== null ? coin_1.Coin.fromPartial(object.tokenOut) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSwapExactAmountOut();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        message.routes = object.routes?.map(e => exports.SwapAmountOutRoute.fromAmino(e)) || [];
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
            obj.routes = message.routes.map(e => e ? exports.SwapAmountOutRoute.toAmino(e) : undefined);
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
            type: "osmosis/gamm/swap-exact-amount-out",
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
            typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut",
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
    typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountOutResponse",
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
            type: "osmosis/gamm/swap-exact-amount-out-response",
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
            typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountOutResponse",
            value: exports.MsgSwapExactAmountOutResponse.encode(message).finish()
        };
    }
};
function createBaseMsgJoinSwapExternAmountIn() {
    return {
        sender: "",
        poolId: BigInt(0),
        tokenIn: coin_1.Coin.fromPartial({}),
        shareOutMinAmount: ""
    };
}
exports.MsgJoinSwapExternAmountIn = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.poolId !== BigInt(0)) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.tokenIn !== undefined) {
            coin_1.Coin.encode(message.tokenIn, writer.uint32(26).fork()).ldelim();
        }
        if (message.shareOutMinAmount !== "") {
            writer.uint32(34).string(message.shareOutMinAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgJoinSwapExternAmountIn();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.poolId = reader.uint64();
                    break;
                case 3:
                    message.tokenIn = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.shareOutMinAmount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgJoinSwapExternAmountIn();
        message.sender = object.sender ?? "";
        message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
        message.tokenIn = object.tokenIn !== undefined && object.tokenIn !== null ? coin_1.Coin.fromPartial(object.tokenIn) : undefined;
        message.shareOutMinAmount = object.shareOutMinAmount ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgJoinSwapExternAmountIn();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        if (object.token_in !== undefined && object.token_in !== null) {
            message.tokenIn = coin_1.Coin.fromAmino(object.token_in);
        }
        if (object.share_out_min_amount !== undefined && object.share_out_min_amount !== null) {
            message.shareOutMinAmount = object.share_out_min_amount;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.pool_id = message.poolId !== BigInt(0) ? (message.poolId?.toString)() : undefined;
        obj.token_in = message.tokenIn ? coin_1.Coin.toAmino(message.tokenIn) : undefined;
        obj.share_out_min_amount = message.shareOutMinAmount === "" ? undefined : message.shareOutMinAmount;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgJoinSwapExternAmountIn.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/join-swap-extern-amount-in",
            value: exports.MsgJoinSwapExternAmountIn.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgJoinSwapExternAmountIn.decode(message.value);
    },
    toProto(message) {
        return exports.MsgJoinSwapExternAmountIn.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn",
            value: exports.MsgJoinSwapExternAmountIn.encode(message).finish()
        };
    }
};
function createBaseMsgJoinSwapExternAmountInResponse() {
    return {
        shareOutAmount: ""
    };
}
exports.MsgJoinSwapExternAmountInResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountInResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.shareOutAmount !== "") {
            writer.uint32(10).string(message.shareOutAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgJoinSwapExternAmountInResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.shareOutAmount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgJoinSwapExternAmountInResponse();
        message.shareOutAmount = object.shareOutAmount ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgJoinSwapExternAmountInResponse();
        if (object.share_out_amount !== undefined && object.share_out_amount !== null) {
            message.shareOutAmount = object.share_out_amount;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.share_out_amount = message.shareOutAmount === "" ? undefined : message.shareOutAmount;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgJoinSwapExternAmountInResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/join-swap-extern-amount-in-response",
            value: exports.MsgJoinSwapExternAmountInResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgJoinSwapExternAmountInResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgJoinSwapExternAmountInResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountInResponse",
            value: exports.MsgJoinSwapExternAmountInResponse.encode(message).finish()
        };
    }
};
function createBaseMsgJoinSwapShareAmountOut() {
    return {
        sender: "",
        poolId: BigInt(0),
        tokenInDenom: "",
        shareOutAmount: "",
        tokenInMaxAmount: ""
    };
}
exports.MsgJoinSwapShareAmountOut = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.poolId !== BigInt(0)) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.tokenInDenom !== "") {
            writer.uint32(26).string(message.tokenInDenom);
        }
        if (message.shareOutAmount !== "") {
            writer.uint32(34).string(message.shareOutAmount);
        }
        if (message.tokenInMaxAmount !== "") {
            writer.uint32(42).string(message.tokenInMaxAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgJoinSwapShareAmountOut();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.poolId = reader.uint64();
                    break;
                case 3:
                    message.tokenInDenom = reader.string();
                    break;
                case 4:
                    message.shareOutAmount = reader.string();
                    break;
                case 5:
                    message.tokenInMaxAmount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgJoinSwapShareAmountOut();
        message.sender = object.sender ?? "";
        message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
        message.tokenInDenom = object.tokenInDenom ?? "";
        message.shareOutAmount = object.shareOutAmount ?? "";
        message.tokenInMaxAmount = object.tokenInMaxAmount ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgJoinSwapShareAmountOut();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        if (object.token_in_denom !== undefined && object.token_in_denom !== null) {
            message.tokenInDenom = object.token_in_denom;
        }
        if (object.share_out_amount !== undefined && object.share_out_amount !== null) {
            message.shareOutAmount = object.share_out_amount;
        }
        if (object.token_in_max_amount !== undefined && object.token_in_max_amount !== null) {
            message.tokenInMaxAmount = object.token_in_max_amount;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.pool_id = message.poolId !== BigInt(0) ? (message.poolId?.toString)() : undefined;
        obj.token_in_denom = message.tokenInDenom === "" ? undefined : message.tokenInDenom;
        obj.share_out_amount = message.shareOutAmount === "" ? undefined : message.shareOutAmount;
        obj.token_in_max_amount = message.tokenInMaxAmount === "" ? undefined : message.tokenInMaxAmount;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgJoinSwapShareAmountOut.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/join-swap-share-amount-out",
            value: exports.MsgJoinSwapShareAmountOut.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgJoinSwapShareAmountOut.decode(message.value);
    },
    toProto(message) {
        return exports.MsgJoinSwapShareAmountOut.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut",
            value: exports.MsgJoinSwapShareAmountOut.encode(message).finish()
        };
    }
};
function createBaseMsgJoinSwapShareAmountOutResponse() {
    return {
        tokenInAmount: ""
    };
}
exports.MsgJoinSwapShareAmountOutResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOutResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.tokenInAmount !== "") {
            writer.uint32(10).string(message.tokenInAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgJoinSwapShareAmountOutResponse();
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
        const message = createBaseMsgJoinSwapShareAmountOutResponse();
        message.tokenInAmount = object.tokenInAmount ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgJoinSwapShareAmountOutResponse();
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
        return exports.MsgJoinSwapShareAmountOutResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/join-swap-share-amount-out-response",
            value: exports.MsgJoinSwapShareAmountOutResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgJoinSwapShareAmountOutResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgJoinSwapShareAmountOutResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOutResponse",
            value: exports.MsgJoinSwapShareAmountOutResponse.encode(message).finish()
        };
    }
};
function createBaseMsgExitSwapShareAmountIn() {
    return {
        sender: "",
        poolId: BigInt(0),
        tokenOutDenom: "",
        shareInAmount: "",
        tokenOutMinAmount: ""
    };
}
exports.MsgExitSwapShareAmountIn = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.poolId !== BigInt(0)) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.tokenOutDenom !== "") {
            writer.uint32(26).string(message.tokenOutDenom);
        }
        if (message.shareInAmount !== "") {
            writer.uint32(34).string(message.shareInAmount);
        }
        if (message.tokenOutMinAmount !== "") {
            writer.uint32(42).string(message.tokenOutMinAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExitSwapShareAmountIn();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.poolId = reader.uint64();
                    break;
                case 3:
                    message.tokenOutDenom = reader.string();
                    break;
                case 4:
                    message.shareInAmount = reader.string();
                    break;
                case 5:
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
        const message = createBaseMsgExitSwapShareAmountIn();
        message.sender = object.sender ?? "";
        message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
        message.tokenOutDenom = object.tokenOutDenom ?? "";
        message.shareInAmount = object.shareInAmount ?? "";
        message.tokenOutMinAmount = object.tokenOutMinAmount ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgExitSwapShareAmountIn();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        if (object.token_out_denom !== undefined && object.token_out_denom !== null) {
            message.tokenOutDenom = object.token_out_denom;
        }
        if (object.share_in_amount !== undefined && object.share_in_amount !== null) {
            message.shareInAmount = object.share_in_amount;
        }
        if (object.token_out_min_amount !== undefined && object.token_out_min_amount !== null) {
            message.tokenOutMinAmount = object.token_out_min_amount;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.pool_id = message.poolId !== BigInt(0) ? (message.poolId?.toString)() : undefined;
        obj.token_out_denom = message.tokenOutDenom === "" ? undefined : message.tokenOutDenom;
        obj.share_in_amount = message.shareInAmount === "" ? undefined : message.shareInAmount;
        obj.token_out_min_amount = message.tokenOutMinAmount === "" ? undefined : message.tokenOutMinAmount;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgExitSwapShareAmountIn.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/exit-swap-share-amount-in",
            value: exports.MsgExitSwapShareAmountIn.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgExitSwapShareAmountIn.decode(message.value);
    },
    toProto(message) {
        return exports.MsgExitSwapShareAmountIn.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn",
            value: exports.MsgExitSwapShareAmountIn.encode(message).finish()
        };
    }
};
function createBaseMsgExitSwapShareAmountInResponse() {
    return {
        tokenOutAmount: ""
    };
}
exports.MsgExitSwapShareAmountInResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountInResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.tokenOutAmount !== "") {
            writer.uint32(10).string(message.tokenOutAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExitSwapShareAmountInResponse();
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
        const message = createBaseMsgExitSwapShareAmountInResponse();
        message.tokenOutAmount = object.tokenOutAmount ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgExitSwapShareAmountInResponse();
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
        return exports.MsgExitSwapShareAmountInResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/exit-swap-share-amount-in-response",
            value: exports.MsgExitSwapShareAmountInResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgExitSwapShareAmountInResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgExitSwapShareAmountInResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountInResponse",
            value: exports.MsgExitSwapShareAmountInResponse.encode(message).finish()
        };
    }
};
function createBaseMsgExitSwapExternAmountOut() {
    return {
        sender: "",
        poolId: BigInt(0),
        tokenOut: coin_1.Coin.fromPartial({}),
        shareInMaxAmount: ""
    };
}
exports.MsgExitSwapExternAmountOut = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.poolId !== BigInt(0)) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.tokenOut !== undefined) {
            coin_1.Coin.encode(message.tokenOut, writer.uint32(26).fork()).ldelim();
        }
        if (message.shareInMaxAmount !== "") {
            writer.uint32(34).string(message.shareInMaxAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExitSwapExternAmountOut();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.poolId = reader.uint64();
                    break;
                case 3:
                    message.tokenOut = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.shareInMaxAmount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgExitSwapExternAmountOut();
        message.sender = object.sender ?? "";
        message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
        message.tokenOut = object.tokenOut !== undefined && object.tokenOut !== null ? coin_1.Coin.fromPartial(object.tokenOut) : undefined;
        message.shareInMaxAmount = object.shareInMaxAmount ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgExitSwapExternAmountOut();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        if (object.token_out !== undefined && object.token_out !== null) {
            message.tokenOut = coin_1.Coin.fromAmino(object.token_out);
        }
        if (object.share_in_max_amount !== undefined && object.share_in_max_amount !== null) {
            message.shareInMaxAmount = object.share_in_max_amount;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.pool_id = message.poolId !== BigInt(0) ? (message.poolId?.toString)() : undefined;
        obj.token_out = message.tokenOut ? coin_1.Coin.toAmino(message.tokenOut) : undefined;
        obj.share_in_max_amount = message.shareInMaxAmount === "" ? undefined : message.shareInMaxAmount;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgExitSwapExternAmountOut.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/exit-swap-extern-amount-out",
            value: exports.MsgExitSwapExternAmountOut.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgExitSwapExternAmountOut.decode(message.value);
    },
    toProto(message) {
        return exports.MsgExitSwapExternAmountOut.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut",
            value: exports.MsgExitSwapExternAmountOut.encode(message).finish()
        };
    }
};
function createBaseMsgExitSwapExternAmountOutResponse() {
    return {
        shareInAmount: ""
    };
}
exports.MsgExitSwapExternAmountOutResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOutResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.shareInAmount !== "") {
            writer.uint32(10).string(message.shareInAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExitSwapExternAmountOutResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.shareInAmount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgExitSwapExternAmountOutResponse();
        message.shareInAmount = object.shareInAmount ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgExitSwapExternAmountOutResponse();
        if (object.share_in_amount !== undefined && object.share_in_amount !== null) {
            message.shareInAmount = object.share_in_amount;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.share_in_amount = message.shareInAmount === "" ? undefined : message.shareInAmount;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgExitSwapExternAmountOutResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/exit-swap-extern-amount-out-response",
            value: exports.MsgExitSwapExternAmountOutResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgExitSwapExternAmountOutResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgExitSwapExternAmountOutResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOutResponse",
            value: exports.MsgExitSwapExternAmountOutResponse.encode(message).finish()
        };
    }
};
