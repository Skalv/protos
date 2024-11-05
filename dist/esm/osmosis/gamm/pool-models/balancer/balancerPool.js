//@ts-nocheck
import { Timestamp } from "../../../../google/protobuf/timestamp";
import { Duration } from "../../../../google/protobuf/duration";
import { Coin } from "../../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { toTimestamp, fromTimestamp } from "../../../../helpers";
import { Decimal } from "@cosmjs/math";
function createBaseSmoothWeightChangeParams() {
    return {
        startTime: new Date(),
        duration: Duration.fromPartial({}),
        initialPoolWeights: [],
        targetPoolWeights: []
    };
}
export const SmoothWeightChangeParams = {
    typeUrl: "/osmosis.gamm.v1beta1.SmoothWeightChangeParams",
    encode(message, writer = BinaryWriter.create()) {
        if (message.startTime !== undefined) {
            Timestamp.encode(toTimestamp(message.startTime), writer.uint32(10).fork()).ldelim();
        }
        if (message.duration !== undefined) {
            Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.initialPoolWeights) {
            PoolAsset.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.targetPoolWeights) {
            PoolAsset.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSmoothWeightChangeParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.duration = Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.initialPoolWeights.push(PoolAsset.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.targetPoolWeights.push(PoolAsset.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSmoothWeightChangeParams();
        message.startTime = object.startTime ?? undefined;
        message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
        message.initialPoolWeights = object.initialPoolWeights?.map(e => PoolAsset.fromPartial(e)) || [];
        message.targetPoolWeights = object.targetPoolWeights?.map(e => PoolAsset.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseSmoothWeightChangeParams();
        if (object.start_time !== undefined && object.start_time !== null) {
            message.startTime = fromTimestamp(Timestamp.fromAmino(object.start_time));
        }
        if (object.duration !== undefined && object.duration !== null) {
            message.duration = Duration.fromAmino(object.duration);
        }
        message.initialPoolWeights = object.initial_pool_weights?.map(e => PoolAsset.fromAmino(e)) || [];
        message.targetPoolWeights = object.target_pool_weights?.map(e => PoolAsset.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.start_time = message.startTime ? Timestamp.toAmino(toTimestamp(message.startTime)) : undefined;
        obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined;
        if (message.initialPoolWeights) {
            obj.initial_pool_weights = message.initialPoolWeights.map(e => e ? PoolAsset.toAmino(e) : undefined);
        }
        else {
            obj.initial_pool_weights = message.initialPoolWeights;
        }
        if (message.targetPoolWeights) {
            obj.target_pool_weights = message.targetPoolWeights.map(e => e ? PoolAsset.toAmino(e) : undefined);
        }
        else {
            obj.target_pool_weights = message.targetPoolWeights;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return SmoothWeightChangeParams.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/smooth-weight-change-params",
            value: SmoothWeightChangeParams.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return SmoothWeightChangeParams.decode(message.value);
    },
    toProto(message) {
        return SmoothWeightChangeParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.SmoothWeightChangeParams",
            value: SmoothWeightChangeParams.encode(message).finish()
        };
    }
};
function createBasePoolParams() {
    return {
        swapFee: "",
        exitFee: "",
        smoothWeightChangeParams: undefined
    };
}
export const PoolParams = {
    typeUrl: "/osmosis.gamm.v1beta1.PoolParams",
    encode(message, writer = BinaryWriter.create()) {
        if (message.swapFee !== "") {
            writer.uint32(10).string(Decimal.fromUserInput(message.swapFee, 18).atomics);
        }
        if (message.exitFee !== "") {
            writer.uint32(18).string(Decimal.fromUserInput(message.exitFee, 18).atomics);
        }
        if (message.smoothWeightChangeParams !== undefined) {
            SmoothWeightChangeParams.encode(message.smoothWeightChangeParams, writer.uint32(26).fork()).ldelim();
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
                case 3:
                    message.smoothWeightChangeParams = SmoothWeightChangeParams.decode(reader, reader.uint32());
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
        message.smoothWeightChangeParams = object.smoothWeightChangeParams !== undefined && object.smoothWeightChangeParams !== null ? SmoothWeightChangeParams.fromPartial(object.smoothWeightChangeParams) : undefined;
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
        if (object.smooth_weight_change_params !== undefined && object.smooth_weight_change_params !== null) {
            message.smoothWeightChangeParams = SmoothWeightChangeParams.fromAmino(object.smooth_weight_change_params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.swap_fee = message.swapFee === "" ? undefined : message.swapFee;
        obj.exit_fee = message.exitFee === "" ? undefined : message.exitFee;
        obj.smooth_weight_change_params = message.smoothWeightChangeParams ? SmoothWeightChangeParams.toAmino(message.smoothWeightChangeParams) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return PoolParams.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/BalancerPoolParams",
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
            typeUrl: "/osmosis.gamm.v1beta1.PoolParams",
            value: PoolParams.encode(message).finish()
        };
    }
};
function createBasePoolAsset() {
    return {
        token: Coin.fromPartial({}),
        weight: ""
    };
}
export const PoolAsset = {
    typeUrl: "/osmosis.gamm.v1beta1.PoolAsset",
    encode(message, writer = BinaryWriter.create()) {
        if (message.token !== undefined) {
            Coin.encode(message.token, writer.uint32(10).fork()).ldelim();
        }
        if (message.weight !== "") {
            writer.uint32(18).string(message.weight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePoolAsset();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.token = Coin.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.weight = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePoolAsset();
        message.token = object.token !== undefined && object.token !== null ? Coin.fromPartial(object.token) : undefined;
        message.weight = object.weight ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBasePoolAsset();
        if (object.token !== undefined && object.token !== null) {
            message.token = Coin.fromAmino(object.token);
        }
        if (object.weight !== undefined && object.weight !== null) {
            message.weight = object.weight;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.token = message.token ? Coin.toAmino(message.token) : undefined;
        obj.weight = message.weight === "" ? undefined : message.weight;
        return obj;
    },
    fromAminoMsg(object) {
        return PoolAsset.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/pool-asset",
            value: PoolAsset.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return PoolAsset.decode(message.value);
    },
    toProto(message) {
        return PoolAsset.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.PoolAsset",
            value: PoolAsset.encode(message).finish()
        };
    }
};
function createBasePool() {
    return {
        $typeUrl: "/osmosis.gamm.v1beta1.Pool",
        address: "",
        id: BigInt(0),
        poolParams: PoolParams.fromPartial({}),
        futurePoolGovernor: "",
        totalShares: Coin.fromPartial({}),
        poolAssets: [],
        totalWeight: ""
    };
}
export const Pool = {
    typeUrl: "/osmosis.gamm.v1beta1.Pool",
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
        for (const v of message.poolAssets) {
            PoolAsset.encode(v, writer.uint32(50).fork()).ldelim();
        }
        if (message.totalWeight !== "") {
            writer.uint32(58).string(message.totalWeight);
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
                    message.poolAssets.push(PoolAsset.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.totalWeight = reader.string();
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
        message.poolAssets = object.poolAssets?.map(e => PoolAsset.fromPartial(e)) || [];
        message.totalWeight = object.totalWeight ?? "";
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
        message.poolAssets = object.pool_assets?.map(e => PoolAsset.fromAmino(e)) || [];
        if (object.total_weight !== undefined && object.total_weight !== null) {
            message.totalWeight = object.total_weight;
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
        if (message.poolAssets) {
            obj.pool_assets = message.poolAssets.map(e => e ? PoolAsset.toAmino(e) : undefined);
        }
        else {
            obj.pool_assets = message.poolAssets;
        }
        obj.total_weight = message.totalWeight === "" ? undefined : message.totalWeight;
        return obj;
    },
    fromAminoMsg(object) {
        return Pool.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/BalancerPool",
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
            typeUrl: "/osmosis.gamm.v1beta1.Pool",
            value: Pool.encode(message).finish()
        };
    }
};
