//@ts-nocheck
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { toTimestamp, fromTimestamp } from "../../../helpers";
function createBaseMinter() {
    return {
        annualProvisions: ""
    };
}
export const Minter = {
    typeUrl: "/stargaze.mint.v1beta1.Minter",
    encode(message, writer = BinaryWriter.create()) {
        if (message.annualProvisions !== "") {
            writer.uint32(10).string(Decimal.fromUserInput(message.annualProvisions, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMinter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.annualProvisions = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMinter();
        message.annualProvisions = object.annualProvisions ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMinter();
        if (object.annual_provisions !== undefined && object.annual_provisions !== null) {
            message.annualProvisions = object.annual_provisions;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.annual_provisions = message.annualProvisions === "" ? undefined : message.annualProvisions;
        return obj;
    },
    fromAminoMsg(object) {
        return Minter.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Minter.decode(message.value);
    },
    toProto(message) {
        return Minter.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/stargaze.mint.v1beta1.Minter",
            value: Minter.encode(message).finish()
        };
    }
};
function createBaseParams() {
    return {
        mintDenom: "",
        startTime: new Date(),
        initialAnnualProvisions: "",
        reductionFactor: "",
        blocksPerYear: BigInt(0)
    };
}
export const Params = {
    typeUrl: "/stargaze.mint.v1beta1.Params",
    encode(message, writer = BinaryWriter.create()) {
        if (message.mintDenom !== "") {
            writer.uint32(10).string(message.mintDenom);
        }
        if (message.startTime !== undefined) {
            Timestamp.encode(toTimestamp(message.startTime), writer.uint32(18).fork()).ldelim();
        }
        if (message.initialAnnualProvisions !== "") {
            writer.uint32(26).string(Decimal.fromUserInput(message.initialAnnualProvisions, 18).atomics);
        }
        if (message.reductionFactor !== "") {
            writer.uint32(34).string(Decimal.fromUserInput(message.reductionFactor, 18).atomics);
        }
        if (message.blocksPerYear !== BigInt(0)) {
            writer.uint32(40).uint64(message.blocksPerYear);
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
                    message.mintDenom = reader.string();
                    break;
                case 2:
                    message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.initialAnnualProvisions = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 4:
                    message.reductionFactor = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 5:
                    message.blocksPerYear = reader.uint64();
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
        message.mintDenom = object.mintDenom ?? "";
        message.startTime = object.startTime ?? undefined;
        message.initialAnnualProvisions = object.initialAnnualProvisions ?? "";
        message.reductionFactor = object.reductionFactor ?? "";
        message.blocksPerYear = object.blocksPerYear !== undefined && object.blocksPerYear !== null ? BigInt(object.blocksPerYear.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.mint_denom !== undefined && object.mint_denom !== null) {
            message.mintDenom = object.mint_denom;
        }
        if (object.start_time !== undefined && object.start_time !== null) {
            message.startTime = fromTimestamp(Timestamp.fromAmino(object.start_time));
        }
        if (object.initial_annual_provisions !== undefined && object.initial_annual_provisions !== null) {
            message.initialAnnualProvisions = object.initial_annual_provisions;
        }
        if (object.reduction_factor !== undefined && object.reduction_factor !== null) {
            message.reductionFactor = object.reduction_factor;
        }
        if (object.blocks_per_year !== undefined && object.blocks_per_year !== null) {
            message.blocksPerYear = BigInt(object.blocks_per_year);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.mint_denom = message.mintDenom === "" ? undefined : message.mintDenom;
        obj.start_time = message.startTime ? Timestamp.toAmino(toTimestamp(message.startTime)) : undefined;
        obj.initial_annual_provisions = message.initialAnnualProvisions === "" ? undefined : message.initialAnnualProvisions;
        obj.reduction_factor = message.reductionFactor === "" ? undefined : message.reductionFactor;
        obj.blocks_per_year = message.blocksPerYear !== BigInt(0) ? (message.blocksPerYear?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Params.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Params.decode(message.value);
    },
    toProto(message) {
        return Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/stargaze.mint.v1beta1.Params",
            value: Params.encode(message).finish()
        };
    }
};
