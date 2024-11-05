//@ts-nocheck
import { Market } from "./oracle";
import { Params } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseGenesisState() {
    return {
        markets: [],
        params: Params.fromPartial({})
    };
}
export const GenesisState = {
    typeUrl: "/comdex.oracle.v1beta1.GenesisState",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.markets) {
            Market.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.markets.push(Market.decode(reader, reader.uint32()));
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
        message.markets = object.markets?.map(e => Market.fromPartial(e)) || [];
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        message.markets = object.markets?.map(e => Market.fromAmino(e)) || [];
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.markets) {
            obj.markets = message.markets.map(e => e ? Market.toAmino(e) : undefined);
        }
        else {
            obj.markets = message.markets;
        }
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return GenesisState.decode(message.value);
    },
    toProto(message) {
        return GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/comdex.oracle.v1beta1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
