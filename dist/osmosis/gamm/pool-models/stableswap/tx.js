"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgStableSwapAdjustScalingFactorsResponse = exports.MsgStableSwapAdjustScalingFactors = exports.MsgCreateStableswapPoolResponse = exports.MsgCreateStableswapPool = void 0;
//@ts-nocheck
const stableswap_pool_1 = require("./stableswap_pool");
const coin_1 = require("../../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../../binary");
function createBaseMsgCreateStableswapPool() {
    return {
        sender: "",
        poolParams: undefined,
        initialPoolLiquidity: [],
        scalingFactors: [],
        futurePoolGovernor: "",
        scalingFactorController: ""
    };
}
exports.MsgCreateStableswapPool = {
    typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.poolParams !== undefined) {
            stableswap_pool_1.PoolParams.encode(message.poolParams, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.initialPoolLiquidity) {
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        writer.uint32(34).fork();
        for (const v of message.scalingFactors) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.futurePoolGovernor !== "") {
            writer.uint32(42).string(message.futurePoolGovernor);
        }
        if (message.scalingFactorController !== "") {
            writer.uint32(50).string(message.scalingFactorController);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateStableswapPool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.poolParams = stableswap_pool_1.PoolParams.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.initialPoolLiquidity.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 4:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.scalingFactors.push(reader.uint64());
                        }
                    }
                    else {
                        message.scalingFactors.push(reader.uint64());
                    }
                    break;
                case 5:
                    message.futurePoolGovernor = reader.string();
                    break;
                case 6:
                    message.scalingFactorController = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateStableswapPool();
        message.sender = object.sender ?? "";
        message.poolParams = object.poolParams !== undefined && object.poolParams !== null ? stableswap_pool_1.PoolParams.fromPartial(object.poolParams) : undefined;
        message.initialPoolLiquidity = object.initialPoolLiquidity?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.scalingFactors = object.scalingFactors?.map(e => BigInt(e.toString())) || [];
        message.futurePoolGovernor = object.futurePoolGovernor ?? "";
        message.scalingFactorController = object.scalingFactorController ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateStableswapPool();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.pool_params !== undefined && object.pool_params !== null) {
            message.poolParams = stableswap_pool_1.PoolParams.fromAmino(object.pool_params);
        }
        message.initialPoolLiquidity = object.initial_pool_liquidity?.map(e => coin_1.Coin.fromAmino(e)) || [];
        message.scalingFactors = object.scaling_factors?.map(e => BigInt(e)) || [];
        if (object.future_pool_governor !== undefined && object.future_pool_governor !== null) {
            message.futurePoolGovernor = object.future_pool_governor;
        }
        if (object.scaling_factor_controller !== undefined && object.scaling_factor_controller !== null) {
            message.scalingFactorController = object.scaling_factor_controller;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.pool_params = message.poolParams ? stableswap_pool_1.PoolParams.toAmino(message.poolParams) : undefined;
        if (message.initialPoolLiquidity) {
            obj.initial_pool_liquidity = message.initialPoolLiquidity.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.initial_pool_liquidity = message.initialPoolLiquidity;
        }
        if (message.scalingFactors) {
            obj.scaling_factors = message.scalingFactors.map(e => e.toString());
        }
        else {
            obj.scaling_factors = message.scalingFactors;
        }
        obj.future_pool_governor = message.futurePoolGovernor === "" ? undefined : message.futurePoolGovernor;
        obj.scaling_factor_controller = message.scalingFactorController === "" ? undefined : message.scalingFactorController;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateStableswapPool.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/create-stableswap-pool",
            value: exports.MsgCreateStableswapPool.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCreateStableswapPool.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateStableswapPool.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool",
            value: exports.MsgCreateStableswapPool.encode(message).finish()
        };
    }
};
function createBaseMsgCreateStableswapPoolResponse() {
    return {
        poolId: BigInt(0)
    };
}
exports.MsgCreateStableswapPoolResponse = {
    typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPoolResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateStableswapPoolResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateStableswapPoolResponse();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateStableswapPoolResponse();
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId !== BigInt(0) ? (message.poolId?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateStableswapPoolResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/create-stableswap-pool-response",
            value: exports.MsgCreateStableswapPoolResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCreateStableswapPoolResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateStableswapPoolResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPoolResponse",
            value: exports.MsgCreateStableswapPoolResponse.encode(message).finish()
        };
    }
};
function createBaseMsgStableSwapAdjustScalingFactors() {
    return {
        sender: "",
        poolId: BigInt(0),
        scalingFactors: []
    };
}
exports.MsgStableSwapAdjustScalingFactors = {
    typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.poolId !== BigInt(0)) {
            writer.uint32(16).uint64(message.poolId);
        }
        writer.uint32(26).fork();
        for (const v of message.scalingFactors) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgStableSwapAdjustScalingFactors();
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
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.scalingFactors.push(reader.uint64());
                        }
                    }
                    else {
                        message.scalingFactors.push(reader.uint64());
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgStableSwapAdjustScalingFactors();
        message.sender = object.sender ?? "";
        message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
        message.scalingFactors = object.scalingFactors?.map(e => BigInt(e.toString())) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgStableSwapAdjustScalingFactors();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        message.scalingFactors = object.scaling_factors?.map(e => BigInt(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.pool_id = message.poolId !== BigInt(0) ? (message.poolId?.toString)() : undefined;
        if (message.scalingFactors) {
            obj.scaling_factors = message.scalingFactors.map(e => e.toString());
        }
        else {
            obj.scaling_factors = message.scalingFactors;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgStableSwapAdjustScalingFactors.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/stableswap-adjust-scaling-factors",
            value: exports.MsgStableSwapAdjustScalingFactors.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgStableSwapAdjustScalingFactors.decode(message.value);
    },
    toProto(message) {
        return exports.MsgStableSwapAdjustScalingFactors.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors",
            value: exports.MsgStableSwapAdjustScalingFactors.encode(message).finish()
        };
    }
};
function createBaseMsgStableSwapAdjustScalingFactorsResponse() {
    return {};
}
exports.MsgStableSwapAdjustScalingFactorsResponse = {
    typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactorsResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgStableSwapAdjustScalingFactorsResponse();
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
        const message = createBaseMsgStableSwapAdjustScalingFactorsResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgStableSwapAdjustScalingFactorsResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgStableSwapAdjustScalingFactorsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/stable-swap-adjust-scaling-factors-response",
            value: exports.MsgStableSwapAdjustScalingFactorsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgStableSwapAdjustScalingFactorsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgStableSwapAdjustScalingFactorsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactorsResponse",
            value: exports.MsgStableSwapAdjustScalingFactorsResponse.encode(message).finish()
        };
    }
};
