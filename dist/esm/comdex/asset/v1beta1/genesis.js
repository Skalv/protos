//@ts-nocheck
import { Asset } from "./asset";
import { Pair } from "./pair";
import { Params } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseGenesisState() {
    return {
        assets: [],
        pairs: [],
        params: Params.fromPartial({})
    };
}
export const GenesisState = {
    typeUrl: "/comdex.asset.v1beta1.GenesisState",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.assets) {
            Asset.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.pairs) {
            Pair.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(34).fork()).ldelim();
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
                    message.assets.push(Asset.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.pairs.push(Pair.decode(reader, reader.uint32()));
                    break;
                case 4:
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
        message.assets = object.assets?.map(e => Asset.fromPartial(e)) || [];
        message.pairs = object.pairs?.map(e => Pair.fromPartial(e)) || [];
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        message.assets = object.assets?.map(e => Asset.fromAmino(e)) || [];
        message.pairs = object.pairs?.map(e => Pair.fromAmino(e)) || [];
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.assets) {
            obj.assets = message.assets.map(e => e ? Asset.toAmino(e) : undefined);
        }
        else {
            obj.assets = message.assets;
        }
        if (message.pairs) {
            obj.pairs = message.pairs.map(e => e ? Pair.toAmino(e) : undefined);
        }
        else {
            obj.pairs = message.pairs;
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
            typeUrl: "/comdex.asset.v1beta1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
