//@ts-nocheck
import { Vault } from "./vault";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseGenesisState() {
    return {
        vaults: []
    };
}
export const GenesisState = {
    typeUrl: "/comdex.vault.v1beta1.GenesisState",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.vaults) {
            Vault.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.vaults.push(Vault.decode(reader, reader.uint32()));
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
        message.vaults = object.vaults?.map(e => Vault.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        message.vaults = object.vaults?.map(e => Vault.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.vaults) {
            obj.vaults = message.vaults.map(e => e ? Vault.toAmino(e) : undefined);
        }
        else {
            obj.vaults = message.vaults;
        }
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
            typeUrl: "/comdex.vault.v1beta1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
