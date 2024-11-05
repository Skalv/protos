//@ts-nocheck
import { Params } from "./params";
import { Gauge } from "./gauge";
import { Duration } from "../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../binary";
function createBaseGenesisState() {
    return {
        params: Params.fromPartial({}),
        gauges: [],
        lockableDurations: [],
        lastGaugeId: BigInt(0)
    };
}
export const GenesisState = {
    typeUrl: "/osmosis.incentives.GenesisState",
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.gauges) {
            Gauge.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.lockableDurations) {
            Duration.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.lastGaugeId !== BigInt(0)) {
            writer.uint32(32).uint64(message.lastGaugeId);
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
                    message.gauges.push(Gauge.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.lockableDurations.push(Duration.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.lastGaugeId = reader.uint64();
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
        message.gauges = object.gauges?.map(e => Gauge.fromPartial(e)) || [];
        message.lockableDurations = object.lockableDurations?.map(e => Duration.fromPartial(e)) || [];
        message.lastGaugeId = object.lastGaugeId !== undefined && object.lastGaugeId !== null ? BigInt(object.lastGaugeId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        message.gauges = object.gauges?.map(e => Gauge.fromAmino(e)) || [];
        message.lockableDurations = object.lockable_durations?.map(e => Duration.fromAmino(e)) || [];
        if (object.last_gauge_id !== undefined && object.last_gauge_id !== null) {
            message.lastGaugeId = BigInt(object.last_gauge_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        if (message.gauges) {
            obj.gauges = message.gauges.map(e => e ? Gauge.toAmino(e) : undefined);
        }
        else {
            obj.gauges = message.gauges;
        }
        if (message.lockableDurations) {
            obj.lockable_durations = message.lockableDurations.map(e => e ? Duration.toAmino(e) : undefined);
        }
        else {
            obj.lockable_durations = message.lockableDurations;
        }
        obj.last_gauge_id = message.lastGaugeId !== BigInt(0) ? (message.lastGaugeId?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/incentives/genesis-state",
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
            typeUrl: "/osmosis.incentives.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
