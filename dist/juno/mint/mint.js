"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.Minter = void 0;
//@ts-nocheck
const binary_1 = require("../../binary");
const math_1 = require("@cosmjs/math");
function createBaseMinter() {
    return {
        inflation: "",
        phase: BigInt(0),
        startPhaseBlock: BigInt(0),
        annualProvisions: ""
    };
}
exports.Minter = {
    typeUrl: "/juno.mint.Minter",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.inflation !== "") {
            writer.uint32(10).string(math_1.Decimal.fromUserInput(message.inflation, 18).atomics);
        }
        if (message.phase !== BigInt(0)) {
            writer.uint32(16).uint64(message.phase);
        }
        if (message.startPhaseBlock !== BigInt(0)) {
            writer.uint32(24).uint64(message.startPhaseBlock);
        }
        if (message.annualProvisions !== "") {
            writer.uint32(34).string(math_1.Decimal.fromUserInput(message.annualProvisions, 18).atomics);
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
                    message.inflation = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 2:
                    message.phase = reader.uint64();
                    break;
                case 3:
                    message.startPhaseBlock = reader.uint64();
                    break;
                case 4:
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
        message.inflation = object.inflation ?? "";
        message.phase = object.phase !== undefined && object.phase !== null ? BigInt(object.phase.toString()) : BigInt(0);
        message.startPhaseBlock = object.startPhaseBlock !== undefined && object.startPhaseBlock !== null ? BigInt(object.startPhaseBlock.toString()) : BigInt(0);
        message.annualProvisions = object.annualProvisions ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMinter();
        if (object.inflation !== undefined && object.inflation !== null) {
            message.inflation = object.inflation;
        }
        if (object.phase !== undefined && object.phase !== null) {
            message.phase = BigInt(object.phase);
        }
        if (object.start_phase_block !== undefined && object.start_phase_block !== null) {
            message.startPhaseBlock = BigInt(object.start_phase_block);
        }
        if (object.annual_provisions !== undefined && object.annual_provisions !== null) {
            message.annualProvisions = object.annual_provisions;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.inflation = message.inflation === "" ? undefined : message.inflation;
        obj.phase = message.phase !== BigInt(0) ? (message.phase?.toString)() : undefined;
        obj.start_phase_block = message.startPhaseBlock !== BigInt(0) ? (message.startPhaseBlock?.toString)() : undefined;
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
            typeUrl: "/juno.mint.Minter",
            value: exports.Minter.encode(message).finish()
        };
    }
};
function createBaseParams() {
    return {
        mintDenom: "",
        blocksPerYear: BigInt(0)
    };
}
exports.Params = {
    typeUrl: "/juno.mint.Params",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.mintDenom !== "") {
            writer.uint32(10).string(message.mintDenom);
        }
        if (message.blocksPerYear !== BigInt(0)) {
            writer.uint32(16).uint64(message.blocksPerYear);
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
        message.blocksPerYear = object.blocksPerYear !== undefined && object.blocksPerYear !== null ? BigInt(object.blocksPerYear.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.mint_denom !== undefined && object.mint_denom !== null) {
            message.mintDenom = object.mint_denom;
        }
        if (object.blocks_per_year !== undefined && object.blocks_per_year !== null) {
            message.blocksPerYear = BigInt(object.blocks_per_year);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.mint_denom = message.mintDenom === "" ? undefined : message.mintDenom;
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
            typeUrl: "/juno.mint.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
