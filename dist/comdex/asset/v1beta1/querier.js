"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryPairResponse = exports.QueryPairRequest = exports.QueryPairsResponse = exports.QueryPairsRequest = exports.PairInfo = exports.QueryAssetResponse = exports.QueryAssetRequest = exports.QueryAssetsResponse = exports.QueryAssetsRequest = void 0;
//@ts-nocheck
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
const asset_1 = require("./asset");
const params_1 = require("./params");
const binary_1 = require("../../../binary");
const math_1 = require("@cosmjs/math");
function createBaseQueryAssetsRequest() {
    return {
        pagination: undefined
    };
}
exports.QueryAssetsRequest = {
    typeUrl: "/comdex.asset.v1beta1.QueryAssetsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAssetsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAssetsRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAssetsRequest();
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAssetsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAssetsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAssetsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.asset.v1beta1.QueryAssetsRequest",
            value: exports.QueryAssetsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAssetsResponse() {
    return {
        assets: [],
        pagination: undefined
    };
}
exports.QueryAssetsResponse = {
    typeUrl: "/comdex.asset.v1beta1.QueryAssetsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.assets) {
            asset_1.Asset.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAssetsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.assets.push(asset_1.Asset.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAssetsResponse();
        message.assets = object.assets?.map(e => asset_1.Asset.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAssetsResponse();
        message.assets = object.assets?.map(e => asset_1.Asset.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.assets) {
            obj.assets = message.assets.map(e => e ? asset_1.Asset.toAmino(e) : undefined);
        }
        else {
            obj.assets = message.assets;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAssetsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAssetsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAssetsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.asset.v1beta1.QueryAssetsResponse",
            value: exports.QueryAssetsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAssetRequest() {
    return {
        id: BigInt(0)
    };
}
exports.QueryAssetRequest = {
    typeUrl: "/comdex.asset.v1beta1.QueryAssetRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAssetRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAssetRequest();
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAssetRequest();
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id !== BigInt(0) ? (message.id?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAssetRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAssetRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAssetRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.asset.v1beta1.QueryAssetRequest",
            value: exports.QueryAssetRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAssetResponse() {
    return {
        asset: asset_1.Asset.fromPartial({})
    };
}
exports.QueryAssetResponse = {
    typeUrl: "/comdex.asset.v1beta1.QueryAssetResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.asset !== undefined) {
            asset_1.Asset.encode(message.asset, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAssetResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.asset = asset_1.Asset.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAssetResponse();
        message.asset = object.asset !== undefined && object.asset !== null ? asset_1.Asset.fromPartial(object.asset) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAssetResponse();
        if (object.asset !== undefined && object.asset !== null) {
            message.asset = asset_1.Asset.fromAmino(object.asset);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.asset = message.asset ? asset_1.Asset.toAmino(message.asset) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAssetResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAssetResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAssetResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.asset.v1beta1.QueryAssetResponse",
            value: exports.QueryAssetResponse.encode(message).finish()
        };
    }
};
function createBasePairInfo() {
    return {
        id: BigInt(0),
        assetIn: BigInt(0),
        denomIn: "",
        assetOut: BigInt(0),
        denomOut: "",
        liquidationRatio: ""
    };
}
exports.PairInfo = {
    typeUrl: "/comdex.asset.v1beta1.PairInfo",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.assetIn !== BigInt(0)) {
            writer.uint32(16).uint64(message.assetIn);
        }
        if (message.denomIn !== "") {
            writer.uint32(26).string(message.denomIn);
        }
        if (message.assetOut !== BigInt(0)) {
            writer.uint32(32).uint64(message.assetOut);
        }
        if (message.denomOut !== "") {
            writer.uint32(42).string(message.denomOut);
        }
        if (message.liquidationRatio !== "") {
            writer.uint32(50).string(math_1.Decimal.fromUserInput(message.liquidationRatio, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePairInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.assetIn = reader.uint64();
                    break;
                case 3:
                    message.denomIn = reader.string();
                    break;
                case 4:
                    message.assetOut = reader.uint64();
                    break;
                case 5:
                    message.denomOut = reader.string();
                    break;
                case 6:
                    message.liquidationRatio = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePairInfo();
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        message.assetIn = object.assetIn !== undefined && object.assetIn !== null ? BigInt(object.assetIn.toString()) : BigInt(0);
        message.denomIn = object.denomIn ?? "";
        message.assetOut = object.assetOut !== undefined && object.assetOut !== null ? BigInt(object.assetOut.toString()) : BigInt(0);
        message.denomOut = object.denomOut ?? "";
        message.liquidationRatio = object.liquidationRatio ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBasePairInfo();
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id);
        }
        if (object.asset_in !== undefined && object.asset_in !== null) {
            message.assetIn = BigInt(object.asset_in);
        }
        if (object.denom_in !== undefined && object.denom_in !== null) {
            message.denomIn = object.denom_in;
        }
        if (object.asset_out !== undefined && object.asset_out !== null) {
            message.assetOut = BigInt(object.asset_out);
        }
        if (object.denom_out !== undefined && object.denom_out !== null) {
            message.denomOut = object.denom_out;
        }
        if (object.liquidation_ratio !== undefined && object.liquidation_ratio !== null) {
            message.liquidationRatio = object.liquidation_ratio;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id !== BigInt(0) ? (message.id?.toString)() : undefined;
        obj.asset_in = message.assetIn !== BigInt(0) ? (message.assetIn?.toString)() : undefined;
        obj.denom_in = message.denomIn === "" ? undefined : message.denomIn;
        obj.asset_out = message.assetOut !== BigInt(0) ? (message.assetOut?.toString)() : undefined;
        obj.denom_out = message.denomOut === "" ? undefined : message.denomOut;
        obj.liquidation_ratio = message.liquidationRatio === "" ? undefined : message.liquidationRatio;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PairInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.PairInfo.decode(message.value);
    },
    toProto(message) {
        return exports.PairInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.asset.v1beta1.PairInfo",
            value: exports.PairInfo.encode(message).finish()
        };
    }
};
function createBaseQueryPairsRequest() {
    return {
        pagination: undefined
    };
}
exports.QueryPairsRequest = {
    typeUrl: "/comdex.asset.v1beta1.QueryPairsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPairsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryPairsRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPairsRequest();
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPairsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryPairsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPairsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.asset.v1beta1.QueryPairsRequest",
            value: exports.QueryPairsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPairsResponse() {
    return {
        pairsInfo: [],
        pagination: undefined
    };
}
exports.QueryPairsResponse = {
    typeUrl: "/comdex.asset.v1beta1.QueryPairsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.pairsInfo) {
            exports.PairInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPairsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pairsInfo.push(exports.PairInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryPairsResponse();
        message.pairsInfo = object.pairsInfo?.map(e => exports.PairInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPairsResponse();
        message.pairsInfo = object.pairsInfo?.map(e => exports.PairInfo.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.pairsInfo) {
            obj.pairsInfo = message.pairsInfo.map(e => e ? exports.PairInfo.toAmino(e) : undefined);
        }
        else {
            obj.pairsInfo = message.pairsInfo;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPairsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryPairsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPairsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.asset.v1beta1.QueryPairsResponse",
            value: exports.QueryPairsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryPairRequest() {
    return {
        id: BigInt(0)
    };
}
exports.QueryPairRequest = {
    typeUrl: "/comdex.asset.v1beta1.QueryPairRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPairRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryPairRequest();
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPairRequest();
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id !== BigInt(0) ? (message.id?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPairRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryPairRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPairRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.asset.v1beta1.QueryPairRequest",
            value: exports.QueryPairRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPairResponse() {
    return {
        pairInfo: exports.PairInfo.fromPartial({})
    };
}
exports.QueryPairResponse = {
    typeUrl: "/comdex.asset.v1beta1.QueryPairResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pairInfo !== undefined) {
            exports.PairInfo.encode(message.pairInfo, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPairResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pairInfo = exports.PairInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryPairResponse();
        message.pairInfo = object.pairInfo !== undefined && object.pairInfo !== null ? exports.PairInfo.fromPartial(object.pairInfo) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPairResponse();
        if (object.pairInfo !== undefined && object.pairInfo !== null) {
            message.pairInfo = exports.PairInfo.fromAmino(object.pairInfo);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pairInfo = message.pairInfo ? exports.PairInfo.toAmino(message.pairInfo) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPairResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryPairResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPairResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.asset.v1beta1.QueryPairResponse",
            value: exports.QueryPairResponse.encode(message).finish()
        };
    }
};
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: "/comdex.asset.v1beta1.QueryParamsRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
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
        const message = createBaseQueryParamsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryParamsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.asset.v1beta1.QueryParamsRequest",
            value: exports.QueryParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: params_1.Params.fromPartial({})
    };
}
exports.QueryParamsResponse = {
    typeUrl: "/comdex.asset.v1beta1.QueryParamsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
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
                    message.params = params_1.Params.decode(reader, reader.uint32());
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
        message.params = object.params !== undefined && object.params !== null ? params_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? params_1.Params.toAmino(message.params) : undefined;
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
            typeUrl: "/comdex.asset.v1beta1.QueryParamsResponse",
            value: exports.QueryParamsResponse.encode(message).finish()
        };
    }
};
