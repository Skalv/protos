"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFeeTokenProposal = void 0;
//@ts-nocheck
const feetoken_1 = require("./feetoken");
const binary_1 = require("../../../binary");
function createBaseUpdateFeeTokenProposal() {
    return {
        $typeUrl: "/osmosis.txfees.v1beta1.UpdateFeeTokenProposal",
        title: "",
        description: "",
        feetoken: feetoken_1.FeeToken.fromPartial({})
    };
}
exports.UpdateFeeTokenProposal = {
    typeUrl: "/osmosis.txfees.v1beta1.UpdateFeeTokenProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.feetoken !== undefined) {
            feetoken_1.FeeToken.encode(message.feetoken, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateFeeTokenProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.feetoken = feetoken_1.FeeToken.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseUpdateFeeTokenProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.feetoken = object.feetoken !== undefined && object.feetoken !== null ? feetoken_1.FeeToken.fromPartial(object.feetoken) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseUpdateFeeTokenProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.feetoken !== undefined && object.feetoken !== null) {
            message.feetoken = feetoken_1.FeeToken.fromAmino(object.feetoken);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === "" ? undefined : message.title;
        obj.description = message.description === "" ? undefined : message.description;
        obj.feetoken = message.feetoken ? feetoken_1.FeeToken.toAmino(message.feetoken) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.UpdateFeeTokenProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/UpdateFeeTokenProposal",
            value: exports.UpdateFeeTokenProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.UpdateFeeTokenProposal.decode(message.value);
    },
    toProto(message) {
        return exports.UpdateFeeTokenProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.txfees.v1beta1.UpdateFeeTokenProposal",
            value: exports.UpdateFeeTokenProposal.encode(message).finish()
        };
    }
};
