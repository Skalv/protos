"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = void 0;
//@ts-nocheck
const params_1 = require("./params");
const gauge_1 = require("./gauge");
const duration_1 = require("../../google/protobuf/duration");
const binary_1 = require("../../binary");
function createBaseGenesisState() {
    return {
        params: params_1.Params.fromPartial({}),
        gauges: [],
        lockableDurations: [],
        lastGaugeId: BigInt(0)
    };
}
exports.GenesisState = {
    typeUrl: "/osmosis.incentives.GenesisState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.gauges) {
            gauge_1.Gauge.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.lockableDurations) {
            duration_1.Duration.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.lastGaugeId !== BigInt(0)) {
            writer.uint32(32).uint64(message.lastGaugeId);
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
                    message.params = params_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.gauges.push(gauge_1.Gauge.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.lockableDurations.push(duration_1.Duration.decode(reader, reader.uint32()));
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
        message.params = object.params !== undefined && object.params !== null ? params_1.Params.fromPartial(object.params) : undefined;
        message.gauges = object.gauges?.map(e => gauge_1.Gauge.fromPartial(e)) || [];
        message.lockableDurations = object.lockableDurations?.map(e => duration_1.Duration.fromPartial(e)) || [];
        message.lastGaugeId = object.lastGaugeId !== undefined && object.lastGaugeId !== null ? BigInt(object.lastGaugeId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.Params.fromAmino(object.params);
        }
        message.gauges = object.gauges?.map(e => gauge_1.Gauge.fromAmino(e)) || [];
        message.lockableDurations = object.lockable_durations?.map(e => duration_1.Duration.fromAmino(e)) || [];
        if (object.last_gauge_id !== undefined && object.last_gauge_id !== null) {
            message.lastGaugeId = BigInt(object.last_gauge_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? params_1.Params.toAmino(message.params) : undefined;
        if (message.gauges) {
            obj.gauges = message.gauges.map(e => e ? gauge_1.Gauge.toAmino(e) : undefined);
        }
        else {
            obj.gauges = message.gauges;
        }
        if (message.lockableDurations) {
            obj.lockable_durations = message.lockableDurations.map(e => e ? duration_1.Duration.toAmino(e) : undefined);
        }
        else {
            obj.lockable_durations = message.lockableDurations;
        }
        obj.last_gauge_id = message.lastGaugeId !== BigInt(0) ? (message.lastGaugeId?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/incentives/genesis-state",
            value: exports.GenesisState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GenesisState.decode(message.value);
    },
    toProto(message) {
        return exports.GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.incentives.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
