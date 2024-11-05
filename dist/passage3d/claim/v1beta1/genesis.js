"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = void 0;
//@ts-nocheck
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const params_1 = require("./params");
const claim_record_1 = require("./claim_record");
const binary_1 = require("../../../binary");
function createBaseGenesisState() {
    return {
        moduleAccountBalance: coin_1.Coin.fromPartial({}),
        params: params_1.Params.fromPartial({}),
        claimRecords: []
    };
}
exports.GenesisState = {
    typeUrl: "/passage3d.claim.v1beta1.GenesisState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.moduleAccountBalance !== undefined) {
            coin_1.Coin.encode(message.moduleAccountBalance, writer.uint32(10).fork()).ldelim();
        }
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.claimRecords) {
            claim_record_1.ClaimRecord.encode(v, writer.uint32(26).fork()).ldelim();
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
                    message.moduleAccountBalance = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.params = params_1.Params.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.claimRecords.push(claim_record_1.ClaimRecord.decode(reader, reader.uint32()));
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
        message.moduleAccountBalance = object.moduleAccountBalance !== undefined && object.moduleAccountBalance !== null ? coin_1.Coin.fromPartial(object.moduleAccountBalance) : undefined;
        message.params = object.params !== undefined && object.params !== null ? params_1.Params.fromPartial(object.params) : undefined;
        message.claimRecords = object.claimRecords?.map(e => claim_record_1.ClaimRecord.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.module_account_balance !== undefined && object.module_account_balance !== null) {
            message.moduleAccountBalance = coin_1.Coin.fromAmino(object.module_account_balance);
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.Params.fromAmino(object.params);
        }
        message.claimRecords = object.claim_records?.map(e => claim_record_1.ClaimRecord.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.module_account_balance = message.moduleAccountBalance ? coin_1.Coin.toAmino(message.moduleAccountBalance) : undefined;
        obj.params = message.params ? params_1.Params.toAmino(message.params) : undefined;
        if (message.claimRecords) {
            obj.claim_records = message.claimRecords.map(e => e ? claim_record_1.ClaimRecord.toAmino(e) : undefined);
        }
        else {
            obj.claim_records = message.claimRecords;
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
            typeUrl: "/passage3d.claim.v1beta1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
