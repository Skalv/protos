"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InterestScalar = exports.BadDebt = exports.Collateral = exports.AdjustedBorrow = exports.GenesisState = void 0;
//@ts-nocheck
const leverage_1 = require("./leverage");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../binary");
const math_1 = require("@cosmjs/math");
function createBaseGenesisState() {
    return {
        params: leverage_1.Params.fromPartial({}),
        registry: [],
        adjustedBorrows: [],
        collateral: [],
        reserves: [],
        lastInterestTime: BigInt(0),
        badDebts: [],
        interestScalars: [],
        utokenSupply: []
    };
}
exports.GenesisState = {
    typeUrl: "/umee.leverage.v1.GenesisState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            leverage_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.registry) {
            leverage_1.Token.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.adjustedBorrows) {
            exports.AdjustedBorrow.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.collateral) {
            exports.Collateral.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.reserves) {
            coin_1.Coin.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.lastInterestTime !== BigInt(0)) {
            writer.uint32(48).int64(message.lastInterestTime);
        }
        for (const v of message.badDebts) {
            exports.BadDebt.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.interestScalars) {
            exports.InterestScalar.encode(v, writer.uint32(66).fork()).ldelim();
        }
        for (const v of message.utokenSupply) {
            coin_1.Coin.encode(v, writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = leverage_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.registry.push(leverage_1.Token.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.adjustedBorrows.push(exports.AdjustedBorrow.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.collateral.push(exports.Collateral.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.reserves.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.lastInterestTime = reader.int64();
                    break;
                case 7:
                    message.badDebts.push(exports.BadDebt.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.interestScalars.push(exports.InterestScalar.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.utokenSupply.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? leverage_1.Params.fromPartial(object.params) : undefined;
        message.registry = object.registry?.map(e => leverage_1.Token.fromPartial(e)) || [];
        message.adjustedBorrows = object.adjustedBorrows?.map(e => exports.AdjustedBorrow.fromPartial(e)) || [];
        message.collateral = object.collateral?.map(e => exports.Collateral.fromPartial(e)) || [];
        message.reserves = object.reserves?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.lastInterestTime = object.lastInterestTime !== undefined && object.lastInterestTime !== null ? BigInt(object.lastInterestTime.toString()) : BigInt(0);
        message.badDebts = object.badDebts?.map(e => exports.BadDebt.fromPartial(e)) || [];
        message.interestScalars = object.interestScalars?.map(e => exports.InterestScalar.fromPartial(e)) || [];
        message.utokenSupply = object.utokenSupply?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = leverage_1.Params.fromAmino(object.params);
        }
        message.registry = object.registry?.map(e => leverage_1.Token.fromAmino(e)) || [];
        message.adjustedBorrows = object.adjusted_borrows?.map(e => exports.AdjustedBorrow.fromAmino(e)) || [];
        message.collateral = object.collateral?.map(e => exports.Collateral.fromAmino(e)) || [];
        message.reserves = object.reserves?.map(e => coin_1.Coin.fromAmino(e)) || [];
        if (object.last_interest_time !== undefined && object.last_interest_time !== null) {
            message.lastInterestTime = BigInt(object.last_interest_time);
        }
        message.badDebts = object.bad_debts?.map(e => exports.BadDebt.fromAmino(e)) || [];
        message.interestScalars = object.interest_scalars?.map(e => exports.InterestScalar.fromAmino(e)) || [];
        message.utokenSupply = object.utoken_supply?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? leverage_1.Params.toAmino(message.params) : undefined;
        if (message.registry) {
            obj.registry = message.registry.map(e => e ? leverage_1.Token.toAmino(e) : undefined);
        }
        else {
            obj.registry = message.registry;
        }
        if (message.adjustedBorrows) {
            obj.adjusted_borrows = message.adjustedBorrows.map(e => e ? exports.AdjustedBorrow.toAmino(e) : undefined);
        }
        else {
            obj.adjusted_borrows = message.adjustedBorrows;
        }
        if (message.collateral) {
            obj.collateral = message.collateral.map(e => e ? exports.Collateral.toAmino(e) : undefined);
        }
        else {
            obj.collateral = message.collateral;
        }
        if (message.reserves) {
            obj.reserves = message.reserves.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.reserves = message.reserves;
        }
        obj.last_interest_time = message.lastInterestTime !== BigInt(0) ? (message.lastInterestTime?.toString)() : undefined;
        if (message.badDebts) {
            obj.bad_debts = message.badDebts.map(e => e ? exports.BadDebt.toAmino(e) : undefined);
        }
        else {
            obj.bad_debts = message.badDebts;
        }
        if (message.interestScalars) {
            obj.interest_scalars = message.interestScalars.map(e => e ? exports.InterestScalar.toAmino(e) : undefined);
        }
        else {
            obj.interest_scalars = message.interestScalars;
        }
        if (message.utokenSupply) {
            obj.utoken_supply = message.utokenSupply.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.utoken_supply = message.utokenSupply;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.GenesisState.decode(message.value);
    },
    toProto(message) {
        return exports.GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.leverage.v1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
function createBaseAdjustedBorrow() {
    return {
        address: "",
        amount: coin_1.DecCoin.fromPartial({})
    };
}
exports.AdjustedBorrow = {
    typeUrl: "/umee.leverage.v1.AdjustedBorrow",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.amount !== undefined) {
            coin_1.DecCoin.encode(message.amount, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAdjustedBorrow();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.amount = coin_1.DecCoin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAdjustedBorrow();
        message.address = object.address ?? "";
        message.amount = object.amount !== undefined && object.amount !== null ? coin_1.DecCoin.fromPartial(object.amount) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseAdjustedBorrow();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = coin_1.DecCoin.fromAmino(object.amount);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        obj.amount = message.amount ? coin_1.DecCoin.toAmino(message.amount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AdjustedBorrow.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.AdjustedBorrow.decode(message.value);
    },
    toProto(message) {
        return exports.AdjustedBorrow.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.leverage.v1.AdjustedBorrow",
            value: exports.AdjustedBorrow.encode(message).finish()
        };
    }
};
function createBaseCollateral() {
    return {
        address: "",
        amount: coin_1.Coin.fromPartial({})
    };
}
exports.Collateral = {
    typeUrl: "/umee.leverage.v1.Collateral",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCollateral();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCollateral();
        message.address = object.address ?? "";
        message.amount = object.amount !== undefined && object.amount !== null ? coin_1.Coin.fromPartial(object.amount) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseCollateral();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = coin_1.Coin.fromAmino(object.amount);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        obj.amount = message.amount ? coin_1.Coin.toAmino(message.amount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Collateral.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Collateral.decode(message.value);
    },
    toProto(message) {
        return exports.Collateral.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.leverage.v1.Collateral",
            value: exports.Collateral.encode(message).finish()
        };
    }
};
function createBaseBadDebt() {
    return {
        address: "",
        denom: ""
    };
}
exports.BadDebt = {
    typeUrl: "/umee.leverage.v1.BadDebt",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBadDebt();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.denom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBadDebt();
        message.address = object.address ?? "";
        message.denom = object.denom ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseBadDebt();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        obj.denom = message.denom === "" ? undefined : message.denom;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.BadDebt.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.BadDebt.decode(message.value);
    },
    toProto(message) {
        return exports.BadDebt.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.leverage.v1.BadDebt",
            value: exports.BadDebt.encode(message).finish()
        };
    }
};
function createBaseInterestScalar() {
    return {
        denom: "",
        scalar: ""
    };
}
exports.InterestScalar = {
    typeUrl: "/umee.leverage.v1.InterestScalar",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.scalar !== "") {
            writer.uint32(18).string(math_1.Decimal.fromUserInput(message.scalar, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInterestScalar();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.scalar = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseInterestScalar();
        message.denom = object.denom ?? "";
        message.scalar = object.scalar ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseInterestScalar();
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        if (object.scalar !== undefined && object.scalar !== null) {
            message.scalar = object.scalar;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom === "" ? undefined : message.denom;
        obj.scalar = message.scalar === "" ? undefined : message.scalar;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.InterestScalar.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.InterestScalar.decode(message.value);
    },
    toProto(message) {
        return exports.InterestScalar.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.leverage.v1.InterestScalar",
            value: exports.InterestScalar.encode(message).finish()
        };
    }
};
