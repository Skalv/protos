"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PendingPayeeship = exports.Count = exports.FeedCounts = exports.RewardPool = exports.FeedLatestAggregatorRoundIDs = exports.FeedEpochAndRound = exports.FeedTransmission = exports.GenesisState = void 0;
//@ts-nocheck
const ocr_1 = require("./ocr");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../binary");
function createBaseGenesisState() {
    return {
        params: ocr_1.Params.fromPartial({}),
        feedConfigs: [],
        latestEpochAndRounds: [],
        feedTransmissions: [],
        latestAggregatorRoundIds: [],
        rewardPools: [],
        feedObservationCounts: [],
        feedTransmissionCounts: [],
        pendingPayeeships: []
    };
}
exports.GenesisState = {
    typeUrl: "/injective.ocr.v1beta1.GenesisState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            ocr_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.feedConfigs) {
            ocr_1.FeedConfig.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.latestEpochAndRounds) {
            exports.FeedEpochAndRound.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.feedTransmissions) {
            exports.FeedTransmission.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.latestAggregatorRoundIds) {
            exports.FeedLatestAggregatorRoundIDs.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.rewardPools) {
            exports.RewardPool.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.feedObservationCounts) {
            exports.FeedCounts.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.feedTransmissionCounts) {
            exports.FeedCounts.encode(v, writer.uint32(66).fork()).ldelim();
        }
        for (const v of message.pendingPayeeships) {
            exports.PendingPayeeship.encode(v, writer.uint32(74).fork()).ldelim();
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
                    message.params = ocr_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.feedConfigs.push(ocr_1.FeedConfig.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.latestEpochAndRounds.push(exports.FeedEpochAndRound.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.feedTransmissions.push(exports.FeedTransmission.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.latestAggregatorRoundIds.push(exports.FeedLatestAggregatorRoundIDs.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.rewardPools.push(exports.RewardPool.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.feedObservationCounts.push(exports.FeedCounts.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.feedTransmissionCounts.push(exports.FeedCounts.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.pendingPayeeships.push(exports.PendingPayeeship.decode(reader, reader.uint32()));
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
        message.params = object.params !== undefined && object.params !== null ? ocr_1.Params.fromPartial(object.params) : undefined;
        message.feedConfigs = object.feedConfigs?.map(e => ocr_1.FeedConfig.fromPartial(e)) || [];
        message.latestEpochAndRounds = object.latestEpochAndRounds?.map(e => exports.FeedEpochAndRound.fromPartial(e)) || [];
        message.feedTransmissions = object.feedTransmissions?.map(e => exports.FeedTransmission.fromPartial(e)) || [];
        message.latestAggregatorRoundIds = object.latestAggregatorRoundIds?.map(e => exports.FeedLatestAggregatorRoundIDs.fromPartial(e)) || [];
        message.rewardPools = object.rewardPools?.map(e => exports.RewardPool.fromPartial(e)) || [];
        message.feedObservationCounts = object.feedObservationCounts?.map(e => exports.FeedCounts.fromPartial(e)) || [];
        message.feedTransmissionCounts = object.feedTransmissionCounts?.map(e => exports.FeedCounts.fromPartial(e)) || [];
        message.pendingPayeeships = object.pendingPayeeships?.map(e => exports.PendingPayeeship.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = ocr_1.Params.fromAmino(object.params);
        }
        message.feedConfigs = object.feed_configs?.map(e => ocr_1.FeedConfig.fromAmino(e)) || [];
        message.latestEpochAndRounds = object.latest_epoch_and_rounds?.map(e => exports.FeedEpochAndRound.fromAmino(e)) || [];
        message.feedTransmissions = object.feed_transmissions?.map(e => exports.FeedTransmission.fromAmino(e)) || [];
        message.latestAggregatorRoundIds = object.latest_aggregator_round_ids?.map(e => exports.FeedLatestAggregatorRoundIDs.fromAmino(e)) || [];
        message.rewardPools = object.reward_pools?.map(e => exports.RewardPool.fromAmino(e)) || [];
        message.feedObservationCounts = object.feed_observation_counts?.map(e => exports.FeedCounts.fromAmino(e)) || [];
        message.feedTransmissionCounts = object.feed_transmission_counts?.map(e => exports.FeedCounts.fromAmino(e)) || [];
        message.pendingPayeeships = object.pending_payeeships?.map(e => exports.PendingPayeeship.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? ocr_1.Params.toAmino(message.params) : undefined;
        if (message.feedConfigs) {
            obj.feed_configs = message.feedConfigs.map(e => e ? ocr_1.FeedConfig.toAmino(e) : undefined);
        }
        else {
            obj.feed_configs = message.feedConfigs;
        }
        if (message.latestEpochAndRounds) {
            obj.latest_epoch_and_rounds = message.latestEpochAndRounds.map(e => e ? exports.FeedEpochAndRound.toAmino(e) : undefined);
        }
        else {
            obj.latest_epoch_and_rounds = message.latestEpochAndRounds;
        }
        if (message.feedTransmissions) {
            obj.feed_transmissions = message.feedTransmissions.map(e => e ? exports.FeedTransmission.toAmino(e) : undefined);
        }
        else {
            obj.feed_transmissions = message.feedTransmissions;
        }
        if (message.latestAggregatorRoundIds) {
            obj.latest_aggregator_round_ids = message.latestAggregatorRoundIds.map(e => e ? exports.FeedLatestAggregatorRoundIDs.toAmino(e) : undefined);
        }
        else {
            obj.latest_aggregator_round_ids = message.latestAggregatorRoundIds;
        }
        if (message.rewardPools) {
            obj.reward_pools = message.rewardPools.map(e => e ? exports.RewardPool.toAmino(e) : undefined);
        }
        else {
            obj.reward_pools = message.rewardPools;
        }
        if (message.feedObservationCounts) {
            obj.feed_observation_counts = message.feedObservationCounts.map(e => e ? exports.FeedCounts.toAmino(e) : undefined);
        }
        else {
            obj.feed_observation_counts = message.feedObservationCounts;
        }
        if (message.feedTransmissionCounts) {
            obj.feed_transmission_counts = message.feedTransmissionCounts.map(e => e ? exports.FeedCounts.toAmino(e) : undefined);
        }
        else {
            obj.feed_transmission_counts = message.feedTransmissionCounts;
        }
        if (message.pendingPayeeships) {
            obj.pending_payeeships = message.pendingPayeeships.map(e => e ? exports.PendingPayeeship.toAmino(e) : undefined);
        }
        else {
            obj.pending_payeeships = message.pendingPayeeships;
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
            typeUrl: "/injective.ocr.v1beta1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
function createBaseFeedTransmission() {
    return {
        feedId: "",
        transmission: undefined
    };
}
exports.FeedTransmission = {
    typeUrl: "/injective.ocr.v1beta1.FeedTransmission",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.feedId !== "") {
            writer.uint32(10).string(message.feedId);
        }
        if (message.transmission !== undefined) {
            ocr_1.Transmission.encode(message.transmission, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFeedTransmission();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.feedId = reader.string();
                    break;
                case 2:
                    message.transmission = ocr_1.Transmission.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseFeedTransmission();
        message.feedId = object.feedId ?? "";
        message.transmission = object.transmission !== undefined && object.transmission !== null ? ocr_1.Transmission.fromPartial(object.transmission) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseFeedTransmission();
        if (object.feed_id !== undefined && object.feed_id !== null) {
            message.feedId = object.feed_id;
        }
        if (object.transmission !== undefined && object.transmission !== null) {
            message.transmission = ocr_1.Transmission.fromAmino(object.transmission);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.feed_id = message.feedId === "" ? undefined : message.feedId;
        obj.transmission = message.transmission ? ocr_1.Transmission.toAmino(message.transmission) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.FeedTransmission.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.FeedTransmission.decode(message.value);
    },
    toProto(message) {
        return exports.FeedTransmission.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.ocr.v1beta1.FeedTransmission",
            value: exports.FeedTransmission.encode(message).finish()
        };
    }
};
function createBaseFeedEpochAndRound() {
    return {
        feedId: "",
        epochAndRound: undefined
    };
}
exports.FeedEpochAndRound = {
    typeUrl: "/injective.ocr.v1beta1.FeedEpochAndRound",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.feedId !== "") {
            writer.uint32(10).string(message.feedId);
        }
        if (message.epochAndRound !== undefined) {
            ocr_1.EpochAndRound.encode(message.epochAndRound, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFeedEpochAndRound();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.feedId = reader.string();
                    break;
                case 2:
                    message.epochAndRound = ocr_1.EpochAndRound.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseFeedEpochAndRound();
        message.feedId = object.feedId ?? "";
        message.epochAndRound = object.epochAndRound !== undefined && object.epochAndRound !== null ? ocr_1.EpochAndRound.fromPartial(object.epochAndRound) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseFeedEpochAndRound();
        if (object.feed_id !== undefined && object.feed_id !== null) {
            message.feedId = object.feed_id;
        }
        if (object.epoch_and_round !== undefined && object.epoch_and_round !== null) {
            message.epochAndRound = ocr_1.EpochAndRound.fromAmino(object.epoch_and_round);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.feed_id = message.feedId === "" ? undefined : message.feedId;
        obj.epoch_and_round = message.epochAndRound ? ocr_1.EpochAndRound.toAmino(message.epochAndRound) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.FeedEpochAndRound.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.FeedEpochAndRound.decode(message.value);
    },
    toProto(message) {
        return exports.FeedEpochAndRound.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.ocr.v1beta1.FeedEpochAndRound",
            value: exports.FeedEpochAndRound.encode(message).finish()
        };
    }
};
function createBaseFeedLatestAggregatorRoundIDs() {
    return {
        feedId: "",
        aggregatorRoundId: BigInt(0)
    };
}
exports.FeedLatestAggregatorRoundIDs = {
    typeUrl: "/injective.ocr.v1beta1.FeedLatestAggregatorRoundIDs",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.feedId !== "") {
            writer.uint32(10).string(message.feedId);
        }
        if (message.aggregatorRoundId !== BigInt(0)) {
            writer.uint32(16).uint64(message.aggregatorRoundId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFeedLatestAggregatorRoundIDs();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.feedId = reader.string();
                    break;
                case 2:
                    message.aggregatorRoundId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseFeedLatestAggregatorRoundIDs();
        message.feedId = object.feedId ?? "";
        message.aggregatorRoundId = object.aggregatorRoundId !== undefined && object.aggregatorRoundId !== null ? BigInt(object.aggregatorRoundId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseFeedLatestAggregatorRoundIDs();
        if (object.feed_id !== undefined && object.feed_id !== null) {
            message.feedId = object.feed_id;
        }
        if (object.aggregator_round_id !== undefined && object.aggregator_round_id !== null) {
            message.aggregatorRoundId = BigInt(object.aggregator_round_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.feed_id = message.feedId === "" ? undefined : message.feedId;
        obj.aggregator_round_id = message.aggregatorRoundId !== BigInt(0) ? (message.aggregatorRoundId?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.FeedLatestAggregatorRoundIDs.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.FeedLatestAggregatorRoundIDs.decode(message.value);
    },
    toProto(message) {
        return exports.FeedLatestAggregatorRoundIDs.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.ocr.v1beta1.FeedLatestAggregatorRoundIDs",
            value: exports.FeedLatestAggregatorRoundIDs.encode(message).finish()
        };
    }
};
function createBaseRewardPool() {
    return {
        feedId: "",
        amount: coin_1.Coin.fromPartial({})
    };
}
exports.RewardPool = {
    typeUrl: "/injective.ocr.v1beta1.RewardPool",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.feedId !== "") {
            writer.uint32(10).string(message.feedId);
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRewardPool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.feedId = reader.string();
                    break;
                case 2:
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseRewardPool();
        message.feedId = object.feedId ?? "";
        message.amount = object.amount !== undefined && object.amount !== null ? coin_1.Coin.fromPartial(object.amount) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseRewardPool();
        if (object.feed_id !== undefined && object.feed_id !== null) {
            message.feedId = object.feed_id;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = coin_1.Coin.fromAmino(object.amount);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.feed_id = message.feedId === "" ? undefined : message.feedId;
        obj.amount = message.amount ? coin_1.Coin.toAmino(message.amount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RewardPool.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.RewardPool.decode(message.value);
    },
    toProto(message) {
        return exports.RewardPool.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.ocr.v1beta1.RewardPool",
            value: exports.RewardPool.encode(message).finish()
        };
    }
};
function createBaseFeedCounts() {
    return {
        feedId: "",
        counts: []
    };
}
exports.FeedCounts = {
    typeUrl: "/injective.ocr.v1beta1.FeedCounts",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.feedId !== "") {
            writer.uint32(10).string(message.feedId);
        }
        for (const v of message.counts) {
            exports.Count.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFeedCounts();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.feedId = reader.string();
                    break;
                case 2:
                    message.counts.push(exports.Count.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseFeedCounts();
        message.feedId = object.feedId ?? "";
        message.counts = object.counts?.map(e => exports.Count.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseFeedCounts();
        if (object.feed_id !== undefined && object.feed_id !== null) {
            message.feedId = object.feed_id;
        }
        message.counts = object.counts?.map(e => exports.Count.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.feed_id = message.feedId === "" ? undefined : message.feedId;
        if (message.counts) {
            obj.counts = message.counts.map(e => e ? exports.Count.toAmino(e) : undefined);
        }
        else {
            obj.counts = message.counts;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.FeedCounts.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.FeedCounts.decode(message.value);
    },
    toProto(message) {
        return exports.FeedCounts.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.ocr.v1beta1.FeedCounts",
            value: exports.FeedCounts.encode(message).finish()
        };
    }
};
function createBaseCount() {
    return {
        address: "",
        count: BigInt(0)
    };
}
exports.Count = {
    typeUrl: "/injective.ocr.v1beta1.Count",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.count !== BigInt(0)) {
            writer.uint32(16).uint64(message.count);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.count = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCount();
        message.address = object.address ?? "";
        message.count = object.count !== undefined && object.count !== null ? BigInt(object.count.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseCount();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.count !== undefined && object.count !== null) {
            message.count = BigInt(object.count);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        obj.count = message.count !== BigInt(0) ? (message.count?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Count.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Count.decode(message.value);
    },
    toProto(message) {
        return exports.Count.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.ocr.v1beta1.Count",
            value: exports.Count.encode(message).finish()
        };
    }
};
function createBasePendingPayeeship() {
    return {
        feedId: "",
        transmitter: "",
        proposedPayee: ""
    };
}
exports.PendingPayeeship = {
    typeUrl: "/injective.ocr.v1beta1.PendingPayeeship",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.feedId !== "") {
            writer.uint32(10).string(message.feedId);
        }
        if (message.transmitter !== "") {
            writer.uint32(18).string(message.transmitter);
        }
        if (message.proposedPayee !== "") {
            writer.uint32(26).string(message.proposedPayee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePendingPayeeship();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.feedId = reader.string();
                    break;
                case 2:
                    message.transmitter = reader.string();
                    break;
                case 3:
                    message.proposedPayee = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePendingPayeeship();
        message.feedId = object.feedId ?? "";
        message.transmitter = object.transmitter ?? "";
        message.proposedPayee = object.proposedPayee ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBasePendingPayeeship();
        if (object.feed_id !== undefined && object.feed_id !== null) {
            message.feedId = object.feed_id;
        }
        if (object.transmitter !== undefined && object.transmitter !== null) {
            message.transmitter = object.transmitter;
        }
        if (object.proposed_payee !== undefined && object.proposed_payee !== null) {
            message.proposedPayee = object.proposed_payee;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.feed_id = message.feedId === "" ? undefined : message.feedId;
        obj.transmitter = message.transmitter === "" ? undefined : message.transmitter;
        obj.proposed_payee = message.proposedPayee === "" ? undefined : message.proposedPayee;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PendingPayeeship.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.PendingPayeeship.decode(message.value);
    },
    toProto(message) {
        return exports.PendingPayeeship.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.ocr.v1beta1.PendingPayeeship",
            value: exports.PendingPayeeship.encode(message).finish()
        };
    }
};
