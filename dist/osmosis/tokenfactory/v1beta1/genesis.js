"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisDenom = exports.GenesisState = void 0;
//@ts-nocheck
const params_1 = require("./params");
const authorityMetadata_1 = require("./authorityMetadata");
const binary_1 = require("../../../binary");
function createBaseGenesisState() {
    return {
        params: params_1.Params.fromPartial({}),
        factoryDenoms: []
    };
}
exports.GenesisState = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.GenesisState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.factoryDenoms) {
            exports.GenesisDenom.encode(v, writer.uint32(18).fork()).ldelim();
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
                    message.factoryDenoms.push(exports.GenesisDenom.decode(reader, reader.uint32()));
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
        message.factoryDenoms = object.factoryDenoms?.map(e => exports.GenesisDenom.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.Params.fromAmino(object.params);
        }
        message.factoryDenoms = object.factory_denoms?.map(e => exports.GenesisDenom.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? params_1.Params.toAmino(message.params) : undefined;
        if (message.factoryDenoms) {
            obj.factory_denoms = message.factoryDenoms.map(e => e ? exports.GenesisDenom.toAmino(e) : undefined);
        }
        else {
            obj.factory_denoms = message.factoryDenoms;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/tokenfactory/genesis-state",
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
            typeUrl: "/osmosis.tokenfactory.v1beta1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
function createBaseGenesisDenom() {
    return {
        denom: "",
        authorityMetadata: authorityMetadata_1.DenomAuthorityMetadata.fromPartial({})
    };
}
exports.GenesisDenom = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.GenesisDenom",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.authorityMetadata !== undefined) {
            authorityMetadata_1.DenomAuthorityMetadata.encode(message.authorityMetadata, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisDenom();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.authorityMetadata = authorityMetadata_1.DenomAuthorityMetadata.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGenesisDenom();
        message.denom = object.denom ?? "";
        message.authorityMetadata = object.authorityMetadata !== undefined && object.authorityMetadata !== null ? authorityMetadata_1.DenomAuthorityMetadata.fromPartial(object.authorityMetadata) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisDenom();
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        if (object.authority_metadata !== undefined && object.authority_metadata !== null) {
            message.authorityMetadata = authorityMetadata_1.DenomAuthorityMetadata.fromAmino(object.authority_metadata);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom === "" ? undefined : message.denom;
        obj.authority_metadata = message.authorityMetadata ? authorityMetadata_1.DenomAuthorityMetadata.toAmino(message.authorityMetadata) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisDenom.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/tokenfactory/genesis-denom",
            value: exports.GenesisDenom.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GenesisDenom.decode(message.value);
    },
    toProto(message) {
        return exports.GenesisDenom.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.tokenfactory.v1beta1.GenesisDenom",
            value: exports.GenesisDenom.encode(message).finish()
        };
    }
};
