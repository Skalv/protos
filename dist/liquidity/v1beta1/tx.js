"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgDirectSwapResponse = exports.MsgDirectSwap = exports.MsgSwapWithinBatchResponse = exports.MsgSwapWithinBatch = exports.MsgWithdrawWithinBatchResponse = exports.MsgWithdrawWithinBatch = exports.MsgDepositWithinBatchResponse = exports.MsgDepositWithinBatch = exports.MsgCreatePoolResponse = exports.MsgCreatePool = void 0;
//@ts-nocheck
const coin_1 = require("../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../binary");
const math_1 = require("@cosmjs/math");
function createBaseMsgCreatePool() {
    return {
        poolCreatorAddress: "",
        poolTypeId: 0,
        depositCoins: []
    };
}
exports.MsgCreatePool = {
    typeUrl: "/liquidity.v1beta1.MsgCreatePool",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolCreatorAddress !== "") {
            writer.uint32(10).string(message.poolCreatorAddress);
        }
        if (message.poolTypeId !== 0) {
            writer.uint32(16).uint32(message.poolTypeId);
        }
        for (const v of message.depositCoins) {
            coin_1.Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreatePool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolCreatorAddress = reader.string();
                    break;
                case 2:
                    message.poolTypeId = reader.uint32();
                    break;
                case 4:
                    message.depositCoins.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreatePool();
        message.poolCreatorAddress = object.poolCreatorAddress ?? "";
        message.poolTypeId = object.poolTypeId ?? 0;
        message.depositCoins = object.depositCoins?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreatePool();
        if (object.pool_creator_address !== undefined && object.pool_creator_address !== null) {
            message.poolCreatorAddress = object.pool_creator_address;
        }
        if (object.pool_type_id !== undefined && object.pool_type_id !== null) {
            message.poolTypeId = object.pool_type_id;
        }
        message.depositCoins = object.deposit_coins?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_creator_address = message.poolCreatorAddress === "" ? undefined : message.poolCreatorAddress;
        obj.pool_type_id = message.poolTypeId === 0 ? undefined : message.poolTypeId;
        if (message.depositCoins) {
            obj.deposit_coins = message.depositCoins.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.deposit_coins = message.depositCoins;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreatePool.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCreatePool.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreatePool.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/liquidity.v1beta1.MsgCreatePool",
            value: exports.MsgCreatePool.encode(message).finish()
        };
    }
};
function createBaseMsgCreatePoolResponse() {
    return {};
}
exports.MsgCreatePoolResponse = {
    typeUrl: "/liquidity.v1beta1.MsgCreatePoolResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreatePoolResponse();
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
        const message = createBaseMsgCreatePoolResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgCreatePoolResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreatePoolResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCreatePoolResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreatePoolResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/liquidity.v1beta1.MsgCreatePoolResponse",
            value: exports.MsgCreatePoolResponse.encode(message).finish()
        };
    }
};
function createBaseMsgDepositWithinBatch() {
    return {
        depositorAddress: "",
        poolId: BigInt(0),
        depositCoins: []
    };
}
exports.MsgDepositWithinBatch = {
    typeUrl: "/liquidity.v1beta1.MsgDepositWithinBatch",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.depositorAddress !== "") {
            writer.uint32(10).string(message.depositorAddress);
        }
        if (message.poolId !== BigInt(0)) {
            writer.uint32(16).uint64(message.poolId);
        }
        for (const v of message.depositCoins) {
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDepositWithinBatch();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.depositorAddress = reader.string();
                    break;
                case 2:
                    message.poolId = reader.uint64();
                    break;
                case 3:
                    message.depositCoins.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgDepositWithinBatch();
        message.depositorAddress = object.depositorAddress ?? "";
        message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
        message.depositCoins = object.depositCoins?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgDepositWithinBatch();
        if (object.depositor_address !== undefined && object.depositor_address !== null) {
            message.depositorAddress = object.depositor_address;
        }
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        message.depositCoins = object.deposit_coins?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.depositor_address = message.depositorAddress === "" ? undefined : message.depositorAddress;
        obj.pool_id = message.poolId ? (message.poolId?.toString)() : "0";
        if (message.depositCoins) {
            obj.deposit_coins = message.depositCoins.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.deposit_coins = message.depositCoins;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgDepositWithinBatch.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgDepositWithinBatch.decode(message.value);
    },
    toProto(message) {
        return exports.MsgDepositWithinBatch.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/liquidity.v1beta1.MsgDepositWithinBatch",
            value: exports.MsgDepositWithinBatch.encode(message).finish()
        };
    }
};
function createBaseMsgDepositWithinBatchResponse() {
    return {};
}
exports.MsgDepositWithinBatchResponse = {
    typeUrl: "/liquidity.v1beta1.MsgDepositWithinBatchResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDepositWithinBatchResponse();
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
        const message = createBaseMsgDepositWithinBatchResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgDepositWithinBatchResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgDepositWithinBatchResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgDepositWithinBatchResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgDepositWithinBatchResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/liquidity.v1beta1.MsgDepositWithinBatchResponse",
            value: exports.MsgDepositWithinBatchResponse.encode(message).finish()
        };
    }
};
function createBaseMsgWithdrawWithinBatch() {
    return {
        withdrawerAddress: "",
        poolId: BigInt(0),
        poolCoin: coin_1.Coin.fromPartial({})
    };
}
exports.MsgWithdrawWithinBatch = {
    typeUrl: "/liquidity.v1beta1.MsgWithdrawWithinBatch",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.withdrawerAddress !== "") {
            writer.uint32(10).string(message.withdrawerAddress);
        }
        if (message.poolId !== BigInt(0)) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.poolCoin !== undefined) {
            coin_1.Coin.encode(message.poolCoin, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawWithinBatch();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.withdrawerAddress = reader.string();
                    break;
                case 2:
                    message.poolId = reader.uint64();
                    break;
                case 3:
                    message.poolCoin = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgWithdrawWithinBatch();
        message.withdrawerAddress = object.withdrawerAddress ?? "";
        message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
        message.poolCoin = object.poolCoin !== undefined && object.poolCoin !== null ? coin_1.Coin.fromPartial(object.poolCoin) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgWithdrawWithinBatch();
        if (object.withdrawer_address !== undefined && object.withdrawer_address !== null) {
            message.withdrawerAddress = object.withdrawer_address;
        }
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        if (object.pool_coin !== undefined && object.pool_coin !== null) {
            message.poolCoin = coin_1.Coin.fromAmino(object.pool_coin);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.withdrawer_address = message.withdrawerAddress === "" ? undefined : message.withdrawerAddress;
        obj.pool_id = message.poolId ? (message.poolId?.toString)() : "0";
        obj.pool_coin = message.poolCoin ? coin_1.Coin.toAmino(message.poolCoin) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgWithdrawWithinBatch.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgWithdrawWithinBatch.decode(message.value);
    },
    toProto(message) {
        return exports.MsgWithdrawWithinBatch.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/liquidity.v1beta1.MsgWithdrawWithinBatch",
            value: exports.MsgWithdrawWithinBatch.encode(message).finish()
        };
    }
};
function createBaseMsgWithdrawWithinBatchResponse() {
    return {};
}
exports.MsgWithdrawWithinBatchResponse = {
    typeUrl: "/liquidity.v1beta1.MsgWithdrawWithinBatchResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawWithinBatchResponse();
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
        const message = createBaseMsgWithdrawWithinBatchResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgWithdrawWithinBatchResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgWithdrawWithinBatchResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgWithdrawWithinBatchResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgWithdrawWithinBatchResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/liquidity.v1beta1.MsgWithdrawWithinBatchResponse",
            value: exports.MsgWithdrawWithinBatchResponse.encode(message).finish()
        };
    }
};
function createBaseMsgSwapWithinBatch() {
    return {
        swapRequesterAddress: "",
        poolId: BigInt(0),
        swapTypeId: 0,
        offerCoin: coin_1.Coin.fromPartial({}),
        demandCoinDenom: "",
        offerCoinFee: coin_1.Coin.fromPartial({}),
        orderPrice: ""
    };
}
exports.MsgSwapWithinBatch = {
    typeUrl: "/liquidity.v1beta1.MsgSwapWithinBatch",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.swapRequesterAddress !== "") {
            writer.uint32(10).string(message.swapRequesterAddress);
        }
        if (message.poolId !== BigInt(0)) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.swapTypeId !== 0) {
            writer.uint32(24).uint32(message.swapTypeId);
        }
        if (message.offerCoin !== undefined) {
            coin_1.Coin.encode(message.offerCoin, writer.uint32(34).fork()).ldelim();
        }
        if (message.demandCoinDenom !== "") {
            writer.uint32(42).string(message.demandCoinDenom);
        }
        if (message.offerCoinFee !== undefined) {
            coin_1.Coin.encode(message.offerCoinFee, writer.uint32(50).fork()).ldelim();
        }
        if (message.orderPrice !== "") {
            writer.uint32(58).string(math_1.Decimal.fromUserInput(message.orderPrice, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSwapWithinBatch();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.swapRequesterAddress = reader.string();
                    break;
                case 2:
                    message.poolId = reader.uint64();
                    break;
                case 3:
                    message.swapTypeId = reader.uint32();
                    break;
                case 4:
                    message.offerCoin = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.demandCoinDenom = reader.string();
                    break;
                case 6:
                    message.offerCoinFee = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.orderPrice = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSwapWithinBatch();
        message.swapRequesterAddress = object.swapRequesterAddress ?? "";
        message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
        message.swapTypeId = object.swapTypeId ?? 0;
        message.offerCoin = object.offerCoin !== undefined && object.offerCoin !== null ? coin_1.Coin.fromPartial(object.offerCoin) : undefined;
        message.demandCoinDenom = object.demandCoinDenom ?? "";
        message.offerCoinFee = object.offerCoinFee !== undefined && object.offerCoinFee !== null ? coin_1.Coin.fromPartial(object.offerCoinFee) : undefined;
        message.orderPrice = object.orderPrice ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSwapWithinBatch();
        if (object.swap_requester_address !== undefined && object.swap_requester_address !== null) {
            message.swapRequesterAddress = object.swap_requester_address;
        }
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        if (object.swap_type_id !== undefined && object.swap_type_id !== null) {
            message.swapTypeId = object.swap_type_id;
        }
        if (object.offer_coin !== undefined && object.offer_coin !== null) {
            message.offerCoin = coin_1.Coin.fromAmino(object.offer_coin);
        }
        if (object.demand_coin_denom !== undefined && object.demand_coin_denom !== null) {
            message.demandCoinDenom = object.demand_coin_denom;
        }
        if (object.offer_coin_fee !== undefined && object.offer_coin_fee !== null) {
            message.offerCoinFee = coin_1.Coin.fromAmino(object.offer_coin_fee);
        }
        if (object.order_price !== undefined && object.order_price !== null) {
            message.orderPrice = object.order_price;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.swap_requester_address = message.swapRequesterAddress === "" ? undefined : message.swapRequesterAddress;
        obj.pool_id = message.poolId ? (message.poolId?.toString)() : "0";
        obj.swap_type_id = message.swapTypeId === 0 ? undefined : message.swapTypeId;
        obj.offer_coin = message.offerCoin ? coin_1.Coin.toAmino(message.offerCoin) : undefined;
        obj.demand_coin_denom = message.demandCoinDenom === "" ? undefined : message.demandCoinDenom;
        obj.offer_coin_fee = message.offerCoinFee ? coin_1.Coin.toAmino(message.offerCoinFee) : undefined;
        obj.order_price = message.orderPrice === "" ? undefined : message.orderPrice;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSwapWithinBatch.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgSwapWithinBatch.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSwapWithinBatch.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/liquidity.v1beta1.MsgSwapWithinBatch",
            value: exports.MsgSwapWithinBatch.encode(message).finish()
        };
    }
};
function createBaseMsgSwapWithinBatchResponse() {
    return {};
}
exports.MsgSwapWithinBatchResponse = {
    typeUrl: "/liquidity.v1beta1.MsgSwapWithinBatchResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSwapWithinBatchResponse();
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
        const message = createBaseMsgSwapWithinBatchResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgSwapWithinBatchResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSwapWithinBatchResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgSwapWithinBatchResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSwapWithinBatchResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/liquidity.v1beta1.MsgSwapWithinBatchResponse",
            value: exports.MsgSwapWithinBatchResponse.encode(message).finish()
        };
    }
};
function createBaseMsgDirectSwap() {
    return {
        swapRequesterAddress: "",
        poolId: BigInt(0),
        swapTypeId: 0,
        offerCoin: coin_1.Coin.fromPartial({}),
        demandCoinDenom: "",
        orderPrice: ""
    };
}
exports.MsgDirectSwap = {
    typeUrl: "/liquidity.v1beta1.MsgDirectSwap",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.swapRequesterAddress !== "") {
            writer.uint32(10).string(message.swapRequesterAddress);
        }
        if (message.poolId !== BigInt(0)) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.swapTypeId !== 0) {
            writer.uint32(24).uint32(message.swapTypeId);
        }
        if (message.offerCoin !== undefined) {
            coin_1.Coin.encode(message.offerCoin, writer.uint32(34).fork()).ldelim();
        }
        if (message.demandCoinDenom !== "") {
            writer.uint32(42).string(message.demandCoinDenom);
        }
        if (message.orderPrice !== "") {
            writer.uint32(58).string(math_1.Decimal.fromUserInput(message.orderPrice, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDirectSwap();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.swapRequesterAddress = reader.string();
                    break;
                case 2:
                    message.poolId = reader.uint64();
                    break;
                case 3:
                    message.swapTypeId = reader.uint32();
                    break;
                case 4:
                    message.offerCoin = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.demandCoinDenom = reader.string();
                    break;
                case 7:
                    message.orderPrice = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgDirectSwap();
        message.swapRequesterAddress = object.swapRequesterAddress ?? "";
        message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
        message.swapTypeId = object.swapTypeId ?? 0;
        message.offerCoin = object.offerCoin !== undefined && object.offerCoin !== null ? coin_1.Coin.fromPartial(object.offerCoin) : undefined;
        message.demandCoinDenom = object.demandCoinDenom ?? "";
        message.orderPrice = object.orderPrice ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgDirectSwap();
        if (object.swap_requester_address !== undefined && object.swap_requester_address !== null) {
            message.swapRequesterAddress = object.swap_requester_address;
        }
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        if (object.swap_type_id !== undefined && object.swap_type_id !== null) {
            message.swapTypeId = object.swap_type_id;
        }
        if (object.offer_coin !== undefined && object.offer_coin !== null) {
            message.offerCoin = coin_1.Coin.fromAmino(object.offer_coin);
        }
        if (object.demand_coin_denom !== undefined && object.demand_coin_denom !== null) {
            message.demandCoinDenom = object.demand_coin_denom;
        }
        if (object.order_price !== undefined && object.order_price !== null) {
            message.orderPrice = object.order_price;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.swap_requester_address = message.swapRequesterAddress === "" ? undefined : message.swapRequesterAddress;
        obj.pool_id = message.poolId ? (message.poolId?.toString)() : "0";
        obj.swap_type_id = message.swapTypeId === 0 ? undefined : message.swapTypeId;
        obj.offer_coin = message.offerCoin ? coin_1.Coin.toAmino(message.offerCoin) : undefined;
        obj.demand_coin_denom = message.demandCoinDenom === "" ? undefined : message.demandCoinDenom;
        obj.order_price = message.orderPrice === "" ? undefined : message.orderPrice;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgDirectSwap.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgDirectSwap.decode(message.value);
    },
    toProto(message) {
        return exports.MsgDirectSwap.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/liquidity.v1beta1.MsgDirectSwap",
            value: exports.MsgDirectSwap.encode(message).finish()
        };
    }
};
function createBaseMsgDirectSwapResponse() {
    return {
        receivedAmount: coin_1.Coin.fromPartial({})
    };
}
exports.MsgDirectSwapResponse = {
    typeUrl: "/liquidity.v1beta1.MsgDirectSwapResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.receivedAmount !== undefined) {
            coin_1.Coin.encode(message.receivedAmount, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDirectSwapResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.receivedAmount = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgDirectSwapResponse();
        message.receivedAmount = object.receivedAmount !== undefined && object.receivedAmount !== null ? coin_1.Coin.fromPartial(object.receivedAmount) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgDirectSwapResponse();
        if (object.received_amount !== undefined && object.received_amount !== null) {
            message.receivedAmount = coin_1.Coin.fromAmino(object.received_amount);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.received_amount = message.receivedAmount ? coin_1.Coin.toAmino(message.receivedAmount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgDirectSwapResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgDirectSwapResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgDirectSwapResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/liquidity.v1beta1.MsgDirectSwapResponse",
            value: exports.MsgDirectSwapResponse.encode(message).finish()
        };
    }
};
