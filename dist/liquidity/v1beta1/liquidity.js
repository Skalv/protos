"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwapMsgState = exports.WithdrawMsgState = exports.DepositMsgState = exports.PoolBatch = exports.PoolMetadata = exports.Pool = exports.Params = exports.PoolType = exports.WeightedAddress = void 0;
//@ts-nocheck
const coin_1 = require("../../cosmos/base/v1beta1/coin");
const tx_1 = require("./tx");
const binary_1 = require("../../binary");
const math_1 = require("@cosmjs/math");
function createBaseWeightedAddress() {
    return {
        address: "",
        weight: ""
    };
}
exports.WeightedAddress = {
    typeUrl: "/liquidity.v1beta1.WeightedAddress",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.weight !== "") {
            writer.uint32(18).string(math_1.Decimal.fromUserInput(message.weight, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWeightedAddress();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.weight = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseWeightedAddress();
        message.address = object.address ?? "";
        message.weight = object.weight ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseWeightedAddress();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.weight !== undefined && object.weight !== null) {
            message.weight = object.weight;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        obj.weight = message.weight === "" ? undefined : message.weight;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.WeightedAddress.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.WeightedAddress.decode(message.value);
    },
    toProto(message) {
        return exports.WeightedAddress.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/liquidity.v1beta1.WeightedAddress",
            value: exports.WeightedAddress.encode(message).finish()
        };
    }
};
function createBasePoolType() {
    return {
        id: 0,
        name: "",
        minReserveCoinNum: 0,
        maxReserveCoinNum: 0,
        description: ""
    };
}
exports.PoolType = {
    typeUrl: "/liquidity.v1beta1.PoolType",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint32(message.id);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.minReserveCoinNum !== 0) {
            writer.uint32(24).uint32(message.minReserveCoinNum);
        }
        if (message.maxReserveCoinNum !== 0) {
            writer.uint32(32).uint32(message.maxReserveCoinNum);
        }
        if (message.description !== "") {
            writer.uint32(42).string(message.description);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePoolType();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.minReserveCoinNum = reader.uint32();
                    break;
                case 4:
                    message.maxReserveCoinNum = reader.uint32();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePoolType();
        message.id = object.id ?? 0;
        message.name = object.name ?? "";
        message.minReserveCoinNum = object.minReserveCoinNum ?? 0;
        message.maxReserveCoinNum = object.maxReserveCoinNum ?? 0;
        message.description = object.description ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBasePoolType();
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.min_reserve_coin_num !== undefined && object.min_reserve_coin_num !== null) {
            message.minReserveCoinNum = object.min_reserve_coin_num;
        }
        if (object.max_reserve_coin_num !== undefined && object.max_reserve_coin_num !== null) {
            message.maxReserveCoinNum = object.max_reserve_coin_num;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id === 0 ? undefined : message.id;
        obj.name = message.name === "" ? undefined : message.name;
        obj.min_reserve_coin_num = message.minReserveCoinNum === 0 ? undefined : message.minReserveCoinNum;
        obj.max_reserve_coin_num = message.maxReserveCoinNum === 0 ? undefined : message.maxReserveCoinNum;
        obj.description = message.description === "" ? undefined : message.description;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PoolType.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.PoolType.decode(message.value);
    },
    toProto(message) {
        return exports.PoolType.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/liquidity.v1beta1.PoolType",
            value: exports.PoolType.encode(message).finish()
        };
    }
};
function createBaseParams() {
    return {
        poolTypes: [],
        minInitDepositAmount: "",
        initPoolCoinMintAmount: "",
        maxReserveCoinAmount: "",
        poolCreationFee: [],
        swapFeeRate: "",
        withdrawFeeRate: "",
        maxOrderAmountRatio: "",
        unitBatchHeight: 0,
        circuitBreakerEnabled: false,
        buildersAddresses: [],
        buildersCommission: ""
    };
}
exports.Params = {
    typeUrl: "/liquidity.v1beta1.Params",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.poolTypes) {
            exports.PoolType.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.minInitDepositAmount !== "") {
            writer.uint32(18).string(message.minInitDepositAmount);
        }
        if (message.initPoolCoinMintAmount !== "") {
            writer.uint32(26).string(message.initPoolCoinMintAmount);
        }
        if (message.maxReserveCoinAmount !== "") {
            writer.uint32(34).string(message.maxReserveCoinAmount);
        }
        for (const v of message.poolCreationFee) {
            coin_1.Coin.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.swapFeeRate !== "") {
            writer.uint32(50).string(math_1.Decimal.fromUserInput(message.swapFeeRate, 18).atomics);
        }
        if (message.withdrawFeeRate !== "") {
            writer.uint32(58).string(math_1.Decimal.fromUserInput(message.withdrawFeeRate, 18).atomics);
        }
        if (message.maxOrderAmountRatio !== "") {
            writer.uint32(66).string(math_1.Decimal.fromUserInput(message.maxOrderAmountRatio, 18).atomics);
        }
        if (message.unitBatchHeight !== 0) {
            writer.uint32(72).uint32(message.unitBatchHeight);
        }
        if (message.circuitBreakerEnabled === true) {
            writer.uint32(80).bool(message.circuitBreakerEnabled);
        }
        for (const v of message.buildersAddresses) {
            exports.WeightedAddress.encode(v, writer.uint32(90).fork()).ldelim();
        }
        if (message.buildersCommission !== "") {
            writer.uint32(98).string(math_1.Decimal.fromUserInput(message.buildersCommission, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolTypes.push(exports.PoolType.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.minInitDepositAmount = reader.string();
                    break;
                case 3:
                    message.initPoolCoinMintAmount = reader.string();
                    break;
                case 4:
                    message.maxReserveCoinAmount = reader.string();
                    break;
                case 5:
                    message.poolCreationFee.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.swapFeeRate = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 7:
                    message.withdrawFeeRate = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 8:
                    message.maxOrderAmountRatio = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 9:
                    message.unitBatchHeight = reader.uint32();
                    break;
                case 10:
                    message.circuitBreakerEnabled = reader.bool();
                    break;
                case 11:
                    message.buildersAddresses.push(exports.WeightedAddress.decode(reader, reader.uint32()));
                    break;
                case 12:
                    message.buildersCommission = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.poolTypes = object.poolTypes?.map(e => exports.PoolType.fromPartial(e)) || [];
        message.minInitDepositAmount = object.minInitDepositAmount ?? "";
        message.initPoolCoinMintAmount = object.initPoolCoinMintAmount ?? "";
        message.maxReserveCoinAmount = object.maxReserveCoinAmount ?? "";
        message.poolCreationFee = object.poolCreationFee?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.swapFeeRate = object.swapFeeRate ?? "";
        message.withdrawFeeRate = object.withdrawFeeRate ?? "";
        message.maxOrderAmountRatio = object.maxOrderAmountRatio ?? "";
        message.unitBatchHeight = object.unitBatchHeight ?? 0;
        message.circuitBreakerEnabled = object.circuitBreakerEnabled ?? false;
        message.buildersAddresses = object.buildersAddresses?.map(e => exports.WeightedAddress.fromPartial(e)) || [];
        message.buildersCommission = object.buildersCommission ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        message.poolTypes = object.pool_types?.map(e => exports.PoolType.fromAmino(e)) || [];
        if (object.min_init_deposit_amount !== undefined && object.min_init_deposit_amount !== null) {
            message.minInitDepositAmount = object.min_init_deposit_amount;
        }
        if (object.init_pool_coin_mint_amount !== undefined && object.init_pool_coin_mint_amount !== null) {
            message.initPoolCoinMintAmount = object.init_pool_coin_mint_amount;
        }
        if (object.max_reserve_coin_amount !== undefined && object.max_reserve_coin_amount !== null) {
            message.maxReserveCoinAmount = object.max_reserve_coin_amount;
        }
        message.poolCreationFee = object.pool_creation_fee?.map(e => coin_1.Coin.fromAmino(e)) || [];
        if (object.swap_fee_rate !== undefined && object.swap_fee_rate !== null) {
            message.swapFeeRate = object.swap_fee_rate;
        }
        if (object.withdraw_fee_rate !== undefined && object.withdraw_fee_rate !== null) {
            message.withdrawFeeRate = object.withdraw_fee_rate;
        }
        if (object.max_order_amount_ratio !== undefined && object.max_order_amount_ratio !== null) {
            message.maxOrderAmountRatio = object.max_order_amount_ratio;
        }
        if (object.unit_batch_height !== undefined && object.unit_batch_height !== null) {
            message.unitBatchHeight = object.unit_batch_height;
        }
        if (object.circuit_breaker_enabled !== undefined && object.circuit_breaker_enabled !== null) {
            message.circuitBreakerEnabled = object.circuit_breaker_enabled;
        }
        message.buildersAddresses = object.builders_addresses?.map(e => exports.WeightedAddress.fromAmino(e)) || [];
        if (object.builders_commission !== undefined && object.builders_commission !== null) {
            message.buildersCommission = object.builders_commission;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.poolTypes) {
            obj.pool_types = message.poolTypes.map(e => e ? exports.PoolType.toAmino(e) : undefined);
        }
        else {
            obj.pool_types = message.poolTypes;
        }
        obj.min_init_deposit_amount = message.minInitDepositAmount === "" ? undefined : message.minInitDepositAmount;
        obj.init_pool_coin_mint_amount = message.initPoolCoinMintAmount === "" ? undefined : message.initPoolCoinMintAmount;
        obj.max_reserve_coin_amount = message.maxReserveCoinAmount === "" ? undefined : message.maxReserveCoinAmount;
        if (message.poolCreationFee) {
            obj.pool_creation_fee = message.poolCreationFee.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.pool_creation_fee = message.poolCreationFee;
        }
        obj.swap_fee_rate = message.swapFeeRate === "" ? undefined : message.swapFeeRate;
        obj.withdraw_fee_rate = message.withdrawFeeRate === "" ? undefined : message.withdrawFeeRate;
        obj.max_order_amount_ratio = message.maxOrderAmountRatio === "" ? undefined : message.maxOrderAmountRatio;
        obj.unit_batch_height = message.unitBatchHeight === 0 ? undefined : message.unitBatchHeight;
        obj.circuit_breaker_enabled = message.circuitBreakerEnabled === false ? undefined : message.circuitBreakerEnabled;
        if (message.buildersAddresses) {
            obj.builders_addresses = message.buildersAddresses.map(e => e ? exports.WeightedAddress.toAmino(e) : undefined);
        }
        else {
            obj.builders_addresses = message.buildersAddresses;
        }
        obj.builders_commission = message.buildersCommission === "" ? undefined : message.buildersCommission;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Params.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Params.decode(message.value);
    },
    toProto(message) {
        return exports.Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/liquidity.v1beta1.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
function createBasePool() {
    return {
        id: BigInt(0),
        typeId: 0,
        reserveCoinDenoms: [],
        reserveAccountAddress: "",
        poolCoinDenom: ""
    };
}
exports.Pool = {
    typeUrl: "/liquidity.v1beta1.Pool",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.typeId !== 0) {
            writer.uint32(16).uint32(message.typeId);
        }
        for (const v of message.reserveCoinDenoms) {
            writer.uint32(26).string(v);
        }
        if (message.reserveAccountAddress !== "") {
            writer.uint32(34).string(message.reserveAccountAddress);
        }
        if (message.poolCoinDenom !== "") {
            writer.uint32(42).string(message.poolCoinDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.typeId = reader.uint32();
                    break;
                case 3:
                    message.reserveCoinDenoms.push(reader.string());
                    break;
                case 4:
                    message.reserveAccountAddress = reader.string();
                    break;
                case 5:
                    message.poolCoinDenom = reader.string();
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
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        message.typeId = object.typeId ?? 0;
        message.reserveCoinDenoms = object.reserveCoinDenoms?.map(e => e) || [];
        message.reserveAccountAddress = object.reserveAccountAddress ?? "";
        message.poolCoinDenom = object.poolCoinDenom ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBasePool();
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id);
        }
        if (object.type_id !== undefined && object.type_id !== null) {
            message.typeId = object.type_id;
        }
        message.reserveCoinDenoms = object.reserve_coin_denoms?.map(e => e) || [];
        if (object.reserve_account_address !== undefined && object.reserve_account_address !== null) {
            message.reserveAccountAddress = object.reserve_account_address;
        }
        if (object.pool_coin_denom !== undefined && object.pool_coin_denom !== null) {
            message.poolCoinDenom = object.pool_coin_denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id ? (message.id?.toString)() : "0";
        obj.type_id = message.typeId === 0 ? undefined : message.typeId;
        if (message.reserveCoinDenoms) {
            obj.reserve_coin_denoms = message.reserveCoinDenoms.map(e => e);
        }
        else {
            obj.reserve_coin_denoms = message.reserveCoinDenoms;
        }
        obj.reserve_account_address = message.reserveAccountAddress === "" ? undefined : message.reserveAccountAddress;
        obj.pool_coin_denom = message.poolCoinDenom === "" ? undefined : message.poolCoinDenom;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Pool.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Pool.decode(message.value);
    },
    toProto(message) {
        return exports.Pool.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/liquidity.v1beta1.Pool",
            value: exports.Pool.encode(message).finish()
        };
    }
};
function createBasePoolMetadata() {
    return {
        poolId: BigInt(0),
        poolCoinTotalSupply: coin_1.Coin.fromPartial({}),
        reserveCoins: []
    };
}
exports.PoolMetadata = {
    typeUrl: "/liquidity.v1beta1.PoolMetadata",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.poolCoinTotalSupply !== undefined) {
            coin_1.Coin.encode(message.poolCoinTotalSupply, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.reserveCoins) {
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePoolMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.poolCoinTotalSupply = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.reserveCoins.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePoolMetadata();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
        message.poolCoinTotalSupply = object.poolCoinTotalSupply !== undefined && object.poolCoinTotalSupply !== null ? coin_1.Coin.fromPartial(object.poolCoinTotalSupply) : undefined;
        message.reserveCoins = object.reserveCoins?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBasePoolMetadata();
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        if (object.pool_coin_total_supply !== undefined && object.pool_coin_total_supply !== null) {
            message.poolCoinTotalSupply = coin_1.Coin.fromAmino(object.pool_coin_total_supply);
        }
        message.reserveCoins = object.reserve_coins?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId ? (message.poolId?.toString)() : "0";
        obj.pool_coin_total_supply = message.poolCoinTotalSupply ? coin_1.Coin.toAmino(message.poolCoinTotalSupply) : undefined;
        if (message.reserveCoins) {
            obj.reserve_coins = message.reserveCoins.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.reserve_coins = message.reserveCoins;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PoolMetadata.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.PoolMetadata.decode(message.value);
    },
    toProto(message) {
        return exports.PoolMetadata.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/liquidity.v1beta1.PoolMetadata",
            value: exports.PoolMetadata.encode(message).finish()
        };
    }
};
function createBasePoolBatch() {
    return {
        poolId: BigInt(0),
        index: BigInt(0),
        beginHeight: BigInt(0),
        depositMsgIndex: BigInt(0),
        withdrawMsgIndex: BigInt(0),
        swapMsgIndex: BigInt(0),
        executed: false
    };
}
exports.PoolBatch = {
    typeUrl: "/liquidity.v1beta1.PoolBatch",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.index !== BigInt(0)) {
            writer.uint32(16).uint64(message.index);
        }
        if (message.beginHeight !== BigInt(0)) {
            writer.uint32(24).int64(message.beginHeight);
        }
        if (message.depositMsgIndex !== BigInt(0)) {
            writer.uint32(32).uint64(message.depositMsgIndex);
        }
        if (message.withdrawMsgIndex !== BigInt(0)) {
            writer.uint32(40).uint64(message.withdrawMsgIndex);
        }
        if (message.swapMsgIndex !== BigInt(0)) {
            writer.uint32(48).uint64(message.swapMsgIndex);
        }
        if (message.executed === true) {
            writer.uint32(56).bool(message.executed);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePoolBatch();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.index = reader.uint64();
                    break;
                case 3:
                    message.beginHeight = reader.int64();
                    break;
                case 4:
                    message.depositMsgIndex = reader.uint64();
                    break;
                case 5:
                    message.withdrawMsgIndex = reader.uint64();
                    break;
                case 6:
                    message.swapMsgIndex = reader.uint64();
                    break;
                case 7:
                    message.executed = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePoolBatch();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
        message.index = object.index !== undefined && object.index !== null ? BigInt(object.index.toString()) : BigInt(0);
        message.beginHeight = object.beginHeight !== undefined && object.beginHeight !== null ? BigInt(object.beginHeight.toString()) : BigInt(0);
        message.depositMsgIndex = object.depositMsgIndex !== undefined && object.depositMsgIndex !== null ? BigInt(object.depositMsgIndex.toString()) : BigInt(0);
        message.withdrawMsgIndex = object.withdrawMsgIndex !== undefined && object.withdrawMsgIndex !== null ? BigInt(object.withdrawMsgIndex.toString()) : BigInt(0);
        message.swapMsgIndex = object.swapMsgIndex !== undefined && object.swapMsgIndex !== null ? BigInt(object.swapMsgIndex.toString()) : BigInt(0);
        message.executed = object.executed ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBasePoolBatch();
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = BigInt(object.index);
        }
        if (object.begin_height !== undefined && object.begin_height !== null) {
            message.beginHeight = BigInt(object.begin_height);
        }
        if (object.deposit_msg_index !== undefined && object.deposit_msg_index !== null) {
            message.depositMsgIndex = BigInt(object.deposit_msg_index);
        }
        if (object.withdraw_msg_index !== undefined && object.withdraw_msg_index !== null) {
            message.withdrawMsgIndex = BigInt(object.withdraw_msg_index);
        }
        if (object.swap_msg_index !== undefined && object.swap_msg_index !== null) {
            message.swapMsgIndex = BigInt(object.swap_msg_index);
        }
        if (object.executed !== undefined && object.executed !== null) {
            message.executed = object.executed;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId ? (message.poolId?.toString)() : "0";
        obj.index = message.index !== BigInt(0) ? (message.index?.toString)() : undefined;
        obj.begin_height = message.beginHeight !== BigInt(0) ? (message.beginHeight?.toString)() : undefined;
        obj.deposit_msg_index = message.depositMsgIndex !== BigInt(0) ? (message.depositMsgIndex?.toString)() : undefined;
        obj.withdraw_msg_index = message.withdrawMsgIndex !== BigInt(0) ? (message.withdrawMsgIndex?.toString)() : undefined;
        obj.swap_msg_index = message.swapMsgIndex !== BigInt(0) ? (message.swapMsgIndex?.toString)() : undefined;
        obj.executed = message.executed === false ? undefined : message.executed;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PoolBatch.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.PoolBatch.decode(message.value);
    },
    toProto(message) {
        return exports.PoolBatch.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/liquidity.v1beta1.PoolBatch",
            value: exports.PoolBatch.encode(message).finish()
        };
    }
};
function createBaseDepositMsgState() {
    return {
        msgHeight: BigInt(0),
        msgIndex: BigInt(0),
        executed: false,
        succeeded: false,
        toBeDeleted: false,
        msg: undefined
    };
}
exports.DepositMsgState = {
    typeUrl: "/liquidity.v1beta1.DepositMsgState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.msgHeight !== BigInt(0)) {
            writer.uint32(8).int64(message.msgHeight);
        }
        if (message.msgIndex !== BigInt(0)) {
            writer.uint32(16).uint64(message.msgIndex);
        }
        if (message.executed === true) {
            writer.uint32(24).bool(message.executed);
        }
        if (message.succeeded === true) {
            writer.uint32(32).bool(message.succeeded);
        }
        if (message.toBeDeleted === true) {
            writer.uint32(40).bool(message.toBeDeleted);
        }
        if (message.msg !== undefined) {
            tx_1.MsgDepositWithinBatch.encode(message.msg, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDepositMsgState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.msgHeight = reader.int64();
                    break;
                case 2:
                    message.msgIndex = reader.uint64();
                    break;
                case 3:
                    message.executed = reader.bool();
                    break;
                case 4:
                    message.succeeded = reader.bool();
                    break;
                case 5:
                    message.toBeDeleted = reader.bool();
                    break;
                case 6:
                    message.msg = tx_1.MsgDepositWithinBatch.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDepositMsgState();
        message.msgHeight = object.msgHeight !== undefined && object.msgHeight !== null ? BigInt(object.msgHeight.toString()) : BigInt(0);
        message.msgIndex = object.msgIndex !== undefined && object.msgIndex !== null ? BigInt(object.msgIndex.toString()) : BigInt(0);
        message.executed = object.executed ?? false;
        message.succeeded = object.succeeded ?? false;
        message.toBeDeleted = object.toBeDeleted ?? false;
        message.msg = object.msg !== undefined && object.msg !== null ? tx_1.MsgDepositWithinBatch.fromPartial(object.msg) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseDepositMsgState();
        if (object.msg_height !== undefined && object.msg_height !== null) {
            message.msgHeight = BigInt(object.msg_height);
        }
        if (object.msg_index !== undefined && object.msg_index !== null) {
            message.msgIndex = BigInt(object.msg_index);
        }
        if (object.executed !== undefined && object.executed !== null) {
            message.executed = object.executed;
        }
        if (object.succeeded !== undefined && object.succeeded !== null) {
            message.succeeded = object.succeeded;
        }
        if (object.to_be_deleted !== undefined && object.to_be_deleted !== null) {
            message.toBeDeleted = object.to_be_deleted;
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = tx_1.MsgDepositWithinBatch.fromAmino(object.msg);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.msg_height = message.msgHeight !== BigInt(0) ? (message.msgHeight?.toString)() : undefined;
        obj.msg_index = message.msgIndex !== BigInt(0) ? (message.msgIndex?.toString)() : undefined;
        obj.executed = message.executed === false ? undefined : message.executed;
        obj.succeeded = message.succeeded === false ? undefined : message.succeeded;
        obj.to_be_deleted = message.toBeDeleted === false ? undefined : message.toBeDeleted;
        obj.msg = message.msg ? tx_1.MsgDepositWithinBatch.toAmino(message.msg) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DepositMsgState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.DepositMsgState.decode(message.value);
    },
    toProto(message) {
        return exports.DepositMsgState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/liquidity.v1beta1.DepositMsgState",
            value: exports.DepositMsgState.encode(message).finish()
        };
    }
};
function createBaseWithdrawMsgState() {
    return {
        msgHeight: BigInt(0),
        msgIndex: BigInt(0),
        executed: false,
        succeeded: false,
        toBeDeleted: false,
        msg: undefined
    };
}
exports.WithdrawMsgState = {
    typeUrl: "/liquidity.v1beta1.WithdrawMsgState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.msgHeight !== BigInt(0)) {
            writer.uint32(8).int64(message.msgHeight);
        }
        if (message.msgIndex !== BigInt(0)) {
            writer.uint32(16).uint64(message.msgIndex);
        }
        if (message.executed === true) {
            writer.uint32(24).bool(message.executed);
        }
        if (message.succeeded === true) {
            writer.uint32(32).bool(message.succeeded);
        }
        if (message.toBeDeleted === true) {
            writer.uint32(40).bool(message.toBeDeleted);
        }
        if (message.msg !== undefined) {
            tx_1.MsgWithdrawWithinBatch.encode(message.msg, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWithdrawMsgState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.msgHeight = reader.int64();
                    break;
                case 2:
                    message.msgIndex = reader.uint64();
                    break;
                case 3:
                    message.executed = reader.bool();
                    break;
                case 4:
                    message.succeeded = reader.bool();
                    break;
                case 5:
                    message.toBeDeleted = reader.bool();
                    break;
                case 6:
                    message.msg = tx_1.MsgWithdrawWithinBatch.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseWithdrawMsgState();
        message.msgHeight = object.msgHeight !== undefined && object.msgHeight !== null ? BigInt(object.msgHeight.toString()) : BigInt(0);
        message.msgIndex = object.msgIndex !== undefined && object.msgIndex !== null ? BigInt(object.msgIndex.toString()) : BigInt(0);
        message.executed = object.executed ?? false;
        message.succeeded = object.succeeded ?? false;
        message.toBeDeleted = object.toBeDeleted ?? false;
        message.msg = object.msg !== undefined && object.msg !== null ? tx_1.MsgWithdrawWithinBatch.fromPartial(object.msg) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseWithdrawMsgState();
        if (object.msg_height !== undefined && object.msg_height !== null) {
            message.msgHeight = BigInt(object.msg_height);
        }
        if (object.msg_index !== undefined && object.msg_index !== null) {
            message.msgIndex = BigInt(object.msg_index);
        }
        if (object.executed !== undefined && object.executed !== null) {
            message.executed = object.executed;
        }
        if (object.succeeded !== undefined && object.succeeded !== null) {
            message.succeeded = object.succeeded;
        }
        if (object.to_be_deleted !== undefined && object.to_be_deleted !== null) {
            message.toBeDeleted = object.to_be_deleted;
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = tx_1.MsgWithdrawWithinBatch.fromAmino(object.msg);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.msg_height = message.msgHeight !== BigInt(0) ? (message.msgHeight?.toString)() : undefined;
        obj.msg_index = message.msgIndex !== BigInt(0) ? (message.msgIndex?.toString)() : undefined;
        obj.executed = message.executed === false ? undefined : message.executed;
        obj.succeeded = message.succeeded === false ? undefined : message.succeeded;
        obj.to_be_deleted = message.toBeDeleted === false ? undefined : message.toBeDeleted;
        obj.msg = message.msg ? tx_1.MsgWithdrawWithinBatch.toAmino(message.msg) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.WithdrawMsgState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.WithdrawMsgState.decode(message.value);
    },
    toProto(message) {
        return exports.WithdrawMsgState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/liquidity.v1beta1.WithdrawMsgState",
            value: exports.WithdrawMsgState.encode(message).finish()
        };
    }
};
function createBaseSwapMsgState() {
    return {
        msgHeight: BigInt(0),
        msgIndex: BigInt(0),
        executed: false,
        succeeded: false,
        toBeDeleted: false,
        orderExpiryHeight: BigInt(0),
        exchangedOfferCoin: coin_1.Coin.fromPartial({}),
        remainingOfferCoin: coin_1.Coin.fromPartial({}),
        reservedOfferCoinFee: coin_1.Coin.fromPartial({}),
        msg: undefined
    };
}
exports.SwapMsgState = {
    typeUrl: "/liquidity.v1beta1.SwapMsgState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.msgHeight !== BigInt(0)) {
            writer.uint32(8).int64(message.msgHeight);
        }
        if (message.msgIndex !== BigInt(0)) {
            writer.uint32(16).uint64(message.msgIndex);
        }
        if (message.executed === true) {
            writer.uint32(24).bool(message.executed);
        }
        if (message.succeeded === true) {
            writer.uint32(32).bool(message.succeeded);
        }
        if (message.toBeDeleted === true) {
            writer.uint32(40).bool(message.toBeDeleted);
        }
        if (message.orderExpiryHeight !== BigInt(0)) {
            writer.uint32(48).int64(message.orderExpiryHeight);
        }
        if (message.exchangedOfferCoin !== undefined) {
            coin_1.Coin.encode(message.exchangedOfferCoin, writer.uint32(58).fork()).ldelim();
        }
        if (message.remainingOfferCoin !== undefined) {
            coin_1.Coin.encode(message.remainingOfferCoin, writer.uint32(66).fork()).ldelim();
        }
        if (message.reservedOfferCoinFee !== undefined) {
            coin_1.Coin.encode(message.reservedOfferCoinFee, writer.uint32(74).fork()).ldelim();
        }
        if (message.msg !== undefined) {
            tx_1.MsgSwapWithinBatch.encode(message.msg, writer.uint32(82).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSwapMsgState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.msgHeight = reader.int64();
                    break;
                case 2:
                    message.msgIndex = reader.uint64();
                    break;
                case 3:
                    message.executed = reader.bool();
                    break;
                case 4:
                    message.succeeded = reader.bool();
                    break;
                case 5:
                    message.toBeDeleted = reader.bool();
                    break;
                case 6:
                    message.orderExpiryHeight = reader.int64();
                    break;
                case 7:
                    message.exchangedOfferCoin = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.remainingOfferCoin = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.reservedOfferCoinFee = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.msg = tx_1.MsgSwapWithinBatch.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSwapMsgState();
        message.msgHeight = object.msgHeight !== undefined && object.msgHeight !== null ? BigInt(object.msgHeight.toString()) : BigInt(0);
        message.msgIndex = object.msgIndex !== undefined && object.msgIndex !== null ? BigInt(object.msgIndex.toString()) : BigInt(0);
        message.executed = object.executed ?? false;
        message.succeeded = object.succeeded ?? false;
        message.toBeDeleted = object.toBeDeleted ?? false;
        message.orderExpiryHeight = object.orderExpiryHeight !== undefined && object.orderExpiryHeight !== null ? BigInt(object.orderExpiryHeight.toString()) : BigInt(0);
        message.exchangedOfferCoin = object.exchangedOfferCoin !== undefined && object.exchangedOfferCoin !== null ? coin_1.Coin.fromPartial(object.exchangedOfferCoin) : undefined;
        message.remainingOfferCoin = object.remainingOfferCoin !== undefined && object.remainingOfferCoin !== null ? coin_1.Coin.fromPartial(object.remainingOfferCoin) : undefined;
        message.reservedOfferCoinFee = object.reservedOfferCoinFee !== undefined && object.reservedOfferCoinFee !== null ? coin_1.Coin.fromPartial(object.reservedOfferCoinFee) : undefined;
        message.msg = object.msg !== undefined && object.msg !== null ? tx_1.MsgSwapWithinBatch.fromPartial(object.msg) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseSwapMsgState();
        if (object.msg_height !== undefined && object.msg_height !== null) {
            message.msgHeight = BigInt(object.msg_height);
        }
        if (object.msg_index !== undefined && object.msg_index !== null) {
            message.msgIndex = BigInt(object.msg_index);
        }
        if (object.executed !== undefined && object.executed !== null) {
            message.executed = object.executed;
        }
        if (object.succeeded !== undefined && object.succeeded !== null) {
            message.succeeded = object.succeeded;
        }
        if (object.to_be_deleted !== undefined && object.to_be_deleted !== null) {
            message.toBeDeleted = object.to_be_deleted;
        }
        if (object.order_expiry_height !== undefined && object.order_expiry_height !== null) {
            message.orderExpiryHeight = BigInt(object.order_expiry_height);
        }
        if (object.exchanged_offer_coin !== undefined && object.exchanged_offer_coin !== null) {
            message.exchangedOfferCoin = coin_1.Coin.fromAmino(object.exchanged_offer_coin);
        }
        if (object.remaining_offer_coin !== undefined && object.remaining_offer_coin !== null) {
            message.remainingOfferCoin = coin_1.Coin.fromAmino(object.remaining_offer_coin);
        }
        if (object.reserved_offer_coin_fee !== undefined && object.reserved_offer_coin_fee !== null) {
            message.reservedOfferCoinFee = coin_1.Coin.fromAmino(object.reserved_offer_coin_fee);
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = tx_1.MsgSwapWithinBatch.fromAmino(object.msg);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.msg_height = message.msgHeight !== BigInt(0) ? (message.msgHeight?.toString)() : undefined;
        obj.msg_index = message.msgIndex !== BigInt(0) ? (message.msgIndex?.toString)() : undefined;
        obj.executed = message.executed === false ? undefined : message.executed;
        obj.succeeded = message.succeeded === false ? undefined : message.succeeded;
        obj.to_be_deleted = message.toBeDeleted === false ? undefined : message.toBeDeleted;
        obj.order_expiry_height = message.orderExpiryHeight !== BigInt(0) ? (message.orderExpiryHeight?.toString)() : undefined;
        obj.exchanged_offer_coin = message.exchangedOfferCoin ? coin_1.Coin.toAmino(message.exchangedOfferCoin) : undefined;
        obj.remaining_offer_coin = message.remainingOfferCoin ? coin_1.Coin.toAmino(message.remainingOfferCoin) : undefined;
        obj.reserved_offer_coin_fee = message.reservedOfferCoinFee ? coin_1.Coin.toAmino(message.reservedOfferCoinFee) : undefined;
        obj.msg = message.msg ? tx_1.MsgSwapWithinBatch.toAmino(message.msg) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SwapMsgState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.SwapMsgState.decode(message.value);
    },
    toProto(message) {
        return exports.SwapMsgState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/liquidity.v1beta1.SwapMsgState",
            value: exports.SwapMsgState.encode(message).finish()
        };
    }
};
