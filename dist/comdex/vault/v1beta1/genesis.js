"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = void 0;
//@ts-nocheck
const vault_1 = require("./vault");
const binary_1 = require("../../../binary");
function createBaseGenesisState() {
    return {
        vaults: []
    };
}
exports.GenesisState = {
    typeUrl: "/comdex.vault.v1beta1.GenesisState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.vaults) {
            vault_1.Vault.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.vaults.push(vault_1.Vault.decode(reader, reader.uint32()));
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
        message.vaults = object.vaults?.map(e => vault_1.Vault.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        message.vaults = object.vaults?.map(e => vault_1.Vault.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.vaults) {
            obj.vaults = message.vaults.map(e => e ? vault_1.Vault.toAmino(e) : undefined);
        }
        else {
            obj.vaults = message.vaults;
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
            typeUrl: "/comdex.vault.v1beta1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
