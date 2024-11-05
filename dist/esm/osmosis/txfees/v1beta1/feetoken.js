//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseFeeToken() {
    return {
        denom: "",
        poolID: BigInt(0)
    };
}
export const FeeToken = {
    typeUrl: "/osmosis.txfees.v1beta1.FeeToken",
    encode(message, writer = BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.poolID !== BigInt(0)) {
            writer.uint32(16).uint64(message.poolID);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFeeToken();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.poolID = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseFeeToken();
        message.denom = object.denom ?? "";
        message.poolID = object.poolID !== undefined && object.poolID !== null ? BigInt(object.poolID.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseFeeToken();
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        if (object.poolID !== undefined && object.poolID !== null) {
            message.poolID = BigInt(object.poolID);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom === "" ? undefined : message.denom;
        obj.poolID = message.poolID !== BigInt(0) ? (message.poolID?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return FeeToken.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/txfees/fee-token",
            value: FeeToken.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return FeeToken.decode(message.value);
    },
    toProto(message) {
        return FeeToken.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.txfees.v1beta1.FeeToken",
            value: FeeToken.encode(message).finish()
        };
    }
};
