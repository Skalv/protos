//@ts-nocheck
import { QueryCondition } from "../lockup/lock";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Duration } from "../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../binary";
import { toTimestamp, fromTimestamp } from "../../helpers";
function createBaseGauge() {
    return {
        id: BigInt(0),
        isPerpetual: false,
        distributeTo: QueryCondition.fromPartial({}),
        coins: [],
        startTime: new Date(),
        numEpochsPaidOver: BigInt(0),
        filledEpochs: BigInt(0),
        distributedCoins: []
    };
}
export const Gauge = {
    typeUrl: "/osmosis.incentives.Gauge",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.isPerpetual === true) {
            writer.uint32(16).bool(message.isPerpetual);
        }
        if (message.distributeTo !== undefined) {
            QueryCondition.encode(message.distributeTo, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.coins) {
            Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.startTime !== undefined) {
            Timestamp.encode(toTimestamp(message.startTime), writer.uint32(42).fork()).ldelim();
        }
        if (message.numEpochsPaidOver !== BigInt(0)) {
            writer.uint32(48).uint64(message.numEpochsPaidOver);
        }
        if (message.filledEpochs !== BigInt(0)) {
            writer.uint32(56).uint64(message.filledEpochs);
        }
        for (const v of message.distributedCoins) {
            Coin.encode(v, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGauge();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.isPerpetual = reader.bool();
                    break;
                case 3:
                    message.distributeTo = QueryCondition.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.coins.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.numEpochsPaidOver = reader.uint64();
                    break;
                case 7:
                    message.filledEpochs = reader.uint64();
                    break;
                case 8:
                    message.distributedCoins.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGauge();
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        message.isPerpetual = object.isPerpetual ?? false;
        message.distributeTo = object.distributeTo !== undefined && object.distributeTo !== null ? QueryCondition.fromPartial(object.distributeTo) : undefined;
        message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
        message.startTime = object.startTime ?? undefined;
        message.numEpochsPaidOver = object.numEpochsPaidOver !== undefined && object.numEpochsPaidOver !== null ? BigInt(object.numEpochsPaidOver.toString()) : BigInt(0);
        message.filledEpochs = object.filledEpochs !== undefined && object.filledEpochs !== null ? BigInt(object.filledEpochs.toString()) : BigInt(0);
        message.distributedCoins = object.distributedCoins?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGauge();
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id);
        }
        if (object.is_perpetual !== undefined && object.is_perpetual !== null) {
            message.isPerpetual = object.is_perpetual;
        }
        if (object.distribute_to !== undefined && object.distribute_to !== null) {
            message.distributeTo = QueryCondition.fromAmino(object.distribute_to);
        }
        message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
        if (object.start_time !== undefined && object.start_time !== null) {
            message.startTime = fromTimestamp(Timestamp.fromAmino(object.start_time));
        }
        if (object.num_epochs_paid_over !== undefined && object.num_epochs_paid_over !== null) {
            message.numEpochsPaidOver = BigInt(object.num_epochs_paid_over);
        }
        if (object.filled_epochs !== undefined && object.filled_epochs !== null) {
            message.filledEpochs = BigInt(object.filled_epochs);
        }
        message.distributedCoins = object.distributed_coins?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id !== BigInt(0) ? (message.id?.toString)() : undefined;
        obj.is_perpetual = message.isPerpetual === false ? undefined : message.isPerpetual;
        obj.distribute_to = message.distributeTo ? QueryCondition.toAmino(message.distributeTo) : undefined;
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.coins = message.coins;
        }
        obj.start_time = message.startTime ? Timestamp.toAmino(toTimestamp(message.startTime)) : undefined;
        obj.num_epochs_paid_over = message.numEpochsPaidOver !== BigInt(0) ? (message.numEpochsPaidOver?.toString)() : undefined;
        obj.filled_epochs = message.filledEpochs !== BigInt(0) ? (message.filledEpochs?.toString)() : undefined;
        if (message.distributedCoins) {
            obj.distributed_coins = message.distributedCoins.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.distributed_coins = message.distributedCoins;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return Gauge.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/incentives/gauge",
            value: Gauge.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Gauge.decode(message.value);
    },
    toProto(message) {
        return Gauge.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.incentives.Gauge",
            value: Gauge.encode(message).finish()
        };
    }
};
function createBaseLockableDurationsInfo() {
    return {
        lockableDurations: []
    };
}
export const LockableDurationsInfo = {
    typeUrl: "/osmosis.incentives.LockableDurationsInfo",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.lockableDurations) {
            Duration.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLockableDurationsInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lockableDurations.push(Duration.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseLockableDurationsInfo();
        message.lockableDurations = object.lockableDurations?.map(e => Duration.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseLockableDurationsInfo();
        message.lockableDurations = object.lockable_durations?.map(e => Duration.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.lockableDurations) {
            obj.lockable_durations = message.lockableDurations.map(e => e ? Duration.toAmino(e) : undefined);
        }
        else {
            obj.lockable_durations = message.lockableDurations;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return LockableDurationsInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/incentives/lockable-durations-info",
            value: LockableDurationsInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return LockableDurationsInfo.decode(message.value);
    },
    toProto(message) {
        return LockableDurationsInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.incentives.LockableDurationsInfo",
            value: LockableDurationsInfo.encode(message).finish()
        };
    }
};
