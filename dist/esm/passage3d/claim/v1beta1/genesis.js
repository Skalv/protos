//@ts-nocheck
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Params } from "./params";
import { ClaimRecord } from "./claim_record";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseGenesisState() {
    return {
        moduleAccountBalance: Coin.fromPartial({}),
        params: Params.fromPartial({}),
        claimRecords: []
    };
}
export const GenesisState = {
    typeUrl: "/passage3d.claim.v1beta1.GenesisState",
    encode(message, writer = BinaryWriter.create()) {
        if (message.moduleAccountBalance !== undefined) {
            Coin.encode(message.moduleAccountBalance, writer.uint32(10).fork()).ldelim();
        }
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.claimRecords) {
            ClaimRecord.encode(v, writer.uint32(26).fork()).ldelim();
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
                    message.moduleAccountBalance = Coin.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.claimRecords.push(ClaimRecord.decode(reader, reader.uint32()));
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
        message.moduleAccountBalance = object.moduleAccountBalance !== undefined && object.moduleAccountBalance !== null ? Coin.fromPartial(object.moduleAccountBalance) : undefined;
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        message.claimRecords = object.claimRecords?.map(e => ClaimRecord.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.module_account_balance !== undefined && object.module_account_balance !== null) {
            message.moduleAccountBalance = Coin.fromAmino(object.module_account_balance);
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        message.claimRecords = object.claim_records?.map(e => ClaimRecord.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.module_account_balance = message.moduleAccountBalance ? Coin.toAmino(message.moduleAccountBalance) : undefined;
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        if (message.claimRecords) {
            obj.claim_records = message.claimRecords.map(e => e ? ClaimRecord.toAmino(e) : undefined);
        }
        else {
            obj.claim_records = message.claimRecords;
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
            typeUrl: "/passage3d.claim.v1beta1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
