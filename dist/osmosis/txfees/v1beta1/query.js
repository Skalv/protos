"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryBaseDenomResponse = exports.QueryBaseDenomRequest = exports.QueryDenomPoolIdResponse = exports.QueryDenomPoolIdRequest = exports.QueryDenomSpotPriceResponse = exports.QueryDenomSpotPriceRequest = exports.QueryFeeTokensResponse = exports.QueryFeeTokensRequest = void 0;
//@ts-nocheck
const feetoken_1 = require("./feetoken");
const binary_1 = require("../../../binary");
const math_1 = require("@cosmjs/math");
function createBaseQueryFeeTokensRequest() {
    return {};
}
exports.QueryFeeTokensRequest = {
    typeUrl: "/osmosis.txfees.v1beta1.QueryFeeTokensRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFeeTokensRequest();
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
        const message = createBaseQueryFeeTokensRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryFeeTokensRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryFeeTokensRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/txfees/query-fee-tokens-request",
            value: exports.QueryFeeTokensRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryFeeTokensRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryFeeTokensRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.txfees.v1beta1.QueryFeeTokensRequest",
            value: exports.QueryFeeTokensRequest.encode(message).finish()
        };
    }
};
function createBaseQueryFeeTokensResponse() {
    return {
        feeTokens: []
    };
}
exports.QueryFeeTokensResponse = {
    typeUrl: "/osmosis.txfees.v1beta1.QueryFeeTokensResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.feeTokens) {
            feetoken_1.FeeToken.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFeeTokensResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.feeTokens.push(feetoken_1.FeeToken.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryFeeTokensResponse();
        message.feeTokens = object.feeTokens?.map(e => feetoken_1.FeeToken.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryFeeTokensResponse();
        message.feeTokens = object.fee_tokens?.map(e => feetoken_1.FeeToken.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.feeTokens) {
            obj.fee_tokens = message.feeTokens.map(e => e ? feetoken_1.FeeToken.toAmino(e) : undefined);
        }
        else {
            obj.fee_tokens = message.feeTokens;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryFeeTokensResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/txfees/query-fee-tokens-response",
            value: exports.QueryFeeTokensResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryFeeTokensResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryFeeTokensResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.txfees.v1beta1.QueryFeeTokensResponse",
            value: exports.QueryFeeTokensResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDenomSpotPriceRequest() {
    return {
        denom: ""
    };
}
exports.QueryDenomSpotPriceRequest = {
    typeUrl: "/osmosis.txfees.v1beta1.QueryDenomSpotPriceRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomSpotPriceRequest();
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
        const message = createBaseQueryDenomSpotPriceRequest();
        message.denom = object.denom ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryDenomSpotPriceRequest();
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
        return exports.QueryDenomSpotPriceRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/txfees/query-denom-spot-price-request",
            value: exports.QueryDenomSpotPriceRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryDenomSpotPriceRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDenomSpotPriceRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.txfees.v1beta1.QueryDenomSpotPriceRequest",
            value: exports.QueryDenomSpotPriceRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDenomSpotPriceResponse() {
    return {
        poolID: BigInt(0),
        spotPrice: ""
    };
}
exports.QueryDenomSpotPriceResponse = {
    typeUrl: "/osmosis.txfees.v1beta1.QueryDenomSpotPriceResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolID !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolID);
        }
        if (message.spotPrice !== "") {
            writer.uint32(18).string(math_1.Decimal.fromUserInput(message.spotPrice, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomSpotPriceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolID = reader.uint64();
                    break;
                case 2:
                    message.spotPrice = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDenomSpotPriceResponse();
        message.poolID = object.poolID !== undefined && object.poolID !== null ? BigInt(object.poolID.toString()) : BigInt(0);
        message.spotPrice = object.spotPrice ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryDenomSpotPriceResponse();
        if (object.poolID !== undefined && object.poolID !== null) {
            message.poolID = BigInt(object.poolID);
        }
        if (object.spot_price !== undefined && object.spot_price !== null) {
            message.spotPrice = object.spot_price;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.poolID = message.poolID !== BigInt(0) ? (message.poolID?.toString)() : undefined;
        obj.spot_price = message.spotPrice === "" ? undefined : message.spotPrice;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDenomSpotPriceResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/txfees/query-denom-spot-price-response",
            value: exports.QueryDenomSpotPriceResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryDenomSpotPriceResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDenomSpotPriceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.txfees.v1beta1.QueryDenomSpotPriceResponse",
            value: exports.QueryDenomSpotPriceResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDenomPoolIdRequest() {
    return {
        denom: ""
    };
}
exports.QueryDenomPoolIdRequest = {
    typeUrl: "/osmosis.txfees.v1beta1.QueryDenomPoolIdRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomPoolIdRequest();
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
        const message = createBaseQueryDenomPoolIdRequest();
        message.denom = object.denom ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryDenomPoolIdRequest();
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
        return exports.QueryDenomPoolIdRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/txfees/query-denom-pool-id-request",
            value: exports.QueryDenomPoolIdRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryDenomPoolIdRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDenomPoolIdRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.txfees.v1beta1.QueryDenomPoolIdRequest",
            value: exports.QueryDenomPoolIdRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDenomPoolIdResponse() {
    return {
        poolID: BigInt(0)
    };
}
exports.QueryDenomPoolIdResponse = {
    typeUrl: "/osmosis.txfees.v1beta1.QueryDenomPoolIdResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolID !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolID);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomPoolIdResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolID = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDenomPoolIdResponse();
        message.poolID = object.poolID !== undefined && object.poolID !== null ? BigInt(object.poolID.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryDenomPoolIdResponse();
        if (object.poolID !== undefined && object.poolID !== null) {
            message.poolID = BigInt(object.poolID);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.poolID = message.poolID !== BigInt(0) ? (message.poolID?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDenomPoolIdResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/txfees/query-denom-pool-id-response",
            value: exports.QueryDenomPoolIdResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryDenomPoolIdResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDenomPoolIdResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.txfees.v1beta1.QueryDenomPoolIdResponse",
            value: exports.QueryDenomPoolIdResponse.encode(message).finish()
        };
    }
};
function createBaseQueryBaseDenomRequest() {
    return {};
}
exports.QueryBaseDenomRequest = {
    typeUrl: "/osmosis.txfees.v1beta1.QueryBaseDenomRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBaseDenomRequest();
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
        const message = createBaseQueryBaseDenomRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryBaseDenomRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBaseDenomRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/txfees/query-base-denom-request",
            value: exports.QueryBaseDenomRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryBaseDenomRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBaseDenomRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.txfees.v1beta1.QueryBaseDenomRequest",
            value: exports.QueryBaseDenomRequest.encode(message).finish()
        };
    }
};
function createBaseQueryBaseDenomResponse() {
    return {
        baseDenom: ""
    };
}
exports.QueryBaseDenomResponse = {
    typeUrl: "/osmosis.txfees.v1beta1.QueryBaseDenomResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.baseDenom !== "") {
            writer.uint32(10).string(message.baseDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBaseDenomResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseDenom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryBaseDenomResponse();
        message.baseDenom = object.baseDenom ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBaseDenomResponse();
        if (object.base_denom !== undefined && object.base_denom !== null) {
            message.baseDenom = object.base_denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.base_denom = message.baseDenom === "" ? undefined : message.baseDenom;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBaseDenomResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/txfees/query-base-denom-response",
            value: exports.QueryBaseDenomResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryBaseDenomResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBaseDenomResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.txfees.v1beta1.QueryBaseDenomResponse",
            value: exports.QueryBaseDenomResponse.encode(message).finish()
        };
    }
};
