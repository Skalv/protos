"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryAllVaultsResponse = exports.QueryAllVaultsRequest = exports.QueryVaultsResponse = exports.QueryVaultsRequest = exports.QueryVaultResponse = exports.QueryVaultRequest = exports.VaultInfo = void 0;
//@ts-nocheck
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
const binary_1 = require("../../../binary");
const math_1 = require("@cosmjs/math");
function createBaseVaultInfo() {
    return {
        id: BigInt(0),
        pairId: BigInt(0),
        owner: "",
        collateral: coin_1.Coin.fromPartial({}),
        debt: coin_1.Coin.fromPartial({}),
        collateralizationRatio: ""
    };
}
exports.VaultInfo = {
    typeUrl: "/comdex.vault.v1beta1.VaultInfo",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.pairId !== BigInt(0)) {
            writer.uint32(16).uint64(message.pairId);
        }
        if (message.owner !== "") {
            writer.uint32(26).string(message.owner);
        }
        if (message.collateral !== undefined) {
            coin_1.Coin.encode(message.collateral, writer.uint32(34).fork()).ldelim();
        }
        if (message.debt !== undefined) {
            coin_1.Coin.encode(message.debt, writer.uint32(42).fork()).ldelim();
        }
        if (message.collateralizationRatio !== "") {
            writer.uint32(50).string(math_1.Decimal.fromUserInput(message.collateralizationRatio, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVaultInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.pairId = reader.uint64();
                    break;
                case 3:
                    message.owner = reader.string();
                    break;
                case 4:
                    message.collateral = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.debt = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.collateralizationRatio = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseVaultInfo();
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        message.pairId = object.pairId !== undefined && object.pairId !== null ? BigInt(object.pairId.toString()) : BigInt(0);
        message.owner = object.owner ?? "";
        message.collateral = object.collateral !== undefined && object.collateral !== null ? coin_1.Coin.fromPartial(object.collateral) : undefined;
        message.debt = object.debt !== undefined && object.debt !== null ? coin_1.Coin.fromPartial(object.debt) : undefined;
        message.collateralizationRatio = object.collateralizationRatio ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseVaultInfo();
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id);
        }
        if (object.pair_id !== undefined && object.pair_id !== null) {
            message.pairId = BigInt(object.pair_id);
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.collateral !== undefined && object.collateral !== null) {
            message.collateral = coin_1.Coin.fromAmino(object.collateral);
        }
        if (object.debt !== undefined && object.debt !== null) {
            message.debt = coin_1.Coin.fromAmino(object.debt);
        }
        if (object.collateralization_ratio !== undefined && object.collateralization_ratio !== null) {
            message.collateralizationRatio = object.collateralization_ratio;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id !== BigInt(0) ? (message.id?.toString)() : undefined;
        obj.pair_id = message.pairId !== BigInt(0) ? (message.pairId?.toString)() : undefined;
        obj.owner = message.owner === "" ? undefined : message.owner;
        obj.collateral = message.collateral ? coin_1.Coin.toAmino(message.collateral) : undefined;
        obj.debt = message.debt ? coin_1.Coin.toAmino(message.debt) : undefined;
        obj.collateralization_ratio = message.collateralizationRatio === "" ? undefined : message.collateralizationRatio;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.VaultInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.VaultInfo.decode(message.value);
    },
    toProto(message) {
        return exports.VaultInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.vault.v1beta1.VaultInfo",
            value: exports.VaultInfo.encode(message).finish()
        };
    }
};
function createBaseQueryVaultRequest() {
    return {
        id: BigInt(0)
    };
}
exports.QueryVaultRequest = {
    typeUrl: "/comdex.vault.v1beta1.QueryVaultRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVaultRequest();
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
        const message = createBaseQueryVaultRequest();
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryVaultRequest();
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
        return exports.QueryVaultRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryVaultRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryVaultRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.vault.v1beta1.QueryVaultRequest",
            value: exports.QueryVaultRequest.encode(message).finish()
        };
    }
};
function createBaseQueryVaultResponse() {
    return {
        vaultInfo: exports.VaultInfo.fromPartial({})
    };
}
exports.QueryVaultResponse = {
    typeUrl: "/comdex.vault.v1beta1.QueryVaultResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.vaultInfo !== undefined) {
            exports.VaultInfo.encode(message.vaultInfo, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVaultResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vaultInfo = exports.VaultInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryVaultResponse();
        message.vaultInfo = object.vaultInfo !== undefined && object.vaultInfo !== null ? exports.VaultInfo.fromPartial(object.vaultInfo) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryVaultResponse();
        if (object.vaultInfo !== undefined && object.vaultInfo !== null) {
            message.vaultInfo = exports.VaultInfo.fromAmino(object.vaultInfo);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.vaultInfo = message.vaultInfo ? exports.VaultInfo.toAmino(message.vaultInfo) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryVaultResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryVaultResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryVaultResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.vault.v1beta1.QueryVaultResponse",
            value: exports.QueryVaultResponse.encode(message).finish()
        };
    }
};
function createBaseQueryVaultsRequest() {
    return {
        owner: "",
        pagination: undefined
    };
}
exports.QueryVaultsRequest = {
    typeUrl: "/comdex.vault.v1beta1.QueryVaultsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVaultsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
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
        const message = createBaseQueryVaultsRequest();
        message.owner = object.owner ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryVaultsRequest();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner === "" ? undefined : message.owner;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryVaultsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryVaultsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryVaultsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.vault.v1beta1.QueryVaultsRequest",
            value: exports.QueryVaultsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryVaultsResponse() {
    return {
        vaultsInfo: [],
        pagination: undefined
    };
}
exports.QueryVaultsResponse = {
    typeUrl: "/comdex.vault.v1beta1.QueryVaultsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.vaultsInfo) {
            exports.VaultInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVaultsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vaultsInfo.push(exports.VaultInfo.decode(reader, reader.uint32()));
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
        const message = createBaseQueryVaultsResponse();
        message.vaultsInfo = object.vaultsInfo?.map(e => exports.VaultInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryVaultsResponse();
        message.vaultsInfo = object.vaultsInfo?.map(e => exports.VaultInfo.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.vaultsInfo) {
            obj.vaultsInfo = message.vaultsInfo.map(e => e ? exports.VaultInfo.toAmino(e) : undefined);
        }
        else {
            obj.vaultsInfo = message.vaultsInfo;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryVaultsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryVaultsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryVaultsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.vault.v1beta1.QueryVaultsResponse",
            value: exports.QueryVaultsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAllVaultsRequest() {
    return {
        pagination: undefined
    };
}
exports.QueryAllVaultsRequest = {
    typeUrl: "/comdex.vault.v1beta1.QueryAllVaultsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllVaultsRequest();
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
        const message = createBaseQueryAllVaultsRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAllVaultsRequest();
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
        return exports.QueryAllVaultsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAllVaultsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAllVaultsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.vault.v1beta1.QueryAllVaultsRequest",
            value: exports.QueryAllVaultsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAllVaultsResponse() {
    return {
        vaultsInfo: [],
        pagination: undefined
    };
}
exports.QueryAllVaultsResponse = {
    typeUrl: "/comdex.vault.v1beta1.QueryAllVaultsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.vaultsInfo) {
            exports.VaultInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllVaultsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vaultsInfo.push(exports.VaultInfo.decode(reader, reader.uint32()));
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
        const message = createBaseQueryAllVaultsResponse();
        message.vaultsInfo = object.vaultsInfo?.map(e => exports.VaultInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAllVaultsResponse();
        message.vaultsInfo = object.vaultsInfo?.map(e => exports.VaultInfo.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.vaultsInfo) {
            obj.vaultsInfo = message.vaultsInfo.map(e => e ? exports.VaultInfo.toAmino(e) : undefined);
        }
        else {
            obj.vaultsInfo = message.vaultsInfo;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAllVaultsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAllVaultsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAllVaultsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.vault.v1beta1.QueryAllVaultsResponse",
            value: exports.QueryAllVaultsResponse.encode(message).finish()
        };
    }
};
