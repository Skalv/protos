//@ts-nocheck
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseMsgJoinPool() {
    return {
        sender: "",
        poolId: BigInt(0),
        shareOutAmount: "",
        tokenInMaxs: []
    };
}
export const MsgJoinPool = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgJoinPool",
    encode(message, writer = BinaryWriter.create()) {
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
            Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.tokenInMaxs.push(Coin.decode(reader, reader.uint32()));
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
        message.tokenInMaxs = object.tokenInMaxs?.map(e => Coin.fromPartial(e)) || [];
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
        message.tokenInMaxs = object.token_in_maxs?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.pool_id = message.poolId !== BigInt(0) ? (message.poolId?.toString)() : undefined;
        obj.share_out_amount = message.shareOutAmount === "" ? undefined : message.shareOutAmount;
        if (message.tokenInMaxs) {
            obj.token_in_maxs = message.tokenInMaxs.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.token_in_maxs = message.tokenInMaxs;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgJoinPool.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/join-pool",
            value: MsgJoinPool.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgJoinPool.decode(message.value);
    },
    toProto(message) {
        return MsgJoinPool.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.MsgJoinPool",
            value: MsgJoinPool.encode(message).finish()
        };
    }
};
function createBaseMsgJoinPoolResponse() {
    return {
        shareOutAmount: "",
        tokenIn: []
    };
}
export const MsgJoinPoolResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgJoinPoolResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.shareOutAmount !== "") {
            writer.uint32(10).string(message.shareOutAmount);
        }
        for (const v of message.tokenIn) {
            Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgJoinPoolResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.shareOutAmount = reader.string();
                    break;
                case 2:
                    message.tokenIn.push(Coin.decode(reader, reader.uint32()));
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
        message.tokenIn = object.tokenIn?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgJoinPoolResponse();
        if (object.share_out_amount !== undefined && object.share_out_amount !== null) {
            message.shareOutAmount = object.share_out_amount;
        }
        message.tokenIn = object.token_in?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.share_out_amount = message.shareOutAmount === "" ? undefined : message.shareOutAmount;
        if (message.tokenIn) {
            obj.token_in = message.tokenIn.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.token_in = message.tokenIn;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgJoinPoolResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/join-pool-response",
            value: MsgJoinPoolResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgJoinPoolResponse.decode(message.value);
    },
    toProto(message) {
        return MsgJoinPoolResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.MsgJoinPoolResponse",
            value: MsgJoinPoolResponse.encode(message).finish()
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
export const MsgExitPool = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgExitPool",
    encode(message, writer = BinaryWriter.create()) {
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
            Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.tokenOutMins.push(Coin.decode(reader, reader.uint32()));
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
        message.tokenOutMins = object.tokenOutMins?.map(e => Coin.fromPartial(e)) || [];
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
        message.tokenOutMins = object.token_out_mins?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.pool_id = message.poolId !== BigInt(0) ? (message.poolId?.toString)() : undefined;
        obj.share_in_amount = message.shareInAmount === "" ? undefined : message.shareInAmount;
        if (message.tokenOutMins) {
            obj.token_out_mins = message.tokenOutMins.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.token_out_mins = message.tokenOutMins;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgExitPool.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/exit-pool",
            value: MsgExitPool.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgExitPool.decode(message.value);
    },
    toProto(message) {
        return MsgExitPool.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.MsgExitPool",
            value: MsgExitPool.encode(message).finish()
        };
    }
};
function createBaseMsgExitPoolResponse() {
    return {
        tokenOut: []
    };
}
export const MsgExitPoolResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgExitPoolResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.tokenOut) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExitPoolResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tokenOut.push(Coin.decode(reader, reader.uint32()));
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
        message.tokenOut = object.tokenOut?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgExitPoolResponse();
        message.tokenOut = object.token_out?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.tokenOut) {
            obj.token_out = message.tokenOut.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.token_out = message.tokenOut;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgExitPoolResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/exit-pool-response",
            value: MsgExitPoolResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgExitPoolResponse.decode(message.value);
    },
    toProto(message) {
        return MsgExitPoolResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.MsgExitPoolResponse",
            value: MsgExitPoolResponse.encode(message).finish()
        };
    }
};
function createBaseSwapAmountInRoute() {
    return {
        poolId: BigInt(0),
        tokenOutDenom: ""
    };
}
export const SwapAmountInRoute = {
    typeUrl: "/osmosis.gamm.v1beta1.SwapAmountInRoute",
    encode(message, writer = BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.tokenOutDenom !== "") {
            writer.uint32(18).string(message.tokenOutDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return SwapAmountInRoute.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/swap-amount-in-route",
            value: SwapAmountInRoute.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return SwapAmountInRoute.decode(message.value);
    },
    toProto(message) {
        return SwapAmountInRoute.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.SwapAmountInRoute",
            value: SwapAmountInRoute.encode(message).finish()
        };
    }
};
function createBaseMsgSwapExactAmountIn() {
    return {
        sender: "",
        routes: [],
        tokenIn: Coin.fromPartial({}),
        tokenOutMinAmount: ""
    };
}
export const MsgSwapExactAmountIn = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        for (const v of message.routes) {
            SwapAmountInRoute.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.tokenIn !== undefined) {
            Coin.encode(message.tokenIn, writer.uint32(26).fork()).ldelim();
        }
        if (message.tokenOutMinAmount !== "") {
            writer.uint32(34).string(message.tokenOutMinAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSwapExactAmountIn();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.routes.push(SwapAmountInRoute.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.tokenIn = Coin.decode(reader, reader.uint32());
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
        message.routes = object.routes?.map(e => SwapAmountInRoute.fromPartial(e)) || [];
        message.tokenIn = object.tokenIn !== undefined && object.tokenIn !== null ? Coin.fromPartial(object.tokenIn) : undefined;
        message.tokenOutMinAmount = object.tokenOutMinAmount ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSwapExactAmountIn();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        message.routes = object.routes?.map(e => SwapAmountInRoute.fromAmino(e)) || [];
        if (object.token_in !== undefined && object.token_in !== null) {
            message.tokenIn = Coin.fromAmino(object.token_in);
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
            obj.routes = message.routes.map(e => e ? SwapAmountInRoute.toAmino(e) : undefined);
        }
        else {
            obj.routes = message.routes;
        }
        obj.token_in = message.tokenIn ? Coin.toAmino(message.tokenIn) : undefined;
        obj.token_out_min_amount = message.tokenOutMinAmount === "" ? undefined : message.tokenOutMinAmount;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSwapExactAmountIn.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/swap-exact-amount-in",
            value: MsgSwapExactAmountIn.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgSwapExactAmountIn.decode(message.value);
    },
    toProto(message) {
        return MsgSwapExactAmountIn.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn",
            value: MsgSwapExactAmountIn.encode(message).finish()
        };
    }
};
function createBaseMsgSwapExactAmountInResponse() {
    return {
        tokenOutAmount: ""
    };
}
export const MsgSwapExactAmountInResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountInResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.tokenOutAmount !== "") {
            writer.uint32(10).string(message.tokenOutAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgSwapExactAmountInResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/swap-exact-amount-in-response",
            value: MsgSwapExactAmountInResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgSwapExactAmountInResponse.decode(message.value);
    },
    toProto(message) {
        return MsgSwapExactAmountInResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountInResponse",
            value: MsgSwapExactAmountInResponse.encode(message).finish()
        };
    }
};
function createBaseSwapAmountOutRoute() {
    return {
        poolId: BigInt(0),
        tokenInDenom: ""
    };
}
export const SwapAmountOutRoute = {
    typeUrl: "/osmosis.gamm.v1beta1.SwapAmountOutRoute",
    encode(message, writer = BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.tokenInDenom !== "") {
            writer.uint32(18).string(message.tokenInDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return SwapAmountOutRoute.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/swap-amount-out-route",
            value: SwapAmountOutRoute.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return SwapAmountOutRoute.decode(message.value);
    },
    toProto(message) {
        return SwapAmountOutRoute.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.SwapAmountOutRoute",
            value: SwapAmountOutRoute.encode(message).finish()
        };
    }
};
function createBaseMsgSwapExactAmountOut() {
    return {
        sender: "",
        routes: [],
        tokenInMaxAmount: "",
        tokenOut: Coin.fromPartial({})
    };
}
export const MsgSwapExactAmountOut = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        for (const v of message.routes) {
            SwapAmountOutRoute.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.tokenInMaxAmount !== "") {
            writer.uint32(26).string(message.tokenInMaxAmount);
        }
        if (message.tokenOut !== undefined) {
            Coin.encode(message.tokenOut, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSwapExactAmountOut();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.routes.push(SwapAmountOutRoute.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.tokenInMaxAmount = reader.string();
                    break;
                case 4:
                    message.tokenOut = Coin.decode(reader, reader.uint32());
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
        message.routes = object.routes?.map(e => SwapAmountOutRoute.fromPartial(e)) || [];
        message.tokenInMaxAmount = object.tokenInMaxAmount ?? "";
        message.tokenOut = object.tokenOut !== undefined && object.tokenOut !== null ? Coin.fromPartial(object.tokenOut) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSwapExactAmountOut();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        message.routes = object.routes?.map(e => SwapAmountOutRoute.fromAmino(e)) || [];
        if (object.token_in_max_amount !== undefined && object.token_in_max_amount !== null) {
            message.tokenInMaxAmount = object.token_in_max_amount;
        }
        if (object.token_out !== undefined && object.token_out !== null) {
            message.tokenOut = Coin.fromAmino(object.token_out);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        if (message.routes) {
            obj.routes = message.routes.map(e => e ? SwapAmountOutRoute.toAmino(e) : undefined);
        }
        else {
            obj.routes = message.routes;
        }
        obj.token_in_max_amount = message.tokenInMaxAmount === "" ? undefined : message.tokenInMaxAmount;
        obj.token_out = message.tokenOut ? Coin.toAmino(message.tokenOut) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSwapExactAmountOut.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/swap-exact-amount-out",
            value: MsgSwapExactAmountOut.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgSwapExactAmountOut.decode(message.value);
    },
    toProto(message) {
        return MsgSwapExactAmountOut.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut",
            value: MsgSwapExactAmountOut.encode(message).finish()
        };
    }
};
function createBaseMsgSwapExactAmountOutResponse() {
    return {
        tokenInAmount: ""
    };
}
export const MsgSwapExactAmountOutResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountOutResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.tokenInAmount !== "") {
            writer.uint32(10).string(message.tokenInAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgSwapExactAmountOutResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/swap-exact-amount-out-response",
            value: MsgSwapExactAmountOutResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgSwapExactAmountOutResponse.decode(message.value);
    },
    toProto(message) {
        return MsgSwapExactAmountOutResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountOutResponse",
            value: MsgSwapExactAmountOutResponse.encode(message).finish()
        };
    }
};
function createBaseMsgJoinSwapExternAmountIn() {
    return {
        sender: "",
        poolId: BigInt(0),
        tokenIn: Coin.fromPartial({}),
        shareOutMinAmount: ""
    };
}
export const MsgJoinSwapExternAmountIn = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.poolId !== BigInt(0)) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.tokenIn !== undefined) {
            Coin.encode(message.tokenIn, writer.uint32(26).fork()).ldelim();
        }
        if (message.shareOutMinAmount !== "") {
            writer.uint32(34).string(message.shareOutMinAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.tokenIn = Coin.decode(reader, reader.uint32());
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
        message.tokenIn = object.tokenIn !== undefined && object.tokenIn !== null ? Coin.fromPartial(object.tokenIn) : undefined;
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
            message.tokenIn = Coin.fromAmino(object.token_in);
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
        obj.token_in = message.tokenIn ? Coin.toAmino(message.tokenIn) : undefined;
        obj.share_out_min_amount = message.shareOutMinAmount === "" ? undefined : message.shareOutMinAmount;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgJoinSwapExternAmountIn.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/join-swap-extern-amount-in",
            value: MsgJoinSwapExternAmountIn.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgJoinSwapExternAmountIn.decode(message.value);
    },
    toProto(message) {
        return MsgJoinSwapExternAmountIn.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn",
            value: MsgJoinSwapExternAmountIn.encode(message).finish()
        };
    }
};
function createBaseMsgJoinSwapExternAmountInResponse() {
    return {
        shareOutAmount: ""
    };
}
export const MsgJoinSwapExternAmountInResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountInResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.shareOutAmount !== "") {
            writer.uint32(10).string(message.shareOutAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgJoinSwapExternAmountInResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/join-swap-extern-amount-in-response",
            value: MsgJoinSwapExternAmountInResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgJoinSwapExternAmountInResponse.decode(message.value);
    },
    toProto(message) {
        return MsgJoinSwapExternAmountInResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountInResponse",
            value: MsgJoinSwapExternAmountInResponse.encode(message).finish()
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
export const MsgJoinSwapShareAmountOut = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut",
    encode(message, writer = BinaryWriter.create()) {
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgJoinSwapShareAmountOut.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/join-swap-share-amount-out",
            value: MsgJoinSwapShareAmountOut.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgJoinSwapShareAmountOut.decode(message.value);
    },
    toProto(message) {
        return MsgJoinSwapShareAmountOut.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut",
            value: MsgJoinSwapShareAmountOut.encode(message).finish()
        };
    }
};
function createBaseMsgJoinSwapShareAmountOutResponse() {
    return {
        tokenInAmount: ""
    };
}
export const MsgJoinSwapShareAmountOutResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOutResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.tokenInAmount !== "") {
            writer.uint32(10).string(message.tokenInAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgJoinSwapShareAmountOutResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/join-swap-share-amount-out-response",
            value: MsgJoinSwapShareAmountOutResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgJoinSwapShareAmountOutResponse.decode(message.value);
    },
    toProto(message) {
        return MsgJoinSwapShareAmountOutResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOutResponse",
            value: MsgJoinSwapShareAmountOutResponse.encode(message).finish()
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
export const MsgExitSwapShareAmountIn = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn",
    encode(message, writer = BinaryWriter.create()) {
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgExitSwapShareAmountIn.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/exit-swap-share-amount-in",
            value: MsgExitSwapShareAmountIn.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgExitSwapShareAmountIn.decode(message.value);
    },
    toProto(message) {
        return MsgExitSwapShareAmountIn.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn",
            value: MsgExitSwapShareAmountIn.encode(message).finish()
        };
    }
};
function createBaseMsgExitSwapShareAmountInResponse() {
    return {
        tokenOutAmount: ""
    };
}
export const MsgExitSwapShareAmountInResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountInResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.tokenOutAmount !== "") {
            writer.uint32(10).string(message.tokenOutAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgExitSwapShareAmountInResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/exit-swap-share-amount-in-response",
            value: MsgExitSwapShareAmountInResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgExitSwapShareAmountInResponse.decode(message.value);
    },
    toProto(message) {
        return MsgExitSwapShareAmountInResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountInResponse",
            value: MsgExitSwapShareAmountInResponse.encode(message).finish()
        };
    }
};
function createBaseMsgExitSwapExternAmountOut() {
    return {
        sender: "",
        poolId: BigInt(0),
        tokenOut: Coin.fromPartial({}),
        shareInMaxAmount: ""
    };
}
export const MsgExitSwapExternAmountOut = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.poolId !== BigInt(0)) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.tokenOut !== undefined) {
            Coin.encode(message.tokenOut, writer.uint32(26).fork()).ldelim();
        }
        if (message.shareInMaxAmount !== "") {
            writer.uint32(34).string(message.shareInMaxAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.tokenOut = Coin.decode(reader, reader.uint32());
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
        message.tokenOut = object.tokenOut !== undefined && object.tokenOut !== null ? Coin.fromPartial(object.tokenOut) : undefined;
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
            message.tokenOut = Coin.fromAmino(object.token_out);
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
        obj.token_out = message.tokenOut ? Coin.toAmino(message.tokenOut) : undefined;
        obj.share_in_max_amount = message.shareInMaxAmount === "" ? undefined : message.shareInMaxAmount;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgExitSwapExternAmountOut.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/exit-swap-extern-amount-out",
            value: MsgExitSwapExternAmountOut.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgExitSwapExternAmountOut.decode(message.value);
    },
    toProto(message) {
        return MsgExitSwapExternAmountOut.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut",
            value: MsgExitSwapExternAmountOut.encode(message).finish()
        };
    }
};
function createBaseMsgExitSwapExternAmountOutResponse() {
    return {
        shareInAmount: ""
    };
}
export const MsgExitSwapExternAmountOutResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOutResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.shareInAmount !== "") {
            writer.uint32(10).string(message.shareInAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgExitSwapExternAmountOutResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/exit-swap-extern-amount-out-response",
            value: MsgExitSwapExternAmountOutResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgExitSwapExternAmountOutResponse.decode(message.value);
    },
    toProto(message) {
        return MsgExitSwapExternAmountOutResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOutResponse",
            value: MsgExitSwapExternAmountOutResponse.encode(message).finish()
        };
    }
};