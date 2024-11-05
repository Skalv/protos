//@ts-nocheck
import { Pool, PoolMetadata, PoolBatch, DepositMsgState, WithdrawMsgState, SwapMsgState, Params } from "./liquidity";
import { BinaryReader, BinaryWriter } from "../../binary";
function createBasePoolRecord() {
    return {
        pool: Pool.fromPartial({}),
        poolMetadata: PoolMetadata.fromPartial({}),
        poolBatch: PoolBatch.fromPartial({}),
        depositMsgStates: [],
        withdrawMsgStates: [],
        swapMsgStates: []
    };
}
export const PoolRecord = {
    typeUrl: "/liquidity.v1beta1.PoolRecord",
    encode(message, writer = BinaryWriter.create()) {
        if (message.pool !== undefined) {
            Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
        }
        if (message.poolMetadata !== undefined) {
            PoolMetadata.encode(message.poolMetadata, writer.uint32(18).fork()).ldelim();
        }
        if (message.poolBatch !== undefined) {
            PoolBatch.encode(message.poolBatch, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.depositMsgStates) {
            DepositMsgState.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.withdrawMsgStates) {
            WithdrawMsgState.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.swapMsgStates) {
            SwapMsgState.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePoolRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool = Pool.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.poolMetadata = PoolMetadata.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.poolBatch = PoolBatch.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.depositMsgStates.push(DepositMsgState.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.withdrawMsgStates.push(WithdrawMsgState.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.swapMsgStates.push(SwapMsgState.decode(reader, reader.uint32()));
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
        message.pool = object.pool !== undefined && object.pool !== null ? Pool.fromPartial(object.pool) : undefined;
        message.poolMetadata = object.poolMetadata !== undefined && object.poolMetadata !== null ? PoolMetadata.fromPartial(object.poolMetadata) : undefined;
        message.poolBatch = object.poolBatch !== undefined && object.poolBatch !== null ? PoolBatch.fromPartial(object.poolBatch) : undefined;
        message.depositMsgStates = object.depositMsgStates?.map(e => DepositMsgState.fromPartial(e)) || [];
        message.withdrawMsgStates = object.withdrawMsgStates?.map(e => WithdrawMsgState.fromPartial(e)) || [];
        message.swapMsgStates = object.swapMsgStates?.map(e => SwapMsgState.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBasePoolRecord();
        if (object.pool !== undefined && object.pool !== null) {
            message.pool = Pool.fromAmino(object.pool);
        }
        if (object.pool_metadata !== undefined && object.pool_metadata !== null) {
            message.poolMetadata = PoolMetadata.fromAmino(object.pool_metadata);
        }
        if (object.pool_batch !== undefined && object.pool_batch !== null) {
            message.poolBatch = PoolBatch.fromAmino(object.pool_batch);
        }
        message.depositMsgStates = object.deposit_msg_states?.map(e => DepositMsgState.fromAmino(e)) || [];
        message.withdrawMsgStates = object.withdraw_msg_states?.map(e => WithdrawMsgState.fromAmino(e)) || [];
        message.swapMsgStates = object.swap_msg_states?.map(e => SwapMsgState.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool = message.pool ? Pool.toAmino(message.pool) : undefined;
        obj.pool_metadata = message.poolMetadata ? PoolMetadata.toAmino(message.poolMetadata) : undefined;
        obj.pool_batch = message.poolBatch ? PoolBatch.toAmino(message.poolBatch) : undefined;
        if (message.depositMsgStates) {
            obj.deposit_msg_states = message.depositMsgStates.map(e => e ? DepositMsgState.toAmino(e) : undefined);
        }
        else {
            obj.deposit_msg_states = message.depositMsgStates;
        }
        if (message.withdrawMsgStates) {
            obj.withdraw_msg_states = message.withdrawMsgStates.map(e => e ? WithdrawMsgState.toAmino(e) : undefined);
        }
        else {
            obj.withdraw_msg_states = message.withdrawMsgStates;
        }
        if (message.swapMsgStates) {
            obj.swap_msg_states = message.swapMsgStates.map(e => e ? SwapMsgState.toAmino(e) : undefined);
        }
        else {
            obj.swap_msg_states = message.swapMsgStates;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return PoolRecord.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return PoolRecord.decode(message.value);
    },
    toProto(message) {
        return PoolRecord.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/liquidity.v1beta1.PoolRecord",
            value: PoolRecord.encode(message).finish()
        };
    }
};
function createBaseGenesisState() {
    return {
        params: Params.fromPartial({}),
        poolRecords: []
    };
}
export const GenesisState = {
    typeUrl: "/liquidity.v1beta1.GenesisState",
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.poolRecords) {
            PoolRecord.encode(v, writer.uint32(18).fork()).ldelim();
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
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.poolRecords.push(PoolRecord.decode(reader, reader.uint32()));
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
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        message.poolRecords = object.poolRecords?.map(e => PoolRecord.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        message.poolRecords = object.pool_records?.map(e => PoolRecord.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        if (message.poolRecords) {
            obj.pool_records = message.poolRecords.map(e => e ? PoolRecord.toAmino(e) : undefined);
        }
        else {
            obj.pool_records = message.poolRecords;
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
            typeUrl: "/liquidity.v1beta1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
