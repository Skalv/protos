"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pair = void 0;
//@ts-nocheck
const binary_1 = require("../../../binary");
const math_1 = require("@cosmjs/math");
function createBasePair() {
    return {
        id: BigInt(0),
        assetIn: BigInt(0),
        assetOut: BigInt(0),
        liquidationRatio: ""
    };
}
exports.Pair = {
    typeUrl: "/comdex.asset.v1beta1.Pair",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.assetIn !== BigInt(0)) {
            writer.uint32(16).uint64(message.assetIn);
        }
        if (message.assetOut !== BigInt(0)) {
            writer.uint32(24).uint64(message.assetOut);
        }
        if (message.liquidationRatio !== "") {
            writer.uint32(34).string(math_1.Decimal.fromUserInput(message.liquidationRatio, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePair();
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
                    message.assetOut = reader.uint64();
                    break;
                case 4:
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
        const message = createBasePair();
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        message.assetIn = object.assetIn !== undefined && object.assetIn !== null ? BigInt(object.assetIn.toString()) : BigInt(0);
        message.assetOut = object.assetOut !== undefined && object.assetOut !== null ? BigInt(object.assetOut.toString()) : BigInt(0);
        message.liquidationRatio = object.liquidationRatio ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBasePair();
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id);
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
        obj.id = message.id !== BigInt(0) ? (message.id?.toString)() : undefined;
        obj.asset_in = message.assetIn !== BigInt(0) ? (message.assetIn?.toString)() : undefined;
        obj.asset_out = message.assetOut !== BigInt(0) ? (message.assetOut?.toString)() : undefined;
        obj.liquidation_ratio = message.liquidationRatio === "" ? undefined : message.liquidationRatio;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Pair.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Pair.decode(message.value);
    },
    toProto(message) {
        return exports.Pair.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.asset.v1beta1.Pair",
            value: exports.Pair.encode(message).finish()
        };
    }
};
