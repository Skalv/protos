"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = void 0;
//@ts-nocheck
const binary_1 = require("../../../binary");
function createBaseParams() {
    return {
        contractAddress: ""
    };
}
exports.Params = {
    typeUrl: "/osmosis.ibcratelimit.v1beta1.Params",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.contractAddress !== "") {
            writer.uint32(10).string(message.contractAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contractAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.contractAddress = object.contractAddress ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.contract_address !== undefined && object.contract_address !== null) {
            message.contractAddress = object.contract_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/ibcratelimit/params",
            value: exports.Params.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Params.decode(message.value);
    },
    toProto(message) {
        return exports.Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.ibcratelimit.v1beta1.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
