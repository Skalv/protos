"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Asset = void 0;
//@ts-nocheck
const binary_1 = require("../../../binary");
function createBaseAsset() {
    return {
        id: BigInt(0),
        name: "",
        denom: "",
        decimals: BigInt(0)
    };
}
exports.Asset = {
    typeUrl: "/comdex.asset.v1beta1.Asset",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAsset();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
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
        const message = createBaseAsset();
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        message.name = object.name ?? "";
        message.denom = object.denom ?? "";
        message.decimals = object.decimals !== undefined && object.decimals !== null ? BigInt(object.decimals.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseAsset();
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
        obj.id = message.id !== BigInt(0) ? (message.id?.toString)() : undefined;
        obj.name = message.name === "" ? undefined : message.name;
        obj.denom = message.denom === "" ? undefined : message.denom;
        obj.decimals = message.decimals !== BigInt(0) ? (message.decimals?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Asset.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Asset.decode(message.value);
    },
    toProto(message) {
        return exports.Asset.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.asset.v1beta1.Asset",
            value: exports.Asset.encode(message).finish()
        };
    }
};
