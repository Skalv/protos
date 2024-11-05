//@ts-nocheck
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
function createBaseVaultInfo() {
    return {
        id: BigInt(0),
        pairId: BigInt(0),
        owner: "",
        collateral: Coin.fromPartial({}),
        debt: Coin.fromPartial({}),
        collateralizationRatio: ""
    };
}
export const VaultInfo = {
    typeUrl: "/comdex.vault.v1beta1.VaultInfo",
    encode(message, writer = BinaryWriter.create()) {
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
            Coin.encode(message.collateral, writer.uint32(34).fork()).ldelim();
        }
        if (message.debt !== undefined) {
            Coin.encode(message.debt, writer.uint32(42).fork()).ldelim();
        }
        if (message.collateralizationRatio !== "") {
            writer.uint32(50).string(Decimal.fromUserInput(message.collateralizationRatio, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.collateral = Coin.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.debt = Coin.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.collateralizationRatio = Decimal.fromAtomics(reader.string(), 18).toString();
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
        message.collateral = object.collateral !== undefined && object.collateral !== null ? Coin.fromPartial(object.collateral) : undefined;
        message.debt = object.debt !== undefined && object.debt !== null ? Coin.fromPartial(object.debt) : undefined;
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
            message.collateral = Coin.fromAmino(object.collateral);
        }
        if (object.debt !== undefined && object.debt !== null) {
            message.debt = Coin.fromAmino(object.debt);
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
        obj.collateral = message.collateral ? Coin.toAmino(message.collateral) : undefined;
        obj.debt = message.debt ? Coin.toAmino(message.debt) : undefined;
        obj.collateralization_ratio = message.collateralizationRatio === "" ? undefined : message.collateralizationRatio;
        return obj;
    },
    fromAminoMsg(object) {
        return VaultInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return VaultInfo.decode(message.value);
    },
    toProto(message) {
        return VaultInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.vault.v1beta1.VaultInfo",
            value: VaultInfo.encode(message).finish()
        };
    }
};
function createBaseQueryVaultRequest() {
    return {
        id: BigInt(0)
    };
}
export const QueryVaultRequest = {
    typeUrl: "/comdex.vault.v1beta1.QueryVaultRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryVaultRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryVaultRequest.decode(message.value);
    },
    toProto(message) {
        return QueryVaultRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.vault.v1beta1.QueryVaultRequest",
            value: QueryVaultRequest.encode(message).finish()
        };
    }
};
function createBaseQueryVaultResponse() {
    return {
        vaultInfo: VaultInfo.fromPartial({})
    };
}
export const QueryVaultResponse = {
    typeUrl: "/comdex.vault.v1beta1.QueryVaultResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.vaultInfo !== undefined) {
            VaultInfo.encode(message.vaultInfo, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVaultResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vaultInfo = VaultInfo.decode(reader, reader.uint32());
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
        message.vaultInfo = object.vaultInfo !== undefined && object.vaultInfo !== null ? VaultInfo.fromPartial(object.vaultInfo) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryVaultResponse();
        if (object.vaultInfo !== undefined && object.vaultInfo !== null) {
            message.vaultInfo = VaultInfo.fromAmino(object.vaultInfo);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.vaultInfo = message.vaultInfo ? VaultInfo.toAmino(message.vaultInfo) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryVaultResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryVaultResponse.decode(message.value);
    },
    toProto(message) {
        return QueryVaultResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.vault.v1beta1.QueryVaultResponse",
            value: QueryVaultResponse.encode(message).finish()
        };
    }
};
function createBaseQueryVaultsRequest() {
    return {
        owner: "",
        pagination: undefined
    };
}
export const QueryVaultsRequest = {
    typeUrl: "/comdex.vault.v1beta1.QueryVaultsRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVaultsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
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
        const message = createBaseQueryVaultsRequest();
        message.owner = object.owner ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryVaultsRequest();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner === "" ? undefined : message.owner;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryVaultsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryVaultsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryVaultsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.vault.v1beta1.QueryVaultsRequest",
            value: QueryVaultsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryVaultsResponse() {
    return {
        vaultsInfo: [],
        pagination: undefined
    };
}
export const QueryVaultsResponse = {
    typeUrl: "/comdex.vault.v1beta1.QueryVaultsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.vaultsInfo) {
            VaultInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVaultsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vaultsInfo.push(VaultInfo.decode(reader, reader.uint32()));
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
        const message = createBaseQueryVaultsResponse();
        message.vaultsInfo = object.vaultsInfo?.map(e => VaultInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryVaultsResponse();
        message.vaultsInfo = object.vaultsInfo?.map(e => VaultInfo.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.vaultsInfo) {
            obj.vaultsInfo = message.vaultsInfo.map(e => e ? VaultInfo.toAmino(e) : undefined);
        }
        else {
            obj.vaultsInfo = message.vaultsInfo;
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryVaultsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryVaultsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryVaultsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.vault.v1beta1.QueryVaultsResponse",
            value: QueryVaultsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAllVaultsRequest() {
    return {
        pagination: undefined
    };
}
export const QueryAllVaultsRequest = {
    typeUrl: "/comdex.vault.v1beta1.QueryAllVaultsRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllVaultsRequest();
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
        const message = createBaseQueryAllVaultsRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAllVaultsRequest();
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
        return QueryAllVaultsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAllVaultsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAllVaultsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.vault.v1beta1.QueryAllVaultsRequest",
            value: QueryAllVaultsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAllVaultsResponse() {
    return {
        vaultsInfo: [],
        pagination: undefined
    };
}
export const QueryAllVaultsResponse = {
    typeUrl: "/comdex.vault.v1beta1.QueryAllVaultsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.vaultsInfo) {
            VaultInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllVaultsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vaultsInfo.push(VaultInfo.decode(reader, reader.uint32()));
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
        const message = createBaseQueryAllVaultsResponse();
        message.vaultsInfo = object.vaultsInfo?.map(e => VaultInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAllVaultsResponse();
        message.vaultsInfo = object.vaultsInfo?.map(e => VaultInfo.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.vaultsInfo) {
            obj.vaultsInfo = message.vaultsInfo.map(e => e ? VaultInfo.toAmino(e) : undefined);
        }
        else {
            obj.vaultsInfo = message.vaultsInfo;
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAllVaultsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAllVaultsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryAllVaultsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.vault.v1beta1.QueryAllVaultsResponse",
            value: QueryAllVaultsResponse.encode(message).finish()
        };
    }
};
