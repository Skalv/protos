"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = void 0;
//@ts-nocheck
const feetoken_1 = require("./feetoken");
const binary_1 = require("../../../binary");
function createBaseGenesisState() {
    return {
        basedenom: "",
        feetokens: []
    };
}
exports.GenesisState = {
    typeUrl: "/osmosis.txfees.v1beta1.GenesisState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.basedenom !== "") {
            writer.uint32(10).string(message.basedenom);
        }
        for (const v of message.feetokens) {
            feetoken_1.FeeToken.encode(v, writer.uint32(18).fork()).ldelim();
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
                    message.basedenom = reader.string();
                    break;
                case 2:
                    message.feetokens.push(feetoken_1.FeeToken.decode(reader, reader.uint32()));
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
        message.basedenom = object.basedenom ?? "";
        message.feetokens = object.feetokens?.map(e => feetoken_1.FeeToken.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.basedenom !== undefined && object.basedenom !== null) {
            message.basedenom = object.basedenom;
        }
        message.feetokens = object.feetokens?.map(e => feetoken_1.FeeToken.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.basedenom = message.basedenom === "" ? undefined : message.basedenom;
        if (message.feetokens) {
            obj.feetokens = message.feetokens.map(e => e ? feetoken_1.FeeToken.toAmino(e) : undefined);
        }
        else {
            obj.feetokens = message.feetokens;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/txfees/genesis-state",
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
            typeUrl: "/osmosis.txfees.v1beta1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
