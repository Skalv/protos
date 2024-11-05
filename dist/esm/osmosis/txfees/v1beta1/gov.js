//@ts-nocheck
import { FeeToken } from "./feetoken";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseUpdateFeeTokenProposal() {
    return {
        $typeUrl: "/osmosis.txfees.v1beta1.UpdateFeeTokenProposal",
        title: "",
        description: "",
        feetoken: FeeToken.fromPartial({})
    };
}
export const UpdateFeeTokenProposal = {
    typeUrl: "/osmosis.txfees.v1beta1.UpdateFeeTokenProposal",
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.feetoken !== undefined) {
            FeeToken.encode(message.feetoken, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.feetoken = FeeToken.decode(reader, reader.uint32());
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
        message.feetoken = object.feetoken !== undefined && object.feetoken !== null ? FeeToken.fromPartial(object.feetoken) : undefined;
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
            message.feetoken = FeeToken.fromAmino(object.feetoken);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === "" ? undefined : message.title;
        obj.description = message.description === "" ? undefined : message.description;
        obj.feetoken = message.feetoken ? FeeToken.toAmino(message.feetoken) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return UpdateFeeTokenProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/UpdateFeeTokenProposal",
            value: UpdateFeeTokenProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return UpdateFeeTokenProposal.decode(message.value);
    },
    toProto(message) {
        return UpdateFeeTokenProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.txfees.v1beta1.UpdateFeeTokenProposal",
            value: UpdateFeeTokenProposal.encode(message).finish()
        };
    }
};
