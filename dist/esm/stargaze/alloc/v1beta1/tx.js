//@ts-nocheck
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseMsgCreateVestingAccount() {
    return {
        fromAddress: "",
        toAddress: "",
        amount: [],
        startTime: BigInt(0),
        endTime: BigInt(0),
        delayed: false
    };
}
export const MsgCreateVestingAccount = {
    typeUrl: "/publicawesome.stargaze.alloc.v1beta1.MsgCreateVestingAccount",
    encode(message, writer = BinaryWriter.create()) {
        if (message.fromAddress !== "") {
            writer.uint32(10).string(message.fromAddress);
        }
        if (message.toAddress !== "") {
            writer.uint32(18).string(message.toAddress);
        }
        for (const v of message.amount) {
            Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.startTime !== BigInt(0)) {
            writer.uint32(32).int64(message.startTime);
        }
        if (message.endTime !== BigInt(0)) {
            writer.uint32(40).int64(message.endTime);
        }
        if (message.delayed === true) {
            writer.uint32(48).bool(message.delayed);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateVestingAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fromAddress = reader.string();
                    break;
                case 2:
                    message.toAddress = reader.string();
                    break;
                case 3:
                    message.amount.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.startTime = reader.int64();
                    break;
                case 5:
                    message.endTime = reader.int64();
                    break;
                case 6:
                    message.delayed = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateVestingAccount();
        message.fromAddress = object.fromAddress ?? "";
        message.toAddress = object.toAddress ?? "";
        message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
        message.startTime = object.startTime !== undefined && object.startTime !== null ? BigInt(object.startTime.toString()) : BigInt(0);
        message.endTime = object.endTime !== undefined && object.endTime !== null ? BigInt(object.endTime.toString()) : BigInt(0);
        message.delayed = object.delayed ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateVestingAccount();
        if (object.from_address !== undefined && object.from_address !== null) {
            message.fromAddress = object.from_address;
        }
        if (object.to_address !== undefined && object.to_address !== null) {
            message.toAddress = object.to_address;
        }
        message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
        if (object.start_time !== undefined && object.start_time !== null) {
            message.startTime = BigInt(object.start_time);
        }
        if (object.end_time !== undefined && object.end_time !== null) {
            message.endTime = BigInt(object.end_time);
        }
        if (object.delayed !== undefined && object.delayed !== null) {
            message.delayed = object.delayed;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.from_address = message.fromAddress === "" ? undefined : message.fromAddress;
        obj.to_address = message.toAddress === "" ? undefined : message.toAddress;
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.amount = message.amount;
        }
        obj.start_time = message.startTime !== BigInt(0) ? (message.startTime?.toString)() : undefined;
        obj.end_time = message.endTime !== BigInt(0) ? (message.endTime?.toString)() : undefined;
        obj.delayed = message.delayed === false ? undefined : message.delayed;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateVestingAccount.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCreateVestingAccount.decode(message.value);
    },
    toProto(message) {
        return MsgCreateVestingAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/publicawesome.stargaze.alloc.v1beta1.MsgCreateVestingAccount",
            value: MsgCreateVestingAccount.encode(message).finish()
        };
    }
};
function createBaseMsgCreateVestingAccountResponse() {
    return {};
}
export const MsgCreateVestingAccountResponse = {
    typeUrl: "/publicawesome.stargaze.alloc.v1beta1.MsgCreateVestingAccountResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateVestingAccountResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgCreateVestingAccountResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgCreateVestingAccountResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateVestingAccountResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCreateVestingAccountResponse.decode(message.value);
    },
    toProto(message) {
        return MsgCreateVestingAccountResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/publicawesome.stargaze.alloc.v1beta1.MsgCreateVestingAccountResponse",
            value: MsgCreateVestingAccountResponse.encode(message).finish()
        };
    }
};
