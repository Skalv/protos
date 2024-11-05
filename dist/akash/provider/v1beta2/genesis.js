"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = void 0;
//@ts-nocheck
const provider_1 = require("./provider");
const binary_1 = require("../../../binary");
function createBaseGenesisState() {
    return {
        providers: []
    };
}
exports.GenesisState = {
    typeUrl: "/akash.provider.v1beta2.GenesisState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.providers) {
            provider_1.Provider.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.providers.push(provider_1.Provider.decode(reader, reader.uint32()));
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
        message.providers = object.providers?.map(e => provider_1.Provider.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        message.providers = object.providers?.map(e => provider_1.Provider.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.providers) {
            obj.providers = message.providers.map(e => e ? provider_1.Provider.toAmino(e) : undefined);
        }
        else {
            obj.providers = message.providers;
        }
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
            typeUrl: "/akash.provider.v1beta2.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
