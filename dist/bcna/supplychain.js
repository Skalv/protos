"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Supplychain = void 0;
//@ts-nocheck
const binary_1 = require("../binary");
function createBaseSupplychain() {
    return {
        id: BigInt(0),
        product: "",
        info: "",
        supplyinfo: "",
        creator: ""
    };
}
exports.Supplychain = {
    typeUrl: "/BitCannaGlobal.bcna.bcna.Supplychain",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.product !== "") {
            writer.uint32(18).string(message.product);
        }
        if (message.info !== "") {
            writer.uint32(26).string(message.info);
        }
        if (message.supplyinfo !== "") {
            writer.uint32(34).string(message.supplyinfo);
        }
        if (message.creator !== "") {
            writer.uint32(42).string(message.creator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSupplychain();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.product = reader.string();
                    break;
                case 3:
                    message.info = reader.string();
                    break;
                case 4:
                    message.supplyinfo = reader.string();
                    break;
                case 5:
                    message.creator = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSupplychain();
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        message.product = object.product ?? "";
        message.info = object.info ?? "";
        message.supplyinfo = object.supplyinfo ?? "";
        message.creator = object.creator ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseSupplychain();
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id);
        }
        if (object.product !== undefined && object.product !== null) {
            message.product = object.product;
        }
        if (object.info !== undefined && object.info !== null) {
            message.info = object.info;
        }
        if (object.supplyinfo !== undefined && object.supplyinfo !== null) {
            message.supplyinfo = object.supplyinfo;
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id !== BigInt(0) ? (message.id?.toString)() : undefined;
        obj.product = message.product === "" ? undefined : message.product;
        obj.info = message.info === "" ? undefined : message.info;
        obj.supplyinfo = message.supplyinfo === "" ? undefined : message.supplyinfo;
        obj.creator = message.creator === "" ? undefined : message.creator;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Supplychain.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Supplychain.decode(message.value);
    },
    toProto(message) {
        return exports.Supplychain.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/BitCannaGlobal.bcna.bcna.Supplychain",
            value: exports.Supplychain.encode(message).finish()
        };
    }
};
