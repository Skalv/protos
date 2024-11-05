"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.Minter = void 0;
//@ts-nocheck
const timestamp_1 = require("../../../google/protobuf/timestamp");
const binary_1 = require("../../../binary");
const math_1 = require("@cosmjs/math");
const helpers_1 = require("../../../helpers");
function createBaseMinter() {
    return {
        annualProvisions: ""
    };
}
exports.Minter = {
    typeUrl: "/stargaze.mint.v1beta1.Minter",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.annualProvisions !== "") {
            writer.uint32(10).string(math_1.Decimal.fromUserInput(message.annualProvisions, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMinter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.annualProvisions = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
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
        return exports.Minter.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Minter.decode(message.value);
    },
    toProto(message) {
        return exports.Minter.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/stargaze.mint.v1beta1.Minter",
            value: exports.Minter.encode(message).finish()
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
exports.Params = {
    typeUrl: "/stargaze.mint.v1beta1.Params",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.mintDenom !== "") {
            writer.uint32(10).string(message.mintDenom);
        }
        if (message.startTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.startTime), writer.uint32(18).fork()).ldelim();
        }
        if (message.initialAnnualProvisions !== "") {
            writer.uint32(26).string(math_1.Decimal.fromUserInput(message.initialAnnualProvisions, 18).atomics);
        }
        if (message.reductionFactor !== "") {
            writer.uint32(34).string(math_1.Decimal.fromUserInput(message.reductionFactor, 18).atomics);
        }
        if (message.blocksPerYear !== BigInt(0)) {
            writer.uint32(40).uint64(message.blocksPerYear);
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
                    message.mintDenom = reader.string();
                    break;
                case 2:
                    message.startTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.initialAnnualProvisions = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 4:
                    message.reductionFactor = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
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
            message.startTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.start_time));
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
        obj.start_time = message.startTime ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.startTime)) : undefined;
        obj.initial_annual_provisions = message.initialAnnualProvisions === "" ? undefined : message.initialAnnualProvisions;
        obj.reduction_factor = message.reductionFactor === "" ? undefined : message.reductionFactor;
        obj.blocks_per_year = message.blocksPerYear !== BigInt(0) ? (message.blocksPerYear?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Params.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Params.decode(message.value);
    },
    toProto(message) {
        return exports.Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/stargaze.mint.v1beta1.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
