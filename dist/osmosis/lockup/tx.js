"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgForceUnlockResponse = exports.MsgForceUnlock = exports.MsgExtendLockupResponse = exports.MsgExtendLockup = exports.MsgBeginUnlockingResponse = exports.MsgBeginUnlocking = exports.MsgBeginUnlockingAllResponse = exports.MsgBeginUnlockingAll = exports.MsgLockTokensResponse = exports.MsgLockTokens = void 0;
//@ts-nocheck
const duration_1 = require("../../google/protobuf/duration");
const coin_1 = require("../../cosmos/base/v1beta1/coin");
const lock_1 = require("./lock");
const binary_1 = require("../../binary");
function createBaseMsgLockTokens() {
    return {
        owner: "",
        duration: duration_1.Duration.fromPartial({}),
        coins: []
    };
}
exports.MsgLockTokens = {
    typeUrl: "/osmosis.lockup.MsgLockTokens",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.duration !== undefined) {
            duration_1.Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.coins) {
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgLockTokens();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.duration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.coins.push(coin_1.Coin.decode(reader, reader.uint32()));
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
        message.duration = object.duration !== undefined && object.duration !== null ? duration_1.Duration.fromPartial(object.duration) : undefined;
        message.coins = object.coins?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgLockTokens();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.duration !== undefined && object.duration !== null) {
            message.duration = duration_1.Duration.fromAmino(object.duration);
        }
        message.coins = object.coins?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner === "" ? undefined : message.owner;
        obj.duration = message.duration ? duration_1.Duration.toAmino(message.duration) : undefined;
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.coins = message.coins;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgLockTokens.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/lock-tokens",
            value: exports.MsgLockTokens.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgLockTokens.decode(message.value);
    },
    toProto(message) {
        return exports.MsgLockTokens.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.MsgLockTokens",
            value: exports.MsgLockTokens.encode(message).finish()
        };
    }
};
function createBaseMsgLockTokensResponse() {
    return {
        iD: BigInt(0)
    };
}
exports.MsgLockTokensResponse = {
    typeUrl: "/osmosis.lockup.MsgLockTokensResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.iD !== BigInt(0)) {
            writer.uint32(8).uint64(message.iD);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgLockTokensResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/lock-tokens-response",
            value: exports.MsgLockTokensResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgLockTokensResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgLockTokensResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.MsgLockTokensResponse",
            value: exports.MsgLockTokensResponse.encode(message).finish()
        };
    }
};
function createBaseMsgBeginUnlockingAll() {
    return {
        owner: ""
    };
}
exports.MsgBeginUnlockingAll = {
    typeUrl: "/osmosis.lockup.MsgBeginUnlockingAll",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgBeginUnlockingAll.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/begin-unlock-tokens",
            value: exports.MsgBeginUnlockingAll.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgBeginUnlockingAll.decode(message.value);
    },
    toProto(message) {
        return exports.MsgBeginUnlockingAll.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.MsgBeginUnlockingAll",
            value: exports.MsgBeginUnlockingAll.encode(message).finish()
        };
    }
};
function createBaseMsgBeginUnlockingAllResponse() {
    return {
        unlocks: []
    };
}
exports.MsgBeginUnlockingAllResponse = {
    typeUrl: "/osmosis.lockup.MsgBeginUnlockingAllResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.unlocks) {
            lock_1.PeriodLock.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBeginUnlockingAllResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.unlocks.push(lock_1.PeriodLock.decode(reader, reader.uint32()));
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
        message.unlocks = object.unlocks?.map(e => lock_1.PeriodLock.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgBeginUnlockingAllResponse();
        message.unlocks = object.unlocks?.map(e => lock_1.PeriodLock.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.unlocks) {
            obj.unlocks = message.unlocks.map(e => e ? lock_1.PeriodLock.toAmino(e) : undefined);
        }
        else {
            obj.unlocks = message.unlocks;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgBeginUnlockingAllResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/begin-unlocking-all-response",
            value: exports.MsgBeginUnlockingAllResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgBeginUnlockingAllResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgBeginUnlockingAllResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.MsgBeginUnlockingAllResponse",
            value: exports.MsgBeginUnlockingAllResponse.encode(message).finish()
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
exports.MsgBeginUnlocking = {
    typeUrl: "/osmosis.lockup.MsgBeginUnlocking",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.iD !== BigInt(0)) {
            writer.uint32(16).uint64(message.iD);
        }
        for (const v of message.coins) {
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.coins.push(coin_1.Coin.decode(reader, reader.uint32()));
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
        message.coins = object.coins?.map(e => coin_1.Coin.fromPartial(e)) || [];
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
        message.coins = object.coins?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner === "" ? undefined : message.owner;
        obj.ID = message.iD !== BigInt(0) ? (message.iD?.toString)() : undefined;
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.coins = message.coins;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgBeginUnlocking.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/begin-unlock-period-lock",
            value: exports.MsgBeginUnlocking.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgBeginUnlocking.decode(message.value);
    },
    toProto(message) {
        return exports.MsgBeginUnlocking.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.MsgBeginUnlocking",
            value: exports.MsgBeginUnlocking.encode(message).finish()
        };
    }
};
function createBaseMsgBeginUnlockingResponse() {
    return {
        success: false
    };
}
exports.MsgBeginUnlockingResponse = {
    typeUrl: "/osmosis.lockup.MsgBeginUnlockingResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.success === true) {
            writer.uint32(8).bool(message.success);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgBeginUnlockingResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/begin-unlocking-response",
            value: exports.MsgBeginUnlockingResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgBeginUnlockingResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgBeginUnlockingResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.MsgBeginUnlockingResponse",
            value: exports.MsgBeginUnlockingResponse.encode(message).finish()
        };
    }
};
function createBaseMsgExtendLockup() {
    return {
        owner: "",
        iD: BigInt(0),
        duration: duration_1.Duration.fromPartial({})
    };
}
exports.MsgExtendLockup = {
    typeUrl: "/osmosis.lockup.MsgExtendLockup",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.iD !== BigInt(0)) {
            writer.uint32(16).uint64(message.iD);
        }
        if (message.duration !== undefined) {
            duration_1.Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.duration = duration_1.Duration.decode(reader, reader.uint32());
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
        message.duration = object.duration !== undefined && object.duration !== null ? duration_1.Duration.fromPartial(object.duration) : undefined;
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
            message.duration = duration_1.Duration.fromAmino(object.duration);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner === "" ? undefined : message.owner;
        obj.ID = message.iD !== BigInt(0) ? (message.iD?.toString)() : undefined;
        obj.duration = message.duration ? duration_1.Duration.toAmino(message.duration) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgExtendLockup.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/extend-lockup",
            value: exports.MsgExtendLockup.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgExtendLockup.decode(message.value);
    },
    toProto(message) {
        return exports.MsgExtendLockup.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.MsgExtendLockup",
            value: exports.MsgExtendLockup.encode(message).finish()
        };
    }
};
function createBaseMsgExtendLockupResponse() {
    return {
        success: false
    };
}
exports.MsgExtendLockupResponse = {
    typeUrl: "/osmosis.lockup.MsgExtendLockupResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.success === true) {
            writer.uint32(8).bool(message.success);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgExtendLockupResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/extend-lockup-response",
            value: exports.MsgExtendLockupResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgExtendLockupResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgExtendLockupResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.MsgExtendLockupResponse",
            value: exports.MsgExtendLockupResponse.encode(message).finish()
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
exports.MsgForceUnlock = {
    typeUrl: "/osmosis.lockup.MsgForceUnlock",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.iD !== BigInt(0)) {
            writer.uint32(16).uint64(message.iD);
        }
        for (const v of message.coins) {
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.coins.push(coin_1.Coin.decode(reader, reader.uint32()));
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
        message.coins = object.coins?.map(e => coin_1.Coin.fromPartial(e)) || [];
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
        message.coins = object.coins?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner === "" ? undefined : message.owner;
        obj.ID = message.iD !== BigInt(0) ? (message.iD?.toString)() : undefined;
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.coins = message.coins;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgForceUnlock.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/force-unlock",
            value: exports.MsgForceUnlock.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgForceUnlock.decode(message.value);
    },
    toProto(message) {
        return exports.MsgForceUnlock.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.MsgForceUnlock",
            value: exports.MsgForceUnlock.encode(message).finish()
        };
    }
};
function createBaseMsgForceUnlockResponse() {
    return {
        success: false
    };
}
exports.MsgForceUnlockResponse = {
    typeUrl: "/osmosis.lockup.MsgForceUnlockResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.success === true) {
            writer.uint32(8).bool(message.success);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgForceUnlockResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/force-unlock-response",
            value: exports.MsgForceUnlockResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgForceUnlockResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgForceUnlockResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.MsgForceUnlockResponse",
            value: exports.MsgForceUnlockResponse.encode(message).finish()
        };
    }
};
