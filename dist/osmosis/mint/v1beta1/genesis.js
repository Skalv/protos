"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = void 0;
//@ts-nocheck
const mint_1 = require("./mint");
const binary_1 = require("../../../binary");
function createBaseGenesisState() {
    return {
        minter: mint_1.Minter.fromPartial({}),
        params: mint_1.Params.fromPartial({}),
        reductionStartedEpoch: BigInt(0)
    };
}
exports.GenesisState = {
    typeUrl: "/osmosis.mint.v1beta1.GenesisState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.minter !== undefined) {
            mint_1.Minter.encode(message.minter, writer.uint32(10).fork()).ldelim();
        }
        if (message.params !== undefined) {
            mint_1.Params.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        if (message.reductionStartedEpoch !== BigInt(0)) {
            writer.uint32(24).int64(message.reductionStartedEpoch);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.minter = mint_1.Minter.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.params = mint_1.Params.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.reductionStartedEpoch = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.minter = object.minter !== undefined && object.minter !== null ? mint_1.Minter.fromPartial(object.minter) : undefined;
        message.params = object.params !== undefined && object.params !== null ? mint_1.Params.fromPartial(object.params) : undefined;
        message.reductionStartedEpoch = object.reductionStartedEpoch !== undefined && object.reductionStartedEpoch !== null ? BigInt(object.reductionStartedEpoch.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.minter !== undefined && object.minter !== null) {
            message.minter = mint_1.Minter.fromAmino(object.minter);
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = mint_1.Params.fromAmino(object.params);
        }
        if (object.reduction_started_epoch !== undefined && object.reduction_started_epoch !== null) {
            message.reductionStartedEpoch = BigInt(object.reduction_started_epoch);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.minter = message.minter ? mint_1.Minter.toAmino(message.minter) : undefined;
        obj.params = message.params ? mint_1.Params.toAmino(message.params) : undefined;
        obj.reduction_started_epoch = message.reductionStartedEpoch !== BigInt(0) ? (message.reductionStartedEpoch?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/mint/genesis-state",
            value: exports.GenesisState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GenesisState.decode(message.value);
    },
    toProto(message) {
        return exports.GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.mint.v1beta1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
