"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgRequestRedemptionResponse = exports.MsgRequestRedemption = exports.MsgUnderwriteResponse = exports.MsgUnderwrite = exports.MsgCreateInsuranceFundResponse = exports.MsgCreateInsuranceFund = void 0;
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../binary");
function createBaseMsgCreateInsuranceFund() {
    return {
        sender: "",
        ticker: "",
        quoteDenom: "",
        oracleBase: "",
        oracleQuote: "",
        oracleType: 0,
        expiry: BigInt(0),
        initialDeposit: coin_1.Coin.fromPartial({})
    };
}
exports.MsgCreateInsuranceFund = {
    typeUrl: "/injective.insurance.v1beta1.MsgCreateInsuranceFund",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.ticker !== "") {
            writer.uint32(18).string(message.ticker);
        }
        if (message.quoteDenom !== "") {
            writer.uint32(26).string(message.quoteDenom);
        }
        if (message.oracleBase !== "") {
            writer.uint32(34).string(message.oracleBase);
        }
        if (message.oracleQuote !== "") {
            writer.uint32(42).string(message.oracleQuote);
        }
        if (message.oracleType !== 0) {
            writer.uint32(48).int32(message.oracleType);
        }
        if (message.expiry !== BigInt(0)) {
            writer.uint32(56).int64(message.expiry);
        }
        if (message.initialDeposit !== undefined) {
            coin_1.Coin.encode(message.initialDeposit, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateInsuranceFund();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.ticker = reader.string();
                    break;
                case 3:
                    message.quoteDenom = reader.string();
                    break;
                case 4:
                    message.oracleBase = reader.string();
                    break;
                case 5:
                    message.oracleQuote = reader.string();
                    break;
                case 6:
                    message.oracleType = reader.int32();
                    break;
                case 7:
                    message.expiry = reader.int64();
                    break;
                case 8:
                    message.initialDeposit = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateInsuranceFund();
        message.sender = object.sender ?? "";
        message.ticker = object.ticker ?? "";
        message.quoteDenom = object.quoteDenom ?? "";
        message.oracleBase = object.oracleBase ?? "";
        message.oracleQuote = object.oracleQuote ?? "";
        message.oracleType = object.oracleType ?? 0;
        message.expiry = object.expiry !== undefined && object.expiry !== null ? BigInt(object.expiry.toString()) : BigInt(0);
        message.initialDeposit = object.initialDeposit !== undefined && object.initialDeposit !== null ? coin_1.Coin.fromPartial(object.initialDeposit) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateInsuranceFund();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.ticker !== undefined && object.ticker !== null) {
            message.ticker = object.ticker;
        }
        if (object.quote_denom !== undefined && object.quote_denom !== null) {
            message.quoteDenom = object.quote_denom;
        }
        if (object.oracle_base !== undefined && object.oracle_base !== null) {
            message.oracleBase = object.oracle_base;
        }
        if (object.oracle_quote !== undefined && object.oracle_quote !== null) {
            message.oracleQuote = object.oracle_quote;
        }
        if (object.oracle_type !== undefined && object.oracle_type !== null) {
            message.oracleType = object.oracle_type;
        }
        if (object.expiry !== undefined && object.expiry !== null) {
            message.expiry = BigInt(object.expiry);
        }
        if (object.initial_deposit !== undefined && object.initial_deposit !== null) {
            message.initialDeposit = coin_1.Coin.fromAmino(object.initial_deposit);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.ticker = message.ticker === "" ? undefined : message.ticker;
        obj.quote_denom = message.quoteDenom === "" ? undefined : message.quoteDenom;
        obj.oracle_base = message.oracleBase === "" ? undefined : message.oracleBase;
        obj.oracle_quote = message.oracleQuote === "" ? undefined : message.oracleQuote;
        obj.oracle_type = message.oracleType === 0 ? undefined : message.oracleType;
        obj.expiry = message.expiry !== BigInt(0) ? (message.expiry?.toString)() : undefined;
        obj.initial_deposit = message.initialDeposit ? coin_1.Coin.toAmino(message.initialDeposit) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateInsuranceFund.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCreateInsuranceFund.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateInsuranceFund.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.insurance.v1beta1.MsgCreateInsuranceFund",
            value: exports.MsgCreateInsuranceFund.encode(message).finish()
        };
    }
};
function createBaseMsgCreateInsuranceFundResponse() {
    return {};
}
exports.MsgCreateInsuranceFundResponse = {
    typeUrl: "/injective.insurance.v1beta1.MsgCreateInsuranceFundResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateInsuranceFundResponse();
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
        const message = createBaseMsgCreateInsuranceFundResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgCreateInsuranceFundResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateInsuranceFundResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCreateInsuranceFundResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateInsuranceFundResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.insurance.v1beta1.MsgCreateInsuranceFundResponse",
            value: exports.MsgCreateInsuranceFundResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUnderwrite() {
    return {
        sender: "",
        marketId: "",
        deposit: coin_1.Coin.fromPartial({})
    };
}
exports.MsgUnderwrite = {
    typeUrl: "/injective.insurance.v1beta1.MsgUnderwrite",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.marketId !== "") {
            writer.uint32(18).string(message.marketId);
        }
        if (message.deposit !== undefined) {
            coin_1.Coin.encode(message.deposit, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUnderwrite();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.marketId = reader.string();
                    break;
                case 3:
                    message.deposit = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUnderwrite();
        message.sender = object.sender ?? "";
        message.marketId = object.marketId ?? "";
        message.deposit = object.deposit !== undefined && object.deposit !== null ? coin_1.Coin.fromPartial(object.deposit) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUnderwrite();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        if (object.deposit !== undefined && object.deposit !== null) {
            message.deposit = coin_1.Coin.fromAmino(object.deposit);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        obj.deposit = message.deposit ? coin_1.Coin.toAmino(message.deposit) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUnderwrite.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgUnderwrite.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUnderwrite.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.insurance.v1beta1.MsgUnderwrite",
            value: exports.MsgUnderwrite.encode(message).finish()
        };
    }
};
function createBaseMsgUnderwriteResponse() {
    return {};
}
exports.MsgUnderwriteResponse = {
    typeUrl: "/injective.insurance.v1beta1.MsgUnderwriteResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUnderwriteResponse();
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
        const message = createBaseMsgUnderwriteResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUnderwriteResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUnderwriteResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgUnderwriteResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUnderwriteResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.insurance.v1beta1.MsgUnderwriteResponse",
            value: exports.MsgUnderwriteResponse.encode(message).finish()
        };
    }
};
function createBaseMsgRequestRedemption() {
    return {
        sender: "",
        marketId: "",
        amount: coin_1.Coin.fromPartial({})
    };
}
exports.MsgRequestRedemption = {
    typeUrl: "/injective.insurance.v1beta1.MsgRequestRedemption",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.marketId !== "") {
            writer.uint32(18).string(message.marketId);
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRequestRedemption();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.marketId = reader.string();
                    break;
                case 3:
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
        const message = createBaseMsgRequestRedemption();
        message.sender = object.sender ?? "";
        message.marketId = object.marketId ?? "";
        message.amount = object.amount !== undefined && object.amount !== null ? coin_1.Coin.fromPartial(object.amount) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgRequestRedemption();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = object.market_id;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = coin_1.Coin.fromAmino(object.amount);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.market_id = message.marketId === "" ? undefined : message.marketId;
        obj.amount = message.amount ? coin_1.Coin.toAmino(message.amount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgRequestRedemption.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgRequestRedemption.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRequestRedemption.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.insurance.v1beta1.MsgRequestRedemption",
            value: exports.MsgRequestRedemption.encode(message).finish()
        };
    }
};
function createBaseMsgRequestRedemptionResponse() {
    return {};
}
exports.MsgRequestRedemptionResponse = {
    typeUrl: "/injective.insurance.v1beta1.MsgRequestRedemptionResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRequestRedemptionResponse();
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
        const message = createBaseMsgRequestRedemptionResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgRequestRedemptionResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgRequestRedemptionResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgRequestRedemptionResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRequestRedemptionResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.insurance.v1beta1.MsgRequestRedemptionResponse",
            value: exports.MsgRequestRedemptionResponse.encode(message).finish()
        };
    }
};
