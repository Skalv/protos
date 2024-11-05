//@ts-nocheck
import { SwapAmountInRoute, SwapAmountOutRoute } from "./swap_route";
import { Params } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseParamsRequest() {
    return {};
}
export const ParamsRequest = {
    typeUrl: "/osmosis.swaprouter.v1beta1.ParamsRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParamsRequest();
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
        const message = createBaseParamsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseParamsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return ParamsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/swaprouter/params-request",
            value: ParamsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ParamsRequest.decode(message.value);
    },
    toProto(message) {
        return ParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.swaprouter.v1beta1.ParamsRequest",
            value: ParamsRequest.encode(message).finish()
        };
    }
};
function createBaseParamsResponse() {
    return {
        params: Params.fromPartial({})
    };
}
export const ParamsResponse = {
    typeUrl: "/osmosis.swaprouter.v1beta1.ParamsResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/swaprouter/params-response",
            value: ParamsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ParamsResponse.decode(message.value);
    },
    toProto(message) {
        return ParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.swaprouter.v1beta1.ParamsResponse",
            value: ParamsResponse.encode(message).finish()
        };
    }
};
function createBaseEstimateSwapExactAmountInRequest() {
    return {
        sender: "",
        poolId: BigInt(0),
        tokenIn: "",
        routes: []
    };
}
export const EstimateSwapExactAmountInRequest = {
    typeUrl: "/osmosis.swaprouter.v1beta1.EstimateSwapExactAmountInRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.poolId !== BigInt(0)) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.tokenIn !== "") {
            writer.uint32(26).string(message.tokenIn);
        }
        for (const v of message.routes) {
            SwapAmountInRoute.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEstimateSwapExactAmountInRequest();
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
                    message.tokenIn = reader.string();
                    break;
                case 4:
                    message.routes.push(SwapAmountInRoute.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEstimateSwapExactAmountInRequest();
        message.sender = object.sender ?? "";
        message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
        message.tokenIn = object.tokenIn ?? "";
        message.routes = object.routes?.map(e => SwapAmountInRoute.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseEstimateSwapExactAmountInRequest();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        if (object.token_in !== undefined && object.token_in !== null) {
            message.tokenIn = object.token_in;
        }
        message.routes = object.routes?.map(e => SwapAmountInRoute.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.pool_id = message.poolId !== BigInt(0) ? (message.poolId?.toString)() : undefined;
        obj.token_in = message.tokenIn === "" ? undefined : message.tokenIn;
        if (message.routes) {
            obj.routes = message.routes.map(e => e ? SwapAmountInRoute.toAmino(e) : undefined);
        }
        else {
            obj.routes = message.routes;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return EstimateSwapExactAmountInRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/swaprouter/estimate-swap-exact-amount-in-request",
            value: EstimateSwapExactAmountInRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return EstimateSwapExactAmountInRequest.decode(message.value);
    },
    toProto(message) {
        return EstimateSwapExactAmountInRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.swaprouter.v1beta1.EstimateSwapExactAmountInRequest",
            value: EstimateSwapExactAmountInRequest.encode(message).finish()
        };
    }
};
function createBaseEstimateSwapExactAmountInResponse() {
    return {
        tokenOutAmount: ""
    };
}
export const EstimateSwapExactAmountInResponse = {
    typeUrl: "/osmosis.swaprouter.v1beta1.EstimateSwapExactAmountInResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.tokenOutAmount !== "") {
            writer.uint32(10).string(message.tokenOutAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEstimateSwapExactAmountInResponse();
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
        const message = createBaseEstimateSwapExactAmountInResponse();
        message.tokenOutAmount = object.tokenOutAmount ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEstimateSwapExactAmountInResponse();
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
        return EstimateSwapExactAmountInResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/swaprouter/estimate-swap-exact-amount-in-response",
            value: EstimateSwapExactAmountInResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return EstimateSwapExactAmountInResponse.decode(message.value);
    },
    toProto(message) {
        return EstimateSwapExactAmountInResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.swaprouter.v1beta1.EstimateSwapExactAmountInResponse",
            value: EstimateSwapExactAmountInResponse.encode(message).finish()
        };
    }
};
function createBaseEstimateSwapExactAmountOutRequest() {
    return {
        sender: "",
        poolId: BigInt(0),
        routes: [],
        tokenOut: ""
    };
}
export const EstimateSwapExactAmountOutRequest = {
    typeUrl: "/osmosis.swaprouter.v1beta1.EstimateSwapExactAmountOutRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.poolId !== BigInt(0)) {
            writer.uint32(16).uint64(message.poolId);
        }
        for (const v of message.routes) {
            SwapAmountOutRoute.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.tokenOut !== "") {
            writer.uint32(34).string(message.tokenOut);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEstimateSwapExactAmountOutRequest();
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
                    message.routes.push(SwapAmountOutRoute.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.tokenOut = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEstimateSwapExactAmountOutRequest();
        message.sender = object.sender ?? "";
        message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
        message.routes = object.routes?.map(e => SwapAmountOutRoute.fromPartial(e)) || [];
        message.tokenOut = object.tokenOut ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEstimateSwapExactAmountOutRequest();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        message.routes = object.routes?.map(e => SwapAmountOutRoute.fromAmino(e)) || [];
        if (object.token_out !== undefined && object.token_out !== null) {
            message.tokenOut = object.token_out;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.pool_id = message.poolId !== BigInt(0) ? (message.poolId?.toString)() : undefined;
        if (message.routes) {
            obj.routes = message.routes.map(e => e ? SwapAmountOutRoute.toAmino(e) : undefined);
        }
        else {
            obj.routes = message.routes;
        }
        obj.token_out = message.tokenOut === "" ? undefined : message.tokenOut;
        return obj;
    },
    fromAminoMsg(object) {
        return EstimateSwapExactAmountOutRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/swaprouter/estimate-swap-exact-amount-out-request",
            value: EstimateSwapExactAmountOutRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return EstimateSwapExactAmountOutRequest.decode(message.value);
    },
    toProto(message) {
        return EstimateSwapExactAmountOutRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.swaprouter.v1beta1.EstimateSwapExactAmountOutRequest",
            value: EstimateSwapExactAmountOutRequest.encode(message).finish()
        };
    }
};
function createBaseEstimateSwapExactAmountOutResponse() {
    return {
        tokenInAmount: ""
    };
}
export const EstimateSwapExactAmountOutResponse = {
    typeUrl: "/osmosis.swaprouter.v1beta1.EstimateSwapExactAmountOutResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.tokenInAmount !== "") {
            writer.uint32(10).string(message.tokenInAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEstimateSwapExactAmountOutResponse();
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
        const message = createBaseEstimateSwapExactAmountOutResponse();
        message.tokenInAmount = object.tokenInAmount ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEstimateSwapExactAmountOutResponse();
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
        return EstimateSwapExactAmountOutResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/swaprouter/estimate-swap-exact-amount-out-response",
            value: EstimateSwapExactAmountOutResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return EstimateSwapExactAmountOutResponse.decode(message.value);
    },
    toProto(message) {
        return EstimateSwapExactAmountOutResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.swaprouter.v1beta1.EstimateSwapExactAmountOutResponse",
            value: EstimateSwapExactAmountOutResponse.encode(message).finish()
        };
    }
};
function createBaseNumPoolsRequest() {
    return {};
}
export const NumPoolsRequest = {
    typeUrl: "/osmosis.swaprouter.v1beta1.NumPoolsRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNumPoolsRequest();
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
        const message = createBaseNumPoolsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseNumPoolsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return NumPoolsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/swaprouter/num-pools-request",
            value: NumPoolsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return NumPoolsRequest.decode(message.value);
    },
    toProto(message) {
        return NumPoolsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.swaprouter.v1beta1.NumPoolsRequest",
            value: NumPoolsRequest.encode(message).finish()
        };
    }
};
function createBaseNumPoolsResponse() {
    return {
        numPools: BigInt(0)
    };
}
export const NumPoolsResponse = {
    typeUrl: "/osmosis.swaprouter.v1beta1.NumPoolsResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.numPools !== BigInt(0)) {
            writer.uint32(8).uint64(message.numPools);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNumPoolsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.numPools = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseNumPoolsResponse();
        message.numPools = object.numPools !== undefined && object.numPools !== null ? BigInt(object.numPools.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseNumPoolsResponse();
        if (object.num_pools !== undefined && object.num_pools !== null) {
            message.numPools = BigInt(object.num_pools);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.num_pools = message.numPools !== BigInt(0) ? (message.numPools?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return NumPoolsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/swaprouter/num-pools-response",
            value: NumPoolsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return NumPoolsResponse.decode(message.value);
    },
    toProto(message) {
        return NumPoolsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.swaprouter.v1beta1.NumPoolsResponse",
            value: NumPoolsResponse.encode(message).finish()
        };
    }
};
