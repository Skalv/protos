//@ts-nocheck
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseParams() {
    return {
        poolCreationFee: []
    };
}
export const Params = {
    typeUrl: "/osmosis.swaprouter.v1beta1.Params",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.poolCreationFee) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolCreationFee.push(Coin.decode(reader, reader.uint32()));
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
        message.poolCreationFee = object.poolCreationFee?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        message.poolCreationFee = object.pool_creation_fee?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.poolCreationFee) {
            obj.pool_creation_fee = message.poolCreationFee.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.pool_creation_fee = message.poolCreationFee;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/swaprouter/params",
            value: Params.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Params.decode(message.value);
    },
    toProto(message) {
        return Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.swaprouter.v1beta1.Params",
            value: Params.encode(message).finish()
        };
    }
};
function createBaseGenesisState() {
    return {
        nextPoolId: BigInt(0),
        params: Params.fromPartial({})
    };
}
export const GenesisState = {
    typeUrl: "/osmosis.swaprouter.v1beta1.GenesisState",
    encode(message, writer = BinaryWriter.create()) {
        if (message.nextPoolId !== BigInt(0)) {
            writer.uint32(8).uint64(message.nextPoolId);
        }
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nextPoolId = reader.uint64();
                    break;
                case 2:
                    message.params = Params.decode(reader, reader.uint32());
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
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.next_pool_id !== undefined && object.next_pool_id !== null) {
            message.nextPoolId = BigInt(object.next_pool_id);
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.next_pool_id = message.nextPoolId !== BigInt(0) ? (message.nextPoolId?.toString)() : undefined;
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/swaprouter/genesis-state",
            value: GenesisState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GenesisState.decode(message.value);
    },
    toProto(message) {
        return GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.swaprouter.v1beta1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
