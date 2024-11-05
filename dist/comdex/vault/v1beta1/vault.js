"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vault = void 0;
//@ts-nocheck
const binary_1 = require("../../../binary");
function createBaseVault() {
    return {
        id: BigInt(0),
        pairId: BigInt(0),
        owner: "",
        amountIn: "",
        amountOut: ""
    };
}
exports.Vault = {
    typeUrl: "/comdex.vault.v1beta1.Vault",
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
        if (message.amountIn !== "") {
            writer.uint32(34).string(message.amountIn);
        }
        if (message.amountOut !== "") {
            writer.uint32(42).string(message.amountOut);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVault();
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
                    message.amountIn = reader.string();
                    break;
                case 5:
                    message.amountOut = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseVault();
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        message.pairId = object.pairId !== undefined && object.pairId !== null ? BigInt(object.pairId.toString()) : BigInt(0);
        message.owner = object.owner ?? "";
        message.amountIn = object.amountIn ?? "";
        message.amountOut = object.amountOut ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseVault();
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id);
        }
        if (object.pair_id !== undefined && object.pair_id !== null) {
            message.pairId = BigInt(object.pair_id);
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.amount_in !== undefined && object.amount_in !== null) {
            message.amountIn = object.amount_in;
        }
        if (object.amount_out !== undefined && object.amount_out !== null) {
            message.amountOut = object.amount_out;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id !== BigInt(0) ? (message.id?.toString)() : undefined;
        obj.pair_id = message.pairId !== BigInt(0) ? (message.pairId?.toString)() : undefined;
        obj.owner = message.owner === "" ? undefined : message.owner;
        obj.amount_in = message.amountIn === "" ? undefined : message.amountIn;
        obj.amount_out = message.amountOut === "" ? undefined : message.amountOut;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Vault.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Vault.decode(message.value);
    },
    toProto(message) {
        return exports.Vault.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.vault.v1beta1.Vault",
            value: exports.Vault.encode(message).finish()
        };
    }
};
