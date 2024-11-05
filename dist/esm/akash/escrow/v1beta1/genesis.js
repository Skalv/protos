//@ts-nocheck
import { Account, Payment } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseGenesisState() {
    return {
        accounts: [],
        payments: []
    };
}
export const GenesisState = {
    typeUrl: "/akash.escrow.v1beta1.GenesisState",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.accounts) {
            Account.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.payments) {
            Payment.encode(v, writer.uint32(18).fork()).ldelim();
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
                    message.accounts.push(Account.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.payments.push(Payment.decode(reader, reader.uint32()));
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
        message.accounts = object.accounts?.map(e => Account.fromPartial(e)) || [];
        message.payments = object.payments?.map(e => Payment.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        message.accounts = object.accounts?.map(e => Account.fromAmino(e)) || [];
        message.payments = object.payments?.map(e => Payment.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.accounts) {
            obj.accounts = message.accounts.map(e => e ? Account.toAmino(e) : undefined);
        }
        else {
            obj.accounts = message.accounts;
        }
        if (message.payments) {
            obj.payments = message.payments.map(e => e ? Payment.toAmino(e) : undefined);
        }
        else {
            obj.payments = message.payments;
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
            typeUrl: "/akash.escrow.v1beta1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
