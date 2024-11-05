"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryBadDebtsResponse = exports.QueryBadDebts = exports.QueryLiquidationTargetsResponse = exports.QueryLiquidationTargets = exports.QueryAccountSummaryResponse = exports.QueryAccountSummary = exports.QueryAccountBalancesResponse = exports.QueryAccountBalances = exports.QueryMarketSummaryResponse = exports.QueryMarketSummary = exports.QueryRegisteredTokensResponse = exports.QueryRegisteredTokens = exports.QueryParamsResponse = exports.QueryParams = void 0;
//@ts-nocheck
const leverage_1 = require("./leverage");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const genesis_1 = require("./genesis");
const binary_1 = require("../../../binary");
const math_1 = require("@cosmjs/math");
function createBaseQueryParams() {
    return {};
}
exports.QueryParams = {
    typeUrl: "/umee.leverage.v1.QueryParams",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParams();
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
        const message = createBaseQueryParams();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryParams();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryParams.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryParams.decode(message.value);
    },
    toProto(message) {
        return exports.QueryParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.leverage.v1.QueryParams",
            value: exports.QueryParams.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: leverage_1.Params.fromPartial({})
    };
}
exports.QueryParamsResponse = {
    typeUrl: "/umee.leverage.v1.QueryParamsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            leverage_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = leverage_1.Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? leverage_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = leverage_1.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? leverage_1.Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.leverage.v1.QueryParamsResponse",
            value: exports.QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryRegisteredTokens() {
    return {};
}
exports.QueryRegisteredTokens = {
    typeUrl: "/umee.leverage.v1.QueryRegisteredTokens",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryRegisteredTokens();
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
        const message = createBaseQueryRegisteredTokens();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryRegisteredTokens();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryRegisteredTokens.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryRegisteredTokens.decode(message.value);
    },
    toProto(message) {
        return exports.QueryRegisteredTokens.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.leverage.v1.QueryRegisteredTokens",
            value: exports.QueryRegisteredTokens.encode(message).finish()
        };
    }
};
function createBaseQueryRegisteredTokensResponse() {
    return {
        registry: []
    };
}
exports.QueryRegisteredTokensResponse = {
    typeUrl: "/umee.leverage.v1.QueryRegisteredTokensResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.registry) {
            leverage_1.Token.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryRegisteredTokensResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registry.push(leverage_1.Token.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryRegisteredTokensResponse();
        message.registry = object.registry?.map(e => leverage_1.Token.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryRegisteredTokensResponse();
        message.registry = object.registry?.map(e => leverage_1.Token.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.registry) {
            obj.registry = message.registry.map(e => e ? leverage_1.Token.toAmino(e) : undefined);
        }
        else {
            obj.registry = message.registry;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryRegisteredTokensResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryRegisteredTokensResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryRegisteredTokensResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.leverage.v1.QueryRegisteredTokensResponse",
            value: exports.QueryRegisteredTokensResponse.encode(message).finish()
        };
    }
};
function createBaseQueryMarketSummary() {
    return {
        denom: ""
    };
}
exports.QueryMarketSummary = {
    typeUrl: "/umee.leverage.v1.QueryMarketSummary",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryMarketSummary();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = createBaseQueryMarketSummary();
        message.denom = object.denom ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryMarketSummary();
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom === "" ? undefined : message.denom;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryMarketSummary.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryMarketSummary.decode(message.value);
    },
    toProto(message) {
        return exports.QueryMarketSummary.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.leverage.v1.QueryMarketSummary",
            value: exports.QueryMarketSummary.encode(message).finish()
        };
    }
};
function createBaseQueryMarketSummaryResponse() {
    return {
        symbolDenom: "",
        exponent: 0,
        oraclePrice: undefined,
        uTokenExchangeRate: "",
        supplyAPY: "",
        borrowAPY: "",
        supplied: "",
        reserved: "",
        collateral: "",
        borrowed: "",
        liquidity: "",
        maximumBorrow: "",
        maximumCollateral: "",
        minimumLiquidity: "",
        uTokenSupply: "",
        availableBorrow: "",
        availableWithdraw: "",
        availableCollateralize: ""
    };
}
exports.QueryMarketSummaryResponse = {
    typeUrl: "/umee.leverage.v1.QueryMarketSummaryResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.symbolDenom !== "") {
            writer.uint32(10).string(message.symbolDenom);
        }
        if (message.exponent !== 0) {
            writer.uint32(16).uint32(message.exponent);
        }
        if (message.oraclePrice !== undefined) {
            writer.uint32(26).string(math_1.Decimal.fromUserInput(message.oraclePrice, 18).atomics);
        }
        if (message.uTokenExchangeRate !== "") {
            writer.uint32(34).string(math_1.Decimal.fromUserInput(message.uTokenExchangeRate, 18).atomics);
        }
        if (message.supplyAPY !== "") {
            writer.uint32(42).string(math_1.Decimal.fromUserInput(message.supplyAPY, 18).atomics);
        }
        if (message.borrowAPY !== "") {
            writer.uint32(50).string(math_1.Decimal.fromUserInput(message.borrowAPY, 18).atomics);
        }
        if (message.supplied !== "") {
            writer.uint32(58).string(message.supplied);
        }
        if (message.reserved !== "") {
            writer.uint32(66).string(message.reserved);
        }
        if (message.collateral !== "") {
            writer.uint32(74).string(message.collateral);
        }
        if (message.borrowed !== "") {
            writer.uint32(82).string(message.borrowed);
        }
        if (message.liquidity !== "") {
            writer.uint32(90).string(message.liquidity);
        }
        if (message.maximumBorrow !== "") {
            writer.uint32(98).string(message.maximumBorrow);
        }
        if (message.maximumCollateral !== "") {
            writer.uint32(106).string(message.maximumCollateral);
        }
        if (message.minimumLiquidity !== "") {
            writer.uint32(114).string(message.minimumLiquidity);
        }
        if (message.uTokenSupply !== "") {
            writer.uint32(122).string(message.uTokenSupply);
        }
        if (message.availableBorrow !== "") {
            writer.uint32(130).string(message.availableBorrow);
        }
        if (message.availableWithdraw !== "") {
            writer.uint32(138).string(message.availableWithdraw);
        }
        if (message.availableCollateralize !== "") {
            writer.uint32(146).string(message.availableCollateralize);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryMarketSummaryResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.symbolDenom = reader.string();
                    break;
                case 2:
                    message.exponent = reader.uint32();
                    break;
                case 3:
                    message.oraclePrice = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 4:
                    message.uTokenExchangeRate = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 5:
                    message.supplyAPY = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 6:
                    message.borrowAPY = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 7:
                    message.supplied = reader.string();
                    break;
                case 8:
                    message.reserved = reader.string();
                    break;
                case 9:
                    message.collateral = reader.string();
                    break;
                case 10:
                    message.borrowed = reader.string();
                    break;
                case 11:
                    message.liquidity = reader.string();
                    break;
                case 12:
                    message.maximumBorrow = reader.string();
                    break;
                case 13:
                    message.maximumCollateral = reader.string();
                    break;
                case 14:
                    message.minimumLiquidity = reader.string();
                    break;
                case 15:
                    message.uTokenSupply = reader.string();
                    break;
                case 16:
                    message.availableBorrow = reader.string();
                    break;
                case 17:
                    message.availableWithdraw = reader.string();
                    break;
                case 18:
                    message.availableCollateralize = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryMarketSummaryResponse();
        message.symbolDenom = object.symbolDenom ?? "";
        message.exponent = object.exponent ?? 0;
        message.oraclePrice = object.oraclePrice ?? undefined;
        message.uTokenExchangeRate = object.uTokenExchangeRate ?? "";
        message.supplyAPY = object.supplyAPY ?? "";
        message.borrowAPY = object.borrowAPY ?? "";
        message.supplied = object.supplied ?? "";
        message.reserved = object.reserved ?? "";
        message.collateral = object.collateral ?? "";
        message.borrowed = object.borrowed ?? "";
        message.liquidity = object.liquidity ?? "";
        message.maximumBorrow = object.maximumBorrow ?? "";
        message.maximumCollateral = object.maximumCollateral ?? "";
        message.minimumLiquidity = object.minimumLiquidity ?? "";
        message.uTokenSupply = object.uTokenSupply ?? "";
        message.availableBorrow = object.availableBorrow ?? "";
        message.availableWithdraw = object.availableWithdraw ?? "";
        message.availableCollateralize = object.availableCollateralize ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryMarketSummaryResponse();
        if (object.symbol_denom !== undefined && object.symbol_denom !== null) {
            message.symbolDenom = object.symbol_denom;
        }
        if (object.exponent !== undefined && object.exponent !== null) {
            message.exponent = object.exponent;
        }
        if (object.oracle_price !== undefined && object.oracle_price !== null) {
            message.oraclePrice = object.oracle_price;
        }
        if (object.uToken_exchange_rate !== undefined && object.uToken_exchange_rate !== null) {
            message.uTokenExchangeRate = object.uToken_exchange_rate;
        }
        if (object.supply_APY !== undefined && object.supply_APY !== null) {
            message.supplyAPY = object.supply_APY;
        }
        if (object.borrow_APY !== undefined && object.borrow_APY !== null) {
            message.borrowAPY = object.borrow_APY;
        }
        if (object.supplied !== undefined && object.supplied !== null) {
            message.supplied = object.supplied;
        }
        if (object.reserved !== undefined && object.reserved !== null) {
            message.reserved = object.reserved;
        }
        if (object.collateral !== undefined && object.collateral !== null) {
            message.collateral = object.collateral;
        }
        if (object.borrowed !== undefined && object.borrowed !== null) {
            message.borrowed = object.borrowed;
        }
        if (object.liquidity !== undefined && object.liquidity !== null) {
            message.liquidity = object.liquidity;
        }
        if (object.maximum_borrow !== undefined && object.maximum_borrow !== null) {
            message.maximumBorrow = object.maximum_borrow;
        }
        if (object.maximum_collateral !== undefined && object.maximum_collateral !== null) {
            message.maximumCollateral = object.maximum_collateral;
        }
        if (object.minimum_liquidity !== undefined && object.minimum_liquidity !== null) {
            message.minimumLiquidity = object.minimum_liquidity;
        }
        if (object.uToken_supply !== undefined && object.uToken_supply !== null) {
            message.uTokenSupply = object.uToken_supply;
        }
        if (object.available_borrow !== undefined && object.available_borrow !== null) {
            message.availableBorrow = object.available_borrow;
        }
        if (object.available_withdraw !== undefined && object.available_withdraw !== null) {
            message.availableWithdraw = object.available_withdraw;
        }
        if (object.available_collateralize !== undefined && object.available_collateralize !== null) {
            message.availableCollateralize = object.available_collateralize;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.symbol_denom = message.symbolDenom === "" ? undefined : message.symbolDenom;
        obj.exponent = message.exponent === 0 ? undefined : message.exponent;
        obj.oracle_price = message.oraclePrice === null ? undefined : message.oraclePrice;
        obj.uToken_exchange_rate = message.uTokenExchangeRate ?? "";
        obj.supply_APY = message.supplyAPY ?? "";
        obj.borrow_APY = message.borrowAPY ?? "";
        obj.supplied = message.supplied === "" ? undefined : message.supplied;
        obj.reserved = message.reserved === "" ? undefined : message.reserved;
        obj.collateral = message.collateral === "" ? undefined : message.collateral;
        obj.borrowed = message.borrowed === "" ? undefined : message.borrowed;
        obj.liquidity = message.liquidity === "" ? undefined : message.liquidity;
        obj.maximum_borrow = message.maximumBorrow === "" ? undefined : message.maximumBorrow;
        obj.maximum_collateral = message.maximumCollateral === "" ? undefined : message.maximumCollateral;
        obj.minimum_liquidity = message.minimumLiquidity === "" ? undefined : message.minimumLiquidity;
        obj.uToken_supply = message.uTokenSupply ?? "";
        obj.available_borrow = message.availableBorrow === "" ? undefined : message.availableBorrow;
        obj.available_withdraw = message.availableWithdraw === "" ? undefined : message.availableWithdraw;
        obj.available_collateralize = message.availableCollateralize === "" ? undefined : message.availableCollateralize;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryMarketSummaryResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryMarketSummaryResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryMarketSummaryResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.leverage.v1.QueryMarketSummaryResponse",
            value: exports.QueryMarketSummaryResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAccountBalances() {
    return {
        address: ""
    };
}
exports.QueryAccountBalances = {
    typeUrl: "/umee.leverage.v1.QueryAccountBalances",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountBalances();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAccountBalances();
        message.address = object.address ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAccountBalances();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAccountBalances.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAccountBalances.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAccountBalances.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.leverage.v1.QueryAccountBalances",
            value: exports.QueryAccountBalances.encode(message).finish()
        };
    }
};
function createBaseQueryAccountBalancesResponse() {
    return {
        supplied: [],
        collateral: [],
        borrowed: []
    };
}
exports.QueryAccountBalancesResponse = {
    typeUrl: "/umee.leverage.v1.QueryAccountBalancesResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.supplied) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.collateral) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.borrowed) {
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountBalancesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.supplied.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.collateral.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.borrowed.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAccountBalancesResponse();
        message.supplied = object.supplied?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.collateral = object.collateral?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.borrowed = object.borrowed?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAccountBalancesResponse();
        message.supplied = object.supplied?.map(e => coin_1.Coin.fromAmino(e)) || [];
        message.collateral = object.collateral?.map(e => coin_1.Coin.fromAmino(e)) || [];
        message.borrowed = object.borrowed?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.supplied) {
            obj.supplied = message.supplied.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.supplied = message.supplied;
        }
        if (message.collateral) {
            obj.collateral = message.collateral.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.collateral = message.collateral;
        }
        if (message.borrowed) {
            obj.borrowed = message.borrowed.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.borrowed = message.borrowed;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAccountBalancesResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAccountBalancesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAccountBalancesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.leverage.v1.QueryAccountBalancesResponse",
            value: exports.QueryAccountBalancesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAccountSummary() {
    return {
        address: ""
    };
}
exports.QueryAccountSummary = {
    typeUrl: "/umee.leverage.v1.QueryAccountSummary",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountSummary();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAccountSummary();
        message.address = object.address ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAccountSummary();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAccountSummary.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAccountSummary.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAccountSummary.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.leverage.v1.QueryAccountSummary",
            value: exports.QueryAccountSummary.encode(message).finish()
        };
    }
};
function createBaseQueryAccountSummaryResponse() {
    return {
        suppliedValue: "",
        collateralValue: "",
        borrowedValue: "",
        borrowLimit: "",
        liquidationThreshold: ""
    };
}
exports.QueryAccountSummaryResponse = {
    typeUrl: "/umee.leverage.v1.QueryAccountSummaryResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.suppliedValue !== "") {
            writer.uint32(10).string(math_1.Decimal.fromUserInput(message.suppliedValue, 18).atomics);
        }
        if (message.collateralValue !== "") {
            writer.uint32(18).string(math_1.Decimal.fromUserInput(message.collateralValue, 18).atomics);
        }
        if (message.borrowedValue !== "") {
            writer.uint32(26).string(math_1.Decimal.fromUserInput(message.borrowedValue, 18).atomics);
        }
        if (message.borrowLimit !== "") {
            writer.uint32(34).string(math_1.Decimal.fromUserInput(message.borrowLimit, 18).atomics);
        }
        if (message.liquidationThreshold !== "") {
            writer.uint32(42).string(math_1.Decimal.fromUserInput(message.liquidationThreshold, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountSummaryResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.suppliedValue = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 2:
                    message.collateralValue = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 3:
                    message.borrowedValue = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 4:
                    message.borrowLimit = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 5:
                    message.liquidationThreshold = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAccountSummaryResponse();
        message.suppliedValue = object.suppliedValue ?? "";
        message.collateralValue = object.collateralValue ?? "";
        message.borrowedValue = object.borrowedValue ?? "";
        message.borrowLimit = object.borrowLimit ?? "";
        message.liquidationThreshold = object.liquidationThreshold ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAccountSummaryResponse();
        if (object.supplied_value !== undefined && object.supplied_value !== null) {
            message.suppliedValue = object.supplied_value;
        }
        if (object.collateral_value !== undefined && object.collateral_value !== null) {
            message.collateralValue = object.collateral_value;
        }
        if (object.borrowed_value !== undefined && object.borrowed_value !== null) {
            message.borrowedValue = object.borrowed_value;
        }
        if (object.borrow_limit !== undefined && object.borrow_limit !== null) {
            message.borrowLimit = object.borrow_limit;
        }
        if (object.liquidation_threshold !== undefined && object.liquidation_threshold !== null) {
            message.liquidationThreshold = object.liquidation_threshold;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.supplied_value = message.suppliedValue === "" ? undefined : message.suppliedValue;
        obj.collateral_value = message.collateralValue === "" ? undefined : message.collateralValue;
        obj.borrowed_value = message.borrowedValue === "" ? undefined : message.borrowedValue;
        obj.borrow_limit = message.borrowLimit === "" ? undefined : message.borrowLimit;
        obj.liquidation_threshold = message.liquidationThreshold === "" ? undefined : message.liquidationThreshold;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAccountSummaryResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAccountSummaryResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAccountSummaryResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.leverage.v1.QueryAccountSummaryResponse",
            value: exports.QueryAccountSummaryResponse.encode(message).finish()
        };
    }
};
function createBaseQueryLiquidationTargets() {
    return {};
}
exports.QueryLiquidationTargets = {
    typeUrl: "/umee.leverage.v1.QueryLiquidationTargets",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLiquidationTargets();
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
        const message = createBaseQueryLiquidationTargets();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryLiquidationTargets();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryLiquidationTargets.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryLiquidationTargets.decode(message.value);
    },
    toProto(message) {
        return exports.QueryLiquidationTargets.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.leverage.v1.QueryLiquidationTargets",
            value: exports.QueryLiquidationTargets.encode(message).finish()
        };
    }
};
function createBaseQueryLiquidationTargetsResponse() {
    return {
        targets: []
    };
}
exports.QueryLiquidationTargetsResponse = {
    typeUrl: "/umee.leverage.v1.QueryLiquidationTargetsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.targets) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLiquidationTargetsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.targets.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryLiquidationTargetsResponse();
        message.targets = object.targets?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryLiquidationTargetsResponse();
        message.targets = object.targets?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.targets) {
            obj.targets = message.targets.map(e => e);
        }
        else {
            obj.targets = message.targets;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryLiquidationTargetsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryLiquidationTargetsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryLiquidationTargetsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.leverage.v1.QueryLiquidationTargetsResponse",
            value: exports.QueryLiquidationTargetsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryBadDebts() {
    return {};
}
exports.QueryBadDebts = {
    typeUrl: "/umee.leverage.v1.QueryBadDebts",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBadDebts();
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
        const message = createBaseQueryBadDebts();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryBadDebts();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBadDebts.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBadDebts.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBadDebts.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.leverage.v1.QueryBadDebts",
            value: exports.QueryBadDebts.encode(message).finish()
        };
    }
};
function createBaseQueryBadDebtsResponse() {
    return {
        targets: []
    };
}
exports.QueryBadDebtsResponse = {
    typeUrl: "/umee.leverage.v1.QueryBadDebtsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.targets) {
            genesis_1.BadDebt.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBadDebtsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.targets.push(genesis_1.BadDebt.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryBadDebtsResponse();
        message.targets = object.targets?.map(e => genesis_1.BadDebt.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBadDebtsResponse();
        message.targets = object.targets?.map(e => genesis_1.BadDebt.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.targets) {
            obj.targets = message.targets.map(e => e ? genesis_1.BadDebt.toAmino(e) : undefined);
        }
        else {
            obj.targets = message.targets;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBadDebtsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBadDebtsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBadDebtsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.leverage.v1.QueryBadDebtsResponse",
            value: exports.QueryBadDebtsResponse.encode(message).finish()
        };
    }
};
