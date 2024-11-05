"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuerySpotPriceResponse = exports.QuerySpotPriceRequest = void 0;
//@ts-nocheck
const binary_1 = require("../../../binary");
function createBaseQuerySpotPriceRequest() {
    return {
        poolId: BigInt(0),
        baseAssetDenom: "",
        quoteAssetDenom: ""
    };
}
exports.QuerySpotPriceRequest = {
    typeUrl: "/osmosis.gamm.v2.QuerySpotPriceRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.poolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.baseAssetDenom !== "") {
            writer.uint32(18).string(message.baseAssetDenom);
        }
        if (message.quoteAssetDenom !== "") {
            writer.uint32(26).string(message.quoteAssetDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySpotPriceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.baseAssetDenom = reader.string();
                    break;
                case 3:
                    message.quoteAssetDenom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQuerySpotPriceRequest();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
        message.baseAssetDenom = object.baseAssetDenom ?? "";
        message.quoteAssetDenom = object.quoteAssetDenom ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySpotPriceRequest();
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        if (object.base_asset_denom !== undefined && object.base_asset_denom !== null) {
            message.baseAssetDenom = object.base_asset_denom;
        }
        if (object.quote_asset_denom !== undefined && object.quote_asset_denom !== null) {
            message.quoteAssetDenom = object.quote_asset_denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.poolId !== BigInt(0) ? (message.poolId?.toString)() : undefined;
        obj.base_asset_denom = message.baseAssetDenom === "" ? undefined : message.baseAssetDenom;
        obj.quote_asset_denom = message.quoteAssetDenom === "" ? undefined : message.quoteAssetDenom;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QuerySpotPriceRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/v2/query-spot-price-request",
            value: exports.QuerySpotPriceRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QuerySpotPriceRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySpotPriceRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v2.QuerySpotPriceRequest",
            value: exports.QuerySpotPriceRequest.encode(message).finish()
        };
    }
};
function createBaseQuerySpotPriceResponse() {
    return {
        spotPrice: ""
    };
}
exports.QuerySpotPriceResponse = {
    typeUrl: "/osmosis.gamm.v2.QuerySpotPriceResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.spotPrice !== "") {
            writer.uint32(10).string(message.spotPrice);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySpotPriceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.spotPrice = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQuerySpotPriceResponse();
        message.spotPrice = object.spotPrice ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySpotPriceResponse();
        if (object.spot_price !== undefined && object.spot_price !== null) {
            message.spotPrice = object.spot_price;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.spot_price = message.spotPrice === "" ? undefined : message.spotPrice;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QuerySpotPriceResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/v2/query-spot-price-response",
            value: exports.QuerySpotPriceResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QuerySpotPriceResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySpotPriceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v2.QuerySpotPriceResponse",
            value: exports.QuerySpotPriceResponse.encode(message).finish()
        };
    }
};
