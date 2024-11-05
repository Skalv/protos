"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.Params = void 0;
//@ts-nocheck
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../binary");
function createBaseParams() {
    return {
        poolCreationFee: []
    };
}
exports.Params = {
    typeUrl: "/osmosis.swaprouter.v1beta1.Params",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.poolCreationFee) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.poolCreationFee.push(coin_1.Coin.decode(reader, reader.uint32()));
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
        message.poolCreationFee = object.poolCreationFee?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        message.poolCreationFee = object.pool_creation_fee?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.poolCreationFee) {
            obj.pool_creation_fee = message.poolCreationFee.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.pool_creation_fee = message.poolCreationFee;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/swaprouter/params",
            value: exports.Params.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Params.decode(message.value);
    },
    toProto(message) {
        return exports.Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.swaprouter.v1beta1.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
function createBaseGenesisState() {
    return {
        nextPoolId: BigInt(0),
        params: exports.Params.fromPartial({})
    };
}
exports.GenesisState = {
    typeUrl: "/osmosis.swaprouter.v1beta1.GenesisState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.nextPoolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.nextPoolId);
        }
        if (message.params !== undefined) {
            exports.Params.encode(message.params, writer.uint32(18).fork()).ldelim();
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
                    message.nextPoolId = reader.uint64();
                    break;
                case 2:
                    message.params = exports.Params.decode(reader, reader.uint32());
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
        message.nextPoolId = object.nextPoolId !== undefined && object.nextPoolId !== null ? BigInt(object.nextPoolId.toString()) : BigInt(0);
        message.params = object.params !== undefined && object.params !== null ? exports.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.next_pool_id !== undefined && object.next_pool_id !== null) {
            message.nextPoolId = BigInt(object.next_pool_id);
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = exports.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.next_pool_id = message.nextPoolId !== BigInt(0) ? (message.nextPoolId?.toString)() : undefined;
        obj.params = message.params ? exports.Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/swaprouter/genesis-state",
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
            typeUrl: "/osmosis.swaprouter.v1beta1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
