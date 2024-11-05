"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.PoolRecord = void 0;
//@ts-nocheck
const liquidity_1 = require("./liquidity");
const binary_1 = require("../../binary");
function createBasePoolRecord() {
    return {
        pool: liquidity_1.Pool.fromPartial({}),
        poolMetadata: liquidity_1.PoolMetadata.fromPartial({}),
        poolBatch: liquidity_1.PoolBatch.fromPartial({}),
        depositMsgStates: [],
        withdrawMsgStates: [],
        swapMsgStates: []
    };
}
exports.PoolRecord = {
    typeUrl: "/liquidity.v1beta1.PoolRecord",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pool !== undefined) {
            liquidity_1.Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
        }
        if (message.poolMetadata !== undefined) {
            liquidity_1.PoolMetadata.encode(message.poolMetadata, writer.uint32(18).fork()).ldelim();
        }
        if (message.poolBatch !== undefined) {
            liquidity_1.PoolBatch.encode(message.poolBatch, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.depositMsgStates) {
            liquidity_1.DepositMsgState.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.withdrawMsgStates) {
            liquidity_1.WithdrawMsgState.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.swapMsgStates) {
            liquidity_1.SwapMsgState.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePoolRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool = liquidity_1.Pool.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.poolMetadata = liquidity_1.PoolMetadata.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.poolBatch = liquidity_1.PoolBatch.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.depositMsgStates.push(liquidity_1.DepositMsgState.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.withdrawMsgStates.push(liquidity_1.WithdrawMsgState.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.swapMsgStates.push(liquidity_1.SwapMsgState.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePoolRecord();
        message.pool = object.pool !== undefined && object.pool !== null ? liquidity_1.Pool.fromPartial(object.pool) : undefined;
        message.poolMetadata = object.poolMetadata !== undefined && object.poolMetadata !== null ? liquidity_1.PoolMetadata.fromPartial(object.poolMetadata) : undefined;
        message.poolBatch = object.poolBatch !== undefined && object.poolBatch !== null ? liquidity_1.PoolBatch.fromPartial(object.poolBatch) : undefined;
        message.depositMsgStates = object.depositMsgStates?.map(e => liquidity_1.DepositMsgState.fromPartial(e)) || [];
        message.withdrawMsgStates = object.withdrawMsgStates?.map(e => liquidity_1.WithdrawMsgState.fromPartial(e)) || [];
        message.swapMsgStates = object.swapMsgStates?.map(e => liquidity_1.SwapMsgState.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBasePoolRecord();
        if (object.pool !== undefined && object.pool !== null) {
            message.pool = liquidity_1.Pool.fromAmino(object.pool);
        }
        if (object.pool_metadata !== undefined && object.pool_metadata !== null) {
            message.poolMetadata = liquidity_1.PoolMetadata.fromAmino(object.pool_metadata);
        }
        if (object.pool_batch !== undefined && object.pool_batch !== null) {
            message.poolBatch = liquidity_1.PoolBatch.fromAmino(object.pool_batch);
        }
        message.depositMsgStates = object.deposit_msg_states?.map(e => liquidity_1.DepositMsgState.fromAmino(e)) || [];
        message.withdrawMsgStates = object.withdraw_msg_states?.map(e => liquidity_1.WithdrawMsgState.fromAmino(e)) || [];
        message.swapMsgStates = object.swap_msg_states?.map(e => liquidity_1.SwapMsgState.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool = message.pool ? liquidity_1.Pool.toAmino(message.pool) : undefined;
        obj.pool_metadata = message.poolMetadata ? liquidity_1.PoolMetadata.toAmino(message.poolMetadata) : undefined;
        obj.pool_batch = message.poolBatch ? liquidity_1.PoolBatch.toAmino(message.poolBatch) : undefined;
        if (message.depositMsgStates) {
            obj.deposit_msg_states = message.depositMsgStates.map(e => e ? liquidity_1.DepositMsgState.toAmino(e) : undefined);
        }
        else {
            obj.deposit_msg_states = message.depositMsgStates;
        }
        if (message.withdrawMsgStates) {
            obj.withdraw_msg_states = message.withdrawMsgStates.map(e => e ? liquidity_1.WithdrawMsgState.toAmino(e) : undefined);
        }
        else {
            obj.withdraw_msg_states = message.withdrawMsgStates;
        }
        if (message.swapMsgStates) {
            obj.swap_msg_states = message.swapMsgStates.map(e => e ? liquidity_1.SwapMsgState.toAmino(e) : undefined);
        }
        else {
            obj.swap_msg_states = message.swapMsgStates;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PoolRecord.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.PoolRecord.decode(message.value);
    },
    toProto(message) {
        return exports.PoolRecord.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/liquidity.v1beta1.PoolRecord",
            value: exports.PoolRecord.encode(message).finish()
        };
    }
};
function createBaseGenesisState() {
    return {
        params: liquidity_1.Params.fromPartial({}),
        poolRecords: []
    };
}
exports.GenesisState = {
    typeUrl: "/liquidity.v1beta1.GenesisState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            liquidity_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.poolRecords) {
            exports.PoolRecord.encode(v, writer.uint32(18).fork()).ldelim();
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
                    message.params = liquidity_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.poolRecords.push(exports.PoolRecord.decode(reader, reader.uint32()));
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
        message.params = object.params !== undefined && object.params !== null ? liquidity_1.Params.fromPartial(object.params) : undefined;
        message.poolRecords = object.poolRecords?.map(e => exports.PoolRecord.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = liquidity_1.Params.fromAmino(object.params);
        }
        message.poolRecords = object.pool_records?.map(e => exports.PoolRecord.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? liquidity_1.Params.toAmino(message.params) : undefined;
        if (message.poolRecords) {
            obj.pool_records = message.poolRecords.map(e => e ? exports.PoolRecord.toAmino(e) : undefined);
        }
        else {
            obj.pool_records = message.poolRecords;
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
            typeUrl: "/liquidity.v1beta1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
