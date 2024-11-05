"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = void 0;
//@ts-nocheck
const types_1 = require("./types");
const binary_1 = require("../../../binary");
function createBaseGenesisState() {
    return {
        accounts: [],
        payments: []
    };
}
exports.GenesisState = {
    typeUrl: "/akash.escrow.v1beta1.GenesisState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.accounts) {
            types_1.Account.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.payments) {
            types_1.Payment.encode(v, writer.uint32(18).fork()).ldelim();
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
                    message.accounts.push(types_1.Account.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.payments.push(types_1.Payment.decode(reader, reader.uint32()));
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
        message.accounts = object.accounts?.map(e => types_1.Account.fromPartial(e)) || [];
        message.payments = object.payments?.map(e => types_1.Payment.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        message.accounts = object.accounts?.map(e => types_1.Account.fromAmino(e)) || [];
        message.payments = object.payments?.map(e => types_1.Payment.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.accounts) {
            obj.accounts = message.accounts.map(e => e ? types_1.Account.toAmino(e) : undefined);
        }
        else {
            obj.accounts = message.accounts;
        }
        if (message.payments) {
            obj.payments = message.payments.map(e => e ? types_1.Payment.toAmino(e) : undefined);
        }
        else {
            obj.payments = message.payments;
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
            typeUrl: "/akash.escrow.v1beta1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
