//@ts-nocheck
import { Params, FeedConfig, Transmission, EpochAndRound } from "./ocr";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseGenesisState() {
    return {
        params: Params.fromPartial({}),
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
export const GenesisState = {
    typeUrl: "/injective.ocr.v1beta1.GenesisState",
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.feedConfigs) {
            FeedConfig.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.latestEpochAndRounds) {
            FeedEpochAndRound.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.feedTransmissions) {
            FeedTransmission.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.latestAggregatorRoundIds) {
            FeedLatestAggregatorRoundIDs.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.rewardPools) {
            RewardPool.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.feedObservationCounts) {
            FeedCounts.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.feedTransmissionCounts) {
            FeedCounts.encode(v, writer.uint32(66).fork()).ldelim();
        }
        for (const v of message.pendingPayeeships) {
            PendingPayeeship.encode(v, writer.uint32(74).fork()).ldelim();
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
                    message.feedConfigs.push(FeedConfig.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.latestEpochAndRounds.push(FeedEpochAndRound.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.feedTransmissions.push(FeedTransmission.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.latestAggregatorRoundIds.push(FeedLatestAggregatorRoundIDs.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.rewardPools.push(RewardPool.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.feedObservationCounts.push(FeedCounts.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.feedTransmissionCounts.push(FeedCounts.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.pendingPayeeships.push(PendingPayeeship.decode(reader, reader.uint32()));
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
        message.feedConfigs = object.feedConfigs?.map(e => FeedConfig.fromPartial(e)) || [];
        message.latestEpochAndRounds = object.latestEpochAndRounds?.map(e => FeedEpochAndRound.fromPartial(e)) || [];
        message.feedTransmissions = object.feedTransmissions?.map(e => FeedTransmission.fromPartial(e)) || [];
        message.latestAggregatorRoundIds = object.latestAggregatorRoundIds?.map(e => FeedLatestAggregatorRoundIDs.fromPartial(e)) || [];
        message.rewardPools = object.rewardPools?.map(e => RewardPool.fromPartial(e)) || [];
        message.feedObservationCounts = object.feedObservationCounts?.map(e => FeedCounts.fromPartial(e)) || [];
        message.feedTransmissionCounts = object.feedTransmissionCounts?.map(e => FeedCounts.fromPartial(e)) || [];
        message.pendingPayeeships = object.pendingPayeeships?.map(e => PendingPayeeship.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        message.feedConfigs = object.feed_configs?.map(e => FeedConfig.fromAmino(e)) || [];
        message.latestEpochAndRounds = object.latest_epoch_and_rounds?.map(e => FeedEpochAndRound.fromAmino(e)) || [];
        message.feedTransmissions = object.feed_transmissions?.map(e => FeedTransmission.fromAmino(e)) || [];
        message.latestAggregatorRoundIds = object.latest_aggregator_round_ids?.map(e => FeedLatestAggregatorRoundIDs.fromAmino(e)) || [];
        message.rewardPools = object.reward_pools?.map(e => RewardPool.fromAmino(e)) || [];
        message.feedObservationCounts = object.feed_observation_counts?.map(e => FeedCounts.fromAmino(e)) || [];
        message.feedTransmissionCounts = object.feed_transmission_counts?.map(e => FeedCounts.fromAmino(e)) || [];
        message.pendingPayeeships = object.pending_payeeships?.map(e => PendingPayeeship.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        if (message.feedConfigs) {
            obj.feed_configs = message.feedConfigs.map(e => e ? FeedConfig.toAmino(e) : undefined);
        }
        else {
            obj.feed_configs = message.feedConfigs;
        }
        if (message.latestEpochAndRounds) {
            obj.latest_epoch_and_rounds = message.latestEpochAndRounds.map(e => e ? FeedEpochAndRound.toAmino(e) : undefined);
        }
        else {
            obj.latest_epoch_and_rounds = message.latestEpochAndRounds;
        }
        if (message.feedTransmissions) {
            obj.feed_transmissions = message.feedTransmissions.map(e => e ? FeedTransmission.toAmino(e) : undefined);
        }
        else {
            obj.feed_transmissions = message.feedTransmissions;
        }
        if (message.latestAggregatorRoundIds) {
            obj.latest_aggregator_round_ids = message.latestAggregatorRoundIds.map(e => e ? FeedLatestAggregatorRoundIDs.toAmino(e) : undefined);
        }
        else {
            obj.latest_aggregator_round_ids = message.latestAggregatorRoundIds;
        }
        if (message.rewardPools) {
            obj.reward_pools = message.rewardPools.map(e => e ? RewardPool.toAmino(e) : undefined);
        }
        else {
            obj.reward_pools = message.rewardPools;
        }
        if (message.feedObservationCounts) {
            obj.feed_observation_counts = message.feedObservationCounts.map(e => e ? FeedCounts.toAmino(e) : undefined);
        }
        else {
            obj.feed_observation_counts = message.feedObservationCounts;
        }
        if (message.feedTransmissionCounts) {
            obj.feed_transmission_counts = message.feedTransmissionCounts.map(e => e ? FeedCounts.toAmino(e) : undefined);
        }
        else {
            obj.feed_transmission_counts = message.feedTransmissionCounts;
        }
        if (message.pendingPayeeships) {
            obj.pending_payeeships = message.pendingPayeeships.map(e => e ? PendingPayeeship.toAmino(e) : undefined);
        }
        else {
            obj.pending_payeeships = message.pendingPayeeships;
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
            typeUrl: "/injective.ocr.v1beta1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
function createBaseFeedTransmission() {
    return {
        feedId: "",
        transmission: undefined
    };
}
export const FeedTransmission = {
    typeUrl: "/injective.ocr.v1beta1.FeedTransmission",
    encode(message, writer = BinaryWriter.create()) {
        if (message.feedId !== "") {
            writer.uint32(10).string(message.feedId);
        }
        if (message.transmission !== undefined) {
            Transmission.encode(message.transmission, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFeedTransmission();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.feedId = reader.string();
                    break;
                case 2:
                    message.transmission = Transmission.decode(reader, reader.uint32());
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
        message.transmission = object.transmission !== undefined && object.transmission !== null ? Transmission.fromPartial(object.transmission) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseFeedTransmission();
        if (object.feed_id !== undefined && object.feed_id !== null) {
            message.feedId = object.feed_id;
        }
        if (object.transmission !== undefined && object.transmission !== null) {
            message.transmission = Transmission.fromAmino(object.transmission);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.feed_id = message.feedId === "" ? undefined : message.feedId;
        obj.transmission = message.transmission ? Transmission.toAmino(message.transmission) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return FeedTransmission.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return FeedTransmission.decode(message.value);
    },
    toProto(message) {
        return FeedTransmission.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.ocr.v1beta1.FeedTransmission",
            value: FeedTransmission.encode(message).finish()
        };
    }
};
function createBaseFeedEpochAndRound() {
    return {
        feedId: "",
        epochAndRound: undefined
    };
}
export const FeedEpochAndRound = {
    typeUrl: "/injective.ocr.v1beta1.FeedEpochAndRound",
    encode(message, writer = BinaryWriter.create()) {
        if (message.feedId !== "") {
            writer.uint32(10).string(message.feedId);
        }
        if (message.epochAndRound !== undefined) {
            EpochAndRound.encode(message.epochAndRound, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFeedEpochAndRound();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.feedId = reader.string();
                    break;
                case 2:
                    message.epochAndRound = EpochAndRound.decode(reader, reader.uint32());
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
        message.epochAndRound = object.epochAndRound !== undefined && object.epochAndRound !== null ? EpochAndRound.fromPartial(object.epochAndRound) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseFeedEpochAndRound();
        if (object.feed_id !== undefined && object.feed_id !== null) {
            message.feedId = object.feed_id;
        }
        if (object.epoch_and_round !== undefined && object.epoch_and_round !== null) {
            message.epochAndRound = EpochAndRound.fromAmino(object.epoch_and_round);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.feed_id = message.feedId === "" ? undefined : message.feedId;
        obj.epoch_and_round = message.epochAndRound ? EpochAndRound.toAmino(message.epochAndRound) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return FeedEpochAndRound.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return FeedEpochAndRound.decode(message.value);
    },
    toProto(message) {
        return FeedEpochAndRound.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.ocr.v1beta1.FeedEpochAndRound",
            value: FeedEpochAndRound.encode(message).finish()
        };
    }
};
function createBaseFeedLatestAggregatorRoundIDs() {
    return {
        feedId: "",
        aggregatorRoundId: BigInt(0)
    };
}
export const FeedLatestAggregatorRoundIDs = {
    typeUrl: "/injective.ocr.v1beta1.FeedLatestAggregatorRoundIDs",
    encode(message, writer = BinaryWriter.create()) {
        if (message.feedId !== "") {
            writer.uint32(10).string(message.feedId);
        }
        if (message.aggregatorRoundId !== BigInt(0)) {
            writer.uint32(16).uint64(message.aggregatorRoundId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return FeedLatestAggregatorRoundIDs.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return FeedLatestAggregatorRoundIDs.decode(message.value);
    },
    toProto(message) {
        return FeedLatestAggregatorRoundIDs.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.ocr.v1beta1.FeedLatestAggregatorRoundIDs",
            value: FeedLatestAggregatorRoundIDs.encode(message).finish()
        };
    }
};
function createBaseRewardPool() {
    return {
        feedId: "",
        amount: Coin.fromPartial({})
    };
}
export const RewardPool = {
    typeUrl: "/injective.ocr.v1beta1.RewardPool",
    encode(message, writer = BinaryWriter.create()) {
        if (message.feedId !== "") {
            writer.uint32(10).string(message.feedId);
        }
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRewardPool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.feedId = reader.string();
                    break;
                case 2:
                    message.amount = Coin.decode(reader, reader.uint32());
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
        message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseRewardPool();
        if (object.feed_id !== undefined && object.feed_id !== null) {
            message.feedId = object.feed_id;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Coin.fromAmino(object.amount);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.feed_id = message.feedId === "" ? undefined : message.feedId;
        obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return RewardPool.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RewardPool.decode(message.value);
    },
    toProto(message) {
        return RewardPool.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.ocr.v1beta1.RewardPool",
            value: RewardPool.encode(message).finish()
        };
    }
};
function createBaseFeedCounts() {
    return {
        feedId: "",
        counts: []
    };
}
export const FeedCounts = {
    typeUrl: "/injective.ocr.v1beta1.FeedCounts",
    encode(message, writer = BinaryWriter.create()) {
        if (message.feedId !== "") {
            writer.uint32(10).string(message.feedId);
        }
        for (const v of message.counts) {
            Count.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFeedCounts();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.feedId = reader.string();
                    break;
                case 2:
                    message.counts.push(Count.decode(reader, reader.uint32()));
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
        message.counts = object.counts?.map(e => Count.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseFeedCounts();
        if (object.feed_id !== undefined && object.feed_id !== null) {
            message.feedId = object.feed_id;
        }
        message.counts = object.counts?.map(e => Count.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.feed_id = message.feedId === "" ? undefined : message.feedId;
        if (message.counts) {
            obj.counts = message.counts.map(e => e ? Count.toAmino(e) : undefined);
        }
        else {
            obj.counts = message.counts;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return FeedCounts.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return FeedCounts.decode(message.value);
    },
    toProto(message) {
        return FeedCounts.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.ocr.v1beta1.FeedCounts",
            value: FeedCounts.encode(message).finish()
        };
    }
};
function createBaseCount() {
    return {
        address: "",
        count: BigInt(0)
    };
}
export const Count = {
    typeUrl: "/injective.ocr.v1beta1.Count",
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.count !== BigInt(0)) {
            writer.uint32(16).uint64(message.count);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return Count.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Count.decode(message.value);
    },
    toProto(message) {
        return Count.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.ocr.v1beta1.Count",
            value: Count.encode(message).finish()
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
export const PendingPayeeship = {
    typeUrl: "/injective.ocr.v1beta1.PendingPayeeship",
    encode(message, writer = BinaryWriter.create()) {
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return PendingPayeeship.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return PendingPayeeship.decode(message.value);
    },
    toProto(message) {
        return PendingPayeeship.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/injective.ocr.v1beta1.PendingPayeeship",
            value: PendingPayeeship.encode(message).finish()
        };
    }
};
