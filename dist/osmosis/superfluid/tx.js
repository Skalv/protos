"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgUnPoolWhitelistedPoolResponse = exports.MsgUnPoolWhitelistedPool = exports.MsgLockAndSuperfluidDelegateResponse = exports.MsgLockAndSuperfluidDelegate = exports.MsgSuperfluidUnbondLockResponse = exports.MsgSuperfluidUnbondLock = exports.MsgSuperfluidUndelegateResponse = exports.MsgSuperfluidUndelegate = exports.MsgSuperfluidDelegateResponse = exports.MsgSuperfluidDelegate = void 0;
//@ts-nocheck
const coin_1 = require("../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../binary");
function createBaseMsgSuperfluidDelegate() {
    return {
        sender: "",
        lockId: BigInt(0),
        valAddr: ""
    };
}
exports.MsgSuperfluidDelegate = {
    typeUrl: "/osmosis.superfluid.MsgSuperfluidDelegate",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.lockId !== BigInt(0)) {
            writer.uint32(16).uint64(message.lockId);
        }
        if (message.valAddr !== "") {
            writer.uint32(26).string(message.valAddr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSuperfluidDelegate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.lockId = reader.uint64();
                    break;
                case 3:
                    message.valAddr = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSuperfluidDelegate();
        message.sender = object.sender ?? "";
        message.lockId = object.lockId !== undefined && object.lockId !== null ? BigInt(object.lockId.toString()) : BigInt(0);
        message.valAddr = object.valAddr ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSuperfluidDelegate();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.lock_id !== undefined && object.lock_id !== null) {
            message.lockId = BigInt(object.lock_id);
        }
        if (object.val_addr !== undefined && object.val_addr !== null) {
            message.valAddr = object.val_addr;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.lock_id = message.lockId !== BigInt(0) ? (message.lockId?.toString)() : undefined;
        obj.val_addr = message.valAddr === "" ? undefined : message.valAddr;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSuperfluidDelegate.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/superfluid-delegate",
            value: exports.MsgSuperfluidDelegate.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSuperfluidDelegate.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSuperfluidDelegate.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.MsgSuperfluidDelegate",
            value: exports.MsgSuperfluidDelegate.encode(message).finish()
        };
    }
};
function createBaseMsgSuperfluidDelegateResponse() {
    return {};
}
exports.MsgSuperfluidDelegateResponse = {
    typeUrl: "/osmosis.superfluid.MsgSuperfluidDelegateResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSuperfluidDelegateResponse();
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
        const message = createBaseMsgSuperfluidDelegateResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgSuperfluidDelegateResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSuperfluidDelegateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/superfluid-delegate-response",
            value: exports.MsgSuperfluidDelegateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSuperfluidDelegateResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSuperfluidDelegateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.MsgSuperfluidDelegateResponse",
            value: exports.MsgSuperfluidDelegateResponse.encode(message).finish()
        };
    }
};
function createBaseMsgSuperfluidUndelegate() {
    return {
        sender: "",
        lockId: BigInt(0)
    };
}
exports.MsgSuperfluidUndelegate = {
    typeUrl: "/osmosis.superfluid.MsgSuperfluidUndelegate",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.lockId !== BigInt(0)) {
            writer.uint32(16).uint64(message.lockId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSuperfluidUndelegate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.lockId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSuperfluidUndelegate();
        message.sender = object.sender ?? "";
        message.lockId = object.lockId !== undefined && object.lockId !== null ? BigInt(object.lockId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSuperfluidUndelegate();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.lock_id !== undefined && object.lock_id !== null) {
            message.lockId = BigInt(object.lock_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.lock_id = message.lockId !== BigInt(0) ? (message.lockId?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSuperfluidUndelegate.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/superfluid-undelegate",
            value: exports.MsgSuperfluidUndelegate.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSuperfluidUndelegate.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSuperfluidUndelegate.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.MsgSuperfluidUndelegate",
            value: exports.MsgSuperfluidUndelegate.encode(message).finish()
        };
    }
};
function createBaseMsgSuperfluidUndelegateResponse() {
    return {};
}
exports.MsgSuperfluidUndelegateResponse = {
    typeUrl: "/osmosis.superfluid.MsgSuperfluidUndelegateResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSuperfluidUndelegateResponse();
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
        const message = createBaseMsgSuperfluidUndelegateResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgSuperfluidUndelegateResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSuperfluidUndelegateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/superfluid-undelegate-response",
            value: exports.MsgSuperfluidUndelegateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSuperfluidUndelegateResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSuperfluidUndelegateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.MsgSuperfluidUndelegateResponse",
            value: exports.MsgSuperfluidUndelegateResponse.encode(message).finish()
        };
    }
};
function createBaseMsgSuperfluidUnbondLock() {
    return {
        sender: "",
        lockId: BigInt(0)
    };
}
exports.MsgSuperfluidUnbondLock = {
    typeUrl: "/osmosis.superfluid.MsgSuperfluidUnbondLock",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.lockId !== BigInt(0)) {
            writer.uint32(16).uint64(message.lockId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSuperfluidUnbondLock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.lockId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSuperfluidUnbondLock();
        message.sender = object.sender ?? "";
        message.lockId = object.lockId !== undefined && object.lockId !== null ? BigInt(object.lockId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSuperfluidUnbondLock();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.lock_id !== undefined && object.lock_id !== null) {
            message.lockId = BigInt(object.lock_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.lock_id = message.lockId !== BigInt(0) ? (message.lockId?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSuperfluidUnbondLock.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/superfluid-unbond-lock",
            value: exports.MsgSuperfluidUnbondLock.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSuperfluidUnbondLock.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSuperfluidUnbondLock.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.MsgSuperfluidUnbondLock",
            value: exports.MsgSuperfluidUnbondLock.encode(message).finish()
        };
    }
};
function createBaseMsgSuperfluidUnbondLockResponse() {
    return {};
}
exports.MsgSuperfluidUnbondLockResponse = {
    typeUrl: "/osmosis.superfluid.MsgSuperfluidUnbondLockResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSuperfluidUnbondLockResponse();
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
        const message = createBaseMsgSuperfluidUnbondLockResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgSuperfluidUnbondLockResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSuperfluidUnbondLockResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/superfluid-unbond-lock-response",
            value: exports.MsgSuperfluidUnbondLockResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSuperfluidUnbondLockResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSuperfluidUnbondLockResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.MsgSuperfluidUnbondLockResponse",
            value: exports.MsgSuperfluidUnbondLockResponse.encode(message).finish()
        };
    }
};
function createBaseMsgLockAndSuperfluidDelegate() {
    return {
        sender: "",
        coins: [],
        valAddr: ""
    };
}
exports.MsgLockAndSuperfluidDelegate = {
    typeUrl: "/osmosis.superfluid.MsgLockAndSuperfluidDelegate",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        for (const v of message.coins) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.valAddr !== "") {
            writer.uint32(26).string(message.valAddr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgLockAndSuperfluidDelegate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.coins.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.valAddr = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgLockAndSuperfluidDelegate();
        message.sender = object.sender ?? "";
        message.coins = object.coins?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.valAddr = object.valAddr ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgLockAndSuperfluidDelegate();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        message.coins = object.coins?.map(e => coin_1.Coin.fromAmino(e)) || [];
        if (object.val_addr !== undefined && object.val_addr !== null) {
            message.valAddr = object.val_addr;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.coins = message.coins;
        }
        obj.val_addr = message.valAddr === "" ? undefined : message.valAddr;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgLockAndSuperfluidDelegate.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lock-and-superfluid-delegate",
            value: exports.MsgLockAndSuperfluidDelegate.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgLockAndSuperfluidDelegate.decode(message.value);
    },
    toProto(message) {
        return exports.MsgLockAndSuperfluidDelegate.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.MsgLockAndSuperfluidDelegate",
            value: exports.MsgLockAndSuperfluidDelegate.encode(message).finish()
        };
    }
};
function createBaseMsgLockAndSuperfluidDelegateResponse() {
    return {
        iD: BigInt(0)
    };
}
exports.MsgLockAndSuperfluidDelegateResponse = {
    typeUrl: "/osmosis.superfluid.MsgLockAndSuperfluidDelegateResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.iD !== BigInt(0)) {
            writer.uint32(8).uint64(message.iD);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgLockAndSuperfluidDelegateResponse();
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
        const message = createBaseMsgLockAndSuperfluidDelegateResponse();
        message.iD = object.iD !== undefined && object.iD !== null ? BigInt(object.iD.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgLockAndSuperfluidDelegateResponse();
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
        return exports.MsgLockAndSuperfluidDelegateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lock-and-superfluid-delegate-response",
            value: exports.MsgLockAndSuperfluidDelegateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgLockAndSuperfluidDelegateResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgLockAndSuperfluidDelegateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.MsgLockAndSuperfluidDelegateResponse",
            value: exports.MsgLockAndSuperfluidDelegateResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUnPoolWhitelistedPool() {
    return {
        sender: "",
        poolId: BigInt(0)
    };
}
exports.MsgUnPoolWhitelistedPool = {
    typeUrl: "/osmosis.superfluid.MsgUnPoolWhitelistedPool",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.poolId !== BigInt(0)) {
            writer.uint32(16).uint64(message.poolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUnPoolWhitelistedPool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.poolId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUnPoolWhitelistedPool();
        message.sender = object.sender ?? "";
        message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUnPoolWhitelistedPool();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.pool_id !== undefined && object.pool_id !== null) {
            message.poolId = BigInt(object.pool_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.pool_id = message.poolId !== BigInt(0) ? (message.poolId?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUnPoolWhitelistedPool.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/unpool-whitelisted-pool",
            value: exports.MsgUnPoolWhitelistedPool.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUnPoolWhitelistedPool.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUnPoolWhitelistedPool.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.MsgUnPoolWhitelistedPool",
            value: exports.MsgUnPoolWhitelistedPool.encode(message).finish()
        };
    }
};
function createBaseMsgUnPoolWhitelistedPoolResponse() {
    return {
        exitedLockIds: []
    };
}
exports.MsgUnPoolWhitelistedPoolResponse = {
    typeUrl: "/osmosis.superfluid.MsgUnPoolWhitelistedPoolResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        writer.uint32(10).fork();
        for (const v of message.exitedLockIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUnPoolWhitelistedPoolResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.exitedLockIds.push(reader.uint64());
                        }
                    }
                    else {
                        message.exitedLockIds.push(reader.uint64());
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUnPoolWhitelistedPoolResponse();
        message.exitedLockIds = object.exitedLockIds?.map(e => BigInt(e.toString())) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUnPoolWhitelistedPoolResponse();
        message.exitedLockIds = object.exited_lock_ids?.map(e => BigInt(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.exitedLockIds) {
            obj.exited_lock_ids = message.exitedLockIds.map(e => e.toString());
        }
        else {
            obj.exited_lock_ids = message.exitedLockIds;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUnPoolWhitelistedPoolResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/un-pool-whitelisted-pool-response",
            value: exports.MsgUnPoolWhitelistedPoolResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUnPoolWhitelistedPoolResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUnPoolWhitelistedPoolResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.MsgUnPoolWhitelistedPoolResponse",
            value: exports.MsgUnPoolWhitelistedPoolResponse.encode(message).finish()
        };
    }
};
