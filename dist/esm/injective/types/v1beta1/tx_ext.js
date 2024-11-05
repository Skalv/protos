//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../helpers";
function createBaseExtensionOptionsWeb3Tx() {
    return {
        typedDataChainID: BigInt(0),
        feePayer: "",
        feePayerSig: new Uint8Array()
    };
}
export const ExtensionOptionsWeb3Tx = {
    typeUrl: "/injective.types.v1beta1.ExtensionOptionsWeb3Tx",
    encode(message, writer = BinaryWriter.create()) {
        if (message.typedDataChainID !== BigInt(0)) {
            writer.uint32(8).uint64(message.typedDataChainID);
        }
        if (message.feePayer !== "") {
            writer.uint32(18).string(message.feePayer);
        }
        if (message.feePayerSig.length !== 0) {
            writer.uint32(26).bytes(message.feePayerSig);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExtensionOptionsWeb3Tx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.typedDataChainID = reader.uint64();
                    break;
                case 2:
                    message.feePayer = reader.string();
                    break;
                case 3:
                    message.feePayerSig = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseExtensionOptionsWeb3Tx();
        message.typedDataChainID = object.typedDataChainID !== undefined && object.typedDataChainID !== null ? BigInt(object.typedDataChainID.toString()) : BigInt(0);
        message.feePayer = object.feePayer ?? "";
        message.feePayerSig = object.feePayerSig ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseExtensionOptionsWeb3Tx();
        if (object.typedDataChainID !== undefined && object.typedDataChainID !== null) {
            message.typedDataChainID = BigInt(object.typedDataChainID);
        }
        if (object.feePayer !== undefined && object.feePayer !== null) {
            message.feePayer = object.feePayer;
        }
        if (object.feePayerSig !== undefined && object.feePayerSig !== null) {
            message.feePayerSig = bytesFromBase64(object.feePayerSig);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.typedDataChainID = message.typedDataChainID !== BigInt(0) ? (message.typedDataChainID?.toString)() : undefined;
        obj.feePayer = message.feePayer === "" ? undefined : message.feePayer;
        obj.feePayerSig = message.feePayerSig ? base64FromBytes(message.feePayerSig) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ExtensionOptionsWeb3Tx.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ExtensionOptionsWeb3Tx.decode(message.value);
    },
    toProto(message) {
        return ExtensionOptionsWeb3Tx.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.types.v1beta1.ExtensionOptionsWeb3Tx",
            value: ExtensionOptionsWeb3Tx.encode(message).finish()
        };
    }
};