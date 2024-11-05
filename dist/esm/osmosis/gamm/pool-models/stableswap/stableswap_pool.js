//@ts-nocheck
import { Coin } from "../../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { Decimal } from "@cosmjs/math";
function createBasePoolParams() {
    return {
        swapFee: "",
        exitFee: ""
    };
}
export const PoolParams = {
    typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.PoolParams",
    encode(message, writer = BinaryWriter.create()) {
        if (message.swapFee !== "") {
            writer.uint32(10).string(Decimal.fromUserInput(message.swapFee, 18).atomics);
        }
        if (message.exitFee !== "") {
            writer.uint32(18).string(Decimal.fromUserInput(message.exitFee, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePoolParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.swapFee = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 2:
                    message.exitFee = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePoolParams();
        message.swapFee = object.swapFee ?? "";
        message.exitFee = object.exitFee ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBasePoolParams();
        if (object.swap_fee !== undefined && object.swap_fee !== null) {
            message.swapFee = object.swap_fee;
        }
        if (object.exit_fee !== undefined && object.exit_fee !== null) {
            message.exitFee = object.exit_fee;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.swap_fee = message.swapFee === "" ? undefined : message.swapFee;
        obj.exit_fee = message.exitFee === "" ? undefined : message.exitFee;
        return obj;
    },
    fromAminoMsg(object) {
        return PoolParams.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/StableswapPoolParams",
            value: PoolParams.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return PoolParams.decode(message.value);
    },
    toProto(message) {
        return PoolParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.PoolParams",
            value: PoolParams.encode(message).finish()
        };
    }
};
function createBasePool() {
    return {
        $typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.Pool",
        address: "",
        id: BigInt(0),
        poolParams: PoolParams.fromPartial({}),
        futurePoolGovernor: "",
        totalShares: Coin.fromPartial({}),
        poolLiquidity: [],
        scalingFactors: [],
        scalingFactorController: ""
    };
}
export const Pool = {
    typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.Pool",
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.id !== BigInt(0)) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.poolParams !== undefined) {
            PoolParams.encode(message.poolParams, writer.uint32(26).fork()).ldelim();
        }
        if (message.futurePoolGovernor !== "") {
            writer.uint32(34).string(message.futurePoolGovernor);
        }
        if (message.totalShares !== undefined) {
            Coin.encode(message.totalShares, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.poolLiquidity) {
            Coin.encode(v, writer.uint32(50).fork()).ldelim();
        }
        writer.uint32(58).fork();
        for (const v of message.scalingFactors) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.scalingFactorController !== "") {
            writer.uint32(66).string(message.scalingFactorController);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.id = reader.uint64();
                    break;
                case 3:
                    message.poolParams = PoolParams.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.futurePoolGovernor = reader.string();
                    break;
                case 5:
                    message.totalShares = Coin.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.poolLiquidity.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 7:
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
                case 8:
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
        const message = createBasePool();
        message.address = object.address ?? "";
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        message.poolParams = object.poolParams !== undefined && object.poolParams !== null ? PoolParams.fromPartial(object.poolParams) : undefined;
        message.futurePoolGovernor = object.futurePoolGovernor ?? "";
        message.totalShares = object.totalShares !== undefined && object.totalShares !== null ? Coin.fromPartial(object.totalShares) : undefined;
        message.poolLiquidity = object.poolLiquidity?.map(e => Coin.fromPartial(e)) || [];
        message.scalingFactors = object.scalingFactors?.map(e => BigInt(e.toString())) || [];
        message.scalingFactorController = object.scalingFactorController ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBasePool();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id);
        }
        if (object.pool_params !== undefined && object.pool_params !== null) {
            message.poolParams = PoolParams.fromAmino(object.pool_params);
        }
        if (object.future_pool_governor !== undefined && object.future_pool_governor !== null) {
            message.futurePoolGovernor = object.future_pool_governor;
        }
        if (object.total_shares !== undefined && object.total_shares !== null) {
            message.totalShares = Coin.fromAmino(object.total_shares);
        }
        message.poolLiquidity = object.pool_liquidity?.map(e => Coin.fromAmino(e)) || [];
        message.scalingFactors = object.scaling_factors?.map(e => BigInt(e)) || [];
        if (object.scaling_factor_controller !== undefined && object.scaling_factor_controller !== null) {
            message.scalingFactorController = object.scaling_factor_controller;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        obj.id = message.id !== BigInt(0) ? (message.id?.toString)() : undefined;
        obj.pool_params = message.poolParams ? PoolParams.toAmino(message.poolParams) : undefined;
        obj.future_pool_governor = message.futurePoolGovernor === "" ? undefined : message.futurePoolGovernor;
        obj.total_shares = message.totalShares ? Coin.toAmino(message.totalShares) : undefined;
        if (message.poolLiquidity) {
            obj.pool_liquidity = message.poolLiquidity.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.pool_liquidity = message.poolLiquidity;
        }
        if (message.scalingFactors) {
            obj.scaling_factors = message.scalingFactors.map(e => e.toString());
        }
        else {
            obj.scaling_factors = message.scalingFactors;
        }
        obj.scaling_factor_controller = message.scalingFactorController === "" ? undefined : message.scalingFactorController;
        return obj;
    },
    fromAminoMsg(object) {
        return Pool.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/StableswapPool",
            value: Pool.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Pool.decode(message.value);
    },
    toProto(message) {
        return Pool.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.Pool",
            value: Pool.encode(message).finish()
        };
    }
};
