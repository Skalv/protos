//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
function createBaseWeightedAddress() {
    return {
        address: "",
        weight: ""
    };
}
export const WeightedAddress = {
    typeUrl: "/omniflix.alloc.v1beta1.WeightedAddress",
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.weight !== "") {
            writer.uint32(18).string(Decimal.fromUserInput(message.weight, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWeightedAddress();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.weight = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseWeightedAddress();
        message.address = object.address ?? "";
        message.weight = object.weight ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseWeightedAddress();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.weight !== undefined && object.weight !== null) {
            message.weight = object.weight;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        obj.weight = message.weight === "" ? undefined : message.weight;
        return obj;
    },
    fromAminoMsg(object) {
        return WeightedAddress.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return WeightedAddress.decode(message.value);
    },
    toProto(message) {
        return WeightedAddress.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/omniflix.alloc.v1beta1.WeightedAddress",
            value: WeightedAddress.encode(message).finish()
        };
    }
};
function createBaseDistributionProportions() {
    return {
        stakingRewards: "",
        nftIncentives: "",
        nodeHostsIncentives: "",
        developerRewards: "",
        communityPool: ""
    };
}
export const DistributionProportions = {
    typeUrl: "/omniflix.alloc.v1beta1.DistributionProportions",
    encode(message, writer = BinaryWriter.create()) {
        if (message.stakingRewards !== "") {
            writer.uint32(10).string(Decimal.fromUserInput(message.stakingRewards, 18).atomics);
        }
        if (message.nftIncentives !== "") {
            writer.uint32(18).string(Decimal.fromUserInput(message.nftIncentives, 18).atomics);
        }
        if (message.nodeHostsIncentives !== "") {
            writer.uint32(26).string(Decimal.fromUserInput(message.nodeHostsIncentives, 18).atomics);
        }
        if (message.developerRewards !== "") {
            writer.uint32(34).string(Decimal.fromUserInput(message.developerRewards, 18).atomics);
        }
        if (message.communityPool !== "") {
            writer.uint32(42).string(Decimal.fromUserInput(message.communityPool, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDistributionProportions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.stakingRewards = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 2:
                    message.nftIncentives = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 3:
                    message.nodeHostsIncentives = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 4:
                    message.developerRewards = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 5:
                    message.communityPool = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDistributionProportions();
        message.stakingRewards = object.stakingRewards ?? "";
        message.nftIncentives = object.nftIncentives ?? "";
        message.nodeHostsIncentives = object.nodeHostsIncentives ?? "";
        message.developerRewards = object.developerRewards ?? "";
        message.communityPool = object.communityPool ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseDistributionProportions();
        if (object.staking_rewards !== undefined && object.staking_rewards !== null) {
            message.stakingRewards = object.staking_rewards;
        }
        if (object.nft_incentives !== undefined && object.nft_incentives !== null) {
            message.nftIncentives = object.nft_incentives;
        }
        if (object.node_hosts_incentives !== undefined && object.node_hosts_incentives !== null) {
            message.nodeHostsIncentives = object.node_hosts_incentives;
        }
        if (object.developer_rewards !== undefined && object.developer_rewards !== null) {
            message.developerRewards = object.developer_rewards;
        }
        if (object.community_pool !== undefined && object.community_pool !== null) {
            message.communityPool = object.community_pool;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.staking_rewards = message.stakingRewards === "" ? undefined : message.stakingRewards;
        obj.nft_incentives = message.nftIncentives === "" ? undefined : message.nftIncentives;
        obj.node_hosts_incentives = message.nodeHostsIncentives === "" ? undefined : message.nodeHostsIncentives;
        obj.developer_rewards = message.developerRewards === "" ? undefined : message.developerRewards;
        obj.community_pool = message.communityPool === "" ? undefined : message.communityPool;
        return obj;
    },
    fromAminoMsg(object) {
        return DistributionProportions.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return DistributionProportions.decode(message.value);
    },
    toProto(message) {
        return DistributionProportions.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/omniflix.alloc.v1beta1.DistributionProportions",
            value: DistributionProportions.encode(message).finish()
        };
    }
};
function createBaseParams() {
    return {
        distributionProportions: DistributionProportions.fromPartial({}),
        weightedDeveloperRewardsReceivers: []
    };
}
export const Params = {
    typeUrl: "/omniflix.alloc.v1beta1.Params",
    encode(message, writer = BinaryWriter.create()) {
        if (message.distributionProportions !== undefined) {
            DistributionProportions.encode(message.distributionProportions, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.weightedDeveloperRewardsReceivers) {
            WeightedAddress.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.distributionProportions = DistributionProportions.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.weightedDeveloperRewardsReceivers.push(WeightedAddress.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.distributionProportions = object.distributionProportions !== undefined && object.distributionProportions !== null ? DistributionProportions.fromPartial(object.distributionProportions) : undefined;
        message.weightedDeveloperRewardsReceivers = object.weightedDeveloperRewardsReceivers?.map(e => WeightedAddress.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.distribution_proportions !== undefined && object.distribution_proportions !== null) {
            message.distributionProportions = DistributionProportions.fromAmino(object.distribution_proportions);
        }
        message.weightedDeveloperRewardsReceivers = object.weighted_developer_rewards_receivers?.map(e => WeightedAddress.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.distribution_proportions = message.distributionProportions ? DistributionProportions.toAmino(message.distributionProportions) : undefined;
        if (message.weightedDeveloperRewardsReceivers) {
            obj.weighted_developer_rewards_receivers = message.weightedDeveloperRewardsReceivers.map(e => e ? WeightedAddress.toAmino(e) : undefined);
        }
        else {
            obj.weighted_developer_rewards_receivers = message.weightedDeveloperRewardsReceivers;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return Params.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Params.decode(message.value);
    },
    toProto(message) {
        return Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/omniflix.alloc.v1beta1.Params",
            value: Params.encode(message).finish()
        };
    }
};
