"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = void 0;
//@ts-nocheck
const params_1 = require("./params");
const protorev_1 = require("./protorev");
const binary_1 = require("../../../binary");
function createBaseGenesisState() {
    return {
        params: params_1.Params.fromPartial({}),
        tokenPairs: []
    };
}
exports.GenesisState = {
    typeUrl: "/osmosis.protorev.v1beta1.GenesisState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.tokenPairs) {
            protorev_1.TokenPairArbRoutes.encode(v, writer.uint32(18).fork()).ldelim();
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
                    message.params = params_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.tokenPairs.push(protorev_1.TokenPairArbRoutes.decode(reader, reader.uint32()));
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
        message.params = object.params !== undefined && object.params !== null ? params_1.Params.fromPartial(object.params) : undefined;
        message.tokenPairs = object.tokenPairs?.map(e => protorev_1.TokenPairArbRoutes.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.Params.fromAmino(object.params);
        }
        message.tokenPairs = object.token_pairs?.map(e => protorev_1.TokenPairArbRoutes.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? params_1.Params.toAmino(message.params) : undefined;
        if (message.tokenPairs) {
            obj.token_pairs = message.tokenPairs.map(e => e ? protorev_1.TokenPairArbRoutes.toAmino(e) : undefined);
        }
        else {
            obj.token_pairs = message.tokenPairs;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/protorev/genesis-state",
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
            typeUrl: "/osmosis.protorev.v1beta1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
