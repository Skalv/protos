//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
function createBaseParams() {
    return {
        minimumRiskFactor: ""
    };
}
export const Params = {
    typeUrl: "/osmosis.superfluid.Params",
    encode(message, writer = BinaryWriter.create()) {
        if (message.minimumRiskFactor !== "") {
            writer.uint32(10).string(Decimal.fromUserInput(message.minimumRiskFactor, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.minimumRiskFactor = Decimal.fromAtomics(reader.string(), 18).toString();
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
        message.minimumRiskFactor = object.minimumRiskFactor ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.minimum_risk_factor !== undefined && object.minimum_risk_factor !== null) {
            message.minimumRiskFactor = object.minimum_risk_factor;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.minimum_risk_factor = message.minimumRiskFactor === "" ? undefined : message.minimumRiskFactor;
        return obj;
    },
    fromAminoMsg(object) {
        return Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/params",
            value: Params.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Params.decode(message.value);
    },
    toProto(message) {
        return Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.Params",
            value: Params.encode(message).finish()
        };
    }
};
