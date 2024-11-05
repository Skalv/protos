//@ts-nocheck
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Asset } from "./asset";
import { Params } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
function createBaseQueryAssetsRequest() {
    return {
        pagination: undefined
    };
}
export const QueryAssetsRequest = {
    typeUrl: "/comdex.asset.v1beta1.QueryAssetsRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAssetsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAssetsRequest();
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAssetsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAssetsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAssetsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.asset.v1beta1.QueryAssetsRequest",
            value: QueryAssetsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAssetsResponse() {
    return {
        assets: [],
        pagination: undefined
    };
}
export const QueryAssetsResponse = {
    typeUrl: "/comdex.asset.v1beta1.QueryAssetsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.assets) {
            Asset.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAssetsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.assets.push(Asset.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
        message.assets = object.assets?.map(e => Asset.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAssetsResponse();
        message.assets = object.assets?.map(e => Asset.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.assets) {
            obj.assets = message.assets.map(e => e ? Asset.toAmino(e) : undefined);
        }
        else {
            obj.assets = message.assets;
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAssetsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAssetsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryAssetsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.asset.v1beta1.QueryAssetsResponse",
            value: QueryAssetsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAssetRequest() {
    return {
        id: BigInt(0)
    };
}
export const QueryAssetRequest = {
    typeUrl: "/comdex.asset.v1beta1.QueryAssetRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryAssetRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAssetRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAssetRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.asset.v1beta1.QueryAssetRequest",
            value: QueryAssetRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAssetResponse() {
    return {
        asset: Asset.fromPartial({})
    };
}
export const QueryAssetResponse = {
    typeUrl: "/comdex.asset.v1beta1.QueryAssetResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.asset !== undefined) {
            Asset.encode(message.asset, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAssetResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.asset = Asset.decode(reader, reader.uint32());
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
        message.asset = object.asset !== undefined && object.asset !== null ? Asset.fromPartial(object.asset) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAssetResponse();
        if (object.asset !== undefined && object.asset !== null) {
            message.asset = Asset.fromAmino(object.asset);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.asset = message.asset ? Asset.toAmino(message.asset) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAssetResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAssetResponse.decode(message.value);
    },
    toProto(message) {
        return QueryAssetResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.asset.v1beta1.QueryAssetResponse",
            value: QueryAssetResponse.encode(message).finish()
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
export const PairInfo = {
    typeUrl: "/comdex.asset.v1beta1.PairInfo",
    encode(message, writer = BinaryWriter.create()) {
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
            writer.uint32(50).string(Decimal.fromUserInput(message.liquidationRatio, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.liquidationRatio = Decimal.fromAtomics(reader.string(), 18).toString();
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
        return PairInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return PairInfo.decode(message.value);
    },
    toProto(message) {
        return PairInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.asset.v1beta1.PairInfo",
            value: PairInfo.encode(message).finish()
        };
    }
};
function createBaseQueryPairsRequest() {
    return {
        pagination: undefined
    };
}
export const QueryPairsRequest = {
    typeUrl: "/comdex.asset.v1beta1.QueryPairsRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPairsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPairsRequest();
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPairsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryPairsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryPairsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.asset.v1beta1.QueryPairsRequest",
            value: QueryPairsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPairsResponse() {
    return {
        pairsInfo: [],
        pagination: undefined
    };
}
export const QueryPairsResponse = {
    typeUrl: "/comdex.asset.v1beta1.QueryPairsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.pairsInfo) {
            PairInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPairsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pairsInfo.push(PairInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
        message.pairsInfo = object.pairsInfo?.map(e => PairInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPairsResponse();
        message.pairsInfo = object.pairsInfo?.map(e => PairInfo.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.pairsInfo) {
            obj.pairsInfo = message.pairsInfo.map(e => e ? PairInfo.toAmino(e) : undefined);
        }
        else {
            obj.pairsInfo = message.pairsInfo;
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPairsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryPairsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryPairsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.asset.v1beta1.QueryPairsResponse",
            value: QueryPairsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryPairRequest() {
    return {
        id: BigInt(0)
    };
}
export const QueryPairRequest = {
    typeUrl: "/comdex.asset.v1beta1.QueryPairRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryPairRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryPairRequest.decode(message.value);
    },
    toProto(message) {
        return QueryPairRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.asset.v1beta1.QueryPairRequest",
            value: QueryPairRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPairResponse() {
    return {
        pairInfo: PairInfo.fromPartial({})
    };
}
export const QueryPairResponse = {
    typeUrl: "/comdex.asset.v1beta1.QueryPairResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.pairInfo !== undefined) {
            PairInfo.encode(message.pairInfo, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPairResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pairInfo = PairInfo.decode(reader, reader.uint32());
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
        message.pairInfo = object.pairInfo !== undefined && object.pairInfo !== null ? PairInfo.fromPartial(object.pairInfo) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPairResponse();
        if (object.pairInfo !== undefined && object.pairInfo !== null) {
            message.pairInfo = PairInfo.fromAmino(object.pairInfo);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pairInfo = message.pairInfo ? PairInfo.toAmino(message.pairInfo) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPairResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryPairResponse.decode(message.value);
    },
    toProto(message) {
        return QueryPairResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.asset.v1beta1.QueryPairResponse",
            value: QueryPairResponse.encode(message).finish()
        };
    }
};
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    typeUrl: "/comdex.asset.v1beta1.QueryParamsRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryParamsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.asset.v1beta1.QueryParamsRequest",
            value: QueryParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: Params.fromPartial({})
    };
}
export const QueryParamsResponse = {
    typeUrl: "/comdex.asset.v1beta1.QueryParamsResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
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
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.asset.v1beta1.QueryParamsResponse",
            value: QueryParamsResponse.encode(message).finish()
        };
    }
};
