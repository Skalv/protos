//@ts-nocheck
import { Duration } from "../../google/protobuf/duration";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { PeriodLock } from "./lock";
import { BinaryReader, BinaryWriter } from "../../binary";
function createBaseMsgLockTokens() {
    return {
        owner: "",
        duration: Duration.fromPartial({}),
        coins: []
    };
}
export const MsgLockTokens = {
    typeUrl: "/osmosis.lockup.MsgLockTokens",
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.duration !== undefined) {
            Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.coins) {
            Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgLockTokens();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.duration = Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.coins.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgLockTokens();
        message.owner = object.owner ?? "";
        message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
        message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgLockTokens();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.duration !== undefined && object.duration !== null) {
            message.duration = Duration.fromAmino(object.duration);
        }
        message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner === "" ? undefined : message.owner;
        obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined;
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.coins = message.coins;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgLockTokens.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/lock-tokens",
            value: MsgLockTokens.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgLockTokens.decode(message.value);
    },
    toProto(message) {
        return MsgLockTokens.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.MsgLockTokens",
            value: MsgLockTokens.encode(message).finish()
        };
    }
};
function createBaseMsgLockTokensResponse() {
    return {
        iD: BigInt(0)
    };
}
export const MsgLockTokensResponse = {
    typeUrl: "/osmosis.lockup.MsgLockTokensResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.iD !== BigInt(0)) {
            writer.uint32(8).uint64(message.iD);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgLockTokensResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.iD = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgLockTokensResponse();
        message.iD = object.iD !== undefined && object.iD !== null ? BigInt(object.iD.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgLockTokensResponse();
        if (object.ID !== undefined && object.ID !== null) {
            message.iD = BigInt(object.ID);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.ID = message.iD !== BigInt(0) ? (message.iD?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgLockTokensResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/lock-tokens-response",
            value: MsgLockTokensResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgLockTokensResponse.decode(message.value);
    },
    toProto(message) {
        return MsgLockTokensResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.MsgLockTokensResponse",
            value: MsgLockTokensResponse.encode(message).finish()
        };
    }
};
function createBaseMsgBeginUnlockingAll() {
    return {
        owner: ""
    };
}
export const MsgBeginUnlockingAll = {
    typeUrl: "/osmosis.lockup.MsgBeginUnlockingAll",
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBeginUnlockingAll();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgBeginUnlockingAll();
        message.owner = object.owner ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgBeginUnlockingAll();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner === "" ? undefined : message.owner;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgBeginUnlockingAll.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/begin-unlock-tokens",
            value: MsgBeginUnlockingAll.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgBeginUnlockingAll.decode(message.value);
    },
    toProto(message) {
        return MsgBeginUnlockingAll.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.MsgBeginUnlockingAll",
            value: MsgBeginUnlockingAll.encode(message).finish()
        };
    }
};
function createBaseMsgBeginUnlockingAllResponse() {
    return {
        unlocks: []
    };
}
export const MsgBeginUnlockingAllResponse = {
    typeUrl: "/osmosis.lockup.MsgBeginUnlockingAllResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.unlocks) {
            PeriodLock.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBeginUnlockingAllResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.unlocks.push(PeriodLock.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgBeginUnlockingAllResponse();
        message.unlocks = object.unlocks?.map(e => PeriodLock.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgBeginUnlockingAllResponse();
        message.unlocks = object.unlocks?.map(e => PeriodLock.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.unlocks) {
            obj.unlocks = message.unlocks.map(e => e ? PeriodLock.toAmino(e) : undefined);
        }
        else {
            obj.unlocks = message.unlocks;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgBeginUnlockingAllResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/begin-unlocking-all-response",
            value: MsgBeginUnlockingAllResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgBeginUnlockingAllResponse.decode(message.value);
    },
    toProto(message) {
        return MsgBeginUnlockingAllResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.MsgBeginUnlockingAllResponse",
            value: MsgBeginUnlockingAllResponse.encode(message).finish()
        };
    }
};
function createBaseMsgBeginUnlocking() {
    return {
        owner: "",
        iD: BigInt(0),
        coins: []
    };
}
export const MsgBeginUnlocking = {
    typeUrl: "/osmosis.lockup.MsgBeginUnlocking",
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.iD !== BigInt(0)) {
            writer.uint32(16).uint64(message.iD);
        }
        for (const v of message.coins) {
            Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBeginUnlocking();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.iD = reader.uint64();
                    break;
                case 3:
                    message.coins.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgBeginUnlocking();
        message.owner = object.owner ?? "";
        message.iD = object.iD !== undefined && object.iD !== null ? BigInt(object.iD.toString()) : BigInt(0);
        message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgBeginUnlocking();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.ID !== undefined && object.ID !== null) {
            message.iD = BigInt(object.ID);
        }
        message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner === "" ? undefined : message.owner;
        obj.ID = message.iD !== BigInt(0) ? (message.iD?.toString)() : undefined;
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.coins = message.coins;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgBeginUnlocking.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/begin-unlock-period-lock",
            value: MsgBeginUnlocking.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgBeginUnlocking.decode(message.value);
    },
    toProto(message) {
        return MsgBeginUnlocking.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.MsgBeginUnlocking",
            value: MsgBeginUnlocking.encode(message).finish()
        };
    }
};
function createBaseMsgBeginUnlockingResponse() {
    return {
        success: false
    };
}
export const MsgBeginUnlockingResponse = {
    typeUrl: "/osmosis.lockup.MsgBeginUnlockingResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.success === true) {
            writer.uint32(8).bool(message.success);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBeginUnlockingResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.success = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgBeginUnlockingResponse();
        message.success = object.success ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgBeginUnlockingResponse();
        if (object.success !== undefined && object.success !== null) {
            message.success = object.success;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.success = message.success === false ? undefined : message.success;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgBeginUnlockingResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/begin-unlocking-response",
            value: MsgBeginUnlockingResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgBeginUnlockingResponse.decode(message.value);
    },
    toProto(message) {
        return MsgBeginUnlockingResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.MsgBeginUnlockingResponse",
            value: MsgBeginUnlockingResponse.encode(message).finish()
        };
    }
};
function createBaseMsgExtendLockup() {
    return {
        owner: "",
        iD: BigInt(0),
        duration: Duration.fromPartial({})
    };
}
export const MsgExtendLockup = {
    typeUrl: "/osmosis.lockup.MsgExtendLockup",
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.iD !== BigInt(0)) {
            writer.uint32(16).uint64(message.iD);
        }
        if (message.duration !== undefined) {
            Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExtendLockup();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.iD = reader.uint64();
                    break;
                case 3:
                    message.duration = Duration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgExtendLockup();
        message.owner = object.owner ?? "";
        message.iD = object.iD !== undefined && object.iD !== null ? BigInt(object.iD.toString()) : BigInt(0);
        message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgExtendLockup();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.ID !== undefined && object.ID !== null) {
            message.iD = BigInt(object.ID);
        }
        if (object.duration !== undefined && object.duration !== null) {
            message.duration = Duration.fromAmino(object.duration);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner === "" ? undefined : message.owner;
        obj.ID = message.iD !== BigInt(0) ? (message.iD?.toString)() : undefined;
        obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgExtendLockup.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/extend-lockup",
            value: MsgExtendLockup.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgExtendLockup.decode(message.value);
    },
    toProto(message) {
        return MsgExtendLockup.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.MsgExtendLockup",
            value: MsgExtendLockup.encode(message).finish()
        };
    }
};
function createBaseMsgExtendLockupResponse() {
    return {
        success: false
    };
}
export const MsgExtendLockupResponse = {
    typeUrl: "/osmosis.lockup.MsgExtendLockupResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.success === true) {
            writer.uint32(8).bool(message.success);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExtendLockupResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.success = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgExtendLockupResponse();
        message.success = object.success ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgExtendLockupResponse();
        if (object.success !== undefined && object.success !== null) {
            message.success = object.success;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.success = message.success === false ? undefined : message.success;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgExtendLockupResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/extend-lockup-response",
            value: MsgExtendLockupResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgExtendLockupResponse.decode(message.value);
    },
    toProto(message) {
        return MsgExtendLockupResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.MsgExtendLockupResponse",
            value: MsgExtendLockupResponse.encode(message).finish()
        };
    }
};
function createBaseMsgForceUnlock() {
    return {
        owner: "",
        iD: BigInt(0),
        coins: []
    };
}
export const MsgForceUnlock = {
    typeUrl: "/osmosis.lockup.MsgForceUnlock",
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.iD !== BigInt(0)) {
            writer.uint32(16).uint64(message.iD);
        }
        for (const v of message.coins) {
            Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgForceUnlock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.iD = reader.uint64();
                    break;
                case 3:
                    message.coins.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgForceUnlock();
        message.owner = object.owner ?? "";
        message.iD = object.iD !== undefined && object.iD !== null ? BigInt(object.iD.toString()) : BigInt(0);
        message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgForceUnlock();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.ID !== undefined && object.ID !== null) {
            message.iD = BigInt(object.ID);
        }
        message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner === "" ? undefined : message.owner;
        obj.ID = message.iD !== BigInt(0) ? (message.iD?.toString)() : undefined;
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.coins = message.coins;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgForceUnlock.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/force-unlock",
            value: MsgForceUnlock.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgForceUnlock.decode(message.value);
    },
    toProto(message) {
        return MsgForceUnlock.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.MsgForceUnlock",
            value: MsgForceUnlock.encode(message).finish()
        };
    }
};
function createBaseMsgForceUnlockResponse() {
    return {
        success: false
    };
}
export const MsgForceUnlockResponse = {
    typeUrl: "/osmosis.lockup.MsgForceUnlockResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.success === true) {
            writer.uint32(8).bool(message.success);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgForceUnlockResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.success = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgForceUnlockResponse();
        message.success = object.success ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgForceUnlockResponse();
        if (object.success !== undefined && object.success !== null) {
            message.success = object.success;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.success = message.success === false ? undefined : message.success;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgForceUnlockResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/force-unlock-response",
            value: MsgForceUnlockResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgForceUnlockResponse.decode(message.value);
    },
    toProto(message) {
        return MsgForceUnlockResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.MsgForceUnlockResponse",
            value: MsgForceUnlockResponse.encode(message).finish()
        };
    }
};
