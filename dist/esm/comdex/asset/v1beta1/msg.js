//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
function createBaseMsgAddAssetRequest() {
    return {
        from: "",
        name: "",
        denom: "",
        decimals: BigInt(0)
    };
}
export const MsgAddAssetRequest = {
    typeUrl: "/comdex.asset.v1beta1.MsgAddAssetRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.denom !== "") {
            writer.uint32(26).string(message.denom);
        }
        if (message.decimals !== BigInt(0)) {
            writer.uint32(32).int64(message.decimals);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAddAssetRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.from = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.denom = reader.string();
                    break;
                case 4:
                    message.decimals = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgAddAssetRequest();
        message.from = object.from ?? "";
        message.name = object.name ?? "";
        message.denom = object.denom ?? "";
        message.decimals = object.decimals !== undefined && object.decimals !== null ? BigInt(object.decimals.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgAddAssetRequest();
        if (object.from !== undefined && object.from !== null) {
            message.from = object.from;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        if (object.decimals !== undefined && object.decimals !== null) {
            message.decimals = BigInt(object.decimals);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.from = message.from === "" ? undefined : message.from;
        obj.name = message.name === "" ? undefined : message.name;
        obj.denom = message.denom === "" ? undefined : message.denom;
        obj.decimals = message.decimals !== BigInt(0) ? (message.decimals?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgAddAssetRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgAddAssetRequest.decode(message.value);
    },
    toProto(message) {
        return MsgAddAssetRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.asset.v1beta1.MsgAddAssetRequest",
            value: MsgAddAssetRequest.encode(message).finish()
        };
    }
};
function createBaseMsgAddAssetResponse() {
    return {};
}
export const MsgAddAssetResponse = {
    typeUrl: "/comdex.asset.v1beta1.MsgAddAssetResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAddAssetResponse();
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
        const message = createBaseMsgAddAssetResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgAddAssetResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgAddAssetResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgAddAssetResponse.decode(message.value);
    },
    toProto(message) {
        return MsgAddAssetResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.asset.v1beta1.MsgAddAssetResponse",
            value: MsgAddAssetResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateAssetRequest() {
    return {
        from: "",
        id: BigInt(0),
        name: "",
        denom: "",
        decimals: BigInt(0)
    };
}
export const MsgUpdateAssetRequest = {
    typeUrl: "/comdex.asset.v1beta1.MsgUpdateAssetRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (message.id !== BigInt(0)) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        if (message.denom !== "") {
            writer.uint32(34).string(message.denom);
        }
        if (message.decimals !== BigInt(0)) {
            writer.uint32(40).int64(message.decimals);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateAssetRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.from = reader.string();
                    break;
                case 2:
                    message.id = reader.uint64();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.denom = reader.string();
                    break;
                case 5:
                    message.decimals = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateAssetRequest();
        message.from = object.from ?? "";
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        message.name = object.name ?? "";
        message.denom = object.denom ?? "";
        message.decimals = object.decimals !== undefined && object.decimals !== null ? BigInt(object.decimals.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateAssetRequest();
        if (object.from !== undefined && object.from !== null) {
            message.from = object.from;
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id);
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        if (object.decimals !== undefined && object.decimals !== null) {
            message.decimals = BigInt(object.decimals);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.from = message.from === "" ? undefined : message.from;
        obj.id = message.id !== BigInt(0) ? (message.id?.toString)() : undefined;
        obj.name = message.name === "" ? undefined : message.name;
        obj.denom = message.denom === "" ? undefined : message.denom;
        obj.decimals = message.decimals !== BigInt(0) ? (message.decimals?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateAssetRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgUpdateAssetRequest.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateAssetRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.asset.v1beta1.MsgUpdateAssetRequest",
            value: MsgUpdateAssetRequest.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateAssetResponse() {
    return {};
}
export const MsgUpdateAssetResponse = {
    typeUrl: "/comdex.asset.v1beta1.MsgUpdateAssetResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateAssetResponse();
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
        const message = createBaseMsgUpdateAssetResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUpdateAssetResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateAssetResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgUpdateAssetResponse.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateAssetResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.asset.v1beta1.MsgUpdateAssetResponse",
            value: MsgUpdateAssetResponse.encode(message).finish()
        };
    }
};
function createBaseMsgAddPairRequest() {
    return {
        from: "",
        assetIn: BigInt(0),
        assetOut: BigInt(0),
        liquidationRatio: ""
    };
}
export const MsgAddPairRequest = {
    typeUrl: "/comdex.asset.v1beta1.MsgAddPairRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (message.assetIn !== BigInt(0)) {
            writer.uint32(16).uint64(message.assetIn);
        }
        if (message.assetOut !== BigInt(0)) {
            writer.uint32(24).uint64(message.assetOut);
        }
        if (message.liquidationRatio !== "") {
            writer.uint32(34).string(Decimal.fromUserInput(message.liquidationRatio, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAddPairRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.from = reader.string();
                    break;
                case 2:
                    message.assetIn = reader.uint64();
                    break;
                case 3:
                    message.assetOut = reader.uint64();
                    break;
                case 4:
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
        const message = createBaseMsgAddPairRequest();
        message.from = object.from ?? "";
        message.assetIn = object.assetIn !== undefined && object.assetIn !== null ? BigInt(object.assetIn.toString()) : BigInt(0);
        message.assetOut = object.assetOut !== undefined && object.assetOut !== null ? BigInt(object.assetOut.toString()) : BigInt(0);
        message.liquidationRatio = object.liquidationRatio ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgAddPairRequest();
        if (object.from !== undefined && object.from !== null) {
            message.from = object.from;
        }
        if (object.asset_in !== undefined && object.asset_in !== null) {
            message.assetIn = BigInt(object.asset_in);
        }
        if (object.asset_out !== undefined && object.asset_out !== null) {
            message.assetOut = BigInt(object.asset_out);
        }
        if (object.liquidation_ratio !== undefined && object.liquidation_ratio !== null) {
            message.liquidationRatio = object.liquidation_ratio;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.from = message.from === "" ? undefined : message.from;
        obj.asset_in = message.assetIn !== BigInt(0) ? (message.assetIn?.toString)() : undefined;
        obj.asset_out = message.assetOut !== BigInt(0) ? (message.assetOut?.toString)() : undefined;
        obj.liquidation_ratio = message.liquidationRatio === "" ? undefined : message.liquidationRatio;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgAddPairRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgAddPairRequest.decode(message.value);
    },
    toProto(message) {
        return MsgAddPairRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.asset.v1beta1.MsgAddPairRequest",
            value: MsgAddPairRequest.encode(message).finish()
        };
    }
};
function createBaseMsgAddPairResponse() {
    return {};
}
export const MsgAddPairResponse = {
    typeUrl: "/comdex.asset.v1beta1.MsgAddPairResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAddPairResponse();
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
        const message = createBaseMsgAddPairResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgAddPairResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgAddPairResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgAddPairResponse.decode(message.value);
    },
    toProto(message) {
        return MsgAddPairResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.asset.v1beta1.MsgAddPairResponse",
            value: MsgAddPairResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdatePairRequest() {
    return {
        from: "",
        id: BigInt(0),
        liquidationRatio: ""
    };
}
export const MsgUpdatePairRequest = {
    typeUrl: "/comdex.asset.v1beta1.MsgUpdatePairRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (message.id !== BigInt(0)) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.liquidationRatio !== "") {
            writer.uint32(26).string(Decimal.fromUserInput(message.liquidationRatio, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdatePairRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.from = reader.string();
                    break;
                case 2:
                    message.id = reader.uint64();
                    break;
                case 3:
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
        const message = createBaseMsgUpdatePairRequest();
        message.from = object.from ?? "";
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        message.liquidationRatio = object.liquidationRatio ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdatePairRequest();
        if (object.from !== undefined && object.from !== null) {
            message.from = object.from;
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id);
        }
        if (object.liquidation_ratio !== undefined && object.liquidation_ratio !== null) {
            message.liquidationRatio = object.liquidation_ratio;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.from = message.from === "" ? undefined : message.from;
        obj.id = message.id !== BigInt(0) ? (message.id?.toString)() : undefined;
        obj.liquidation_ratio = message.liquidationRatio === "" ? undefined : message.liquidationRatio;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdatePairRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgUpdatePairRequest.decode(message.value);
    },
    toProto(message) {
        return MsgUpdatePairRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.asset.v1beta1.MsgUpdatePairRequest",
            value: MsgUpdatePairRequest.encode(message).finish()
        };
    }
};
function createBaseMsgUpdatePairResponse() {
    return {};
}
export const MsgUpdatePairResponse = {
    typeUrl: "/comdex.asset.v1beta1.MsgUpdatePairResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdatePairResponse();
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
        const message = createBaseMsgUpdatePairResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUpdatePairResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdatePairResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgUpdatePairResponse.decode(message.value);
    },
    toProto(message) {
        return MsgUpdatePairResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.asset.v1beta1.MsgUpdatePairResponse",
            value: MsgUpdatePairResponse.encode(message).finish()
        };
    }
};
