"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = void 0;
//@ts-nocheck
const oracle_1 = require("./oracle");
const params_1 = require("./params");
const binary_1 = require("../../../binary");
function createBaseGenesisState() {
    return {
        markets: [],
        params: params_1.Params.fromPartial({})
    };
}
exports.GenesisState = {
    typeUrl: "/comdex.oracle.v1beta1.GenesisState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.markets) {
            oracle_1.Market.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(18).fork()).ldelim();
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
                    message.markets.push(oracle_1.Market.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.params = params_1.Params.decode(reader, reader.uint32());
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
        message.markets = object.markets?.map(e => oracle_1.Market.fromPartial(e)) || [];
        message.params = object.params !== undefined && object.params !== null ? params_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        message.markets = object.markets?.map(e => oracle_1.Market.fromAmino(e)) || [];
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.markets) {
            obj.markets = message.markets.map(e => e ? oracle_1.Market.toAmino(e) : undefined);
        }
        else {
            obj.markets = message.markets;
        }
        obj.params = message.params ? params_1.Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.GenesisState.decode(message.value);
    },
    toProto(message) {
        return exports.GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.oracle.v1beta1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
