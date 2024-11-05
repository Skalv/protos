//@ts-nocheck
import { PeriodLock, SyntheticLock } from "./lock";
import { BinaryReader, BinaryWriter } from "../../binary";
function createBaseGenesisState() {
    return {
        lastLockId: BigInt(0),
        locks: [],
        syntheticLocks: []
    };
}
export const GenesisState = {
    typeUrl: "/osmosis.lockup.GenesisState",
    encode(message, writer = BinaryWriter.create()) {
        if (message.lastLockId !== BigInt(0)) {
            writer.uint32(8).uint64(message.lastLockId);
        }
        for (const v of message.locks) {
            PeriodLock.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.syntheticLocks) {
            SyntheticLock.encode(v, writer.uint32(26).fork()).ldelim();
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
                    message.lastLockId = reader.uint64();
                    break;
                case 2:
                    message.locks.push(PeriodLock.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.syntheticLocks.push(SyntheticLock.decode(reader, reader.uint32()));
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
        message.lastLockId = object.lastLockId !== undefined && object.lastLockId !== null ? BigInt(object.lastLockId.toString()) : BigInt(0);
        message.locks = object.locks?.map(e => PeriodLock.fromPartial(e)) || [];
        message.syntheticLocks = object.syntheticLocks?.map(e => SyntheticLock.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.last_lock_id !== undefined && object.last_lock_id !== null) {
            message.lastLockId = BigInt(object.last_lock_id);
        }
        message.locks = object.locks?.map(e => PeriodLock.fromAmino(e)) || [];
        message.syntheticLocks = object.synthetic_locks?.map(e => SyntheticLock.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.last_lock_id = message.lastLockId !== BigInt(0) ? (message.lastLockId?.toString)() : undefined;
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? PeriodLock.toAmino(e) : undefined);
        }
        else {
            obj.locks = message.locks;
        }
        if (message.syntheticLocks) {
            obj.synthetic_locks = message.syntheticLocks.map(e => e ? SyntheticLock.toAmino(e) : undefined);
        }
        else {
            obj.synthetic_locks = message.syntheticLocks;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/genesis-state",
            value: GenesisState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GenesisState.decode(message.value);
    },
    toProto(message) {
        return GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};