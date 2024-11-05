"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = void 0;
//@ts-nocheck
const asset_1 = require("./asset");
const pair_1 = require("./pair");
const params_1 = require("./params");
const binary_1 = require("../../../binary");
function createBaseGenesisState() {
    return {
        assets: [],
        pairs: [],
        params: params_1.Params.fromPartial({})
    };
}
exports.GenesisState = {
    typeUrl: "/comdex.asset.v1beta1.GenesisState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.assets) {
            asset_1.Asset.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.pairs) {
            pair_1.Pair.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(34).fork()).ldelim();
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
                    message.assets.push(asset_1.Asset.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.pairs.push(pair_1.Pair.decode(reader, reader.uint32()));
                    break;
                case 4:
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
        message.assets = object.assets?.map(e => asset_1.Asset.fromPartial(e)) || [];
        message.pairs = object.pairs?.map(e => pair_1.Pair.fromPartial(e)) || [];
        message.params = object.params !== undefined && object.params !== null ? params_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        message.assets = object.assets?.map(e => asset_1.Asset.fromAmino(e)) || [];
        message.pairs = object.pairs?.map(e => pair_1.Pair.fromAmino(e)) || [];
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.assets) {
            obj.assets = message.assets.map(e => e ? asset_1.Asset.toAmino(e) : undefined);
        }
        else {
            obj.assets = message.assets;
        }
        if (message.pairs) {
            obj.pairs = message.pairs.map(e => e ? pair_1.Pair.toAmino(e) : undefined);
        }
        else {
            obj.pairs = message.pairs;
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
            typeUrl: "/comdex.asset.v1beta1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
