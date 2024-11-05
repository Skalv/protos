//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
function createBaseMinter() {
    return {
        epochProvisions: ""
    };
}
export const Minter = {
    typeUrl: "/osmosis.mint.v1beta1.Minter",
    encode(message, writer = BinaryWriter.create()) {
        if (message.epochProvisions !== "") {
            writer.uint32(10).string(Decimal.fromUserInput(message.epochProvisions, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMinter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.epochProvisions = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMinter();
        message.epochProvisions = object.epochProvisions ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMinter();
        if (object.epoch_provisions !== undefined && object.epoch_provisions !== null) {
            message.epochProvisions = object.epoch_provisions;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.epoch_provisions = message.epochProvisions === "" ? undefined : message.epochProvisions;
        return obj;
    },
    fromAminoMsg(object) {
        return Minter.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/mint/minter",
            value: Minter.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Minter.decode(message.value);
    },
    toProto(message) {
        return Minter.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.mint.v1beta1.Minter",
            value: Minter.encode(message).finish()
        };
    }
};
function createBaseWeightedAddress() {
    return {
        address: "",
        weight: ""
    };
}
export const WeightedAddress = {
    typeUrl: "/osmosis.mint.v1beta1.WeightedAddress",
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
    toAminoMsg(message) {
        return {
            type: "osmosis/mint/weighted-address",
            value: WeightedAddress.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return WeightedAddress.decode(message.value);
    },
    toProto(message) {
        return WeightedAddress.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.mint.v1beta1.WeightedAddress",
            value: WeightedAddress.encode(message).finish()
        };
    }
};
function createBaseDistributionProportions() {
    return {
        staking: "",
        poolIncentives: "",
        developerRewards: "",
        communityPool: ""
    };
}
export const DistributionProportions = {
    typeUrl: "/osmosis.mint.v1beta1.DistributionProportions",
    encode(message, writer = BinaryWriter.create()) {
        if (message.staking !== "") {
            writer.uint32(10).string(Decimal.fromUserInput(message.staking, 18).atomics);
        }
        if (message.poolIncentives !== "") {
            writer.uint32(18).string(Decimal.fromUserInput(message.poolIncentives, 18).atomics);
        }
        if (message.developerRewards !== "") {
            writer.uint32(26).string(Decimal.fromUserInput(message.developerRewards, 18).atomics);
        }
        if (message.communityPool !== "") {
            writer.uint32(34).string(Decimal.fromUserInput(message.communityPool, 18).atomics);
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
                    message.staking = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 2:
                    message.poolIncentives = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 3:
                    message.developerRewards = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 4:
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
        message.staking = object.staking ?? "";
        message.poolIncentives = object.poolIncentives ?? "";
        message.developerRewards = object.developerRewards ?? "";
        message.communityPool = object.communityPool ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseDistributionProportions();
        if (object.staking !== undefined && object.staking !== null) {
            message.staking = object.staking;
        }
        if (object.pool_incentives !== undefined && object.pool_incentives !== null) {
            message.poolIncentives = object.pool_incentives;
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
        obj.staking = message.staking === "" ? undefined : message.staking;
        obj.pool_incentives = message.poolIncentives === "" ? undefined : message.poolIncentives;
        obj.developer_rewards = message.developerRewards === "" ? undefined : message.developerRewards;
        obj.community_pool = message.communityPool === "" ? undefined : message.communityPool;
        return obj;
    },
    fromAminoMsg(object) {
        return DistributionProportions.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/mint/distribution-proportions",
            value: DistributionProportions.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return DistributionProportions.decode(message.value);
    },
    toProto(message) {
        return DistributionProportions.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.mint.v1beta1.DistributionProportions",
            value: DistributionProportions.encode(message).finish()
        };
    }
};
function createBaseParams() {
    return {
        mintDenom: "",
        genesisEpochProvisions: "",
        epochIdentifier: "",
        reductionPeriodInEpochs: BigInt(0),
        reductionFactor: "",
        distributionProportions: DistributionProportions.fromPartial({}),
        weightedDeveloperRewardsReceivers: [],
        mintingRewardsDistributionStartEpoch: BigInt(0)
    };
}
export const Params = {
    typeUrl: "/osmosis.mint.v1beta1.Params",
    encode(message, writer = BinaryWriter.create()) {
        if (message.mintDenom !== "") {
            writer.uint32(10).string(message.mintDenom);
        }
        if (message.genesisEpochProvisions !== "") {
            writer.uint32(18).string(Decimal.fromUserInput(message.genesisEpochProvisions, 18).atomics);
        }
        if (message.epochIdentifier !== "") {
            writer.uint32(26).string(message.epochIdentifier);
        }
        if (message.reductionPeriodInEpochs !== BigInt(0)) {
            writer.uint32(32).int64(message.reductionPeriodInEpochs);
        }
        if (message.reductionFactor !== "") {
            writer.uint32(42).string(Decimal.fromUserInput(message.reductionFactor, 18).atomics);
        }
        if (message.distributionProportions !== undefined) {
            DistributionProportions.encode(message.distributionProportions, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.weightedDeveloperRewardsReceivers) {
            WeightedAddress.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.mintingRewardsDistributionStartEpoch !== BigInt(0)) {
            writer.uint32(64).int64(message.mintingRewardsDistributionStartEpoch);
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
                    message.mintDenom = reader.string();
                    break;
                case 2:
                    message.genesisEpochProvisions = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 3:
                    message.epochIdentifier = reader.string();
                    break;
                case 4:
                    message.reductionPeriodInEpochs = reader.int64();
                    break;
                case 5:
                    message.reductionFactor = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 6:
                    message.distributionProportions = DistributionProportions.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.weightedDeveloperRewardsReceivers.push(WeightedAddress.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.mintingRewardsDistributionStartEpoch = reader.int64();
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
        message.mintDenom = object.mintDenom ?? "";
        message.genesisEpochProvisions = object.genesisEpochProvisions ?? "";
        message.epochIdentifier = object.epochIdentifier ?? "";
        message.reductionPeriodInEpochs = object.reductionPeriodInEpochs !== undefined && object.reductionPeriodInEpochs !== null ? BigInt(object.reductionPeriodInEpochs.toString()) : BigInt(0);
        message.reductionFactor = object.reductionFactor ?? "";
        message.distributionProportions = object.distributionProportions !== undefined && object.distributionProportions !== null ? DistributionProportions.fromPartial(object.distributionProportions) : undefined;
        message.weightedDeveloperRewardsReceivers = object.weightedDeveloperRewardsReceivers?.map(e => WeightedAddress.fromPartial(e)) || [];
        message.mintingRewardsDistributionStartEpoch = object.mintingRewardsDistributionStartEpoch !== undefined && object.mintingRewardsDistributionStartEpoch !== null ? BigInt(object.mintingRewardsDistributionStartEpoch.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.mint_denom !== undefined && object.mint_denom !== null) {
            message.mintDenom = object.mint_denom;
        }
        if (object.genesis_epoch_provisions !== undefined && object.genesis_epoch_provisions !== null) {
            message.genesisEpochProvisions = object.genesis_epoch_provisions;
        }
        if (object.epoch_identifier !== undefined && object.epoch_identifier !== null) {
            message.epochIdentifier = object.epoch_identifier;
        }
        if (object.reduction_period_in_epochs !== undefined && object.reduction_period_in_epochs !== null) {
            message.reductionPeriodInEpochs = BigInt(object.reduction_period_in_epochs);
        }
        if (object.reduction_factor !== undefined && object.reduction_factor !== null) {
            message.reductionFactor = object.reduction_factor;
        }
        if (object.distribution_proportions !== undefined && object.distribution_proportions !== null) {
            message.distributionProportions = DistributionProportions.fromAmino(object.distribution_proportions);
        }
        message.weightedDeveloperRewardsReceivers = object.weighted_developer_rewards_receivers?.map(e => WeightedAddress.fromAmino(e)) || [];
        if (object.minting_rewards_distribution_start_epoch !== undefined && object.minting_rewards_distribution_start_epoch !== null) {
            message.mintingRewardsDistributionStartEpoch = BigInt(object.minting_rewards_distribution_start_epoch);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.mint_denom = message.mintDenom === "" ? undefined : message.mintDenom;
        obj.genesis_epoch_provisions = message.genesisEpochProvisions === "" ? undefined : message.genesisEpochProvisions;
        obj.epoch_identifier = message.epochIdentifier === "" ? undefined : message.epochIdentifier;
        obj.reduction_period_in_epochs = message.reductionPeriodInEpochs !== BigInt(0) ? (message.reductionPeriodInEpochs?.toString)() : undefined;
        obj.reduction_factor = message.reductionFactor === "" ? undefined : message.reductionFactor;
        obj.distribution_proportions = message.distributionProportions ? DistributionProportions.toAmino(message.distributionProportions) : undefined;
        if (message.weightedDeveloperRewardsReceivers) {
            obj.weighted_developer_rewards_receivers = message.weightedDeveloperRewardsReceivers.map(e => e ? WeightedAddress.toAmino(e) : undefined);
        }
        else {
            obj.weighted_developer_rewards_receivers = message.weightedDeveloperRewardsReceivers;
        }
        obj.minting_rewards_distribution_start_epoch = message.mintingRewardsDistributionStartEpoch !== BigInt(0) ? (message.mintingRewardsDistributionStartEpoch?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/mint/params",
            value: Params.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Params.decode(message.value);
    },
    toProto(message) {
        return Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.mint.v1beta1.Params",
            value: Params.encode(message).finish()
        };
    }
};
