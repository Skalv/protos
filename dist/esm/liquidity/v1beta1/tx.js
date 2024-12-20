//@ts-nocheck
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
function createBaseMsgCreatePool() {
    return {
        poolCreatorAddress: "",
        poolTypeId: 0,
        depositCoins: []
    };
}
export const MsgCreatePool = {
    typeUrl: "/liquidity.v1beta1.MsgCreatePool",
    encode(message, writer = BinaryWriter.create()) {
        if (message.poolCreatorAddress !== "") {
            writer.uint32(10).string(message.poolCreatorAddress);
        }
        if (message.poolTypeId !== 0) {
            writer.uint32(16).uint32(message.poolTypeId);
        }
        for (const v of message.depositCoins) {
            Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.depositCoins.push(Coin.decode(reader, reader.uint32()));
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
        message.depositCoins = object.depositCoins?.map(e => Coin.fromPartial(e)) || [];
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
        message.depositCoins = object.deposit_coins?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_creator_address = message.poolCreatorAddress === "" ? undefined : message.poolCreatorAddress;
        obj.pool_type_id = message.poolTypeId === 0 ? undefined : message.poolTypeId;
        if (message.depositCoins) {
            obj.deposit_coins = message.depositCoins.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.deposit_coins = message.depositCoins;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreatePool.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCreatePool.decode(message.value);
    },
    toProto(message) {
        return MsgCreatePool.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/liquidity.v1beta1.MsgCreatePool",
            value: MsgCreatePool.encode(message).finish()
        };
    }
};
function createBaseMsgCreatePoolResponse() {
    return {};
}
export const MsgCreatePoolResponse = {
    typeUrl: "/liquidity.v1beta1.MsgCreatePoolResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgCreatePoolResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCreatePoolResponse.decode(message.value);
    },
    toProto(message) {
        return MsgCreatePoolResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/liquidity.v1beta1.MsgCreatePoolResponse",
            value: MsgCreatePoolResponse.encode(message).finish()
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
export const MsgDepositWithinBatch = {
    typeUrl: "/liquidity.v1beta1.MsgDepositWithinBatch",
    encode(message, writer = BinaryWriter.create()) {
        if (message.depositorAddress !== "") {
            writer.uint32(10).string(message.depositorAddress);
        }
        if (message.poolId !== BigInt(0)) {
            writer.uint32(16).uint64(message.poolId);
        }
        for (const v of message.depositCoins) {
            Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.depositCoins.push(Coin.decode(reader, reader.uint32()));
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
        message.depositCoins = object.depositCoins?.map(e => Coin.fromPartial(e)) || [];
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
        message.depositCoins = object.deposit_coins?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.depositor_address = message.depositorAddress === "" ? undefined : message.depositorAddress;
        obj.pool_id = message.poolId ? (message.poolId?.toString)() : "0";
        if (message.depositCoins) {
            obj.deposit_coins = message.depositCoins.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.deposit_coins = message.depositCoins;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgDepositWithinBatch.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgDepositWithinBatch.decode(message.value);
    },
    toProto(message) {
        return MsgDepositWithinBatch.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/liquidity.v1beta1.MsgDepositWithinBatch",
            value: MsgDepositWithinBatch.encode(message).finish()
        };
    }
};
function createBaseMsgDepositWithinBatchResponse() {
    return {};
}
export const MsgDepositWithinBatchResponse = {
    typeUrl: "/liquidity.v1beta1.MsgDepositWithinBatchResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgDepositWithinBatchResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgDepositWithinBatchResponse.decode(message.value);
    },
    toProto(message) {
        return MsgDepositWithinBatchResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/liquidity.v1beta1.MsgDepositWithinBatchResponse",
            value: MsgDepositWithinBatchResponse.encode(message).finish()
        };
    }
};
function createBaseMsgWithdrawWithinBatch() {
    return {
        withdrawerAddress: "",
        poolId: BigInt(0),
        poolCoin: Coin.fromPartial({})
    };
}
export const MsgWithdrawWithinBatch = {
    typeUrl: "/liquidity.v1beta1.MsgWithdrawWithinBatch",
    encode(message, writer = BinaryWriter.create()) {
        if (message.withdrawerAddress !== "") {
            writer.uint32(10).string(message.withdrawerAddress);
        }
        if (message.poolId !== BigInt(0)) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.poolCoin !== undefined) {
            Coin.encode(message.poolCoin, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.poolCoin = Coin.decode(reader, reader.uint32());
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
        message.poolCoin = object.poolCoin !== undefined && object.poolCoin !== null ? Coin.fromPartial(object.poolCoin) : undefined;
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
            message.poolCoin = Coin.fromAmino(object.pool_coin);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.withdrawer_address = message.withdrawerAddress === "" ? undefined : message.withdrawerAddress;
        obj.pool_id = message.poolId ? (message.poolId?.toString)() : "0";
        obj.pool_coin = message.poolCoin ? Coin.toAmino(message.poolCoin) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgWithdrawWithinBatch.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgWithdrawWithinBatch.decode(message.value);
    },
    toProto(message) {
        return MsgWithdrawWithinBatch.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/liquidity.v1beta1.MsgWithdrawWithinBatch",
            value: MsgWithdrawWithinBatch.encode(message).finish()
        };
    }
};
function createBaseMsgWithdrawWithinBatchResponse() {
    return {};
}
export const MsgWithdrawWithinBatchResponse = {
    typeUrl: "/liquidity.v1beta1.MsgWithdrawWithinBatchResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgWithdrawWithinBatchResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgWithdrawWithinBatchResponse.decode(message.value);
    },
    toProto(message) {
        return MsgWithdrawWithinBatchResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/liquidity.v1beta1.MsgWithdrawWithinBatchResponse",
            value: MsgWithdrawWithinBatchResponse.encode(message).finish()
        };
    }
};
function createBaseMsgSwapWithinBatch() {
    return {
        swapRequesterAddress: "",
        poolId: BigInt(0),
        swapTypeId: 0,
        offerCoin: Coin.fromPartial({}),
        demandCoinDenom: "",
        offerCoinFee: Coin.fromPartial({}),
        orderPrice: ""
    };
}
export const MsgSwapWithinBatch = {
    typeUrl: "/liquidity.v1beta1.MsgSwapWithinBatch",
    encode(message, writer = BinaryWriter.create()) {
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
            Coin.encode(message.offerCoin, writer.uint32(34).fork()).ldelim();
        }
        if (message.demandCoinDenom !== "") {
            writer.uint32(42).string(message.demandCoinDenom);
        }
        if (message.offerCoinFee !== undefined) {
            Coin.encode(message.offerCoinFee, writer.uint32(50).fork()).ldelim();
        }
        if (message.orderPrice !== "") {
            writer.uint32(58).string(Decimal.fromUserInput(message.orderPrice, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.offerCoin = Coin.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.demandCoinDenom = reader.string();
                    break;
                case 6:
                    message.offerCoinFee = Coin.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.orderPrice = Decimal.fromAtomics(reader.string(), 18).toString();
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
        message.offerCoin = object.offerCoin !== undefined && object.offerCoin !== null ? Coin.fromPartial(object.offerCoin) : undefined;
        message.demandCoinDenom = object.demandCoinDenom ?? "";
        message.offerCoinFee = object.offerCoinFee !== undefined && object.offerCoinFee !== null ? Coin.fromPartial(object.offerCoinFee) : undefined;
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
            message.offerCoin = Coin.fromAmino(object.offer_coin);
        }
        if (object.demand_coin_denom !== undefined && object.demand_coin_denom !== null) {
            message.demandCoinDenom = object.demand_coin_denom;
        }
        if (object.offer_coin_fee !== undefined && object.offer_coin_fee !== null) {
            message.offerCoinFee = Coin.fromAmino(object.offer_coin_fee);
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
        obj.offer_coin = message.offerCoin ? Coin.toAmino(message.offerCoin) : undefined;
        obj.demand_coin_denom = message.demandCoinDenom === "" ? undefined : message.demandCoinDenom;
        obj.offer_coin_fee = message.offerCoinFee ? Coin.toAmino(message.offerCoinFee) : undefined;
        obj.order_price = message.orderPrice === "" ? undefined : message.orderPrice;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSwapWithinBatch.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgSwapWithinBatch.decode(message.value);
    },
    toProto(message) {
        return MsgSwapWithinBatch.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/liquidity.v1beta1.MsgSwapWithinBatch",
            value: MsgSwapWithinBatch.encode(message).finish()
        };
    }
};
function createBaseMsgSwapWithinBatchResponse() {
    return {};
}
export const MsgSwapWithinBatchResponse = {
    typeUrl: "/liquidity.v1beta1.MsgSwapWithinBatchResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgSwapWithinBatchResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgSwapWithinBatchResponse.decode(message.value);
    },
    toProto(message) {
        return MsgSwapWithinBatchResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/liquidity.v1beta1.MsgSwapWithinBatchResponse",
            value: MsgSwapWithinBatchResponse.encode(message).finish()
        };
    }
};
function createBaseMsgDirectSwap() {
    return {
        swapRequesterAddress: "",
        poolId: BigInt(0),
        swapTypeId: 0,
        offerCoin: Coin.fromPartial({}),
        demandCoinDenom: "",
        orderPrice: ""
    };
}
export const MsgDirectSwap = {
    typeUrl: "/liquidity.v1beta1.MsgDirectSwap",
    encode(message, writer = BinaryWriter.create()) {
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
            Coin.encode(message.offerCoin, writer.uint32(34).fork()).ldelim();
        }
        if (message.demandCoinDenom !== "") {
            writer.uint32(42).string(message.demandCoinDenom);
        }
        if (message.orderPrice !== "") {
            writer.uint32(58).string(Decimal.fromUserInput(message.orderPrice, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.offerCoin = Coin.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.demandCoinDenom = reader.string();
                    break;
                case 7:
                    message.orderPrice = Decimal.fromAtomics(reader.string(), 18).toString();
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
        message.offerCoin = object.offerCoin !== undefined && object.offerCoin !== null ? Coin.fromPartial(object.offerCoin) : undefined;
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
            message.offerCoin = Coin.fromAmino(object.offer_coin);
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
        obj.offer_coin = message.offerCoin ? Coin.toAmino(message.offerCoin) : undefined;
        obj.demand_coin_denom = message.demandCoinDenom === "" ? undefined : message.demandCoinDenom;
        obj.order_price = message.orderPrice === "" ? undefined : message.orderPrice;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgDirectSwap.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgDirectSwap.decode(message.value);
    },
    toProto(message) {
        return MsgDirectSwap.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/liquidity.v1beta1.MsgDirectSwap",
            value: MsgDirectSwap.encode(message).finish()
        };
    }
};
function createBaseMsgDirectSwapResponse() {
    return {
        receivedAmount: Coin.fromPartial({})
    };
}
export const MsgDirectSwapResponse = {
    typeUrl: "/liquidity.v1beta1.MsgDirectSwapResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.receivedAmount !== undefined) {
            Coin.encode(message.receivedAmount, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDirectSwapResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.receivedAmount = Coin.decode(reader, reader.uint32());
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
        message.receivedAmount = object.receivedAmount !== undefined && object.receivedAmount !== null ? Coin.fromPartial(object.receivedAmount) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgDirectSwapResponse();
        if (object.received_amount !== undefined && object.received_amount !== null) {
            message.receivedAmount = Coin.fromAmino(object.received_amount);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.received_amount = message.receivedAmount ? Coin.toAmino(message.receivedAmount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgDirectSwapResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgDirectSwapResponse.decode(message.value);
    },
    toProto(message) {
        return MsgDirectSwapResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/liquidity.v1beta1.MsgDirectSwapResponse",
            value: MsgDirectSwapResponse.encode(message).finish()
        };
    }
};
